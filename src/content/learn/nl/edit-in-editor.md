---
title: "Bewerk in de visuele editor"
summary: "Ontwerp uw template met de WYSIWYG-editor — blokken, expressies, live preview en automatisch opslaan."
videoUrl: ""
videoBrief: "40-second screen recording: open the visual editor showing the split view. Add a text block with an expression chip (e.g. {{customer.name}}), drag a block to reorder, switch to a different data example to see the preview update live. Show the PDF preview panel rendering in real time."
posterImage: ""
sandboxCheckpointId: "editor-open"
nextUnits:
  - slug: "publish-and-deploy"
    label: "Publiceren en deployen"
  - slug: "explore-technical"
    label: "Leer over expressies"
deepLinks:
  - label: "Editoroverzicht"
    url: "/nl/learn/suite/editor-overview"
  - label: "Bloktypen"
    url: "/nl/learn/suite/block-types"
  - label: "Expressies"
    url: "/nl/learn/suite/expressions"
  - label: "Rich Text"
    url: "/nl/learn/suite/rich-text"
tags:
  - getting-started
sortOrder: 3
---

## De visuele editor

De Epistola-editor is waar templates tot leven komen. Het is een volledige-pagina WYSIWYG-editor met een splitweergave: uw template links, een live PDF-preview rechts.

### Blokken toevoegen

Bouw uw document op door blokken toe te voegen vanuit de werkbalk. De belangrijkste bloktypen zijn:

- **Tekst** — Rich text met vet, cursief, lijsten en inline expressiechips voor dynamische data
- **Tabel** — Gestructureerde tabellen met configureerbare kolombreedtes
- **Datatabel** — Dynamische tabellen die rijen herhalen uit een array in uw data
- **Afbeelding** — Voeg afbeeldingen in uit de assetbibliotheek
- **Conditie** — Toon of verberg secties op basis van datawaarden
- **Lus** — Herhaal blokken voor elk item in een array
- **Paginakop- / voettekst** — Inhoud die op elke pagina herhaalt

### Expressies invoegen

Expressies zijn de brug tussen uw data en uw template. Plaats uw cursor in een tekstblok en voeg een expressiechip in — deze wordt opgelost naar een live waarde uit uw geselecteerde datavoorbeeld.

Epistola ondersteunt drie expressietalen: Eenvoudig Pad voor directe property-toegang, JSONata voor transformaties en opmaak, en JavaScript voor complexe logica.

### Live PDF-preview

Het rechterpaneel rendert een echte PDF terwijl u werkt. Selecteer een datavoorbeeld uit de dropdown en zie uw template met realistische inhoud. Wijzigingen worden weergegeven na een korte debounce — doorgaans minder dan 3 seconden.

### Automatisch opslaan en ongedaan maken

De editor slaat elke wijziging automatisch op met een debounce van 3 seconden (plus Ctrl+S voor handmatig opslaan). Ongedaan maken- en opnieuw-stacks worden apart onderhouden voor blokoperaties en tekstbewerking, zodat u een tekstwijziging ongedaan kunt maken zonder de blokstructuur te beïnvloeden.

### Stencils

Moet u een blok hergebruiken over templates? Voeg een stencil in uit de bibliotheek, of maak een nieuw stencil van blokken die u hebt gebouwd. Stencils zijn versiebeheerd — wanneer een update beschikbaar is, meldt de editor dit.

### Volgende stappen

Zodra uw template er goed uitziet, is het tijd om te publiceren en deployen.
