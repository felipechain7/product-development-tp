# Clase 2: descubrimiento de problemas asistido por IA

**Materia:** Desarrollo de Productos
**Equipo:** Felipe Chain · Juan Ignacio Canabe · Pedro Tailhade · Felipe Servent **[CONFIRMAR]**
**Fecha:** 9 de octubre de 2026
**Dominio:** preparación de exámenes en la universidad
**Contexto institucional:** Universidad Austral, Facultad de Ciencias Empresariales (FCE). Licenciatura en Negocios Digitales y carreras de la FCE con materias en común.

---

## Nota metodológica

Usamos IA para buscar fuentes y organizar información. La verificación y las decisiones son del equipo. Marcamos **[HECHO]** (dato de una fuente verificable), **[INTERPRETACIÓN]** (lectura nuestra) y **[SUPUESTO]** (creencia sin comprobar).

Advertencias:

1. Toda la evidencia es research secundario. **Nada está validado con usuarios reales todavía.**
2. Las fuentes F1 a F7 fueron abiertas y leídas. F8 no se pudo abrir (el sitio bloqueó el acceso) y queda marcada como no verificada.
3. **Ninguna fuente es de la Universidad Austral.** No encontramos material público sobre cómo circulan los parciales en nuestra facultad. Ese vacío lo tienen que llenar las entrevistas.
4. **Llegamos al dominio con una idea de solución en la cabeza** (un banco de parciales). Lo declaramos acá para que el research no se limite a confirmarla. Ver el estacionamiento de soluciones y la sección 4.
5. Lo marcado **[COMPLETAR]** es trabajo del equipo y está vacío a propósito: evaluaciones ICE individuales, comparación, confirmación del problema y entrevistas reales.

---

## Estacionamiento de soluciones

| Idea | Por qué la estacionamos |
|---|---|
| Banco de parciales anteriores por materia, cátedra y año | Es la idea con la que llegamos. Todavía no sabemos si el problema es conseguir el material o saber qué hacer con él. |
| Generador de ejercicios "estilo cátedra" con IA | Presupone que el problema es la falta de práctica, no la falta de acceso. |
| Resoluciones comentadas de parciales | Presupone que el material existe y que falta la corrección. Sin evidencia. |
| Grupo de estudio o tutoría entre pares | Ya existen versiones institucionales en otras universidades (F6). No sabemos si es lo que falta en la nuestra. |

---

## 1. Territorio de investigación

- **Dominio:** preparación de exámenes parciales y finales en la universidad.
- **Usuario inicial:** estudiantes de 19 a 23 años, de 1.º a 3.º año, de la FCE de la Universidad Austral.
- **Contexto:** las dos semanas anteriores a un parcial o final, cuando deciden qué estudiar y con qué material.
- **Supuestos iniciales:**
  - **[SUPUESTO]** Los exámenes anteriores son el material más buscado antes de rendir.
  - **[SUPUESTO]** Ese material circula de forma informal: Drives personales, grupos de WhatsApp, fotos en el celular.
  - **[SUPUESTO]** Quien conoce a estudiantes de años superiores consigue más y mejor material.
  - **[SUPUESTO]** No saber cómo evalúa una cátedra genera más ansiedad que no saber el contenido.
- **Fuera de alcance:** la calidad de la enseñanza, la copia durante el examen, los apuntes de clase y los resúmenes, y la salud mental en general.

---

## 2. Research secundario

### Problemas potenciales

| # | Problema potencial | Usuario | Contexto | Evidencia | Fuente | Tipo | Preguntas pendientes |
|---|---|---|---|---|---|---|---|
| P1 | No consiguen exámenes anteriores de su materia y cátedra | Estudiantes de 1.º a 3.º año | Semanas previas al examen | Hay repositorios informales armados por estudiantes (centros de estudiantes, servidores de Discord); Studocu se basa en material subido por estudiantes | F5, F6, F7, F8 | **[HECHO]** que esos canales existen; **[INTERPRETACIÓN]** que existan porque el acceso es difícil | ¿Les cuesta conseguirlos en la Austral? ¿Por qué canal llegan hoy? |
| P2 | No saben qué y cómo va a evaluar la cátedra | Estudiantes que rinden por primera vez una materia | Al preparar el parcial | Etnografía con estudiantes: aprobar depende de descubrir "lo importante" para el profesor. En otra universidad, 66,2 % percibe la aprobación de evaluaciones como dificultad alta | F4, F2 | **[HECHO]** en esas poblaciones; **[SUPUESTO]** que aplique a la FCE | ¿Cómo averiguan hoy qué entra y cómo se pregunta? |
| P3 | Estudian con técnicas de baja efectividad (releer, resumir) en lugar de practicar con exámenes | Estudiantes en general | Preparación del examen | Revisión de Dunlosky et al.: la práctica con pruebas tiene utilidad alta; releer, resumir y subrayar, baja | F1 | **[HECHO]** el resultado de la revisión; **[SUPUESTO]** cómo estudian nuestros compañeros | ¿Practican con exámenes o releen? ¿Por qué? |
| P4 | El acceso al material depende de la red de contactos | Ingresantes y quienes no tienen amigos en años superiores | Primer año | En la cohorte estudiada, 63,7 % esperaba encontrar un buen grupo de estudio y solo 30 % lo logró. Un centro de estudiantes vincula la falta de acceso a material con el abandono de materias | F2, F5 | **[HECHO]** las cifras; **[INTERPRETACIÓN]** el vínculo con el acceso a exámenes | ¿Un ingresante sin contactos consigue el mismo material? |
| P5 | El material que circula es de otra cátedra o de un programa viejo | Quien consigue material por canales informales | Al estudiar con exámenes ajenos | Sin fuente | — | **[SUPUESTO]** | ¿Les pasó estudiar con un examen que no correspondía? |
| P6 | Los exámenes que consiguen no tienen resolución y no saben si lo hicieron bien | Quien practica con exámenes anteriores | Al autocorregirse | Sin fuente verificada | — | **[SUPUESTO]** | ¿Cómo chequean sus respuestas? |
| P7 | Abandono o recursada en los primeros años | Estudiantes de 1.º y 2.º año | Durante el primer año | Alrededor de 40 % abandona en primer año (dato de la SPU citado en 2016). En una cohorte de Medicina de la UNR, 34 % de quienes abandonaron señaló causas académicas, entre ellas las dificultades en los exámenes | F3, F2 | **[HECHO]**, pero de otras universidades y con un dato nacional antiguo | ¿Pasa algo parecido en la FCE? ¿Hay datos internos? |

