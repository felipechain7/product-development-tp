// Crea el pedido como "pendiente de pago" y la preferencia de Mercado Pago (Checkout Pro).
// El total se calcula acá con el menú, no se confía en lo que manda el celular.
// Secretos necesarios (Supabase > Edge Functions > Secrets): MP_ACCESS_TOKEN.
import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const SITE_URL = Deno.env.get("SITE_URL") ?? "https://felipechain7.github.io/product-development-tp/mvp/";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const MP_TOKEN = Deno.env.get("MP_ACCESS_TOKEN");

const MENU: Record<string, { nombre: string; precio: number; plato?: boolean; empanada?: boolean; combo?: boolean }> = {
  bondiola:   { nombre: "Sándwich de bondiola",          precio: 17000, plato: true },
  bife:       { nombre: "Sándwich de bife de chorizo",   precio: 19000, plato: true },
  choripan:   { nombre: "Choripán",                      precio: 10000, plato: true },
  tostado:    { nombre: "Tostado",                       precio: 12000, plato: true },
  hamb:       { nombre: "Hamburguesa con queso",         precio: 8000,  plato: true },
  hamb_papas: { nombre: "Hamburguesa con queso y papas", precio: 10500, plato: true },
  wrap_pollo: { nombre: "Wrap de pollo",                 precio: 18000, plato: true },
  wrap_atun:  { nombre: "Wrap de atún",                  precio: 18000, plato: true },
  wrap_bond:  { nombre: "Wrap de bondiola",              precio: 18000, plato: true },
  emp_carne:  { nombre: "Empanada de carne",             precio: 4000, empanada: true },
  emp_jyq:    { nombre: "Empanada de jamón y queso",     precio: 4000, empanada: true },
  bebida:     { nombre: "Bebida",                        precio: 4000 },
  combo:      { nombre: "Bebida en combo",               precio: 2000, combo: true },
};

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { ...CORS, "Content-Type": "application/json" } });

async function rpc(fn: string, args: unknown) {
  const r = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${fn}`, {
    method: "POST",
    headers: { apikey: SERVICE_KEY, Authorization: `Bearer ${SERVICE_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify(args),
  });
  const txt = await r.text();
  if (!r.ok) throw new Error(JSON.parse(txt || "{}").message ?? "Error de base de datos");
  return txt ? JSON.parse(txt) : null;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "Método no permitido" }, 405);
  if (!MP_TOKEN) return json({ error: "Falta configurar Mercado Pago en el servidor" }, 503);

  let body: { nombre?: string; items?: Record<string, number> };
  try { body = await req.json(); } catch { return json({ error: "Pedido inválido" }, 400); }

  const nombre = String(body.nombre ?? "").trim().slice(0, 30);
  if (!nombre) return json({ error: "Falta el nombre" }, 400);

  // Validar cantidades y armar el detalle con los precios del servidor.
  const items = body.items ?? {};
  const cant: Record<string, number> = {};
  for (const [id, n] of Object.entries(items)) {
    const q = Number(n);
    if (!MENU[id] || !Number.isInteger(q) || q < 0 || q > 9) return json({ error: "Producto o cantidad inválida" }, 400);
    if (q > 0) cant[id] = q;
  }
  const platos = Object.entries(cant).filter(([id]) => MENU[id].plato).reduce((s, [, q]) => s + q, 0)
    + (Object.keys(cant).some((id) => MENU[id].empanada) ? 1 : 0);
  if ((cant.combo ?? 0) > platos) return json({ error: "Hay más bebidas en combo que platos" }, 400);
  const lineas = Object.keys(MENU).filter((id) => cant[id]).map((id) => `${cant[id]} x ${MENU[id].nombre}`);
  const total = Object.entries(cant).reduce((s, [id, q]) => s + MENU[id].precio * q, 0);
  if (!lineas.length || total <= 0) return json({ error: "El pedido está vacío" }, 400);
  const detalle = lineas.join(", ");

  try {
    const [pedido] = await rpc("reservar_pedido", { p_nombre: nombre, p_detalle: detalle, p_total: total });
    const volver = `${SITE_URL}?t=${pedido.token}`;
    const r = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: { Authorization: `Bearer ${MP_TOKEN}`, "Content-Type": "application/json", "X-Idempotency-Key": pedido.token },
      body: JSON.stringify({
        items: [{
          id: `pedido-${pedido.id}`,
          title: `Pedido ${pedido.codigo} · SinFila`,
          description: detalle.slice(0, 250),
          quantity: 1,
          unit_price: total,
          currency_id: "ARS",
        }],
        external_reference: String(pedido.id),
        back_urls: { success: volver, failure: volver, pending: volver },
        auto_return: "approved",
        notification_url: `${SUPABASE_URL}/functions/v1/mp-webhook`,
        statement_descriptor: "SINFILA",
      }),
    });
    const pref = await r.json();
    if (!r.ok || !pref.init_point) {
      console.error("Mercado Pago rechazó la preferencia", r.status, JSON.stringify(pref).slice(0, 500));
      return json({ error: "Mercado Pago no respondió. Probá de nuevo en un momento." }, 502);
    }
    await rpc("guardar_preferencia", { p_id: pedido.id, p_preference_id: pref.id });
    return json({ token: pedido.token, codigo: pedido.codigo, total, detalle, init_point: pref.init_point });
  } catch (e) {
    console.error(e);
    return json({ error: (e as Error).message }, 500);
  }
});
