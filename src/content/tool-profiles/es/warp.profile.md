---
summary: "Warp es un terminal moderno con un agente de programación integrado, hecho por la empresa neoyorquina Warp, cuyo cliente pasó a ser de código abierto bajo AGPL en abril de 2026. Los desarrolladores lo usan para ejecutar comandos y delegar trabajo de código de varios pasos al Warp Agent, mientras que los equipos añaden agentes en la nube y Warp Factories para pipelines automatizados."
metaTitle: "Warp: precios, plan gratis y agente de IA (2026)"
metaDescription: "Precios de Warp en 2026: el terminal es gratis, Build son $20/mes con 1.500 créditos de IA, Max $200/mes. Funciones, opciones BYOK y límites."
bestFor:
  - "Devs que viven en el terminal"
  - "Ingenieros de DevOps y plataforma"
  - "Equipos que automatizan code review"
keyFeatures:
  - name: "Terminal agente"
    description: "Un terminal rápido y moderno donde puedes pasar de teclear comandos a pedir al Warp Agent que planifique y edite código."
  - name: "Warp Agent CLI"
    description: "Ejecuta el agente de programación de Warp dentro de cualquier terminal, no solo la app Warp, con acceso incluido en todos los planes."
  - name: "Elección de modelo"
    description: "Elige modelos como Claude Opus 5, GPT-5.6, Gemini 3.1 Pro o Kimi K3 por tarea, o ejecuta tareas en paralelo con distintos modelos."
  - name: "Agentes en la nube e integraciones"
    description: "Menciona a @Warp en Slack, Linear o GitHub para investigar bugs o abrir pull requests, con enlaces de sesión en vivo compartibles."
  - name: "Warp Drive"
    description: "Guarda y comparte workflows, notebooks y otros objetos con compañeros; los planes de pago quitan los límites de objetos."
  - name: "Warp Factories"
    description: "Un control plane en acceso anticipado que ejecuta flotas de agentes de programación desde GitHub, Slack, webhooks o programación, configurados como código."
useCases:
  - "Pedir al agente que diagnostique una build que falla a partir de la salida del terminal y aplique el arreglo sin salir de la shell."
  - "Dejar que un agente en la nube haga la primera revisión de cada pull request antes de que un compañero le eche un vistazo."
  - "Enrutar alertas entrantes de Slack a un agente que reproduce el problema y resume los siguientes pasos."
  - "Usar el terminal gratis con tu propia clave de API de Anthropic o OpenAI en lugar de una suscripción."
pricingSummary: "Free cubre el terminal y el Agent CLI pero sin uso de IA incluido. Build son $20/mes con 1.500 créditos, Max son $200/mes con 18.000 créditos, y Business son $50 por usuario y mes hasta 25 asientos."
savingTips:
  - "La facturación anual quita un 10 %, lo que deja Build en $18/mes y Max en $180/mes."
  - "En el plan Free puedes usar el Warp Agent con tu propia clave de API o un endpoint de inferencia personalizado en vez de pagar por créditos."
  - "Los suscriptores de SuperGrok y X Premium pueden conectar esa suscripción como fuente de inferencia del Warp Agent."
faq:
  - q: "¿Warp es gratis?"
    a: "Sí. El plan Free incluye el terminal completo, acceso al Warp Agent CLI y agentes en la nube limitados, pero sin uso de IA incluido. Para usar el agente traes tu propia clave de API o endpoint de inferencia, compras créditos add-on, o subes de plan."
  - q: "¿Warp es de código abierto?"
    a: "Sí. Desde el 28 de abril de 2026, el código fuente del cliente Warp es público en github.com/warpdotdev/warp bajo la licencia AGPL-3.0. OpenAI es el patrocinador fundador del repositorio de código abierto, y los servicios de IA de pago de Warp siguen siendo comerciales."
  - q: "¿Qué cubre un crédito de Warp?"
    a: "Los créditos pagan el uso del agente a tarifas de API. Los 1.500 créditos de Build equivalen a $20 de uso incluido, y los 18.000 créditos de Max son 12 veces eso. Los planes de pago pueden recargar créditos con descuentos por volumen, autorrecarga y un tope de gasto."
  - q: "¿Qué sistemas operativos soporta Warp?"
    a: "Warp funciona en macOS 10.14 o posterior, en Windows 10 y 11 en compilaciones x64 y ARM64, y en Linux mediante paquetes .deb, .rpm, Arch y AppImage. El Agent CLI también funciona dentro de otros terminales."
  - q: "¿Warp entrena con tu código?"
    a: "Warp dice que tiene acuerdos de Zero Data Retention con todos los proveedores de LLM contratados, así que los datos del cliente no se retienen ni se usan para entrenamiento. Es compatible con SOC 2, y la telemetría puede configurarse individualmente o imponerse para equipos."
---
## ¿Qué es Warp?
Warp empezó como un terminal más rápido y ahora se posiciona como un entorno de desarrollo agente. La misma app maneja el trabajo diario en la shell y las sesiones de agente que escriben, ejecutan y arreglan código.

En abril de 2026 Warp liberó su cliente como código abierto, y en agosto de 2026 lanzó Warp Factories para empresas que ejecutan muchos agentes de programación por todo el ciclo de vida del software. El terminal se mantiene como producto propio.

## Los planes en la práctica
Free encaja con quien solo quiere el terminal o ya paga acceso a modelos en otro sitio. Build y Max incluyen uso de agente, objetos ilimitados de Warp Drive y almacenamiento de conversaciones en la nube. Business añade SAML SSO, métricas de uso del equipo y controles de datos de admin.

## Limitaciones
- El plan Free no incluye uso de IA.
- Los créditos se consumen a tarifas de API, así que el uso intensivo del agente puede pasarse rápido de la asignación de $20 de Build.
- Business tiene un tope de 25 asientos en equipos autoservicio; los grupos mayores necesitan Enterprise.
- Warp Factories está en acceso anticipado y no está disponible de forma general.
