# Clase 2 — Descubrimiento de problemas asistido por IA

**Materia:** Product Development
**Equipo:** 4 integrantes — Felipe + [COMPLETAR nombres]
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
4. Las evaluaciones ICE individuales de los integrantes 2, 3 y 4 están vacías a propósito. Una opinión individual no puede ser generada por IA sin convertirse en evidencia inventada.

---

## Estacionamiento de soluciones

Ideas de producto, funcionalidad o herramienta que aparecieron durante la investigación y que **deliberadamente no desarrollamos** en esta clase. Se registran para no perderlas y se retoman recién cuando el problema esté validado con usuarios reales.

| # | Idea que surgió | En qué paso apareció | Por qué la estacionamos |
|---|---|---|---|
| 1 | Una app que unifique el saldo de todas las billeteras virtuales en una sola pantalla | Paso 2, al leer sobre fragmentación de cuentas | Es una solución a un problema que todavía no medimos. No sabemos si la dispersión molesta o si a los usuarios les resulta indistinta. |
| 2 | Un alertador de vencimientos de tarjeta y cuotas | Paso 2, al leer los datos de mora | Asume que la causa de la mora es el olvido. La evidencia disponible apunta más a falta de ingresos que a desorganización. |
| 3 | Un simulador que compare rendimientos de cuentas remuneradas | Paso 3 | Resuelve un problema de información, pero no sabemos si los jóvenes efectivamente buscan comparar o directamente no consideran la opción. |
| 4 | Categorización automática de gastos con IA | Paso 4 | Es una solución disfrazada de problema. La verdadera incógnita es si el usuario quiere categorizar sus gastos. |
| 5 | Un curso o contenido de educación financiera | Paso 4 | La evidencia muestra demanda declarada de educación financiera, pero demanda declarada no es comportamiento. Riesgo alto de construir sobre una opinión. |

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

2. **Contradicción de fondo entre fuentes.** Pulso Research presenta a los jóvenes como el único segmento con capacidad de ahorro (50,2%). El Centro de Estudios de la Ciudad los presenta como el segmento más endeudado y con mayor mora (38,2%). **No es necesariamente incompatible:** puede tratarse de subpoblaciones distintas — jóvenes que conviven con sus padres y no afrontan gastos fijos frente a jóvenes con hogar propio o ingresos informales. Pero mientras no lo verifiquemos, **no podemos hablar de "los jóvenes" como un grupo homogéneo.** Esta contradicción es el hallazgo más importante de nuestro research secundario y determinó el diseño de las dos personas sintéticas de la sección 9.

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

---

## 4. Limpieza y agrupación

### Agrupaciones sugeridas por la IA

Se le entregaron a la IA las cuatro fichas completas más los ocho problemas potenciales originales, con la consigna de detectar duplicados, distinguir problemas de síntomas y causas, y señalar vacíos. Devolvió:

1. **P4 (brecha acceso-competencia) no es un problema: es una posible causa transversal.** No describe una dificultad concreta en una situación concreta. Explicaría por qué ocurren A, B y C, pero no puede investigarse por separado.
2. **P8 (no saber cuánto se ahorra) es un síntoma de A, no un problema independiente.** Si el dinero está disperso, no poder sumarlo es la consecuencia esperable.
3. **P5 y P6 son soluciones disfrazadas.** "Los gastos hormiga no se registran" y "las apps se abandonan" presuponen que registrar gastos es la conducta correcta. Están formulados desde la herramienta, no desde el usuario.
4. **Relación causal posible entre D y C:** si el ingreso es irregular (D), el ahorro difícilmente pueda sostenerse (C). C podría ser un síntoma de D en una parte de la población.
5. **Relación causal posible entre D y B:** el propio informe del Centro de Estudios de la Ciudad ubica la informalidad laboral como primera causa de la mora.
6. **Contradicción no resuelta:** la coexistencia de "los jóvenes son el único segmento que ahorra" y "los jóvenes son el segmento con más mora" sugiere dos subpoblaciones diferentes que las fuentes agregadas no separan.
7. **Vacío de información señalado:** ninguna fuente describe comportamiento individual. Todo es agregado estadístico.

### Decisiones tomadas por el equipo

| Decisión | Fundamento |
|---|---|
| Aceptamos descartar P4 como problema autónomo | Coincidimos: es una explicación, no una dificultad situada. Lo conservamos como hipótesis causal. |
| Aceptamos absorber P8 dentro de A | El argumento es correcto. |
| Aceptamos descartar P5 y P6 | Detectamos que los habíamos escrito nosotros desde la solución. Van al estacionamiento. |
| **Rechazamos fusionar C dentro de D** | Si los fusionamos, perdemos la posibilidad de investigar el caso de la persona con ingreso estable que igual no logra ahorrar. Los mantenemos separados y convertimos la relación causal en una **hipótesis a testear en las entrevistas**, no en un supuesto asumido. |
| Mantenemos B pese al bajo acceso a usuarios | Es el problema con mejor evidencia. Descartarlo por comodidad de investigación sería exactamente el sesgo que la consigna advierte sobre Ease. |

### Problemas reformulados o descartados

- **Descartados como problemas:** P4 (reclasificado como causa), P5 y P6 (reclasificados como soluciones disfrazadas → estacionamiento).
- **Absorbido:** P8 dentro del Problema A.
- **Reformulado:** el Problema C pasó de "no se puede ahorrar" a "el ahorro se inicia pero no se sostiene". El cambio importa: la primera formulación mezcla a quien no tiene excedente con quien lo tiene y no lo retiene. Solo el segundo caso es investigable como problema de comportamiento.

### Contradicciones y datos faltantes

