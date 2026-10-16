# Clase 2: descubrimiento de problemas asistido por IA

**Materia:** Desarrollo de Productos
**Equipo:** Felipe Chain · Juan Ignacio Canabbe · Pedro Tailhade · Felipe Servent
**Fecha:** 14 de octubre de 2026
**Dominio:** compra de comida y bebida en clubes de rugby durante los días de partido

---

## Nota metodológica

Usamos IA para buscar y verificar fuentes y para organizar la información. Las decisiones son del equipo. Marcamos **[HECHO]** (dato de fuente verificable), **[INTERPRETACIÓN]** (lectura nuestra), **[SUPUESTO]** (creencia sin comprobar) y **[EXPERIENCIA DEL EQUIPO]** (lo que vivimos nosotros: vale como punto de partida, no como evidencia).

Advertencias:

1. **Las fuentes sobre filas en estadios son de empresas que venden soluciones para esas filas** (F3, F4) o de clubes y proveedores que las implementan (F5, F6). Las usamos como señal, no como prueba.
2. **Ninguna fuente habla de clubes de rugby amateur.** Todo lo de estadios grandes es de otra escala (miles de personas, ligas profesionales de EE. UU.).
3. **La evidencia más directa que tenemos es nuestra propia experiencia**, y por eso hay que validarla con entrevistas y, sobre todo, **observando la fila un sábado**.
4. Lo marcado **[COMPLETAR]** es trabajo del equipo y está vacío a propósito.

---

## Estacionamiento de soluciones

| Idea | Por qué la estacionamos |
|---|---|
| Página con el menú del buffet: pedís, pagás y retirás mostrando un QR | Es la idea con la que llegamos. Todavía no sabemos si la demora está en pagar o en preparar la comida: si es la cocina, pedir antes no saca la fila, la mueve. |
| Avisar al celular cuando el pedido está listo | Depende de lo anterior. |
| Mostrar en el celular cuánta fila hay en el buffet | No sabemos si saber la espera cambia algo, si igual hay que hacerla. |
| Llevar el pedido a la tribuna | Requiere personal; no es una solución digital. |

---

## 1. Territorio de investigación

- **Dominio:** compra de comida y bebida en el buffet de clubes de rugby los días de partido.
- **Usuario inicial:** jóvenes de 18 a 25 años que van al club a ver partidos (amigos, familiares o parejas de jugadores, socios) y compran en el buffet.
- **Actor secundario:** quien maneja el buffet (el club o un concesionario), porque es quien cobra y quien podría pagar por una solución.
- **Contexto:** sábados de partido en clubes de la URBA, donde se juegan varios partidos seguidos (divisiones inferiores, intermedia, primera) y la gente compra antes, durante los entretiempos y después.
- **Supuestos iniciales:**
  - **[EXPERIENCIA DEL EQUIPO]** La fila del buffet está llena todo el día, porque cada partido trae su propio pico: unos van antes de que arranque, otros en el entretiempo.
  - **[SUPUESTO]** Por hacer la fila te perdés parte de un partido o del rato con tu grupo.
  - **[SUPUESTO]** Hay gente que ve la fila y no compra.
  - **[SUPUESTO]** La demora está más en pagar (efectivo, vuelto, transferencias) que en preparar la comida.
- **Fuera de alcance:** la calidad y el precio de la comida, la seguridad del club, los estadios profesionales, otros deportes (por ahora).

---

## 2. Research secundario

### Problemas potenciales

