# Análisis competitivo — Cinco Fuerzas de Porter

**Equipo:** Felipe Chain · Juan Ignacio Canabe · Pedro Tailhade · Felipe Servent
**Sector analizado:** herramientas digitales de ahorro personal y gestión de metas en Argentina
**Fecha:** 1 de septiembre de 2026

> Este análisis cubre el vacío que el pre-mortem del canvas había marcado como **riesgo 8**: *"las billeteras lo incorporaron como función propia"*. El riesgo no era hipotético.

---

## Hallazgo que condiciona todo el análisis

**Naranja X lanzó "Frascos", que es funcionalmente la propuesta de Aparte.**

| Dato | Fuente |
|---|---|
| El usuario crea frascos, les pone nombre y los asocia a un objetivo. Los nombres más elegidos son "Vacaciones", "Viaje", "Ahorro" y **"no tocar"** | [Revista Mercado](https://mercado.com.ar/finanzas/uno-de-cada-tres-clientes-de-naranja-x-ya-separa-su-plata-con-frascos) |
| Separa el dinero por plazos de 7, 14 o 28 días, con rendimiento | [El Cronista](https://www.cronista.com/informacion-gral/naranja-x-lanza-frascos-remunerados-una-nueva-forma-de-ahorrar-y-alcanzar-objetivos-financieros-mas-rapido/) |
| **19 millones de frascos creados en seis meses** | [Revista Mercado](https://mercado.com.ar/finanzas/uno-de-cada-tres-clientes-de-naranja-x-ya-separa-su-plata-con-frascos) |
| **Uno de cada tres clientes de Naranja X ya lo usa** | [Revista Mercado](https://mercado.com.ar/finanzas/uno-de-cada-tres-clientes-de-naranja-x-ya-separa-su-plata-con-frascos) |

**Lo que esto confirma:** el problema es real y la separación del dinero es la respuesta que el mercado ya eligió. Nuestra hipótesis de problema queda reforzada por una vía que no esperábamos.

**Lo que esto refuta:** la afirmación de nuestra Caja 1 de que *"ninguna de las herramientas que ya usa se ocupa de ese objetivo"*. **Es falsa** y hay que corregirla.

**Lo que queda en pie.** Frascos permite liberar los fondos **cuando el usuario quiera**. Separa, pero no aplica fricción real al retiro. La apuesta central de Aparte —que la demora cambia el resultado— sigue sin estar probada por nadie. El experimento de la Caja 8 no pierde sentido: **cambia de pregunta.** Ya no es "¿sirve separar?" (19 millones de frascos sugieren que sí), sino "¿la demora agrega algo por encima de separar?".

---

## 1. Rivalidad entre competidores existentes — **ALTA**

- El mercado está concentrado y maduro: **el 70% de los argentinos usó billeteras virtuales en los últimos seis meses**, por encima del efectivo (52%), la tarjeta de débito (51%) y la de crédito (34%) ([F7](https://www.infobae.com/economia/2026/08/07/cuentas-remuneradas-cuales-son-las-billeteras-y-bancos-que-mas-rendimiento-ofrecen-a-sus-clientes/)).
- Compiten Mercado Pago, Ualá, Naranja X, Personal Pay, Cuenta DNI y Cocos, entre otras.
- **La competencia se juega en tasa, no en experiencia.** Cocos ofrecía 27,93% TNA contra 17,70% de Mercado Pago ([iProfesional](https://www.iprofesional.com/finanzas/457460-ranking-de-billeteras-virtuales-cual-paga-mas-interes-y-lidera-el-mercado-en-argentina)). Las tasas cambian mes a mes.
- Naranja X ya usa la función de ahorro como diferencial de retención.

**Implicancia:** entrar a competir en rendimiento es imposible para nosotros — no podemos ofrecer tasa. Cualquier diferenciación tiene que estar en el comportamiento, no en el producto financiero.

---

## 2. Amenaza de nuevos entrantes — **BAJA hacia adentro, ALTA hacia nosotros**

Hay que separar dos preguntas que se confunden.

**¿Puede entrar cualquiera al negocio de mover dinero? No.** La Comunicación "A" 8432 del BCRA, de abril de 2026, endureció el régimen ([Infobae](https://www.infobae.com/economia/2026/04/30/el-bcra-refuerza-la-proteccion-a-los-usuarios-de-billeteras-virtuales-una-por-una-las-medidas-que-adopto/)):

- Quien ofrece cuentas de pago **a través de un PSP registrado** queda alcanzado: los clientes del tercero son, formalmente, clientes del PSP.
- El PSP debe **registrar ante el BCRA a cada tercero** con el que opera y obtener **autorización previa**.
- Debe declarar banco patrocinante, estructura societaria y beneficiarios finales.

**¿Puede un competidor copiarnos la función? Sí, en una sprint.** Naranja X ya lo hizo. Para un incumbente con la base instalada, agregar una demora al retiro es trivial.

**Implicancia doble y muy concreta para el equipo:** la barrera regulatoria nos bloquea a nosotros y protege a los que ya están, mientras que nuestra idea no tiene ninguna barrera que impida que la copien. **Es la peor combinación posible.**

---

## 3. Poder de negociación de los proveedores — **MUY ALTO**

- El proveedor crítico no es un servicio de software: es **el PSP o banco que provee la infraestructura para mover dinero**.
- Bajo la A 8432, ese proveedor asume la responsabilidad regulatoria por nuestros usuarios. Eso le da poder para fijar condiciones, exigir garantías o simplemente no integrarnos.
- Sin esa integración, Aparte no existe como producto automatizado. Ya está declarado en la Caja 5 como dependencia no construible.

**Implicancia:** dependemos de un actor que además es competidor potencial. Un PSP que vea valor en la idea puede construirla él mismo en vez de habilitarnos.

---

## 4. Poder de negociación de los compradores — **ALTO**

- **Costo de cambio prácticamente nulo.** Abrir una billetera lleva minutos y el multi-homing es la norma: la gente usa varias a la vez.
- **Cero disposición a pagar observada.** No lo preguntamos en ninguna de las cuatro entrevistas — está declarado como pendiente en la Caja 3. Y las alternativas son gratuitas.
- El usuario compara por tasa, un terreno donde no podemos jugar.

**Implicancia:** un producto pago es inviable de entrada. El único camino realista de monetización sería B2B2C, es decir vendérselo a una billetera — que es exactamente el actor que puede construirlo solo.

---

## 5. Amenaza de sustitutos — **ALTA**

Los sustitutos no son hipotéticos: **los cuatro entrevistados ya usan uno.**

| Sustituto | Quién lo usa | Por qué compite bien |
|---|---|---|
| Segunda cuenta propia | Sofía | Gratis, ya existe, y le funciona |
| Comprar dólares | Martina, Nicolás | Gratis, y agrega fricción real — más que Frascos |
| Billetera de uso infrecuente | Tomás | Gratis, cero configuración |
| Frascos de Naranja X | Mercado masivo | Integrado, con rendimiento, sin fricción de salida |

**El sustituto más fuerte es el más barato:** pasar la plata a otra cuenta. No requiere producto, ni permiso, ni descarga.

**Implicancia:** hay que poder explicar qué hace Aparte que una segunda cuenta no haga. Si la respuesta es "nada, salvo la demora", entonces **toda la propuesta descansa en la demora** — y es justamente lo que el experimento tiene que medir.

---

## Síntesis

| Fuerza | Intensidad | Consecuencia |
|---|---|---|
| Rivalidad | **Alta** | Se compite en tasa, terreno donde no podemos entrar |
| Nuevos entrantes | **Baja para nosotros, alta para copiarnos** | La regulación nos frena y protege a los incumbentes |
| Proveedores | **Muy alta** | El PSP es indispensable y además es competidor |
| Compradores | **Alta** | Costo de cambio nulo, sin disposición a pagar |
| Sustitutos | **Alta** | Gratuitos, ya en uso, y uno ya es masivo |

**El sector es estructuralmente poco atractivo para un producto independiente.** Las cinco fuerzas juegan en contra. Esto no invalida el trabajo de descubrimiento: el problema existe y está mejor documentado que antes. Lo que queda en cuestión es la forma de la solución.

---

## Tres caminos que abre el análisis

Ninguno está decidido. Son las opciones que quedan sobre la mesa.

**A. Angostar la apuesta a la fricción.** Frascos separa pero deja retirar cuando el usuario quiera. Si la demora resulta ser el ingrediente activo, hay algo que nadie está haciendo. **El experimento de la Caja 8 responde exactamente esto** y no necesita cambiar de diseño — solo de encuadre: ya no compara contra "no hacer nada", compara contra "separar sin fricción".

**B. Salir de la capa financiera.** Si no movemos dinero, la A 8432 no nos alcanza y el poder del proveedor desaparece. El producto sería una capa de acompañamiento sobre las cuentas que el usuario ya tiene — que es, literalmente, cómo funciona nuestro Wizard of Oz. Pierde automatización, gana viabilidad.

**C. Aceptar que el hallazgo es de mercado, no de producto.** 19 millones de frascos en seis meses dicen que el problema es real y ya está siendo atendido. Una conclusión honesta y defendible del TP es que la oportunidad quedó cerrada mientras investigábamos.

---

## Qué hay que corregir en el canvas

1. **Caja 1** afirma que *"ninguna de las herramientas que ya usa se ocupa de ese objetivo"*. **Es falso.** Naranja X lo hace y a escala.
2. **Caja 5** debe incorporar Frascos como alternativa existente y explicitar en qué se diferencia Aparte: la fricción de salida.
3. **Caja 7** sigue siendo la pregunta correcta, pero cambia el punto de comparación: no es "¿separar sirve?" sino "¿la demora agrega algo sobre separar?".
4. **Pre-mortem, riesgo 8:** dejó de ser un riesgo. Es un hecho, y hay que reescribirlo como tal.

---

## Límites de este análisis

- Se apoya en fuentes periodísticas y en comunicación de las propias empresas. **No probamos Frascos ni ninguna otra herramienta.**
- Los datos de uso de Frascos (19 millones, uno de cada tres clientes) provienen de comunicación de Naranja X: tienen interés directo en que la cifra impresione.
- **No relevamos Mercado Pago, Ualá, Personal Pay ni Cuenta DNI** con el mismo detalle. Es posible que alguna ya tenga una función equivalente o con bloqueo real.
- No hay datos de retención: 19 millones de frascos creados no dicen cuántos siguen activos ni cuántos cumplieron su objetivo. **Es la misma distinción entre uso y resultado que planteamos en la Caja 2.**