- La contradicción ahorro/mora sigue **sin resolver** y es la principal incógnita a llevar a las entrevistas.
- Falta por completo evidencia de comportamiento individual.
- Falta el informe original de Junior Achievement/CEPE para resolver la discrepancia de cifras.

---

## 5. Evaluaciones ICE individuales

Recordatorio de la escala: **Ease = facilidad para acceder a usuarios y obtener evidencia real**, no facilidad para construir una solución.

`ICE = (Impact × Confidence × Ease) / 100`

### Integrante 1 — Felipe

| Problema | Impact | Confidence | Ease | ICE | Justificación |
|---|---:|---:|---:|---:|---|
| A — Dispersión del dinero | 5 | 4 | 8 | **1,60** | Impact 5: aunque fuera cierto, la consecuencia es incomodidad, no pérdida. Confidence 4: hay una sola señal indirecta y ninguna fuente mide la dificultad. Ease 8: cualquier compañero con trabajo sirve de entrevistado. |
| B — Endeudamiento y mora | 9 | 8 | 3 | **2,16** | Impact 9: la consecuencia es acumulación de intereses y exclusión del crédito, con daño real y duradero. Confidence 8: tres productores de datos independientes con cifras convergentes. Ease 3: el estigma de la mora hace difícil conseguir relatos honestos en nuestro círculo. |
| C — Ahorro que no se sostiene | 6 | 6 | 8 | **2,88** | Impact 6: afecta un objetivo declarado del usuario pero no produce daño inmediato. Confidence 6: dos señales coincidentes, con la advertencia del desajuste etario. Ease 8: es un tema que la gente conversa sin incomodidad. |
| D — Ingresos irregulares | 7 | 7 | 5 | **2,45** | Impact 7: condiciona todas las demás decisiones financieras. Confidence 7: la informalidad juvenil está bien documentada, aunque el vínculo con la dificultad de planificar es inferido. Ease 5: hay acceso, pero menor que a asalariados. |

**Ranking de Felipe:** C (2,88) > D (2,45) > B (2,16) > A (1,60)

### Integrante 2 — [COMPLETAR]

> Completar **antes** de leer la evaluación de la IA de la sección 5.b y antes de discutir con el resto del equipo. El valor del ejercicio está en la divergencia, no en el acuerdo.

| Problema | Impact | Confidence | Ease | ICE | Justificación |
|---|---:|---:|---:|---:|---|
| A — Dispersión del dinero | | | | | |
| B — Endeudamiento y mora | | | | | |
| C — Ahorro que no se sostiene | | | | | |
| D — Ingresos irregulares | | | | | |

### Integrante 3 — [COMPLETAR]

| Problema | Impact | Confidence | Ease | ICE | Justificación |
|---|---:|---:|---:|---:|---|
| A — Dispersión del dinero | | | | | |
| B — Endeudamiento y mora | | | | | |
| C — Ahorro que no se sostiene | | | | | |
| D — Ingresos irregulares | | | | | |

### Integrante 4 — [COMPLETAR]

| Problema | Impact | Confidence | Ease | ICE | Justificación |
|---|---:|---:|---:|---:|---|
| A — Dispersión del dinero | | | | | |
| B — Endeudamiento y mora | | | | | |
| C — Ahorro que no se sostiene | | | | | |
| D — Ingresos irregulares | | | | | |

### Tabla consolidada del equipo — [COMPLETAR]

Llenar recién cuando estén las cuatro evaluaciones. **No promediar antes de discutir las diferencias.**

| Problema | ICE Int. 1 | ICE Int. 2 | ICE Int. 3 | ICE Int. 4 | ICE IA | Dispersión (máx − mín entre humanos) |
|---|---:|---:|---:|---:|---:|---:|
| A — Dispersión del dinero | 1,60 | | | | 1,20 | |
| B — Endeudamiento y mora | 2,16 | | | | 2,16 | |
| C — Ahorro que no se sostiene | 2,88 | | | | 2,52 | |
| D — Ingresos irregulares | 2,45 | | | | 2,94 | |

> El problema con **mayor dispersión** entre los cuatro es el que más conviene discutir: una diferencia grande suele indicar que alguien está leyendo la misma evidencia de otra manera, o que hay un supuesto escondido que nadie hizo explícito.

---

## 5.b Evaluación ICE de la IA

Se le pidió a la IA que evaluara los cuatro problemas usando exclusivamente la evidencia de las fichas, explicitando qué parte de cada puntaje era inferencia y qué hallazgo lo modificaría.

| Problema | Impact | Confidence | Ease | ICE | Evidencia utilizada | Qué parte es inferencia | Qué hallazgo cambiaría el puntaje |
|---|---:|---:|---:|---:|---|---|---|
| A — Dispersión | 5 | 3 | 8 | **1,20** | Adopción del 70% de billeteras; multiplicidad de plataformas; 29,9% no sabe cuánto ahorra | **Todo el Impact.** Ninguna fuente mide una consecuencia. Confidence 3 porque no hay ni una sola fuente que afirme que la dispersión genere dificultad | Subiría si los entrevistados relataran un error de gasto concreto por no conocer su saldo total. Bajaría si dijeran que abrir varias apps no les representa esfuerzo |
| B — Endeudamiento | 9 | 8 | 3 | **2,16** | Mora 38,2% en menores de 25; 42,59% en PNFC; convergencia de tres consultoras | La atribución causal a decisiones evitables. Los datos muestran la mora, no por qué ocurre | Bajaría fuerte si las entrevistas mostraran que la mora responde solo a caída de ingresos: dejaría de ser un problema abordable desde producto |
| C — Ahorro no sostenido | 6 | 6 | 7 | **2,52** | 49% ahorra sostenidamente, 29% gasta antes de lo planeado; 50,2% de jóvenes con capacidad de ahorro | Que las cifras de 14-19 años se trasladen a 18-30. Ease 7 y no 8 porque el segmento con excedente real puede ser más chico de lo que parece | Subiría si los entrevistados reconstruyeran episodios concretos de ahorro roto. Bajaría si resultara que casi nadie del segmento tiene excedente para ahorrar |
| D — Ingresos irregulares | 7 | 7 | 6 | **2,94** | 58-60% de informalidad juvenil; 17,2% de desocupación; informalidad citada como primera causa de mora en el informe del CEC | Que la irregularidad sea *vivida* como problema de gestión. Podría ser aceptada como condición normal | Subiría si los entrevistados describieran estrategias explícitas de manejo del ingreso variable. Bajaría si lo naturalizaran por completo |

