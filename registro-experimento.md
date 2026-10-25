# Registro del experimento: pedidos por el celular en el buffet del SIC

> Entregable de la Clase 4. Las secciones 1 a 3 se completaron antes de ejecutar. Las secciones 4 a 8 se completan con los resultados reales del jueves 22/10 (la prueba se pasó del sábado 24/10 al jueves por decisión del equipo del 19/10); no se llenan con supuestos.

## 1. Punto de partida

- **Hipótesis priorizada:** Comportamiento: los que van al club van a pedir por la web en vez de hacer la fila.
- **Pregunta de aprendizaje:** ¿Los que van al club van a pedir y pagar por el celular en vez de hacer la fila?
- **Experimento mínimo:** concierge digital en el buffet del SIC, jueves 22/10, durante los 4 partidos del día.
- **Métrica:** cantidad de pedidos pagados por la web. Secundaria: minutos de retiro contra la fila normal.
- **Criterio de éxito:** 20 pedidos o más. Secundario: retiro de menos de 3 minutos y menor que la fila normal.

## 2. Posición inicial en la curva de la verdad

- **Evidencia disponible:** entrevistas del 17/10 (5 asistentes y el buffet del SIC). Los 5 se perdieron parte de un partido, declararon esperas de 10 a 20 minutos y dicen que lo lento es pagar. Sin evidencia sobre pedidos por el celular.
- **Incertidumbre pendiente:** si la gente cambia la fila por el celular.
- **Inversión autorizada:** una tarde de armado, $0 en herramientas, los cuatro integrantes el jueves.

## 3. Instrumento construido por la IA

- **Tipo de instrumento:** concierge digital.
- **Enlace o archivo:** página de pedidos en https://felipechain7.github.io/product-development-tp/experimento/ (código en `experimento/index.html`, publicada con GitHub Pages el 19/10). QR y cartel para imprimir en `experimento/cartel.html` y `experimento/qr.png`. Registro en el formulario de Google "Registro experimento buffet SIC", vinculado a la planilla "Registro experimento buffet SIC (respuestas)" en el Drive de Felipe. Protocolo en `protocolo-experimento.md`.
- **Qué incluye:** página de pedidos con el menú real del SIC y total automático, pago por Mercado Pago al alias `felipechain` (cuenta de Felipe Chain; al cierre se le transfiere al buffet), código de pedido de 3 dígitos, embudo (visita, ir a pagar, pedido), QR, planilla de registro, hoja de cronometraje de la fila normal y hoja de observaciones.
- **Prueba técnica (19/10):** un pedido de prueba con nombre "PRUEBA" (código 394) llegó a la planilla con sus tres eventos. No es evidencia: hay que borrar esas filas antes del jueves.
- **Piloto:** hecho por el equipo antes del 21/10. El buffet aceptó hacer la prueba el jueves 22/10.
- **Qué quedó fuera:** cuentas de usuario, app, diseño propio, stock en tiempo real, cobro integrado, varios clubes, historial de pedidos.

## 4. Ejecución

- **Fecha y contexto:** jueves 22/10/2026 en el buffet del SIC, durante los partidos del día. El primer evento de la página fue a las 19:36 y el último pedido a las 21:55. La fila normal tuvo entre 4 y 11 personas en los conteos (19:51: 8; 20:08: 11; 20:33: 9; 21:00: 7; 21:15: 4).
- **Participantes, escenarios, fuentes o datos:** personas que estaban en el club y vieron el QR o el mensaje. Datos de la planilla "Registro experimento buffet SIC (respuestas)": eventos automáticos de la página (visita, ir a pagar, pedido, con sesión anónima), pestaña "Pedidos equipo" (comprobante y horas), "Fila normal" (5 personas) y "Observaciones". En este registro se usan solo los códigos de pedido; los nombres quedan en la planilla, que no es pública.
- **Tarea realizada:** escanear el QR, elegir del menú, pagar por Mercado Pago al alias `felipechain` y retirar en el mostrador con nombre y código. El equipo pasó cada pedido al buffet por WhatsApp y anotó las horas.
- **Resultados obtenidos:**

| Medición | Resultado | Fuente |
|---|---|---|
| Pedidos registrados en la página | 32 | Planilla, evento "pedido" |
| Pedidos pagados (mostraron comprobante) | 32 | Pedidos equipo, columna B |
| De esos, conocidos del equipo | 12 | Pedidos equipo, columna G |
| Pedidos pagados sin contar conocidos | 20 | Cálculo |
| Monto total | $602.000 | Planilla, suma de totales |
| Embudo: abrieron la página / tocaron "Ir a pagar" / confirmaron | 37 / 33 / 32 personas (89 % y 97 %) | Planilla, sesiones únicas |
| Retiro con la página (llegada al mostrador → entrega) | promedio 2,4 min; mediana 2; rango 1 a 4; 19 de 32 por debajo de 3 min | Pedidos equipo |
| Fila normal (entra a la fila → recibe la comida) | promedio 8,6 min; rango 4 a 12 (5 personas: 2 pagaron en efectivo y 3 con QR) | Fila normal |
| Confirmar el pedido → tener la comida | promedio 8,0 min; rango 3,4 a 11,5 | Cálculo con planilla y Pedidos equipo |
| Abrir la página → tener la comida | promedio 10,0 min; rango 4 a 20,6 | Cálculo |
| Pedido pasado al buffet → llegada al mostrador | mediana 5 min (la mayoría de los pedidos, exactamente 5) | Pedidos equipo |
| Pedidos por hora | 19 h: 6; 20 h: 14; 21 h: 12 | Planilla |