### Fuentes consultadas

| # | Fuente | Señal que aporta | Limitación |
|---|---|---|---|
| F1 | [APS Observer: "Which Study Strategies Make the Grade?" (2013)](https://www.psychologicalscience.org/observer/which-study-strategies-make-the-grade-2), sobre Dunlosky et al., *Psychological Science in the Public Interest* | De 10 técnicas de estudio, la práctica con pruebas y la práctica distribuida tienen la utilidad más alta; releer, resumir y subrayar, baja | Nota de divulgación sobre la revisión, no el paper completo. Los autores advierten que no es una solución para todos. No habla de Argentina |
| F2 | [Brun et al. (2025). "El abandono en la carrera de Medicina de una universidad pública argentina desde la perspectiva de estudiantes", *El Cardo* 21](https://pcient.uner.edu.ar/index.php/elcardo/article/download/2054/2454/15530) | 66,2 % percibe la aprobación de evaluaciones como dificultad alta. Entre quienes abandonaron, 34 % (n=21) señaló causas académicas. Buen grupo de estudio: 63,7 % lo esperaba, 30 % lo logró | Medicina en la UNR, cohorte 2020 en pandemia. Muestra de 60 estudiantes que abandonaron. No es nuestra facultad ni nuestra carrera |
| F3 | [Zandomeni et al. (2016). "El abandono en las etapas iniciales de los estudios superiores", *Ciencia, Docencia y Tecnología* 27(52)](https://dialnet.unirioja.es/descarga/articulo/5506725.pdf) | Cita datos de la Secretaría de Políticas Universitarias: alrededor de 40 % abandona en primer año | Dato nacional de hace casi 10 años. Estudio en Ciencias Económicas de la UNL (pública). Es contexto, no evidencia del problema |
| F4 | [Guanuco (2019). "No entiendo la cinco: ¿qué es aprobar o desaprobar un parcial en la universidad?", IDES](https://publicaciones.ides.org.ar/sites/default/files/docs/2020/jepe-2019-guanuco.pdf) | Etnografía: los estudiantes aprueban cuando logran descifrar "lo importante" para el profesor. El parcial está cargado de incertidumbre y ansiedad, y los compañeros funcionan como guías | Trabajo Social en la UNPAZ, observación de pocas clases. Cualitativo, no generalizable |
| F5 | [La Izquierda Diario (2016). "UBA: el CEFyL tendrá todos los apuntes digitalizados"](https://www.izquierdadiario.es/UBA-el-CEFyL-tendra-todos-los-apuntes-digitalizados) | Un centro de estudiantes digitaliza el material de todas las materias por el costo de las fotocopias, y vincula la falta de acceso con el abandono | Medio partidario, alineado con la agrupación que conduce ese centro. Habla de apuntes, no de exámenes. Es de 2016 |
| F6 | [La Capital (2021). "Comunidades virtuales de estudio, un espacio universitario para estar cerca"](https://www.lacapital.com.ar/educacion/comunidades-virtuales-estudio-un-espacio-universitario-estar-cerca-n2677520.html) | Estudiantes de la UNR y la UTN arman comunidades en Discord para estudiar, compartir material y consultar a quienes ya cursaron | No menciona exámenes anteriores. Contexto de pandemia |
| F7 | [Studocu: "About us" (versión Argentina)](https://www.studocu.id/es-ar/about-us) | Competidor global: el contenido lo suben estudiantes, incluidos los de años superiores | Página institucional del propio competidor. Las cifras de usuarios que circulan en otros sitios no coinciden entre sí y no las usamos |
| F8 | [Servidor de Discord "UTN FRLP: Contenidos Académicos" (listado en top.gg)](https://top.gg/api/discord/servers/711024631363969024) | Según su descripción, estudiantes comparten apuntes, resúmenes y finales por materia | **No verificada**: el sitio bloqueó el acceso; solo vimos la descripción en el buscador |

### Dudas y contradicciones

1. **No hay ninguna fuente de la Universidad Austral.** Todo viene de universidades públicas (UBA, UNR, UNL, UNPAZ, UTN). En una universidad privada, con cursos más chicos y otros canales, el problema podría ser menor o distinto.
2. **Los repositorios informales existen**, y eso tiene dos lecturas. Puede querer decir que hay demanda, o que el problema ya está resuelto de forma informal. Las fuentes no permiten distinguirlo.
3. **Ninguna fuente mide cuánto cuesta conseguir un examen anterior.** El tiempo perdido (P1) es pura inferencia nuestra.
4. **Lo más sólido (F1) habla de cómo conviene estudiar, no de un problema de acceso.** Respalda que practicar con exámenes es valioso, pero no que les falten exámenes.
5. **Sin voz de usuario de nuestra facultad.** Es exactamente lo que tienen que aportar las entrevistas.
6. **Revisión del aula virtual (observación del equipo, octubre de 2026):** de las materias que revisamos, **solo una** publica exámenes anteriores, y a veces no coinciden con el examen que finalmente se toma. **[HECHO]** observado por nosotros, sin registro sistemático: falta anotar cuántas materias revisamos y cuáles. Descarta que la cátedra ya resuelva el acceso en general, que era la principal forma de refutar A.

---

## 3. Fichas de problemas

Fichamos cuatro. P5 y P6 quedan como preguntas para las entrevistas porque no tienen fuente. P7 es contexto (una consecuencia posible), no un problema investigable por nosotros.

### Ficha A: acceso a exámenes anteriores

| Campo | Respuesta |
|---|---|
| Problema observado | No consiguen exámenes anteriores de su materia y cátedra antes de rendir. |
| Usuario | Estudiantes de 1.º a 3.º año de la FCE. |
| Contexto | Las dos semanas previas a un parcial o final. |
| Progreso buscado | Practicar con exámenes reales de esa cátedra. |
| Fricción observada | **[INTERPRETACIÓN]** El material circula de forma informal y depende de a quién conocés. |
| Consecuencia | **[SUPUESTO]** Tiempo de búsqueda; estudiar con material que no corresponde o sin practicar. |
| Evidencia | Existen repositorios informales armados por estudiantes; Studocu se basa en material subido por estudiantes. |
| Fuentes | F5, F6, F7, F8 (no verificada) |
| Frecuencia aparente | 3 fuentes verificadas, todas indirectas. Ninguna mide la dificultad. |
| Comportamiento observable | **[SUPUESTO]** Pedir en el grupo de WhatsApp, preguntar a conocidos de años superiores, buscar en Drives. |
| Alternativas actuales | **[SUPUESTO]** Grupos de WhatsApp, Drives heredados, aula virtual de la cátedra, Studocu. |
| Acceso a usuarios | Muy alto: somos el segmento. |
| Supuestos | Que conseguir el material cueste. Que la cátedra no lo publique ya. |
| Evidencia faltante | Cuánto tardan, qué canal usan y si alguna vez no consiguieron nada. |

### Ficha B: incertidumbre sobre qué y cómo se evalúa

| Campo | Respuesta |
|---|---|
| Problema observado | Llegan al examen sin saber qué temas entran ni cómo se pregunta. |
| Usuario | Estudiantes que rinden una materia por primera vez. |
| Contexto | Preparación del parcial. |
| Progreso buscado | Saber qué y cómo va a evaluar la cátedra, para estudiar lo que corresponde. |
| Fricción observada | Lo que "es importante" para el profesor no está explícito y hay que descifrarlo. |
| Consecuencia | Incertidumbre y ansiedad (F4); la aprobación de evaluaciones se percibe como dificultad alta (F2). |
| Evidencia | Etnografía en la UNPAZ; encuesta en Medicina de la UNR. |
| Fuentes | F4, F2 |
| Frecuencia aparente | 2 fuentes, de universidades y carreras distintas a la nuestra. |
| Comportamiento observable | Preguntar a compañeros, prestar atención a las "palabras clave" del profesor (F4). |
| Alternativas actuales | Exámenes anteriores, consultas a la cátedra, compañeros de años superiores. |
| Acceso a usuarios | Muy alto. |
| Supuestos | Que la incertidumbre sea sobre el formato y no solo sobre el contenido. |
| Evidencia faltante | Cómo averiguan hoy qué entra y si eso les resulta difícil. |

### Ficha C: estudiar sin practicar con exámenes

| Campo | Respuesta |
|---|---|
| Problema observado | Preparan el examen releyendo y resumiendo, sin practicar con preguntas reales. |
| Usuario | Estudiantes en general. |
| Contexto | La preparación del examen. |
| Progreso buscado | Aprobar con el tiempo que tienen. |
| Fricción observada | **[SUPUESTO]** No tienen con qué practicar o no saben que practicar rinde más. |
| Consecuencia | **[HECHO]** en la literatura: las técnicas de baja utilidad rinden menos que la práctica con pruebas. |
| Evidencia | Revisión de Dunlosky et al. sobre 10 técnicas. |
| Fuentes | F1 |
| Frecuencia aparente | 1 fuente, pero muy sólida (revisión de mucha investigación). |
| Comportamiento observable | **[SUPUESTO]** Releer apuntes y resúmenes. |
| Alternativas actuales | Ejercicios de la guía de la materia, exámenes anteriores. |
| Acceso a usuarios | Muy alto. |
| Supuestos | Que nuestros compañeros estudien así. Que la causa sea la falta de material y no la falta de hábito. |
| Evidencia faltante | Cómo estudiaron para el último parcial, paso a paso. |

### Ficha D: desigualdad de acceso según contactos

| Campo | Respuesta |
|---|---|
| Problema observado | Quien no conoce a estudiantes de años superiores consigue menos material. |
| Usuario | Ingresantes y estudiantes sin red en la facultad. |
| Contexto | Primer año. |
| Progreso buscado | Tener el mismo material que los demás. |
| Fricción observada | **[INTERPRETACIÓN]** El material circula por relaciones personales. |
| Consecuencia | **[INTERPRETACIÓN]** Peor preparación; en el extremo, abandono (F5 lo vincula, sin datos). |
| Evidencia | Brecha entre esperar y lograr un buen grupo de estudio (63,7 % contra 30 %, en pandemia). |
| Fuentes | F2, F5 |
| Frecuencia aparente | 2 fuentes, ninguna mide el acceso a exámenes. |
| Comportamiento observable | **[SUPUESTO]** Pedir material a desconocidos en grupos grandes. |
| Alternativas actuales | Grupos de WhatsApp de la materia, centro de estudiantes. |
| Acceso a usuarios | Alto, aunque cuesta encontrar a quien no tiene red. |
| Supuestos | Que la red de contactos sea decisiva en una facultad con cursos chicos. |
| Evidencia faltante | Comparar a un ingresante sin contactos con uno con contactos. |

---

## 4. Limpieza y agrupación

### Agrupaciones sugeridas por la IA

1. **B es el progreso; A es una de sus fricciones.** Lo que el estudiante quiere es saber qué y cómo lo van a evaluar (B). Conseguir exámenes anteriores (A) es una de las formas de lograrlo, no la única: también están la consulta a la cátedra o los compañeros.
2. **A está formulado peligrosamente cerca de nuestra solución.** "No consiguen exámenes anteriores" ya supone que la respuesta es darles exámenes anteriores. Es el riesgo de solución disfrazada que pide revisar la consigna.
3. **C funciona más como argumento de impacto que como problema autónomo.** Respalda que practicar con exámenes sirve (lo que le da peso a A), pero su fricción ("no saben que practicar rinde más") apunta a otro problema: el hábito de estudio.
4. **D es una variable de segmentación de A**, no un problema separado: la dificultad de acceso podría variar según la red de contactos.
5. **P5 y P6 son subproblemas de A y C**, sin fuente. Quedan como preguntas del guion.
6. **Vacío central:** ninguna fuente es de nuestra facultad ni mide el costo de conseguir material.

### Decisiones del equipo (propuesta)

| Decisión | Fundamento |
|---|---|
| Mantenemos A y B separados para el ICE | Si los fusionamos ahora, dejamos de ver que A puede ser solo una parte de B. |
| Usamos D como variable de segmentación, no como problema | Igual que con el ingreso irregular en otros trabajos: es una condición que cambia la intensidad del problema, no una fricción situada. |
| C queda como ficha, pero señalada como posible problema de hábito | Su evidencia es la más sólida, aunque habla de técnicas de estudio, no de acceso. |
| P5 y P6 pasan al guion de entrevistas | No tienen fuente; solo los usuarios pueden decir si existen. |
| **Reformulamos A alrededor de la dependencia de un contacto** | La fricción que nos interesa no es "no hay exámenes": es que para conseguirlos hay que contactar a alguien de años superiores, esperar que conteste, que lo busque y que lo mande. Así A absorbe a D (la red de contactos) y deja de estar redactado desde nuestra solución. |

> **[COMPLETAR]** Revisar estas decisiones en equipo y cambiar las que no compartan.

---

## 5. Evaluaciones ICE individuales

`ICE = (Impact × Confidence × Ease) / 100`, cada criterio de 1 a 10. *Ease* es la facilidad para acceder a usuarios y obtener evidencia real, no la facilidad para construir.

> **Instrucciones:** cada integrante completa su tabla **sin consultar a los demás y sin leer la sección 5.b.** La divergencia es el dato valioso.

#### Felipe Chain

| Problema | Impact | Confidence | Ease | ICE | Justificación |
|---|---:|---:|---:|---:|---|
| A: acceso a exámenes anteriores | | | | | |
| B: incertidumbre sobre la evaluación | | | | | |
| C: estudiar sin practicar | | | | | |
| D: desigualdad por contactos | | | | | |

#### Juan Ignacio Canabe

| Problema | Impact | Confidence | Ease | ICE | Justificación |
|---|---:|---:|---:|---:|---|
| A: acceso a exámenes anteriores | | | | | |
| B: incertidumbre sobre la evaluación | | | | | |
| C: estudiar sin practicar | | | | | |
| D: desigualdad por contactos | | | | | |

#### Pedro Tailhade

| Problema | Impact | Confidence | Ease | ICE | Justificación |
|---|---:|---:|---:|---:|---|
| A: acceso a exámenes anteriores | | | | | |
| B: incertidumbre sobre la evaluación | | | | | |
| C: estudiar sin practicar | | | | | |
| D: desigualdad por contactos | | | | | |

#### Felipe Servent

| Problema | Impact | Confidence | Ease | ICE | Justificación |
|---|---:|---:|---:|---:|---|
| A: acceso a exámenes anteriores | | | | | |
| B: incertidumbre sobre la evaluación | | | | | |
| C: estudiar sin practicar | | | | | |
| D: desigualdad por contactos | | | | | |

### Tabla consolidada [COMPLETAR después de las cuatro]

| Problema | Chain | Canabe | Tailhade | Servent | IA | Dispersión (máx − mín) |
|---|---:|---:|---:|---:|---:|---:|
| A: acceso a exámenes anteriores | | | | | 2,16 | |
| B: incertidumbre sobre la evaluación | | | | | 2,80 | |
| C: estudiar sin practicar | | | | | 2,88 | |
| D: desigualdad por contactos | | | | | 1,26 | |

---

## 5.b Evaluación ICE de la IA

Hecha solo con la evidencia de las fichas, marcando qué parte de cada puntaje es inferencia.

| Problema | I | C | E | ICE | Qué parte es inferencia | Qué hallazgo cambiaría el puntaje |
|---|---:|---:|---:|---:|---|---|
| A: acceso | 6 | 4 | 9 | **2,16** | El Impact entero: ninguna fuente mide que conseguir exámenes cueste. Confidence 4 porque la evidencia es la existencia de canales informales, que admite dos lecturas | Sube si relatan búsquedas largas o exámenes que no consiguieron. Baja si dicen "lo pido en el grupo y me llega en un rato" |
| B: incertidumbre | 7 | 5 | 8 | **2,80** | Trasladar a la FCE lo observado en la UNPAZ y la UNR | Sube si describen llegar al examen sin saber cómo les iban a preguntar. Baja si la cátedra ya publica modelos de examen |
| C: sin práctica | 6 | 6 | 8 | **2,88** | Que nuestros compañeros estudien releyendo. La revisión es sólida pero general | Sube si cuentan que estudian releyendo. Baja si ya practican con exámenes y guías |
| D: contactos | 7 | 3 | 6 | **1,26** | Casi todo: la cifra de F2 es sobre grupos de estudio en pandemia, no sobre material | Sube si un ingresante sin contactos relata no conseguir nada. Baja si en cursos chicos todos acceden igual |

**Ranking de la IA:** C (2,88) > B (2,80) > A (2,16) > D (1,26)

### Advertencias de la IA

1. Ningún Confidence pasa de 6: no hay entrevistas propias ni datos de nuestra facultad.
2. **A, el problema detrás de nuestra idea, sale tercero.** Tiene el *Ease* más alto, pero la evidencia más indirecta.
3. La diferencia entre C y B (0,08) es menor que cualquier margen razonable de error. Son un empate.
4. El *Ease* es alto en todos, así que el ranking se decide por Confidence, que hoy es baja en todos.
5. La IA no elige un ganador.

---

## 6. Comparación de evaluaciones

> **[COMPLETAR]** cuando estén las cuatro evaluaciones individuales.

| Pregunta | Respuesta del equipo |
|---|---|
| ¿Dónde coincidimos? | |
| ¿Dónde aparecen diferencias? | |
| ¿Qué puntaje quedó débilmente justificado? | |
| ¿Qué criterio depende más de supuestos? | |
| ¿La IA usó evidencia o completó vacíos? | |
| ¿*Ease* está pesando demasiado en nuestro ranking? | |

**Puntajes modificados y motivo:** [COMPLETAR]

---

## 7. Crítica del problema finalista

Sometemos a crítica el de mayor ICE según la IA: **C, estudiar sin practicar con exámenes** (2,88).

> **[COMPLETAR]** Si el finalista del equipo es otro, repetir esta crítica sobre ese problema.

### Debilidades encontradas

1. **La evidencia es sólida, pero no es nuestra.** F1 dice que practicar sirve. No dice que nuestros compañeros no practiquen.
2. **Puede ser un problema de hábito, no de acceso.** Si tienen exámenes y aun así releen, el problema es educativo, y es difícil de resolver con un producto digital dentro del curso.
3. **Su redacción esconde una solución:** "practicar con exámenes" es en sí una técnica.
4. **Puede ser síntoma de A:** quizás no practican porque no tienen con qué.

### Explicaciones alternativas

- Practican, pero con ejercicios de la guía y no con exámenes.
- Releen porque no tienen tiempo para hacer exámenes completos.
- La cátedra ya da modelos de examen y el problema no existe en la FCE.

### Evidencia que lo refutaría

- Entrevistados que cuenten que practican con exámenes anteriores todo el tiempo.
- Que el material abunde y aun así no lo usen (sería hábito, no acceso).

### Respuesta del equipo

Aceptamos las objeciones 1, 2 y 4. C aporta la mejor evidencia de **por qué importa** practicar con exámenes, pero sola no nos dice dónde está la fricción. La usamos como **respaldo del impacto**, no como problema a investigar.

### Crítica del finalista elegido por el equipo: A reformulado

Como elegimos otro problema (sección 8), repetimos la crítica sobre él.

1. **¿El impacto está demostrado?** No. Que conseguir un examen requiera contactar a alguien es una observación nuestra; cuánto tiempo cuesta, nadie lo midió.
2. **¿Confundimos frecuencia con importancia?** Puede pasar seguido y costar poco: si el contacto responde en diez minutos, la fricción es menor.
3. **¿Lo elegimos por el acceso fácil?** En parte sí. Lo compensamos con un Impact y un Confidence que hay que justificar en las entrevistas.
4. **¿Esconde una solución?** Menos que antes: la redacción habla de la espera, no del banco. Pero llegamos con la idea del banco, y hay que cuidar que las entrevistas no busquen confirmarla.
5. **Explicaciones alternativas:** los grupos de WhatsApp de cada materia ya resuelven el pedido en minutos; o lo que molesta no es esperar sino que el examen sea de otro programa (P5).
6. **Lo refutaría:** entrevistados que consigan exámenes al instante sin depender de nadie, o que digan que esperar no les cambia nada.

---

## 8. Problema priorizado

**Decisión del equipo: A reformulado.** Para conseguir un examen anterior, el estudiante depende de contactar a alguien de años superiores y esperar a que conteste, lo busque y se lo mande.

> **[COMPLETAR]** Revisar después de las evaluaciones individuales y anotar si alguien no está de acuerdo.

| Criterio | Puntaje | Fundamento |
|---|---:|---|
| Impact | 6 | Cuesta tiempo en el momento de mayor presión (antes del examen) y deja sin material a quien no tiene contactos. Sin medir todavía. |
| Confidence | 5 | Sube respecto del ICE de la IA (4) por la revisión del aula virtual: solo una materia publica exámenes, así que el acceso depende de canales informales. Sigue sin haber una medición del costo. |
| Ease | 9 | Somos el segmento y vivimos la situación. |
| **ICE** | **2,70** | |

**Por qué no C (2,88), que tiene más ICE:** la crítica mostró que su evidencia habla de técnicas de estudio y no de una fricción ubicable. La usamos como argumento de que practicar con exámenes importa.

**Por qué no B (2,80):** B describe el progreso que busca el estudiante (saber cómo evalúa la cátedra), pero es amplio: abarca desde la claridad del docente hasta la ansiedad. Elegimos la fricción concreta que creemos que lo bloquea y que podemos observar y medir: el tiempo y la dependencia de otra persona para conseguir un examen.

**Lo que asumimos al elegir:** que el problema es la **espera y la dependencia**, no la inexistencia del material. Si las entrevistas muestran que los exámenes se consiguen al instante (por ejemplo, en el grupo de WhatsApp de la materia), reabrimos B.

### Redacción final

**Versión breve:**

> Estudiantes de 1.º a 3.º año de la FCE que quieren practicar con exámenes anteriores dependen de contactar a alguien de años superiores y esperar su respuesta, justo en los días previos al examen.

**Versión centrada en el comportamiento:**

> Cuando se acerca un parcial, el estudiante le escribe a un conocido de años superiores o pregunta en un grupo. Espera que le contesten, que busquen el examen entre sus archivos y que se lo manden. Mientras tanto, estudia sin él; si no conoce a nadie, puede no conseguirlo nunca.

**Versión completa, con evidencia e incertidumbre:**

> **Los estudiantes de 1.º a 3.º año de la FCE de la Universidad Austral** tienen dificultades para **practicar con exámenes anteriores de su materia** cuando **preparan un parcial o un final**, debido a **que esos exámenes solo se consiguen pidiéndoselos a estudiantes de años superiores, lo que exige contactarlos, esperar su respuesta y que los busquen**. Esto genera **tiempo perdido en los días de mayor presión y deja sin material a quien no tiene contactos**.
>
> Encontramos señales en nuestra revisión del aula virtual: solo una materia publica exámenes anteriores, y no siempre coinciden con el que se toma. La revisión de Dunlosky et al. (F1) muestra que practicar con pruebas es de las técnicas de estudio más efectivas, lo que le da valor a tener esos exámenes. Una etnografía sobre parciales (F4) muestra que los compañeros funcionan como guías para saber qué se evalúa, y en Medicina de la UNR (F2) la brecha entre esperar y lograr un buen grupo de estudio fue amplia (63,7 % contra 30 %).
>
> Todavía necesitamos comprobar: **(a)** cuánto tiempo pasa desde que piden un examen hasta que lo tienen; **(b)** si la espera les cambia algo (estudian sin el examen, o lo terminan consiguiendo tarde); **(c)** si quien no tiene contactos consigue menos material; **(d)** si quienes ya rindieron guardan sus exámenes y estarían dispuestos a compartirlos.

### Revisión de la redacción

| Criterio | ¿Cumple? |
|---|---|
| Usuario concreto | Sí: 1.º a 3.º año de la FCE. |
| Situación observable | Sí: la preparación de un parcial o final. |
| Progreso buscado | Sí: practicar con exámenes anteriores de su materia. |
| Fricción sin causa no demostrada | Con reserva: que la espera sea larga es **[SUPUESTO]**, señalado en (a). |
| Distingue evidencia de supuestos | Sí, en párrafos separados. |
| Evita mencionar una solución | Sí: no nombra el banco ni ninguna herramienta. |
| Investigable por entrevistas | Sí: pide reconstruir la última vez que consiguieron un examen. |
| **¿Podría demostrarse que estamos equivocados?** | **Sí:** si consiguen exámenes al instante sin depender de nadie, (a) y (b) se caen. |

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

## 9. Personas sintéticas y entrevistas

> Ninguna de las dos es evidencia. Sirven para mejorar las preguntas.

### Persona 1: "La ingresante sin red"

| Campo | Contenido |
|---|---|
| Descripción | Primer año de la FCE. No conoce a nadie que haya cursado sus materias. |
| Objetivo | Aprobar el primer parcial de una materia nueva sin saber cómo pregunta la cátedra. |
| Comportamientos | **[SUPUESTO]** Pide material en el grupo de WhatsApp del curso. Estudia releyendo apuntes. |
| Frustraciones | **[SUPUESTO]** No sabe si lo que estudia es lo que le van a tomar. |
| Restricciones | Sin contactos en años superiores. |
| Alternativas actuales | **[SUPUESTO]** Grupo de WhatsApp, consulta a la cátedra, Studocu. |
| Evidencia | F4 (descifrar "lo importante"), F2 (brecha entre esperar y lograr un grupo de estudio). |
| Supuestos incorporados | Que no consigue exámenes y que eso le preocupa. **Ninguno respaldado.** |
| Solo una persona real puede decir | ¿Qué hizo para su último parcial? ¿Consiguió exámenes? ¿Cómo? |

### Persona 2: "El de tercero que provee"

| Campo | Contenido |
|---|---|
| Descripción | Tercer año. Tiene una carpeta con exámenes de las materias que ya rindió, heredada y propia. |
| Objetivo | Aprobar sus materias actuales; ayudar a los más chicos cuando le piden. |
| Comportamientos | **[SUPUESTO]** Comparte material cuando se lo piden personalmente, no por iniciativa propia. |
| Frustraciones | **[SUPUESTO]** Le piden lo mismo muchas veces. |
| Restricciones | Tiempo. Puede no querer exponer sus notas o su nombre. |
| Alternativas actuales | Reenviar por WhatsApp, compartir un link de Drive. |
| Evidencia | F7 (en Studocu, estudiantes de años superiores suben material), F6 (comunidades de pares). |
| Supuestos incorporados | Que guarda sus exámenes y que estaría dispuesto a compartirlos. **Especulación nuestra.** |
| Solo una persona real puede decir | ¿Guarda sus exámenes? ¿Los compartió alguna vez? ¿Qué lo haría compartir o no? |

**Por qué estas dos:** la Persona 1 representa la demanda y la 2, la oferta. Si al entrevistar resulta que la Persona 1 consigue todo fácil, el problema de acceso está mal planteado. Si la Persona 2 no guarda nada, cualquier solución que dependa de que los estudiantes compartan va a tener un problema serio.

### Aprendizajes del role-play [COMPLETAR]

El paso 13 de la guía pide que un integrante entreviste a una persona sintética mientras otro registra. Prompt para hacerlo:

```text
Representá a "la ingresante sin red" según esta ficha: [PEGAR FICHA].
Respondé solo con la información de la ficha y de la evidencia. Si una
respuesta requiere inventar una experiencia, un comportamiento o una
motivación, decí: "Esto todavía debe validarse con una persona real".
Respondé una pregunta por vez y no intentes agradar al entrevistador.
```

Registrar: hipótesis nuevas, preguntas a mejorar y respuestas que piden validación real.

### Guion de entrevista real

1. Contame cómo te preparaste para el último parcial que rendiste. ¿Qué hiciste primero?
2. ¿Sabías cómo te iban a preguntar? ¿Cómo te enteraste?
3. ¿Conseguiste exámenes de años anteriores? ¿Cómo, exactamente? ¿Quién te los pasó?
4. ¿Cuánto tardaste en conseguirlos? Contame desde que lo pediste hasta que lo tuviste: ¿a quién le escribiste, cuándo te contestó, qué hiciste mientras esperabas?
5. ¿Eran de tu cátedra y de este programa? ¿Cómo te diste cuenta?
6. ¿Cómo los usaste? ¿Los resolviste, los leíste? ¿Cómo sabías si estaba bien?
7. ¿Alguna vez no conseguiste nada? ¿Qué hiciste?
8. ¿Vos le pasaste material a alguien? ¿Cómo? ¿Por qué sí o por qué no?
9. ¿Tenés guardados exámenes tuyos? Mostrame dónde.
10. De todo esto, ¿qué te molestó de verdad y qué te parece normal?

**Profundización:**
- "Dijiste que lo pediste en el grupo. ¿Qué pasó después? ¿Cuánto tardaron en contestar?"
- "Dijiste que no sabías qué iba a entrar. Contame qué pasó cuando viste el examen."

**Reglas de conducción:** no mencionar herramientas ni soluciones; no preguntar "¿usarías...?"; pedir siempre un episodio concreto; registrar frases textuales; **no defender la hipótesis si el entrevistado la contradice.**

### Plan de entrevistas [COMPLETAR]

| Decisión | Definición |
|---|---|
| Perfil | Estudiantes de la FCE de 1.º a 3.º año. **Cuota:** al menos 1 de primer año y 1 de tercero o más. Idealmente, al menos 1 de otra carrera de la FCE. |
| Cantidad | Mínimo 3; siendo 4, una por integrante. |
| Forma de contacto | **[COMPLETAR]** Compañeros de cursada y de otras comisiones. |
| Dupla 1 (entrevistas 1 y 2) | **[COMPLETAR]** Uno conduce y otro registra; se invierten en la segunda. |
| Dupla 2 (entrevistas 3 y 4) | **[COMPLETAR]** |
| Evidencia a recopilar | Notas textuales, audio con consentimiento y al menos un episodio concreto de preparación de examen por persona. |
| Fecha límite | Antes de la Clase 3. |

---

## Registro de entrevistas reales [COMPLETAR]

> Repetir el bloque para cada entrevista.

### Entrevista 1

- Fecha / Entrevistador / Registrador:
- Perfil (año, carrera, si tiene contactos en años superiores):

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

### Síntesis de las entrevistas [COMPLETAR]

| Pregunta | Respuesta |
|---|---|
| ¿Qué apareció en todas? | |
| ¿Qué apareció en una sola? | |
| ¿Les cuesta conseguir exámenes anteriores o la cátedra ya los da? | |
| ¿La incertidumbre es sobre el formato o sobre el contenido? | |
| ¿Cambia según tener o no contactos? | |
| ¿Guardan y comparten sus exámenes? | |
| ¿Qué contradijo nuestra hipótesis? | |

---

## 10. Revisión y entrega

### Lista de verificación

- [x] Territorio: dominio, usuario, contexto, supuestos y límites
- [x] Entre 5 y 10 problemas potenciales: 7
- [x] Fuentes originales y verificables: 7 verificadas, 1 no verificada y marcada
- [x] Fichas completas de los finalistas: 4
- [x] Agrupaciones de la IA y decisiones del equipo (propuesta)
- [ ] **Evaluaciones ICE individuales: pendiente.**
- [x] Evaluación ICE de la IA con justificaciones
- [ ] **Comparación entre evaluaciones: pendiente.**
- [x] Crítica escéptica del finalista
- [x] Decisión humana: A reformulado (dependencia de un contacto). **Falta completar el bloque de justificación**
- [x] Redacción final del problema: tres versiones
- [x] Dos personas sintéticas
- [ ] **Aprendizajes del role-play: pendiente** (prompt listo)
- [x] Guion de entrevista; **plan de entrevistas pendiente**
- [x] Supuestos pendientes y evidencia que podría refutarlos
- [ ] **Registro de entrevistas reales: pendiente**

### Qué falta hacer, en orden

| # | Tarea | Quién | Cuándo |
|---|---|---|---|
| 1 | Evaluación ICE individual, **cada uno por separado** | Los 4 | Antes de juntarse |
| 2 | Tabla consolidada y dispersión | Equipo | Después de 1 |
| 3 | Sección 6 (comparación) | Equipo | Después de 2 |
| 4 | Confirmar o cambiar el problema priorizado y completar la justificación | Equipo | Después de 3 |
| 5 | Role-play con una persona sintética | Dos integrantes | Antes de entrevistar |
| 6 | Definir contactos y duplas | Equipo | Esta semana |
| 7 | Hacer y registrar al menos 3 entrevistas | Duplas | Antes de la Clase 3 |
| 8 | ~~Averiguar si las cátedras publican exámenes en el aula virtual~~ Hecho: solo una lo hace. Falta anotar cuántas materias se revisaron y cuáles | Quien lo revisó | Antes de entrevistar |

### Cierre del equipo [COMPLETAR]

```text
El problema que decidimos investigar es:

La evidencia más fuerte que encontramos es:

El supuesto más riesgoso es:

La pregunta más importante para los usuarios reales es:
```

---

> **Priorizar un problema no significa haberlo validado. Significa elegir qué incertidumbre investigar primero.**
