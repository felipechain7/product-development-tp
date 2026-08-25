# Clase 2 — Descubrimiento de problemas asistido por IA

**Materia:** Product Development
**Equipo:** Felipe Chain · Juan Ignacio Canabe · Pedro Tailhade · Felipe Servent
**Fecha:** 24 de agosto de 2026
**Dominio:** Finanzas personales de jóvenes en Argentina

---

## Nota metodológica

Usamos IA para explorar fuentes y organizar información; la verificación y las decisiones son del equipo. Marcamos **[HECHO]** (dato de fuente verificable), **[INTERPRETACIÓN]** (lectura nuestra) y **[SUPUESTO]** (creencia sin comprobar).

Tres advertencias:

1. Toda la evidencia es research secundario. **Nada está validado con usuarios reales.**
2. Las 8 fuentes fueron abiertas y verificadas, con sus limitaciones anotadas.
3. **Este documento cubre hasta el Paso 3.** No hay problema priorizado todavía: hay cuatro problemas fichados y comparables.

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
