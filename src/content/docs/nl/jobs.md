---
title: "Jobs"
description: "Joblevenscyclus, statustracking, annulering en batch-items."
section: "generation"
sortOrder: 12
---

## Jobs

Elk documentgeneratieverzoek creëert een job. Jobs volgen de levenscyclus van rendering van verzoek tot voltooiing.

### Joblevenscyclus

| Status | Beschrijving |
|---|---|
| **In wachtrij** | Job aangemaakt, in de wachtrij voor verwerking |
| **Verwerking** | Template wordt gerenderd met de aangeleverde data |
| **Voltooid** | Document is klaar voor download |
| **Mislukt** | Rendering mislukt (validatiefout, enginefout, etc.) |
| **Geannuleerd** | Job is geannuleerd vóór voltooiing |

### Statustracking

Jobs bieden een statuseindpunt dat de huidige status, voortgang (voor batchjobs) en eventuele foutdetails retourneert. Consumenten kunnen:

- Het statuseindpunt periodiek **pollen**
- **Abonneren** op webhooknotificaties voor statuswijzigingen

### Annulering

Jobs kunnen worden geannuleerd terwijl ze in de status In wachtrij of Verwerking zijn. Geannuleerde jobs geven hun resources vrij en stoppen verdere verwerking. Reeds voltooide batch-items blijven beschikbaar voor download.

### Batch-items

In een batchjob wordt elke datapayload gevolgd als een apart batch-item met zijn eigen levenscyclus:

- Items worden onafhankelijk verwerkt en kunnen in willekeurige volgorde voltooid worden
- Mislukte items blokkeren geen andere items in de batch
- De bovenliggende job volgt de totale voortgang als percentage van voltooide items
