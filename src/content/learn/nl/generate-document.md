---
title: "Genereer een document"
summary: "Stuur data naar de Epistola API en ontvang een gerenderde PDF."
videoUrl: ""
posterImage: ""
sandboxCheckpointId: "document-generated"
nextUnits:
  - slug: "explore-technical"
    label: "Technische architectuur"
  - slug: "welcome"
    label: "Terug naar start"
deepLinks:
  - label: "Documentgeneratie"
    url: "/nl/docs/document-generation"
  - label: "Jobs"
    url: "/nl/docs/jobs"
  - label: "Rendering"
    url: "/nl/docs/rendering"
tags:
  - getting-started
sortOrder: 4
---

## Uw eerste document genereren

Met een gepubliceerde template en een verbonden workflow is het genereren van een document eenvoudig: stuur een JSON-payload naar het render-eindpunt.

### De renderflow

1. **Verzoek** — Uw systeem stuurt een POST-verzoek met de templateslug en datapayload
2. **Valideer** — Epistola valideert de payload tegen het JSON Schema van de template
3. **Resolven** — De variantresolver kiest de best passende variant op basis van attributen
4. **Render** — De iText-engine verwerkt de template met uw data
5. **Retourneer** — U ontvangt een PDF-document (doorgaans in 50–200ms)

### Wat u krijgt

- Een pixelperfecte PDF die overeenkomt met uw templateontwerp
- Een audittrail die het document koppelt aan zijn templateversie, schema en invoerdata
- Reproduceerbaarheid — dezelfde invoer produceert altijd dezelfde output

### Foutafhandeling

Als uw payload niet overeenkomt met het schema, retourneert Epistola een duidelijke validatiefout voordat er gerenderd wordt. Deze fail-fast-aanpak voorkomt verspilde rekenkracht en maakt debugging eenvoudig.

### Batchgeneratie

Moet u honderden documenten genereren? Epistola ondersteunt batchoperaties met webhook-callbacks, zodat uw workflow-engine wordt genotificeerd wanneer elk document klaar is.

### Wat nu?

Duik in de technische architectuur om te begrijpen hoe Epistola is gebouwd, of ga terug naar het begin om een ander pad te verkennen.
