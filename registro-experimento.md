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
- **Piloto:** hecho por el equipo antes del 21/10. [COMPLETAR: si hubo que corregir algo del instrumento o del registro]. El buffet aceptó hacer la prueba el jueves 22/10.
- **Qué quedó fuera:** cuentas de usuario, app, diseño propio, stock en tiempo real, cobro integrado, varios clubes, historial de pedidos.

## 4. Ejecución

- **Fecha y contexto:** jueves 22/10/2026, buffet del SIC, de 19:36 a 22:00, durante los 4 partidos del día. QR pegados en el club y mensaje en los grupos de WhatsApp.
- **Participantes, escenarios, fuentes o datos:** quienes estaban en el club esa noche, sin selección previa. Fuentes: pestaña "Respuestas de formulario 1" (eventos que registra la página con su hora), "Pedidos equipo" (Felipe Servent y Pedro), "Fila normal" (Juan) y "Observaciones" (Felipe Chain), en la planilla "Registro experimento buffet SIC (respuestas)". Los nombres de quienes pidieron quedan solo en la planilla privada; acá se usan los códigos de pedido.
- **Tarea realizada:** escanear el QR o abrir el link, elegir del menú, transferir por Mercado Pago, confirmar en la página y retirar en el mostrador con nombre, código y comprobante. El equipo le pasó cada pedido al buffet por WhatsApp.
- **Resultados obtenidos:**
  - **Pedidos pagados por la web: 32** (todos con comprobante). De esos, 12 fueron de conocidos del equipo; sin ellos quedan 20.
  - **Embudo (personas por sesión):** 37 abrieron la página, 33 tocaron "Ir a pagar" (89 %) y 32 confirmaron el pedido (97 % de los que fueron a pagar).
  - **Monto vendido por la web:** $602.000.
  - **Retiro con la página:** 1,9 minutos promedio (de 1 a 4 minutos, 32 pedidos).
  - **Fila normal:** 8,6 minutos promedio (5 personas: 9, 7, 11, 12 y 4 minutos). 2 pagaron en efectivo y 3 con QR. En los conteos había entre 4 y 11 personas en la fila.
  - **Tiempo para pedir con el celular:** 2 minutos promedio, de abrir la página a confirmar.
  - **Observaciones (4):** una persona preguntó si se podía pagar en efectivo (20:33); una miró todo y no pidió (20:45); al pedido 892 hubo que explicarle que tenía que mostrar el comprobante (21:05, explicación del equipo); un señor mayor que pidió en la fila normal dijo que le gustaba la idea (21:13).
- **Anomalías observadas:**
  - Las horas de "Pedidos equipo" y "Fila normal" se anotaron en una hoja de papel durante la prueba y se pasaron después a la planilla. Casi todas están sin segundos, así que cada retiro tiene una precisión de ±1 minuto.
  - En 22 de los 32 pedidos, la llegada al mostrador figura exactamente 7 minutos después de la hora en que el pedido se pasó al buffet. No sabemos a qué se debe.
  - En "Respuestas de formulario 1" aparecieron dos columnas agregadas por error ("Columna 1" y "Columna 2"); el equipo las eliminó el 23/10. No afectan los datos de la página.
  - Dos observaciones estaban cargadas como 8:33 y 8:45; el equipo las corrigió a 20:33 y 20:45.
  - En el pedido 961, el evento "pedido" llegó a la planilla unos segundos antes que "ir a pagar"; no cambia el conteo de pedidos.
  - Hubo una explicación del equipo a una persona (pedido 892), anotada como anomalía según el protocolo.

## 5. Evidencia

- **A favor:**
  - Se superó el criterio principal: 32 pedidos pagados contra 20. También se alcanza sin contar a los conocidos (20).
  - Casi todos los que abrieron la página terminaron pidiendo (32 de 37), y pedir llevó unos 2 minutos.
  - El retiro (1,9 min) fue más corto que 3 minutos y que la fila normal (8,6 min) en el mismo horario.
  - Un asistente mayor, del segmento a validar, dijo que le gustaba la idea (comentario espontáneo, no es una prueba de uso).
- **En contra:**
  - Sin contar a los conocidos, el resultado queda justo en el umbral (20).
  - Hubo una consulta por pagar en efectivo y una persona que miró y no pidió.
  - La fila normal fue más corta que lo que se declaró en las entrevistas (8,6 min medidos contra 10 a 20 declarados).
- **Interpretación del equipo:** el equipo considera que el experimento salió bien. [COMPLETAR: si quieren agregar algo con sus palabras]
- **Limitaciones:** un solo club, un solo día y de noche (no un sábado al mediodía); 37 % de los pedidos fueron de conocidos; las horas de retiro se anotaron sin segundos y en papel; solo 5 personas cronometradas en la fila normal; la operación la hizo el equipo a mano y con pocos pedidos por hora, así que la cocina no se exigió como con el producto real; no se sabe cuánta gente había en el club en total, así que no hay tasa de adopción sobre el total de asistentes.

## 6. Aprendizajes

- **Qué aprendimos:** en el SIC, un jueves con 4 partidos, la gente pidió y pagó por el celular en lugar de hacer la fila, y el retiro fue más rápido que la fila normal.
- **Qué continúa siendo un supuesto:** si el buffet pagaría por el servicio y cuánto; si se repite un sábado al mediodía, con más gente y menos conocidos; si funciona en otros clubes; si la cocina aguanta con muchos pedidos juntos; si el segmento de padres y socios mayores lo usaría.
- **Cambios realizados o propuestos:** [COMPLETAR con la decisión del equipo en `aprendizaje-y-mvp.md`]

## 7. Estado de la evidencia y próxima iteración

- **Respaldada, no respaldada o inconclusa:** respaldada por esta prueba.
- **Comparación con el criterio:** principal, 32 pedidos pagados contra 20 (se alcanzó; 20 sin conocidos). Secundario, 1,9 minutos de retiro contra menos de 3 y contra 8,6 de la fila normal (se alcanzó, con precisión de ±1 minuto).
- **Decisión de iteración:** [COMPLETAR: la decide el equipo]
- **Justificación:** [COMPLETAR]
- **Próxima incertidumbre por reducir:** [COMPLETAR]

## 8. Nueva posición en la curva de la verdad

- **Evidencia incorporada:** comportamiento real de 32 personas que pidieron y pagaron por el celular, con tiempos de retiro y comparación contra la fila normal.
- **Inversión que se justifica ahora:** [COMPLETAR con la decisión]
- **Qué todavía no se justifica construir:** [COMPLETAR con la decisión]
