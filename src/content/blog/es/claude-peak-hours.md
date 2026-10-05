---
title: "Horas pico de Claude (2026): horarios en tu zona horaria y qué cambia"
metaTitle: "Horas pico de Claude 2026: tu zona horaria y qué cambia"
metaDescription: "Horas pico de Claude: de lunes a viernes de 13:00 a 19:00 UTC, los límites de sesión de 5 horas se agotan antes. Mira la franja en 9 ciudades y cómo organizarte."
excerpt: "Las horas pico de Claude van de lunes a viernes, de 13:00 a 19:00 UTC (09:00–15:00 en Nueva York hasta el 1 de noviembre de 2026). En esa franja, los límites de sesión de 5 horas de los planes Free, Pro, Max y Team se agotan más rápido; los semanales no cambian. El fin de semana es fuera de pico, Enterprise no se ve afectado y Claude Code en Pro y Max está exento desde el 6 de mayo de 2026."
imageAlt: "Primer plano de un reloj de pared blanco con un segundero rojo sobre una pared azul claro"
keyTakeaways:
  - "Las horas pico de Claude van de lunes a viernes de 13:00 a 19:00 UTC; el resto de las horas, incluidos todo el sábado y el domingo, son fuera de pico."
  - "En las horas pico de Claude, los límites de sesión de 5 horas de los planes Free, Pro, Max y Team se agotan más rápido, mientras que los límites semanales siguen exactamente igual."
  - "Las horas pico de Claude entraron en vigor el 27 de marzo de 2026, el último día de una promoción de dos semanas que duplicó los límites fuera de pico desde el 13 de marzo."
  - "Claude Code en Pro y Max está exento de la reducción en horas pico desde el 6 de mayo de 2026; los planes Enterprise nunca se vieron afectados."
  - "En Nueva York, las horas pico de Claude son de 09:00 a 15:00 EDT hasta el 1 de noviembre de 2026; en Londres, de 14:00 a 20:00 BST hasta el 25 de octubre de 2026."
faq:
  - q: "¿Hay horas pico de Claude los fines de semana?"
    a: "No. Las horas pico de Claude se aplican solo de lunes a viernes, de 13:00 a 19:00 UTC. El sábado y el domingo son fuera de pico las 24 horas en UTC, así que los límites de sesión se agotan a ritmo normal todo el fin de semana. En el este de Asia, la franja del viernes se extiende hasta la madrugada del sábado en hora local: hasta las 04:00 en Tokio y Seúl, y hasta las 03:00 en Pekín."
  - q: "¿Las horas pico de Claude afectan el límite semanal?"
    a: "No. Las horas pico de Claude solo cambian la rapidez con que se agota el límite de sesión de 5 horas, que funciona como una ventana móvil, en los planes Free, Pro, Max y Team. Los límites semanales de los planes de pago son los mismos dentro y fuera de las horas pico, así que mover el trabajo pesado fuera de pico alarga cada sesión, no tu cupo semanal total."
  - q: "¿Por qué el límite de Claude se agota más rápido por la tarde?"
    a: "En Europa y Oriente Medio, la tarde coincide con la franja pico de Claude, de 13:00 a 19:00 UTC entre semana. En esa franja, Anthropic hace que los límites de sesión de 5 horas de los planes Free, Pro, Max y Team se agoten más rápido, así que el mismo trabajo consume más de tu sesión. En Londres, las horas pico son de 14:00 a 20:00 BST hasta el 25 de octubre de 2026."
  - q: "¿Las horas pico afectan a Claude Code?"
    a: "No en Pro ni en Max. Desde el 6 de mayo de 2026, Anthropic exime a Claude Code en Pro y Max de la reducción en horas pico, y la misma actualización duplicó los límites de 5 horas de Claude Code en los planes de pago. El chat de esos planes sigue afectado, y Anthropic no anunció la exención para los planes Team."
  - q: "¿Cuándo terminan las horas pico de Claude?"
    a: "Anthropic no ha anunciado una fecha de fin. Las horas pico de Claude se aplican desde el 27 de marzo de 2026 y, a octubre de 2026, no hay un calendario oficial para eliminarlas. El reloj en vivo de PromoClock y su endpoint gratuito /api/status reflejarán cualquier nueva franja o fecha de fin que anuncie Anthropic."
  - q: "¿Cuál es el mejor horario para usar Claude?"
    a: "Cualquier hora fuera de 13:00–19:00 UTC entre semana, o cualquier momento del fin de semana. Eso significa antes de las 09:00 o después de las 15:00 en Nueva York hasta el 1 de noviembre de 2026, antes de las 14:00 o después de las 20:00 en Londres hasta el 25 de octubre, y toda la jornada laboral en India, China, Japón y Corea."
