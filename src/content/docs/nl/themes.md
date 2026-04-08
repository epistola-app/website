---
title: "Thema's"
description: "Herbruikbare stijldefinities met documentstijlen, pagina-instellingen, blokstijlpresets en een meervoudige stijlcascade."
section: "core-concepts"
sortOrder: 8
---

## Thema's

Thema's zijn herbruikbare stijldefinities die gedeeld worden over templates. Een thema bepaalt hoe documenten eruitzien — van typografie en kleuren tot paginadimensies en blokformattering.

### Wat een thema bevat

- **Documentstijlen** — Typografie (lettertypefamilies, groottes, regelhoogtes), kleuren (tekst, accent, rand, achtergrond) en uitlijningsstandaarden
- **Pagina-instellingen** — Papierformaat (A4, Letter, etc.), oriëntatie (staand, liggend) en marges (boven, onder, links, rechts)
- **Blokstijlpresets** — Benoemde stijlsets per bloktype, voor consistente opmaak over blokken van hetzelfde type
- **Spacing-eenheid** — Een basiseenheid in punten die gebruikt wordt om consistente spacing door het hele document af te leiden

### Stijlcascade

Stijlen worden opgelost via een vierniveau-cascade:

1. **Thema-documentstijlen** — De basisstijlen van het geselecteerde thema
2. **Template-documentstijloverschrijvingen** — Template-specifieke aanpassingen
3. **Blokstijlpreset** — De benoemde preset toegepast op een specifiek blok
4. **Blok inline-stijlen** — Per-blok overschrijvingen die direct in de editor zijn ingesteld

Elk niveau erft van het bovenliggende niveau en kan specifieke eigenschappen overschrijven.

### Themaselectiecascade

Het thema dat gebruikt wordt voor rendering wordt opgelost via drie niveaus:

1. **Variant-niveau overschrijving** — Als de variant een thema specificeert, wordt dat thema gebruikt
2. **Template-niveau** — Als er geen variantoverschrijving is, wordt het standaardthema van de template toegepast
3. **Tenant-standaard** — Als noch variant noch template een thema specificeert, wordt het standaardthema van de tenant gebruikt

### In de UI

De themalijstpagina toont alle thema's met zoekfiltering. De thema-editor is een ingebed webcomponent dat visuele bewerking biedt van alle thema-eigenschappen — typografie, kleuren, pagina-instellingen en blokstijlpresets.
