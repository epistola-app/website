---
title: "Rendering"
description: "iText PDF engine, HTML fallback, and PDF/A compliance."
section: "generation"
sortOrder: 13
---

## Rendering

Epistola uses the iText PDF library as its primary rendering engine, producing high-fidelity PDF documents from template definitions and data payloads.

### iText PDF engine

The iText engine handles:

- **Layout** — Precise page layout matching the template design
- **Typography** — Font embedding, kerning, and Unicode support
- **Graphics** — Images, QR codes, and vector elements
- **Performance** — Typical render times of 50–200ms per document

### HTML fallback

For use cases that don't require PDF output, Epistola can render templates to HTML. This is useful for:

- Web-based document previews
- Email body generation
- Accessibility scenarios where HTML is preferred

### PDF/A compliance

Epistola supports PDF/A output for long-term archival compliance. PDF/A documents:

- Embed all fonts and resources
- Avoid external dependencies
- Include document metadata
- Meet ISO 19005 archival standards

This is critical for government and regulated industries where documents must be reproducible and accessible for decades.