howTo:
  name: "Cómo planificar tu trabajo con Claude según las horas pico"
  steps:
    - name: "Encuentra tu franja pico local"
      text: "Convierte 13:00–19:00 UTC entre semana a tu zona horaria con la tabla de esta guía o con el reloj en vivo de PromoClock, y anota los próximos cambios de hora del 25 de octubre (UE) y del 1 de noviembre de 2026 (EE. UU.)."
    - name: "Ordena tus tareas según su peso"
      text: "Los documentos largos, las subidas grandes, Research, las conversaciones largas y las tareas de agente de varios pasos son lo que más cupo de sesión consume; las preguntas rápidas, lo que menos."
    - name: "Mueve el trabajo pesado fuera de pico"
      text: "Programa las tareas pesadas antes o después de la franja pico entre semana, o para el fin de semana, cuando los límites de sesión de 5 horas se agotan a ritmo normal."
    - name: "Usa Claude Code en horas pico si tienes Pro o Max"
      text: "Claude Code en Pro y Max está exento de la reducción en horas pico desde el 6 de mayo de 2026, así que las sesiones de programación son un buen uso de la franja pico."
    - name: "Vigila tus medidores y automatiza la consulta"
      text: "Sigue tu uso de sesión y semanal en Claude, en Configuración > Uso (Settings > Usage), y consulta GET https://promoclock.co/api/status desde el prompt de tu terminal o desde un bot para saber cuándo cambia la franja."
---
Las horas pico de Claude son de lunes a viernes, de 13:00 a 19:00 UTC. Durante esa franja de 6 horas, los límites de sesión de 5 horas de los planes Free, Pro, Max y Team se agotan más rápido de lo normal, mientras que los límites semanales no cambian; las noches entre semana y todo el fin de semana son fuera de pico. Esta guía resume las reglas vigentes en octubre de 2026, la franja en 9 ciudades y un plan sencillo para organizar el trabajo pesado en torno a ella.

## ¿Qué son las horas pico de Claude?

Las horas pico de Claude son una franja fija entre semana, de 13:00 a 19:00 UTC, en la que Anthropic hace que tu cupo de la sesión de 5 horas se acabe antes. La franja se aplica desde el 27 de marzo de 2026.

- **Pico:** de lunes a viernes, 13:00–19:00 UTC.
- **Fuera de pico:** el resto de las horas entre semana, más todo el sábado y el domingo (UTC).
- **Fecha de fin:** no se ha anunciado. Anthropic no ha dicho cuándo se eliminará la franja, ni si lo hará.

Seguimos la franja en vivo en [Claude Watch](/), la página de inicio de PromoClock. Muestra si Claude está en horas pico en este momento, la franja en tu hora local y una cuenta regresiva hasta el próximo cambio.

## ¿Qué cambia exactamente en las horas pico de Claude?

Solo cambia la velocidad del límite de sesión de 5 horas: en horas pico, el mismo trabajo consume una parte mayor de tu cupo de sesión. Los límites semanales, los precios y el acceso a los modelos no cambian.

