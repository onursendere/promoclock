---
summary: "Kiro ist eine agentische Coding-Umgebung von Amazon Web Services, die auf spezifikationsgetriebener Entwicklung aufbaut: Prompts werden zu Anforderungen, einem Design und Task-Listen, bevor Agenten Code schreiben. Sie kommt als Desktop-IDE, CLI und Browser-Version, und Entwickler nutzen sie, um KI-generierten Code an dokumentierte Absichten zu binden."
metaTitle: "Kiro: Preise, Gratis-Plan & Studentenangebot 2026"
metaDescription: "Kiro Preise 2026: Gratis-Kontingent mit 50 Credits, Pro ab $20/Monat, Pro Max und Power Pläne, Zusatz-Credits für $0,04 und kostenlose Credits für Studierende."
bestFor:
  - "Entwickler, die vor dem Coden planen"
  - "AWS-zentrierte Engineering-Teams"
  - "Multi-Repo-Refactoring"
keyFeatures:
  - name: "Spec-Modus"
    description: "Verwandelt einen Prompt in Anforderungen mit Abnahmekriterien, ein technisches Design und geordnete Tasks, die Agenten dann umsetzen."
  - name: "Property-basiertes Testen"
    description: "Prüft Anforderungen auf Widersprüche und Lücken und testet Verhalten dann gegen Regeln, die für alle Eingaben gelten müssen, nicht nur ein paar Beispiele."
  - name: "Agent Hooks und Steering"
    description: "Steering-Dateien laden deine Konventionen in jede Sitzung, und Hooks lösen Agentenaktionen automatisch bei bestimmten Ereignissen aus."
  - name: "Kiro Web"
    description: "In den Bezahlplänen laufen Agenten in isolierten Cloud-Sandboxes, arbeiten über GitHub- und GitLab-Repos hinweg und liefern Pull Requests."
  - name: "Kiro CLI"
    description: "Denselben Agenten im Terminal ausführen, Arbeit an Cloud-Sitzungen übergeben oder ihn headless in CI/CD für Reviews und Fixes einsetzen."
  - name: "Modellwahl mit Auto"
    description: "Auto mischt Modelle für Qualität, Geschwindigkeit und Kosten, oder du wählst Claude, GPT-5.6 oder offene Modelle mit Credit-Multiplikatoren."
useCases:
  - "Eine Spec für ein neues Payment-Feature schreiben, das generierte Design prüfen und Agenten die Task-Liste abarbeiten lassen."
  - "Eine Änderung an einer geteilten Library und die abhängigen Services in einer Kiro-Web-Sitzung über mehrere Repos koordinieren."
  - "Eine wiederkehrende Automatisierung einplanen, die Abhängigkeiten aktualisiert und jede Woche Pull Requests zur Prüfung öffnet."
  - "Die headless Kiro CLI in einer CI-Pipeline laufen lassen, um Pull Requests zu prüfen, bevor ein Mensch draufschaut."
pricingSummary: "Kiro Free enthält 50 Credits im Monat. Pro kostet $20/Monat für 1.000 Credits, Pro+ $40 für 2.000, Pro Max $100 für 5.000 und Power $200 für 10.000, mit Zusatz-Credits für je $0.04 in den Bezahlplänen."
savingTips:
  - "Studierende an teilnehmenden Universitäten bekommen ein Jahr lang 1.000 Credits im Monat gratis."
  - "Bei Auto bleiben spart bei Routine-Prompts: Dieselbe Aufgabe kostet etwa 1,3x mehr Credits, wenn du direkt Sonnet 4.6 wählst."
  - "Zusatz-Credit-Pakete starten bei $5 für 125 Credits und bleiben 12 Monate gültig, anders als monatliche Plan-Credits."
faq:
  - q: "Ist Kiro kostenlos?"
    a: "Ja. Kiro Free ist ein dauerhaftes Kontingent mit 50 Credits im Monat und ratenbegrenztem Zugriff auf Claude Sonnet 4.5 und offene Modelle wie Qwen3 Coder Next. Es gibt es nicht für Enterprise-Konten oder in AWS-GovCloud-(US)-Regionen."
  - q: "Was ist ein Kiro-Credit?"
    a: "Ein Credit ist eine Einheit Agentenarbeit, gemessen auf zwei Nachkommastellen. Einfache Prompts können weniger als 1 Credit kosten, Spec-Tasks meist mehr. Stärkere Modelle haben höhere Multiplikatoren, und nicht genutzte monatliche Credits verfallen."
  - q: "Hat Kiro ein Studentenangebot?"
    a: "Ja. Verifizierte Studierende an teilnehmenden Universitäten bekommen ein Jahr lang 1.000 Credits im Monat gratis, dasselbe Kontingent wie Pro. Das Programm listete im September 2026 132 berechtigte Universitäten, also vorher die Liste prüfen."
  - q: "Lässt sich ein Kiro-Abo außerhalb der Kiro-Apps nutzen?"
    a: "Teilweise. Credits funktionieren in Kiro IDE, Kiro CLI, Kiro Web, Kiro Crew, ACP-kompatiblen IDEs und CI-Automatisierung. Anfragen über Third-Party-Harnesses wie OpenClaw umzuleiten ist nicht erlaubt."
  - q: "Ist Kiro Web im Pro-Plan enthalten?"
    a: "Ja. Kiro Web steht in Pro, Pro+, Pro Max und Power zur Verfügung und zapft dieselben Credits wie IDE und CLI an, ohne separate Gebühr für Cloud-Compute. Nutzer im Free-Kontingent können es nicht verwenden."
---
## Was ist Kiro?
Kiro ist AWS' Entwicklungsumgebung für strukturiertes Arbeiten mit KI-Agenten. Statt direkt von einem Prompt zu Code zu springen, erzeugt der Spec-Modus Anforderungen, ein Design und Tasks, die du freigibst, und Agenten setzen sie parallel um.

Die IDE baut auf Code OSS auf und läuft unter macOS, Windows und Linux, mit nativen ARM64-Builds seit IDE 1.1 im September 2026. Kiro CLI, Kiro Web und Kiro Crew, ein Open-Source-Workspace für dauerhafte Agenten, teilen sich dieselben Credits.

## Pläne und Credits
Jede Stufe wird nach monatlichen Credits statt nach Anfragenzahl bepreist. Bezahlpläne erneuern sich am 1. jedes Kalendermonats, und die Preise verstehen sich ohne Mehrwertsteuer und Umsatzsteuer. Preise in AWS-GovCloud-(US)-Regionen liegen etwa 20 % höher.

## Grenzen
- Die 50 Credits des Gratis-Kontingents reichen nur für leichte Nutzung, und Premium-Modelle wie Claude Opus 5 brauchen einen Bezahlplan.
- Nicht alle Premium-Modelle sind in jedem Land oder jeder Region verfügbar.
- Kiro-IDE-Versionen vor 0.11.133 und CLI-Versionen vor 1.28.2 verlieren am 9. November 2026 die Verbindung.
- Selbstbedienungs-Bezahlpläne werden nur an Rechnungsadressen in gelisteten Ländern verkauft.