**Ranking de la IA:** D (2,94) > C (2,52) > B (2,16) > A (1,20)

### Advertencias que la IA marcó explícitamente

1. **Ningún Confidence debería superar 8** en esta instancia: no hay entrevistas propias y toda la evidencia es agregada.
2. **El Impact de A es esencialmente una construcción del equipo.** No hay fuente que lo sostenga.
3. **La contradicción ahorro/mora afecta a C y a D simultáneamente** y ninguna de las dos evaluaciones puede ser confiable mientras no se resuelva.
4. **Advertencia sobre Ease:** los puntajes de Ease de A y C son altos y podrían estar inflando artificialmente su ranking frente a B, que tiene mucha mejor evidencia.
5. La IA se negó a elegir un ganador, como pedía la consigna.

---

## 6. Comparación de evaluaciones

> Nota: esta comparación contrasta la evaluación de Felipe con la de la IA. **Debe rehacerse cuando los integrantes 2, 3 y 4 completen sus tablas.** Con cuatro evaluadores humanos más la IA, lo esperable es que aparezcan divergencias que esta versión todavía no captura.

### Principales coincidencias

- **A queda último en ambas** evaluaciones, y por el mismo motivo: falta de evidencia sobre la consecuencia. Esto es relevante porque A era el problema que intuitivamente nos parecía más obvio al empezar.
- **B recibe el Impact más alto (9) y el Ease más bajo (3) en ambas.** Coincidencia total en el diagnóstico: es el problema más importante y el más difícil de investigar.
- **Confidence de B es el más alto (8) en ambas.** Es el problema mejor documentado.

### Principales diferencias

| Punto de divergencia | Felipe | IA | Lectura |
|---|---:|---:|---|
| Ease de C | 8 | 7 | La IA argumenta que el segmento con excedente real de ahorro puede ser menor al que suponemos. Es un buen punto: no todo joven al que podemos entrevistar es un joven que puede ahorrar. |
| Ease de D | 5 | 6 | Felipe subestimó el acceso. En el curso hay más gente con trabajo informal o freelance de lo que asumió. |
| Confidence de A | 4 | 3 | La IA es más dura y tiene razón: no hay ninguna fuente que afirme la dificultad, solo la existencia del ecosistema. |
| **Ranking final** | C primero | D primero | La diferencia se explica casi enteramente por el Ease de D, no por Impact ni Confidence. |

### Puntajes modificados y motivo

Después de discutir, Felipe modificó:

- **Confidence de A: 4 → 3.** El argumento de la IA es correcto. No hay evidencia de la dificultad, solo del contexto. Nuevo ICE de A: **1,20**.
- **Ease de D: 5 → 6.** Reconocimiento de que el acceso a trabajadores informales en el curso es mejor de lo estimado. Nuevo ICE de D: **2,94**.
- **Ease de C: 8 → 7.** Acepta la distinción entre "personas entrevistables" y "personas con excedente de ahorro". Nuevo ICE de C: **2,52**.

**Ranking revisado tras la discusión:** D (2,94) > C (2,52) > B (2,16) > A (1,20)

### Inferencias o errores detectados en la IA

- **No inventó fuentes ni cifras.** Todos los datos que usó estaban en las fichas que le entregamos.
- **Marcó correctamente sus propias inferencias**, incluso cuando eso debilitaba sus puntajes.
- **Punto a favor:** detectó que P5 y P6 eran soluciones disfrazadas que nosotros habíamos escrito sin darnos cuenta.
- **Punto en contra:** su primera respuesta al agrupar tendió a fusionar C dentro de D con más seguridad de la que la evidencia permite. Fue el equipo el que frenó esa fusión. **Es un buen ejemplo de la IA cerrando una incertidumbre en lugar de conservarla.**
- **Riesgo detectado:** la IA reproduce el marco de las notas periodísticas que le dimos, incluyendo su encuadre. Las notas sobre mora juvenil tienen un tono de alarma que puede haber inflado el Impact de B.

### Incertidumbres que permanecen

1. La contradicción ahorro/mora: sin resolver.
2. El desajuste etario de la evidencia principal: sin resolver.
3. Si alguno de estos problemas es abordable desde producto o si todos son consecuencia de falta de ingreso: **sin resolver, y es la incertidumbre más importante.**

---

## 7. Crítica del problema finalista

Problema con mayor ICE tras la revisión: **D — Ingresos irregulares que impiden planificar** (2,94). Se sometió a un cuestionamiento escéptico antes de aceptarlo.

### Debilidades encontradas

