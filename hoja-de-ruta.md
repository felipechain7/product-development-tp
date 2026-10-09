# Parciales viejos: hoja de ruta de las Clases 2 a 8

> **Qué es este documento:** un borrador del proyecto completo, clase por clase, para ponerse al día.
> **Qué no es:** evidencia. Todo lo marcado **[COMPLETAR]** lo tiene que hacer el equipo con personas reales (entrevistas, puntajes individuales, pruebas). Todo lo marcado **[SUPUESTO]** es una creencia nuestra sin comprobar. Las fuentes indicadas son **pistas para buscar**: hay que abrirlas y verificarlas antes de citarlas.

---

## Resumen en una pantalla

| Clase | Qué se entrega | Contenido en este proyecto |
|---|---|---|
| 2 | `clase-02-descubrimiento.md` | Problema: preparar un parcial sin acceso a exámenes anteriores de esa materia y cátedra |
| 3 | `lean-product-canvas.md` | Solución: banco de parciales anteriores por materia, cátedra y año |
| 4 | `registro-experimento.md` | Experimento 1 (**demanda**): concierge, "pedinos el parcial y te lo conseguimos" |
| 5 | `diseno-experimento.md` + registro | Experimento 2 (**oferta**): ¿los estudiantes suben sus parciales? |
| 6 | `aprendizaje-y-mvp.md` | Decisión según lo que pasó en 4 y 5 |
| 7 | MVP + `mvp.md` | Página web: elegís materia, filtrás y abrís el parcial |
| 8 | `pruebas-y-mejoras-mvp.md` | Tarea: "encontrá un parcial de X del año pasado", medida en tiempo |

**La idea central del proyecto:** que la gente *quiera* parciales viejos es casi seguro. Lo incierto es si alguien los **sube**. Un banco sin oferta está vacío. Esa tensión entre demanda y oferta organiza los dos experimentos y le da al TP una historia interesante.

---

## Clase 2: descubrimiento

### Territorio
- **Dominio:** preparación de exámenes en la universidad.
- **Usuario inicial:** estudiantes universitarios de 19 a 23 años, de 1.º a 3.º año, de nuestra facultad.
- **Contexto:** las dos semanas anteriores a un parcial o final.
- **Supuestos iniciales:**
  - **[SUPUESTO]** Los parciales anteriores son el material de estudio más buscado antes de un examen.
  - **[SUPUESTO]** Están dispersos en Drives personales, grupos de WhatsApp, fotocopiadoras y fotos en celulares.
  - **[SUPUESTO]** Quien tiene amigos en años superiores consigue más material que quien no los tiene.
- **Fuera de alcance:** la calidad de la enseñanza, el contenido de las materias, la copia durante el examen y los resúmenes o apuntes de clase (son otro problema).

### Problemas potenciales (para buscar evidencia)
| # | Problema | Dónde buscar señales |
|---|---|---|
| P1 | No encuentran parciales anteriores de su materia y cátedra | Foros y subreddits universitarios (r/UBA, r/argentina), grupos de Facebook de carreras |
| P2 | El material que encuentran es de otra cátedra o de un programa viejo | Las mismas fuentes; reseñas de Studocu |
| P3 | Desigualdad de acceso: depende de conocer gente de años superiores | Investigación sobre primer año y abandono universitario |
| P4 | Los parciales no traen resolución y no saben si lo hicieron bien | Foros; reseñas de Studocu y Course Hero |
| P5 | Pierden tiempo buscando en lugar de estudiar | **[SUPUESTO]**: sin fuente todavía |
| P6 | Abandono o recursada de materias en los primeros años | Anuario estadístico de la Secretaría de Educación Superior (SIU-Araucano); notas periodísticas sobre deserción universitaria |

**Competidores y alternativas que hay que relevar:** Studocu, Course Hero, Drives de centros de estudiantes, fotocopiadoras de la facultad, grupos de WhatsApp por materia y canales de Discord o Telegram de cada carrera.

### Fichas (elegir 3 o 4)
Usar la plantilla de la guía para P1, P2, P3 y P4. P5 y P6 probablemente terminen siendo una consecuencia y un contexto, respectivamente, como pasó en el TP anterior.

### ICE
- **Individual:** **[COMPLETAR]** cada integrante por separado, sin ver los puntajes de los demás.
- **Lectura esperada:** el *Ease* va a ser alto en todos los problemas, porque los usuarios son ustedes y sus compañeros. Eso es justamente lo que la guía advierte: el ranking se va a decidir por *Confidence*, que hoy es baja porque casi todo es foro y anécdota.

