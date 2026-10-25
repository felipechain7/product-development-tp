# Pitch: pedidos por el celular en el buffet de clubes de rugby

> Entrega final de Desarrollo de Productos: pitch ante profesores que actúan como inversores. Ensayo 26/10, entrega 02/11. Armado con `clase-02-descubrimiento.md`, `foda.md`, `registro-experimento.md`, `aprendizaje-y-mvp.md` y `mvp.md`. Lo que el equipo todavía no decidió o no tiene evidencia queda marcado; no se completa con supuestos.

**Duración:** [CONFIRMAR cuántos minutos dura el pitch]. El reparto de abajo supone unos 7 minutos.
**Hilo del pitch:** la fila del buffet hace perder partidos a la gente y ventas al buffet; lo lento es pagar; sacamos el pago de la fila, 32 personas pidieron desde el celular en una noche y ya hay un MVP que cobra solo y avisa cuándo retirar.

---

## 1. Portada (15 s)

- Nombre del producto: [COMPLETAR] (nombre de trabajo: "Pedí y retirá").
- Una línea: pedí y pagá desde la cancha, retirá en el buffet sin hacer la fila.
- Equipo: Felipe Chain, Felipe Servent, Juan Ignacio Canabe, Pedro Tailhade. [CONFIRMAR nombres completos]

## 2. El problema (60 s)

- Los días de partido en los clubes de la URBA hay partidos seguidos y todos van al buffet en el mismo momento: los entretiempos y los finales, "porque nadie se quiere perder los partidos" (buffet del SIC).
- **Evidencia (17/10):** 5 entrevistas a asistentes del SIC y Alumni, y la empleada del buffet del SIC. Los 5 se perdieron parte de un partido por la fila y declararon esperas de 10 a 20 minutos o más.
- **Cita:** "20 minutos me parece un montón para un café y un tostado." (asistente entrevistado)
- **El buffet pierde ventas:** "Como está McDonald's acá al lado, algunos se van ahí." (buffet del SIC). Es solo el testimonio del buffet: a los asistentes no les preguntamos si dejaron de comprar.

## 3. Por qué pasa (30 s)

- Lo lento no es la cocina, es pagar. Lo dijeron los 5 entrevistados ("la fila avanzaba re lento", "el tostado salió rápido") y el buffet dice que tarda más en cobrar, aunque reconoce que es "un poco de todo".
- Por eso la idea saca el pago de la fila.

## 4. La solución (60 s)

- Un QR en el club abre una página con el menú y el total. La persona paga con Mercado Pago sin salir de la cancha y recibe un código.
- El pedido aparece solo en una pantalla del buffet, con un sonido. Cuando está listo, el buffet lo marca y el celular de la persona cambia a "¡Listo! Andá a retirar".
- El pedido llega al buffet solo si está pagado. Sin app para descargar, sin cuentas de usuario y sin mostrar comprobante.
- **Demo en vivo:** escanear el QR del cartel (`mvp/cartel.html`) o abrir https://felipechain7.github.io/product-development-tp/mvp/, pagar y mostrar en el panel del buffet (`/mvp/buffet.html`) cómo entra el pedido y cómo cambia la pantalla al marcarlo "Listo". [DECIDIR: hacer la demo en modo prueba, con tarjeta de prueba, o con un pago real chico]

## 5. Lo que probamos (90 s): la parte más fuerte del pitch

- **Pregunta:** ¿los que van al club van a pedir y pagar por el celular en vez de hacer la fila?
- **Prueba:** concierge digital en el buffet del SIC, jueves 22/10, durante 4 partidos, con el menú real y pago real. El equipo le pasaba los pedidos al buffet a mano.
- **Criterio fijado antes de la prueba:** 20 pedidos pagados o más. Secundario: retirar en menos de 3 minutos y en menos tiempo que la fila normal.
- **Resultados:**
  - **32 pedidos pagados** ($602.000) en poco más de dos horas. Sin contar conocidos del equipo, 20: se alcanza justo.
  - **Embudo:** 37 personas abrieron la página, 33 tocaron "Ir a pagar" y 32 pagaron. El 86 % de los que la vieron, pidió.
  - **Retiro en el mostrador:** 2,4 minutos en promedio, contra 8,6 de la fila normal.
  - Nadie dejó de retirar y no hubo problemas de pago. Una persona no entendió que tenía que mostrar el comprobante, y otra preguntó si se podía pagar en efectivo.
- **Lo que no esperábamos:** desde que pagan hasta tener la comida pasan 8 minutos, casi lo mismo que la fila. La diferencia es dónde los pasan: mirando el partido y no parados en la fila. El valor no es comer antes, es no perderse el partido.
- **Conclusión:** hipótesis respaldada en el SIC, un jueves a la noche. Decidimos avanzar al MVP.

## 6. Del experimento al MVP (30 s)

- Lo que el equipo hacía a mano el 22/10 ahora lo hace el sistema: el pedido pagado entra solo al panel del buffet, el buffet lo marca "Listo" y la persona se entera en el celular.
- Sumamos el cobro integrado con Mercado Pago para que el buffet no tenga que controlar comprobantes, que fue la única confusión del 22/10.
- Probado de punta a punta el 25/10 con un pago de prueba: el pedido llegó al panel, se marcó listo y entregado.
- El sistema guarda la hora de cada paso (pedido, pagado, listo, entregado), así la próxima prueba mide sola los tiempos.

