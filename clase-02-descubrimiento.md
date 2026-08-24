# Clase 2 — Descubrimiento de problemas asistido por IA

**Materia:** Product Development
**Equipo:** Felipe Chain · Juan Ignacio Canabe · Pedro Tailhade · Felipe Servent
**Fecha de trabajo:** 24 de agosto de 2026
**Dominio investigado:** Finanzas personales de jóvenes en Argentina

---

## Nota metodológica sobre el uso de IA en este documento

Este documento se elaboró con asistencia de IA siguiendo el contrato de uso de la consigna. Para que la trazabilidad sea auditable, se aplican estas convenciones a lo largo de todo el archivo:

| Marca | Significado |
|---|---|
| **[HECHO]** | Dato publicado por una fuente identificable, con URL verificable. |
| **[INTERPRETACIÓN]** | Lectura que hace el equipo a partir de uno o más hechos. |
| **[SUPUESTO]** | Creencia del equipo todavía no respaldada por evidencia. |
| **[COMPLETAR]** | Espacio que debe llenar el equipo; la IA no debe inventarlo. |

Advertencias importantes que el equipo asume explícitamente:

1. **Toda la evidencia de este archivo es research secundario.** Ninguna proviene de entrevistas propias. Nada aquí está validado.
2. **Ninguna fuente fue citada sin abrirla.** Las fuentes listadas en la sección 2 fueron consultadas y su contenido verificado contra lo que la IA afirmaba.
3. **Existe un desajuste etario documentado** entre parte de la evidencia disponible (adolescentes de 13 a 19 años) y el usuario que decidimos investigar (18 a 30 años). Está señalado en cada punto donde afecta la conclusión y es la principal limitación de este research.
4. **Este documento cubre hasta el Paso 3 de la consigna.** La priorización ICE, la crítica del finalista, la redacción del problema, las personas sintéticas y el guion de entrevistas (Pasos 4 a 15) todavía no están hechos. Nada de lo que sigue debe leerse como una decisión tomada: son cuatro problemas fichados y comparables, no un problema elegido.

---

## Estacionamiento de soluciones

Ideas de producto, funcionalidad o herramienta que aparecieron durante la investigación y que **deliberadamente no desarrollamos** en esta clase. Se registran para no perderlas y se retoman recién cuando el problema esté validado con usuarios reales.

| # | Idea que surgió | En qué paso apareció | Por qué la estacionamos |
|---|---|---|---|
| 1 | Una app que unifique el saldo de todas las billeteras virtuales en una sola pantalla | Paso 2, al leer sobre fragmentación de cuentas | Es una solución a un problema que todavía no medimos. No sabemos si la dispersión molesta o si a los usuarios les resulta indistinta. |
| 2 | Un alertador de vencimientos de tarjeta y cuotas | Paso 2, al leer los datos de mora | Asume que la causa de la mora es el olvido. La evidencia disponible apunta más a falta de ingresos que a desorganización. |
| 3 | Un simulador que compare rendimientos de cuentas remuneradas | Paso 3 | Resuelve un problema de información, pero no sabemos si los jóvenes efectivamente buscan comparar o directamente no consideran la opción. |
| 4 | Categorización automática de gastos con IA | Paso 3, al revisar P5 y P6 | Es una solución disfrazada de problema. La verdadera incógnita es si el usuario quiere categorizar sus gastos. |
| 5 | Un curso o contenido de educación financiera | Paso 2, al leer la demanda declarada de educación financiera (P4) | La evidencia muestra demanda declarada, pero demanda declarada no es comportamiento. Riesgo alto de construir sobre una opinión. |

> Nada de esta tabla se discute hasta después de las entrevistas reales.

---

## 1. Territorio de investigación

- **Dominio:** Gestión del dinero personal del día a día en Argentina — ingresos, gastos, ahorro y deuda de corto plazo. No incluye inversión sofisticada ni mercado de capitales.

- **Usuario inicial:** Personas de 18 a 30 años con ingresos propios (empleo formal, informal, changas o freelance), que cobran y gastan mayoritariamente por medios digitales y que administran su plata sin asesoramiento profesional.

