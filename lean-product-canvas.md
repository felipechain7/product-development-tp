# Lean Product Canvas: pedidos en el buffet de clubes de rugby

> Este canvas contiene hipótesis. La evidencia surgirá de observar y experimentar.
> **Estado:** completado antes de las entrevistas del sábado 17 de octubre de 2026. Todo lo que no está validado está marcado como **[SUPUESTO]**. Se actualiza después de las entrevistas.
> Versión visual en Mural: tablero "mural product development tp".

## 1. Problema de negocio

Los jóvenes que van a clubes de rugby de la URBA los días de partido tienen dificultades para comprar comida en el buffet sin perderse parte del partido, porque la fila no baja en todo el día: se juegan varios partidos seguidos y cada uno genera su propio pico. Esto también le genera al buffet ventas perdidas: hay gente que ve la fila y no compra y, en los clubes con un local de comida rápida cerca, compra afuera.

Lo sabemos por la experiencia del equipo y por encuestas en estadios de otros países, donde la mayoría dice haberse perdido una jugada por la fila y haber abandonado alguna vez una compra (F3, F4 de la Clase 2). Todavía necesitamos comprobar cuánto dura la espera, si la demora está en la caja o en la cocina y cuántas ventas pierde el buffet. **[SUPUESTO]** hasta las entrevistas.

## 2. Resultados de negocio

- Aumentar las ventas del buffet en la hora pico de un sábado de partido de [pendiente de medir] a [pendiente de definir] en la temporada 2027.
- Reducir la cantidad de personas que ven la fila y se van sin comprar de [pendiente de medir] a [pendiente de definir] por sábado.

**[SUPUESTO]** Las líneas de base se toman el 17/10 (entrevista al buffet del SIC y observación). Los objetivos se fijan después, con esos datos.

## 3. Usuarios y clientes

- **Usuarios:** jóvenes de 18 a 25 que van a clubes de rugby de la URBA los días de partido.
- **Clientes (pagan):** el buffet del club. Primeros candidatos: SIC y Alumni.
- **Decisor:** el concesionario del buffet o, si el buffet es propio, el club. **[PENDIENTE]** se confirma en la entrevista al buffet del SIC el 17/10.

## 4. Necesidades y resultados del usuario

- **Joven que va al club:** cuando me da hambre entre partido y partido, quiero conseguir comida rápido, para no perderme el partido que vine a ver.
- **Buffet:** cuando se junta gente en el cambio de partido, quiero atender más rápido, para no perder ventas.

**[SUPUESTO]** Sale de la experiencia del equipo; se contrasta con las entrevistas del 17/10.

## 5. Ideas de solución

Alternativas generadas:

1. **Fila en vivo** (información o decisión): ver la espera actual del buffet y el mejor momento para ir según el fixture. Descartada: no acorta la fila, solo la reparte.
2. **Pedí y retirá** (coordinación o transacción). **Seleccionada.**
3. **Turnos de retiro con predicción** (automatización o inteligencia): reservar una franja para retirar y anticipar la demanda con el fixture y las ventas anteriores. Descartada: más compleja y sin datos de ventas para predecir al arrancar.

### Pedí y retirá

- **Propuesta:** el joven pide y paga desde el celular y retira mostrando un QR o un número. El buffet ve los pedidos en orden en un panel.
- **Valor para el usuario:** no hace la fila para pagar y vuelve rápido al partido.
- **Tecnología central:** web con el menú, pago online (Mercado Pago) y cola de pedidos.
- **Datos necesarios:** menú, precios y stock del buffet.
- **Riesgo principal:** si la demora está en la cocina y no en la caja, la espera no baja.
- **Prototipo inicial:** Google Forms con link de pago de Mercado Pago, o una app en Glide.
- **Dependencias:** que el buffet acepte recibir los pedidos y tenga un lugar para entregarlos (dependencia física secundaria); señal de celular en el club.
- **Estado:** idea no validada.

## 6. Hipótesis principales

Los umbrales se fijaron antes de probar y no se cambian después.

### Hipótesis de problema

Creemos que los jóvenes que van a SIC y Alumni se pierden parte del partido o dejan de comprar por la fila del buffet.
Lo sabremos si al menos 4 de 6 entrevistados el 17/10 cuentan que les pasó en su última visita.

### Hipótesis de valor

Creemos que pedir y pagar desde el celular y retirar con QR acorta la espera en el pico.
Lo sabremos si, en un sábado de prueba, el retiro tarda menos de 3 minutos desde que llegan al mostrador, contra lo que tarda la fila normal en el mismo horario.

### Hipótesis de comportamiento

