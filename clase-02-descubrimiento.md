# Clase 2 — Descubrimiento de problemas asistido por IA

**Materia:** Product Development
**Equipo:** Felipe Chain · Juan Ignacio Canabe · Pedro Tailhade · Felipe Servent
**Fecha:** 24 de agosto de 2026
**Dominio:** Finanzas personales de jóvenes en Argentina

---

## Nota metodológica

Usamos IA para explorar fuentes y organizar información; la verificación y las decisiones son del equipo. Marcamos **[HECHO]** (dato de fuente verificable), **[INTERPRETACIÓN]** (lectura nuestra) y **[SUPUESTO]** (creencia sin comprobar).

---

## Estacionamiento de soluciones

Ideas de producto que aparecieron y que **no desarrollamos**. Se retoman recién cuando el problema esté validado.

| Idea | Por qué la estacionamos |
|---|---|
| App que unifique el saldo de todas las billeteras | No sabemos si la dispersión molesta o si es indistinta. |
| Alertador de vencimientos de tarjeta y cuotas | Asume que la mora se debe al olvido; la evidencia apunta a falta de ingresos. |
| Simulador de rendimientos de cuentas remuneradas | No sabemos si los jóvenes buscan comparar o directamente no consideran la opción. |
| Categorización automática de gastos con IA | Solución disfrazada de problema. La incógnita es si el usuario quiere categorizar. |
| Curso de educación financiera | Hay demanda declarada, pero demanda declarada no es comportamiento. |

---

## 1. Territorio de investigación

- **Dominio:** gestión del dinero del día a día — ingresos, gastos, ahorro y deuda de corto plazo. No incluye inversión ni mercado de capitales.
- **Usuario inicial:** personas de 18 a 30 años con ingresos propios (formal, informal, changas o freelance), que cobran y gastan por medios digitales y administran su plata sin asesoramiento.
- **Contexto:** el mes corriente, desde que entra el dinero hasta que se termina, con la plata repartida entre billeteras, cuenta bancaria y efectivo.
- **Supuestos iniciales:**
  - **[SUPUESTO]** No tienen visión consolidada de cuánta plata tienen disponible.
  - **[SUPUESTO]** La dificultad para ahorrar es en parte de método, no solo de ingreso.
  - **[SUPUESTO]** El acceso a billeteras digitales no mejoró la capacidad de planificar.
  - **[SUPUESTO]** Hablar de deudas propias genera incomodidad, lo que dificultaría entrevistar.
- **Fuera de alcance:** menores de 18; inversión avanzada, trading y cripto; educación financiera como política pública; diseño de productos financieros y regulación; la macroeconomía como objeto de estudio.

---

## 2. Research secundario

### Problemas potenciales

| # | Problema potencial | Usuario | Contexto | Evidencia | Fuente | Tipo | Preguntas pendientes |
|---|---|---|---|---|---|---|---|
| P1 | El dinero queda repartido entre varias billeteras y cuentas, sin visión del total real | Jóvenes con ingresos digitales | Decidir un gasto | 70% de los argentinos usó billeteras en los últimos 6 meses; conviven al menos 5 plataformas masivas | F7 | **[HECHO]** la adopción; **[INTERPRETACIÓN]** que genere dificultad | ¿Cuántas usa? ¿Sabe cuánto tiene sin abrir cada app? |
| P2 | Endeudamiento temprano con incumplimiento de pagos | 18 a 30, sobre todo menores de 25 | Crédito en fintech, billeteras y tarjetas no bancarias | Mora del 38,2% en menores de 25, la más alta de todas las franjas | F1, F2 | **[HECHO]** | ¿Por qué caen en mora? ¿Falta de ingreso, desconocimiento del costo o desorganización? |
| P3 | El ahorro se inicia pero no se sostiene | Jóvenes que quieren ahorrar | Mes a mes | Solo 49% ahorra de manera sostenida; 29% gasta sus ahorros antes de lo planeado | F4 | **[HECHO]** la cifra; **[SUPUESTO]** que aplique a 18-30 | ¿Qué gasto rompe el ahorro? ¿Era evitable? |
| P4 | El acceso a herramientas creció más rápido que la capacidad de usarlas | Jóvenes nativos digitales | Uso cotidiano de billeteras | Exclusión financiera cayó de 41% a 9% en dos años; los hábitos no mejoraron en la misma proporción | F4 | **[HECHO]** el salto de acceso; **[INTERPRETACIÓN]** la brecha | ¿Se traduce en errores concretos o solo en inseguridad? |
| P5 | Gastos chicos recurrentes que no se registran | Consumo digital en general | Día a día y suscripciones | Los consumos automáticos pueden ser 10-12% del ingreso mensual | F9 | **[INTERPRETACIÓN]** — contenido de marca de una fintech, confianza baja | ¿Hay un estudio detrás del dato? ¿Se percibe como problema? |
| P6 | Los métodos de registro de gastos se abandonan a los pocos días | Quienes intentan ordenarse | Al empezar una app o planilla | Se reporta abandono temprano, sin estudio que lo respalde | — | **[SUPUESTO]** — es el punto más débil del research | ¿Existe evidencia real de abandono? |
| P7 | Ingresos irregulares que rompen la planificación | Empleo informal o changas | Meses de ingreso variable | 58% de varones y 60% de mujeres de 16-29 trabaja en la informalidad; desocupación del segmento 17,2% | F3 | **[HECHO]** la informalidad; **[INTERPRETACIÓN]** que impida planificar | ¿Cómo planifica quien no sabe cuánto va a cobrar? |
| P8 | No se sabe con precisión cuánto se ahorra | Jóvenes que logran guardar plata | Fin de mes | 50,2% de los jóvenes de 16-29 puede ahorrar, pero 29,9% no sabe cuánto | F3 | **[HECHO]** | ¿No lleva registro o no puede sumar lo que está disperso? |

### Fuentes consultadas