- **Contexto:** El mes corriente. Desde que entra el dinero hasta que se termina: decidir cuánto gastar, dónde dejar la plata, si guardar algo y cómo llegar a fin de mes. Especialmente en un entorno donde el dinero está repartido entre varias billeteras virtuales, cuentas bancarias y efectivo.

- **Supuestos iniciales** (los marcamos como supuestos, no como diagnóstico):
  - **[SUPUESTO]** Los jóvenes no tienen una visión consolidada de cuánta plata tienen realmente disponible.
  - **[SUPUESTO]** La dificultad para ahorrar se debe en parte a falta de método, no solamente a falta de ingresos.
  - **[SUPUESTO]** El acceso masivo a billeteras digitales no mejoró la capacidad de planificar.
  - **[SUPUESTO]** Los jóvenes abandonan las herramientas de registro de gastos a los pocos días de empezar.
  - **[SUPUESTO]** Existe vergüenza o incomodidad para hablar de deudas propias, lo que dificultaría la investigación primaria.

- **Fuera de alcance:**
  - Menores de 18 años (aunque parte de la evidencia disponible los cubre; ver limitación en la sección 2).
  - Inversión avanzada, trading, cripto como actividad especulativa.
  - Educación financiera como política pública o contenido curricular.
  - Diseño de productos financieros, tasas o regulación.
  - La macroeconomía argentina en sí misma: nos interesa como contexto, no como objeto de estudio.

### Control del equipo

| Pregunta de control | Respuesta |
|---|---|
| ¿El dominio es suficientemente concreto para investigar? | Sí. Acotamos a la gestión mensual del dinero, no a "finanzas" en general. |
| ¿Podemos reconocer al usuario que describimos? | Sí. Es un perfil frecuente en nuestro entorno inmediato: compañeros de cursada con trabajo. |
| ¿El contexto representa una situación real? | Sí, aunque todavía no observada por nosotros. |
| ¿Marcamos nuestros supuestos como supuestos? | Sí, con la etiqueta [SUPUESTO]. |
| ¿Definimos qué no investigaremos? | Sí, en "Fuera de alcance". |

---

## 2. Research secundario

Búsqueda de señales de problemas en fuentes públicas: informes de organismos, estudios de consultoras, notas periodísticas con datos primarios y análisis de centros de estudios. Cada afirmación fue contrastada abriendo la fuente.

### Problemas potenciales

