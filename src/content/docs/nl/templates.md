---
title: "Templates"
description: "Wat templates zijn, datacontracten en benoemde datavoorbeelden."
section: "core-concepts"
sortOrder: 1
---

## Templates

Templates zijn de kernbouwsteen in Epistola. Elke template definieert de structuur, lay-out en het datacontract voor een specifiek documenttype.

### Wat is een template?

Een template combineert:

- **Lay-out** — De visuele structuur van het document, ontworpen in de Epistola Suite-editor
- **Datacontract** — Een JSON Schema dat definieert welke data de template verwacht
- **Benoemde datavoorbeelden** — Voorbeeld-payloads die het schema valideren en het document previewen

### Datacontracten

Elke template declareert een JSON Schema (Draft 2020-12) dat de vorm van de geaccepteerde data beschrijft. Wanneer een renderverzoek binnenkomt, valideert Epistola de payload tegen dit schema vóór verwerking.

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "ontvanger": { "type": "string" },
    "besluitdatum": { "type": "string", "format": "date" }
  },
  "required": ["ontvanger", "besluitdatum"]
}
```

### Benoemde datavoorbeelden

Templates kunnen benoemde datavoorbeelden bevatten — opgeslagen JSON-payloads die voldoen aan het schema. Deze dienen als:

- **Preview-data** — Snel zien hoe de template rendert met realistische inhoud
- **Regressietests** — Voorbeelden automatisch afspelen in CI om breaking changes te detecteren
- **Documentatie** — Consumenten precies laten zien welke datastructuur de template verwacht

### Templateslugs

Elke template heeft een unieke slug die is gescoped naar zijn tenant (bijv. `besluitbrief`). De slug is de stabiele identifier die wordt gebruikt in API-aanroepen en workflowconfiguraties.
