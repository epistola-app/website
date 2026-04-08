---
title: "Document Generation"
description: "Sync preview, async single and batch generation, and variant resolution."
section: "generation"
sortOrder: 11
---

## Document Generation

Epistola generates documents by combining a published template version with a JSON data payload. There are several generation modes depending on the use case.

### Sync preview

During template design, the editor provides synchronous preview rendering. Authors see a live preview of their template with sample data, updated in real time as they make changes.

### Async single generation

For production use, documents are generated asynchronously:

1. Submit a render request with the template slug and data payload
2. Receive a job ID immediately
3. Poll or receive a webhook when the document is ready
4. Download the rendered PDF

Typical render times are 50–200ms for a single document.

### Async batch generation

For high-volume scenarios, batch generation processes multiple documents in a single job:

1. Submit a batch request with the template slug and an array of data payloads
2. Each payload becomes a batch item with its own status
3. Webhooks notify your system as items complete
4. Download individual documents or a combined archive

### Variant resolution

Render requests can specify a variant ID directly, or provide attributes for automatic resolution. The variant resolver scores all available variants and picks the best match, falling back to the default variant when no candidates meet the criteria.
