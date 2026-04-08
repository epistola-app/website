---
title: "Documentgeneratie"
description: "Synchrone preview, asynchrone enkelvoudige en batchgeneratie, en variantresolutie."
section: "generation"
sortOrder: 11
---

## Documentgeneratie

Epistola genereert documenten door een gepubliceerde templateversie te combineren met een JSON-datapayload. Er zijn verschillende generatiemodi afhankelijk van het gebruik.

### Synchrone preview

Tijdens templateontwerp biedt de editor synchrone preview-rendering. Auteurs zien een live preview van hun template met voorbeelddata, in realtime bijgewerkt terwijl ze wijzigingen aanbrengen.

### Asynchrone enkelvoudige generatie

Voor productiegebruik worden documenten asynchroon gegenereerd:

1. Dien een renderverzoek in met de templateslug en datapayload
2. Ontvang direct een job-ID
3. Poll of ontvang een webhook wanneer het document klaar is
4. Download de gerenderde PDF

Typische rendertijden zijn 50–200ms voor een enkel document.

### Asynchrone batchgeneratie

Voor grootschalige scenario's verwerkt batchgeneratie meerdere documenten in een enkele job:

1. Dien een batchverzoek in met de templateslug en een array van datapayloads
2. Elke payload wordt een batch-item met zijn eigen status
3. Webhooks notificeren uw systeem wanneer items voltooid zijn
4. Download individuele documenten of een gecombineerd archief

### Variantresolutie

Renderverzoeken kunnen een variant-ID direct specificeren, of attributen opgeven voor automatische resolutie. De variantresolver scoort alle beschikbare varianten en kiest de beste match, met terugval naar de standaardvariant wanneer geen kandidaten aan de criteria voldoen.