- **Anomalías observadas:**
  - 20:33: una persona preguntó si se podía pagar en efectivo (pregunta).
  - 20:45: una persona miró todo y no pidió (miró y no pidió).
  - 21:05: el pedido 892 no entendía que tenía que mostrar el comprobante; el equipo le explicó (explicación del equipo).
  - 21:13: un señor mayor que pidió en la fila normal dijo que le gustaba la idea (otro).
  - Las horas del equipo se anotaron en minutos redondos, sin segundos.
  - En un pedido (961) el evento "ir a pagar" quedó registrado después del pedido: es un desfase de envío de la página, no cambia el conteo.
  - 5 personas abrieron la página y no pidieron; 1 de ellas llegó a "Ir a pagar" y no confirmó.

## 5. Evidencia

- **A favor:**
  - 32 pedidos pagados, por encima del criterio de 20. Sin contar conocidos del equipo, 20: se alcanza justo.
  - El 86 % de las personas que abrieron la página terminó pidiendo (32 de 37): una vez que la ven, la usan.
  - El retiro en el mostrador tardó 2,4 minutos en promedio contra 8,6 de la fila normal.
  - Nadie dejó de retirar ni hubo problemas de pago registrados; todos mostraron comprobante.
- **En contra:**
  - 12 de los 32 pedidos fueron de conocidos del equipo (37,5 %).
  - El tiempo total desde que se confirma el pedido hasta tener la comida (8,0 min) es parecido al de la fila normal (8,6 min). La mejora está en no estar parado en la fila, no en recibir la comida antes.
  - 13 de los 32 retiros tardaron 3 o 4 minutos: el criterio secundario se cumple en promedio, no en cada pedido.
- **Interpretación del equipo:** la gente pide desde la cancha y después camina al buffet a retirar; por eso la llegada al mostrador es unos 5 minutos después de que el pedido se pasa al buffet. Ese tiempo lo pasan mirando el partido y no en la fila. [Interpretación del equipo, no medida: no se registró dónde estaba cada persona al pedir.]
- **Limitaciones:**
  - Un solo club y un solo día: un jueves a la noche, con la fila más corta (4 a 11 personas) que las esperas de 10 a 20 minutos declaradas para los sábados.
  - Horas del equipo sin segundos: con un umbral de 3 minutos, cada medición tiene un margen de hasta un minuto.
  - La fila normal se midió con 5 personas.
  - Más de un tercio de los pedidos vino de conocidos del equipo.
  - El equipo hizo a mano lo que haría el sistema (pasar pedidos, controlar pagos), y con 32 pedidos la cocina no se exigió como con el producto real.

## 6. Aprendizajes

- **Qué aprendimos:** en el SIC, la gente pide y paga por el celular en vez de hacer la fila cuando tiene un QR a mano: 32 pedidos en una noche, y casi todos los que abrieron la página terminaron pidiendo. El valor que se ve es poder esperar mirando el partido y no parado en la fila; el retiro en el mostrador es corto.
- **Qué continúa siendo un supuesto:**
  - Que funcione igual un sábado con la fila larga y sin conocidos del equipo.
  - Que el total de la espera baje y no solo cambie de lugar.
  - Que el buffet pague por esto y cuánto.
  - Que la cocina aguante muchos más pedidos.
- **Cambios realizados o propuestos:**
  - Avisar en la pantalla final cuándo conviene ir a retirar, para que el tiempo de espera quede claro.
  - Dejar más claro que hay que mostrar el comprobante (un caso no lo entendió).
  - Anotar las horas con segundos en la próxima medición.

## 7. Estado de la evidencia y próxima iteración

- **Respaldada, no respaldada o inconclusa:** respaldada por esta prueba (hipótesis de Comportamiento, en el SIC, un jueves a la noche).
- **Comparación con el criterio:** principal: 32 pedidos contra 20, se alcanzó (20 sin conocidos). Secundario: retiro promedio de 2,4 min, menos de 3 y menos que la fila normal (8,6), se alcanzó en promedio.
- **Decisión de iteración:** avanzar al MVP (decisión del equipo del 25/10, Clase 5).
- **Justificación:** se alcanzó el criterio principal (también sin conocidos) y el secundario; el mecanismo funcionó sin errores técnicos. Ver `aprendizaje-y-mvp.md`, sección 4.
- **Próxima incertidumbre por reducir:** si el buffet pagaría por el servicio (hipótesis de modelo de negocio), y si la mejora se sostiene un sábado con la fila larga.

## 8. Nueva posición en la curva de la verdad

- **Evidencia incorporada:** comportamiento real con pago real: 32 pedidos pagados ($602.000) en una noche, embudo de 37 a 32 personas y tiempos de retiro contra la fila normal.
- **Inversión que se justifica ahora:** un MVP chico que saque la parte manual del equipo (que el buffet vea los pedidos sin que se los pasen por WhatsApp) y que pueda usarse varios días en el mismo club.
- **Qué todavía no se justifica construir:** app propia, cobro integrado con Mercado Pago, varios clubes a la vez, cuentas de usuario e historial, mientras no se sepa si el buffet pagaría.
