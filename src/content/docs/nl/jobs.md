---
title: "Jobs"
description: "Joblevenscyclus van PENDING tot COMPLETED, per-item batchtracking, filtering en annulering."
section: "generation"
sortOrder: 15
---

## Jobs

Elk documentgeneratieverzoek maakt een job aan. Jobs volgen de volledige levenscyclus van rendering, van verzoek tot voltooiing.

### Joblevenscyclus

Jobs doorlopen deze statussen:

| Status | Beschrijving |
|---|---|
| **PENDING** | Job aangemaakt, in wachtrij voor verwerking |
| **IN_PROGRESS** | Template wordt gerenderd met de verstrekte data |
| **COMPLETED** | Document is klaar om te downloaden |
| **FAILED** | Rendering mislukt (validatiefout, enginefout, etc.) |
| **CANCELLED** | Job is geannuleerd vóór voltooiing |

### Batch-itemtracking

In een batchjob wordt elke datapayload bijgehouden als een apart item met een eigen levenscyclus. Items worden onafhankelijk verwerkt — een mislukt item blokkeert andere items in de batch niet.

### Filtering

Jobs kunnen gefilterd worden op:

- **Status** — Toon alleen voltooide, mislukte, lopende of geannuleerde jobs
- **Datumbereik** — Beperk resultaten tot een specifieke periode

### Annulering

Jobs in de PENDING- of IN_PROGRESS-status kunnen worden geannuleerd. Annulering stopt verdere verwerking en maakt resources vrij. Reeds voltooide batch-items blijven beschikbaar voor download.

### Jobretentie

Jobs volgen configureerbare retentie- en opschoonbeleiden. Voltooide jobs en hun documenten worden bewaard voor een gedefinieerde periode vóór automatische opschoning.

### In de UI

De recente-jobstabel in het generatiegeschiedenisdashboard toont jobs met kleurgecodeerde statusbadges: groen voor voltooid, blauw voor lopend, rood voor mislukt en geel voor geannuleerd.