| # | Problema potencial | Usuario | Contexto | Evidencia | Fuente | Tipo | Preguntas pendientes |
|---|---|---|---|---|---|---|---|
| P1 | La fila del buffet no baja en todo el día porque los partidos se suceden | Asistentes al club | Sábados con varios partidos seguidos | Unos 450 partidos por fin de semana entre las distintas categorías de los 91 clubes de la URBA | F1, F2 | **[HECHO]** la cantidad de partidos (dato de 2019, contenido de marca); **[EXPERIENCIA DEL EQUIPO]** la fila permanente | ¿Cuánta gente hay en la fila en cada momento? ¿Hay algún momento sin fila? |
| P2 | Por hacer fila se pierden parte del partido o del rato con su grupo | Asistentes | Antes y durante los partidos | En una encuesta a hinchas universitarios de EE. UU., 77 % dijo haberse perdido una jugada importante por estar en la fila; la espera promedio declarada es de 15 minutos | F3 | **[HECHO]** en esa encuesta, hecha por una empresa que vende cajas automáticas y sin tamaño de muestra publicado; **[SUPUESTO]** que pase en un club de rugby | ¿Qué se perdieron la última vez? ¿Les importa o es parte de ir al club? |
| P3 | Hay gente que ve la fila y desiste de comprar | Asistentes; pérdida para el buffet | Picos de demanda | 40 % de 3.500 hinchas de 8 países abandonó una fila de comida en el último año (2016). En la encuesta de F3, más de 85 % abandonó alguna vez una compra por la fila, y 81 % compraría más con filas más cortas | F4, F3 | **[HECHO]** en esas encuestas de proveedores; **[SUPUESTO]** que se repita en clubes | ¿Cuántos desisten en un sábado? ¿Qué hacen en cambio? |
| P4 | La demora está en el cobro: efectivo, vuelto, transferencias | Asistentes y buffet | En la caja | La Bombonera incorporó pagos con QR, terminales móviles y autoservicio para reducir filas y demoras de pago | F5 | **[HECHO]** que un estadio grande lo encaró por el lado del pago; **[SUPUESTO]** que en los clubes el cuello de botella sea el mismo | ¿Qué tarda más, pagar o recibir la comida? |
| P5 | La cocina no da abasto en los picos | Buffet | Entretiempos y cambios de partido | Sin fuente | — | **[SUPUESTO]** | Si es así, ¿pedir antes ayuda o solo mueve la fila? |
| P6 | Uno hace la fila por todo el grupo con un pedido grande y demora a los demás | Asistentes | Grupos de amigos o familias | Sin fuente | — | **[SUPUESTO]** | ¿Cómo se organizan los grupos para comprar? |

### Fuentes consultadas

