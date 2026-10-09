# Registro del experimento — Aparte

**Equipo:** Felipe Chain · Juan Ignacio Canabe · Pedro Tailhade · Felipe Servent
**Diseño:** [diseno-experimento.md](diseno-experimento.md)
**Última actualización:** 09/10/2026

> **Estado al 09/10/2026: reclutamiento cerrado, sesiones pendientes.** El experimento 1 nunca se ejecutó y se reemplazó por el experimento 2 (ver iteración 2). Del experimento 2 hay 10 participantes reclutados y asignados; no se corrió ninguna sesión. Las secciones 5 a 8 siguen pendientes y lo dicen explícitamente. No se completan con estimaciones.

---

## 1. Punto de partida

- **Hipótesis priorizada:** la hipótesis de valor. Apartar el monto de la meta con una demora para recuperarlo hará que llegue más dinero a fin de mes que separarlo sin demora.
- **Pregunta de aprendizaje:** ¿apartar el dinero con una demora hace que llegue más plata a fin de mes que separarlo sin demora, en jóvenes con excedente que hoy no lo separan?
- **Experimento mínimo:** Wizard of Oz con grupo de comparación. 10 participantes en dos grupos de 5, cuatro semanas, operado con formulario, planilla y WhatsApp.
- **Métrica:** tasa de cumplimiento = `monto_sostenido ÷ monto_propuesto`. La métrica del experimento es la diferencia entre el promedio del grupo con mecanismo y el del control.
- **Criterio de éxito:** el grupo con mecanismo supera al control por **≥ 20 puntos porcentuales**.
- **Criterio de fracaso:** diferencia **< 10 puntos**, o **≥ 2 abandonos** en el grupo con mecanismo.
- **Zona gris:** entre 10 y 20 puntos. No se concluye.

**Por qué esta hipótesis.** De las cuatro del canvas es la única con incertidumbre 5 e impacto 5, y la única cuya respuesta negativa detiene el proyecto entero.

---

## 2. Posición inicial en la curva de la verdad

### Evidencia disponible

| Capa | Qué sostiene | Qué no puede sostener |
|---|---|---|
| 4 entrevistas (26-27/08/2026) | Que el problema existe en episodios concretos, y que quienes separan el dinero sostienen más | Causalidad. Tamaño del segmento. Son cuatro casos, dos de ellos de otros tramos. |
| 9 fuentes secundarias | Que ~3 de cada 10 declara que le ocurre | Comportamiento individual. Dos de las principales miden adolescentes de 14 a 19. |
| Análisis competitivo | Que separar por objetivo ya está resuelto a escala (Frascos, 19 M en seis meses) | Que ninguna billetera aplique demora: solo verificamos Naranja X. |

### Incertidumbre que el experimento reduce

**Una sola:** si la demora agrega algo por encima de separar. No la de problema (ya tiene respaldo), no la de factibilidad (es claramente operable a mano), no la de comportamiento (se puede ajustar sin tirar la idea).

### Inversión autorizada

**Costo monetario cero.** Formulario de Google, una hoja de cálculo y WhatsApp. Cuatro semanas de operación manual repartidas entre cuatro personas, a razón de 2-3 participantes cada uno.

**Por qué tan poco.** La evidencia de partida es de cuatro entrevistas y la afirmación central es un supuesto no probado. En la curva de la verdad eso corresponde al tramo de menor inversión: una prueba rápida, barata, acotada y descartable.

### Qué sería prematuro construir

| Prematuro | Por qué |
|---|---|
| App, pantallas, diseño | El experimento prueba el mecanismo, no la interfaz. |
| Integración con bancos o billeteras | Es la dependencia que no podemos resolver como estudiantes, y recién importa si el mecanismo funciona. |
| Automatización de la demora | Se opera a mano con 10 personas. |
| Login, perfiles, cuentas | No ayudan a medir la métrica. |
| Cualquier cosa de monetización | No hay una sola observación sobre disposición a pagar. |

