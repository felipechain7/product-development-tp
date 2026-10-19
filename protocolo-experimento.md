# Protocolo del sábado 24/10: pedidos por el celular en el buffet del SIC

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
| Viernes 23/10 | **Piloto:** uno del equipo hace un pedido de prueba completo (formulario, pago, aparece en la planilla). Se corrige solo lo que impida ejecutar. |
| Viernes 23/10, después del piloto | Borrar de la planilla todas las filas de prueba (nombre "PRUEBA" o del equipo), así el sábado se cuenta desde cero. |
| Sábado, antes del primer partido del mediodía | Llegar, hablar con el buffet, pegar los QR en la fila, las mesas y la tribuna. Mandar el mensaje a los grupos de WhatsApp del club. |
| Durante los partidos del mediodía | Ejecución. Cada rol registra en la planilla. |
| Al terminar el último partido del mediodía | Cierre: sacar los QR, contar pedidos pagados, sacar captura de la planilla. Felipe Chain le transfiere al buffet el total cobrado en `felipechain`, cruzado con la planilla, y guarda el comprobante. |

## Textos

**Cartel con el QR**

> **¿Hambre? Pedí sin hacer la fila.**
> Escaneá, elegí, pagá con Mercado Pago y retirá en el buffet diciendo tu nombre.
> *Prueba de estudiantes de la Universidad Austral. Solo por hoy.*

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

Las primeras columnas las completa sola la página. Las demás las completa el equipo, solo en las filas con evento "pedido".

| Columna | Quién la completa |
|---|---|
| Marca temporal (hora del evento) | Página (automático) |
| Evento (visita / ir_a_pagar / pedido) | Página (automático) |
| Código de pedido | Página (automático) |
| Nombre o apodo | Página (automático) |
| Pedido y total | Página (automático) |
| ¿Mostró comprobante? (sí / no) | Rol 2 |
| Hora en que se pasó al buffet | Rol 1 |
| Hora de llegada al mostrador | Rol 2 |
| Hora de entrega | Rol 2 |
| ¿Conocido del equipo? (sí / no) | Rol 1 o 2 |
| Observaciones | Cualquiera |

**Hoja aparte: fila normal (Rol 3)**

| Persona | Hora en que entra a la fila | Hora en que recibe la comida | Minutos | ¿Pagó en efectivo o con QR? |
|---|---|---|---|---|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |

**Hoja aparte: observaciones (Rol 4)**

| Hora | Qué pasó | Tipo (miró y no pidió / pregunta / queja / problema de pago / explicación del equipo / otro) |
|---|---|---|
| | | |
