---
title: "Create your first template"
summary: "Walk through creating a document template in the Epistola Suite editor."
videoUrl: ""
posterImage: ""
sandboxCheckpointId: "template-created"
nextUnits:
  - slug: "add-workflow"
    label: "Add a workflow"
  - slug: "generate-document"
    label: "Generate a document"
deepLinks:
  - label: "Templates"
    url: "/en/learn/suite/templates"
  - label: "Variants"
    url: "/en/learn/suite/variants"
  - label: "Editor Overview"
    url: "/en/learn/suite/editor-overview"
  - label: "Block Types"
    url: "/en/learn/suite/block-types"
tags:
  - getting-started
sortOrder: 2
---

## Creating a template

Templates are the core building block in Epistola. Each template defines the structure and appearance of a document type — from a simple letter to a complex multi-page report.

### Step 1: Open the Suite editor

Navigate to the Epistola Suite and create a new template. Give it a meaningful slug (e.g. `decision-letter`) and a display name.

### Step 2: Define your schema

Every template needs a JSON Schema that describes the data it expects. This ensures that render requests are validated before processing:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "recipientName": { "type": "string" },
    "decisionDate": { "type": "string", "format": "date" },
    "subject": { "type": "string" }
  },
  "required": ["recipientName", "decisionDate", "subject"]
}
```

### Step 3: Design the layout

Use the visual editor to lay out your document. Add text blocks, data bindings, headers, footers, and styling. The editor supports rich formatting and live preview.

### Step 4: Create a variant

Variants let you have multiple versions of the same template — for example, different languages or brands. The variant resolver automatically picks the right one based on attributes you specify.

### Try it yourself

Use the sandbox below to create a template in a live Epistola environment.
