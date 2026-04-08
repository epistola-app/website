---
title: "Generate a document"
summary: "Send data to the Epistola API and receive a rendered PDF."
videoUrl: ""
posterImage: ""
sandboxCheckpointId: "document-generated"
nextUnits:
  - slug: "explore-technical"
    label: "Technical architecture"
  - slug: "welcome"
    label: "Back to start"
deepLinks:
  - label: "Document Generation"
    url: "/en/learn/suite/document-generation"
  - label: "Jobs"
    url: "/en/learn/suite/jobs"
  - label: "Rendering"
    url: "/en/learn/suite/rendering"
tags:
  - getting-started
sortOrder: 4
---

## Generating your first document

With a template published and a workflow connected, generating a document is straightforward: send a JSON payload to the render endpoint.

### The render flow

1. **Request** — Your system sends a POST request with the template slug and data payload
2. **Validate** — Epistola validates the payload against the template's JSON Schema
3. **Resolve** — The variant resolver picks the best matching variant based on attributes
4. **Render** — The iText engine processes the template with your data
5. **Return** — You receive a PDF document (typically in 50–200ms)

### What you get

- A pixel-perfect PDF that matches your template design
- An audit trail linking the document to its template version, schema, and input data
- Reproducibility — the same input always produces the same output

### Error handling

If your payload doesn't match the schema, Epistola returns a clear validation error before any rendering happens. This fail-fast approach prevents wasted compute and makes debugging easy.

### Batch generation

Need to generate hundreds of documents? Epistola supports batch operations with webhook callbacks, so your workflow engine gets notified when each document is ready.

### What's next?

Dive into the technical architecture to understand how Epistola is built, or head back to the start to explore a different path.
