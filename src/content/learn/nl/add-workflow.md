---
title: "Voeg een workflow toe"
summary: "Verbind Epistola met een workflow-engine om documentgeneratie te automatiseren."
videoUrl: ""
posterImage: ""
sandboxCheckpointId: "workflow-created"
nextUnits:
  - slug: "generate-document"
    label: "Genereer een document"
deepLinks:
  - label: "API-overzicht"
    url: "/nl/learn/suite/api-overview"
  - label: "Omgevingen"
    url: "/nl/learn/suite/environments"
tags:
  - getting-started
  - technical
sortOrder: 3
---

## Integreren met workflows

Epistola is ontworpen om georkestreerd te worden, niet om te orkestreren. Het stelt een smal API-oppervlak beschikbaar — JSON erin, PDF eruit — zodat het natuurlijk past in elke workflow-engine.

### Common Ground-integratie

Voor Nederlandse gemeenten die Common Ground-platforms gebruiken, biedt Epistola kant-en-klare integratie met:

- **Valtimo** — Configureer de Epistola-plugin om documentgeneratie te triggeren vanuit procestaken
- **GZAC** — Map zaakdata naar templateschema's en genereer documenten als onderdeel van zaakgericht werken

### REST API-integratie

Voor elk ander systeem kunt u de REST API direct gebruiken:

```http
POST /api/v1/templates/{slug}/render
Content-Type: application/json

{
  "data": {
    "ontvanger": "Jan de Vries",
    "besluitdatum": "2026-04-08",
    "onderwerp": "Goedkeuring bouwvergunning"
  }
}
```

De API valideert uw payload tegen het JSON Schema van de template en retourneert een gerenderde PDF.

### Omgevingspromotie

Templates bewegen door omgevingen (bijv. ontwikkeling → acceptatie → productie). Elke omgeving heeft zijn eigen actieve versiepointer, zodat u nieuwe versies kunt testen zonder productie te beïnvloeden.

### Volgende stap

Nu uw workflow is opgezet, laten we een daadwerkelijk document genereren.
