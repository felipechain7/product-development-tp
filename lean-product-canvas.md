# Lean Product Canvas: pedidos en el buffet de clubes de rugby

> Este canvas contiene hipótesis. La evidencia surgirá de observar y experimentar.
> **Estado:** completado antes de las entrevistas del sábado 17 de octubre de 2026. Todo lo que no está validado está marcado como **[SUPUESTO]**. Se actualiza después de las entrevistas.
> Versión visual en Mural: tablero "mural product development tp".

## 1. Problema de negocio

Los jóvenes que van a clubes de rugby de la URBA los días de partido tienen dificultades para comprar comida en el buffet sin perderse parte del partido, porque la fila no baja en todo el día: se juegan varios partidos seguidos y cada uno genera su propio pico. Esto también le genera al buffet ventas perdidas: hay gente que ve la fila y no compra y, en los clubes con un local de comida rápida cerca, compra afuera.

Lo sabemos por la experiencia del equipo, por encuestas en estadios de otros países (F3, F4) y por las entrevistas del 17/10 en SIC y Alumni. Los 5 asistentes entrevistados se perdieron parte de un partido por la fila; contaron esperas de 10 a 20 minutos y coincidieron en que lo que más tarda es pagar. La empleada del buffet del SIC contó que hay gente que ve la fila y se va a la parrilla de afuera o al McDonald's de al lado.

**Estado:** el problema se confirmó en entrevistas. Falta medir la espera, porque los tiempos son declarados y no cronometrados, y cuántas ventas pierde el buffet.

## 2. Resultados de negocio

- Aumentar las ventas del buffet en la hora pico de un sábado de partido de [pendiente de medir] a [pendiente de definir] en la temporada 2027.
- Reducir la cantidad de personas que ven la fila y se van sin comprar de [pendiente de medir] a [pendiente de definir] por sábado.

**[SUPUESTO]** Las líneas de base se toman el 17/10 (entrevista al buffet del SIC y observación). Los objetivos se fijan después, con esos datos.

## 3. Usuarios y clientes

- **Usuarios:** jóvenes de 18 a 25 que van a clubes de rugby de la URBA los días de partido.
- **Segmento a validar:** padres y socios mayores que van a ver a sus hijos. En las entrevistas del 17/10, los dos padres entrevistados también se perdieron parte de un partido, y el que va solo al partido de su hijo fue el más molesto. Son 2 entrevistas: no alcanza para afirmar nada todavía.
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

- **Propuesta:** el joven escanea un QR en el club y se abre una página con todos los productos del buffet cargados. Ahí pide y paga, y después retira con un número. El buffet ve los pedidos en orden en un panel.
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

Actualizado el 18/10 con las entrevistas del 17/10. Antes la prioridad era Valor (25), porque no sabíamos si la demora estaba en la caja o en la cocina.

| Hipótesis | Incertidumbre 1–5 | Impacto 1–5 | Prioridad | Justificación |
|---|---:|---:|---:|---|
| Problema | 1 | 5 | 5 | Los 5 entrevistados se perdieron parte de un partido por la fila. |
| Valor | 3 | 5 | 15 | Los 5 asistentes y el buffet dicen que lo que más tarda es pagar, y que la comida sale rápido. Es evidencia declarada, no medida. |
| Comportamiento | 4 | 4 | 16 | No sabemos si los chicos cambian la fila por pedir y pagar por el celular. Las entrevistas no aportaron datos sobre esto. |

**Pregunta prioritaria:** ¿Los que van al club van a pedir y pagar por el celular en vez de hacer la fila?

## Pre-mortem

Imaginamos que dentro de seis meses la propuesta fracasó. Estos son los tres riesgos que elegimos:

| # | Causa del fracaso | Supuesto que falló | Señal temprana | Cómo investigarlo |
|---|---|---|---|---|
| 1 | La demora era la cocina: la fila se mudó al mostrador de retiro | Valor | El 17/10 la gente espera más después de pagar que antes | Pregunta 2 de las entrevistas y observación de la fila |
| 2 | El buffet no lo adopta o no paga | Modelo de negocio | El empleado del SIC dice que vende todo igual o no muestra interés | Pedirle permiso para un sábado de prueba |
| 3 | Los chicos no lo usan: prefieren la fila con amigos o pagar en efectivo | Comportamiento | En las entrevistas, la mayoría dice que paga en efectivo | Contar los pedidos en el sábado de prueba |

Riesgos considerados y no elegidos: falta de confianza en pagar antes y fin de temporada (finales el 14/11) sin sábados para probar.

**Estado después del 17/10:**
- Riesgo 1: la señal temprana no apareció; todos dicen que después de pagar la comida sale rápido. Baja.
- Riesgo 2: bajó en parte. El buffet del SIC aceptó hacer la prueba, pero todavía no sabemos si pagaría por el servicio.
- Riesgo 3: sigue abierto. El buffet cobra en efectivo o con posnet con QR, sin datos de proporción. Es el riesgo de la hipótesis que ahora es prioritaria (Comportamiento).

## 8. Experimento mínimo

- **Hipótesis que prueba:** Comportamiento (los que van al club van a pedir y pagar por el celular en vez de hacer la fila). Secundaria: Valor (el retiro es rápido).
- **Objetivo:** responder la pregunta de la Caja 7: si la gente usa la página en vez de la fila.
- **Tipo de experimento:** concierge digital.
- **Herramienta:** una página armada gratis (Google Forms con fotos y precios, o Glide) con todos los productos cargados, para que se parezca a la página final; link de pago de Mercado Pago; WhatsApp para pasarle cada pedido al buffet y Google Sheets para registrar los horarios. La página final, con panel para el buffet, es el MVP de las próximas clases.
- **Participantes:** quienes van al SIC ese sábado, el buffet del SIC y los cuatro integrantes del equipo.
- **Duración:** un sábado al mediodía, durante los partidos. Fecha: sábado 24 de octubre de 2026. El buffet del SIC ya aceptó hacer la prueba.
- **Tarea:** la persona escanea un QR en el club (también se difunde el link por los grupos de WhatsApp e Instagram) y se abre una página con todos los productos del buffet, sus precios y el pago por Mercado Pago. Pide y paga ahí. El equipo le pasa el pedido al buffet y le asigna un número; la persona va al mostrador, dice su número y retira.
- **Datos necesarios:** cantidad de pedidos por la web, hora del pedido, hora de llegada al mostrador y hora de entrega de cada pedido. Para comparar: el tiempo de la fila normal en el mismo horario, tomado a cinco personas.
- **Métrica principal:** cantidad de pedidos por la web en el sábado. **Métrica secundaria:** minutos entre que la persona llega al mostrador y recibe la comida, comparados con la fila normal.
- **Criterio de éxito:** al menos 20 pedidos por la web. Secundario: el retiro tarda en promedio menos de 3 minutos y menos que la fila normal.
- **Criterio de fracaso:** menos de 20 pedidos por la web. Secundario: el retiro tarda 3 minutos o más, o lo mismo que la fila normal.
- **Aprendizaje esperado:** si la gente cambia la fila por el celular y, si lo hace, si el retiro realmente es más rápido.
- **Limitaciones:** un solo club y un solo sábado. El equipo hace a mano lo que haría el sistema. Con pocos pedidos, la cocina no se exige como con el producto real. El buffet podría priorizar los pedidos de la prueba. Si la prueba no se puede hacer (por ejemplo, si el buffet se echa atrás), el respaldo es un fake door digital por Instagram y WhatsApp del club: mide si la gente intenta pedir, pero no el retiro.
