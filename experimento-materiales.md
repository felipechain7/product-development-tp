# Materiales del experimento — Aparte

**Equipo:** Felipe Chain · Juan Ignacio Canabe · Pedro Tailhade · Felipe Servent
**Experimento:** Wizard of Oz · 4 semanas · 10 participantes en 2 grupos
**Hipótesis que prueba:** apartar con demora hace que llegue más dinero a fin de mes que separarlo mentalmente
**Diseño completo:** Caja 8 de [lean-product-canvas.md](lean-product-canvas.md)

> Todo se opera con herramientas gratuitas: un formulario, una planilla y WhatsApp. No se construye producto.

---

## Regla que no se rompe

**El equipo no toca el dinero de nadie, en ningún momento.** Los participantes mueven su propia plata entre cuentas propias. Nosotros solo pedimos, registramos y aplicamos la demora.

Tampoco pedimos datos de cuentas: ni CBU, ni alias, ni credenciales, ni capturas de saldo. Solo montos declarados por la persona.

---

## 1. Formulario de reclutamiento y filtro

Google Forms. Sirve para verificar que la persona pertenece al tramo 1, que es el único donde el problema aplica.

**Título:** Estudio sobre cómo la gente maneja sus ahorros — Universidad, Product Development

**Texto de apertura:**

> Somos un equipo de estudiantes y estamos investigando cómo hacen las personas para sostener un ahorro. Si participás, durante un mes te vamos a hacer un par de preguntas por WhatsApp. **No te vamos a pedir plata, ni datos de tus cuentas, ni acceso a nada.** Toda la información que compartas es anónima para el informe.

| # | Pregunta | Tipo | Criterio |
|---|---|---|---|
| 1 | ¿Qué edad tenés? | Número | Incluir si 18-30 |
| 2 | ¿Tenés ingresos propios todos los meses? | Sí / No | Incluir si Sí |
| 3 | ¿Tu ingreso mensual es más o menos el mismo, o cambia bastante de un mes a otro? | Estable / Variable | **Incluir solo Estable** |
| 4 | ¿Pagás alquiler o expensas con tu ingreso? | Sí / No | Incluir si No |
| 5 | En un mes normal, después de cubrir tus gastos, ¿te queda algo? | Siempre / Casi siempre / A veces / Casi nunca | Incluir Siempre o Casi siempre |
| 6 | Cuando decidís guardar plata, ¿la pasás a otra cuenta o la dejás donde tenés el resto? | La paso / La dejo donde está / No suelo guardar | **Incluir solo "La dejo donde está"** |
| 7 | ¿Te propusiste guardar plata en los últimos 3 meses? | Sí / No | Incluir si Sí |
| 8 | Nombre y WhatsApp para contactarte | Texto | — |

**Por qué la 6 es la más importante.** El experimento compara separar contra no separar. Si el participante ya separa, no hay nada que medir en él. Es el filtro que más gente va a dejar afuera y el que no se puede relajar.

**Cuántos formularios enviar:** apuntar a 25-30 respuestas para quedarse con 10. Los filtros 3, 4 y 6 son restrictivos.

---

## 2. Consentimiento

Se envía por WhatsApp antes de empezar. Pedir un "sí" explícito.

> Antes de arrancar, tres cosas:
>
> 1. Esto es un trabajo de la facultad. No vendemos nada y no hay ningún producto detrás.
> 2. **Nunca te vamos a pedir plata, datos de tus cuentas ni acceso a tus apps.** Vos manejás tu dinero, nosotros solo anotamos los montos que nos digas.
> 3. En el informe no va tu nombre. Los datos se usan solo para este trabajo.
>
> Podés dejar de participar cuando quieras, sin dar explicaciones. ¿Estás de acuerdo en participar?

---

## 3. Asignación a los grupos

10 participantes, 5 por grupo.

- Ordenar por fecha de respuesta del formulario y alternar: impares al **grupo A (control)**, pares al **grupo B (mecanismo)**.
- **Registrar la asignación antes de empezar**, en la planilla. No moverla después.
- Si alguien abandona, no se reemplaza: se anota la baja y se reporta.

**Limitación conocida:** no es aleatorización real, es alternancia. Con n=10 no alcanza para equilibrar diferencias entre personas. Está declarado en la Caja 8.

---

## 4. Planilla de seguimiento

Una hoja de cálculo, una fila por participante.

| Columna | Contenido | Cuándo se llena |
|---|---|---|
| `id` | P01 a P10 (sin nombres) | Al asignar |
| `grupo` | A (control) / B (mecanismo) | Al asignar |
| `responsable` | Integrante que le escribe | Al asignar |
| `fecha_cobro` | Día que declaró que cobra | Día 0 |
| `meta` | Para qué está juntando | Día 0 |
| `monto_propuesto` | Cuánto se propuso guardar | Día 0 |
| `apartado_confirmado` | Sí / No — solo grupo B | Día 0 |
| `pedidos_retiro` | Cantidad de veces que pidió recuperar | Durante |
| `fecha_primer_pedido` | Cuándo pidió por primera vez | Durante |
| `monto_retirado_total` | Suma de lo que sacó | Durante |
| `monto_sostenido` | Cuánto quedaba a fin de mes | Cierre |
| `cumplimiento` | `= monto_sostenido / monto_propuesto` | Cierre |
| `abandono` | Sí / No | Cierre |
| `observaciones` | Frases textuales, contexto | Continuo |

