---
summary: "OpenAI Codex es el agente de programación de OpenAI, incluido en cada plan de ChatGPT, de Free a Enterprise. Funciona en la terminal, en editores tipo VS Code, en las apps de escritorio y web de ChatGPT, en iOS y en entornos de nube aislados. Los desarrolladores lo usan para escribir, refactorizar y revisar código, y comparte un mismo cupo de uso con ChatGPT Work."
metaTitle: "OpenAI Codex: precios, límites y acceso gratis (2026)"
metaDescription: "Precios de OpenAI Codex en 2026: incluido en ChatGPT Free, Go ($8), Plus ($20) y Pro (desde $100). Límites de uso por plan, superficies, modelos y alternativas."
bestFor:
  - "Devs que ya pagan por ChatGPT"
  - "Ingenieros que viven en la terminal"
  - "Equipos que automatizan la revisión"
keyFeatures:
  - name: "Codex CLI"
    description: "Un agente de terminal que lee, edita y ejecuta código en local, con sandbox, reglas de aprobación y opciones de línea de comandos programables."
  - name: "Extensión de IDE"
    description: "Funciona en VS Code, Cursor y Windsurf, mientras que los IDE de JetBrains y Xcode ofrecen sus propias integraciones de Codex."
  - name: "Codex cloud"
    description: "Delega tareas a entornos de nube aislados con dependencias configurables y acceso a internet controlado."
  - name: "Revisión de código y Slack"
    description: "Revisa los cambios de GitHub automáticamente y acepta solicitudes desde canales e hilos de Slack en los planes de ChatGPT."
  - name: "Familia de modelos GPT-5.6"
    description: "Sol resuelve el razonamiento más difícil, Terra cubre el trabajo diario de producción y Luna da los límites más altos para tareas más ligeras."
  - name: "Personalización"
    description: "Guía de proyecto mediante AGENTS.md, más skills, plugins, servidores MCP y subagentes personalizados."
useCases:
  - "Pedir a la CLI que arregle una suite de pruebas que falla y aprobar cada comando antes de que se ejecute fuera del sandbox."
  - "Entregar un refactor largo a Codex cloud y revisar el diff resultante después desde la app de iOS."
  - "Activar la revisión de código automática para que cada pull request de GitHub tenga una primera pasada antes de que la vean los compañeros."
pricingSummary: "Codex está incluido en ChatGPT Free ($0), Go ($8/mes), Plus ($20/mes) y Pro (desde $100/mes, con límites 5x o 20x los de Plus). Business cuesta $25 por usuario al mes o $20 con facturación anual; el uso con clave de API se factura a tarifas de API."
savingTips:
  - "Los usuarios de Plus y Pro que alcanzan un límite pueden comprar créditos de ChatGPT en vez de mejorar todo el plan."
  - "Cambiar a GPT-5.6 Luna da muchos más mensajes locales por cada cinco horas que Sol, alargando cualquier plan."
  - "Los mantenedores de código abierto pueden solicitar el programa Codex for Open Source para obtener créditos de API y seis meses de ChatGPT Pro con Codex."
faq:
  - q: "¿OpenAI Codex es gratis?"
    a: "Sí, con límites. ChatGPT Free incluye Codex para tareas de programación rápidas, y Go a $8 al mes cubre trabajo ligero. Plus, a $20 al mes, incluye integraciones de nube como la revisión de código automática y Slack."
  - q: "¿Cuántos mensajes de Codex incluye ChatGPT Plus?"
    a: "OpenAI estima de 10 a 100 mensajes locales de GPT-5.6 Sol o de 250 a 2.000 de GPT-5.6 Luna por ventana de cinco horas en Plus. También pueden aplicarse límites semanales, y los chats en la nube usan más."
  - q: "¿Codex puede funcionar con una clave de API en vez de con ChatGPT?"
    a: "Sí. Con una clave de API, Codex funciona en la CLI, el SDK y la extensión de IDE y se factura a precios de API, pero las funciones de nube como la revisión de código de GitHub y Slack no están disponibles."
  - q: "¿Qué modelos usa Codex en 2026?"
    a: "Los planes de ChatGPT tienen la familia GPT-5.6 (Sol, Terra y Luna) y GPT-6 Astra. Pro añade GPT-5.3-Codex-Spark en vista previa de investigación, y GPT-5.5 se retira de Codex el 14 de octubre de 2026."
---
## ¿Qué es OpenAI Codex?
Codex es el agente de OpenAI para el trabajo de software, ligado a una cuenta de ChatGPT en lugar de venderse por su cuenta. La documentación de Codex de OpenAI ahora vive en los docs de ChatGPT, y el uso de Codex se comparte con ChatGPT Work, así que ambos recurren a los mismos límites y créditos.

## Para quién es
Encaja con desarrolladores que ya pagan por ChatGPT y quieren una sola suscripción para el chat y la programación. Los equipos pueden añadir el SDK de Codex, una GitHub Action y un protocolo de servidor de app para integrar Codex en sus propias herramientas y CI.

## Limitaciones
- Los límites son estimaciones, no recuentos fijos; las sesiones largas, las bases de código grandes, el modo rápido y la generación de imágenes consumen el cupo más rápido.
- Los chats en la nube funcionan con GPT-5.6 Sol y pueden consumir más que los mensajes locales.
- GPT-5.3-Codex-Spark es solo de Pro, con su propio límite aparte.
- Los usuarios con clave de API pierden las funciones de nube, incluidas la revisión de código y Slack.
