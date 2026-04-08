---
title: "Publiceren en deployen"
summary: "Publiceer een conceptversie, deploy naar omgevingen via de deploymentmatrix en beheer de versielevenscyclus."
videoUrl: ""
videoBrief: "25-second screen recording: open the version history, publish a draft version, then switch to the Deployments tab showing the deployment matrix. Select the newly published version in a cell to deploy it to an environment. Show the status updating."
posterImage: ""
sandboxCheckpointId: "version-published"
nextUnits:
  - slug: "connect-to-workflow"
    label: "Koppelen aan een werkproces"
deepLinks:
  - label: "Versies"
    url: "/nl/learn/suite/versions"
  - label: "Omgevingen"
    url: "/nl/learn/suite/environments"
  - label: "Deploymentmatrix"
    url: "/nl/learn/suite/deployment-matrix"
  - label: "Versievergelijking"
    url: "/nl/learn/suite/version-comparison"
tags:
  - getting-started
sortOrder: 4
---

## Publiceren en deployen

Met uw template ontworpen in de editor is de volgende stap het concept publiceren en deployen naar een omgeving waar het echte documentgeneratieverzoeken kan bedienen.

### Een versie publiceren

Een conceptversie is uw werk in uitvoering — bewerkbaar en nog niet beschikbaar voor rendering. Wanneer u tevreden bent met de inhoud, publiceer het:

- Het concept wordt **Gepubliceerd**: de lay-out, themasnapshot en schemahash worden bevroren
- De inhoud is nu onveranderlijk — dezelfde invoer zal altijd dezelfde output produceren
- Een nieuw concept kan worden aangemaakt voor de volgende ronde wijzigingen

### De deploymentmatrix

Navigeer naar het tabblad Deployments op de template-detailpagina. De deploymentmatrix toont:

- **Rijen** — Eén per variant
- **Kolommen** — Eén per omgeving (bijv. Ontwikkeling, Acceptatie, Productie)
- **Cellen** — De actieve versie voor elk variant/omgevingspaar

Selecteer een versie in een cel om deze direct te deployen — de wijziging wordt onmiddellijk doorgevoerd via HTMX zonder paginaverversing.

### Versievergelijking

Vóór het deployen kunt u twee versies naast elkaar vergelijken. Het vergelijkingsdialoog rendert beide versies met hetzelfde datavoorbeeld en toont ze als PDF's in een volledig-schermweergave. Toegankelijk via de Vergelijk-knop in de deploymentmatrix.

### De versielevenscyclus

Versies doorlopen drie statussen:

1. **CONCEPT** — Bewerkbaar, maximaal één per variant
2. **GEPUBLICEERD** — Bevroren en onveranderlijk, beschikbaar voor deployment
3. **GEARCHIVEERD** — Alleen-lezen, bewaard voor audit en historische referentie

### Volgende stappen

Uw template is gepubliceerd en gedeployd. Laten we nu een daadwerkelijk document genereren.
