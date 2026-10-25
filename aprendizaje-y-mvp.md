# Aprendizaje y MVP: pedidos por el celular en el buffet de clubes de rugby

> Clase 5. Fuente: `diseno-experimento.md` y `registro-experimento.md`. La sección 1 fue confirmada por el equipo el 19/10, antes de ejecutar la prueba. Las secciones 2 a 5 se completan con los resultados reales del jueves 22/10 (la prueba se pasó del sábado 24/10 al jueves por decisión del equipo del 19/10).

## 1. Experimento

- **Querían comprobar:** si los que van al club van a pedir y pagar por el celular en vez de hacer la fila (hipótesis de Comportamiento).
- **El criterio de éxito era:** 20 pedidos pagados por la web o más en el día de la prueba; menos de 20 es fracaso. Secundario: que el retiro tarde menos de 3 minutos y menos que la fila normal.
- **Construyeron o probaron:** concierge digital en el buffet del SIC. Página con el menú real y total automático, pago por Mercado Pago al alias `felipechain` con código de pedido, planilla que registra visitas, "ir a pagar" y pedidos, cartel con QR y mensaje para los grupos de WhatsApp. El equipo le pasa los pedidos al buffet a mano.
- **El resultado registrado fue:** el jueves 22/10, 32 pedidos pagados por la web (20 sin contar conocidos del equipo) y un retiro promedio de 2,4 minutos contra 8,6 de la fila normal. Detalle en `registro-experimento.md`, secciones 4 a 8.

**Chequeo rápido**

- Hipótesis definida antes de probar: Sí
- Criterio definido antes de probar: Sí (Clase 3)
- Hay resultados u observaciones: Sí
- Estado de la iteración: lista para analizar

## 2. Resultado

| Qué pasó | Cómo lo sabemos |
|---|---|
| 32 personas pidieron y pagaron por el celular entre las 19:41 y las 21:55 ($602.000); 12 eran conocidas del equipo | Planilla: eventos "pedido" y pestaña "Pedidos equipo" (comprobante y marca de conocido) |
| De 37 personas que abrieron la página, 33 tocaron "Ir a pagar" y 32 confirmaron | Planilla: sesiones únicas por evento |
| El retiro en el mostrador tardó 2,4 min en promedio; la fila normal, 8,6 min (5 personas) | "Pedidos equipo" y "Fila normal" |

- Resultado frente al criterio: se alcanzó. 32 pedidos contra 20 (20 justos sin conocidos). El criterio secundario también se alcanzó en promedio.
- Algo que salió distinto de lo esperado: desde que confirman el pedido hasta tener la comida pasan 8,0 minutos en promedio, casi lo mismo que la fila. La diferencia es que ese tiempo no lo pasan parados en la fila: según el equipo, piden desde la cancha y después caminan al buffet.

## 3. Aprendizaje

- Aprendimos que: la gente del SIC pide y paga por el celular en vez de hacer la fila cuando tiene un QR a mano, y casi todos los que abren la página terminan pidiendo. El valor es esperar mirando el partido, no recibir la comida antes.
- Todavía no sabemos si: el buffet pagaría por esto, y si funciona igual un sábado con la fila larga y sin conocidos del equipo.

## 4. Decisión

- Elegimos: avanzar (decisión del equipo, 25/10).
- Porque: el criterio se alcanzó (32 pedidos contra 20, y 20 sin contar conocidos), casi todos los que abrieron la página pidieron (32 de 37) y el retiro fue más corto que la fila normal. Repetir la misma prueba no enseñaría algo nuevo sobre el comportamiento.
- Próximo paso: construir un MVP que saque la parte manual del equipo, para que pueda usarse varios días sin nosotros. Queda abierto si el buffet pagaría y cómo funciona un sábado con la fila larga.

## 5. Punto de partida del MVP

- Usuario: [COMPLETAR]
- Situación: [COMPLETAR]
- Valor que queremos entregar: [COMPLETAR]
- Una sola cosa que el MVP debe permitir hacer: [COMPLETAR]
- Qué vamos a medir cuando lo use una persona: [COMPLETAR]