| # | Fuente | Señal que aporta | Limitación |
|---|---|---|---|
| F1 | [La Nación (14/3/2026). "El nuevo Top 14 de la URBA..."](https://www.lanacion.com.ar/deportes/rugby/el-nuevo-top-14-de-la-urba-y-la-clave-hay-que-estar-bien-fisicamente-para-jugar-esta-maraton-nid14032026/) | La URBA tiene 91 clubes en 2026 | No dice cuántos partidos se juegan por sábado en cada club |
| F2 | [Agrofy News / Prensa Volkswagen (6/9/2019)](https://news.agrofy.com.ar/noticia/183990/amarok-se-vuelve-convertir-protagonista-mundo-ovalado-rugby-buenos-aires) | Más de 43.000 jugadores; unos 450 partidos por fin de semana entre todas las categorías; unos 24.000 jugadores por semana | **Contenido de marca de un sponsor**, de 2019. No informa cantidad de espectadores |
| F3 | [Mashgin (2025). "NCAA Fan Concessions Report"](https://blog.mashgin.com/hubfs/Mashgin%202025%20NCAA%20Fan%20Concessions%20Report.pdf) | Espera promedio declarada de 15 minutos; 77 % se perdió una jugada importante; más de 85 % abandonó una compra por la fila; 81 % compraría más con filas cortas; 60 % se siente apurado al comprar | **La empresa vende cajas automáticas.** No publica tamaño de muestra ni método. Es fútbol americano universitario en EE. UU. |
| F4 | [Fast Casual (13/7/2016), sobre el estudio de Oracle Hospitality y Turnkey Intelligence](https://www.fastcasual.com/news/sports-fans-would-embrace-mobile-food-drink-ordering-at-events/) | 3.500 hinchas de 8 países: 40 % abandonó una fila de comida en el último año; 60 % de los no estadounidenses usaría pedidos desde el asiento | Encuesta de 2016 de un proveedor de sistemas de venta. No incluye Argentina. Solo accedimos a la nota, no al informe original |
| F5 | [Mercado (25/10/2024). Fiserv y su alianza en La Bombonera](https://mercado.com.ar/protagonistas/fiserv-presento-su-alianza-para-optimizar-la-experiencia-de-pago-en-la-bombonera) | Boca ya tenía pedido anticipado con retiro y sumó pagos con QR, autoservicio y terminales móviles para bajar filas y demoras de pago | Nota institucional sobre un proveedor. Sin datos medidos. Estadio de 50.000 personas, no un club amateur |
| F6 | [CulturaGeek (3/10/2017). "Waitry, la app para pedir desde el celular"](https://culturageek.com.ar/waitry-app-pedidos-desde-celular/) | Competidor que funciona en Argentina: pedido y pago desde el celular, con modalidad de retiro programado. Dice lograr hasta 20 % más pedidos y 70 % más de ticket promedio | Nota de 2017, cifras declaradas por la empresa. No sabemos si sigue activa ni si la usa algún club |

### Dudas y contradicciones

1. **El pedido anticipado ya existe** en estadios grandes (F5) y como producto (F6). Eso puede leerse de dos formas: que el problema es real y vale la pena resolverlo, o que si los clubes no lo adoptaron es porque algo no funciona a su escala (costo, conexión, buffet manejado por un concesionario). Ninguna fuente lo aclara.
2. **Todas las cifras de abandono y espera vienen de proveedores** que venden la solución. Ninguna es independiente.
3. **No sabemos dónde está el cuello de botella.** F5 sugiere que en estadios es el cobro, pero en un buffet de club puede ser la plancha. Esto define si la idea estacionada sirve o no.
4. **No hay datos de asistencia** a los clubes: sabemos cuántos partidos y jugadores hay, no cuántos espectadores.
5. **Temporada: es el riesgo práctico más urgente.** Las semifinales del Top 14 son el sábado 31 de octubre, la final el 7 de noviembre y las finales de las demás categorías el 14 de noviembre ([ESPN, 12/12/2025](https://espndeportes.espn.com/rugby/nota/_/id/16075247/rugby-urba-fixture-2026-finales-fechas-definidas-buenos-aires)). Quedan muy pocos sábados con todas las divisiones jugando en todos los clubes. Para los experimentos y las pruebas de las clases siguientes vamos a necesitar otros contextos parecidos (hockey, finales, eventos en clubes) o simular la situación.

---

## 3. Fichas de problemas

Fichamos cuatro. P5 y P6 quedan como preguntas para la observación y las entrevistas porque no tienen fuente.

### Ficha A: la fila no baja en todo el día

| Campo | Respuesta |
|---|---|
| Problema observado | Vayas cuando vayas, hay fila en el buffet. |
| Usuario | Jóvenes de 18 a 25 que van al club a ver partidos. |
| Contexto | Sábado de partidos en un club de la URBA. |
| Progreso buscado | Comer o tomar algo sin perderse el partido ni el rato con su grupo. |
| Fricción observada | **[EXPERIENCIA DEL EQUIPO]** Como se juegan varios partidos seguidos, cada uno genera su propio pico: unos compran antes de que empiece, otros en el entretiempo. No hay un momento tranquilo. |
| Consecuencia | **[SUPUESTO]** Tiempo perdido en la fila, partidos vistos a medias. |
| Evidencia | Unos 450 partidos por fin de semana en 91 clubes; nuestra propia experiencia. |
| Fuentes | F1, F2, experiencia del equipo |
| Frecuencia aparente | Todos los sábados de temporada, según nuestra experiencia. Sin medir. |
| Comportamiento observable | **[SUPUESTO]** Ir antes de que arranque el partido o en el entretiempo para "ganarle" a la fila. |
| Alternativas actuales | **[EXPERIENCIA DEL EQUIPO]** Comprar en los locales de comida rápida que hay al lado de algunos clubes y comerlo viendo el partido. **[SUPUESTO]** Ir antes, mandar a uno del grupo, no comprar. |
| Acceso a usuarios | Alto: nosotros y nuestros compañeros vamos a clubes. |
| Supuestos | Que la fila se viva como un problema y no como parte del ritual de ir al club. |
| Evidencia faltante | Cuánta gente hay y cuánto tarda cada uno, medido un sábado real. |

### Ficha B: perderse el partido o el rato con el grupo

| Campo | Respuesta |
|---|---|
| Problema observado | Mientras hacen la fila, se pierden parte del partido. |
| Usuario | Asistentes que van a ver un partido en particular (de un amigo, pareja, hermano). |
| Contexto | Entretiempos y momentos cercanos al inicio de un partido. |
| Progreso buscado | Ver el partido que les interesa. |
| Fricción observada | La compra compite con el partido en el tiempo. |
| Consecuencia | En una encuesta de EE. UU., 77 % se perdió una jugada importante por la fila (F3). |
| Evidencia | F3 (proveedor, sin muestra publicada). |
| Fuentes | F3 |
| Frecuencia aparente | 1 fuente, de otro país y otra escala. |
| Comportamiento observable | **[SUPUESTO]** Mirar el partido desde la fila; volver corriendo. |
| Alternativas actuales | **[SUPUESTO]** Comprar antes de llegar, no comprar. |
| Acceso a usuarios | Alto. |
| Supuestos | Que perderse el partido les importe. En un club el ambiente social puede pesar más que el juego. |
| Evidencia faltante | Qué se perdieron la última vez y si les molestó. |

### Ficha C: ventas perdidas por la fila

| Campo | Respuesta |
|---|---|
| Problema observado | Gente que quería comprar ve la fila y desiste. |
| Usuario | Quien maneja el buffet (pierde la venta) y el asistente (se queda sin comer). |
| Contexto | Picos de demanda. |
| Progreso buscado | Para el buffet: vender todo lo que la gente quiere comprar. |
| Fricción observada | La capacidad de atención en el mostrador es limitada. |
| Consecuencia | 40 % abandonó una fila de comida en el último año (F4); más de 85 % alguna vez (F3); 81 % compraría más con filas cortas (F3). |
| Evidencia | Dos encuestas de proveedores. **[EXPERIENCIA DEL EQUIPO]** Algunos integrantes vimos gente acercarse al buffet, ver la fila e irse sin comprar, y en clubes con locales de comida rápida al lado, gente que pide ahí para llevar y lo come viendo el partido. |
| Fuentes | F3, F4 |
| Frecuencia aparente | 2 fuentes coincidentes, ambas con interés comercial. |
| Comportamiento observable | **[SUPUESTO]** Acercarse, ver la fila y volverse. |
| Alternativas actuales | **[EXPERIENCIA DEL EQUIPO]** Comprar en el local de comida rápida de al lado: la venta no se pierde, se la lleva otro. **[SUPUESTO]** Comprar más cosas en una sola vuelta; llevar comida de casa. |
| Acceso a usuarios | **Medio:** hay que llegar a quien maneja el buffet, que no es parte de nuestro entorno. |
| Supuestos | Que el buffet lo perciba como plata perdida y no como "siempre fue así". |
| Evidencia faltante | Cuánto vende el buffet en un sábado y si nota que pierde ventas. |

### Ficha D: dónde está la demora (caja o cocina)

| Campo | Respuesta |
|---|---|
| Problema observado | La fila avanza lento, pero no sabemos si por cobrar o por preparar. |
| Usuario | Asistentes y buffet. |
| Contexto | El mostrador en los picos. |
| Progreso buscado | Que la fila avance rápido. |
| Fricción observada | **[SUPUESTO]** Pagos en efectivo con vuelto, transferencias que hay que mostrar, una sola caja. |
| Consecuencia | Fila más larga para todos. |
| Evidencia | La Bombonera atacó el problema por el lado del pago (F5). |
| Fuentes | F5 |
| Frecuencia aparente | 1 fuente, de un estadio grande. |
| Comportamiento observable | **[SUPUESTO]** La persona espera en la caja, después espera la comida. |
| Alternativas actuales | Cobro por QR o transferencia, que ya existe en muchos lugares. |
| Acceso a usuarios | Muy alto: se observa sin hablar con nadie. |
| Supuestos | Que la caja sea el cuello de botella. |
| Evidencia faltante | Cronometrar cuánto tarda cada etapa (ver planilla de observación en la sección 9). |

---

## 4. Limpieza y agrupación

### Agrupaciones sugeridas por la IA

1. **B es la consecuencia de A** para el asistente: la fila permanente (A) hace que se pierdan el partido (B). Conviene tratarlos juntos.
2. **C es la otra cara del mismo problema**, vista desde el buffet. Para el pitch importa mucho porque es quien podría pagar, pero tiene otro usuario.
3. **D no es un problema del usuario, es la incógnita técnica más importante:** define si la idea estacionada sirve. No se prioriza con ICE; se responde observando.
4. **Riesgo de solución disfrazada:** llegamos con la idea del pedido anticipado. Si la demora está en la cocina, esa idea no resuelve nada.
5. **P5 y P6 son posibles causas**, sin fuente. Quedan para la observación.

### Decisiones del equipo (propuesta)

| Decisión | Fundamento |
|---|---|
| Fusionamos A y B en un solo problema del asistente | B es la consecuencia de A. |
| Mantenemos C separado, como el problema del cliente que paga | Es otro usuario, y lo necesitamos para la Caja 3 del canvas y para el pitch. |

> **[COMPLETAR]** Revisar en equipo y cambiar lo que no compartan.

---

## 5. Evaluaciones ICE individuales

`ICE = (Impact × Confidence × Ease) / 100`, cada criterio de 1 a 10. *Ease* es la facilidad para conseguir usuarios y evidencia real, no para construir.

> Cada uno completa su tabla **solo, sin mirar la de los demás ni la sección 5.b.** Sin entrevistas, la Confidence no debería pasar de 6.

#### Felipe Chain

| Problema | Impact | Confidence | Ease | ICE | Justificación |
|---|---:|---:|---:|---:|---|
| A+B: la fila no baja y te perdés el partido | 7 | 6 | 9 | 3,78 | Impacto alto porque afecta directo la experiencia de quien va al partido. Confianza media-alta porque hay evidencia razonable de que el problema existe, aunque falta validarlo con datos propios. Ease alta porque es fácil encontrar gente que vivió esa situación y quiera contarla. |
| C: ventas perdidas por la fila | 7 | 5 | 5 | 1,75 | Impacto alto porque son ingresos que se pierden. Confianza media porque hay indicios, pero poca evidencia concreta de que la fila cause ventas perdidas. Ease media porque hay que llegar a vendedores o dueños de puestos, que cuesta más contactar. |

#### Juan Ignacio Canabbe

| Problema | Impact | Confidence | Ease | ICE | Justificación |
|---|---:|---:|---:|---:|---|
| A+B: la fila no baja y te perdés el partido | 8 | 6 | 7 | 3,36 | La espera en las filas hace que los clientes pierdan tiempo del partido y puede empeorar su experiencia en el club. *(Confidence corregida de 7 a 6 en la comparación; ICE original 3,92.)* |
| C: ventas perdidas por la fila | 7 | 5 | 6 | 2,10 | Algunos clientes pueden desistir de comprar al ver la fila, lo que representa una posible pérdida de ventas para el buffet. *(Confidence corregida de 6 a 5 en la comparación; ICE original 2,52.)* |

#### Pedro Tailhade

| Problema | Impact | Confidence | Ease | ICE | Justificación |
|---|---:|---:|---:|---:|---|
| A+B: la fila no baja y te perdés el partido | 9 | 6 | 9 | 4,86 | Es el dolor principal del hincha: cualquiera que va a comer hace la fila y se pierde parte del partido o del tercer tiempo. Se ve en cualquier club un sábado, pero como todavía no hicimos entrevistas no subimos la confianza a más de 6. Es muy fácil conseguir gente para entrevistar porque alcanza con ir al club y hablar con los que están en la fila. |
| C: ventas perdidas por la fila | 7 | 4 | 6 | 1,68 | Afecta los ingresos del club, que pierde ventas cuando la gente ve la fila y decide no comprar. La confianza es baja porque es difícil tener evidencia de cuánta gente se va sin comprar, ya que no queda registro. Es más difícil de indagar porque hay que hablar con los encargados del buffet o del club, que son pocos, y no con cualquier hincha. |

#### Felipe Servent

| Problema | Impact | Confidence | Ease | ICE | Justificación |
|---|---:|---:|---:|---:|---|
| A+B: la fila no baja y te perdés el partido | 8 | 5 | 10 | 4,00 | Impacto alto porque afecta directo la experiencia de quien va al partido. Confianza media porque hay indicios del problema, pero todavía poca evidencia propia. Ease máxima porque casi cualquiera que fue a una cancha vivió esto, así que es fácil conseguir gente para entrevistar. |
| C: ventas perdidas por la fila | 6 | 4 | 4 | 0,96 | Impacto medio porque la pérdida de ventas es real pero indirecta. Confianza baja porque hay poca evidencia de que la fila realmente genere ventas perdidas. Ease media-baja porque hay que llegar a vendedores o dueños de puestos, que son más difíciles de contactar. |

### Tabla consolidada

| Problema | Chain | Canabbe | Tailhade | Servent | Promedio del equipo | IA | Dispersión del equipo (máx − mín) |
|---|---:|---:|---:|---:|---:|---:|---:|
| A+B | 3,78 | 3,36 | 4,86 | 4,00 | 4,00 | 2,70 | **1,50** |
| C | 1,75 | 2,10 | 1,68 | 0,96 | 1,62 | 1,40 | 1,14 |

> Puntajes después de la comparación (sección 6). Antes de corregir la Confidence de Canabbe, C era el de mayor dispersión (1,56); después, lo es A+B (1,50), por la diferencia de Impact entre Canabbe y Chain (7-8) y Tailhade (9).

---

## 5.b Evaluación ICE de la IA

| Problema | I | C | E | ICE | Qué parte es inferencia | Qué cambiaría el puntaje |
|---|---:|---:|---:|---:|---|---|
| A+B: fila y partido perdido | 6 | 5 | 9 | **2,70** | Que en un club pase lo mismo que en estadios de EE. UU.; Confidence 5 porque se apoya en la experiencia del equipo más fuentes de proveedores | Sube si la observación muestra filas largas en todos los partidos. Baja si en las entrevistas la fila aparece como parte del ritual y nadie se queja |
| C: ventas perdidas | 7 | 4 | 5 | **1,40** | Todo lo de abandono viene de encuestas de proveedores; no sabemos si el buffet lo nota | Sube si un encargado de buffet dice que pierde ventas en los picos. Ease sube si alguno de ustedes conoce al concesionario |

### Advertencias de la IA

1. La evidencia externa más fuerte (F3, F4) es de empresas que venden la solución.
2. El Ease alto de A+B depende de que ustedes vayan a clubes. Confírmenlo.
3. **Antes de priorizar, respondan D.** Si la demora es la cocina, cambia el problema que vale la pena resolver.
4. La IA no elige un ganador.

---

## 6. Comparación de evaluaciones

| Pregunta | Respuesta del equipo |
|---|---|
| ¿Dónde coincidimos? | Los cuatro integrantes y la IA ponemos A+B primero, con bastante diferencia sobre C. En A+B, el Impact quedó alto en todos (de 7 a 9). |
| ¿Dónde aparecen diferencias? | Antes de discutir, la mayor dispersión estaba en C (1,56): Canabbe le dio Confidence 6 y Ease 6, Servent 4 y 4. Al conversarlo, la diferencia se explicó por **experiencia del equipo**: algunos vimos gente acercarse al buffet, ver la fila e irse sin comprar, y en clubes con locales de comida rápida al lado, gente que compra ahí para llevar y lo come viendo el partido. Eso sugiere que la venta no siempre se pierde: a veces se la lleva un competidor. Justifica algo más de confianza que la de las encuestas de otros países, pero no es una medición. En A+B, el Ease va de 7 (Canabbe) a 10 (Servent) y el Impact de 7 (Chain) a 9 (Tailhade). La IA le puso a A+B un Impact más bajo (6) que todos nosotros. |
| ¿Qué puntaje quedó débilmente justificado? | La Confidence 7 de A+B y 6 de C (Canabbe): la rúbrica reserva el 7 para "evidencia diversa, verificable y consistente", y todavía no hicimos entrevistas; además, su justificación explica el Impact pero no la Confidence ni el Ease. Lo corregimos (ver puntajes modificados). El Impact 9 de A+B (Tailhade) lo llama "el dolor principal del hincha", pero todavía no medimos cuánto se espera. El Ease 10 de A+B (Servent) supone que cualquiera que vivió la fila va a querer contarla. |
| ¿Qué criterio depende más de supuestos? | El Impact. En A+B se apoya en nuestra experiencia, sin la espera medida; en C, en encuestas de proveedores de otros países. |
| ¿La IA usó evidencia o completó vacíos? | Usó las fuentes de las fichas y marcó que las más fuertes son de empresas que venden la solución. Fue más conservadora en el Impact porque no tiene nuestra experiencia de ir al club. Señaló una incógnita que no habíamos visto: si la demora es de la caja o de la cocina. |
| ¿*Ease* está pesando demasiado? | No en el ranking: aunque A+B tuviera Ease 6, seguiría primero (por ejemplo, con los puntajes de Tailhade daría 9 × 6 × 6 / 100 = 3,24, contra 1,68 de C). Gana por Impact. |

**Puntajes modificados y motivo:** Canabbe bajó su Confidence: A+B de 7 a 6 y C de 6 a 5. La rúbrica reserva el 7 para evidencia diversa y verificable, y todavía no hicimos entrevistas. Su ICE pasó de 3,92 a 3,36 (A+B) y de 2,52 a 2,10 (C).

**Incertidumbres que permanecen:** si la espera es tan larga como la recordamos (la medimos el sábado), si la demora es de la caja o de la cocina, y cuánta gente se va sin comprar. Lo que vimos de gente que se va es experiencia nuestra; el sábado hay que contarlo en la observación.

---

## 7. Crítica del problema finalista: A+B

### Debilidades

1. **El impacto está inferido.** Que la fila exista lo sabemos por experiencia; que moleste lo suficiente como para cambiar de comportamiento, no.
2. **Puede ser parte del ritual.** En un club, la fila es también un lugar de encuentro. Puede que no se viva como tiempo perdido.
3. **La evidencia externa es de otra escala y de proveedores.**
4. **¿Lo elegimos porque nos pasa a nosotros?** Sí, en parte. Es la experiencia del equipo; falta ver si es la de los demás.
5. **La solución ya existe en estadios grandes.** Si los clubes no la adoptaron, hay que entender por qué.

### Explicaciones alternativas

- La demora está en la cocina y pedir antes no ayuda.
- La gente no compra más aunque la fila sea corta: compra lo mismo, solo que antes.
- El buffet no quiere cambiar su forma de cobrar (concesionario, efectivo).

### Lo que lo refutaría

- Que en la observación la espera sea de pocos minutos.
- Que los entrevistados digan que la fila no les molesta o que la aprovechan para charlar.
- Que el buffet no quiera ninguna herramienta nueva.

### Respuesta del equipo

**Sí, seguimos eligiendo A+B.** Aceptamos que el impacto todavía está inferido (debilidad 1), que la evidencia externa es de otra escala y de proveedores (3) y que lo elegimos en parte porque nos pasa a nosotros (4).

Lo que nos hace sostenerlo es una señal de comportamiento: en clubes que tienen locales de comida rápida al lado, hay gente que prefiere comprar ahí para llevar y comerlo viendo el partido. Si la fila fuera solo parte del ritual (debilidad 2), no se irían a comprar a otro lado.

Que el pedido anticipado ya exista en estadios grandes (debilidad 5) lo tomamos como una señal de que el problema es real y como una pregunta para el buffet: por qué no se usa en los clubes.

Antes de avanzar, el sábado vamos a medir cuánto dura la espera y si la demora está en la caja o en la cocina. Si la espera es corta o los entrevistados dicen que no les molesta, revisamos el problema.

---

## 8. Problema priorizado (propuesta)

**A+B: en los días de partido, la fila del buffet no baja y comprar significa perderse parte del partido.**

| Criterio | Puntaje | Fundamento |
|---|---:|---|
| Impact | 6 | Cuesta tiempo y partidos, todos los sábados. Sin medir. |
| Confidence | 5 | Experiencia del equipo y encuestas de proveedores en otros países. |
| Ease | 9 | Cualquier sábado se puede ir a un club a observar y entrevistar. |
| **ICE** | **2,70** | |

### Redacción final

**Versión breve:**

> Quienes van a un club de rugby un día de partido tienen que hacer una fila larga para comprar comida en el buffet, y como se juegan varios partidos seguidos, no hay un momento del día en que la fila baje.

**Versión centrada en el comportamiento:**

> El asistente quiere comer algo y busca el momento con menos gente: antes de que empiece un partido o en el entretiempo. Pero el resto piensa lo mismo, así que igual encuentra fila, y mientras espera se pierde parte del partido o del rato con su grupo.

**Versión completa, con evidencia e incertidumbre:**

> **Los jóvenes de 18 a 25 años que van a clubes de rugby de la URBA los días de partido** tienen dificultades para **comprar comida o bebida sin perderse el partido** cuando **se juegan varios partidos seguidos y cada uno genera su propio pico de demanda**, debido a **que todos eligen los mismos momentos para comprar (antes del partido o en el entretiempo) y el buffet atiende de a uno**. Esto genera **tiempo perdido en la fila y partidos vistos a medias**.
>
> Encontramos señales en nuestra propia experiencia como asistentes, en la escala de la actividad (unos 450 partidos por fin de semana en 91 clubes, F1 y F2) y en encuestas de estadios de otros países, donde la mayoría de los asistentes dice haberse perdido una jugada importante por la fila (F3) y haber abandonado alguna vez una compra (F3, F4).
>
> Todavía necesitamos comprobar: **(a)** cuánto dura realmente la espera en un club; **(b)** si la demora está en el cobro o en la cocina; **(c)** si la fila se vive como un problema o como parte del ritual; **(d)** si el buffet pierde ventas y le importa.

### Justificación del equipo [COMPLETAR]

```text
Priorizamos este problema porque:

El criterio ICE más sólido es:

El criterio ICE más incierto es:

La evidencia más fuerte que tenemos es:

La principal debilidad de nuestra elección es:

Podríamos estar equivocados si:

La próxima evidencia que necesitamos obtener es:
```

---

## 9. Personas sintéticas, observación y entrevistas

> Las personas sintéticas no son evidencia. Sirven para preparar las preguntas.

### Persona 1: "La que va a ver a su grupo"

| Campo | Contenido |
|---|---|
| Descripción | 21 años. Va al club casi todos los sábados a ver jugar a amigos o a su pareja, y se queda varios partidos. |
| Objetivo | Ver los partidos que le importan y pasar la tarde con su grupo. |
| Comportamientos | **[SUPUESTO]** Compra una o dos veces por tarde. Elige el entretiempo o un momento previo a un partido. |
| Frustraciones | **[SUPUESTO]** Llegar a la tribuna con el partido empezado. |
| Restricciones | Tiene poco margen entre partido y partido. |
| Alternativas actuales | **[SUPUESTO]** Mandar a uno del grupo con un pedido para todos; no comprar. |
| Evidencia | F3 (jugadas perdidas por la fila), experiencia del equipo. |
| Solo una persona real puede decir | ¿Cuánto esperó la última vez? ¿Qué se perdió? ¿Le molestó o lo toma como parte del día? |

### Persona 2: "El encargado del buffet"

| Campo | Contenido |
|---|---|
| Descripción | Maneja el buffet del club, propio o como concesión. Atiende con pocas personas en los picos. |
| Objetivo | Vender lo más posible en el día sin desbordarse. |
| Comportamientos | **[SUPUESTO]** Cobra y entrega en el mismo mostrador; prepara parte de la comida en el momento. |
| Frustraciones | **[SUPUESTO]** Los picos de los entretiempos lo superan. |
| Restricciones | Personal, espacio de cocina, conexión. |
| Alternativas actuales | **[SUPUESTO]** Preparar comida de antemano; sumar una persona en la caja. |
| Evidencia | F4, F3 (abandono de compras), F5 (estadios que atacan la demora de cobro). |
| Solo una persona real puede decir | ¿Pierde ventas en los picos? ¿Qué tarda más, cobrar o preparar? ¿Pagaría por algo que lo ayude? |

**Por qué estas dos:** la Persona 1 es la usuaria del problema y la 2 es quien podría pagar. Si a la 1 no le molesta la fila, o si la 2 no pierde ventas, el problema pierde fuerza para el pitch.

### Planilla de observación para el sábado

La primera evidencia propia se consigue mirando, sin hablar con nadie. Dos integrantes, un cronómetro y esta tabla:

| Hora | Momento (antes de partido / entretiempo / otro) | Personas en la fila | Persona n.º | Entra a la fila | Llega a la caja | Termina de pagar | Recibe la comida | ¿Efectivo, QR o transferencia? | ¿Alguien se acercó y se fue sin comprar? |
|---|---|---:|---:|---|---|---|---|---|---|
| | | | | | | | | | |

Con 10 a 15 personas cronometradas alcanza para responder D: **¿qué tramo es el más largo, la fila hasta la caja, el pago o la espera de la comida?**

### Guion de entrevista para asistentes

1. Contame cómo fue el último sábado que fuiste al club. ¿A qué hora llegaste, qué partidos viste?
2. ¿Compraste algo en el buffet? ¿En qué momento fuiste y por qué ese?
3. ¿Cuánto tardaste desde que te pusiste en la fila hasta que tuviste la comida?
4. ¿Qué pasaba en la cancha mientras tanto? ¿Te perdiste algo?
5. ¿Alguna vez viste la fila y decidiste no comprar? ¿Qué hiciste en cambio?
6. ¿Cómo se organizan con tu grupo para comprar?
7. ¿Cómo pagaste? ¿Cuánto tardó esa parte?
8. ¿Cuántas veces comprás en una tarde?
9. De todo esto, ¿qué te molesta de verdad y qué te parece parte de ir al club?

### Guion breve para el buffet

1. Contame cómo es un sábado con varios partidos para ustedes.
2. ¿En qué momentos se les junta más gente?
3. En esos momentos, ¿qué es lo que más tarda: cobrar o preparar?
4. ¿Notan gente que se va sin comprar?
5. ¿Cómo cobran hoy? ¿Qué porcentaje es efectivo, más o menos?
6. ¿Probaron algo para que la fila avance más rápido? ¿Qué pasó?

**Reglas:** no mencionar la app ni el QR; pedir siempre la última vez concreta; anotar frases textuales; si alguien propone una solución, anotarla en el estacionamiento y seguir preguntando por la situación.

### Plan [COMPLETAR]

| Decisión | Definición |
|---|---|
| Club y fecha de observación | **[COMPLETAR]** |
| Entrevistas a asistentes | Mínimo 3, jóvenes de 18 a 25 que vayan seguido al club. |
| Entrevista al buffet | Al menos 1 encargado o concesionario. |
| Duplas | **[COMPLETAR]** Uno conduce o cronometra, otro registra. |
| Fecha límite | Antes de la Clase 3. |

---

## Registro de observación y entrevistas [COMPLETAR]

### Observación del sábado

- Club, fecha, partidos que se jugaban:
- Personas cronometradas:
- Tramo más largo (fila / pago / espera de comida):
- Personas que se fueron sin comprar:
- Medios de pago observados:

### Entrevista 1

- Fecha / Entrevistador / Registrador:
- Perfil:

**Situaciones reales relatadas**
-

**Comportamientos y alternativas actuales**
-

**Consecuencias observadas**
-

**Frases relevantes**
-

**Contradicciones con nuestra hipótesis**
-

### Síntesis [COMPLETAR]

| Pregunta | Respuesta |
|---|---|
| ¿Cuánto dura la espera? | |
| ¿Qué tarda más: cobrar o preparar? | |
| ¿La fila molesta o es parte del ritual? | |
| ¿El buffet pierde ventas? | |
| ¿Qué contradijo nuestra hipótesis? | |

---

## 10. Revisión y entrega

- [x] Territorio
- [x] Entre 5 y 10 problemas potenciales: 6
- [x] Fuentes originales y verificadas: 6, con limitaciones
- [x] Fichas: 4
- [x] Agrupación de la IA y decisiones propuestas
- [ ] **ICE individuales: pendiente**
- [x] ICE de la IA
- [ ] **Comparación: pendiente**
- [x] Crítica del finalista
- [ ] **Decisión y justificación del equipo: pendiente**
- [x] Redacción del problema: tres versiones
- [x] Dos personas sintéticas
- [ ] **Role-play: pendiente**
- [x] Guiones y planilla de observación
- [ ] **Observación y entrevistas reales: pendiente**

### Cierre del equipo [COMPLETAR]

```text
El problema que decidimos investigar es:

La evidencia más fuerte que encontramos es:

El supuesto más riesgoso es:

La pregunta más importante para los usuarios reales es:
```
