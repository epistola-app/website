---
title: "Technische architectuur"
summary: "Begrijp hoe Epistola is gebouwd — van de editor tot de render-engine."
videoUrl: ""
posterImage: ""
nextUnits:
  - slug: "welcome"
    label: "Terug naar start"
  - slug: "generate-document"
    label: "Genereer een document"
deepLinks:
  - label: "API-overzicht"
    url: "/nl/learn/suite/api-overview"
  - label: "Multi-tenancy"
    url: "/nl/learn/suite/multi-tenancy"
  - label: "Rendering"
    url: "/nl/learn/suite/rendering"
  - label: "Expressies"
    url: "/nl/learn/suite/expressions"
tags:
  - technical
sortOrder: 5
---

## Architectuuroverzicht

Epistola volgt een DocOps-architectuur: een enkele lane van template-authoring tot documentlevering, met duidelijke grenzen tussen componenten.

### De stack

- **Epistola Suite** — Kotlin 2 + Spring Boot 4 monorepo met Thymeleaf server-side rendering en HTMX voor interactiviteit
- **Template-editor** — Lit + ProseMirror webcomponenten ingebed in de Suite voor rijke WYSIWYG-editing
- **Render-engine** — iText Core 9.5.0 voor directe PDF-generatie (10–200ms typisch). Playwright + HTML fallback voor complexe CSS-lay-outs
- **API-laag** — OpenAPI 3.1-specificatie met versiebeheerd mediatype `application/vnd.epistola.v1+json`. Gegenereerde server stubs en clientbibliotheken

### Multi-tenancy

Alle resources zijn tenant-scoped met data-isolatie afgedwongen op de businesslogicalaag. Tenants hebben slug-identifiers (3–63 tekens, kebab-case), een wisselaar in de navigatiebalk en per-tenant dashboards.

### Expressietalen

Templates ondersteunen drie expressietalen: JSONata (standaard, Dashjoin-implementatie), JavaScript (GraalJS gesandboxed) en Eenvoudig Pad (dot-path traversal). Alle expressies worden server-side geëvalueerd bij rendering.

### Authenticatie en rollen

OAuth2/OIDC (Keycloak), API-sleutel, JWT bearer tokens of formulierinlog. Vijf rollen beheren toegang: reader, editor, generator, manager en tenant_control.

### PDF/A-compliance

PDF/A-2b-compliance is schakelbaar per template en produceert archiveringstandaard-documenten met ingebedde lettertypen en metadata.

### Open source

De volledige stack is open source. Self-host met volledige controle, of gebruik de managed service voor hands-off operatie.
