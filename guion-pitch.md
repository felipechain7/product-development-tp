# Guion del pitch: SinFila

> Para practicar el ensayo del 26/10. Sale de `pitch.md` y es el mismo texto de las notas de las diapositivas (artifact "SinFila — Pitch"). El reparto de quién habla es una **propuesta**: cámbienlo como les quede cómodo.

**Duración total:** unos 8 min 40 s, dentro del rango de 7 a 10.
- **Para bajar a 7:** acortar el problema a 45 s y la demo a 60 s, y juntar mercado y riesgos en 45 s.
- **Para llegar a 10:** usar el minuto y medio que sobra en las preguntas.

| # | Diapositiva | Habla | Tiempo | Acumulado |
|---|---|---|---|---|
| 1 | Portada | Felipe Chain | 15 s | 0:15 |
| 2 | El problema | Felipe Chain | 60 s | 1:15 |
| 3 | Por qué pasa | Felipe Chain | 30 s | 1:45 |
| 4 | La solución | Felipe Servent | 30 s | 2:15 |
| 5 | Demo (video) | Felipe Servent | 100 s | 3:55 |
| 6 | Lo que probamos | Pedro Tailhade | 60 s | 4:55 |
| 7 | Lo que aprendimos | Pedro Tailhade | 30 s | 5:25 |
| 8 | Del experimento al MVP | Pedro Tailhade | 30 s | 5:55 |
| 9 | Cómo ganamos plata | Juan Ignacio Canabe | 45 s | 6:40 |
| 10 | Mercado y competencia | Juan Ignacio Canabe | 30 s | 7:10 |
| 11 | Riesgos | Juan Ignacio Canabe | 30 s | 7:40 |
| 12 | Próximos pasos | Felipe Chain | 45 s | 8:25 |
| 13 | Cierre | Felipe Chain | 15 s | 8:40 |

---

## 1. Portada · Felipe Chain · 15 s

Buenas. Somos Felipe, Felipe, Juan y Pedro, y les vamos a presentar SinFila: una forma de pedir y pagar en el buffet del club desde la tribuna, sin hacer la fila.

## 2. El problema · Felipe Chain · 60 s

Los días de partido en los clubes de la URBA hay partidos seguidos, y todos van al buffet en el mismo momento: en los entretiempos y cuando termina cada partido. Como nos dijo la empleada del buffet del SIC, "nadie se quiere perder los partidos".

El 17/10 entrevistamos a cinco personas en el SIC y en Alumni, y al buffet del SIC. Los cinco se perdieron parte de un partido por hacer la fila, y hablaron de esperas de 10 a 20 minutos. Uno nos dijo: "20 minutos me parece un montón para un café y un tostado".

Y el buffet también pierde: según la empleada, algunos ven la fila y se van al McDonald's de al lado.

## 3. Por qué pasa · Felipe Chain · 30 s

Cuando preguntamos qué es lo que más tarda, los cinco dijeron lo mismo: pagar. "La fila avanzaba re lento", "el tostado salió rápido". El buffet lo confirma: lo que más tarda es cobrar, y muchas cosas ya están preparadas antes del pico.

Entonces el problema no se arregla con una cocina más rápida. Se arregla sacando el pago de la fila. Y eso es SinFila.

## 4. La solución · Felipe Servent · 30 s

SinFila funciona en tres pasos. Escaneás el QR del cartel y ves el menú con precios y el total, sin bajar ninguna app ni crear una cuenta. Pagás con Mercado Pago, y el pedido llega al buffet solo si está pagado. Y cuando está listo, el celular te avisa: "¡Listo! Andá a retirar". Vas al mostrador, decís tu código y te lo llevás.

Del otro lado, el buffet tiene un panel donde los pedidos entran solos, con un sonido. Lo vemos en la demo.

## 5. Demo · Felipe Servent · 100 s (mientras corre el video, sin sonido)

Acá ven un pedido real, con un pago real. A la izquierda, el celular de quien pide; a la derecha, la pantalla del buffet, al mismo tiempo.

Elige del menú una empanada y una bebida en combo, pone su nombre y paga con Mercado Pago. Cuando termina de pagar, vuelve sola a nuestra página y le aparece su código, el 843, y "En preparación".

En ese momento, del lado del buffet, el pedido entra solo a la pantalla, con un sonido. No hay nadie pasando pedidos por WhatsApp ni revisando comprobantes: si llegó, está pagado.

El buffet toca "Listo", y unos segundos después el celular cambia a "¡Listo! Andá a retirar". Recién ahí se levanta de la tribuna, va al mostrador, dice su código y el buffet lo marca como entregado.

*Si el video no arranca:* hacer clic sobre la imagen.

## 6. Lo que probamos · Pedro Tailhade · 60 s

Antes de construir nada, lo probamos. El jueves 22/10, durante cuatro partidos en el SIC, pusimos un QR con el menú real y pago real por Mercado Pago. Nosotros le pasábamos los pedidos al buffet a mano.

Antes de la prueba fijamos el criterio: 20 pedidos pagados era éxito. Hubo 32, por 602.000 pesos. Doce eran conocidos nuestros; sin ellos, igual llegamos a 20.

De las 37 personas que abrieron la página, 32 pagaron: el 86 %. Una vez que la ven, la usan.

Y retirar en el mostrador tardó 2,4 minutos en promedio, contra 8,6 de la fila normal medida ese mismo día. La hipótesis quedó respaldada y decidimos avanzar al MVP.

## 7. Lo que aprendimos · Pedro Tailhade · 30 s

Y acá apareció lo que no esperábamos. Desde que pagan hasta tener la comida pasan unos 8 minutos, casi lo mismo que en la fila. O sea: no comen antes.

