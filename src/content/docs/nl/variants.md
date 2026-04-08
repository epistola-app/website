---
title: "Varianten"
description: "Presentatievariaties van een template met attribuutgebaseerde resolutie, scoring en standaard-fallback."
section: "core-concepts"
sortOrder: 3
---

## Varianten

Varianten zijn presentatievariaties van een enkele template. Een `besluitbrief`-template kan varianten hebben voor Nederlands, Engels, zakelijke huisstijl of consumentenhuisstijl — elk met dezelfde datacontract maar met een eigen lay-out en stijl.

### Varianteigenschappen

Elke variant heeft:

- **Titel** — Een weergavenaam (bijv. "Nederlands — Zakelijk")
- **Slug** — Een unieke identifier binnen de template
- **Attributen** — Sleutel-waardeparen afgeleid van de attribuutdefinities van de tenant (bijv. `taal=nl`, `merk=zakelijk`)
- **Standaardvlag** — Precies één variant per template is gemarkeerd als standaard

### Variantresolutie

Wanneer een renderverzoek attributen meestuurt in plaats van een specifiek variant-ID, selecteert de resolver automatisch de beste match:

1. **Filter** — Elimineer varianten die een vereist attribuut uit het verzoek missen
2. **Score** — Ken punten toe voor overeenkomende optionele attributen (10x gewogen) met attribuutaantal als tiebreaker
3. **Selecteer** — Kies de variant met de hoogste score
4. **Fallback** — Als er geen kandidaten overblijven, gebruik de standaardvariant

Dit laat API-consumenten intentie beschrijven (bijv. "Nederlands, zakelijk merk") zonder specifieke variant-ID's te kennen.

### In de UI

Varianten verschijnen als kaarten op het tabblad Varianten van de template-detailpagina. Elke kaart toont:

- De varianttitel en slug
- Attribuutbadges voor toegewezen sleutel-waardeparen
- Statusbadges met aantallen concept- en gepubliceerde versies
- Inline bewerking voor titel, slug en attributen

Gebruik het attribuutfilter boven de kaarten om de lijst te beperken op specifieke attribuutwaarden.
