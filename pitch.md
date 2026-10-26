# Pitch: pedidos por el celular en el buffet de clubes de rugby

> Entrega final de Desarrollo de Productos: pitch ante profesores que actúan como inversores. Ensayo 26/10, entrega 02/11. Armado con `clase-02-descubrimiento.md`, `foda.md`, `registro-experimento.md`, `aprendizaje-y-mvp.md`, `mvp.md`, `pruebas-y-mejoras-mvp.md` y `economia-del-producto.md`. Lo que el equipo todavía no decidió o no tiene evidencia queda marcado; no se completa con supuestos.

**Duración:** entre 7 y 10 minutos (decisión del equipo; la consigna oficial no lo dice en los archivos de la materia). El reparto de abajo suma unos 8 minutos.
- **Si hay que bajar a 7:** juntar Mercado (8) y Alternativas (9) en 30 s y acortar el Problema a 45 s.
- **Si hay hasta 10:** demo completa con el panel (+60 s) y los resultados de la prueba con compañeros de la Clase 8 (+60 s).

**Hilo del pitch:** la fila del buffet hace perder partidos a la gente y ventas al buffet; lo lento es pagar; sacamos el pago de la fila, 32 personas pidieron desde el celular en una noche, ya hay un MVP que cobra solo y avisa cuándo retirar, y cada pedido deja unos $1.800 con un cargo por servicio.

---

## 1. Portada (15 s)

- Nombre del producto: **SinFila** (decisión del equipo, 25/10). Tagline: "Pedí desde la cancha". [CHEQUEAR que no exista una app o cuenta de Instagram con ese nombre]
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
- **Demo en video (decisión del equipo, 25/10), de 60 a 90 s, grabado antes con un pago real:**
  1. Alguien escanea el QR del cartel (`mvp/cartel.html`) desde la tribuna.
  2. Elige del menú y paga con Mercado Pago (un compañero, con su cuenta; una bebida de $4.000).
  3. Vuelve sola a la página: código del pedido y "En preparación".
  4. En la pantalla del buffet (`/mvp/buffet.html`) el pedido entra con un sonido.
  5. El buffet toca "Listo" y el celular cambia a "¡Listo! Andá a retirar".
  6. Retira en el mostrador con el código.
  - Grabar celular y panel lado a lado (o alternando), sin mostrar el PIN del buffet ni datos de la cuenta de Mercado Pago. Se graba antes de la entrega del 02/11.

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

Detalle en `economia-del-producto.md`.

- **Quién paga:** quien pide, con un **cargo por servicio del 10 %** sobre el pedido, por no perderse el partido. El buffet cobra la comida en su propia cuenta de Mercado Pago y no pierde nada de cada venta.
- **Instalación:** gratis para los primeros buffets (SIC y Alumni) a cambio de usarlo; después, con precio. A futuro, un abono mensual para el buffet.
- **Frase de la Clase 9:** "Nuestra unidad es un pedido pagado. Estimamos que ingresan $1.881 (10 % de un ticket promedio de $18.812) y que cuesta $81 de comisión de Mercado Pago: deja unos $1.800 por pedido. Si la gente solo acepta un 8 %, deja unos $1.440. Lo primero que necesitamos comprobar es si la gente sigue pidiendo con el cargo y si el buffet lo adopta."
- **Por buffet:** con 4 días de partido como el 22/10, unos $230.000 por mes. Cubre el servidor (25 dólares por mes), pero no el tiempo del equipo: el negocio depende de sumar clubes.
- **Todo es estimación:** el 22/10 la gente pidió sin cargo.

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
- **La gente no acepta el cargo del 10 %:** sigue abierto. Todo el ingreso depende de eso; si no, se baja al 8 % o se suma el abono al buffet.

## 11. Próximos pasos y qué pedimos (45 s)