---

## 3. Instrumento preparado

- **Tipo:** Wizard of Oz operado manualmente. No hay producto ni software.
- **Archivo:** [experimento-materiales.md](experimento-materiales.md)
- **Qué incluye:** formulario de reclutamiento de 8 preguntas con sus criterios de inclusión, texto de consentimiento, procedimiento de asignación a los grupos, planilla de seguimiento de 14 columnas, cinco guiones de WhatsApp y calendario de cuatro semanas.
- **Qué quedó fuera:** toda construcción de software, la integración financiera, la retención real del dinero y la automatización de la demora.

> **Estado real del instrumento: preparado, no instanciado.** Los materiales están escritos y revisados, pero el formulario de Google no fue creado, la planilla no fue armada y nadie recibió el consentimiento. **El ítem "verificamos el instrumento antes de probarlo" no está cumplido.**

### Regla de operación que condiciona el instrumento

**El equipo no toca el dinero de nadie, en ningún momento.** Tampoco se piden CBU, alias, credenciales ni capturas de saldo. Por eso la demora es simulada: no hay nada que retenga el dinero más que un mensaje que llega al día siguiente. Es una limitación del diseño, no un atajo.

---

## 4. Ejecución

> **Reclutamiento cerrado. Sesiones pendientes.**

### Reclutamiento — 8 y 9 de octubre de 2026

Formulario de Google con las 9 preguntas de [experimento-2-materiales.md](experimento-2-materiales.md). Difundido por WhatsApp e Instagram del equipo.

| Dato | Valor |
|---|---|
| Respuestas recibidas | **35** |
| Pasan los 8 filtros | **11** |
| Rendimiento | 31% |
| Reclutados | **10** |

### Embudo de filtros

| Filtro | Quedan | Saca |
|---|---|---|
| Respuestas recibidas | 35 | |
| Edad 18-27 | 34 | −1 |
| Ingresos propios | 33 | −1 |
| **Ingreso estable** | 25 | **−8** |
| No paga alquiler ni expensas | 21 | −4 |
| Le sobra algo a fin de mes | 17 | −4 |
| Meta en curso | 16 | −1 |
| **No ve su progreso en un solo lugar** | 11 | **−5** |
| Gasto en vista | 11 | 0 |

**Tres observaciones del reclutamiento:**

- **El recorte de edad a 18-27 costó un solo caso**, y ese además no cumplía otros dos criterios. El cambio salió gratis.
- **El filtro del gasto en vista no descartó a nadie.** Los 11 que llegaron hasta ahí tenían uno. Puede ser que la pregunta no discrimine, o que quien junta para algo concreto siempre tenga una tentación cerca.
- **El filtro de visibilidad descartó 5**, el segundo que más corta. Es el que define el experimento.

### Asignación a los grupos

**Registrada el 09/10/2026, antes de la primera sesión.** Alternancia por orden de llegada del formulario: impares al grupo A, pares al grupo B. No se mueve.

| ID | Respuesta | Edad | Grupo | Responsable |
|---|---|---|---|---|
| P01 | #1 | 23 | A — control | Chain |
| P02 | #4 | 24 | B — termómetro | Chain |
| P03 | #10 | 26 | A — control | Chain |
| P04 | #12 | 23 | B — termómetro | Canabe |
| P05 | #15 | 18 | A — control | Canabe |
| P06 | #16 | 19 | B — termómetro | Tailhade |
| P07 | #21 | 22 | A — control | Tailhade |
| P08 | #25 | 20 | B — termómetro | Tailhade |
| P09 | #27 | 21 | A — control | Servent |
| P10 | #29 | 20 | B — termómetro | Servent |

**5 y 5.** Los datos de contacto no se publican en el repositorio; quedan solo en la planilla privada del equipo.

