---
title: "Genereer een document"
summary: "Genereer documenten via de API — synchrone preview, asynchrone generatie, batchjobs en variantresolutie."
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
    url: "/nl/learn/suite/document-generation"
  - label: "Jobs"
    url: "/nl/learn/suite/jobs"
  - label: "Rendering"
    url: "/nl/learn/suite/rendering"
  - label: "API-overzicht"
    url: "/nl/learn/suite/api-overview"
tags:
  - getting-started
  - technical
sortOrder: 6
---

## Documenten genereren

Met een gepubliceerde en gedeployde template kunt u nu documenten genereren door data naar de Epistola API te sturen. Dit is het resultaat — u hebt een template gebouwd, nu produceert u output.

### Drie generatiemodi

#### Synchrone preview

Gebruikt tijdens bewerking. De editor stuurt previewverzoeken en ontvangt gerenderde output direct. Rate-limited en niet-PDF/A — ontworpen voor snelle iteratie, niet voor productie.

#### Asynchroon enkel document

Voor productiegebruik. Dien een renderverzoek in met de templateslug en datapayload:

```http
POST /api/tenants/{tenantId}/generation/generate
Content-Type: application/vnd.epistola.v1+json

{
  "templateSlug": "besluitbrief",
  "environment": "productie",
  "data": {
    "ontvanger": "Jan de Vries",
    "besluitdatum": "2026-04-08",
    "onderwerp": "Goedkeuring bouwvergunning"
  }
}
```

U ontvangt direct een job-ID. Het document wordt op de achtergrond gerenderd en produceert een PDF/A-compliant PDF.

#### Asynchrone batch

Voor hoog-volume scenario's. Dien een array van documenten in als één verzoek. Elk document wordt bijgehouden als een apart batch-item met een eigen status.

### Variantresolutie

U kunt een variant expliciet specificeren op ID, of attributen meesturen voor automatische resolutie. De resolver scoort alle varianten tegen uw attributen en kiest de beste match, met fallback naar de standaardvariant.

### Jobtracking

Elk generatieverzoek maakt een job aan die doorloopt: PENDING → IN_PROGRESS → COMPLETED | FAILED | CANCELLED. Het generatiegeschiedenisdashboard toont statistieken, meest gebruikte templates en recente jobs met kleurgecodeerde statusbadges.

### Wat u krijgt

- Een productieklare PDF die overeenkomt met uw templateontwerp
- Een audittrail die het document koppelt aan zijn templateversie, schema en invoerdata
- Reproduceerbaarheid — dezelfde invoer produceert altijd dezelfde output
