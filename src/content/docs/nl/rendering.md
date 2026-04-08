---
title: "Rendering"
description: "iText PDF-engine, HTML-terugval en PDF/A-compliance."
section: "generation"
sortOrder: 13
---

## Rendering

Epistola gebruikt de iText PDF-bibliotheek als primaire renderingengine en produceert high-fidelity PDF-documenten uit templatedefinities en datapayloads.

### iText PDF-engine

De iText-engine handelt het volgende af:

- **Lay-out** — Precieze paginalay-out die overeenkomt met het templateontwerp
- **Typografie** — Font-embedding, kerning en Unicode-ondersteuning
- **Graphics** — Afbeeldingen, QR-codes en vectorelementen
- **Prestaties** — Typische rendertijden van 50–200ms per document

### HTML-terugval

Voor use cases die geen PDF-output vereisen, kan Epistola templates renderen naar HTML. Dit is handig voor:

- Webgebaseerde documentpreviews
- E-mailbodygeneratie
- Toegankelijkheidsscenario's waar HTML de voorkeur heeft

### PDF/A-compliance

Epistola ondersteunt PDF/A-output voor langdurige archivering. PDF/A-documenten:

- Embedden alle lettertypen en resources
- Vermijden externe afhankelijkheden
- Bevatten documentmetadata
- Voldoen aan ISO 19005 archiveringsstandaarden

Dit is cruciaal voor overheid en gereguleerde sectoren waar documenten tientallen jaren reproduceerbaar en toegankelijk moeten zijn.