La diferencia es dónde pasan esos minutos. Con la página piden desde la tribuna y caminan al buffet unos 5 minutos después; esos minutos los pasan mirando el partido. En la fila los pasan parados. El valor no está en comer antes, sino en no perderse el partido.

## 8. Del experimento al MVP · Pedro Tailhade · 30 s

Con eso construimos el MVP. Todo lo que el 22/10 hacíamos nosotros a mano, ahora lo hace el sistema: el pedido entra solo al panel del buffet, Mercado Pago confirma el pago sin que nadie mire comprobantes, el celular avisa cuándo ir y el sistema guarda la hora de cada paso, así la próxima prueba se mide sola.

Lo probamos de punta a punta el 25/10 con un pago de prueba, y desde ese día cobra con pagos reales.

## 9. Cómo ganamos plata · Juan Ignacio Canabe · 45 s

¿Cómo ganamos plata? El que pide paga un cargo por servicio del 10 % sobre su pedido, por no perderse el partido. El buffet cobra la comida en su propia cuenta de Mercado Pago y no pierde nada de cada venta.

Nuestra unidad es un pedido pagado. Con el ticket promedio del 22/10, de 18.812 pesos, entran 1.881; Mercado Pago se lleva 81 de comisión con IVA, y nos quedan unos 1.800 por pedido. Si la gente solo acepta un 8 %, quedan unos 1.440.

Por buffet, con cuatro días de partido por mes como el 22/10, son unos 230.000 pesos por mes. Eso cubre el servidor, pero no nuestro tiempo: con un buffet no alcanza, el negocio está en sumar clubes. Todo esto es estimación: el 22/10 nadie pagó un cargo, y es lo primero que necesitamos comprobar.

## 10. Mercado y competencia · Juan Ignacio Canabe · 30 s

La URBA tiene 91 clubes en 2026. Arrancamos por dos, el SIC y Alumni, donde hicimos las entrevistas y la prueba.

¿Contra qué competimos? Con el QR en la caja, que igual te hace hacer la fila: el 22/10 la fila tardó 8,6 minutos. Y con apps de pedidos como Waitry, que existen, pero no conocemos ningún club de rugby que las use. Nuestra diferencia es que SinFila está pensado para el pico de un día de partido: pedís sin dejar la cancha y te avisa cuándo ir.

## 11. Riesgos · Juan Ignacio Canabe · 30 s

Hay riesgos que ya bajaron: no era la cocina, lo lento es pagar; y la gente sí lo usa, con 32 pedidos en una noche.

Y hay riesgos que siguen abiertos, y los decimos de frente: no sabemos si la gente va a pagar el cargo del 10 %; el buffet puede no querer adoptarlo, porque con Checkout paga más comisión que con el QR con débito y cobra a los 18 días; la prueba fue un jueves con una fila de 4 a 11 personas, no un sábado lleno; y con 32 pedidos la cocina no se exigió.

## 12. Próximos pasos · Felipe Chain · 45 s

¿Qué viene? Ya probamos el MVP con cuatro compañeros de otros equipos: los cuatro hicieron el pedido completo, con pago real, sin ninguna ayuda.

Para la temporada 2027, la meta es tener SinFila en 3 clubes, con 30 pedidos o más por día de partido en cada uno: unos 2.880 pedidos y alrededor de 5,2 millones de pesos de contribución. Es una estimación.

Y les pedimos dos cosas: unos 1.500 dólares para el piloto, que cubren el servidor de la temporada, 36 carteles, la marca y el dominio, y publicidad en las redes de los clubes y stickers con QR, y, sobre todo, que nos presenten a concesionarios de buffets de la URBA. Operarlo cuesta poco; lo difícil es sumar clubes.

## 13. Cierre · Felipe Chain · 15 s

En el rugby el partido no se pausa para ir al buffet. Con SinFila, ya no hace falta elegir. Gracias, ¿preguntas?

---

## Preguntas: quién contesta

| Pregunta | Contesta | Respuesta corta |
|---|---|---|
| ¿Por qué no usan el QR de la caja y listo? | Pedro | Con el QR en la caja igual hacés la fila: 8,6 min contra 2,4 retirando. |
| ¿Pero la comida no llega igual de rápido? | Pedro | Sí, unos 8 min. La diferencia es que los pasás mirando el partido. |
| ¿No fueron todos amigos de ustedes? | Pedro | 12 de 32. Sin ellos, 20: igual se alcanzó el criterio. |
| ¿Quién les paga? ¿Y si no aceptan el 10 %? | Juan | El que pide. Si no lo aceptan, con el 8 % quedan unos $1.440 por pedido; si tampoco, sumamos un abono al buffet. |
| ¿Con un buffet alcanza? | Juan | No. Unos $230.000 por mes; el negocio es sumar clubes. |
| ¿Por qué el buffet dejaría el QR de la caja? | Juan | No pierde nada de cada venta y atiende más rápido en el pico. Pero con Checkout paga más comisión: es un riesgo anotado. |
| ¿Qué pasa si la cocina se satura? | Felipe Servent | Con 32 pedidos no pasó, pero no se exigió como un sábado. El MVP guarda la hora de cada paso para medirlo. |
| ¿Por qué ustedes? | Felipe Chain | Vamos a los clubes, tenemos a los usuarios a mano y el buffet del SIC ya aceptó probar. |

## Para el ensayo

- Practiquen con cronómetro: el que se pase de su tiempo recorta su parte, no la del siguiente.
- Los números que no pueden fallar: **32 pedidos, 86 %, 2,4 contra 8,6 minutos, $1.800 por pedido, 1.500 dólares**.
- Si no tienen el video para el ensayo, la diapositiva 5 tiene los pasos para contarlo.