1. **El impacto está inferido, no demostrado.** Sabemos que el 58-60% de los jóvenes trabaja en la informalidad. **No sabemos que eso les genere una dificultad de gestión.** Podría ser una condición completamente naturalizada.
2. **Riesgo alto de confundir contexto con problema.** "Ingreso irregular" describe una circunstancia estructural del mercado laboral, no una fricción que el usuario experimente en una situación concreta. Un problema debería poder ubicarse en un momento y un comportamiento.
3. **Puede ser un problema sin destinatario de solución.** Si la causa es el mercado laboral, ninguna intervención de producto lo resuelve. Estaríamos investigando algo real pero fuera de nuestro alcance.
4. **El salto de posición se debió a Ease, no a evidencia.** D pasó a primer lugar porque Felipe corrigió su Ease de 5 a 6. **Un problema no debería ganar una priorización por un ajuste en la facilidad de investigarlo.** Esta es exactamente la trampa que advierte la consigna.
5. **Podría ser causa y no problema**, igual que P4. Si D explica B y C, quizá pertenece a la misma categoría que descartamos antes por ser una explicación transversal.

### Explicaciones alternativas

- Los jóvenes con ingreso irregular podrían tener **mejores** estrategias de gestión que los asalariados, precisamente por estar obligados a desarrollarlas.
- La dificultad podría no estar en la irregularidad del ingreso sino en la rigidez de los gastos fijos, que no se adaptan a un ingreso variable.
- Podría no haber ninguna dificultad de planificación: simplemente no alcanza el dinero, y eso no es un problema de planificación.

### Evidencia que podría refutarlo

- Entrevistados con ingreso variable que describan un método propio y funcional de gestión.
- Entrevistados que digan explícitamente que no planifican porque no tiene sentido, sin vivirlo como carencia.
- Que la única consecuencia mencionada sea "no me alcanza", sin ningún componente de gestión.

### Respuesta del equipo

Aceptamos las objeciones 2, 4 y 5 como válidas. **D, tal como está formulado, describe una condición y no una fricción situada.** Esto lo hace estructuralmente distinto de C, que sí describe un comportamiento en un momento identificable.

No lo descartamos: lo **reclasificamos como variable de segmentación**. En lugar de investigar "el problema de tener ingresos irregulares", vamos a investigar C **comparando personas con ingreso estable contra personas con ingreso variable**. Así la dimensión de D entra en el diseño de la investigación sin ser tratada como problema autónomo.

---

## 8. Problema priorizado

**Problema elegido: C — El ahorro se inicia pero no se sostiene.**

Elegimos el segundo del ranking ICE, no el primero. La consigna habilita explícitamente esta opción cuando el equipo puede justificar por qué el puntaje no representa bien la situación.

### Puntaje ICE

| Criterio | Puntaje | Fundamento |
|---|---:|---|
| Impact | 6 | Afecta un objetivo que el usuario declara tener, pero no produce un daño inmediato ni irreversible. |
| Confidence | 6 | Dos fuentes independientes con señales coincidentes, con la advertencia de que la principal mide adolescentes de 14 a 19 años. |
| Ease | 7 | Alto acceso a entrevistados y tema socialmente conversable, descontando que no todo entrevistado tendrá excedente de ahorro. |
| **ICE** | **2,52** | Segundo lugar del ranking. |

### Por qué no elegimos D (2,94)

Porque la crítica escéptica mostró que D describe una **condición estructural**, no una fricción ubicable en una situación concreta, y porque su ascenso al primer puesto se debió íntegramente a un ajuste de Ease. Incorporamos su contenido como variable de segmentación.

### Por qué no elegimos B (2,16), que tiene la mejor evidencia

Esta es la decisión más incómoda del trabajo y la dejamos registrada como tal. B tiene el Impact más alto (9) y el Confidence más alto (8). Lo descartamos por Ease (3): el estigma de la mora hace poco probable que consigamos relatos honestos en nuestro círculo en el plazo disponible.

**Reconocemos que esto es precisamente el sesgo que la consigna advierte:** estamos eligiendo lo investigable por encima de lo importante. Lo asumimos con una condición: si en las entrevistas de C aparece deuda de manera espontánea y repetida, **reabrimos B como finalista**.

### Redacción final

Se generaron tres versiones con IA a partir de la evidencia y los supuestos.

**Versión breve:**

> Jóvenes de 18 a 30 años con ingresos propios se proponen guardar dinero y terminan gastándolo antes de lo previsto, sin poder identificar en qué momento se rompió el plan.

**Versión centrada en el comportamiento:**

> Cuando un joven de 18 a 30 años con ingresos propios decide apartar dinero, lo deja en una cuenta o billetera que sigue usando para gastos corrientes. A lo largo del mes ese dinero se consume en decisiones sucesivas y a fin de mes no puede reconstruir cuánto había apartado ni cuánto queda.

**Versión completa, con evidencia e incertidumbre:**

> **Los jóvenes de 18 a 30 años con ingresos propios** tienen dificultades para **sostener el dinero que se propusieron ahorrar** cuando **transcurre el mes y ese dinero permanece disponible junto al de los gastos corrientes**, debido a **que el ahorro no está separado del dinero de uso diario ni existe un momento definido en el que se revise si el plan se está cumpliendo**. Esto genera **que el objetivo de ahorro no se cumpla y que la persona no pueda identificar en qué momento ni por qué se rompió**.
>
> Encontramos señales en el estudio de Junior Achievement Argentina y el CEPE de la Universidad Di Tella (más de 5.000 adolescentes de 14 a 19 años, 2024), donde **solo el 49% logra ahorrar de manera sostenida y el 29% gasta sus ahorros antes de lo planeado**; y en la Brújula Social Consumo de Pulso Research (enero de 2026), donde **el 50,2% de los jóvenes de 16 a 29 declara poder guardar dinero pero el 29,9% no puede precisar cuánto ahorra por mes**.
>
> Sin embargo, todavía necesitamos comprobar: **(a)** si estas cifras, medidas mayoritariamente en adolescentes de 14 a 19 años, se sostienen en el tramo de 18 a 30; **(b)** si el ahorro se rompe por un gasto imprevisto e ineludible o por una acumulación de decisiones evitables — **si es lo primero, esto no es un problema de gestión sino de ingreso**; **(c)** si la persona percibe esto como un problema propio o como una consecuencia normal del contexto económico; y **(d)** si el comportamiento difiere entre quienes tienen ingreso estable y quienes tienen ingreso variable.