| # | Problema potencial | Usuario | Contexto | Evidencia | Fuente | Hecho / interpretación / supuesto | Preguntas pendientes |
|---|---|---|---|---|---|---|---|
| P1 | El dinero queda repartido entre varias billeteras, cuentas y efectivo, sin una visión consolidada del disponible real | Jóvenes con ingresos digitales | Decisiones de gasto cotidianas | El 70% de los argentinos usó billeteras virtuales en los últimos seis meses; conviven Mercado Pago, Ualá, Naranja X, Personal Pay y Cuenta DNI, y la competencia por tasas cambia las condiciones con frecuencia, lo que empuja a repartir el dinero | [Infobae — Cuentas remuneradas](https://www.infobae.com/economia/2026/08/07/cuentas-remuneradas-cuales-son-las-billeteras-y-bancos-que-mas-rendimiento-ofrecen-a-sus-clientes/) | **[HECHO]** la adopción y la multiplicidad de plataformas. **[INTERPRETACIÓN]** que eso produzca pérdida de visión consolidada | ¿Cuántas billeteras usa efectivamente una persona? ¿Sabe cuánto tiene en total sin abrir cada app? |
| P2 | Endeudamiento temprano con incumplimiento de pagos | Jóvenes de 18 a 30, sobre todo menores de 25 | Créditos y consumos en fintech, billeteras y tarjetas no bancarias | La mora en menores de 25 años es del 38,2%, la más alta de todas las franjas etarias; en menores de 35 supera el 25% y llega a picos del 50% según el tipo de acreedor. La mora general de personas físicas era 17,4% en junio de 2026 | [Infobae — Morosidad en menores de 25](https://www.infobae.com/economia/2026/08/05/la-morosidad-en-los-creditos-de-bancos-y-billeteras-tiene-su-foco-principal-en-los-menores-de-25-anos/) (informe del Centro de Estudios de la Ciudad con apoyo de Fundación Friedrich Ebert) | **[HECHO]** las tasas de mora | ¿Por qué caen en mora? ¿Es falta de ingreso, desconocimiento del costo o desorganización? |
| P3 | El ahorro se inicia pero no se sostiene: se gasta antes de lo planeado | Jóvenes que declaran querer ahorrar | Mes a mes, con metas de ahorro difusas | Solo el 49% logra ahorrar de manera sostenida y el 29% gasta sus ahorros antes de lo planeado | [Sustenomics — Adolescentes y finanzas](https://sustenomics.com/adolescentes-y-finanzas-el-mayor-acceso-a-herramientas-financieras-no-significa-mejores-habitos/) (estudio de Junior Achievement Argentina y CEPE-UTDT, +5.000 adolescentes de 14 a 19 años, 2024) | **[HECHO]** las cifras. **[SUPUESTO]** que se repliquen en 18 a 30 | ¿Qué pasa concretamente cuando el ahorro se rompe? ¿Es un gasto grande o una acumulación de gastos chicos? |
| P4 | El acceso a herramientas digitales creció mucho más rápido que la capacidad de usarlas bien | Jóvenes nativos digitales | Uso cotidiano de billeteras | La exclusión financiera entre adolescentes cayó del 41% al 9% en dos años y el uso de billeteras digitales pasó del 51% (2022) al 89% (2024); sin embargo los hábitos no mejoraron en la misma proporción y el 79% reclama más educación financiera | [Sustenomics](https://sustenomics.com/adolescentes-y-finanzas-el-mayor-acceso-a-herramientas-financieras-no-significa-mejores-habitos/) | **[HECHO]** el salto de acceso. **[INTERPRETACIÓN]** la brecha acceso-competencia | ¿La brecha se manifiesta en errores concretos y costosos o solo en una sensación de inseguridad? |
| P5 | Gastos chicos y recurrentes que no se registran ni se perciben | Cualquier persona con consumo digital | Consumo diario y suscripciones | Los consumos pequeños automáticos — el café, las suscripciones olvidadas — pueden representar entre el 10% y el 12% del ingreso mensual sin que se note | [Naranja X — Gastos hormiga](https://www.naranjax.com/blog/los-gastos-hormiga-pueden-comerte-la-billetera) | **[INTERPRETACIÓN]** — es contenido de marca de una fintech, no un estudio independiente. Confianza baja | ¿El dato del 10-12% tiene un estudio detrás? ¿Los usuarios perciben este gasto como un problema o como parte normal de vivir? |
| P6 | Los métodos de registro de gastos se abandonan a los pocos días | Quienes intentan ordenarse | Al empezar a usar una app o planilla | Se reporta que muchos usuarios abandonan las apps de finanzas personales después de unos días porque no ven resultados inmediatos | Contenido de blogs de finanzas personales del ecosistema hispanohablante | **[SUPUESTO]** — no encontramos un estudio con metodología que respalde esto. Es el punto más débil de nuestro research | ¿Existe evidencia real de abandono? ¿Cuánto dura efectivamente el intento de registrar gastos? |
| P7 | Ingresos irregulares e informalidad que rompen cualquier planificación mensual | Jóvenes en empleo informal o changas | Meses de ingreso variable | Entre los jóvenes de 16 a 29 años, el 58% de los varones y el 60% de las mujeres trabaja en condiciones informales, y la desocupación del segmento es del 17,2% | [El Cronista — La paradoja del ahorro](https://www.cronista.com/economia-politica/la-paradoja-del-ahorro-2-de-cada-3-argentinos-resignan-consumos-pero-un-sector-tapado-logra-guardar-dinero/) (Brújula Social Consumo, Pulso Research, enero de 2026) | **[HECHO]** informalidad y desempleo. **[INTERPRETACIÓN]** que impidan planificar | ¿Cómo planifica alguien que no sabe cuánto va a cobrar? ¿Qué hace distinto de quien tiene sueldo fijo? |
| P8 | No se sabe con precisión cuánto se ahorra | Jóvenes que sí logran guardar plata | Fin de mes | El 50,2% de los jóvenes de 16 a 29 declara poder guardar dinero a fin de mes — el único segmento etario con capacidad de ahorro — pero el 29,9% no puede definir con precisión cuánto ahorra mensualmente | [El Cronista — La paradoja del ahorro](https://www.cronista.com/economia-politica/la-paradoja-del-ahorro-2-de-cada-3-argentinos-resignan-consumos-pero-un-sector-tapado-logra-guardar-dinero/) | **[HECHO]** ambas cifras | ¿Por qué no lo sabe? ¿No lleva registro o el dinero está disperso y no puede sumarlo? |

### Fuentes consultadas

Todas fueron abiertas y verificadas. Se indica qué señal aportó cada una y qué limitación tiene.

1. **[Infobae — "La morosidad en los créditos de bancos y billeteras tiene su foco principal en los menores de 25 años" (5 de agosto de 2026)](https://www.infobae.com/economia/2026/08/05/la-morosidad-en-los-creditos-de-bancos-y-billeteras-tiene-su-foco-principal-en-los-menores-de-25-anos/)** — Señal: mora del 38,2% en menores de 25 años, la más alta del país. Atribuye la causa a informalidad laboral, desregulación financiera con tasas hasta 100 puntos por encima de la banca tradicional, y microsegmentación algorítmica sobre poblaciones vulnerables. El 36% de los deudores jóvenes se concentra en billeteras digitales. *Limitación:* el informe original es del Centro de Estudios de la Ciudad con apoyo de la Fundación Friedrich Ebert; no accedimos al documento completo, solo a la cobertura periodística.

2. **[El Cronista — "Generación default: la mora desaceleró luego de 19 meses, pero 9 de cada 10 jóvenes deben plata"](https://www.cronista.com/economia-politica/generacion-default-la-mora-desacelero-luego-de-19-meses-pero-9-de-cada-10-jovenes-deben-plata/)** — Señal: mora del 42,59% en proveedores no financieros de crédito y 32,23% en tarjetas no bancarias, contra 17,97% en bancos privados. Fuentes: Consultora 1816 y Centro de Estudios de la Ciudad, agosto de 2026. *Limitación:* el titular dice "9 de cada 10 jóvenes deben plata", una formulación más alarmante que el dato que efectivamente sostiene el cuerpo de la nota. Lo tratamos con cautela.

3. **[El Cronista — "La paradoja del ahorro"](https://www.cronista.com/economia-politica/la-paradoja-del-ahorro-2-de-cada-3-argentinos-resignan-consumos-pero-un-sector-tapado-logra-guardar-dinero/)** — Señal: el 66,4% de los hogares no logra ahorrar, pero los jóvenes de 16 a 29 son el único segmento que sí puede (50,2%), y casi un tercio de ellos no sabe cuánto ahorra. Fuente: Brújula Social Consumo de Pulso Research, enero de 2026. *Limitación:* la nota no publica el tamaño de la muestra. Además, el director de la consultora explica la capacidad de ahorro juvenil por no pagar vivienda ni servicios, lo que sugiere que buena parte del segmento vive con sus padres.

4. **[Sustenomics — "Adolescentes y finanzas: el mayor acceso a herramientas financieras no significa mejores hábitos"](https://sustenomics.com/adolescentes-y-finanzas-el-mayor-acceso-a-herramientas-financieras-no-significa-mejores-habitos/)** — Señal: la brecha entre inclusión y competencia financiera. Estudio de Junior Achievement Argentina y el CEPE de la Universidad Di Tella con apoyo de BBVA, más de 5.000 adolescentes de 14 a 19 años, segunda edición, 2024. *Limitación crítica:* la población es de 14 a 19 años. Solo un tramo mínimo se superpone con nuestro usuario.

5. **[Los Andes — "6 de cada 10 adolescentes prefiere pagar con billetera virtual que con efectivo"](https://www.losandes.com.ar/economia/en-argentina-6-de-cada-10-adolescentes-prefiere-pagar-con-billetera-virtual-que-con-efectivo)** — Señal: el 67% de los jóvenes de 13 a 17 tiene cuenta digital y 6 de cada 10 dice que lo ayuda a controlar mejor sus gastos. Fuente: consultora Provokers para Mercado Pago, 406 adolescentes de 13 a 17 años, junio-julio de 2024. *Limitación grave:* estudio encargado por Mercado Pago, sobre usuarios de Mercado Pago, midiendo la utilidad percibida de Mercado Pago. Conflicto de interés evidente. Lo usamos únicamente como señal de adopción, nunca como evidencia de que la herramienta mejore el control.

6. **[Infobae — Encuesta "Los argentinos y el dinero" (10 de febrero de 2026)](https://www.infobae.com/economia/2026/02/10/bancos-o-billeteras-virtuales-una-encuesta-revela-que-prefieren-los-argentinos-para-cobrar-el-sueldo-y-gestionar-el-dinero/)** — Señal: el 78% de los jóvenes considera más práctico cobrar el sueldo por billetera virtual y valora la gestión centralizada de gastos y pagos. Fuente: Isonomía Consultores. *Limitación:* la nota no publica muestra ni metodología, y no desagrega por edad con precisión.

7. **[Infobae — "Cuentas remuneradas: cuáles son las billeteras y bancos que más rendimiento ofrecen" (7 de agosto de 2026)](https://www.infobae.com/economia/2026/08/07/cuentas-remuneradas-cuales-son-las-billeteras-y-bancos-que-mas-rendimiento-ofrecen-a-sus-clientes/)** — Señal: el 70% de los argentinos usó billeteras virtuales en los últimos seis meses (Estudio de Digitalización e Inclusión Financiera 2026, Many Minds Group para Mastercard), y la competencia entre plataformas mantiene las tasas en cambio permanente. *Uso:* respalda la existencia de un ecosistema fragmentado, no la molestia que produce.

8. **[BCRA-CAF — Encuesta de Medición de Capacidades Financieras en Argentina (2017)](https://www.bcra.gob.ar/archivos/Pdfs/BCRAyVos/Encuesta%20de%20Medici%C3%B3n%20de%20Capacidades%20Financieras%20en%20Argentina%20-%20BCRA-CAF%20(2017).pdf)** — Señal: Argentina obtuvo 11,5 puntos en educación financiera, puesto 37 de 39 economías, y 4,5 en comportamiento financiero, puesto 36 de 39. Entre los jóvenes de 18 a 29, en el 44% de los casos las decisiones financieras las toma otro miembro de la familia. Muestra de 1.224 personas mayores de 18, representativa a nivel nacional, margen de error ±2,8%. *Limitación:* tiene ocho años. El ecosistema financiero argentino cambió por completo desde entonces. Lo incluimos como línea de base histórica, no como descripción del presente.

### Dudas y contradicciones

1. **Contradicción entre versiones del mismo estudio.** Distintas coberturas del informe de Junior Achievement y CEPE-UTDT reportan cifras diferentes: una versión indica que el 78% tiene la costumbre de ahorrar, el 48% lo mantiene y el 30% lo gasta antes de lo planificado; otra indica 49% de ahorro sostenido y 29% que gasta antes de lo previsto. **No pudimos acceder al informe original para resolverlo.** Adoptamos las cifras más conservadoras (49% / 29%) y dejamos constancia de la discrepancia. Es una tarea pendiente conseguir el PDF original.

2. **Contradicción de fondo entre fuentes.** Pulso Research presenta a los jóvenes como el único segmento con capacidad de ahorro (50,2%). El Centro de Estudios de la Ciudad los presenta como el segmento más endeudado y con mayor mora (38,2%). **No es necesariamente incompatible:** puede tratarse de subpoblaciones distintas — jóvenes que conviven con sus padres y no afrontan gastos fijos frente a jóvenes con hogar propio o ingresos informales. Pero mientras no lo verifiquemos, **no podemos hablar de "los jóvenes" como un grupo homogéneo.** Esta contradicción es el hallazgo más importante de nuestro research secundario y es lo primero que deberíamos resolver al avanzar con la priorización.

3. **Desajuste etario sistemático.** La evidencia más rica y metodológicamente sólida sobre comportamiento financiero — Provokers y Junior Achievement/CEPE — cubre adolescentes de 13 a 19 años. Nuestro usuario es de 18 a 30. La superposición es mínima. Toda inferencia desde esos estudios hacia nuestro usuario es **[SUPUESTO]**, no evidencia.

4. **Sesgo de fuente comercial.** Buena parte del contenido disponible sobre hábitos financieros juveniles está producido o financiado por fintechs y bancos (Mercado Pago, Naranja X, BBVA), que tienen interés directo en el resultado. Lo señalamos caso por caso y bajamos la confianza correspondiente.

5. **Ausencia total de fuentes primarias cualitativas.** No encontramos foros, comunidades ni hilos con testimonios en primera persona de jóvenes argentinos describiendo cómo gestionan su plata. Todo lo que tenemos son agregados estadísticos. **No tenemos ni una sola voz de usuario.** Esto es exactamente lo que deben aportar las entrevistas reales.

6. **Correlación no observada entre dispersión y problema.** Sabemos que hay muchas billeteras y que la gente las usa. **No tenemos ninguna evidencia de que eso genere una dificultad concreta.** P1, que intuitivamente nos parecía el problema más claro, es el que tiene el respaldo más débil.

---

## 3. Fichas de problemas

De los ocho problemas potenciales seleccionamos cuatro para fichar. Criterio de selección: que tuvieran al menos una fuente verificable y que describieran una dificultad, no una carencia de herramienta. Quedaron fuera P4 (por ser una posible causa transversal más que un problema en sí), P5 (evidencia de origen comercial) y P6 (sin ninguna fuente sólida).

### Problema A — Dispersión del dinero entre múltiples cuentas

| Campo | Respuesta |
|---|---|
| Problema observado | La persona no puede decir cuánta plata tiene disponible en total sin abrir una por una varias aplicaciones. |
| Usuario | Jóvenes de 18 a 30 con ingresos digitales y más de una billetera o cuenta activa. |
| Contexto | Momento de decidir un gasto no planificado, o de calcular si llega a fin de mes. |
| Progreso buscado | Saber con cuánto cuenta realmente para decidir si puede gastar. |
| Fricción observada | El saldo está repartido entre billeteras, cuenta sueldo y efectivo, y cada plataforma muestra solo su propia parte. |
| Consecuencia | **[INTERPRETACIÓN]** Decisiones de gasto tomadas sobre información parcial. No observada por nosotros. |
| Evidencia | 70% de los argentinos usó billeteras virtuales en los últimos seis meses; el ecosistema incluye al menos cinco plataformas masivas; el 29,9% de los jóvenes que ahorra no puede precisar cuánto ahorra por mes. |
| Fuentes | [Infobae — Cuentas remuneradas](https://www.infobae.com/economia/2026/08/07/cuentas-remuneradas-cuales-son-las-billeteras-y-bancos-que-mas-rendimiento-ofrecen-a-sus-clientes/); [El Cronista — La paradoja del ahorro](https://www.cronista.com/economia-politica/la-paradoja-del-ahorro-2-de-cada-3-argentinos-resignan-consumos-pero-un-sector-tapado-logra-guardar-dinero/) |
| Frecuencia aparente | Aparece en 2 fuentes, ninguna de las cuales mide la dificultad directamente. |
| Comportamiento observable | **[SUPUESTO]** Abrir varias apps seguidas para sumar mentalmente el total. No lo observamos. |
| Alternativas actuales | **[SUPUESTO]** Suma mental, notas del celular, planilla. Sin evidencia. |
| Acceso a usuarios | Alto. Prácticamente cualquier compañero de cursada con trabajo califica. |
| Supuestos | Que la dispersión se vive como problema y no como algo indiferente o incluso deseado (por rendimientos y promociones). |
| Evidencia faltante | Todo lo central: si molesta, con qué frecuencia, y si produce alguna consecuencia concreta. |

### Problema B — Endeudamiento temprano con incumplimiento

| Campo | Respuesta |
|---|---|
| Problema observado | Jóvenes que toman crédito en fintechs, billeteras o tarjetas no bancarias y no logran pagarlo en término. |
| Usuario | Jóvenes de 18 a 30, con mayor incidencia en menores de 25. |
| Contexto | Consumo financiado o crédito de corto plazo tomado antes de tener ingreso estable. |
| Progreso buscado | Acceder a un consumo o cubrir un gasto que el ingreso corriente no alcanza a cubrir. |
| Fricción observada | Tasas de proveedores no financieros muy superiores a las bancarias, sumadas a ingresos informales e inestables. |
| Consecuencia | Mora, acumulación de intereses y exclusión posterior del sistema de crédito. **[HECHO]**, con la salvedad de que la exclusión posterior es la parte peor documentada. |
| Evidencia | Mora del 38,2% en menores de 25 años, la más alta de todas las franjas. Mora del 42,59% en proveedores no financieros de crédito y 32,23% en tarjetas no bancarias, contra 17,97% en bancos privados. El 36% de los deudores jóvenes se concentra en billeteras digitales. Consultora Analytica sitúa la irregularidad juvenil en torno al 40%. |
| Fuentes | [Infobae — Morosidad en menores de 25](https://www.infobae.com/economia/2026/08/05/la-morosidad-en-los-creditos-de-bancos-y-billeteras-tiene-su-foco-principal-en-los-menores-de-25-anos/); [El Cronista — Generación default](https://www.cronista.com/economia-politica/generacion-default-la-mora-desacelero-luego-de-19-meses-pero-9-de-cada-10-jovenes-deben-plata/); [La Brújula 24](https://www.labrujula24.com/notas/2026/07/04/crece-la-mora-entre-los-jovenes-4-de-cada-10-no-logra-pagar-sus-creditos-n508792/) |
| Frecuencia aparente | 3 fuentes independientes, con datos convergentes de al menos 3 productores distintos (Centro de Estudios de la Ciudad, Consultora 1816, Analytica). Es el problema mejor respaldado del conjunto. |
| Comportamiento observable | Tomar crédito en plataformas de acceso inmediato; refinanciar; pagar el mínimo. **[HECHO]** a nivel agregado, no observado por nosotros a nivel individual. |
| Alternativas actuales | Refinanciación bancaria (Banco Nación reportó más de 62.000 refinanciaciones en 2026), pedir a familiares, postergar el pago. |
| Acceso a usuarios | **Bajo.** Estar en mora tiene carga de estigma. **[SUPUESTO]** que a la gente le cueste hablarlo con compañeros de facultad. |
| Supuestos | Que la mora sea consecuencia de una decisión evitable y no simplemente de falta de ingresos. Si es lo segundo, no es un problema de producto. |
| Evidencia faltante | Qué pasa por la cabeza de alguien en el momento de tomar el crédito. Si entendía el costo. Si tenía alternativa. |

### Problema C — El ahorro se inicia pero no se sostiene

| Campo | Respuesta |
|---|---|
| Problema observado | La persona se propone guardar plata, empieza, y termina gastándola antes de lo planeado. |
| Usuario | Jóvenes con alguna capacidad de ahorro, es decir con excedente después de cubrir gastos fijos. |
| Contexto | El ciclo mensual completo, entre que entra el ingreso y que se agota. |
| Progreso buscado | Acumular un excedente para una meta, o simplemente tener un colchón. |
| Fricción observada | El dinero destinado a ahorro permanece disponible y se consume en gastos corrientes. |
| Consecuencia | El objetivo de ahorro no se cumple; se repite el ciclo el mes siguiente. **[INTERPRETACIÓN]** sobre la frustración asociada. |
| Evidencia | Solo el 49% de los encuestados logra ahorrar de manera sostenida y el 29% gasta sus ahorros antes de lo planeado. Además, el 50,2% de los jóvenes de 16 a 29 declara poder guardar dinero, pero el 29,9% no sabe cuánto. |
| Fuentes | [Sustenomics / Junior Achievement + CEPE-UTDT](https://sustenomics.com/adolescentes-y-finanzas-el-mayor-acceso-a-herramientas-financieras-no-significa-mejores-habitos/); [El Cronista — La paradoja del ahorro](https://www.cronista.com/economia-politica/la-paradoja-del-ahorro-2-de-cada-3-argentinos-resignan-consumos-pero-un-sector-tapado-logra-guardar-dinero/) |
| Frecuencia aparente | 2 fuentes independientes con señales coincidentes. **Advertencia:** la fuente principal mide adolescentes de 14 a 19 años. |
| Comportamiento observable | **[SUPUESTO]** Mover plata de vuelta desde donde la había apartado. No observado. |
| Alternativas actuales | **[SUPUESTO]** Cuentas remuneradas, dólares, sobres, dejarlo en una billetera aparte. Sin evidencia directa. |
| Acceso a usuarios | Alto. El tema es socialmente conversable, a diferencia de la deuda. |
| Supuestos | Que el ahorro se rompa por falta de método y no simplemente porque apareció un gasto necesario e ineludible. **Este es el supuesto más riesgoso de toda la investigación.** |
| Evidencia faltante | Qué gasto concreto rompe el ahorro. Si fue elegido o impuesto. Si la persona lo vive como un fracaso propio o como algo inevitable. |

### Problema D — Ingresos irregulares que impiden planificar

| Campo | Respuesta |
|---|---|
| Problema observado | La persona no sabe cuánto va a cobrar el mes que viene, y por lo tanto no puede comprometerse a un plan. |
| Usuario | Jóvenes con empleo informal, changas, freelance o ingresos por comisión. |
| Contexto | Cierre de mes y proyección del mes siguiente. |
| Progreso buscado | Anticiparse: saber si le va a alcanzar, si puede comprometerse a una cuota. |
| Fricción observada | El monto y la fecha del ingreso son variables. Cualquier presupuesto queda desactualizado. |
| Consecuencia | **[INTERPRETACIÓN]** Planificación de horizonte muy corto; se decide día a día. |
| Evidencia | Entre los jóvenes de 16 a 29, el 58% de los varones y el 60% de las mujeres trabaja en condiciones informales. Desocupación del segmento: 17,2%. El informe del Centro de Estudios de la Ciudad señala la informalidad laboral como primera causa de la mora juvenil. |
| Fuentes | [El Cronista — La paradoja del ahorro](https://www.cronista.com/economia-politica/la-paradoja-del-ahorro-2-de-cada-3-argentinos-resignan-consumos-pero-un-sector-tapado-logra-guardar-dinero/); [Infobae — Morosidad](https://www.infobae.com/economia/2026/08/05/la-morosidad-en-los-creditos-de-bancos-y-billeteras-tiene-su-foco-principal-en-los-menores-de-25-anos/) |
| Frecuencia aparente | 2 fuentes; la informalidad como factor aparece en ambas. |
| Comportamiento observable | **[SUPUESTO]** Decidir gastos día a día en lugar de mes a mes. |
| Alternativas actuales | **[SUPUESTO]** Presupuestar sobre el piso de ingreso, no sobre el promedio. |
| Acceso a usuarios | Medio-alto. Hay compañeros con trabajo informal o freelance, aunque menos que asalariados. |
| Supuestos | Que la irregularidad del ingreso sea vivida como una dificultad de gestión y no simplemente como una condición dada. |
| Evidencia faltante | Cómo decide efectivamente alguien con ingreso variable. Qué hace en un mes malo. |