**Métrica del experimento:** promedio de `cumplimiento` del grupo B menos el del grupo A.

- **Éxito:** diferencia ≥ 20 puntos porcentuales
- **Fracaso:** diferencia < 10 puntos, o ≥ 2 abandonos en el grupo B
- **Zona gris:** entre 10 y 20 — no se concluye, se repite con más participantes

> Los criterios están fijados antes de ejecutar y no se tocan después.

---

## 5. Guiones de WhatsApp

### Día 0 — ambos grupos, al declarar

> Hola [nombre], arrancamos. Dos preguntas:
>
> 1. ¿Para qué estás juntando?
> 2. ¿Cuánto te proponés guardar este mes?
>
> Avisame el día que cobres y seguimos desde ahí.

### Día de cobro — grupo A (control)

> Buenísimo, anotado: $[monto] para [meta]. Nada más por ahora, seguí como venís haciendo siempre. Te escribo a fin de mes.

**Importante:** al control **no se le sugiere nada**. Ni separar, ni anotar, ni revisar. Si se le da un consejo, deja de ser control.

### Día de cobro — grupo B (mecanismo)

> Anotado: $[monto] para [meta].
>
> Ahora el paso del experimento: pasá esos $[monto] a **una cuenta o billetera tuya que no uses todos los días**. Puede ser otra cuenta, otra billetera, dólares, lo que te quede cómodo. La única condición es que no sea la misma con la que gastás.
>
> Cuando lo hagas, avisame.
>
> Si en algún momento necesitás usar esa plata, escribime y **te confirmo al día siguiente**. No es para trabarte: es lo que estamos probando.

### Cuando el grupo B pide recuperar

> Dale, sin problema. Te confirmo mañana a esta hora.
>
> Mientras tanto, ¿me contás para qué la necesitás?

**A las 24 horas exactas:**

> Listo, ya podés usarla. ¿La vas a usar igual o cambiaste de idea?

**Esa última pregunta es la más valiosa del experimento.** Si alguien cambia de idea durante la demora, ese es el mecanismo funcionando, y hay que anotar la frase textual.

### Recordatorio semanal — ambos grupos

> Hola [nombre], chequeo rápido: ¿cómo venís con lo de [meta]? ¿Tocaste algo de lo que habías separado?

### Cierre — ambos grupos

> Última pregunta y listo. De los $[monto] que te habías propuesto guardar, ¿cuánto te quedó?
>
> Y contame: ¿qué fue lo que más te costó?

**Solo al grupo B, además:**

> ¿La demora de un día te sirvió o te resultó una molestia? Decime la verdad, no nos ofendemos.

---

## 6. Calendario

| Momento | Qué pasa |
|---|---|
| Días 1-3 | Enviar formulario, filtrar, asignar grupos |
| Días 4-5 | Consentimiento y declaración de meta |
| Día de cobro de cada uno | Mensaje según grupo. Grupo B confirma el apartado |
| Semanal | Chequeo a ambos grupos |
| Continuo | Atender pedidos de retiro del grupo B dentro de las 24 h |
| Fin del ciclo | Cierre y cálculo de la métrica |

Cada integrante sigue a 2 o 3 participantes. **El responsable de cada uno no cambia durante el experimento.**

---

## 7. Qué anotar aunque no sea la métrica

El número principal es la tasa de cumplimiento, pero lo que más va a servir para la próxima etapa es esto:

- **Frases textuales** sobre la demora, sobre todo las negativas.
- **Cuántos cambian de idea** durante las 24 horas.
- **Qué gastos** rompieron el ahorro, y si el participante los llama evitables o necesarios.
- **Dónde eligieron apartar** el dinero: otra cuenta, dólares, otra billetera.
- **Quién abandona y en qué momento.**

Este último es una señal temprana del riesgo 2 del pre-mortem — que la fricción moleste.

---

## 8. Lo que este experimento no prueba

Está en la Caja 8, pero conviene tenerlo a mano al presentar:

- **n = 10 y sin aleatorización real.** Es una señal de dirección, no un resultado significativo.
- **Montos autorreportados**, sin verificación de saldos.
- **Efecto Hawthorne:** saberse observado puede mejorar la conducta. Por eso hay grupo de control.
- **Un solo ciclo.** No dice nada sobre si el hábito se sostiene.
- **No prueba el producto**, prueba el mecanismo. La integración financiera queda sin tocar.
