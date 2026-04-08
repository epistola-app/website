---
title: "Documentgeneratie"
description: "Drie generatiemodi — synchrone preview, asynchrone enkele, asynchrone batch — met variantresolutie en schemavalidatie."
section: "generation"
sortOrder: 14
---

## Documentgeneratie

Epistola genereert documenten door een gepubliceerde templateversie te combineren met een JSON-datapayload. Drie generatiemodi bedienen verschillende use cases.

### Synchrone preview

Gebruikt tijdens templatebewerking in de Suite. De editor stuurt previewverzoeken en ontvangt gerenderde output direct. Previewmodus is rate-limited en produceert geen PDF/A-compliant output.

### Asynchrone enkele document

Voor productiegebruik. Dien een renderverzoek in en ontvang direct een job-ID. Het document wordt op de achtergrond gerenderd en produceert een PDF/A-compliant, productieklare PDF.

### Asynchrone batch

Voor hoog-volume scenario's. Dien een array van documenten in als één verzoek en ontvang een enkel job-ID. Elk document wordt bijgehouden als een apart batch-item met een eigen status.

### Functies

- **Variantresolutie** — Specificeer een variant expliciet op ID, of verstrek attributen voor automatische resolutie via het scoringsalgoritme
- **Omgevingsselectie** — Target een specifieke omgeving om de daar gedeployde versie te gebruiken
- **JSON Schema-validatie** — De datapayload wordt gevalideerd tegen het datacontract van de template voordat rendering begint
- **Aanpasbare bestandsnaam** — Stel een aangepaste bestandsnaam in voor het gegenereerde document
- **Correlatie-ID** — Koppel een correlatie-ID voor tracing door uw systemen

### In de UI

Het generatiegeschiedenisdashboard toont:

- **Statistiekkaarten** — Totale jobs, in wachtrij, voltooid en mislukt
- **Meest gebruikte templates** — Een tabel van de meest frequent gegenereerde templates
- **Recente jobs** — Een filterbare tabel van recente generatiejobs met statusbadges
