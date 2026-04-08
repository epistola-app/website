---
title: "Maak je eerste template"
summary: "Doorloop het aanmaken van een documenttemplate, de detailpagina begrijpen en varianten instellen."
videoUrl: ""
videoBrief: "20-second screen recording: click 'New Template' from the templates list, enter a name, see the template detail page appear with its four tabs (Variants, Deployments, Data Contract, Settings). End on the variant cards view."
posterImage: ""
sandboxCheckpointId: "template-created"
nextUnits:
  - slug: "edit-in-editor"
    label: "Bewerk in de visuele editor"
  - slug: "explore-technical"
    label: "Varianten instellen"
deepLinks:
  - label: "Templates"
    url: "/nl/learn/suite/templates"
  - label: "Varianten"
    url: "/nl/learn/suite/variants"
  - label: "Datacontracten"
    url: "/nl/learn/suite/data-contracts"
  - label: "Omgevingen"
    url: "/nl/learn/suite/environments"
tags:
  - getting-started
sortOrder: 2
---

## Een template aanmaken

Templates zijn de kernbouwsteen in Epistola. Elke template definieert alles wat nodig is om een specifiek documenttype te produceren.

### Begin vanaf de templatelijst

Navigeer naar de templatepagina in de Epistola Suite. U ziet een doorzoekbare tabel van alle templates in uw tenant. Klik op **Nieuwe template** om er een aan te maken — geef het een betekenisvolle slug (bijv. `besluitbrief`) en een weergavenaam.

### De template-detailpagina

Na aanmaak komt u op de template-detailpagina met vier tabbladen:

- **Varianten** — Beheer presentatievarianten (bijv. verschillende talen of merken). Elke variant heeft een eigen lay-out en versiegeschiedenis
- **Deployments** — De deploymentmatrix die toont welke versie actief is per variant per omgeving
- **Datacontract** — Bewerk het JSON Schema dat de data definieert die uw template verwacht, en beheer benoemde datavoorbeelden voor testen
- **Instellingen** — Configureer het standaardthema en schakel PDF/A-compliance in

### Definieer uw datacontract

Schakel naar het tabblad Datacontract en definieer het JSON Schema voor uw template. Dit contract beschrijft de exacte vorm van de datapayload — veldnamen, typen en welke velden verplicht zijn. Voeg benoemde datavoorbeelden toe zodat u de template kunt previewen met realistische inhoud.

### Varianten instellen

Terug op het tabblad Varianten begint uw template met één standaardvariant. Maak extra varianten voor verschillende talen, merken of kanalen. Tag elke variant met attributen (bijv. `taal=nl`) zodat de variantresolver automatisch de juiste kan selecteren wanneer documenten worden gegenereerd.

### Probeer het zelf

Gebruik de sandbox hieronder om een template aan te maken in een live Epistola-omgeving.