**Pasaron 11 y el diseño preveía 10.** Se tomaron los **primeros 10 por orden de llegada**, una regla que no depende de mirar las respuestas. La respuesta #34 cumple los criterios y **no se recluta ni se guarda como reemplazo**: el protocolo establece que si alguien abandona se anota la baja y no se sustituye.

**Cada responsable sigue participantes de los dos grupos.** Si una persona hiciera solo las sesiones con pantalla y otra solo las de control, una diferencia entre grupos podría venir del entrevistador. Mezclando, ese efecto se reparte.

### Lo que todavía no ocurrió

| Campo | Estado |
|---|---|
| Sesiones realizadas | **0** de 10 |
| Mediciones de M1 | Ninguna |
| Mediciones de M2 | Ninguna |
| Anomalías observadas | Ninguna |

**Qué falta:** contactar, obtener el consentimiento, correr las 10 sesiones de 20 minutos y enviar el mensaje de seguimiento a los 7-10 días.

### Advertencia sobre una lectura equivocada

De los 16 que llegaron al filtro 7, **11 declararon que tienen que sumar entre cuentas**. Eso **no es M1**.

Lo del formulario es una **declaración**; M1 es una **observación**: en la sesión se le pide el número y se mide si puede darlo sin consultar. Pueden no coincidir, y esa divergencia sería un dato en sí misma. Además, los 11 son justamente los que pasaron ese filtro, así que por construcción casi todos responden lo mismo: de ahí no sale ninguna tasa.

---

## 5. Evidencia

> **PENDIENTE — depende de la ejecución.**

- **A favor:** sin datos.
- **En contra:** sin datos.
- **Interpretación del equipo:** no corresponde. Interpretar sin resultados sería inventar.
- **Limitaciones ya declaradas antes de ejecutar:** n = 10 sin aleatorización real; montos autorreportados; efecto Hawthorne; demora simulada; un solo ciclo; no prueba el producto sino el mecanismo.

---

## 6. Aprendizajes

> **Sobre la hipótesis: ninguno.** No se reunió evidencia para responder la pregunta prioritaria.

Lo que sí se aprendió fuera del experimento, y que cambió el diseño:

- **Separar por objetivo ya está resuelto a escala.** Naranja X Frascos, 19 millones creados en seis meses. Esto refutó una afirmación de la Caja 1 y materializó el riesgo 8 del pre-mortem antes de ejecutar.
- **La pregunta del experimento tuvo que cambiar** de "¿separar ayuda?" a "¿la demora agrega algo por encima de separar?".

**Qué continúa siendo un supuesto:** la hipótesis de valor completa, la de comportamiento, el tamaño relativo de los tres tramos y todo lo relativo a monetización.

---

## 7. Estado de la evidencia y próxima iteración

- **Clasificación: inconclusa.** No es "no respaldada" — esa categoría requiere evidencia válida que no alcance el criterio. Acá no hubo ejecución, así que no hay nada que comparar.
- **Comparación con el criterio:** no corresponde.
- **Decisión de iteración:** **probar otro camino.** Se conserva el problema, el segmento y las tres necesidades de la Caja 4; cambia el mecanismo. Ver iteración 2.
- **Próxima incertidumbre por reducir:** sin cambios respecto del punto de partida.

---

## 8. Nueva posición en la curva de la verdad

> **PENDIENTE.** Sin evidencia nueva, la posición en la curva **no se movió**.

- **Evidencia incorporada sobre la hipótesis:** ninguna.
- **Inversión que se justifica ahora:** la misma que al comenzar. Una prueba rápida, barata y descartable.
- **Qué todavía no se justifica construir:** nada de lo listado en la sección 2. La integración financiera sigue siendo prematura, y lo seguirá siendo hasta que el mecanismo muestre algún efecto.

---

## Mapa de empatía

**No se utilizó.** La consigna lo pide solo si corresponde.

