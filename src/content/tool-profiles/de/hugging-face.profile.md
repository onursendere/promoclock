---
summary: "Hugging Face ist der Hub für offene KI-Modelle, Datensätze und Spaces-Demo-Apps, betrieben von der gleichnamigen Firma. Entwickler und Forscher nutzen ihn, um Open-Weight-Modelle herunterzuladen, Gradio-Demos auf geteilter ZeroGPU-Hardware zu hosten und gehostete Modelle über Inference Providers aufzurufen. NVIDIA gab am 3. September 2026 eine Vereinbarung zur Übernahme von Hugging Face bekannt."
metaTitle: "Hugging Face Preise: PRO-Plan, Free-Stufe & Funktionen"
metaDescription: "Hugging Face ist kostenlos beitretbar. Vergleiche den $9-PRO-Plan, Team- und Enterprise-Sitze, ZeroGPU-Kontingente und Inferenz-Credits, plus den NVIDIA-Deal."
bestFor:
  - "ML-Ingenieure und Forschende"
  - "Publisher von Open-Source-Modellen"
  - "Entwickler von KI-Demos"
  - "Teams mit privaten Modellen"
keyFeatures:
  - name: "Modell- und Dataset-Hub"
    description: "Durchsuche, lade herunter und versioniere Open-Weight-Modelle und Datensätze in Git-basierten Repositories mit öffentlicher oder privater Sichtbarkeit."
  - name: "Spaces"
    description: "Hoste Gradio-, Docker- oder statische Demo-Apps; CPU-Basic-Hardware ist kostenlos, und eine Nvidia T4 Small kostet $0.40 pro Stunde."
  - name: "ZeroGPU"
    description: "Gradio-Spaces leihen sich pro Funktionsaufruf NVIDIA-RTX-Pro-6000-Blackwell-GPUs, innerhalb eines Tageskontingents nach Konto-Typ."
  - name: "Inference Providers"
    description: "Rufe Modelle von Partner-Providern mit einem Hugging-Face-Token auf, abgerechnet zu den Sätzen des Providers ohne Hugging-Face-Aufschlag."
  - name: "Inference Endpoints"
    description: "Deploye jedes Hub-Modell auf dedizierter, autoscaling Infrastruktur, mit CPU-Instanzen ab $0.033 pro Stunde."
  - name: "HuggingChat"
    description: "Chatte mit offenen Modellen im Browser, wobei der Omni-Router für jede Anfrage ein passendes Modell wählt."
  - name: "hf CLI und Client-Libraries"
    description: "Melde dich an, lade Repositories aus dem Terminal mit dem hf-Befehl und der huggingface_hub-Python-Library herunter und hoch."
useCases:
  - "Ein Open-Weight-Modell und seinen Tokenizer herunterladen, um es lokal mit eigenen Daten zu feintunen."
  - "Eine Gradio-Demo eines Forschungsmodells auf ZeroGPU veröffentlichen, damit Reviewer es im Browser ausprobieren."
  - "Mehrere gehostete LLMs über Inference Providers testen, bevor du dich auf einen einzigen API-Anbieter festlegst."
  - "Einem Firmen-Team im Team-Plan SSO, Audit-Logs und Speicher-Regionen für private Modelle geben."
pricingSummary: "Der Hub ist kostenlos. PRO kostet $9/Monat mit $2 an monatlichen Compute-Credits und 8x ZeroGPU-Kontingent; Team kostet $20 und Enterprise $50 pro Nutzer pro Monat. Spaces-GPUs, Inference Endpoints und Extra-Speicher werden nach Nutzung abgerechnet."
savingTips:
  - "Gratis-Konten bekommen $0.10 an Inference-Providers-Credits pro Monat; PRO hebt das auf $2.00, nutzbar über Hugging-Face-Compute."
  - "ZeroGPU-Spaces zu nutzen ist kostenlos: 5 Minuten GPU-Zeit pro Tag in einem Gratis-Konto gegenüber 40 Minuten in PRO."
  - "Gratis-Konten, die älter als 30 Tage sind und eine verifizierte E-Mail haben, können bis zu 2 ZeroGPU-Spaces kostenlos hosten."