Claude mide el uso en dos capas. Cada plan tiene un límite de sesión que se reinicia en una ventana móvil de 5 horas, y los planes de pago suman un límite semanal, según la [página de precios de Anthropic](https://claude.com/pricing). Las horas pico solo afectan a la primera capa.

Cuando se anunció el cambio, Thariq Shihipar, de Anthropic, dijo que los límites semanales totales seguirían iguales y que solo cambiaría su distribución a lo largo de la semana, según [informó The Register](https://www.theregister.com/2026/03/26/anthropic_tweaks_usage_limits/) el 26 de marzo de 2026. Calculó que alrededor del 7 % de los usuarios llegaría a límites de sesión que antes no habría alcanzado, sobre todo en Pro.

Anthropic nunca ha publicado el ritmo de consumo en horas pico ni cuántos tokens caben en una sesión de 5 horas. Toma cualquier «multiplicador de pico» preciso que veas citado en internet como una suposición.

## ¿Desde cuándo hay horas pico en Claude y qué ha cambiado?

Las horas pico de Claude entraron en vigor el 27 de marzo de 2026, el último día de una promoción de dos semanas fuera de pico. Desde entonces, Anthropic añadió una exención permanente para Claude Code y lanzó varios aumentos por separado.

- **Del 13 al 27 de marzo de 2026:** [la promoción 2x fuera de pico](/deals/claude-march-2026-offpeak-2x/) duplicó los límites de sesión fuera de la franja de 8:00 a 14:00 ET entre semana y durante todo el fin de semana, para Free, Pro, Max y Team. Ya terminó.
- **27 de marzo de 2026:** [entraron en vigor las horas pico](/deals/claude-peak-hours-introduced/). Desde entonces, los límites de sesión se agotan más rápido de lunes a viernes, de 13:00 a 19:00 UTC.
- **6 de mayo de 2026:** Anthropic [duplicó los límites de 5 horas de Claude Code y quitó la reducción en horas pico para Claude Code en Pro y Max](/deals/claude-code-5h-limits-doubled/), según su [anuncio oficial](https://www.anthropic.com/news/higher-limits-spacex).
- **Del 1 al 15 de octubre de 2026:** [la promoción de uso de artefactos](/deals/claude-artifact-usage-promo-oct-2026/) hace que los siguientes 10 mensajes de chat después de crear o editar un artefacto cuenten 50 % menos para el límite de 5 horas en Pro, Max y Team. Está activa a 4 de octubre de 2026 y dura hasta las 23:59 PT del 15 de octubre.

Para el resto de los cambios de límites de sesión y semanales de este año, consulta nuestra guía de [límites de uso de Claude](/blog/claude-usage-limits/).

## ¿Qué planes de Claude se ven afectados por las horas pico?

Las horas pico de Claude afectan a los planes Free, Pro, Max y Team; a los planes Enterprise, no. Claude Code en Pro y Max está exento.

| Plan | Chat, escritorio, móvil y Cowork | Claude Code |
|---|---|---|
| Free | Afectado | No incluido en Free |
| Pro | Afectado | Exento desde el 6 de mayo de 2026 |
| Max 5x y Max 20x | Afectado | Exento desde el 6 de mayo de 2026 |
| Team | Afectado | Sin exención anunciada |
| Enterprise | No afectado | No afectado |

La exención de Claude Code es más limitada de lo que parece. En la misma cuenta Pro o Max, un chat largo a las 15:00 UTC sigue agotando la sesión más rápido, mientras que una tarea de Claude Code en ese mismo momento no.

Subir de plan tampoco elimina las horas pico. Max 5x ($100/mes) y Max 20x ($200/mes) dan 5 o 20 veces el uso por sesión de Pro, según el [artículo de Anthropic sobre el plan Max](https://support.claude.com/en/articles/11049741-what-is-the-max-plan), pero el chat en Max sigue sujeto a la franja pico. Nuestra [comparativa Claude Pro vs. Max](/blog/claude-pro-vs-max/) explica cuándo vale la pena el plan más grande, y la [ficha de Claude](/tools/claude/) muestra los precios actuales.

## ¿A qué hora son las horas pico de Claude en mi zona horaria?

Las horas pico de Claude son de 13:00 a 19:00 UTC, es decir, de 09:00 a 15:00 en Nueva York y de 14:00 a 20:00 en Londres hasta el próximo cambio de hora.

| Ciudad | Ahora (horario de verano) | Tras el cambio de hora |
|---|---|---|
| Nueva York | 09:00–15:00 EDT | 08:00–14:00 EST (desde el 1 de nov.) |
| San Francisco | 06:00–12:00 PDT | 05:00–11:00 PST (desde el 1 de nov.) |
| Londres | 14:00–20:00 BST | 13:00–19:00 GMT (desde el 25 de oct.) |
| París / Berlín | 15:00–21:00 CEST | 14:00–20:00 CET (desde el 25 de oct.) |
| Estambul | 16:00–22:00 | Sin cambio (UTC+3) |
| Nueva Delhi | 18:30–00:30 IST | Sin cambio |
| Pekín | 21:00–03:00 CST | Sin cambio |
| Tokio / Seúl | 22:00–04:00 | Sin cambio |
| São Paulo | 10:00–16:00 | Sin cambio (UTC−3) |

En la UE, los relojes se atrasan una hora el 25 de octubre de 2026, y en EE. UU., el 1 de noviembre de 2026. La franja en UTC no se mueve, así que en esos lugares la franja local empieza una hora antes.

Dos detalles suelen confundir:

- **Las franjas nocturnas cruzan la medianoche.** En Nueva Delhi, Pekín, Tokio y Seúl, la franja del viernes termina en la madrugada del sábado, hora local. El sábado de 00:00 a 04:00 en Tokio sigue contando como pico.
- **La redacción original tenía dos versiones.** El anuncio dio la franja como de 5 a 11 a. m. PT y de 1 a 7 p. m. GMT, según The Register. Ambas solo coinciden mientras California tiene horario estándar; hasta el 1 de noviembre de 2026, las 5 a. m. PDT son las 12:00 UTC. Nosotros usamos 13:00–19:00 UTC. Si estás en la costa oeste de EE. UU. y quieres un margen, considera pico de 05:00 a 12:00 PDT hasta el 1 de noviembre, cuando ambas versiones vuelven a coincidir.

## ¿La franja de 13:00 a 19:00 UTC sigue siendo oficial?

La franja se anunció oficialmente en marzo de 2026, pero el Centro de ayuda actual de Anthropic ya no la detalla. A octubre de 2026, los artículos del Centro de ayuda que revisamos sobre el plan Max, las buenas prácticas de uso y los créditos de uso describen las sesiones de 5 horas y los límites semanales sin mencionar una franja pico.

Así gestiona PromoClock ese vacío:

- Seguimos mostrando la última franja descrita oficialmente, de lunes a viernes de 13:00 a 19:00 UTC, en el reloj, en la API y en esta guía.
- Decimos abiertamente que ya no figura en el Centro de ayuda, en lugar de presentarla como texto vigente de la política.
- Revisamos el Centro de ayuda, el blog y los anuncios del personal de Anthropic cada vez que cambian los límites, y actualizaremos el reloj, la API y esta guía si Anthropic anuncia una nueva franja o una fecha de fin.

Nuestra página [Acerca de](/about/) explica cómo verificamos las fuentes y las fechas.

## ¿Cómo saber si Claude está en horas pico hoy?

Abre la [página de inicio de PromoClock](/): el reloj en vivo muestra si Claude está hoy en horas pico o fuera de pico, tu franja local y una cuenta regresiva hasta el próximo cambio. Los desarrolladores pueden consultar el mismo estado en JSON.

![Claude Watch de PromoClock mostrando a Claude fuera de pico, una cuenta regresiva hasta el próximo cambio y la siguiente franja pico en hora local](../images/claude-watch-peak-hours.jpg)

El endpoint es `GET https://promoclock.co/api/status`. Es gratis, admite CORS, tiene un límite de 60 solicitudes por minuto por IP y es la única API pública de PromoClock. La respuesta incluye:

- `status`: `peak` u `off_peak`, más un booleano `isPeak`.
- `nextChange`: el próximo cambio como marca de tiempo ISO 8601, y `minutesUntilChange`.
- `label`: una línea de estado breve y legible.

```bash
curl -s https://promoclock.co/api/status
```

La [sección de herramientas para desarrolladores](/#developer-tools) de la página de inicio tiene fragmentos de curl y zsh listos para copiar, incluido uno que pone un punto rojo o verde en el prompt de tu terminal. Un bot de Slack o Discord puede consultar el endpoint una vez por minuto y publicar un aviso cuando cambie `status`.

Dentro de Claude, Configuración > Uso (Settings > Usage) muestra cuánto has usado de tus propios límites de sesión y semanal, según las [buenas prácticas de uso](https://support.claude.com/en/articles/9797557-usage-limit-best-practices) de Anthropic.

## ¿Cómo organizar el trabajo pesado con Claude según las horas pico?

Mueve tu trabajo más pesado con Claude fuera de la franja de 13:00 a 19:00 UTC entre semana y deja la franja pico para preguntas cortas. Los fines de semana son fuera de pico en todo el mundo.

Anthropic enumera lo que hace pesada una tarea: la longitud del mensaje, el tamaño de los adjuntos, la longitud de la conversación, herramientas como Research y la búsqueda web, el modelo elegido, el nivel de esfuerzo, los artefactos y las tareas de varios pasos, como ejecutar código o navegar. Esos son los trabajos que conviene mover.

Qué significa eso según la región:

- **Costa este de EE. UU.:** el pico es de 09:00 a 15:00 EDT. Empieza el trabajo pesado antes de las 09:00 o después de las 15:00; desde el 1 de noviembre de 2026, antes de las 08:00 o después de las 14:00 EST.
- **Costa oeste de EE. UU.:** el pico es de 06:00 a 12:00 PDT, así que las tardes y las noches son fuera de pico.
- **Europa y Turquía:** el pico abarca la tarde y las primeras horas de la noche. Las mañanas son el mejor momento para documentos largos y Research.
- **India:** el pico es de 18:30 a 00:30 IST, así que la jornada laboral es fuera de pico.
- **China, Japón y Corea:** el pico cae a altas horas de la noche, así que toda la jornada laboral es fuera de pico.
- **Brasil:** el pico es de 10:00 a 16:00 en São Paulo. Usa las primeras horas de la mañana y la noche para el trabajo pesado.

En Pro o Max, invierte el orden durante el pico: ejecuta tareas de Claude Code, que están exentas, y deja los chats largos para después. Si alcanzas el tope de sesión en pleno pico, se libera cuando se reinicia tu ventana de 5 horas.

## Conclusión

Las horas pico de Claude te cuestan cupo de sesión, nunca cupo semanal. Esto es lo que recomendamos:

- **Usuarios ocasionales de Free o Pro:** en general puedes ignorar la franja. Si alcanzas el tope durante el pico, espera al reinicio de tus 5 horas.
- **Usuarios intensivos del chat en Europa, Turquía o Brasil:** deja los documentos largos y Research para la mañana, antes de que empiece el pico.
- **Usuarios en EE. UU.:** haz los trabajos grandes temprano por la mañana en la costa este y por la tarde en la costa oeste, y vuelve a revisar tus horarios después del 1 de noviembre.
- **Desarrolladores con Pro o Max:** usa la franja pico para Claude Code y deja los chats largos para fuera de pico.
- **Administradores de Team:** Anthropic no ha anunciado una exención de Claude Code para Team, así que programa los trabajos por lotes fuera de pico.

Consulta [Claude Watch](/) antes de una sesión larga. Es la forma más rápida de saber en qué franja estás.