El mapa de empatía sirve para ordenar observaciones de uso cuando hay interacción que interpretar. Este experimento no produce interacción: produce **dos números por participante** — monto propuesto y monto sostenido. El material cualitativo que sí vale la pena recoger ya tiene su propio lugar en la sección 7 de los materiales, como frases textuales y observaciones.

Si el equipo pasa a un experimento con sesiones observadas, el mapa de empatía pasa a corresponder y se agrega.

---

## Registro de iteraciones

Historial completo. No se reescribe ni se borra nada.

### Iteración 1 — 14/09/2026 · Aislar la variable *(ejecutada sobre el diseño, antes de probar)*

- **Por qué se dejó de insistir con la versión anterior:** los grupos diferían en dos variables a la vez. Un resultado favorable no permitía distinguir el efecto de separar del efecto de la demora.
- **Qué supuesto quedó cuestionado:** que separar fuera en sí mismo la propuesta de valor. El análisis competitivo mostró que ya está resuelto a escala.
- **Qué se conserva del canvas:** el problema, el segmento (tramo 1), las tres necesidades de la Caja 4 y la hipótesis de valor.
- **Qué cambió y en qué nivel:** **nivel instrumento.** El grupo control pasó a separar el dinero también. La única diferencia entre grupos quedó siendo la demora.
- **Decisión del equipo:** aplicada antes de ejecutar, registrada en la Caja 8 con fecha.
- **Costo asumido:** como ambos grupos separan, es esperable una diferencia menor y con n = 10 aumenta la probabilidad de caer en la zona gris. Se aceptó.

### Iteración 2 — 05/10/2026 · Cambiar de mecanismo: de la fricción a la información

> **Decisión tomada por el equipo.** El experimento 1 no se ejecuta. Se reemplaza por el experimento 2, descrito en [diseno-experimento.md](diseno-experimento.md).

- **Por qué se dejó de insistir:** el instrumento exige cuatro semanas de contacto por WhatsApp sobre el dinero de cada participante. El equipo considera que la carga sobre el participante es alta. Esto no es un resultado del experimento: es una objeción al instrumento, surgida antes de ejecutarlo.
- **Con qué riesgo del pre-mortem se relaciona:** riesgo 2 — *"la fricción se sintió como perder el control de la propia plata"*, calificado en el canvas como el más probable de los tres.
- **Qué supuesto quedaría cuestionado:** que la fricción sea un mecanismo aceptable para el usuario.
- **Qué se conservaría:** el problema, el segmento y las tres necesidades de la Caja 4. **Cambio de nivel mecanismo, no de problema.**
- **Alternativa propuesta:** la Alternativa A del canvas — Termómetro de meta. Mostrar el costo de un gasto en términos de la meta, en el momento de decidir. No mueve dinero, no requiere demora, se ejecuta en una sesión de 20 minutos por persona más un mensaje de seguimiento.
- **Objeción conocida a la alternativa:** es la que tiene la evidencia más débil de las tres. El riesgo registrado es que informar no cambie conducta — Martina sabía que tenía $200.000 apartados y los gastó igual.
- **Qué lo destrabó:** el relevamiento competitivo del 05/10. La fricción ya existe en el mercado como plazo fijo, es gratuita, es más fuerte que la nuestra, está dentro de las apps que el segmento ya usa, y aun así no la usan para esto. Eso es más evidencia sobre la fricción que la que iban a producir diez personas en cuatro semanas.
- **Decisión del equipo:** **tomada el 05/10/2026.** Se avanza con el Termómetro.
- **Lo que se acotó antes de aceptarlo:** mostrar progreso de una meta ya lo hacen muchas apps de presupuesto, y el problema persiste igual. El experimento no prueba eso. Prueba algo más chico: **traducir un gasto concreto a tiempo de meta, en el momento de decidirlo.**
- **Cómo se blindó el diseño:** la métrica principal pasa a ser la ceguera (M1), que es un hecho observable y puede matar la idea. Y se agrega grupo de control con seguimiento a los 7-10 días, para que M2 compare conducta y no intenciones.