- **Prueba de uso (Clase 8, 26/10):** 3 a 5 compañeros de otros equipos piden con el MVP sin ayuda. Medimos cuántos lo completan y cuántos sin ayuda. [COMPLETAR con los resultados para la entrega del 02/11]
- **Próxima prueba:** en el club, un día de partido, sin el equipo al lado: gente del club pide sola y se miden los minutos en el mostrador contra la fila normal.
- **Después:** probar si la gente sigue pidiendo con el cargo del 10 % y ofrecerle la instalación al buffet del SIC y después al de Alumni.
- **Meta para la temporada 2027 (decisión del equipo, 25/10):** SinFila funcionando en 3 clubes, con 30 pedidos o más por día de partido en cada uno (el 22/10 hubo 32). Son unos 2.880 pedidos en la temporada (3 clubes × 32 días de partido × 30) y unos $5.200.000 de contribución con el cargo del 10 % (≈ $1.800 por pedido). Estimación: supone 4 días de partido por mes de marzo a octubre. En el piloto también se miden las ventas del buffet en la hora pico con y sin SinFila (meta de la Caja 2 del canvas, sin línea de base todavía).
- **Qué les pedimos a los inversores:** "Buscamos unos 560 dólares para un piloto en 3 clubes durante la temporada 2027 (servidor y cartelería), y que nos presenten a concesionarios de buffets de la URBA."
  - Servidor: 25 dólares × 8 meses (marzo a octubre) = 200 dólares (referencia: precio de Supabase Pro).
  - Carteles: 12 por club (entrada del buffet y alrededor de las canchas) × 3 clubes = 36, a unos 10 dólares cada uno = 360 dólares (estimación; referencia: A3 en foamboard a £7,50 en una lista de septiembre de 2026 de otro país; rango total de 380 a 740 dólares). [REEMPLAZAR si consiguen un presupuesto de imprenta antes del 02/11]
  - Traslados: $0, el equipo ya va a esos clubes. Las horas del equipo no se incluyen.
  - Por qué este pedido: operar cuesta poco; lo difícil es sumar clubes, y con uno solo no alcanza (Clase 9).

## 12. Cierre (15 s)

- "En el rugby el partido no se pausa para ir al buffet. Con SinFila, ya no hace falta elegir." (decisión del equipo, 25/10)

---

## Preguntas probables de los inversores

| Pregunta | Qué tenemos hoy |
|---|---|
| ¿Por qué no usan Mercado Pago QR en la caja y listo? | Con el QR en la caja igual hay que hacer la fila. El 22/10, la fila normal tardó 8,6 min (3 de 5 pagaron con QR); retirar un pedido de la página, 2,4 min. |
| ¿Pero la comida no llega igual de rápido? | Sí: del pago a la comida pasan unos 8 minutos, casi lo mismo. La diferencia es que esos minutos los pasan mirando el partido. Es lo que más valor tiene. |
| ¿No fueron todos amigos de ustedes? | 12 de 32 eran conocidos. Sin ellos, 20 pedidos: igual se alcanza el criterio. |
| ¿Quién les paga? | Quien pide, con un cargo por servicio del 10 %. Es una estimación: el 22/10 nadie pagó un cargo, y es lo próximo que queremos probar. |
| ¿Con un buffet alcanza? | No: deja unos $230.000 por mes si hay 4 días como el 22/10. El negocio depende de sumar clubes (la URBA tiene 91). |
| ¿Por qué el buffet cambiaría el QR de la caja? | No pierde nada de cada venta y atiende más rápido en el pico. Pero con Checkout paga más comisión que con débito por QR (3,55 % contra 1,41 %) y cobra a los 18 días: es un riesgo que tenemos anotado. |
| ¿Qué pasa si la cocina se satura con los pedidos? | Con 32 pedidos no se saturó, pero no se exigió como un sábado. Lo mide la próxima prueba: el MVP guarda la hora de cada paso. |
| ¿Cómo cobran y cómo le llega la plata al buffet? | Mercado Pago, con Checkout Pro. Hoy cobra la cuenta del equipo y al cierre se le transfiere al buffet. Con un buffet cliente, cobra su propia cuenta y Mercado Pago separa solo nuestro cargo (modalidad marketplace). |
| ¿Por qué ustedes? | Van a los clubes, tienen a los usuarios a mano y el buffet del SIC ya aceptó probar. |
| ¿Qué tan grande es esto? | 91 clubes en la URBA (2026). No tenemos el dato de cuánto vende un buffet por día de partido. |

## Pendientes antes de armar las diapositivas

- [x] Duración: entre 7 y 10 minutos.
- [x] Modelo de ingresos (Clase 9).
- [x] Nombre del producto: SinFila.
- [x] Qué les pedimos a los inversores: unos 560 dólares y contactos con concesionarios.
- [x] Demo: video de 60 a 90 s. [PENDIENTE: grabarlo]
- [x] Frase de cierre.
- [x] Meta para la temporada 2027: 3 clubes con 30 pedidos o más por día de partido.
- [ ] Resultados de la prueba con compañeros (Clase 8).