faq:
  - q: "Ist Hugging Face kostenlos nutzbar?"
    a: "Ja. Ein Konto, öffentliche Modell- und Datensatz-Downloads, CPU-Basic-Spaces und ZeroGPU-Spaces kosten nichts. Du zahlst für PRO-, Team- oder Enterprise-Pläne, aufgerüstete Spaces-Hardware, Inference Endpoints und Inferenz über die enthaltenen monatlichen Credits hinaus."
  - q: "Was enthält Hugging Face PRO?"
    a: "PRO kostet $9/Monat und ergänzt $2.00 an monatlichen Compute-Credits, 40 Minuten tägliche ZeroGPU-Zeit mit höchster Warteschlangen-Priorität, Hosting für bis zu 10 ZeroGPU-Spaces, Spaces Dev Mode und den Dataset-Viewer für private Datensätze."
  - q: "Kauft NVIDIA Hugging Face?"
    a: "Ja. NVIDIA gab am 3. September 2026 bekannt, dass es der Übernahme von Hugging Face für $12.93 Milliarden zugestimmt hat. NVIDIA sagt, die Plattform bleibe offen für Modelle, Clouds und Hardware aus dem gesamten Ökosystem, und NVIDIA-Compute werde nicht verlangt."
  - q: "Wie funktioniert das tägliche ZeroGPU-Kontingent?"
    a: "Kontingent hängt vom Konto ab: 2 Minuten nicht angemeldet, 5 Minuten Free, 40 Minuten für PRO- und Team-Mitglieder, 60 Minuten für Enterprise. Bezahl-Nutzer können mit Prepaid-Credits zu $1 pro 10 Minuten weiter darüber hinaus arbeiten."
  - q: "Kann man einen eigenen Provider-API-Key mitbringen?"
    a: "Ja. Du kannst in den Hugging-Face-Einstellungen einen eigenen Provider-Key hinzufügen, und der Provider rechnet dann direkt mit dir ab. Deine monatlichen Hugging-Face-Credits gelten nur für Anfragen, die über Hugging Face geroutet und abgerechnet werden."
---
## Was ist Hugging Face?
Hugging Face betreibt den Hub, ein geteiltes Zuhause für offene KI-Modelle, Datensätze und Spaces-Apps. Der meiste Betrieb ist öffentlich und kostenlos; Bezahlpläne ergänzen Speicher, Compute-Credits und Organisations-Kontrollen.

## Pläne auf einen Blick
- **Free:** öffentliche Repos, CPU-Basic-Spaces, 5 Minuten ZeroGPU pro Tag und $0.10 an monatlichen Inferenz-Credits.
- **PRO ($9/Monat):** 10x privater Speicher, 20x Inferenz-Credits, 8x ZeroGPU-Kontingent und Dev Mode.
- **Team ($20/Nutzer/Monat):** SSO, Speicher-Regionen, Audit-Logs und Resource Groups.
- **Enterprise ($50/Nutzer/Monat):** SCIM-Provisionierung, höchste Limits und dedizierter Support.

Speicher über enthaltene Limits hinaus wird pro TB berechnet, von $12 bis $18 pro TB pro Monat für private Repositories.

## Neuigkeiten zum Eigentum
Am 3. September 2026 gab NVIDIA eine Vereinbarung zur Übernahme von Hugging Face bekannt. NVIDIA sagt, die Plattform werde weiter Open-Source- und Open-Weight-Modelle aus dem gesamten Ökosystem unterstützen.

## Grenzen
ZeroGPU funktioniert nur mit dem Gradio-SDK und unterstützt kein torch.compile, und Gratis-Konten bekommen niedrigere Warteschlangen-Priorität als Bezahl-Konten. Die kostenlose $0.10-Monats-Inferenz-Ausrede ist schnell aufgebraucht. Modell-Lizenzen unterscheiden sich von Repo zu Repo, prüfe also jedes vor kommerzieller Nutzung.
