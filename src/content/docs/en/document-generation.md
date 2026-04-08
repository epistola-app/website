---
title: "Document Generation"
description: "Three generation modes — sync preview, async single, async batch — with variant resolution and schema validation."
section: "generation"
sortOrder: 14
---

## Document Generation

Epistola generates documents by combining a published template version with a JSON data payload. Three generation modes serve different use cases.

### Synchronous preview

Used during template editing in the Suite. The editor sends preview requests and receives rendered output directly. Preview mode is rate-limited and does not produce PDF/A-compliant output.

### Asynchronous single document

For production use. Submit a render request and receive a job ID immediately. The document is rendered in the background and produces a PDF/A-compliant, production-ready PDF.

### Asynchronous batch

For high-volume scenarios. Submit an array of documents in a single request and receive a single job ID. Each document is tracked as a separate batch item with its own status.

### Features

- **Variant resolution** — Specify a variant explicitly by ID, or provide attributes for automatic resolution via the scoring algorithm
- **Environment selection** — Target a specific environment to use the version deployed there
- **JSON Schema validation** — The data payload is validated against the template's data contract before rendering begins
- **Customizable filename** — Set a custom filename for the generated document
- **Correlation ID** — Attach a correlation ID for tracing through your systems

### In the UI

The generation history dashboard shows:

- **Stats cards** — Total jobs, queued, completed, and failed counts
- **Most-used templates** — A table of the most frequently generated templates
- **Recent jobs** — A filterable table of recent generation jobs with status badges
