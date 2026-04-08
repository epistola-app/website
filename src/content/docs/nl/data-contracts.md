---
title: "Datacontracten"
description: "JSON Schema-datacontracten die de invoerstructuur van templates definiëren, benoemde datavoorbeelden en de datacontract-editor."
section: "core-concepts"
sortOrder: 2
---

## Datacontracten

Elke template declareert een datacontract — een JSON Schema (Draft 2020-12) dat de vereiste invoerdatastructuur definieert. Het contract zorgt ervoor dat renderverzoeken worden gevalideerd voordat verwerking begint.

### JSON Schema

Het datacontract is een standaard JSON Schema dat de vorm beschrijft van de datapayload die een template verwacht:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "ontvanger": { "type": "string" },
    "besluitdatum": { "type": "string", "format": "date" },
    "items": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "beschrijving": { "type": "string" },
          "bedrag": { "type": "number" }
        }
      }
    }
  },
  "required": ["ontvanger", "besluitdatum"]
}
```

Wanneer een renderverzoek binnenkomt, valideert Epistola de payload tegen dit schema. Ongeldige payloads worden afgewezen voordat er gerenderd wordt.

### Benoemde datavoorbeelden

Templates kunnen benoemde datavoorbeelden bevatten — opgeslagen JSON-payloads die voldoen aan het schema. Deze dienen als:

- **Preview-data** — Selecteer een voorbeeld in de editor om te zien hoe de template rendert met realistische inhoud
- **Testdata** — Verifieer dat de template verschillende datascenario's correct afhandelt
- **Documentatie** — Toon API-consumenten precies welke datastructuur de template verwacht

### In de UI

De datacontract-editor bevindt zich in het tabblad **Datacontract** op de template-detailpagina. Het is een ingebed webcomponent dat biedt:

- **Schema-editor** — Bewerk het JSON Schema met syntaxhighlighting en validatie
- **Voorbeeldbeheer** — Aanmaken, bewerken en verwijderen van benoemde datavoorbeelden
- **Migratie-assistent** — Helpt bij het bijwerken van het schema wanneer de datastructuur evolueert
- **Inline validatiefeedback** — Directe feedback over schema- en voorbeeldgeldigheid
