---
title: "Generate a document"
summary: "Generate documents via the API — sync preview, async generation, batch jobs, and variant resolution."
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
  - label: "API Overview"
    url: "/en/learn/suite/api-overview"
tags:
  - getting-started
  - technical
sortOrder: 6
---

## Generating documents

With a template published and deployed, you can now generate documents by sending data to the Epistola API. This is the payoff — you built a template, now produce output.

### Three generation modes

#### Synchronous preview

Used during editing. The editor sends preview requests and receives rendered output directly. Rate-limited and non-PDF/A — designed for fast iteration, not production.

#### Asynchronous single document

For production use. Submit a render request with the template slug and data payload:

```http
POST /api/tenants/{tenantId}/generation/generate
Content-Type: application/vnd.epistola.v1+json

{
  "templateSlug": "decision-letter",
  "environment": "production",
  "data": {
    "recipientName": "Jan de Vries",
    "decisionDate": "2026-04-08",
    "subject": "Building permit approval"
  }
}
```

You receive a job ID immediately. The document renders in the background and produces a PDF/A-compliant PDF.

#### Asynchronous batch

For high-volume scenarios. Submit an array of documents in a single request. Each document is tracked as a separate batch item with its own status.

### Variant resolution

You can specify a variant explicitly by ID, or provide attributes for automatic resolution. The resolver scores all variants against your attributes and picks the best match, falling back to the default variant.

### Job tracking

Every generation request creates a job that moves through: PENDING → IN_PROGRESS → COMPLETED | FAILED | CANCELLED. The generation history dashboard shows stats, most-used templates, and recent jobs with color-coded status badges.

### What you get

- A production-ready PDF matching your template design
- An audit trail linking the document to its template version, schema, and input data
- Reproducibility — the same input always produces the same output
