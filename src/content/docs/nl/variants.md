---
title: "Varianten"
description: "Meerdere presentaties van een template, attribuutmatching en de variantresolver."
section: "core-concepts"
sortOrder: 2
---

## Varianten

Varianten maken het mogelijk dat een enkele template verschillende documentpresentaties produceert op basis van context — zoals taal, merk of kanaal.

### Meerdere presentaties

Een template kan een willekeurig aantal varianten hebben. Elke variant deelt het datacontract van de bovenliggende template maar behoudt zijn eigen lay-out, opmaak en versiegeschiedenis.

Bijvoorbeeld, een `besluitbrief`-template kan hebben:

- `nl-standaard` — Nederlandse versie met gemeentelijke branding
- `en-standaard` — Engelse vertaling
- `nl-zakelijk` — Nederlandse versie met zakelijke branding

### Attributen

Varianten worden getagd met attributen — sleutel-waardeparen die hun kenmerken beschrijven (bijv. `language=nl`, `brand=business`). Deze attributen sturen het automatische variantresolutieproces aan.

### Standaardvariant

Elke template moet precies één standaardvariant hebben. De standaard wordt gebruikt als terugval wanneer geen andere variant overeenkomt met de gevraagde attributen.

### Resolutie-algoritme

Wanneer een renderverzoek attributen bevat in plaats van een specifiek variant-ID, doet de resolver het volgende:

1. **Filteren** — Verwijdert varianten die een verplicht attribuut missen
2. **Scoren** — Kent punten toe voor optionele attribuutmatches en specificiteit
3. **Selecteren** — Kiest de variant met de hoogste score
4. **Terugvallen** — Gebruikt de standaardvariant als er geen kandidaten overblijven

Dit laat API-consumenten hun intentie beschrijven (bijv. "Nederlands, zakelijk merk") zonder het exacte variant-ID te hoeven kennen.
