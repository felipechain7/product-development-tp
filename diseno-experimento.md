# Diseño del experimento — Aparte

**Equipo:** Felipe Chain · Juan Ignacio Canabe · Pedro Tailhade · Felipe Servent
**Fecha de cierre del diseño:** 14/09/2026
**Materiales para ejecutarlo:** [experimento-materiales.md](experimento-materiales.md)
**Resultados:** [registro-experimento.md](registro-experimento.md)

> Este archivo documenta el diseño. Los resultados van en el registro, separados de la interpretación.

---

## 1. Evidencia de partida

### De dónde salió el experimento

| Capa | Qué aporta | Límite |
|---|---|---|
| **4 entrevistas** — 26 y 27/08/2026 ([transcripciones](entrevistas-reales.md)) | Comportamiento reconstruido en episodios concretos | Cuatro casos. No dimensiona el segmento ni establece causalidad. |
| **9 fuentes secundarias** ([registro](clase-02-descubrimiento.md)) | Magnitud del fenómeno a nivel agregado | Ninguna observa comportamiento individual. Dos miden adolescentes de 14 a 19. |
| **Análisis competitivo** ([análisis](analisis-competitivo.md)) | Qué parte de la solución ya existe en el mercado | Relevamos Naranja X Frascos en detalle. No relevamos Mercado Pago, Ualá ni Personal Pay con la misma profundidad. |

### Lo que la evidencia sí muestra

- El segmento se ordena en **tres tramos**, y el problema describe solo el primero: ingreso estable, sin gastos fijos de vivienda, con excedente real.
- Los entrevistados **distinguen espontáneamente** entre usar el ahorro por una necesidad y usarlo en algo que después lamentan. Solo lo segundo les molesta.
- **Quienes separan el dinero sostienen más.** Aparece en 2 de 4 entrevistas (Martina y Sofía).

### El supuesto que el experimento ataca

La relación entre separar y sostener es **correlación observada, no causalidad**. No sabemos si separar causa el resultado o si quienes separan ya tenían más margen.

Y hay un dato que cambió el diseño: **Naranja X Frascos ya resuelve la separación a escala** — 19 millones de frascos creados en seis meses. Separar por objetivo no es una hipótesis pendiente, es una función disponible y masivamente adoptada. Lo único que la propuesta agrega es la **demora para recuperar el dinero**.

Esto obliga a que el experimento no pruebe "¿separar ayuda?", sino **"¿la demora agrega algo por encima de separar?"**.

---

## 2. Contrato experimental

Fijado antes de construir el instrumento y antes de reclutar.

| Campo | Definición |
|---|---|
| **Hipótesis** | Apartar el monto de la meta con una demora para recuperarlo hará que llegue más dinero a fin de mes que separarlo sin demora. |
| **Aprendizaje** | Si el mecanismo de demora cambia el resultado, y a qué costo de incomodidad para el usuario. |
| **Participantes** | 10 jóvenes de 18 a 30 del tramo 1, que hoy **no** separen su ahorro operativamente. Divididos en dos grupos de 5. |
| **Acción o resultado** | Cuánto del monto que la persona se propuso guardar sigue guardado al cierre del ciclo de cobro. |
| **Métrica** | Tasa de cumplimiento = `monto_sostenido ÷ monto_propuesto`. La métrica del experimento es la diferencia entre el promedio del grupo B y el del grupo A. |
| **Criterio de éxito** | El grupo con mecanismo supera al control por **≥ 20 puntos porcentuales**. |
| **Criterio de fracaso** | Diferencia **< 10 puntos**, o **≥ 2 abandonos** en el grupo con mecanismo. |
| **Zona gris** | Entre 10 y 20 puntos. No se concluye: se repite con más participantes. |
| **Duración** | 4 semanas — un ciclo de cobro completo por participante. |
| **Limitación** | No puede demostrar adopción sostenida, disposición a pagar, ni que el resultado sea estadísticamente significativo. |

**Estos criterios no se ajustan después de ver los resultados.** Si el resultado cae en la zona gris, la respuesta es "no concluimos", no mover el umbral.

### Por qué esta hipótesis y no otra

