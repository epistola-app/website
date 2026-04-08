---
title: "Maak je eerste template"
summary: "Doorloop het aanmaken van een documenttemplate in de Epistola Suite-editor."
videoUrl: ""
posterImage: ""
sandboxCheckpointId: "template-created"
nextUnits:
  - slug: "add-workflow"
    label: "Voeg een workflow toe"
  - slug: "generate-document"
    label: "Genereer een document"
deepLinks:
  - label: "Templates"
    url: "/nl/learn/suite/templates"
  - label: "Varianten"
    url: "/nl/learn/suite/variants"
  - label: "Editoroverzicht"
    url: "/nl/learn/suite/editor-overview"
  - label: "Bloktypen"
    url: "/nl/learn/suite/block-types"
tags:
  - getting-started
sortOrder: 2
---

## Een template aanmaken

Templates zijn de kernbouwsteen in Epistola. Elke template definieert de structuur en weergave van een documenttype — van een eenvoudige brief tot een complex meerpagina-rapport.

### Stap 1: Open de Suite-editor

Navigeer naar de Epistola Suite en maak een nieuwe template aan. Geef het een betekenisvolle slug (bijv. `besluitbrief`) en een weergavenaam.

### Stap 2: Definieer uw schema

Elke template heeft een JSON Schema nodig dat de verwachte data beschrijft. Dit zorgt ervoor dat renderverzoeken worden gevalideerd vóór verwerking:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "ontvanger": { "type": "string" },
    "besluitdatum": { "type": "string", "format": "date" },
    "onderwerp": { "type": "string" }
  },
  "required": ["ontvanger", "besluitdatum", "onderwerp"]
}
```

### Stap 3: Ontwerp de lay-out

Gebruik de visuele editor om uw document op te maken. Voeg tekstblokken, databindings, kop- en voetteksten en opmaak toe. De editor ondersteunt rijke opmaak en live preview.

### Stap 4: Maak een variant

Varianten laten u meerdere versies van dezelfde template hebben — bijvoorbeeld voor verschillende talen of merken. De variantresolver kiest automatisch de juiste op basis van attributen die u opgeeft.

### Probeer het zelf

Gebruik de sandbox hieronder om een template aan te maken in een live Epistola-omgeving.
