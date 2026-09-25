---
summary: "DeepSeek ist ein kostenloser KI-Chat-Assistent des chinesischen Labors DeepSeek, aufgebaut auf seiner Open-Weight-Modellfamilie V4. Er kombiniert einen abofreien Assistenten mit sehr niedrigen Token-Preisen in der API, und DeepSeek-V4.1-Flash kam im September 2026. Preisbewusste Nutzer, Entwickler und Forschende, die Modelle selbst hosten, nutzen ihn am meisten."
metaTitle: "Ist DeepSeek kostenlos? App, API-Preise & V4.1 2026"
metaDescription: "DeepSeeks Chat-App ist kostenlos. Sieh dir die API-Preise 2026 für deepseek-flash und V4-Pro, Nebenzeit-Rabatte, Datenschutz, den UK-Namen DSeek und Alternativen an."
bestFor:
  - "Preisbewusste Alltagsnutzer"
  - "Entwickler, die API-Kosten senken"
  - "Forschende mit Open Weights"
keyFeatures:
  - name: "Kostenloser Web- und Mobil-Chat"
    description: "Chatte, lade Dateien hoch und durchsuche das Web unter chat.deepseek.com oder in den iOS- und Android-Apps ohne Abo."
  - name: "1-Mio.-Token-Kontext"
    description: "Seit dem V4-Release im April 2026 ist ein Kontextfenster von 1 Mio. Tokens Standard über DeepSeeks offizielle Dienste hinweg."
  - name: "V4-Pro im Expert-Modus"
    description: "DeepSeek-V4-Pro, seit dem 13. August 2026 allgemein verfügbar, wird in der App und im Web über den Expert-Modus angeboten."
  - name: "Open Weights"
    description: "Weights und technische Berichte für V4-Pro, V4-Flash und V4.1-Flash sind auf Hugging Face für Forschung und Self-Hosting veröffentlicht."
  - name: "Nebenzeit-API-Preise"
    description: "Token-basierte Abrechnung mit Context-Caching und Nebenzeit-Sätzen, die halb so viel kosten wie die werktäglichen Stoßzeit-Fenster."
  - name: "Funktioniert mit Coding-Agenten"
    description: "Die API akzeptiert sowohl OpenAI- als auch Anthropic-Anfrageformate, sodass Tools wie Claude Code und OpenCode auf DeepSeek-Modellen laufen können."
useCases:
  - "Ein Skript debuggen oder einen mathematischen Beweis durchgehen, im kostenlosen Web-Chat, ohne für einen Plan zu zahlen."
  - "Claude Code oder OpenCode auf DeepSeeks Anthropic-kompatiblen Endpunkt richten, um Coding-Agenten auf günstigeren Tokens laufen zu lassen."
  - "Große Batch-Zusammenfassungsjobs außerhalb der UTC-Stoßzeiten planen, um die API-Rechnung zu halbieren."
  - "Open Weights von Hugging Face herunterladen, um ein DeepSeek-Modell auf der eigenen Infrastruktur zu testen."
pricingSummary: "Der Web-Chat und die iOS- und Android-Apps sind kostenlos. Die API läuft nach Verbrauch: deepseek-flash kostet zu Stoßzeiten $0.30 pro 1 Mio. Input-Tokens (Cache-Miss) und $1.20 pro 1 Mio. Output-Tokens, in Nebenzeiten die Hälfte."
savingTips:
  - "Flexible API-Workloads außerhalb der Stoßzeiten laufen lassen (01:00–04:00 und 06:00–10:00 UTC, Montag bis Freitag), um 50 % weniger zu zahlen."
  - "Lange Prompt-Präfixe wiederverwenden: gecachter deepseek-flash-Input kostet zu Stoßzeiten $0.006 pro 1 Mio. Tokens statt $0.30 bei einem Cache-Miss."
  - "Für Routinejobs deepseek-flash statt deepseek-v4-pro wählen; sein Stoßzeit-Output-Preis ist $1.20 pro 1 Mio. Tokens gegenüber $3.96."
faq:
  - q: "Ist DeepSeek kostenlos?"
    a: "Ja. Der DeepSeek-Web-Chat und die iOS- und Android-Apps kosten nichts und haben keine Abo-Stufe. Nur die Entwickler-API ist kostenpflichtig, pro Token von einem aufgeladenen oder gewährten Guthaben abgezogen."
  - q: "Wo speichert DeepSeek meine Daten?"
    a: "In China. DeepSeeks Datenschutzerklärung, zuletzt am 10. Februar 2026 aktualisiert, sagt, dass personenbezogene Daten in der Volksrepublik China erhoben, verarbeitet und gespeichert werden. Wäge das ab, bevor du sensible persönliche oder Firmendaten teilst."
  - q: "Warum heißt DeepSeek in UK DSeek?"
    a: "Ein Hinweis auf chat.deepseek.com sagt, DeepSeek sei aufgrund einer Marken-Umstrukturierung in UK nun offiziell DSeek. Der Hinweis ergänzt, dass alle Dienste normal weiterlaufen."
  - q: "Was ist DeepSeek-V4.1-Flash?"
    a: "Es ist DeepSeeks neuestes Modell, veröffentlicht am 10. September 2026: ein Mixture-of-Experts-Modell mit 552B Parametern und nativem visuellem Verständnis. Es ersetzte V4-Flash in der API unter dem Namen deepseek-flash, mit niedrigeren Preisen."
  - q: "Kann ich DeepSeek-V4-Pro weiterhin über die API nutzen?"
    a: "Ja. DeepSeek plante zunächst, V4-Pro-Anfragen ab dem 14. September 2026 auf V4.1-Flash zu routen, aber die Preisseite sagt nun, V4-Pro bleibe bis auf Weiteres mit unveränderter Abrechnung verfügbar."
---
## Was ist DeepSeek?
DeepSeek ist sowohl ein in Hangzhou ansässiges KI-Labor als auch der kostenlose Assistent, den es im Browser und in mobilen Apps betreibt. Entwickler erreichen dieselben Modelle über eine günstige API oder laden die Open Weights herunter, um sie selbst zu betreiben.

## Jüngste Änderungen
- **24. April 2026:** V4 Preview führte V4-Pro (1,6T gesamt, 49B aktive Parameter) und V4-Flash ein und machte 1-Mio.-Kontext zum Standard.
- **24. Juli 2026:** die Legacy-API-Modellnamen deepseek-chat und deepseek-reasoner wurden ausgemustert.
- **August 2026:** V4-Pro erreichte die allgemeine Verfügbarkeit, und Stoßzeit- und Nebenzeit-API-Sätze traten in Kraft.
- **10. September 2026:** V4.1-Flash ersetzte V4-Flash mit günstigeren API-Preisen.
- **UK:** der Dienst trägt nun den Namen DSeek.

## Grenzen
DeepSeek speichert personenbezogene Daten in China, was es für regulierte oder vertrauliche Arbeit ausschließen kann. In der API funktioniert Bild-Input nur mit deepseek-flash, und die Preise verdoppeln sich in den werktäglichen Stoßzeit-Fenstern. Modellnamen und Routing haben sich 2026 mehrfach geändert, also sollten API-Nutzer vor dem Deployment die Preisseite prüfen.
