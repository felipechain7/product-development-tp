// Recibe los avisos de Mercado Pago (y la verificación que hace la página al volver del pago).
// Nunca confía en lo que llega: consulta el pago a la API de Mercado Pago y recién ahí
// marca el pedido como pagado, si el pago está aprobado y el monto coincide.
import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const MP_TOKEN = Deno.env.get("MP_ACCESS_TOKEN");

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};
const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { ...CORS, "Content-Type": "application/json" } });

const db = (path: string, init: RequestInit = {}) =>
  fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...init,
    headers: { apikey: SERVICE_KEY, Authorization: `Bearer ${SERVICE_KEY}`, "Content-Type": "application/json" },
  });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (!MP_TOKEN) return json({ ok: false, error: "Falta configurar Mercado Pago" }, 503);

  // Buscar el id del pago en las distintas formas en que puede llegar.
  const url = new URL(req.url);
  let body: Record<string, any> = {};
  if (req.method === "POST") { try { body = await req.json(); } catch { body = {}; } }
  const tipo = body.type ?? body.topic ?? url.searchParams.get("type") ?? url.searchParams.get("topic") ?? "";
  const paymentId = String(
    body.payment_id ??
    (String(tipo).startsWith("payment") ? (body.data?.id ?? url.searchParams.get("data.id") ?? url.searchParams.get("id")) : "") ??
    "",
  ).trim();
  if (!/^\d+$/.test(paymentId)) return json({ ok: true, ignorado: true });

  const r = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
    headers: { Authorization: `Bearer ${MP_TOKEN}` },
  });
  if (!r.ok) { console.error("No se pudo consultar el pago", paymentId, r.status); return json({ ok: false }, 200); }
  const pago = await r.json();
  const pedidoId = Number(pago.external_reference);
  if (pago.status !== "approved" || !Number.isInteger(pedidoId)) return json({ ok: true, estado_pago: pago.status });

  const rp = await db(`pedidos?id=eq.${pedidoId}&select=id,total,estado`);
  const [pedido] = await rp.json();
  if (!pedido) return json({ ok: false, error: "Pedido inexistente" });
  if (Math.round(Number(pago.transaction_amount)) !== pedido.total) {
    console.error("Monto distinto", pedidoId, pago.transaction_amount, pedido.total);
    return json({ ok: false, error: "El monto no coincide" });
  }
  const rc = await db("rpc/confirmar_pago", { method: "POST", body: JSON.stringify({ p_id: pedidoId, p_payment_id: paymentId }) });
  return json({ ok: rc.ok, estado_pago: "approved" });
});