De las cuatro hipótesis del canvas, la de valor es la única con incertidumbre 5 e impacto 5 ([Caja 7](lean-product-canvas.md)). Es también la única cuya respuesta negativa detiene el proyecto: si la demora no cambia el resultado, no hay producto, solo un recordatorio de algo que la gente ya sabe. Las otras tres se pueden ajustar sin tirar la idea.

---

## 3. Experimento elegido

**Wizard of Oz con grupo de comparación.** El participante percibe un servicio que aparta su dinero y aplica una demora para devolverlo. Detrás no hay sistema: hay cuatro personas operando WhatsApp y una planilla.

**Herramientas:** un formulario de Google, una hoja de cálculo y WhatsApp. Costo cero. No se construye producto.

### La variable que se aísla

| | Grupo A (control) | Grupo B (mecanismo) |
|---|---|---|
| Declara meta y monto | Sí | Sí |
| Separa el dinero a una cuenta propia | **Sí** | **Sí** |
| Puede usarlo cuando quiera | Sí, sin avisar | **No — avisa y el equipo confirma 24 h después** |

**Ambos grupos separan.** La única diferencia entre ellos es la demora. Por eso la diferencia de cumplimiento mide la demora y nada más.

### Alternativas descartadas

| Alternativa | Por qué no |
|---|---|
| Landing con lista de espera | Mide interés declarado, no comportamiento con dinero real. La hipótesis es de comportamiento. |
| Prototipo de app funcional | Semanas de construcción para probar un mecanismo que se puede operar a mano. Caro para la evidencia que produce. |
| Un solo grupo con mecanismo | Sin control no hay con qué comparar. Cualquier resultado se podría atribuir al efecto de ser observado. |

---

## 4. Partes reales y partes simuladas

| Componente | Estado | Detalle |
|---|---|---|
| El dinero | **Real** | Plata propia de los participantes, movida por ellos entre cuentas propias. |
| La meta y el monto | **Reales** | Los declara el participante, no se los asignamos. |
| Los gastos que rompen el ahorro | **Reales** | Ocurren en la vida del participante, no los provocamos. |
| El apartado | **Real en efecto, manual en operación** | La persona transfiere de verdad. No hay sistema que lo retenga. |
| La demora de 24 h | **Simulada** | No es un bloqueo técnico. Es un integrante del equipo que responde al día siguiente. Nada impide físicamente que la persona use su plata. |
| El "servicio" | **Simulado por completo** | No existe producto, backend, cuenta ni integración bancaria. |
| La medición del saldo | **Autorreportada** | Tomamos el monto que la persona dice. No verificamos saldos ni pedimos capturas. |

### Regla que no se rompe

**El equipo no toca el dinero de nadie, en ningún momento.** Tampoco pedimos CBU, alias, credenciales ni capturas de saldo. Solo montos declarados.

Esto no es una formalidad: condiciona el diseño. La demora es simulada **porque** no podemos retener dinero ajeno, y eso es una limitación del experimento, no un atajo.

---

## 5. Alcance mínimo

### Lo que se construye

- Un formulario de reclutamiento con 8 preguntas de filtro.
- Una planilla con 14 columnas, una fila por participante.
- Cinco guiones de WhatsApp.

Nada más. Todo está escrito en [experimento-materiales.md](experimento-materiales.md).

### Lo que queda explícitamente afuera

| Afuera | Por qué |
|---|---|
| Cuentas de usuario, login, perfil | No hace falta para observar la métrica. |
| Integración bancaria o con billeteras | Es la incertidumbre técnica de una etapa posterior. Hoy no la probamos. |
| Retención real del dinero | No podemos ni queremos tocar plata ajena. |
| Cobro, monetización, disposición a pagar | No hay una sola observación sobre esto. Sería inventar. |
| App, pantallas, diseño | El experimento prueba el mecanismo, no la interfaz. |
| Automatización de la demora | Se opera a mano con 10 personas. Con 10.000 sería otro problema. |

**Regla de corte:** si algo no ayuda a medir `monto_sostenido ÷ monto_propuesto`, no entra.

---

## 6. Protocolo

### Reclutamiento y filtro

Se envía el formulario apuntando a **25-30 respuestas para quedarse con 10**. Los filtros son restrictivos a propósito.

El filtro que no se relaja: **pregunta 6 — "cuando decidís guardar plata, ¿la pasás a otra cuenta o la dejás donde tenés el resto?"**. Solo entra quien responde *"la dejo donde está"*. Si el participante ya separaba antes, trae un hábito que contamina la comparación, porque los dos grupos van a separar por primera vez durante el experimento.