### Revisión final de la redacción

| Criterio | ¿Cumple? |
|---|---|
| ¿Describe un usuario concreto? | Sí: 18-30 con ingresos propios. |
| ¿Incluye una situación observable? | Sí: el transcurso del mes con el dinero apartado disponible. |
| ¿Explica qué intenta lograr el usuario? | Sí: sostener un ahorro que se propuso. |
| ¿Muestra una fricción sin afirmar una causa no demostrada? | Sí, con reservas. La frase "no está separado del dinero de uso diario" es **[SUPUESTO]** y está señalada como tal en el punto (b). |
| ¿Distingue evidencia de supuestos? | Sí, en párrafos separados. |
| ¿Evita mencionar una solución? | Sí. No se nombra ninguna herramienta, app ni funcionalidad. |
| ¿Puede investigarse mediante entrevistas reales? | Sí: pide reconstruir episodios concretos del pasado. |
| **¿Podría demostrarse que estamos equivocados?** | **Sí, y está explicitado en (b):** si el ahorro se rompe siempre por gastos ineludibles, la hipótesis cae. |

### Justificación de la decisión del equipo

```text
Priorizamos este problema porque:
describe un comportamiento concreto, ubicable en el tiempo, que podemos
reconstruir con entrevistas en el plazo que tenemos, y porque es el único
de los cuatro que combina evidencia razonable con acceso real a usuarios.

El criterio ICE más sólido es:
Ease (7). Tenemos acceso directo a personas del perfil y el tema no
genera incomodidad para conversar.

El criterio ICE más incierto es:
Confidence (6). La evidencia principal mide adolescentes de 14 a 19 años
y nuestro usuario es de 18 a 30.

La evidencia más fuerte que tenemos es:
la convergencia de dos estudios independientes en que aproximadamente
tres de cada diez jóvenes gastan sus ahorros antes de lo planeado.

La principal debilidad de nuestra elección es:
que descartamos el problema mejor documentado (B, endeudamiento) por
dificultad de acceso a usuarios, que es exactamente el sesgo de Ease
que la consigna advierte.

Podríamos estar equivocados si:
el ahorro se rompe por gastos imprevistos e ineludibles. En ese caso no
hay problema de gestión: hay un problema de ingreso, y nuestra hipótesis
completa se cae.

La próxima evidencia que necesitamos obtener es:
relatos concretos de la última vez que alguien se propuso ahorrar y no
pudo, con reconstrucción del gasto específico que rompió el plan y de si
ese gasto era evitable.
```

---

## 9. Personas sintéticas y entrevistas

Construimos dos personas deliberadamente contrastantes. **El contraste no es estético: reproduce la contradicción sin resolver de nuestro research.** Una fuente dice que los jóvenes son el único segmento que ahorra; otra dice que son el más endeudado. Si ambas son ciertas, describen subpoblaciones distintas. Estas dos personas son esas dos subpoblaciones, formuladas como hipótesis a testear.

> **Advertencia:** ninguna de las dos personas es evidencia. Son hipótesis construidas desde datos agregados. Sirven para mejorar preguntas, no para validar nada.

### Persona sintética 1 — "La que puede ahorrar pero no lo sostiene"

