# Diseño del experimento: pedidos por el celular en el buffet del SIC

> Clase 4. Parte de las cajas 6, 7 y 8 de `lean-product-canvas.md` sin rediseñarlas. Lo construye la IA; los criterios y las decisiones son del equipo.

## Contrato experimental

| Campo | Definición |
|---|---|
| Hipótesis | Comportamiento: los que van al club van a pedir por la web en vez de hacer la fila. |
| Pregunta de aprendizaje | ¿Los que van al club van a pedir y pagar por el celular en vez de hacer la fila? |
| Tipo | Concierge digital. |
| Lugar y fecha | Buffet del SIC, sábado 24 de octubre de 2026, al mediodía. El buffet aceptó la prueba. |
| Participantes | Quienes estén en el SIC ese sábado (jóvenes de 18 a 25 como segmento principal). |
| Acción observable | Hacer un pedido en la página y pagarlo por Mercado Pago. |
| Métrica principal | Cantidad de pedidos pagados por la web en el sábado. |
| Criterio de éxito | 20 pedidos o más. |
| Criterio de fracaso | Menos de 20 pedidos. |
| Métrica secundaria (Valor) | Minutos entre que la persona llega al mostrador y recibe la comida, contra la fila normal en el mismo horario (5 personas cronometradas). Éxito: menos de 3 minutos y menos que la fila normal. |
| Duración | Desde que se publica el QR hasta que termina el último partido del mediodía. |
| Respaldo | Si la prueba no se puede hacer, fake door digital por Instagram y WhatsApp del club. |

Los criterios se fijaron en la Clase 3 y no se cambian después de ver los resultados.

## Posición en la curva de la verdad

- **Evidencia disponible:** el problema está confirmado por 5 entrevistas y el buffet (17/10); todos dicen que lo lento es pagar. No hay evidencia sobre si la gente pediría por el celular.
- **Incertidumbre que se reduce:** si la gente cambia la fila por el celular.
- **Inversión autorizada:** una tarde de armado, $0 en herramientas, los cuatro integrantes el sábado en el club.

## Alcance mínimo (aprobado por el equipo)

**Imprescindible (se construye):**
- Página de pedidos con menú y precios (Google Forms). Pide solo nombre y pedido.
- Pago real por Mercado Pago, al alias de la cuenta que defina el equipo.
- QR que abre la página y el mismo link para los grupos de WhatsApp del club.
- Planilla de registro en Google Sheets conectada al formulario: hora del pedido automática; llegada al mostrador y entrega las completa el equipo.
- Hoja para cronometrar la fila normal (5 personas).

**Simulado (lo hace el equipo a mano):**
- Panel del buffet: el equipo le pasa cada pedido por WhatsApp.
- Número de pedido: el número de fila de la planilla.
- Control de que el pago llegó.

**Fuera de alcance (sería MVP):** cuentas de usuario, app, diseño propio, stock en tiempo real, cobro integrado con Mercado Pago, varios clubes, historial de pedidos.

**Listo para el piloto cuando:** un integrante hace un pedido de prueba completo que aparece en la planilla, lo paga y lo puede retirar.

## Datos personales

Solo se pide un nombre o apodo para entregar el pedido. No se piden teléfono, mail ni DNI. Los pagos quedan en Mercado Pago; en la planilla no se guardan datos de pago.

## Pendientes para construir

- [ ] Menú del buffet con precios.
- [ ] Cuenta de Mercado Pago que recibe los pagos.
