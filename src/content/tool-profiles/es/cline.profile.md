---
summary: "Cline es un agente de programación con IA de código abierto de Cline Bot Inc. que funciona en VS Code, los IDE de JetBrains, la terminal y una app de escritorio. Es gratis para desarrolladores individuales, que conectan sus propias claves de API de modelos o pagan la inferencia a precio de coste, y pide aprobación antes de editar archivos o ejecutar comandos."
metaTitle: "Cline: ¿el agente de código abierto es gratis?"
metaDescription: "Cline es gratis y de código abierto: solo pagas la inferencia de IA o usas tus claves. Descubre ClinePass a $9.99/mes, los editores compatibles y los límites."
bestFor:
  - "Devs que quieren elegir el modelo"
  - "Usuarios de VS Code atentos al coste"
  - "Equipos que necesitan código abierto"
keyFeatures:
  - name: "Modos Plan y Act"
    description: "Esboza un enfoque primero en modo Plan y luego cambia a modo Act y aprueba cada llamada de herramienta a medida que el agente trabaja."
  - name: "Checkpoints"
    description: "Cada llamada de herramienta crea un checkpoint con diffs visuales en el editor, así que puedes deshacer cualquier cambio con /undo."
  - name: "Cualquier proveedor de modelos"
    description: "Conecta Anthropic, OpenAI, Gemini, OpenRouter, AWS Bedrock, Vertex, Groq, DeepSeek o un endpoint local con tu propia clave de API."
  - name: "MCP Marketplace"
    description: "Añade servidores MCP del marketplace o propios para que Cline llegue a gestores de errores, plataformas de despliegue y almacenes de datos."
  - name: "Tablero Kanban en la CLI"
    description: "Ejecuta cline --kanban para gestionar agentes en paralelo en worktrees de git separados, incluidas sesiones de Claude Code y Codex."
  - name: "Skills y hooks"
    description: "Los skills empaquetan conocimiento reutilizable como ejecutar tu suite de pruebas, y los hooks dejan que los scripts controlen o moldeen cualquier llamada de herramienta."
useCases:
  - "Refactorizar un módulo en VS Code aprobando cada edición de archivo y comando de terminal que propone el agente."
  - "Dividir un backlog en tarjetas Kanban y dejar que varios agentes trabajen en ellas en worktrees de git aislados."
  - "Apuntar Cline a un modelo local a través de un servidor compatible con OpenAI para mantener el código en tu propia máquina."
  - "Conectar un servidor MCP de Linear para que el agente lea tickets y los convierta en tareas enlazadas."
pricingSummary: "El agente Cline es gratis para particulares, sin cuotas por asiento; pagas a los proveedores de modelos con tus propias claves o compras inferencia a Cline a precio de coste. ClinePass, una suscripción opcional de modelos de pesos abiertos, cuesta $9.99/mes, y el precio de Enterprise es a medida."
savingTips:
  - "Usa tus propias claves de API para pagar las tarifas del proveedor directamente, sin suscripción ni margen de Cline."
  - "ClinePass agrupa modelos de pesos abiertos como GLM 5.3, Kimi K3 y DeepSeek V4 por $9.99/mes en vez de cuentas de proveedor separadas."
  - "Los modelos locales conectados por un endpoint compatible con OpenAI evitan por completo los cargos de API por token."
faq:
  - q: "¿Cline es gratis?"
    a: "Sí. La extensión, la CLI y la app de escritorio de Cline, de código abierto, son gratis para desarrolladores individuales. Solo pagas por los modelos de IA que usas, ya sea con tus propias claves de API de proveedor o comprando inferencia a Cline a precio de coste."
  - q: "¿Qué es ClinePass?"
    a: "ClinePass es una suscripción de $9.99/mes para modelos de pesos abiertos de Z.ai, Moonshot AI, DeepSeek, MiniMax, MiMo y Qwen dentro de la extensión de IDE y la CLI de Cline. Cline dice que sus cupos dan de 2 a 5 veces el uso de los límites de tasa estándar de la API."
  - q: "¿Cline funciona en los IDE de JetBrains y en Cursor?"
    a: "Sí. El plugin de JetBrains está en acceso anticipado para IntelliJ IDEA, PyCharm, WebStorm, GoLand y otros IDE de JetBrains. En Cursor y Windsurf, instalas la misma extensión desde el VS Code Marketplace."
  - q: "¿Cline es de código abierto?"
    a: "Sí. El código fuente de Cline está en GitHub en github.com/cline/cline bajo la licencia Apache 2.0. Como el agente se ejecuta en el cliente, puedes cambiar de proveedor o alojar modelos por tu cuenta sin depender de los propios servicios de Cline."
  - q: "¿Qué añade Cline Enterprise?"
    a: "Enterprise añade SSO, aprovisionamiento SCIM, facturación centralizada, control de acceso por roles, límites sobre qué proveedores de inferencia pueden usar los equipos, registros de auditoría, despliegues en VPC, un SLA y soporte dedicado. El precio requiere contactar con ventas."
---
## ¿Qué es Cline?
Cline es un agente de programación autónomo que funciona dentro de tu editor o terminal en lugar de como un servicio alojado aparte. Lee los archivos que le señalas, edita código, ejecuta comandos y maneja un navegador, y se detiene para pedir tu aprobación en cada paso a menos que le des más autonomía.

## Dónde funciona
- **Extensión de VS Code**, instalable también en Cursor y Windsurf.
- **Plugin de JetBrains** en acceso anticipado.
- **CLI** con un tablero Kanban, plugins, programaciones y uso headless en CI.
- **Cline for Desktop**, una app independiente en beta para macOS y Windows.
- **SDK** para integrar el agente en otras herramientas.

## Limitaciones
El coste depende por completo de los modelos y los tokens que usas, así que las sesiones largas del agente con modelos de frontera pueden salir caras, y ClinePass cubre solo modelos de pesos abiertos. La app de escritorio sigue en beta, y Cline avisa de que hay que esperar detalles sin pulir. No hay un cupo de modelo gratis incluido para particulares.
