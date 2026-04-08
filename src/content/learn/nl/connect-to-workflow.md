---
title: "Koppelen aan een werkproces"
description: "Koppel je Epistola-template aan een GZAC/Valtimo-proces — selecteer een template, map zaakgegevens en configureer variantselectie."
videoUrl: ""
videoBrief: "30-second screen recording: in Valtimo, open a BPMN process, add a service task with the Epistola generate-document action. Select a template, configure variant selection (e.g. attribute-based with language=nl), and map case fields to template data fields using the mapping UI."
posterImage: ""
sandboxCheckpointId: ""
nextUnits:
  - slug: "handle-results"
    label: "Resultaten en fouten afhandelen"
deepLinks:
  - label: "Valtimo Plugin Overzicht"
    url: "/nl/learn/integrations/valtimo-overview"
  - label: "Documentgeneratieactie"
    url: "/nl/learn/integrations/valtimo-generate-action"
  - label: "Datamapping"
    url: "/nl/learn/integrations/valtimo-data-mapping"
tags:
  - getting-started
  - integration
sortOrder: 5
---

## Epistola koppelen aan een werkproces

Met je template gepubliceerd en uitgerold is de volgende stap het koppelen aan een echt bedrijfsproces. In GZAC/Valtimo betekent dit het configureren van een BPMN-servicetaak om documenten te genereren vanuit Epistola.

### De proceskoppeling instellen

Voeg in de Valtimo-proceseditor een servicetaak toe en selecteer de **Epistola: Document Genereren**-actie. Je configureert drie dingen:

1. **Template** — welk Epistola-template te gebruiken
2. **Variantselectie** — hoe de juiste variant te kiezen:
   - **Standaard** — altijd de standaardvariant gebruiken
   - **Attribuutgebaseerd** — matchen op attributen zoals taal of merk (bijv. `taal=nl` selecteert de Nederlandse variant)
   - **Expliciet** — een exact variant-ID opgeven
3. **Datamapping** — zaakgegevens koppelen aan het datacontract van het template

### Zaakgegevens mappen

De mapping-interface laat je waarden uit de zaak koppelen aan templatevelden:

- **Zaakdocumentgegevens** (`doc:`) — velden uit het zaakdocument (bijv. `doc:aanvrager.naam`)
- **Procesvariabelen** (`pv:`) — waarden opgeslagen in het lopende proces
- **Zaakeigenschappen** (`case:`) — metadata op zaakniveau zoals behandelaar of zaak-ID

Je kunt eenvoudige waarden, geneste objecten en zelfs arrays met veldhernoeming mappen.

### Wat er daarna gebeurt

Wanneer een zaak bij deze servicetaak aankomt, stuurt de plugin een generatieverzoek naar Epistola en slaat het job-ID op. Het proces wacht dan op het resultaat — wat we hierna behandelen.
