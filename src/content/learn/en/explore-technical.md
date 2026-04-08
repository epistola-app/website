---
title: "Technical architecture"
summary: "Understand how Epistola is built — from the editor to the render engine."
videoUrl: ""
videoBrief: "30-second animated diagram or screen recording: show the architecture flow — API request comes in, variant resolution picks the right template, the iText engine renders a PDF, the response goes back. Optionally show the multi-tenant isolation and environment concept."
posterImage: ""
nextUnits:
  - slug: "welcome"
    label: "Back to start"
  - slug: "generate-document"
    label: "Generate a document"
deepLinks:
  - label: "API Overview"
    url: "/en/learn/suite/api-overview"
  - label: "Multi-tenancy"
    url: "/en/learn/suite/multi-tenancy"
  - label: "Rendering"
    url: "/en/learn/suite/rendering"
  - label: "Expressions"
    url: "/en/learn/suite/expressions"
tags:
  - technical
sortOrder: 5
---

## Architecture overview

Epistola follows a DocOps architecture: a single lane from template authoring to document delivery, with clear boundaries between components.

### The stack

- **Epistola Suite** — Kotlin 2 + Spring Boot 4 monorepo with Thymeleaf server-side rendering and HTMX for interactivity
- **Template editor** — Lit + ProseMirror web components embedded in the Suite for rich WYSIWYG editing
- **Render engine** — iText Core 9.5.0 for direct PDF generation (10–200ms typical). Playwright + HTML fallback for complex CSS layouts
- **API layer** — OpenAPI 3.1 specification with versioned media type `application/vnd.epistola.v1+json`. Generated server stubs and client libraries

### Multi-tenancy

All resources are tenant-scoped with data isolation enforced at the business logic layer. Tenants have slug identifiers (3–63 chars, kebab-case), a switcher in the navigation bar, and per-tenant dashboards.

### Expression languages

Templates support three expression languages: JSONata (default, Dashjoin implementation), JavaScript (GraalJS sandboxed), and Simple Path (dot-path traversal). All expressions are evaluated server-side at render time.

### Authentication and roles

OAuth2/OIDC (Keycloak), API key, JWT bearer tokens, or form login. Five roles control access: reader, editor, generator, manager, and tenant_control.

### PDF/A compliance

PDF/A-2b compliance is toggleable per template, producing archival-standard documents with embedded fonts and metadata.

### Open source

The entire stack is open source. Self-host with full control, or use the managed service for hands-off operation.