Creemos que los jóvenes van a pedir por la web en vez de hacer la fila.
Lo sabremos si en un sábado de prueba hay al menos 20 pedidos por la web.

### Hipótesis de factibilidad

No se incluye: la solución usa herramientas que ya existen (formularios web y Mercado Pago), así que no hay una incertidumbre tecnológica crítica.

## 7. Lo más importante por aprender

| Hipótesis | Incertidumbre 1–5 | Impacto 1–5 | Prioridad | Justificación |
|---|---:|---:|---:|---|
| Problema | 2 | 5 | 10 | Experiencia del equipo y encuestas en estadios (F3, F4). Se mide igual en las entrevistas del 17/10. |
| Valor | 5 | 5 | 25 | No sabemos si la demora está en la caja o en la cocina. Si es la cocina, pagar antes no acorta la espera y la propuesta se cae. |
| Comportamiento | 4 | 4 | 16 | No sabemos si los chicos cambian la fila por el celular, pero si la espera baja es más probable que lo usen. |

**Pregunta prioritaria:** ¿La demora del buffet está en el cobro, de modo que pagar antes por el celular realmente acorta la espera?

## Pre-mortem

Imaginamos que dentro de seis meses la propuesta fracasó. Estos son los tres riesgos que elegimos:

| # | Causa del fracaso | Supuesto que falló | Señal temprana | Cómo investigarlo |
|---|---|---|---|---|
| 1 | La demora era la cocina: la fila se mudó al mostrador de retiro | Valor | El 17/10 la gente espera más después de pagar que antes | Pregunta 2 de las entrevistas y observación de la fila |
| 2 | El buffet no lo adopta o no paga | Modelo de negocio | El empleado del SIC dice que vende todo igual o no muestra interés | Pedirle permiso para un sábado de prueba |
| 3 | Los chicos no lo usan: prefieren la fila con amigos o pagar en efectivo | Comportamiento | En las entrevistas, la mayoría dice que paga en efectivo | Contar los pedidos en el sábado de prueba |

Riesgos considerados y no elegidos: falta de confianza en pagar antes y fin de temporada (finales el 14/11) sin sábados para probar.

El riesgo 1 coincide con la hipótesis priorizada (Valor), así que la Caja 7 se mantiene.

## 8. Experimento mínimo

- **Hipótesis que prueba:** Valor (pedir y pagar desde el celular y retirar con número acorta la espera en el pico).
- **Objetivo:** responder la pregunta de la Caja 7: si la demora está en el cobro y pagar antes realmente acorta la espera.
- **Tipo de experimento:** concierge digital.
- **Herramienta:** Google Forms con el menú, link de pago de Mercado Pago, WhatsApp para pasarle cada pedido al buffet y Google Sheets para registrar los horarios.
- **Participantes:** jóvenes que van al SIC ese sábado, el buffet del SIC y los cuatro integrantes del equipo.
- **Duración:** un sábado al mediodía, durante los partidos. Fecha: 24/10 o 31/10. **[PENDIENTE]** confirmar con el buffet en la entrevista del 17/10.
- **Tarea:** el joven abre el link (difundido por los grupos de WhatsApp e Instagram del club y por el equipo), pide y paga. El equipo le pasa el pedido al buffet y le asigna un número. El joven va al mostrador, dice su número y retira.
- **Datos necesarios:** hora del pedido, hora de llegada al mostrador y hora de entrega de cada pedido. Para comparar: el tiempo de la fila normal en el mismo horario, tomado a cinco personas.
- **Métrica:** minutos entre que el joven llega al mostrador y recibe la comida, comparados con los minutos de la fila normal. Métrica secundaria: cantidad de pedidos por la web (umbral de 20 de la hipótesis de comportamiento).
- **Criterio de éxito:** el retiro tarda en promedio menos de 3 minutos y menos que la fila normal en el mismo horario.
- **Criterio de fracaso:** el retiro tarda 3 minutos o más, o lo mismo que la fila normal. Eso indicaría que la demora está en la cocina.
- **Aprendizaje esperado:** si la demora del buffet está en el cobro o en la cocina, y si el buffet puede preparar pedidos web en paralelo con la fila.
- **Limitaciones:** un solo club y un solo sábado. El equipo hace a mano lo que haría el sistema. Con pocos pedidos, la cocina no se exige como con el producto real. El buffet podría priorizar los pedidos de la prueba. Depende del permiso del buffet. Si no lo da, el respaldo es una simulación con los datos de las entrevistas (datos simulados: prueban la lógica, no el desempeño real).

Experimento posterior (no es el principal): fake door digital por Instagram y WhatsApp del club, para la hipótesis de comportamiento.
