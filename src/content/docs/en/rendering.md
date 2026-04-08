---
title: "Rendering"
description: "iText Core PDF engine, Playwright HTML fallback, PDF/A-2b compliance, and output formats."
section: "generation"
sortOrder: 16
---

## Rendering

Epistola uses iText Core 9.5.0 (Kotlin) as its primary rendering engine, producing PDF documents directly from the template's node/slot graph.

### Primary engine: iText

The iText engine maps the template's internal node/slot graph directly to iText layout elements. Key characteristics:

- **Fast** — Typical render times of 10–200ms per document
- **Pure JVM** — No external processes or dependencies required
- **Direct mapping** — Template nodes convert directly to iText elements without an intermediate representation

### Rendering features

- **Automatic page headers and footers** — Rendered via iText event handlers, repeating on every page
- **Automatic pagination** — Content flows across pages with configurable spacing between blocks
- **Cascade-resolved styles** — The full style cascade (theme → template → preset → inline) is resolved at render time
- **Server-side expression evaluation** — All expressions are evaluated on the server before rendering

### PDF/A-2b compliance

PDF/A compliance can be toggled per template in the settings tab. When enabled, the engine produces documents conforming to the PDF/A-2b standard — embedding all fonts, avoiding external dependencies, and including required metadata for long-term archival.

### Fallback: Playwright + HTML

For layouts requiring complex CSS that the iText engine does not support, a fallback path uses Playwright to render HTML to PDF. This is slower but handles edge cases involving advanced CSS layouts.

### Output formats

- **PDF** — The default output format, used for production documents
- **HTML** — Available for email body generation and web-based previews
