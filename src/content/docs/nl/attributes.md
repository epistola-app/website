---
title: "Attributen"
description: "Tenant-scoped attribuutregister met sleutels, weergavenamen, toegestane waarden en variantclassificatie."
section: "platform"
sortOrder: 18
---

## Attributen

Attributen zijn een tenant-scoped register van sleutels die worden gebruikt om varianten te classificeren en automatische variantresolutie aan te sturen.

### Attribuutdefinities

Elke attribuutdefinitie heeft:

- **Sleutel** — Een slug-identifier (bijv. `taal`, `merk`, `kanaal`)
- **Weergavenaam** — Een leesbaar label (bijv. "Taal", "Merk")
- **Toegestane waarden** — Een optionele lijst van toegestane waarden. Indien leeg, wordt elke waarde geaccepteerd

### Gebruik

Attributen dienen twee doelen:

1. **Variantclassificatie** — Varianten worden getagd met attribuut-sleutel-waardeparen (bijv. `taal=nl`, `merk=zakelijk`) die hun kenmerken beschrijven
2. **Automatische variantresolutie** — Wanneer een renderverzoek attributen bevat, matcht de resolver deze tegen variantattributen om de beste match te vinden

### In de UI

De attribuutlijstpagina toont een tabel met kolommen voor:

- **Sleutel** — De attribuutslug
- **Weergavenaam** — Het leesbare label
- **Toegestane waarden** — Weergegeven als badges

Klikken op een attribuut opent een bewerkdialoog (geladen via HTMX) voor het wijzigen van de weergavenaam en toegestane waarden.
