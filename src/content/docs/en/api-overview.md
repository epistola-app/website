---
title: "API Overview"
description: "REST API structure, versioned media type, authentication, and roles."
section: "platform"
sortOrder: 18
---

## API Overview

Epistola exposes a REST API defined by an OpenAPI 3.1 specification. The API is the primary integration point for workflow engines, applications, and automation.

### REST API structure

The API is organized around resources:

- `/templates` — Template CRUD and listing
- `/templates/{slug}/variants` — Variant management
- `/templates/{slug}/render` — Document generation
- `/jobs` — Job status and management
- `/assets` — Asset upload and retrieval
- `/themes` — Theme management

### Versioned media type

API versioning uses content negotiation via the `Accept` header. Clients specify the API version they support, and the server responds with the appropriate representation.

### Authentication

All API requests require authentication via bearer tokens issued by Keycloak. Tokens carry the tenant context and user roles, ensuring proper scoping and authorization.

### Roles

Epistola defines several roles:

| Role | Capabilities |
|---|---|
| **Viewer** | Read templates and download generated documents |
| **Author** | Create and edit template drafts |
| **Publisher** | Publish versions and manage environment activations |
| **Admin** | Manage tenant settings, attributes, and user access |

Roles are assigned through Keycloak and enforced at the API level.
