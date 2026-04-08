---
title: "Editoroverzicht"
description: "Volledige-pagina WYSIWYG-editor met splitweergave, live PDF-preview, automatisch opslaan, ongedaan maken/opnieuw, en stencilbeheer."
section: "editor"
sortOrder: 10
---

## Editoroverzicht

De Epistola Suite bevat een volledige-pagina WYSIWYG-editor voor het ontwerpen van documenttemplates. Deze is gebouwd met Lit- en ProseMirror-webcomponenten.

### Splitweergave

De editor gebruikt een aanpasbare splitweergave-lay-out:

- **Linkerpaneel** — Templatestructuur en inhoudsbewerking met een blokboom, werkbalk en inline bewerking
- **Rechterpaneel** — Live PDF-preview gerenderd met het geselecteerde testdatavoorbeeld

De scheidingslijn tussen panelen kan worden gesleept om de verhouding aan te passen.

### Live PDF-preview

Het previewpaneel rendert een echte PDF met de huidige templatestatus en een geselecteerd datavoorbeeld. Wijzigingen in de editor worden na een korte debounce weergegeven in de preview. Auteurs kunnen wisselen tussen datavoorbeelden via een dropdown boven de preview.

### Automatisch opslaan

Conceptversies worden automatisch opgeslagen met een debounce van 3 seconden na elke wijziging. Handmatig opslaan is ook beschikbaar via Ctrl+S. Werk gaat nooit verloren — de editor slaat wijzigingen continu op.

### Ongedaan maken en opnieuw

De editor onderhoudt aparte ongedaan maken/opnieuw-stacks voor blokniveau-operaties (toevoegen, verwijderen, herordenen) en rich text-bewerking. Dit laat auteurs een tekstopmaakwijziging ongedaan maken zonder de blokstructuur te beïnvloeden, en vice versa.

### Slepen en neerzetten

Inhoudsblokken kunnen herordend worden met slepen en neerzetten. Pak de handgreep van elk blok en verplaats het naar een nieuwe positie in de documentboom.

### Stencilbeheer

Vanuit de editor kunnen auteurs:

- **Zoeken** in beschikbare stencils en ze in de template invoegen
- **Controleren op updates** bij ingevoegde stencils om te zien of er nieuwere versies bestaan
- **Nieuwe stencils aanmaken** van geselecteerde blokken in de huidige template

### Asset-kiezer

De editor bevat een asset-kiezerdialoog voor het invoegen van afbeeldingen. Auteurs kunnen geüploade assets doorbladeren, miniaturen bekijken en afbeeldingen selecteren om in de template op te nemen.

### Datacontract-editor

De datacontract-editor bevindt zich in een apart tabblad op de template-detailpagina (niet in de visuele editor). Het biedt een dedicated interface voor het bewerken van het JSON Schema en het beheren van benoemde datavoorbeelden.