## 7. Quién paga y cómo ganamos plata (45 s)

- **Cliente que paga:** el buffet (concesionario o club). Primeros: SIC y Alumni.
- **Por qué pagaría:** atiende más rápido en el pico y no pierde clientes contra la fila (por ejemplo, los que se van al McDonald's).
- **Modelo de ingresos:** [PENDIENTE: el equipo tiene que definirlo; por ejemplo, comisión por pedido o abono por mes. No está validado].
- **Quién decide la compra:** [PENDIENTE: el concesionario o el club].
- Es la próxima incertidumbre: todavía no sabemos si el buffet pagaría ni cuánto.

## 8. Mercado (30 s)

- La URBA tiene 91 clubes en 2026 (La Nación, 14/3/2026). No sabemos cuántos tienen buffet ni cuánto venden por día de partido.
- Primer paso: SIC y Alumni, donde hicimos las entrevistas y la prueba.
- Después, otros eventos con picos, como hockey o torneos de colegios. [SUPUESTO]

## 9. Alternativas y competencia (30 s)

- **Hoy:** la fila, pagando en efectivo o con QR en la caja. Con el QR en la caja igual hay que hacer la fila: en la prueba, la fila normal tardó 8,6 minutos en promedio y 3 de las 5 personas medidas pagaron con QR.
- **Competidores:** apps de pedido desde el celular como Waitry, que funciona en Argentina (nota de 2017; no sabemos si sigue activa ni si la usa algún club). El buffet también podría armar solo un menú con QR.
- **Nuestro diferencial:** está pensado para el pico de un día de partidos: la persona pide sin dejar la cancha y el aviso de "Listo" le dice cuándo ir, que es justo lo que aprendimos el 22/10. Sin app y sin cuenta, se usa en un minuto. [SUPUESTO: no lo comparamos contra un competidor en uso]

## 10. Riesgos y cómo los bajamos (30 s)

- **La demora era la cocina:** bajó. Los entrevistados dicen que lo lento es pagar, y el 22/10 la cocina no fue un problema con 32 pedidos.
- **La gente no lo usa:** bajó. 32 pedidos en una noche y el 86 % de los que abrieron la página pidió.
- **El buffet no lo adopta o no paga:** sigue abierto. Aceptó la prueba, pero no sabemos si lo usaría solo ni si pagaría.
- **Un sábado con la fila larga y sin conocidos:** sigue abierto. La prueba fue un jueves con una fila de 4 a 11 personas.
- **La cocina se satura:** sigue abierto. Con 32 pedidos no se exigió como un sábado.

## 11. Próximos pasos y qué pedimos (45 s)

- **Próxima prueba:** el buffet del SIC usa el MVP solo, sin el equipo, un sábado de partidos. Medimos cuántos pedidos entran sin nosotros, los minutos del pedido a "listo" y de "listo" a "entregado", y si lo vuelve a usar otro día.
- **Después:** validar si el buffet pagaría y cuánto. [PENDIENTE: cómo lo va a preguntar o probar el equipo]
- **Meta para la temporada 2027:** [COMPLETAR con los valores de la Caja 2 cuando estén definidos].
- **Qué les pedimos a los inversores:** [COMPLETAR: plata, contactos con clubes o un piloto en otro club].

## 12. Cierre (15 s)

- Una frase que retome el problema: [COMPLETAR]. Idea de base: el 22/10, 32 personas no se perdieron el partido por ir a comprar.

---

## Preguntas probables de los inversores

| Pregunta | Qué tenemos hoy |
|---|---|
| ¿Por qué no usan Mercado Pago QR en la caja y listo? | Con el QR en la caja igual hay que hacer la fila. El 22/10, la fila normal tardó 8,6 min (3 de 5 pagaron con QR); retirar un pedido de la página, 2,4 min. |
| ¿Pero la comida no llega igual de rápido? | Sí: del pago a la comida pasan unos 8 minutos, casi lo mismo. La diferencia es que esos minutos los pasan mirando el partido. Es lo que más valor tiene. |
| ¿No fueron todos amigos de ustedes? | 12 de 32 eran conocidos. Sin ellos, 20 pedidos: igual se alcanza el criterio. |
| ¿Cuánto pagaría el buffet? | [PENDIENTE] No está validado; es lo próximo que queremos saber. |
| ¿Qué pasa si la cocina se satura con los pedidos? | Con 32 pedidos no se saturó, pero no se exigió como un sábado. Lo mide la próxima prueba: el MVP guarda la hora de cada paso. |
| ¿Cómo cobran y cómo le llega la plata al buffet? | Mercado Pago, con Checkout Pro. Hoy cobra la cuenta del equipo y al cierre se le transfiere al buffet. Mercado Pago cobra una comisión por pago. |
| ¿Por qué ustedes? | Van a los clubes, tienen a los usuarios a mano y el buffet del SIC ya aceptó probar. |
| ¿Qué tan grande es esto? | 91 clubes en la URBA (2026). No tenemos el dato de cuánto vende un buffet por día de partido. |

## Pendientes antes de armar las diapositivas

- [ ] Duración exacta del pitch.
- [ ] Nombre del producto.
- [ ] Modelo de ingresos y quién decide la compra.
- [ ] Qué les pedimos a los inversores.
- [ ] Demo en modo prueba o con un pago real.
- [ ] Frase de cierre.
- [ ] Meta para la temporada 2027 (Caja 2 del canvas).
