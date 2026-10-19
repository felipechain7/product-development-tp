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
- Página de pedidos simple (`experimento/index.html`) con menú y precios, que suma el total sola. Pide solo nombre y pedido, y al final da un código de pedido de 3 dígitos. Se publica gratis con GitHub Pages.
  - *Cambio decidido por el equipo el 18/10:* se reemplazó Google Forms porque no calcula el total; sumar a mano agregaba fricción que podía ensuciar la medición de comportamiento.
- Pago real por Mercado Pago, al alias de la cuenta que defina el equipo.
- QR que abre la página y el mismo link para los grupos de WhatsApp del club.
- Planilla de registro en Google Sheets: la página manda cada evento a un formulario de Google oculto (hora automática). Llegada al mostrador y entrega las completa el equipo.
- Embudo de diagnóstico (no cambia el criterio): visitas a la página, "ir a pagar" y pedidos confirmados. Sirve para distinguir si faltó exposición o interés si hay pocos pedidos.
- Hoja para cronometrar la fila normal (5 personas).

**Simulado (lo hace el equipo a mano):**
- Panel del buffet: el equipo le pasa cada pedido por WhatsApp.
- Número de pedido: lo genera la página (código de 3 dígitos); el equipo lo usa para encontrar el pedido.
- Control de que el pago llegó.

**Fuera de alcance (sería MVP):** cuentas de usuario, app, diseño trabajado, stock en tiempo real, cobro integrado con Mercado Pago, varios clubes, historial de pedidos.

**Listo para el piloto cuando:** un integrante hace un pedido de prueba completo que aparece en la planilla, lo paga y lo puede retirar.

## Datos personales

Solo se pide un nombre o apodo para entregar el pedido. No se piden teléfono, mail ni DNI. Los pagos quedan en Mercado Pago; en la planilla no se guardan datos de pago.

## Pendientes para construir

- [x] Menú del buffet con precios (cargado el 19/10). Combo: bebida por $2.000 más; una por cada plato y una sola con las empanadas, pidas las que pidas.
- [x] Cuenta de Mercado Pago que recibe los pagos: alias `felipechain`, la cuenta de Felipe Chain (decisión final del 19/10). El pago se controla con el comprobante en el mostrador y al cierre se le transfiere al buffet el total cobrado.
