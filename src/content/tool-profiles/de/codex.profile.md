---
summary: "OpenAI Codex ist OpenAIs Coding-Agent, in jedem ChatGPT-Plan von Free bis Enterprise enthalten. Er läuft im Terminal, in Editoren im VS-Code-Stil, in den ChatGPT-Desktop- und Web-Apps, auf iOS und in isolierten Cloud-Umgebungen. Entwickler nutzen ihn, um Code zu schreiben, zu refactoren und zu prüfen, und teilen sich ein Nutzungskontingent mit ChatGPT Work."
metaTitle: "OpenAI Codex: Preise, Limits & Gratis-Zugang 2026"
metaDescription: "OpenAI Codex Preise 2026: in ChatGPT Free, Go ($8), Plus ($20) und Pro (ab $100) enthalten. Nutzungslimits pro Plan, Oberflächen, Modelle und Alternativen."
bestFor:
  - "Entwickler, die schon ChatGPT zahlen"
  - "Terminal-first-Ingenieure"
  - "Teams, die Code-Reviews automatisieren"
keyFeatures:
  - name: "Codex CLI"
    description: "Ein Terminal-Agent, der Code lokal liest, bearbeitet und ausführt, mit Sandboxing, Genehmigungsregeln und skriptbaren Kommandozeilen-Optionen."
  - name: "IDE-Erweiterung"
    description: "Funktioniert in VS Code, Cursor und Windsurf, während JetBrains-IDEs und Xcode eigene Codex-Integrationen bieten."
  - name: "Codex Cloud"
    description: "Delegiert Aufgaben an isolierte Cloud-Umgebungen mit konfigurierbaren Abhängigkeiten und kontrolliertem Internet-Zugang."
  - name: "Code-Review und Slack"
    description: "Prüft GitHub-Änderungen automatisch und nimmt in ChatGPT-Plänen Anfragen aus Slack-Kanälen und -Threads entgegen."
  - name: "GPT-6-Modellfamilie"
    description: "GPT-6 Astra übernimmt die schwerste Arbeit, GPT-6.1 Sol kommt zu geringeren Kosten nah heran, und GPT-6 Luna gibt die höchsten Limits für leichtere Aufgaben."
  - name: "Anpassung"
    description: "Projekt-Leitlinien über AGENTS.md, plus Skills, Plugins, MCP-Server und eigene Subagenten."
useCases:
  - "Die CLI bitten, eine fehlschlagende Testsuite zu reparieren, und jeden Befehl genehmigen, bevor er außerhalb der Sandbox läuft."
  - "Ein langes Refactoring an Codex Cloud übergeben und den entstandenen Diff später aus der iOS-App prüfen."
  - "Automatisches Code-Review einschalten, damit jeder GitHub-Pull-Request einen ersten Durchgang bekommt, bevor Teamkollegen schauen."
pricingSummary: "Codex ist in ChatGPT Free ($0), Go ($8/Monat), Plus ($20/Monat) und Pro ($100, $200 oder $500 im Monat; die neue $500er Stufe ergänzt Astra Ultrafast) enthalten. Business kostet $25 pro Nutzer monatlich oder $20 jährlich abgerechnet; API-Nutzung wird zu API-Sätzen berechnet."
savingTips:
  - "Plus- und Pro-Nutzer, die ein Limit erreichen, können ChatGPT-Credits kaufen, statt den ganzen Plan zu upgraden."
  - "Der Wechsel zu GPT-6 Luna gibt weit mehr lokale Nachrichten pro fünf Stunden als Sol und streckt jeden Plan."
  - "Open-Source-Maintainer können sich fürs Codex-for-Open-Source-Programm bewerben, für API-Credits und sechs Monate ChatGPT Pro mit Codex."
faq:
  - q: "Ist OpenAI Codex kostenlos?"
    a: "Ja, mit Limits. ChatGPT Free enthält Codex für schnelle Coding-Aufgaben, und Go für $8 im Monat deckt leichte Arbeit ab. Plus, für $20 im Monat, nennt Cloud-Integrationen wie automatisches Code-Review und Slack."
  - q: "Wie viele Codex-Nachrichten enthält ChatGPT Plus?"
    a: "OpenAI schätzt 15 bis 160 lokale GPT-6.1-Sol-Nachrichten oder 350 bis 3.000 GPT-6-Luna-Nachrichten pro Fünf-Stunden-Fenster in Plus, und 5 bis 45 mit GPT-6 Astra. Es können auch Wochenlimits gelten, und Cloud-Chats verbrauchen mehr."
  - q: "Kann Codex mit einem API-Key statt ChatGPT laufen?"
    a: "Ja. Mit einem API-Key funktioniert Codex in der CLI, im SDK und in der IDE-Erweiterung und wird zu API-Preisen berechnet, aber Cloud-Funktionen wie GitHub-Code-Review und Slack sind nicht verfügbar."
  - q: "Welche Modelle nutzt Codex 2026?"
    a: "OpenAI empfiehlt GPT-6 Astra, GPT-6.1 Sol und GPT-6 Luna. GPT-6.1 Sol wird für Plus, Pro, Business, Enterprise und Edu ausgerollt, während Free und Go GPT-6 Luna nutzen. GPT-5.3-Codex-Spark wurde am 14. September 2026 eingestellt, und GPT-5.5 wird am 14. Oktober 2026 aus Codex ausgemustert."
---
## Was ist OpenAI Codex?
Codex ist OpenAIs Agent für Software-Arbeit, an ein ChatGPT-Konto gebunden statt einzeln verkauft. OpenAIs Codex-Dokumentation liegt nun in den ChatGPT-Docs, und die Codex-Nutzung wird mit ChatGPT Work geteilt, sodass beide aus denselben Limits und Credits schöpfen.

## Für wen es ist
Es passt zu Entwicklern, die schon für ChatGPT zahlen und ein Abo für Chat und Coding wollen. Teams können das Codex-SDK, eine GitHub Action und ein App-Server-Protokoll ergänzen, um Codex in eigene Tools und CI einzubauen.

## Grenzen
- Limits sind Schätzungen, keine festen Zahlen; lange Sitzungen, große Codebases, Fast-Modus und Bildgenerierung verbrauchen das Kontingent schneller.
- Cloud-Chats können mehr von deinem Limit verbrauchen als lokale Nachrichten.
- Neue Modelle werden stufenweise ausgerollt, sodass Free- und Go-Nutzer länger auf das neueste Sol-Modell warten.
- API-Key-Nutzer verlieren Cloud-Funktionen, inklusive Code-Review und Slack.
