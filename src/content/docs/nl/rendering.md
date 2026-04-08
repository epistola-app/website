---
title: "Rendering"
description: "iText Core PDF-engine, Playwright HTML-fallback, PDF/A-2b-compliance en outputformaten."
section: "generation"
sortOrder: 16
---

## Rendering

Epistola gebruikt iText Core 9.5.0 (Kotlin) als primaire renderingengine en produceert PDF-documenten direct vanuit de node/slot-grafiek van de template.

### Primaire engine: iText

De iText-engine mapt de interne node/slot-grafiek van de template direct naar iText-lay-outelementen. Belangrijke kenmerken:

- **Snel** — Typische rendertijden van 10–200ms per document
- **Pure JVM** — Geen externe processen of afhankelijkheden nodig
- **Directe mapping** — Templatenodes worden direct geconverteerd naar iText-elementen zonder tussenrepresentatie

### Renderingfuncties

- **Automatische paginakop- en -voetteksten** — Gerenderd via iText event handlers, herhalend op elke pagina
- **Automatische paginering** — Inhoud stroomt over pagina's met configureerbare spacing tussen blokken
- **Cascade-opgeloste stijlen** — De volledige stijlcascade (thema → template → preset → inline) wordt opgelost bij rendering
- **Server-side expressie-evaluatie** — Alle expressies worden op de server geëvalueerd vóór rendering

### PDF/A-2b-compliance

PDF/A-compliance kan per template worden in- of uitgeschakeld in het instellingentabblad. Wanneer ingeschakeld, produceert de engine documenten die voldoen aan de PDF/A-2b-standaard — met alle lettertypen ingebed, zonder externe afhankelijkheden, en met vereiste metadata voor langetermijnarchivering.

### Fallback: Playwright + HTML

Voor lay-outs die complexe CSS vereisen die de iText-engine niet ondersteunt, gebruikt een fallbackpad Playwright om HTML naar PDF te renderen. Dit is langzamer maar handelt randgevallen af met geavanceerde CSS-lay-outs.

### Outputformaten

- **PDF** — Het standaard outputformaat, gebruikt voor productiedocumenten
- **HTML** — Beschikbaar voor e-mailbodygeneratie en webgebaseerde previews
