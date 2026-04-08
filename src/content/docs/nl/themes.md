---
title: "Thema's"
description: "Stijldefinities, pagina-instellingen, de stijlcascade en themaselectie."
section: "core-concepts"
sortOrder: 5
---

## Thema's

Thema's definiëren de visuele opmaak van documenten — lettertypen, kleuren, tussenruimtes, paginadimensies en meer. Ze cascaderen van tenant naar template naar variant.

### Stijldefinities

Een thema omvat:

- **Typografie** — Lettertypefamilies, groottes, regelhoogtes
- **Kleuren** — Tekst-, accent-, rand- en achtergrondkleuren
- **Pagina-instellingen** — Papierformaat, marges, oriëntatie
- **Tussenruimtes** — Sectiespacing, alineaspacing, lijstinspringing

### Pagina-instellingen

Thema's bepalen fysieke pagina-eigenschappen:

- Papierformaat (A4, Letter, aangepast)
- Marges (boven, onder, links, rechts)
- Oriëntatie (staand, liggend)
- Kop- en voettekstdimensies

### Stijlcascade

Thema's cascaderen door drie niveaus:

1. **Tenantstandaard** — Basisthema toegepast op alle templates binnen een tenant
2. **Templateoverschrijving** — Template-specifieke aanpassingen (bijv. watermerk toevoegen)
3. **Variantaanpassing** — Variant-specifieke verfijningen (bijv. koplettertype wisselen voor een merk)

Elk niveau erft van het bovenliggende en kan specifieke eigenschappen overschrijven.

### Themaselectie

Wanneer een versie wordt gepubliceerd, wordt het actieve thema gesnapt en bevroren met de versie. Dit zorgt ervoor dat rendering deterministisch is — dezelfde versie gebruikt altijd hetzelfde thema, ongeacht latere themawijzigingen.
