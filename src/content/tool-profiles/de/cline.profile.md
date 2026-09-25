---
summary: "Cline ist ein quelloffener KI-Coding-Agent von Cline Bot Inc., der in VS Code, JetBrains-IDEs, im Terminal und in einer Desktop-App läuft. Er ist für einzelne Entwickler kostenlos, die eigene Modell-API-Keys anbinden oder Inferenz zum Selbstkostenpreis zahlen, und er fragt vor dem Bearbeiten von Dateien oder dem Ausführen von Befehlen um Erlaubnis."
metaTitle: "Cline Preise: Ist der Open-Source-Agent kostenlos?"
metaDescription: "Cline ist kostenlos und quelloffen: du zahlst nur KI-Inferenz oder bringst eigene Keys mit. Sieh dir ClinePass für $9.99/Monat, Editoren und Limits an."
bestFor:
  - "Entwickler, die Modellauswahl wollen"
  - "Kostenbewusste VS-Code-Nutzer"
  - "Teams mit Open-Source-Bedarf"
keyFeatures:
  - name: "Plan- und Act-Modus"
    description: "Skizziere zuerst einen Ansatz im Plan-Modus, wechsle dann in den Act-Modus und genehmige jeden Tool-Aufruf, während der Agent arbeitet."
  - name: "Checkpoints"
    description: "Jeder Tool-Aufruf erzeugt einen Checkpoint mit visuellen Diffs im Editor, sodass du jede Änderung mit /undo zurückrollen kannst."
  - name: "Jeder Modell-Anbieter"
    description: "Binde Anthropic, OpenAI, Gemini, OpenRouter, AWS Bedrock, Vertex, Groq, DeepSeek oder einen lokalen Endpunkt mit deinem eigenen API-Key an."
  - name: "MCP-Marktplatz"
    description: "Füge MCP-Server aus dem Marktplatz oder eigene hinzu, damit Cline Bug-Tracker, Deployment-Plattformen und Data-Warehouses erreicht."
  - name: "Kanban-Board in der CLI"
    description: "Führe cline --kanban aus, um parallele Agenten in getrennten Git-Worktrees zu verwalten, inklusive Claude-Code- und Codex-Sitzungen."
  - name: "Skills und Hooks"
    description: "Skills bündeln wiederverwendbares Know-how, etwa deine Testsuite auszuführen, und Hooks lassen Skripte jeden Tool-Aufruf steuern oder formen."
useCases:
  - "Ein Modul in VS Code refactoren und dabei jede Datei-Änderung und jeden Terminal-Befehl genehmigen, den der Agent vorschlägt."
  - "Ein Backlog in Kanban-Karten aufteilen und mehrere Agenten in isolierten Git-Worktrees daran arbeiten lassen."
  - "Cline über einen OpenAI-kompatiblen Server auf ein lokales Modell richten, um Code auf deinem eigenen Rechner zu halten."
  - "Einen Linear-MCP-Server anbinden, damit der Agent Tickets liest und sie in verknüpfte Aufgaben verwandelt."
pricingSummary: "Der Cline-Agent ist für Einzelpersonen kostenlos, ohne Platzgebühren; du zahlst Modell-Anbieter über eigene Keys oder kaufst Inferenz zum Selbstkostenpreis bei Cline. ClinePass, ein optionales Open-Weight-Modell-Abo, kostet $9.99/Monat, und Enterprise ist individuell."
savingTips:
  - "Bring eigene API-Keys mit, um Anbieter-Sätze direkt zu zahlen, ohne Abo oder Aufschlag von Cline."
  - "ClinePass bündelt Open-Weight-Modelle wie GLM 5.3, Kimi K3 und DeepSeek V4 für $9.99/Monat statt separater Anbieter-Konten."
  - "Lokale Modelle über einen OpenAI-kompatiblen Endpunkt vermeiden Token-basierte API-Gebühren komplett."
faq:
  - q: "Ist Cline kostenlos?"
    a: "Ja. Die quelloffene Cline-Erweiterung, die CLI und die Desktop-App sind für einzelne Entwickler kostenlos. Du zahlst nur für die KI-Modelle, die du nutzt, entweder über eigene Anbieter-API-Keys oder durch Inferenz-Kauf zum Selbstkostenpreis bei Cline."
  - q: "Was ist ClinePass?"
    a: "ClinePass ist ein Abo für $9.99/Monat für Open-Weight-Modelle von Z.ai, Moonshot AI, DeepSeek, MiniMax, MiMo und Qwen in Clines IDE-Erweiterung und CLI. Cline sagt, seine Kontingente geben die 2- bis 5-fache Nutzung üblicher API-Ratenlimits."
  - q: "Funktioniert Cline in JetBrains-IDEs und Cursor?"
    a: "Ja. Das JetBrains-Plugin ist im Early Access für IntelliJ IDEA, PyCharm, WebStorm, GoLand und andere JetBrains-IDEs. In Cursor und Windsurf installierst du dieselbe Erweiterung aus dem VS Code Marketplace."
  - q: "Ist Cline quelloffen?"
    a: "Ja. Clines Quellcode liegt auf GitHub unter github.com/cline/cline unter der Apache-2.0-Lizenz. Da der Agent clientseitig läuft, kannst du Anbieter wechseln oder Modelle selbst hosten, ohne an Clines eigene Dienste gebunden zu sein."
  - q: "Was fügt Cline Enterprise hinzu?"
    a: "Enterprise ergänzt SSO, SCIM-Provisionierung, zentrale Abrechnung, rollenbasierte Zugriffskontrolle, Grenzen für die von Teams nutzbaren Inferenz-Anbieter, Audit-Logs, VPC-Deployments, ein SLA und dedizierten Support. Für Preise musst du den Vertrieb kontaktieren."
---
## Was ist Cline?
Cline ist ein autonomer Coding-Agent, der in deinem Editor oder Terminal arbeitet statt als separater gehosteter Dienst. Er liest Dateien, auf die du ihn richtest, bearbeitet Code, führt Befehle aus und steuert einen Browser, wobei er bei jedem Schritt auf deine Genehmigung wartet, sofern du nicht mehr Autonomie erlaubst.

## Wo es läuft
- **VS-Code-Erweiterung**, auch in Cursor und Windsurf installierbar.
- **JetBrains-Plugin** im Early Access.
- **CLI** mit Kanban-Board, Plugins, Zeitplänen und Headless-CI-Nutzung.
- **Cline für Desktop**, eine eigenständige Beta-App für macOS und Windows.
- **SDK** zum Einbetten des Agenten in andere Tools.

## Grenzen
Die Kosten hängen ganz von den genutzten Modellen und Tokens ab, sodass lange Agenten-Sitzungen mit Frontier-Modellen teuer werden können, und ClinePass deckt nur Open-Weight-Modelle ab. Die Desktop-App ist noch in der Beta, und Cline warnt vor rauen Kanten. Es gibt kein gebündeltes kostenloses Modell-Kontingent für Einzelpersonen.