### Consentimiento

Antes de arrancar, por WhatsApp, con un "sí" explícito. Aclara que es un trabajo de facultad, que no se pide plata ni datos de cuentas, que el informe es anónimo y que se puede dejar de participar sin dar explicaciones.

### Asignación

Ordenar por fecha de respuesta y alternar: impares al grupo A, pares al grupo B. **La asignación se registra en la planilla antes de empezar y no se mueve.** Si alguien abandona no se reemplaza: se anota la baja y se reporta.

### Secuencia

| Momento | Qué pasa |
|---|---|
| Días 1-3 | Enviar formulario, filtrar, asignar grupos |
| Días 4-5 | Consentimiento y declaración de meta |
| Día de cobro de cada participante | Mensaje según grupo. Ambos confirman el apartado |
| Semanal | Chequeo a ambos grupos |
| Continuo | Atender pedidos de retiro del grupo B dentro de las 24 h |
| Fin del ciclo | Cierre y cálculo de la métrica |

Cada integrante sigue a 2 o 3 participantes y **el responsable no cambia durante el experimento**, para que el trato sea consistente.

### Qué se anota aunque no sea la métrica

- Frases textuales sobre la demora, sobre todo las negativas.
- Cuántos cambian de idea durante las 24 horas.
- Qué gastos rompieron el ahorro, y si el participante los llama evitables o necesarios.
- Dónde eligieron apartar el dinero.
- Quién abandona y en qué momento — señal temprana de que la fricción molesta.

---

## 7. Decisiones humanas

Lo que decidió el equipo, no la IA.

| Decisión | Qué se eligió | Por qué |
|---|---|---|
| **Qué aprender ahora** | La hipótesis de valor, sobre las otras tres | Es la única cuya respuesta negativa detiene el proyecto. |
| **Qué experimento** | Wizard of Oz manual, sobre landing y sobre prototipo | Produce evidencia de comportamiento con dinero real a costo cero. |
| **El contrato** | +20 puntos como éxito, <10 como fracaso, zona gris declarada | Umbral alto a propósito: una diferencia chica no justificaría construir el producto. |
| **El alcance** | Sin login, sin integración, sin monetización, sin app | Nada de eso ayuda a medir la métrica. |
| **La regla del dinero** | No tocar plata ajena ni pedir datos de cuentas | Decisión del equipo, no una restricción externa. Asume el costo de que la demora sea simulada. |
| **Aislar la variable** *(14/09)* | Que el control también separe | Ver abajo. |

### Cambio registrado antes de ejecutar — 14/09/2026

**Antes:** el grupo control no separaba el dinero, solo declaraba su meta. El grupo con mecanismo separaba **y** tenía demora.

**Problema:** los grupos diferían en dos variables a la vez. Un resultado favorable no permitía distinguir el efecto de separar del efecto de la demora. Y el análisis competitivo mostró que separar ya está resuelto a escala: lo único que diferencia la propuesta es la demora.

**Decisión del equipo:** ambos grupos separan el dinero; solo el grupo B tiene demora.

**Sin cambios:** participantes, filtros, duración, métrica, criterio de éxito, criterio de fracaso y zona gris.

**Costo asumido:** como ambos grupos separan, es esperable una diferencia menor entre ellos, y con n = 10 aumenta la probabilidad de caer en la zona gris. Se acepta: un experimento que puede no concluir es mejor que uno que concluye lo que no midió.

---

## Limitaciones del diseño

Declaradas antes de ejecutar, no después de ver los resultados.

- **n = 10 y sin aleatorización real.** Es alternancia, no azar. Es una señal de dirección, no un resultado significativo.
- **Montos autorreportados.** No verificamos saldos.
- **Efecto Hawthorne.** Saberse observado puede mejorar la conducta en ambos grupos. Por eso hay control: el efecto debería afectar a los dos por igual.
- **Demora simulada.** Nada impide físicamente usar el dinero. Un bloqueo real podría dar otro resultado — en cualquier dirección.
- **Cuatro semanas es un ciclo.** No dice nada sobre adopción sostenida.
- **No prueba el producto.** Prueba el mecanismo. La integración financiera queda sin tocar.