Todas fueron abiertas y verificadas.

| # | Fuente | Señal que aporta | Limitación |
|---|---|---|---|
| F1 | [Infobae — Morosidad en menores de 25 (ago. 2026)](https://www.infobae.com/economia/2026/08/05/la-morosidad-en-los-creditos-de-bancos-y-billeteras-tiene-su-foco-principal-en-los-menores-de-25-anos/) | Mora del 38,2% en menores de 25. Causas señaladas: informalidad laboral y tasas hasta 100 puntos por encima de la banca | Informe del Centro de Estudios de la Ciudad; solo accedimos a la cobertura periodística |
| F2 | [El Cronista — Generación default](https://www.cronista.com/economia-politica/generacion-default-la-mora-desacelero-luego-de-19-meses-pero-9-de-cada-10-jovenes-deben-plata/) | Mora del 42,59% en proveedores no financieros vs. 17,97% en bancos privados (Consultora 1816) | El titular es más alarmante que el dato que sostiene el cuerpo de la nota |
| F3 | [El Cronista — La paradoja del ahorro](https://www.cronista.com/economia-politica/la-paradoja-del-ahorro-2-de-cada-3-argentinos-resignan-consumos-pero-un-sector-tapado-logra-guardar-dinero/) | 66,4% de hogares no ahorra, pero los jóvenes son el único segmento que sí (50,2%); 29,9% no sabe cuánto | Pulso Research, enero 2026. **No publica el tamaño de muestra.** Atribuye el ahorro juvenil a no pagar vivienda ni servicios |
| F4 | [Sustenomics — Adolescentes y finanzas](https://sustenomics.com/adolescentes-y-finanzas-el-mayor-acceso-a-herramientas-financieras-no-significa-mejores-habitos/) | 49% ahorra sostenidamente, 29% gasta antes de lo planeado; exclusión financiera de 41% a 9% | Junior Achievement + CEPE-UTDT, +5.000 casos, 2024. **Mide 14 a 19 años**, no nuestro usuario |
| F5 | [Los Andes — Adolescentes y billeteras virtuales](https://www.losandes.com.ar/economia/en-argentina-6-de-cada-10-adolescentes-prefiere-pagar-con-billetera-virtual-que-con-efectivo) | 67% de los jóvenes de 13-17 tiene cuenta digital | **Provokers para Mercado Pago**, 406 casos de 13-17. Conflicto de interés: mide la utilidad de su propio producto. Solo lo usamos como señal de adopción |
| F6 | [Infobae — Los argentinos y el dinero (feb. 2026)](https://www.infobae.com/economia/2026/02/10/bancos-o-billeteras-virtuales-una-encuesta-revela-que-prefieren-los-argentinos-para-cobrar-el-sueldo-y-gestionar-el-dinero/) | 78% de los jóvenes prefiere cobrar el sueldo por billetera virtual | Isonomía Consultores. No publica muestra ni metodología |
| F7 | [Infobae — Cuentas remuneradas (ago. 2026)](https://www.infobae.com/economia/2026/08/07/cuentas-remuneradas-cuales-son-las-billeteras-y-bancos-que-mas-rendimiento-ofrecen-a-sus-clientes/) | 70% usó billeteras en 6 meses (Many Minds Group para Mastercard); las tasas cambian permanentemente | Respalda la fragmentación del ecosistema, no la molestia que produce |
| F8 | [BCRA-CAF — Capacidades financieras (2017)](https://www.bcra.gob.ar/archivos/Pdfs/BCRAyVos/Encuesta%20de%20Medici%C3%B3n%20de%20Capacidades%20Financieras%20en%20Argentina%20-%20BCRA-CAF%20(2017).pdf) | Argentina 37° de 39 en educación financiera; en 44% de los jóvenes de 18-29 decide otro miembro de la familia. 1.224 casos, ±2,8% | **Tiene 8 años.** El ecosistema cambió por completo. Línea de base histórica |
| F9 | [Naranja X — Gastos hormiga](https://www.naranjax.com/blog/los-gastos-hormiga-pueden-comerte-la-billetera) | Los consumos automáticos pueden ser 10-12% del ingreso | Contenido de marca de una fintech, sin metodología. Confianza baja |

### Dudas y contradicciones

1. **Contradicción de fondo:** Pulso Research (F3) presenta a los jóvenes como el único segmento que ahorra; el Centro de Estudios de la Ciudad (F1) como el más endeudado. Pueden ser subpoblaciones distintas — quienes viven con sus padres frente a quienes afrontan gastos propios — pero mientras no lo verifiquemos **no podemos hablar de "los jóvenes" como grupo homogéneo.** Es el hallazgo más importante del research y lo primero a resolver al priorizar.
2. **Desajuste etario:** la evidencia metodológicamente más sólida (F4, F5) mide adolescentes de 13 a 19 años. Nuestro usuario es de 18 a 30. Toda inferencia desde ahí es **[SUPUESTO]**, no evidencia.
3. **Sesgo de fuente comercial:** buena parte del contenido disponible está financiado por fintechs y bancos (F5, F9), con interés directo en el resultado.
4. **Sin ninguna voz de usuario:** todo lo que tenemos son agregados estadísticos. No encontramos foros ni testimonios en primera persona. Es exactamente lo que deben aportar las entrevistas.
5. **Discrepancia sin resolver:** distintas coberturas de F4 reportan cifras diferentes (78%/48%/30% vs. 49%/29%). No conseguimos el informe original. Adoptamos las conservadoras.

---

## 3. Fichas de problemas

Fichamos cuatro. Quedaron fuera P4 (es una causa transversal, no una dificultad situada), P5 (evidencia de origen comercial) y P6 (sin fuente sólida). P8 quedó absorbido en la ficha A por ser un síntoma de la dispersión.

### Ficha A — Dispersión del dinero entre múltiples cuentas

| Campo | Respuesta |
|---|---|
| Problema observado | No puede decir cuánta plata tiene en total sin abrir varias apps una por una. |
| Usuario | 18 a 30 con ingresos digitales y más de una cuenta activa. |
| Contexto | Al decidir un gasto no planificado o calcular si llega a fin de mes. |
| Progreso buscado | Saber con cuánto cuenta realmente. |
| Fricción observada | El saldo está repartido y cada plataforma muestra solo su parte. |
| Consecuencia | **[INTERPRETACIÓN]** Decisiones de gasto sobre información parcial. No observada. |
| Evidencia | 70% usó billeteras en 6 meses; al menos 5 plataformas masivas; 29,9% no sabe cuánto ahorra. |
| Fuentes | F7, F3 |
| Frecuencia aparente | 2 fuentes, ninguna mide la dificultad directamente. |
| Comportamiento observable | **[SUPUESTO]** Abrir varias apps y sumar mentalmente. |
| Alternativas actuales | **[SUPUESTO]** Suma mental, notas del celular, planilla. |
| Acceso a usuarios | Alto: casi cualquier compañero con trabajo califica. |
| Supuestos | Que la dispersión se viva como problema y no como algo indiferente o buscado (por rendimientos y promociones). |
| Evidencia faltante | Todo lo central: si molesta, con qué frecuencia y con qué consecuencia. |

### Ficha B — Endeudamiento temprano con incumplimiento

| Campo | Respuesta |
|---|---|
| Problema observado | Toman crédito en fintechs o tarjetas no bancarias y no logran pagarlo en término. |
| Usuario | 18 a 30, con mayor incidencia en menores de 25. |
| Contexto | Consumo financiado o crédito de corto plazo antes de tener ingreso estable. |
| Progreso buscado | Cubrir un gasto que el ingreso corriente no alcanza. |
| Fricción observada | Tasas muy superiores a las bancarias sobre ingresos informales e inestables. |
| Consecuencia | Mora, intereses acumulados y exclusión posterior del crédito. **[HECHO]**, salvo la exclusión posterior, peor documentada. |
| Evidencia | Mora del 38,2% en menores de 25; 42,59% en proveedores no financieros vs. 17,97% en bancos privados; 36% de los deudores jóvenes se concentra en billeteras. |
| Fuentes | F1, F2 |
| Frecuencia aparente | 3 productores de datos independientes con cifras convergentes. **Es el problema mejor respaldado.** |
| Comportamiento observable | Tomar crédito de acceso inmediato, refinanciar, pagar el mínimo. **[HECHO]** a nivel agregado. |
| Alternativas actuales | Refinanciación bancaria, pedir a familiares, postergar el pago. |
| Acceso a usuarios | **Bajo.** El estigma de la mora dificulta conseguir relatos honestos. |
| Supuestos | Que la mora venga de una decisión evitable y no solo de falta de ingresos. Si es lo segundo, no es un problema abordable desde producto. |
| Evidencia faltante | Qué pensaba la persona al tomar el crédito, si entendía el costo y si tenía alternativa. |

### Ficha C — El ahorro se inicia pero no se sostiene

| Campo | Respuesta |
|---|---|
| Problema observado | Se propone guardar plata, empieza, y la gasta antes de lo previsto. |
| Usuario | Jóvenes con excedente después de cubrir gastos fijos. |
| Contexto | El ciclo mensual, entre que entra el ingreso y se agota. |
| Progreso buscado | Acumular para una meta o tener un colchón. |
| Fricción observada | El dinero destinado a ahorro sigue disponible y se consume en gastos corrientes. |
| Consecuencia | El objetivo no se cumple y el ciclo se repite al mes siguiente. |
| Evidencia | 49% ahorra de manera sostenida y 29% gasta antes de lo planeado; 50,2% puede ahorrar pero 29,9% no sabe cuánto. |
| Fuentes | F4, F3 |
| Frecuencia aparente | 2 fuentes coincidentes. **Advertencia:** la principal mide 14 a 19 años. |
| Comportamiento observable | **[SUPUESTO]** Mover la plata de vuelta desde donde la había apartado. |
| Alternativas actuales | **[SUPUESTO]** Cuenta remunerada, dólares, dejarlo en una billetera aparte. |
| Acceso a usuarios | Alto: es un tema socialmente conversable, a diferencia de la deuda. |
| Supuestos | Que el ahorro se rompa por falta de método y no por un gasto necesario e ineludible. **Es el supuesto más riesgoso de la investigación.** |
| Evidencia faltante | Qué gasto concreto lo rompe, si fue elegido o impuesto, y si se vive como fracaso propio o como algo inevitable. |

### Ficha D — Ingresos irregulares que impiden planificar

| Campo | Respuesta |
|---|---|
| Problema observado | No sabe cuánto va a cobrar el mes que viene y no puede comprometerse a un plan. |
| Usuario | Empleo informal, changas, freelance o comisión. |
| Contexto | Cierre de mes y proyección del siguiente. |
| Progreso buscado | Anticiparse: saber si le va a alcanzar o si puede tomar una cuota. |
| Fricción observada | Monto y fecha del ingreso son variables; cualquier presupuesto queda desactualizado. |
| Consecuencia | **[INTERPRETACIÓN]** Planificación de horizonte muy corto; se decide día a día. |
| Evidencia | 58% de varones y 60% de mujeres de 16-29 en la informalidad; desocupación 17,2%; la informalidad es señalada como primera causa de la mora juvenil. |
| Fuentes | F3, F1 |
| Frecuencia aparente | 2 fuentes; la informalidad aparece en ambas. |
| Comportamiento observable | **[SUPUESTO]** Decidir gastos día a día en lugar de mes a mes. |
| Alternativas actuales | **[SUPUESTO]** Presupuestar sobre el piso de ingreso y no sobre el promedio. |
| Acceso a usuarios | Medio-alto: hay compañeros con trabajo informal o freelance. |
| Supuestos | Que la irregularidad se viva como dificultad de gestión y no como una condición dada. |
| Evidencia faltante | Cómo decide efectivamente alguien con ingreso variable y qué hace en un mes malo. |

---

## 4. Limpieza y agrupación

Le entregamos a la IA las cuatro fichas más los ocho problemas potenciales, pidiéndole detectar duplicados, distinguir problemas de síntomas y causas, y señalar vacíos.

### Agrupaciones sugeridas por la IA

1. **P4 no es un problema, es una causa transversal.** Explicaría A, B y C, pero no describe una dificultad situada ni puede investigarse por separado.
2. **P8 es un síntoma de A.** Si el dinero está disperso, no poder sumarlo es la consecuencia esperable.
3. **P5 y P6 son soluciones disfrazadas.** Ambos presuponen que registrar gastos es la conducta correcta: están formulados desde la herramienta, no desde el usuario.
4. **Posible relación causal D → C:** si el ingreso es irregular, el ahorro difícilmente se sostenga. C podría ser un síntoma de D en parte de la población.
5. **Posible relación causal D → B:** el informe del Centro de Estudios de la Ciudad (F1) ubica la informalidad laboral como primera causa de la mora.
6. **Contradicción no resuelta:** "los jóvenes son el único segmento que ahorra" (F3) y "son el segmento con más mora" (F1) sugieren dos subpoblaciones que las fuentes agregadas no separan.
7. **Vacío:** ninguna fuente describe comportamiento individual.

### Decisiones del equipo

| Decisión | Fundamento |
|---|---|
| Aceptamos descartar P4 como problema autónomo | Es una explicación, no una dificultad situada. Lo conservamos como hipótesis causal. |
| Aceptamos absorber P8 en la ficha A | El argumento es correcto. |
| Aceptamos descartar P5 y P6 | Los habíamos escrito nosotros desde la solución. Van al estacionamiento. |
| **Rechazamos fusionar C dentro de D** | Si los fusionamos perdemos el caso de la persona con ingreso estable que igual no ahorra. La relación causal pasa a ser **hipótesis a testear**, no supuesto asumido. |
| Mantenemos B pese al bajo acceso a usuarios | Es el problema con mejor evidencia. Descartarlo por comodidad sería el sesgo de *Ease* que advierte la consigna. |

> **[COMPLETAR]** Revisar estas cinco decisiones en equipo y modificar las que no compartan. Están redactadas como propuesta, no como acuerdo cerrado.

**Reformulación:** el problema C pasó de "no se puede ahorrar" a "el ahorro se inicia pero no se sostiene". La primera versión mezclaba a quien no tiene excedente con quien lo tiene y no lo retiene; solo el segundo caso es investigable como comportamiento.

---

## 5. Evaluaciones ICE individuales

`ICE = (Impact × Confidence × Ease) / 100` — cada criterio de 1 a 10.

| Criterio | Significado en esta actividad |
|---|---|
| **Impact** | Importancia de las consecuencias del problema para el usuario. |
| **Confidence** | Confianza en que el problema existe, **según la evidencia disponible**. |
| **Ease** | Facilidad para **acceder a usuarios y obtener evidencia real**. No es facilidad de construir una solución. |

> Con research secundario solamente, **ningún Confidence debería pasar de 8.** El 9-10 exige evidencia directa de comportamientos reales, que todavía no tenemos.

### ⚠️ Para completar individualmente — cada uno por su cuenta

**Instrucciones:** cada integrante completa su tabla **sin consultar a los demás y sin leer la evaluación de la IA de la sección 5.b.** Si se juntan a completarlas, el ejercicio pierde sentido y la sección 6 queda vacía. La divergencia es el dato valioso, no el acuerdo.

#### Felipe Chain

| Problema | Impact | Confidence | Ease | ICE | Justificación |
|---|---:|---:|---:|---:|---|
| A — Dispersión del dinero |6 |4 | 7|1,68 |La distribución del dinero entre distintos gastos y medios de pago dificulta tener una visión clara de cuánto se gasta y cuánto queda disponible. |
| B — Endeudamiento y mora |8 |8 |3 |1,92 |Es un problema de alto impacto para los jóvenes, ya que el endeudamiento y la mora pueden generar dificultades para afrontar futuros gastos y compromisos financieros. |
| C — Ahorro que no se sostiene |6 |5 |7 |2,1 |Es relevante porque algunos jóvenes logran comenzar a ahorrar, pero terminan utilizando esos ahorros antes de lo previsto, dificultando el cumplimiento de sus objetivos financieros. |
| D — Ingresos irregulares |8 |7 |5 |2,8 |La variabilidad de los ingresos dificulta organizar los gastos y planificar financieramente, especialmente cuando no se conoce con precisión cuánto dinero se recibirá cada mes. |

#### Juan Ignacio Canabe

| Problema | Impact | Confidence | Ease | ICE | Justificación |
|---|---:|---:|---:|---:|---|
| A — Dispersión del dinero | | | | | |
| B — Endeudamiento y mora | | | | | |
| C — Ahorro que no se sostiene | | | | | |
| D — Ingresos irregulares | | | | | |

#### Pedro Tailhade

| Problema | Impact | Confidence | Ease | ICE | Justificación |
|---|---:|---:|---:|---:|---|
| A — Dispersión del dinero | | | | | |
| B — Endeudamiento y mora | | | | | |
| C — Ahorro que no se sostiene | | | | | |
| D — Ingresos irregulares | | | | | |

#### Felipe Servent

| Problema | Impact | Confidence | Ease | ICE | Justificación |
|---|---:|---:|---:|---:|---|
| A — Dispersión del dinero |5 |4 |8 |1,6 |Me parece un problema bastante fácil de investigar porque es común usar más de una billetera o cuenta. Sin embargo, todavía hay poca evidencia de que tener el dinero distribuido genere realmente una consecuencia importante para el usuario. |
| B — Endeudamiento y mora |9 |8 |4 |2,88 |Es el problema con consecuencias más graves y también el que tiene la evidencia más concreta. La mora juvenil está claramente documentada. Le bajo Ease porque puede ser difícil encontrar personas dispuestas a hablar abiertamente sobre deudas o incumplimientos. |
| C — Ahorro que no se sostiene |7 |6 |8 |3,36 |Considero que es un problema relevante porque afecta directamente objetivos personales y aparece respaldado por más de una fuente. Además, es relativamente fácil encontrar jóvenes que hayan intentado ahorrar y preguntarles por experiencias concretas. La confianza no es mayor porque parte de la evidencia corresponde a adolescentes. |
| D — Ingresos irregulares |8 |7 |6 |3,36 |Tener ingresos variables puede afectar mucho la posibilidad de organizar gastos y tomar decisiones con anticipación. Hay evidencia fuerte sobre la informalidad juvenil, aunque no demuestra directamente que las personas lo vivan como un problema de planificación. El acceso a entrevistados es razonable, pero más limitado que en A o C. |

### Tabla consolidada — [COMPLETAR después de las cuatro]

| Problema | Chain | Canabe | Tailhade | Servent | IA | Dispersión (máx − mín) |
|---|---:|---:|---:|---:|---:|---:|
| A — Dispersión del dinero |1,68 | | |1,6 | 1,20 | |
| B — Endeudamiento y mora |1,92 | | |2,88 | 2,16 | |
| C — Ahorro que no se sostiene |2,1 | | |3,36 | 2,52 | |
| D — Ingresos irregulares |2,8 | | |3,36 | 2,94 | |

> El problema con **mayor dispersión** es el que más conviene discutir: indica que alguien leyó la misma evidencia de otra manera, o que hay un supuesto que nadie hizo explícito.

---

## 5.b Evaluación ICE de la IA

Evaluación hecha usando exclusivamente la evidencia de las fichas, con la instrucción de explicitar qué parte de cada puntaje era inferencia.

| Problema | I | C | E | ICE | Qué parte es inferencia | Qué hallazgo cambiaría el puntaje |
|---|---:|---:|---:|---:|---|---|
| A — Dispersión | 5 | 3 | 8 | **1,20** | **Todo el Impact.** Ninguna fuente mide una consecuencia. Confidence 3 porque ninguna fuente afirma que la dispersión genere dificultad | Sube si relatan un error de gasto concreto por no conocer su saldo total. Baja si dicen que abrir varias apps no les cuesta |
| B — Endeudamiento | 9 | 8 | 3 | **2,16** | La atribución causal a decisiones evitables: los datos muestran la mora, no por qué ocurre | Baja fuerte si la mora responde solo a caída de ingresos: dejaría de ser abordable desde producto |
| C — Ahorro no sostenido | 6 | 6 | 7 | **2,52** | Que las cifras de 14-19 años (F4) se trasladen a 18-30. Ease 7 y no 8 porque el segmento con excedente real puede ser más chico de lo que parece | Sube si reconstruyen episodios concretos de ahorro roto. Baja si casi nadie del segmento tiene excedente |
| D — Ingresos irregulares | 7 | 7 | 6 | **2,94** | Que la irregularidad sea *vivida* como problema de gestión y no aceptada como condición normal | Sube si describen estrategias explícitas de manejo del ingreso variable. Baja si lo naturalizan |

**Ranking de la IA:** D (2,94) > C (2,52) > B (2,16) > A (1,20)

### Advertencias que marcó la IA

1. Ningún Confidence debería superar 8: no hay entrevistas propias.
2. El Impact de A es una construcción nuestra, sin fuente que lo sostenga.
3. La contradicción de F1 vs. F3 afecta a C y a D a la vez; ninguna evaluación es confiable hasta resolverla.
4. **Los *Ease* altos de A y C pueden estar inflando su ranking frente a B**, que tiene mucha mejor evidencia.
5. Se negó a elegir un ganador, como pedía la consigna.

---

## 6. Comparación de evaluaciones

> **[COMPLETAR]** Esta sección se escribe recién cuando estén las cuatro evaluaciones individuales. Abajo quedan las preguntas guía y lo único que ya se puede afirmar.

| Pregunta | Respuesta del equipo |
|---|---|
| ¿Dónde coincidimos? | |
| ¿Dónde aparecen diferencias? | |
| ¿Qué puntaje quedó débilmente justificado? | |
| ¿Qué criterio depende más de supuestos? | |
| ¿La IA usó evidencia o completó vacíos? | |
| ¿*Ease* está pesando demasiado en nuestro ranking? | |

**Lo que ya podemos afirmar sobre la IA:**

- No inventó fuentes ni cifras: todo lo que usó estaba en las fichas.
- Marcó sus propias inferencias incluso cuando eso debilitaba sus puntajes.
- Detectó que P5 y P6 eran soluciones disfrazadas que habíamos escrito sin darnos cuenta.
- **En contra:** al agrupar, tendió a fusionar C dentro de D con más seguridad de la que la evidencia permite. Fue el equipo el que frenó esa fusión. Es un caso claro de la IA cerrando una incertidumbre en lugar de conservarla.
- **Riesgo:** reproduce el encuadre de las notas periodísticas que le dimos. El tono de alarma sobre la mora juvenil puede haber inflado el Impact de B.

**Puntajes modificados y motivo:** [COMPLETAR]

**Incertidumbres que permanecen:** la contradicción F1/F3, el desajuste etario de F4 y F5, y si alguno de estos problemas es abordable desde producto o todos son consecuencia de falta de ingreso.

---

## 7. Crítica del problema finalista

Sometimos a cuestionamiento escéptico el problema con mayor ICE según la IA: **D — Ingresos irregulares** (2,94).

> **[COMPLETAR]** Si tras las evaluaciones individuales el finalista del equipo es otro, hay que repetir esta crítica sobre ese problema.

### Debilidades encontradas

1. **El impacto está inferido.** Sabemos que 58-60% de los jóvenes trabaja en la informalidad (F3). **No sabemos que eso les genere una dificultad de gestión.** Podría estar completamente naturalizado.
2. **Confunde contexto con problema.** "Ingreso irregular" describe una circunstancia estructural del mercado laboral, no una fricción ubicable en un momento y un comportamiento.
3. **Puede no tener destinatario de solución.** Si la causa es el mercado laboral, ninguna intervención de producto lo resuelve.
4. **Es la misma categoría que descartamos en P4:** una causa transversal, no un problema autónomo.
5. **Ganó por *Ease*, no por evidencia.** La IA le puso Ease 6 contra el 3 de B. Un problema no debería ganar una priorización por ser más cómodo de investigar — es exactamente la trampa que advierte la consigna.

### Explicaciones alternativas

- Los jóvenes con ingreso irregular podrían tener **mejores** estrategias de gestión, justamente por estar obligados a desarrollarlas.
- La dificultad podría estar en la rigidez de los gastos fijos, no en la variabilidad del ingreso.
- Podría no haber dificultad de planificación: simplemente no alcanza, y eso no es un problema de planificación.

### Evidencia que lo refutaría

- Entrevistados con ingreso variable que describan un método propio y funcional.
- Que digan explícitamente que no planifican porque no tiene sentido, sin vivirlo como carencia.
- Que la única consecuencia mencionada sea "no me alcanza", sin componente de gestión.

### Respuesta del equipo

Aceptamos las objeciones 2, 4 y 5. **D describe una condición, no una fricción situada**, lo que lo hace estructuralmente distinto de C.

No lo descartamos: lo **reclasificamos como variable de segmentación**. En vez de investigar "el problema de tener ingresos irregulares", investigamos C **comparando personas de ingreso estable contra personas de ingreso variable**. Así la dimensión de D entra en el diseño de la investigación sin ser tratada como problema autónomo.

---

## 8. Problema priorizado

**Propuesta del equipo: C — El ahorro se inicia pero no se sostiene** (ICE 2,52, segundo del ranking).

> **[COMPLETAR]** Confirmar o cambiar esta elección después de las evaluaciones individuales. La consigna habilita elegir un problema que no sea el de mayor ICE, siempre que se justifique.

| Criterio | Puntaje | Fundamento |
|---|---:|---|
| Impact | 6 | Afecta un objetivo que el usuario declara tener, pero sin daño inmediato ni irreversible. |
| Confidence | 6 | Dos fuentes coincidentes (F4, F3), con la advertencia de que la principal mide 14-19 años. |
| Ease | 7 | Alto acceso a entrevistados y tema conversable, descontando que no todos tendrán excedente. |
| **ICE** | **2,52** | |

**Por qué no D (2,94):** la crítica mostró que describe una condición estructural y que subió por *Ease*. Su contenido se incorpora como variable de segmentación.

**Por qué no B (2,16), que tiene la mejor evidencia.** Es la decisión más incómoda del trabajo y la dejamos registrada como tal. B tiene el Impact (9) y el Confidence (8) más altos. Lo descartamos por *Ease* (3): el estigma de la mora hace poco probable conseguir relatos honestos en nuestro círculo. **Reconocemos que esto es el sesgo que la consigna advierte.** Lo asumimos con una condición: si en las entrevistas de C aparece deuda de forma espontánea y repetida, **reabrimos B**.

### Redacción final

**Versión breve:**

> Jóvenes de 18 a 30 años con ingresos propios se proponen guardar dinero y terminan gastándolo antes de lo previsto, sin poder identificar en qué momento se rompió el plan.

**Versión centrada en el comportamiento:**

> Cuando un joven de 18 a 30 con ingresos propios decide apartar dinero, lo deja en una cuenta o billetera que sigue usando para gastos corrientes. A lo largo del mes ese dinero se consume en decisiones sucesivas, y a fin de mes no puede reconstruir cuánto había apartado ni cuánto queda.

**Versión completa, con evidencia e incertidumbre:**

> **Los jóvenes de 18 a 30 años con ingresos propios** tienen dificultades para **sostener el dinero que se propusieron ahorrar** cuando **transcurre el mes y ese dinero permanece disponible junto al de los gastos corrientes**, debido a **que el ahorro no está separado del dinero de uso diario ni existe un momento definido para revisar si el plan se cumple**. Esto genera **que el objetivo no se cumpla y que la persona no pueda identificar en qué momento ni por qué se rompió**.
>
> Encontramos señales en Junior Achievement + CEPE-UTDT (F4): **49% ahorra de manera sostenida y 29% gasta sus ahorros antes de lo planeado**; y en Pulso Research (F3): **50,2% de los jóvenes de 16-29 puede guardar dinero pero 29,9% no sabe cuánto**.
>
> Todavía necesitamos comprobar: **(a)** si cifras medidas en adolescentes de 14 a 19 se sostienen en 18-30; **(b)** si el ahorro se rompe por un gasto imprevisto e ineludible o por decisiones evitables — **si es lo primero, no es un problema de gestión sino de ingreso**; **(c)** si se percibe como problema propio o como consecuencia normal del contexto; **(d)** si difiere entre ingreso estable e ingreso variable.

### Revisión de la redacción

| Criterio | ¿Cumple? |
|---|---|
| Usuario concreto | Sí: 18-30 con ingresos propios. |
| Situación observable | Sí: el transcurso del mes con el dinero apartado disponible. |
| Progreso buscado | Sí: sostener un ahorro que se propuso. |
| Fricción sin causa no demostrada | Con reserva: "no está separado del dinero de uso diario" es **[SUPUESTO]**, señalado en (b). |
| Distingue evidencia de supuestos | Sí, en párrafos separados. |
| Evita mencionar una solución | Sí: no se nombra ninguna herramienta ni funcionalidad. |
| Investigable por entrevistas | Sí: pide reconstruir episodios pasados. |
| **¿Podría demostrarse que estamos equivocados?** | **Sí, explicitado en (b).** |

### Justificación del equipo — [COMPLETAR]

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

## 9. Personas sintéticas y entrevistas

Las dos personas **reproducen la contradicción sin resolver del research** (F3 vs. F1): si ambas fuentes son ciertas, describen subpoblaciones distintas. Estas son esas dos subpoblaciones, formuladas como hipótesis.

> Ninguna de las dos es evidencia. Sirven para mejorar preguntas, no para validar nada.

### Persona 1 — "La que puede ahorrar pero no lo sostiene"

| Campo | Contenido |
|---|---|
| Descripción | Asalariada de 24 años, empleo formal, vive con sus padres. No afronta vivienda, servicios ni alimentación. Ingreso predecible. |
| Objetivo | Acumular para una meta de mediano plazo (viaje, mudanza, curso), sin fecha ni monto definidos. |
| Comportamientos | Cobra por billetera. Deja el excedente en la misma cuenta con la que gasta. Revisa el saldo al comprar, no de forma programada. |
| Frustraciones | Llega a fin de mes con menos de lo esperado y no logra reconstruir en qué se fue. |
| Restricciones | Su capacidad de ahorro depende de una convivencia que puede cambiar. |
| Alternativas actuales | **[SUPUESTO]** Cuenta remunerada, o dejar la plata quieta. |
| Evidencia | F3 (50,2% puede ahorrar, 29,9% no sabe cuánto; el ahorro se atribuye a no pagar vivienda ni servicios), F4 (49%/29%). |
| Supuestos incorporados | Que no separa el ahorro, que le importa la meta, que lo percibe como problema propio. **Ninguno respaldado.** |
| Solo una persona real puede decir | ¿Separa la plata o no? ¿Qué gasto rompió el último intento? ¿Le molesta o lo naturaliza? |

### Persona 2 — "El que no llega a tener excedente"

| Campo | Contenido |
|---|---|
| Descripción | 26 años, changas / freelance / comisión. Monto y fecha de cobro cambian mes a mes. |
| Objetivo | Llegar a fin de mes y cubrir gastos fijos. El ahorro no está entre sus objetivos inmediatos. |
| Comportamientos | Decide día a día, no mes a mes. Usó crédito de acceso inmediato para cubrir un faltante. |
| Frustraciones | No puede comprometerse a cuotas sin saber cuánto va a cobrar. |
| Restricciones | Sin recibo de sueldo, con acceso limitado a crédito bancario de tasa baja. |
| Alternativas actuales | Refinanciación, pedir a familiares, postergar pagos. |
| Evidencia | F3 (58%/60% de informalidad, 17,2% de desocupación), F1 (mora 38,2% en menores de 25; informalidad como primera causa; 36% de deudores jóvenes en billeteras). |
| Supuestos incorporados | Que viva la irregularidad como dificultad y que haya tomado crédito sin comprender el costo. **Ambos son especulación nuestra.** |
| Solo una persona real puede decir | ¿Cómo decide en un mes malo? ¿Qué pasó la última vez que no le alcanzó? ¿Qué entendía del costo? |

**Por qué estas dos:** si al entrevistar resulta que **la Persona 1 casi no existe** en nuestro entorno — que casi nadie tiene excedente real — entonces C está mal planteado y lo que hay es un problema de ingreso. El contraste está diseñado para poder refutarnos.

### Aprendizajes del role-play

Entrevista simulada a la Persona 1, con la IA instruida para declarar cuándo una respuesta no estaba respaldada.

- **Respondió "esto debe validarse con una persona real" justo en las preguntas que más importaban:** qué gasto rompió el ahorro y si separaba la plata. Es el hallazgo central: donde necesitábamos evidencia, no había nada, porque nunca la tuvimos.
- Ante "contame la última vez que te pasó", no pudo relatar una situación. **Una persona sintética no tiene pasado.**
- Preguntas corregidas gracias al simulacro:
  - *"¿Te resulta difícil ahorrar?"* → sugiere la respuesta y admite un sí/no vacío. **Reformulada.**
  - *"¿Usarías algo que te ayude a separar la plata?"* → intención futura + presenta una solución. **Eliminada.**
  - *"¿Por qué no lograste ahorrar?"* → pide una racionalización, no un hecho. **Reformulada como reconstrucción de episodio.**
- **Riesgo detectado:** respondía de forma demasiado ordenada. Si en las entrevistas reales escuchamos relatos así de prolijos, probablemente los estemos induciendo nosotros.

### Guion de entrevista real

1. Contame cómo fue el último mes en términos de plata: cuándo cobraste y qué pasó hasta que se terminó.
2. ¿Cuándo fue la última vez que te propusiste guardar plata? ¿Qué te propusiste exactamente?
3. ¿Qué hiciste concretamente con esa plata cuando decidiste guardarla? ¿Dónde quedó?
4. ¿Qué pasó después con esa plata? Contame paso por paso.
5. Si la usaste: ¿cuál fue el gasto? ¿Qué estaba pasando ese día?
6. ¿En qué momento te diste cuenta de que ya no estaba?
7. ¿Cuántas veces te pasó algo parecido en el último año? Contame otra vez.
8. Cuando querés saber cuánta plata tenés en total, ¿qué hacés? Mostrame si podés.
9. ¿Alguna vez hiciste algo distinto para que no vuelva a pasar? ¿Qué resultó?
10. De todo esto, ¿qué te molestó de verdad y qué te pareció normal?

**Profundización** (cuando la respuesta sea general):
- "Dijiste que se te fue en cosas. ¿Qué cosas? Dame un ejemplo del último mes."
- "¿Ese gasto lo podrías haber evitado o no había opción?"

**Si aparece deuda espontáneamente** (no preguntar por deuda de forma directa):
- "Contame cómo fue esa vez que necesitaste la plata y no la tenías."
- "¿Qué opciones evaluaste?"
- "Cuando lo pediste, ¿qué sabías sobre cuánto ibas a terminar devolviendo?"

> Si la deuda aparece espontáneamente en 3 o más entrevistas, **reabrir el Problema B**.

**Reglas de conducción:** no mencionar herramientas ni soluciones; no preguntar "¿usarías...?"; pedir siempre un episodio concreto; registrar frases textuales; tolerar el silencio; **no defender nuestra hipótesis si el entrevistado la contradice** — esa contradicción es el dato más valioso.

### Plan de entrevistas — [COMPLETAR]

| Decisión | Definición |
|---|---|
| Perfil | 18-30 con ingresos propios. **Cuota obligatoria:** al menos 1 de ingreso estable y 1 de ingreso variable o informal. |
| Cantidad | Mínimo 3 según la consigna. Siendo 4, una por integrante. |
| Forma de contacto | **[COMPLETAR]** |
| Dupla 1 (entrevistas 1 y 2) | **[COMPLETAR]** — uno conduce, otro registra; se invierten en la segunda |
| Dupla 2 (entrevistas 3 y 4) | **[COMPLETAR]** |
| Evidencia a recopilar | Audio con consentimiento, notas textuales, y al menos un episodio concreto de ahorro roto por entrevistado |
| Fecha límite | Antes de la Clase 3 |

---

## Registro de entrevistas reales — [COMPLETAR]

> Se completa antes de la Clase 3. Repetir el bloque para cada entrevista.

### Entrevista 1

- Fecha / Entrevistador / Registrador:
- Perfil (edad, tipo de ingreso, situación de vivienda):

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

**Cambios que haríamos a la redacción del problema**
-

### Entrevista 2

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

**Cambios que haríamos a la redacción del problema**
-

### Entrevista 3

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

**Cambios que haríamos a la redacción del problema**
-

### Entrevista 4

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

**Cambios que haríamos a la redacción del problema**
-

### Síntesis de las entrevistas — [COMPLETAR]

| Pregunta | Respuesta |
|---|---|
| ¿Qué apareció en todas? | |
| ¿Qué apareció en una sola y no se repitió? | |
| ¿El ahorro se rompió por gastos evitables o ineludibles? | |
| ¿Se comportan distinto los de ingreso estable y los de ingreso variable? | |
| ¿Apareció deuda de forma espontánea? ¿En cuántas? | |
| ¿Qué contradijo nuestra hipótesis? | |

---

## 10. Revisión y entrega

### Lista de verificación

- [x] Territorio: dominio, usuario, contexto, supuestos y límites
- [x] Entre 5 y 10 problemas potenciales — 8
- [x] Fuentes originales y verificables — 9, con limitaciones documentadas
- [x] Fichas completas de los finalistas — 4
- [x] Agrupaciones de la IA y decisiones del equipo — incluye una agrupación rechazada
- [ ] **Evaluaciones ICE individuales — pendiente.** Las cuatro tablas están vacías a propósito.
- [x] Evaluación ICE de la IA con justificaciones
- [ ] **Comparación entre evaluaciones — pendiente.** Requiere lo anterior.
- [x] Crítica escéptica del finalista — con reclasificación de D
- [ ] **Decisión humana justificada — pendiente.** La propuesta está redactada; falta confirmarla y completar el bloque de justificación.
- [x] Redacción final del problema — tres versiones
- [x] Dos personas sintéticas
- [x] Aprendizajes del role-play
- [x] Guion de entrevista; **plan de entrevistas pendiente de completar**
- [x] Supuestos pendientes y evidencia que podría refutarlos
- [ ] **Registro de entrevistas reales — pendiente para la Clase 3**

### Qué falta hacer, en orden

| # | Tarea | Quién | Cuándo |
|---|---|---|---|
| 1 | Completar la evaluación ICE individual, **cada uno por separado** | Los 4 | Antes de juntarse |
| 2 | Armar la tabla consolidada y calcular la dispersión | Equipo | Después de 1 |
| 3 | Escribir la sección 6 (comparación) | Equipo | Después de 2 |
| 4 | Confirmar o cambiar el problema priorizado y completar el bloque de justificación | Equipo | Después de 3 |
| 5 | Revisar las 5 decisiones propuestas en la sección 4 | Equipo | Con 3 y 4 |
| 6 | Definir contactos y duplas | Equipo | Esta semana |
| 7 | Hacer y registrar las entrevistas | Duplas | Antes de la Clase 3 |
| 8 | Conseguir el informe original de Junior Achievement/CEPE para resolver la discrepancia de F4 | **[COMPLETAR]** | Antes de la Clase 3 |

### Cierre del equipo — [COMPLETAR]

```text
El problema que decidimos investigar es:

La evidencia más fuerte que encontramos es:

El supuesto más riesgoso es:

La pregunta más importante para los usuarios reales es:
```

---

## Principios que guiaron el trabajo

1. No empezar por la solución — las 5 ideas que aparecieron están en el estacionamiento, sin desarrollar.
2. No confundir respuestas de la IA con evidencia — todo lo generado está etiquetado.
3. Verificar las fuentes originales — las 9 fueron abiertas, con limitaciones y conflictos de interés declarados.
4. Separar hechos, interpretaciones y supuestos.
5. Usar ICE para ordenar la conversación, no para fabricar certeza — proponemos el segundo del ranking, con la justificación escrita.
6. Usar personas sintéticas para mejorar preguntas — el role-play corrigió 3 preguntas del guion.
7. Buscar comportamientos pasados — las 10 preguntas piden reconstruir episodios.
8. Documentar contradicciones — la de F1 vs. F3 sigue sin resolver y está declarada como tal.

> **Priorizar un problema no significa haberlo validado. Significa elegir qué incertidumbre investigar primero.**