### Problema priorizado (borrador)
> Los estudiantes de 1.º a 3.º año tienen dificultades para **conseguir parciales anteriores de la misma materia y cátedra** en las semanas previas a un examen, porque **ese material circula de forma dispersa e informal entre conocidos**. Esto genera **tiempo de búsqueda y preparación con material que no corresponde**. Encontramos señales en [FUENTES VERIFICADAS]. Todavía necesitamos comprobar **(a)** cuánto tiempo se pierde realmente, **(b)** si la dificultad cambia según tener o no contactos en años superiores y **(c)** si la consecuencia es concreta (peor nota, recursada) o solo una molestia.

### Personas sintéticas
- **"La de primer año sin contactos":** no conoce a nadie que haya cursado la materia y depende del grupo de WhatsApp.
- **"El de tercero bien conectado":** tiene un Drive heredado y es quien *provee* material. Esta persona importa para la Clase 5, porque es la oferta.

### Guion de entrevista (núcleo)
1. Contame cómo te preparaste para el último parcial que rendiste.
2. ¿Conseguiste parciales de años anteriores? ¿Cómo, exactamente? ¿Quién te los pasó?
3. ¿Cuánto tardaste en conseguirlos? ¿Qué buscaste primero?
4. ¿Eran de tu cátedra? ¿Cómo te diste cuenta?
5. ¿Alguna vez no conseguiste nada? ¿Qué hiciste?
6. ¿Vos le pasaste material a alguien? ¿Cómo? ¿Por qué sí o por qué no?
7. ¿Tenés guardados parciales tuyos? Mostrame dónde.
8. De todo esto, ¿qué te molestó de verdad?

La 6 y la 7 apuntan a la oferta. No las salteen.

**Entrevistas:** **[COMPLETAR]** al menos 3, con cuota de 1 estudiante de primer año y 1 de tercero o más.

---

## Clase 3: Lean Product Canvas

| Caja | Borrador |
|---|---|
| 1. Problema de negocio | Los estudiantes preparan exámenes sin el material más útil, que existe pero está disperso; el valor se pierde por falta de un lugar común. **[SUPUESTO]** hasta las entrevistas. |
| 2. Resultados | Tiempo hasta conseguir un parcial de la materia (línea base pendiente de medir). Porcentaje de materias de la carrera con al menos un parcial cargado. Parciales subidos por estudiantes por mes. |
| 3. Usuarios y clientes | **Usuario consumidor:** estudiante antes de un examen. **Usuario proveedor:** estudiante que ya rindió. **Cliente:** pendiente (¿centro de estudiantes, publicidad, nadie?). **Decisor e influenciador:** cátedras, que podrían objetar la publicación. |
| 4. Resultado del usuario | "Cuando se acerca un parcial, quiero practicar con exámenes reales de mi cátedra, para saber qué y cómo me van a evaluar." |
| 5. Soluciones (2 o 3) | **A. Información:** banco con buscador por materia, cátedra y año. **B. Coordinación:** pedidos ("necesito X") que otro estudiante responde. **C. Inteligencia:** la IA genera ejercicios del estilo de la cátedra a partir de parciales cargados. Recomendada: **A**, con el pedido de B como respaldo cuando no hay resultados. |
| 6. Hipótesis | **Problema:** los estudiantes buscan parciales viejos y les cuesta encontrarlos. **Valor:** con el banco encuentran uno de su cátedra en menos de 2 minutos. **Comportamiento (oferta):** quien ya rindió sube su parcial. **Factibilidad:** se puede cargar y buscar material sin datos personales. |
| 7. Lo más importante por aprender | ¿Los estudiantes que ya rindieron **suben** sus parciales sin que se los pidamos uno por uno? (Es la hipótesis con más incertidumbre y más impacto: sin oferta, no hay producto.) |
| 8. Experimento mínimo | Ver Clases 4 y 5. |

**Pre-mortem: riesgos principales**
1. Nadie sube nada (falla la oferta).
2. Una cátedra pide que se baje su material (derechos y relación institucional).
3. El centro de estudiantes ya tiene un Drive que resuelve lo mismo.

---

## Clase 4: experimento 1, demanda (concierge)

> Opcional: si el canvas prioriza la oferta, se puede ir directo al experimento de la Clase 5. Igual conviene hacer este primero porque es más barato y da la línea base.

- **Hipótesis:** los estudiantes piden parciales viejos cuando se les ofrece un canal para hacerlo.
- **Instrumento:** un formulario de Google ("¿Qué parcial necesitás? Materia, cátedra, año") compartido en 2 o 3 grupos de WhatsApp de materias. El equipo consigue el material **a mano** y lo envía. Eso es lo que hace al experimento un concierge.
- **Métrica:** pedidos recibidos en 7 días; tiempo que le llevó al equipo conseguir cada uno.
- **Criterio de éxito:** **[COMPLETAR antes de ejecutar]**, por ejemplo "al menos 8 pedidos".
- **Dato extra que deja:** cuánto tarda conseguir un parcial hoy. Esa es la **línea base** para la Clase 8.
- **Limitación:** mide interés, no si el parcial ayudó a aprobar.

