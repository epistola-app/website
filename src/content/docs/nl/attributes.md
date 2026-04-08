---
title: "Attributen"
description: "Tenant-level attribuutdefinities, toegestane waarden en variantmatching."
section: "platform"
sortOrder: 15
---

## Attributen

Attributen zijn tenant-level sleutel-waardedefinities die worden gebruikt om varianten te taggen en automatische variantresolutie aan te sturen.

### Tenant-level definities

Elke tenant definieert zijn eigen set attributen. Veelvoorkomende voorbeelden zijn:

- `language` — Documenttaal (nl, en, de, ...)
- `brand` — Bedrijfsonderdeel of merkidentiteit
- `channel` — Outputkanaal (print, e-mail, web)

### Toegestane waarden

Attributen kunnen een gedefinieerde set toegestane waarden hebben. Dit voorkomt typefouten en waarborgt consistentie tussen templates en API-aanroepen.

Bijvoorbeeld, een `language`-attribuut kan toestaan: `nl`, `en`, `de`, `fr`.

### Variantmatching

Wanneer een renderverzoek attributen bevat, gebruikt de variantresolver deze om de best passende variant te vinden:

1. **Verplichte attributen** — Het verzoek markeert bepaalde attributen als verplicht; varianten die deze missen worden geëlimineerd
2. **Optionele attributen** — Extra attributen die de matchscore verbeteren
3. **Scoring** — Varianten ontvangen punten voor matchende optionele attributen en voor specificiteit

Dit mechanisme laat API-consumenten hun intentie beschrijven zonder te koppelen aan specifieke variant-ID's.
