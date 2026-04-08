---
title: "Templates"
description: "What templates are, data contracts, and named data examples."
section: "core-concepts"
sortOrder: 1
---

## Templates

Templates are the core building block in Epistola. Each template defines the structure, layout, and data contract for a specific document type.

### What is a template?

A template combines:

- **Layout** — The visual structure of the document, designed in the Epistola Suite editor
- **Data contract** — A JSON Schema that defines what data the template expects
- **Named data examples** — Sample payloads that validate the schema and preview the document

### Data contracts

Every template declares a JSON Schema (Draft 2020-12) that describes the shape of the data it accepts. When a render request arrives, Epistola validates the payload against this schema before processing.

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "recipientName": { "type": "string" },
    "decisionDate": { "type": "string", "format": "date" }
  },
  "required": ["recipientName", "decisionDate"]
}
```

### Named data examples

Templates can include named data examples — saved JSON payloads that conform to the schema. These serve as:

- **Preview data** — Quickly see how the template renders with realistic content
- **Regression tests** — Automatically replay examples in CI to catch breaking changes
- **Documentation** — Show consumers exactly what data structure the template expects

### Template slugs

Each template has a unique slug scoped to its tenant (e.g., `decision-letter`). The slug is the stable identifier used in API calls and workflow configurations.
