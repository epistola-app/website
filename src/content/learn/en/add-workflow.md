---
title: "Add a workflow"
summary: "Connect Epistola to a workflow engine to automate document generation."
videoUrl: ""
posterImage: ""
sandboxCheckpointId: "workflow-created"
nextUnits:
  - slug: "generate-document"
    label: "Generate a document"
deepLinks:
  - label: "API Overview"
    url: "/en/docs/api-overview"
  - label: "Environments"
    url: "/en/docs/environments"
tags:
  - getting-started
  - technical
sortOrder: 3
---

## Integrating with workflows

Epistola is designed to be orchestrated, not to orchestrate. It exposes a narrow API surface — JSON in, PDF out — so it fits naturally into any workflow engine.

### Common Ground integration

For Dutch municipalities using Common Ground platforms, Epistola provides out-of-the-box integration with:

- **Valtimo** — Configure the Epistola plugin to trigger document generation from process tasks
- **GZAC** — Map case data to template schemas and generate documents as part of zaakgericht werken

### REST API integration

For any other system, use the REST API directly:

```http
POST /api/v1/templates/{slug}/render
Content-Type: application/json

{
  "data": {
    "recipientName": "Jan de Vries",
    "decisionDate": "2026-04-08",
    "subject": "Building permit approval"
  }
}
```

The API validates your payload against the template's JSON Schema and returns a rendered PDF.

### Environment promotion

Templates move through environments (e.g. development → acceptance → production). Each environment has its own active version pointer, so you can test new versions without affecting production.

### Next step

Now that your workflow is set up, let's generate an actual document.
