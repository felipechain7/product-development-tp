# Aparte — versión resumida para Mural

**Equipo:** Felipe Chain · Juan Ignacio Canabe · Pedro Tailhade · Felipe Servent

> Versión condensada de [lean-product-canvas.md](lean-product-canvas.md) para pegar en un tablero visual. **No lo reemplaza:** el canvas completo, con la evidencia, las fuentes y las limitaciones, sigue siendo el entregable.

**Cómo usarla:** cada bullet es un post-it. Están escritos para entrar en dos o tres líneas. Lo que va en **negrita** conviene destacarlo con otro color — son los supuestos y los pendientes, que es lo que el docente va a buscar.

**Disposición sugerida:** fila superior las cajas 1 a 4 (problema y usuario), fila inferior las cajas 5 a 8 (solución y aprendizaje). El pre-mortem, a un costado.

---

## 1. Problema de negocio

- Jóvenes de 18 a 30 con ingreso estable y excedente real
- Se proponen guardar para una meta concreta
- Terminan usándolo en gastos que ellos mismos llaman evitables
- No pueden reconstruir cuándo se rompió el plan
- Evidencia: 4 entrevistas propias + 2 estudios (≈3 de cada 10)
- **Supuesto: que las herramientas actuales no cubran esto**

## 2. Resultados de negocio

- R1 · Tasa de cumplimiento = sostenido ÷ propuesto
- R2 · Recurrencia: vuelve a fijar meta al mes siguiente
- R3 · Esfuerzo para saber cuánto lleva ahorrado
- **Las tres: línea de base pendiente de medir**
- **Ningún resultado económico: no hay ingresos ni usuarios**

## 3. Usuarios y clientes

- Usuario: 18-30, ingreso estable, sin gastos fijos de vivienda
- Decisor: el mismo usuario, decide solo
- **Cliente que paga: pendiente. No lo investigamos**
- **Influenciador: pendiente**
- Contraste (fuera del alcance): ingreso variable · ingreso ajustado

## 4. Necesidades y resultados del usuario

- Cuando guardo para algo, quiero que siga estando a fin de mes
- Cuando aparece un gasto, quiero saber ahí si me deja fuera de la meta
- Cuando quiero ver cuánto llevo, quiero no sumar entre cuentas
- **Supuesto: que quiera enterarse antes del gasto y no después**

## 5. Ideas de solución

- A · Termómetro de meta — información y decisión
- B · **Apartado con fricción** — coordinación ← **ELEGIDA**
- C · Detector de desvío — automatización e IA
- Por qué B: 4 de 4 separan la plata; quien lo hizo solo mentalmente la perdió
- Martina: *"me daba más fiaca cambiarlos para gastar"*
- **Dependencia: integración financiera. No la podemos construir**

## 6. Hipótesis principales

- **Problema:** se rompe por gastos evitables — respaldada en 2 de 4
- **Valor:** la fricción hace que llegue más plata — **supuesto central**
- **Comportamiento:** lo configuran y no lo revierten — **supuesto**
- **Factibilidad:** podemos operarlo a mano, sin integración

## 7. Lo más importante por aprender

- ¿Apartar con demora hace que llegue más plata a fin de mes que separar mentalmente?
- Incertidumbre 5 / Impacto 5 — la más alta en ambas
- Es la única cuya respuesta negativa detiene el proyecto
- Riesgo: que separar sea consecuencia de tener más margen, no causa

## 8. Experimento mínimo

- Wizard of Oz · 4 semanas · 10 personas en 2 grupos
- WhatsApp + planilla · **no tocamos dinero de nadie**
- Métrica: sostenido ÷ propuesto
- Éxito: +20 puntos vs. control · Fracaso: menos de 10
- **Límites: n=10, autorreportado, no significativo**
- Criterios definidos antes de ejecutar

---

## Pre-mortem — los 3 riesgos principales

| Riesgo | Qué supuesto falla | Señal temprana |
|---|---|---|
| **Separar no es la causa** | La hipótesis de valor entera | El grupo con mecanismo no se despega del control |
| **El excedente no existe en volumen** | Que el tramo 1 sea un segmento grande | Participantes que declaran meta $0 o no llegan a apartar |
| **La fricción molesta** | Que la demora se perciba como ayuda | Pedidos de retiro en las primeras 48 horas |

El primero detiene el proyecto. El segundo mata el mercado, no el mecanismo. El tercero se calibra ajustando la demora.

---

## Recorrido para presentar

1. **Problema** → jóvenes con excedente que no sostienen el ahorro
2. **Evidencia** → Martina separó mentalmente y lo perdió; Sofía lo separó en otra cuenta y lo sostiene
3. **Hallazgo** → el segmento se parte en tres tramos y solo el primero tiene este problema
4. **Solución** → apartar con fricción, que es lo único que ya les funciona
5. **Duda** → ¿la separación es causa o consecuencia de tener margen?
6. **Experimento** → 10 personas, 2 grupos, 4 semanas, sin construir nada

> El canvas contiene hipótesis. La evidencia surge de observar y experimentar.