| Campo | Contenido |
|---|---|
| Nombre descriptivo | Asalariada joven que convive con su familia de origen |
| Contexto | 24 años, empleo formal de jornada completa, vive con sus padres y no afronta gastos de vivienda, servicios ni alimentación. Su ingreso es predecible en monto y fecha. |
| Objetivo o progreso buscado | Acumular para una meta de mediano plazo (viaje, mudanza, curso). No tiene una fecha ni un monto definidos. |
| Comportamientos | Cobra por billetera virtual. Deja el excedente en la misma cuenta que usa para gastar. Revisa el saldo cuando va a hacer una compra, no de forma programada. |
| Frustraciones | Llega a fin de mes con menos de lo que esperaba y no logra reconstruir en qué se fue la diferencia. |
| Restricciones | Su capacidad de ahorro depende de una situación de convivencia que puede cambiar. |
| Alternativas actuales | **[SUPUESTO]** Cuenta remunerada, o simplemente dejar la plata quieta. No tenemos evidencia de qué usa. |
| Evidencia que la respalda | 50,2% de los jóvenes de 16 a 29 declara capacidad de ahorro y el 29,9% no sabe cuánto ahorra ([Pulso Research](https://www.cronista.com/economia-politica/la-paradoja-del-ahorro-2-de-cada-3-argentinos-resignan-consumos-pero-un-sector-tapado-logra-guardar-dinero/)). El director de la consultora atribuye esa capacidad a no pagar vivienda, servicios ni alimentos. 49% ahorra sosteniblemente y 29% gasta antes de lo planeado ([Junior Achievement + CEPE-UTDT](https://sustenomics.com/adolescentes-y-finanzas-el-mayor-acceso-a-herramientas-financieras-no-significa-mejores-habitos/)). |
| Supuestos incorporados | Que no separa el ahorro del dinero corriente. Que le importa la meta. Que percibe la situación como un problema propio. **Ninguno tiene respaldo.** |
| Preguntas que solo una persona real puede responder | ¿Separa la plata o no? ¿Qué gasto concreto rompió el último intento? ¿Le molesta o lo naturaliza? |

### Persona sintética 2 — "El que no llega a tener excedente"

| Campo | Contenido |
|---|---|
| Nombre descriptivo | Trabajador de ingreso informal y variable, con gastos propios |
| Contexto | 26 años, trabaja por changas, freelance o comisión. Monto y fecha de cobro cambian mes a mes. Afronta alquiler o aporta al hogar. |
| Objetivo o progreso buscado | Llegar a fin de mes y cubrir los gastos fijos. El ahorro no está entre sus objetivos inmediatos. |
| Comportamientos | Decide gastos día a día, no mes a mes. Ha usado crédito de acceso inmediato en billeteras o tarjetas no bancarias para cubrir un faltante. |
| Frustraciones | No puede comprometerse a cuotas ni gastos fijos nuevos sin saber cuánto va a cobrar. |
| Restricciones | Sin ingreso estable, sin recibo de sueldo, con acceso limitado a crédito bancario de tasa baja. |
| Alternativas actuales | Refinanciación, pedir a familiares, postergar pagos. **[HECHO]** a nivel agregado: Banco Nación reportó más de 62.000 refinanciaciones en 2026. |
| Evidencia que la respalda | 58% de los varones y 60% de las mujeres de 16 a 29 trabaja en la informalidad; desocupación del segmento 17,2% ([Pulso Research](https://www.cronista.com/economia-politica/la-paradoja-del-ahorro-2-de-cada-3-argentinos-resignan-consumos-pero-un-sector-tapado-logra-guardar-dinero/)). Mora del 38,2% en menores de 25, con la informalidad laboral señalada como primera causa; el 36% de los deudores jóvenes se concentra en billeteras digitales ([Centro de Estudios de la Ciudad vía Infobae](https://www.infobae.com/economia/2026/08/05/la-morosidad-en-los-creditos-de-bancos-y-billeteras-tiene-su-foco-principal-en-los-menores-de-25-anos/)). |
| Supuestos incorporados | Que vive la irregularidad como dificultad y no como algo normal. Que tomó crédito sin comprender el costo. **Ambos son especulación nuestra.** |
| Preguntas que solo una persona real puede responder | ¿Cómo decide en un mes malo? ¿Qué pasó la última vez que no le alcanzó? ¿Qué entendía del costo cuando tomó el crédito? |

### Por qué estas dos y no otras

Si al entrevistar resulta que **la Persona 1 casi no existe** en nuestro entorno — que casi nadie tiene excedente real — entonces el Problema C está mal planteado y lo que hay es un problema de ingreso, no de gestión del ahorro. **Ese es el resultado que buscamos poder detectar.** El contraste entre las dos personas está diseñado para que la investigación pueda refutarnos, no para confirmarnos.

### Aprendizajes del role-play

Se hizo la entrevista simulada a la Persona 1 con la IA representando al personaje, instruida para declarar cuándo una respuesta no estaba respaldada por evidencia.

- **La persona sintética respondió "esto todavía debe validarse con una persona real" en las preguntas que más nos importaban:** qué gasto concreto rompió el ahorro, y si separaba o no la plata. **Es el hallazgo central del ejercicio.** Justamente donde necesitábamos evidencia, no había nada — porque nunca la tuvimos, solo agregados estadísticos.
- Cuando le pedimos "contame la última vez que te pasó", no pudo relatar una situación. **Una persona sintética no tiene pasado.** Confirma que este ejercicio sirve para pulir preguntas, no para obtener respuestas.
- **Detectamos preguntas mal formuladas gracias al simulacro:**
  - "¿Te resulta difícil ahorrar?" → sugiere la respuesta y admite un sí/no vacío. Reformulada.
  - "¿Usarías algo que te ayude a separar la plata?" → pregunta por intención futura y presenta una solución. Eliminada.
  - "¿Por qué no lograste ahorrar?" → pide una racionalización, no un hecho. Reformulada como reconstrucción de episodio.
- **Riesgo detectado:** la persona sintética tendía a dar respuestas coherentes y ordenadas. Las personas reales no ordenan su relato así. Si en las entrevistas reales escuchamos respuestas tan prolijas como las del simulacro, probablemente estemos induciéndolas nosotros.

### Guion de entrevista real

Diez preguntas. Todas sobre comportamiento pasado y situaciones concretas. Ninguna menciona herramientas, apps ni soluciones.

1. Contame cómo fue el último mes en términos de plata: cuándo cobraste, y qué pasó con eso hasta que se terminó.
2. ¿Cuándo fue la última vez que te propusiste guardar plata? Llevame a ese momento: ¿qué te propusiste exactamente?
3. ¿Qué hiciste concretamente con esa plata cuando decidiste guardarla? ¿Dónde quedó?
4. ¿Qué pasó después con esa plata? Contame paso por paso.
5. Si la usaste: ¿cuál fue el gasto? ¿Qué estaba pasando ese día?
6. ¿En qué momento te diste cuenta de que la plata ya no estaba?
7. ¿Cuántas veces te pasó algo parecido en el último año? Contame otra vez que haya pasado.
8. Cuando querés saber cuánta plata tenés en total, ¿qué hacés? Mostrame si podés.
9. ¿Alguna vez hiciste algo distinto para intentar que no vuelva a pasar? ¿Qué hiciste y qué resultó?
10. De todo esto que me contaste, ¿qué te molestó de verdad y qué te pareció normal?

**Preguntas de profundización** (usar cuando la respuesta sea general):

- "Dijiste que se te fue en cosas. ¿Qué cosas? Dame un ejemplo del último mes."
- "¿Ese gasto lo podrías haber evitado o no había opción?"
- "¿Se lo contaste a alguien? ¿A quién?"

**Si aparece deuda de forma espontánea** (no preguntar por deuda de manera directa):

- "Contame cómo fue esa vez que necesitaste la plata y no la tenías."
- "¿Qué opciones evaluaste en ese momento?"
- "Cuando lo pediste, ¿qué sabías sobre cuánto ibas a terminar devolviendo?"

> Si la deuda aparece de manera espontánea y repetida en tres o más entrevistas, **reabrimos el Problema B como finalista**, según lo comprometido en la sección 8.

### Reglas de conducción acordadas

- No mencionar ninguna herramienta, app ni solución en ningún momento.
- No preguntar "¿usarías...?", "¿te gustaría...?" ni "¿te serviría...?".
- Ante una respuesta general, pedir siempre un episodio concreto y fechado.
- Registrar frases textuales, no resúmenes interpretados.
- Tolerar el silencio: no completar la frase del entrevistado.
- No defender nuestra hipótesis si el entrevistado la contradice. **Esa contradicción es el dato más valioso que podemos obtener.**

### Plan de entrevistas

| Decisión | Definición del equipo |
|---|---|
| Perfil de entrevistados | 18 a 30 años con ingresos propios. **Cuota obligatoria:** al menos 1 con ingreso estable y al menos 1 con ingreso variable o informal, para poder contrastar las dos personas sintéticas. |
| Cantidad mínima | 3 personas según la consigna. **Siendo 4 en el equipo, nos comprometemos a 4: una entrevista por integrante.** Permite cubrir los dos perfiles por duplicado y contrastar sin depender de un solo relato por perfil. |
| Forma de contacto | [COMPLETAR — definir el equipo: compañeros de cursada, contactos laborales, red personal] |
| Organización del equipo | Dos duplas. En cada entrevista, un integrante conduce y el otro registra; en la siguiente se invierten los roles, para que los cuatro pasen por ambas posiciones. |
| Dupla 1 | [COMPLETAR] — entrevistas 1 y 2 |
| Dupla 2 | [COMPLETAR] — entrevistas 3 y 4 |
| Asignación de perfiles | Dupla 1: al menos 1 persona con ingreso estable. Dupla 2: al menos 1 persona con ingreso variable o informal. La cuarta entrevista se asigna según lo que falte cubrir. |
| Evidencia que se recopilará | Audio con consentimiento previo, notas textuales, y reconstrucción de al menos un episodio concreto de ahorro roto por entrevistado |
| Fecha límite | Antes de la Clase 3 |

### Control de calidad del guion

El guion se pasó por una revisión con IA buscando preguntas que sugirieran la respuesta, que pidieran opiniones futuras o que presentaran soluciones. Resultado: se eliminaron 2 preguntas y se reformularon 3, según el detalle de "Aprendizajes del role-play". La versión de arriba es la corregida.

---

## Registro de entrevistas reales

> **Estado: pendiente.** Esta sección se completa antes de la Clase 3. Se dejan cuatro plantillas listas: la consigna pide un mínimo de 3, y el equipo se comprometió a 4 (una por integrante).

### Entrevista 1

- Fecha:
- Entrevistador/a:
- Perfil de la persona (edad, tipo de ingreso, situación de vivienda):
- Contexto de la conversación:

**Situaciones reales relatadas**

-

**Comportamientos y alternativas actuales**

-

**Consecuencias observadas**

-

**Frases relevantes** (textuales, entre comillas)

-

**Contradicciones con nuestra hipótesis**

-

**Nuevos aprendizajes**

-

**Cambios que haríamos a la redacción del problema**

-

### Entrevista 2

- Fecha:
- Entrevistador/a:
- Perfil de la persona:
- Contexto de la conversación:

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

**Nuevos aprendizajes**

-

**Cambios que haríamos a la redacción del problema**

-

### Entrevista 3

- Fecha:
- Entrevistador/a:
- Perfil de la persona:
- Contexto de la conversación:

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

**Nuevos aprendizajes**

-

**Cambios que haríamos a la redacción del problema**

-

### Entrevista 4

- Fecha:
- Entrevistador/a:
- Perfil de la persona:
- Contexto de la conversación:

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

**Nuevos aprendizajes**

-

**Cambios que haríamos a la redacción del problema**

-

### Síntesis de las cuatro entrevistas — [COMPLETAR]

Completar después de la última entrevista, en equipo.

| Pregunta | Respuesta |
|---|---|
| ¿Qué apareció en las 4 entrevistas? | |
| ¿Qué apareció en una sola y no se repitió? | |
| ¿El ahorro se rompió por gastos evitables o ineludibles? | |
| ¿Se comportan distinto los de ingreso estable y los de ingreso variable? | |
| ¿Apareció deuda de forma espontánea? ¿En cuántas? | |
| ¿Qué contradijo nuestra hipótesis? | |

> Si la deuda apareció espontáneamente en 3 o más entrevistas, **reabrir el Problema B como finalista**, según lo comprometido en la sección 8.

---

## 10. Revisión y entrega

### Lista de verificación

- [x] Territorio: dominio, usuario, contexto, supuestos y límites — sección 1
- [x] Entre 5 y 10 problemas potenciales — 8 problemas, sección 2
- [x] Fuentes originales y verificables — 8 fuentes abiertas y verificadas, con limitaciones documentadas
- [x] Fichas completas de los problemas finalistas — 4 fichas, sección 3
- [x] Agrupaciones sugeridas por la IA y decisiones del equipo — sección 4, incluyendo una agrupación rechazada
- [ ] **Evaluaciones ICE individuales — parcial.** Solo Integrante 1 de 4. Faltan 2, 3 y 4, más la tabla consolidada.
- [x] Evaluación ICE de la IA con justificaciones — sección 5.b
- [ ] **Comparación entre evaluaciones — parcial.** Hecha contra la IA; debe rehacerse con las cuatro evaluaciones humanas.
- [x] Crítica escéptica del problema finalista — sección 7, con reclasificación de D
- [x] Decisión humana justificada — sección 8, incluyendo por qué no elegimos el de mayor ICE
- [x] Redacción final del problema — sección 8, tres versiones
- [x] Dos personas sintéticas — sección 9, construidas sobre la contradicción del research
- [x] Aprendizajes del role-play — sección 9
- [x] Guion y plan para entrevistar al menos a tres personas reales — sección 9
- [x] Supuestos pendientes y evidencia que podría refutarlos — señalados en cada sección y sintetizados abajo
- [ ] **Registro de entrevistas reales — pendiente para la Clase 3.** Mínimo 3 según la consigna; el equipo se comprometió a 4.

### Estado de completitud

| Pendiente | Responsable | Plazo |
|---|---|---|
| Evaluaciones ICE individuales | Integrantes 2, 3 y 4 (por separado, sin consultarse entre sí) | Antes de rehacer la sección 6 |
| Tabla consolidada y cálculo de dispersión | Equipo | Después de lo anterior |
| Rehacer la comparación de la sección 6 con las tres evaluaciones | Equipo | Después de lo anterior |
| Conseguir el informe original de Junior Achievement/CEPE para resolver la discrepancia de cifras | [COMPLETAR] | Antes de la Clase 3 |
| Definir contactos, entrevistador y registrador | Equipo | Esta semana |
| Realizar y registrar 3 entrevistas mínimo | Equipo | Antes de la Clase 3 |

### Cierre del equipo

```text
El problema que decidimos investigar es:
que los jóvenes de 18 a 30 con ingresos propios se proponen guardar
dinero y terminan gastándolo antes de lo previsto, sin poder identificar
en qué momento se rompió el plan.

La evidencia más fuerte que encontramos es:
la convergencia de dos estudios independientes en que alrededor de tres
de cada diez jóvenes gastan sus ahorros antes de lo planeado
(Junior Achievement + CEPE-UTDT, 2024; Pulso Research, enero 2026).

El supuesto más riesgoso es:
que el ahorro se rompa por una acumulación de decisiones evitables. Si se
rompe por gastos imprevistos e ineludibles, no hay problema de gestión:
hay un problema de ingreso, y toda nuestra hipótesis se cae.

La pregunta más importante para los usuarios reales es:
"La última vez que te propusiste guardar plata y no pudiste, ¿cuál fue el
gasto concreto que la rompió, y podrías haberlo evitado?"
```

---

## Autoevaluación contra los criterios de la consigna

Registro honesto de dónde estamos parados, incluyendo lo que quedó flojo.

| Criterio | Estado | Observación |
|---|---|---|
| Claridad del territorio | Sólido | Dominio acotado, usuario reconocible, límites explícitos. |
| Calidad de las fuentes | Sólido con reservas | 8 fuentes abiertas y verificadas, con limitaciones y conflictos de interés documentados uno por uno. **Debilidad real:** ninguna fuente primaria cualitativa. |
| Separación entre evidencia y supuesto | Sólido | Etiquetado sistemático con [HECHO] / [INTERPRETACIÓN] / [SUPUESTO]. |
| Calidad de las fichas | Sólido | Cuatro fichas con estructura idéntica y comparables entre sí. |
| Uso de ICE | Sólido | Puntajes justificados uno por uno, modificados tras la discusión, y con la trampa del Ease detectada y documentada. |
| Formulación del problema | Sólido | Incluye usuario, progreso, contexto, fricción, consecuencia, evidencia e incertidumbre, y es refutable. |
| Uso crítico de IA | Sólido | Se rechazó una agrupación propuesta por la IA, se detectó su tendencia a cerrar incertidumbres y se documentó el sesgo heredado del encuadre periodístico. |
| Personas sintéticas | Sólido | Basadas en evidencia, con hipótesis marcadas, y diseñadas para poder refutarnos. |
| Investigación primaria | **Pendiente** | Es lo que falta. Sin esto, nada de este documento está validado. |
| Aprendizaje | Parcial | Documentamos los cambios de opinión (reclasificación de D, reformulación de C, descarte de P5/P6). Falta el aprendizaje que traigan las entrevistas. |

---

## Principios que guiaron este trabajo

1. No comenzar por la solución — las 5 ideas que aparecieron están en el estacionamiento, sin desarrollar.
2. No confundir respuestas de la IA con evidencia — todo lo generado está etiquetado.
3. Verificar las fuentes originales — las 8 fuentes fueron abiertas; las limitaciones y conflictos de interés están declarados.
4. Separar hechos, interpretaciones y supuestos — con marcas explícitas en todo el documento.
5. Usar ICE para ordenar la conversación, no para fabricar certeza — elegimos el segundo del ranking y explicamos por qué.
6. Usar personas sintéticas para mejorar preguntas, no para validar el mercado — el role-play sirvió para corregir 5 preguntas del guion.
7. Buscar experiencias reales y comportamientos pasados — las 10 preguntas del guion piden reconstrucción de episodios.
8. Documentar contradicciones y cambios de opinión — la contradicción ahorro/mora está sin resolver y declarada como tal.

> **Priorizar un problema no significa haberlo validado. Significa elegir qué incertidumbre investigar primero.**
