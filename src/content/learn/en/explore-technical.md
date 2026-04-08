---
title: "Technical architecture"
summary: "Understand how Epistola is built — from the editor to the render engine."
videoUrl: ""
posterImage: ""
nextUnits:
  - slug: "welcome"
    label: "Back to start"
  - slug: "create-template"
    label: "Create a template"
deepLinks:
  - label: "API Overview"
    url: "/en/docs/api-overview"
  - label: "Multi-tenancy"
    url: "/en/docs/multi-tenancy"
  - label: "Rendering"
    url: "/en/docs/rendering"
tags:
  - technical
sortOrder: 5
---

## Architecture overview

Epistola follows a DocOps architecture: a single lane from template authoring to document delivery, with clear boundaries between components.

### The stack

- **Epistola Suite** — Kotlin 2 + Spring Boot 4 monorepo with Thymeleaf server-side rendering and HTMX for interactivity
- **Template editor** — Lit + ProseMirror web components for rich template editing
- **Render engine** — iText for PDF generation with 50–200ms render times
- **API layer** — OpenAPI 3.1 specification with generated server stubs and client libraries

### Key design decisions

#### Contract-first API

The OpenAPI specification in `epistola-contract` is the single source of truth. Server stubs and client libraries are generated from it, ensuring perfect alignment between API consumers and providers.

#### Immutable template versions

Once a template version is published, it's locked. The theme snapshot and schema hash are frozen so that every render request can be reproduced — even years later.

#### Multi-tenant by default

Templates, themes, and configurations are scoped per tenant. Keycloak handles authentication, and each tenant gets isolated data without separate deployments.

### Deployment

Epistola ships as Docker containers with Helm charts for Kubernetes deployment. Health probes, metrics, and structured logging are built in, so it fits naturally into your existing platform infrastructure.

### Open source

The entire stack is open source. You can self-host with full control over your data, or use the managed service for hands-off operation.
