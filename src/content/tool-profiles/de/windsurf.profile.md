---
summary: "Windsurf ist der KI-Code-Editor, den Cognition, Macher des Devin-Agenten, im Juli 2025 übernahm und am 2. Juni 2026 in Devin Desktop umbenannte. Dieselbe IDE öffnet jetzt in einem Agent Command Center, das lokale und Cloud-Agenten verwaltet, Pläne und Preise blieben unverändert. Entwickler nutzen es als agentenzentrierte Alternative zu VS Code."
metaTitle: "Windsurf heißt jetzt Devin Desktop: Preise & Free-Plan"
metaDescription: "Windsurf wurde im Juni 2026 zu Devin Desktop umbenannt. Was sich geändert hat, Free-, Pro- ($20/Monat) und Max-Plan, Quotennutzung, Funktionen, Alternativen."
bestFor:
  - "Entwickler, die von VS Code wechseln"
  - "Engineers mit vielen parallelen Agenten"
  - "Bestehende Windsurf-Abonnenten"
keyFeatures:
  - name: "Agent Command Center"
    description: "Ein Kanban-Board aller laufenden lokalen und Cloud-Agenten, mit Spaces, die Sessions, Pull Requests, Dateien und geteilten Kontext bündeln."
  - name: "Devin-Local-Agent"
    description: "Die Rust-Neuentwicklung, die Cascade ersetzt hat, nutzt bis zu 30 % weniger Tokens und unterstützt Subagenten sowie OS-seitiges Sandboxing."
  - name: "Drittanbieter-Agenten über ACP"
    description: "Führt Codex, Claude Agent, OpenCode und eigene Agenten über das Agent Client Protocol in derselben Kanban-Ansicht aus."
  - name: "Volle IDE darunter"
    description: "Editor, Erweiterungen, Tastenkürzel und LSPs bleiben abwärtskompatibel zu Windsurf und VS Code, und Cursor-Einstellungen lassen sich importieren."
  - name: "Tab- und Inline-Bearbeitungen"
    description: "Unbegrenzte Tab-Vervollständigungen und Inline-Command-Bearbeitungen auf jedem Plan, auch auf Free."
  - name: "Fast Context"
    description: "Ein Retrieval-Subagent auf Basis von SWE-grep-Modellen, der relevanten Code bis zu 20-mal schneller findet."
useCases:
  - "Einen lokalen Agenten an einem Refactoring arbeiten lassen, während eine Devin-Cloud-Session parallel einen Bug fixt, und beides in einem Board überblicken."
  - "Claude Agent oder Codex weiter im selben Editor nutzen, statt das Tool zu wechseln."
  - "Ein bestehendes Windsurf-Setup inklusive Regeln und Memories mit dem eingebauten Assistenten zu Devin Local migrieren."
pricingSummary: "Free enthält ein kleines Kontingent mit unbegrenzten Tab-Vervollständigungen. Pro kostet $20/Monat, Max $200/Monat mit deutlich höherem Kontingent, und Teams startet bei $80/Monat mit vollen Sitzen zu je $40. Enterprise ist individuell."
savingTips:
  - "Kostenlose Modelle zählen nicht gegen dein Kontingent, und günstigere SWE-Modelle wie SWE-1.7 strecken bezahlte Kontingente weiter."
  - "Abonnenten, die vor der Kontingent-Umstellung im März 2026 auf Windsurf Pro waren, behalten dauerhaft den Bestandspreis von $15/Monat."
faq:
  - q: "Wurde Windsurf eingestellt?"
    a: "Nein, es wurde umbenannt. Am 2. Juni 2026 machte ein Over-the-Air-Update aus Windsurf Devin Desktop, dabei blieben Editor, Erweiterungen, Einstellungen und Pläne erhalten. windsurf.com leitet jetzt auf devin.ai weiter."
  - q: "Wem gehört Windsurf jetzt?"
    a: "Cognition, dem Unternehmen hinter dem Devin-Coding-Agenten. Es kündigte am 14. Juli 2025 an, Windsurfs IP, Produkt, Marke und Team zu übernehmen, und hat den Editor seitdem in die Devin-Produktfamilie eingegliedert."
  - q: "Wie funktionieren Nutzungslimits nach der Umstellung?"
    a: "Seit März 2026 enthalten Pläne ein tägliches und wöchentliches token-basiertes Kontingent statt Prompt-Credits. Free-Nutzer warten auf den Reset; Pro-, Max- und Teams-Nutzer können zusätzliche Nutzung zu API-Listenpreisen kaufen."
  - q: "Was ist aus Cascade geworden?"
    a: "Devin Local hat Cascade als wichtigsten lokalen Agenten ersetzt. Cognition hielt Cascade bis Juli 2026 für eine schrittweise Migration verfügbar, und ein Assistent in der Befehlspalette überträgt Workflows und Memories."
---
## Was ist aus Windsurf geworden?
Windsurf begann als Editor von Codeium und ging 2025 an Cognition über. Im Juni 2026 hat Cognition seine Produkte unter einer Marke vereint: Devin Desktop für die IDE, Devin Cloud für autonome Cloud-Agenten, Devin CLI fürs Terminal und Devin Review für Code-Reviews. Bestehende Windsurf-Regeln, inklusive `.windsurfrules`, funktionieren weiterhin.

## Für wen es passt
Devin Desktop passt zu Entwicklern, die einen Editor wollen, der auf das Überwachen mehrerer Agenten gleichzeitig ausgelegt ist. Devin Cloud ist dafür nicht nötig; rein lokale Agenten funktionieren ebenfalls.

## Einschränkungen
- Kontingente werden in Tokens gemessen, sodass Spitzenmodelle und lange Sessions das Tages- und Wochenbudget deutlich schneller aufbrauchen.
- Das Windsurf-JetBrains-Plugin befindet sich im Wartungsmodus; Cognition empfiehlt, Devin in JetBrains stattdessen über ACP zu betreiben.
- Kostenlose Testphasen bezahlter Pläne werden nur einer Teilmenge berechtigter Kunden angeboten.
- Bei Teams sind nur volle Sitze mit Devin Desktop inklusive, und neue Teams-Pläne enthalten kein SSO mehr.
