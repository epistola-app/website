---
title: "Data Contracts"
description: "JSON Schema data contracts defining template input structure, named data examples, and the data contract editor."
section: "core-concepts"
sortOrder: 2
---

## Data Contracts

Every template declares a data contract — a JSON Schema (Draft 2020-12) that defines the required input data structure. The contract ensures that render requests are validated before processing begins.

### JSON Schema

The data contract is a standard JSON Schema that describes the shape of the data payload a template expects:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "recipientName": { "type": "string" },
    "decisionDate": { "type": "string", "format": "date" },
    "items": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "description": { "type": "string" },
          "amount": { "type": "number" }
        }
      }
    }
  },
  "required": ["recipientName", "decisionDate"]
}
```

When a render request arrives, Epistola validates the payload against this schema. Invalid payloads are rejected before any rendering occurs.

### Named data examples

Templates can include named data examples — saved JSON payloads that conform to the schema. These serve as:

- **Preview data** — Select an example in the editor to see how the template renders with realistic content
- **Test data** — Verify that the template handles different data scenarios correctly
- **Documentation** — Show API consumers exactly what data structure the template expects

### In the UI

The data contract editor lives in the **Data Contract** tab on the template detail page. It is an embedded web component that provides:

- **Schema editor** — Edit the JSON Schema with syntax highlighting and validation
- **Example management** — Create, edit, and delete named data examples
- **Migration assistant** — Helps update the schema when the data structure evolves
- **Inline validation feedback** — Immediate feedback on schema and example validity