---

## Clase 5: experimento 2, oferta

- **Pregunta de aprendizaje:** ¿los estudiantes que ya rindieron suben sus parciales si se les pide de forma general (sin pedido personal)?
- **Alternativas posibles:**
  1. Formulario para subir archivos, difundido en grupos de WhatsApp.
  2. Un pedido directo a estudiantes de años superiores.
  3. Una regla de "subí uno y accedé al banco".
  - **Recomendada:** la 1, porque es la más barata.
- **Métrica:** parciales subidos sobre personas alcanzadas, en 7 días.
- **Criterio:** **[COMPLETAR antes de ejecutar]**.
- **Si da cero:** aplicar el diagnóstico de la guía (¿lo vieron?, ¿lo entendieron?, ¿confiaron?, ¿no quisieron?) antes de concluir algo. Ese análisis sirve para mostrar que se entendió la clase.
- **Regla de privacidad:** pedir que tapen el nombre y el DNI de la hoja antes de subirla.

---

## Clase 6: aprender y decidir

Completar `aprendizaje-y-mvp.md` con lo que **realmente** pasó. Reglas de decisión preparadas de antemano:

| Si pasó... | Decisión probable |
|---|---|
| Hubo demanda y oferta | **Avanzar** al MVP buscador |
| Hubo demanda pero no oferta | **Probar otro camino** para la oferta: el equipo y los compañeros cargan el material inicial, o se pide a quien hace un pedido que suba algo a cambio |
| No hubo demanda | **Arreglar la prueba** (canal o mensaje) antes de concluir |

**Punto de partida del MVP:**
- **Usuario:** estudiante con un parcial en las próximas 2 semanas.
- **Una sola cosa que hace el MVP:** encontrar un parcial anterior de su materia y cátedra.
- **Qué se mide:** si lo encuentra, si lo hace sin ayuda y en cuánto tiempo.

---

## Clase 7: MVP

- **Recorrido:** elegir la materia → filtrar por cátedra o año → abrir el parcial (PDF o imagen).
- **Si no hay resultados:** mostrar "Todavía no hay parciales de esta materia" y un botón "Pedilo". Ese botón sigue midiendo demanda.
- **Datos:** **reales**, cargados por el equipo con parciales propios y de compañeros que hayan dado permiso. Un catálogo de 15 a 30 parciales de 5 a 8 materias de la carrera alcanza.
- **Tecnología mínima:** una página HTML con un listado en JSON o una planilla de Google como base de datos. Los archivos van en una carpeta de Drive pública. Sin login.
- **Funciona / manual / fuera de alcance:**
  - **Funciona:** buscar y abrir.
  - **Manual:** la carga del material (la hace el equipo).
  - **Fuera de alcance:** cuentas de usuario, comentarios, puntajes, resoluciones y la generación de ejercicios con IA.

---

## Clase 8: medir y mejorar

- **Tarea de prueba (sin decir dónde hacer clic):** "Tenés el parcial de [materia] la semana que viene. Conseguí un parcial de esa materia de 2025."
- **Inicio:** la página abierta. **Fin:** el parcial correcto abierto en pantalla. **Corte:** 3 minutos o abandono.
- **Qué cuenta como ayuda:** cualquier indicación del equipo.

| Métrica | Fórmula | Criterio exploratorio |
|---|---|---|
| Éxito | completaron / intentaron | **[COMPLETAR]**, por ejemplo 4 de 5 |
| Autonomía | completaron sin ayuda / intentaron | **[COMPLETAR]** |
| Valor | segundos hasta abrir el parcial correcto, comparados con la línea base de la Clase 4 (o con pedirles que lo busquen "como lo harían hoy" en la misma sesión) | **[COMPLETAR]** |

- **Participantes:** 3 a 5 compañeros por ronda. **Están en el segmento**, que es la gran ventaja de este problema.
- **Iteración:** **[COMPLETAR]** con lo que se observe en la primera ronda, por ejemplo que no reconocen el nombre de la cátedra o que confunden parcial con final.
- **Ronda 2:** la misma tarea con participantes nuevos, y comparar.

---

## Qué tiene que hacer el equipo sí o sí (no lo puede hacer la IA)

- [ ] Verificar las fuentes de la Clase 2 (abrirlas y leerlas).
- [ ] Hacer los puntajes ICE individuales.
- [ ] Hacer 3 entrevistas reales o más.
- [ ] Definir los criterios de éxito **antes** de cada experimento.
- [ ] Ejecutar los experimentos de las Clases 4 y 5 y registrar lo que pase.
- [ ] Conseguir los parciales reales para el MVP, con permiso.
- [ ] Hacer las pruebas con personas de la Clase 8 (dos rondas).
