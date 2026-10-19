# Protocolo del jueves 22/10: pedidos por el celular en el buffet del SIC

> *Cambio decidido por el equipo el 19/10, antes de la prueba:* la ejecución pasa del sábado 24/10 al jueves 22/10, que tiene 4 partidos. El criterio de 20 pedidos no cambia. [CONFIRMAR con el buffet que acepta el jueves y el horario de los partidos]

> Instrumento de la Clase 4. Contrato y alcance en `diseno-experimento.md`. Este archivo dice qué hace cada uno el día de la prueba.

## Roles

Son cuatro roles. Asignados por el equipo el 19/10.

| Rol | Quién | Qué hace |
|---|---|---|
| 1. Pedidos | Felipe Servent | Mira la planilla en el celular. Por cada pedido nuevo se lo pasa al buffet por WhatsApp (nombre, código y detalle) y marca la hora en que lo pasó. |
| 2. Mostrador | Pedro | Está al lado del mostrador de retiro. Mira el comprobante de Mercado Pago de cada persona que pidió por la web (alias `felipechain` y monto) y anota la hora en que llega y la hora en que recibe la comida. |
| 3. Fila normal | Juan | Cronometra a 5 personas de la fila normal en el mismo horario: hora en que entran a la fila y hora en que reciben la comida. Anota cuánta gente hay en la fila cada 30 minutos. |
| 4. Difusión y observación | Felipe Chain | Pega los QR antes de empezar y manda el mensaje a los grupos. Después observa y anota: gente que mira el QR y no pide, preguntas, quejas, problemas para pagar. |

## Qué no hacer

- **No convencer a la gente uno por uno.** El QR y el mensaje tienen que funcionar solos. Si alguien pregunta, se responde la duda y nada más. Cada vez que alguien del equipo explique cómo funciona, se anota (cuenta como anomalía).
- No pedirles a amigos o conocidos que pidan para llegar a 20. Si un conocido pide por su cuenta, se registra igual, pero con la marca "conocido".
- No cambiar el criterio de 20 pedidos durante el día.
- No anotar datos personales: solo el nombre o apodo que pusieron en el formulario.

## Cronograma

| Cuándo | Qué |
|---|---|
| Miércoles 21/10 | **Piloto:** uno del equipo hace un pedido de prueba completo (formulario, pago, aparece en la planilla). Se corrige solo lo que impida ejecutar. |
| Miércoles 21/10, después del piloto | Borrar de la planilla todas las filas de prueba (nombre "PRUEBA" o del equipo), así el jueves se cuenta desde cero. |
| Jueves 22/10, antes del primer partido | Llegar, hablar con el buffet, pegar los QR en la fila, las mesas y la tribuna. Mandar el mensaje a los grupos de WhatsApp del club. |
| Durante los partidos del mediodía | Ejecución. Cada rol registra en la planilla. |
| Al terminar el último partido del mediodía | Cierre: sacar los QR, contar pedidos pagados, sacar captura de la planilla. Felipe Chain le transfiere al buffet el total cobrado en `felipechain`, cruzado con la planilla, y guarda el comprobante. |

## Textos

**Cartel con el QR**

> ¿Hambre entre partido y partido?
> **PEDÍ SIN PERDERTE EL PARTIDO**
> Pedís y pagás desde el celu. Retirás en el buffet sin hacer la fila.
> [QR] **ESCANEÁ Y PEDÍ**
> 1. Escaneá: se abre el menú con precios. 2. Pagá: con Mercado Pago, desde donde estés. 3. Retirá: decí tu nombre y tu código en el buffet.
> Sándwiches · Choripán · Hamburguesas · Wraps · Tostados · Empanadas · Bebidas
> *Prueba de estudiantes de la Universidad Austral · Solo por hoy*
>
> Versión para imprimir en `experimento/cartel.html` (rediseñada el 19/10 para que sea más llamativa; mismo QR y mismo link). Imprimir en color.

**Mensaje para los grupos de WhatsApp del club**

> Hoy en el buffet del SIC probamos pedir y pagar desde el celular para no hacer la fila 🍔
> Entrá acá: https://felipechain7.github.io/product-development-tp/experimento/
> Elegís, pagás con Mercado Pago y retirás en el mostrador diciendo tu nombre.
> Es una prueba de un trabajo de la facu, solo por hoy.

**[PENDIENTE]** quién tiene acceso a los grupos de WhatsApp del club.

**Texto al pie de la página**

> Pedí acá y retirá en el buffet sin hacer la fila. Es una prueba de estudiantes de la Universidad Austral: solo te pedimos un nombre o apodo para entregarte el pedido, y los datos se usan de forma anónima para un trabajo de la facultad.

**Mensaje al terminar el pedido** (ya está en la página)

> ¡Listo, [nombre]! Tu código de pedido es [código]. Andá al mostrador del buffet, decí tu nombre y este código, y mostrá el comprobante de Mercado Pago.

## Planilla de registro

Planilla "Registro experimento buffet SIC (respuestas)" en el Drive de Felipe Chain. Hay que compartirla con el resto del equipo. Tiene cinco pestañas:

| Pestaña | Quién la completa | Qué tiene |
|---|---|---|
| Respuestas de formulario 1 | La página (automático). **No tocar.** | Hora, evento (visita / ir_a_pagar / pedido), código, nombre, pedido, total y sesión (identificador anónimo que une los eventos de una misma persona). |
| Pedidos equipo | Rol 1 (Felipe Servent) y Rol 2 (Pedro) | Una fila por pedido: código, ¿mostró comprobante? (sí/no), hora en que se pasó al buffet, hora de llegada al mostrador, hora de entrega, ¿conocido del equipo? (sí/no) y observaciones. Los minutos de retiro se calculan solos. |
| Fila normal | Rol 3 (Juan) | Las 5 personas: hora en que entra a la fila, hora en que recibe la comida y si pagó en efectivo o con QR. Los minutos se calculan solos. Al costado, el conteo de gente en la fila cada 30 minutos. |
| Observaciones | Rol 4 (Felipe Chain) | Hora, qué pasó y tipo (miró y no pidió / pregunta / queja / problema de pago / explicación del equipo / otro). |
| Resumen | Nadie (automático) | Pedidos registrados y pagados, comparación con el criterio de 20, monto, embudo, tiempo de retiro contra la fila normal y tiempo para pedir con el celu. |

Las horas se cargan con el formato `12:40:10` (con segundos). Para "sí" alcanza con escribir "si" o "sí".
