---
title: "API Overview"
description: "Tenant-scoped REST API with versioned media type, OAuth2/API key auth, role-based access, and resource endpoints."
section: "platform"
sortOrder: 22
---

## API Overview

Epistola exposes a REST API defined by an OpenAPI 3.1 specification. All endpoints are tenant-scoped under `/api/tenants/{tenantId}/...`.

### Versioned media type

The API uses a versioned media type for content negotiation:

```
application/vnd.epistola.v1+json
```

### Authentication

Four authentication methods are supported:

| Method | Use case |
|---|---|
| **OAuth2/OIDC** (Keycloak) | Production single sign-on |
| **API key** (`X-API-Key` header) | Service-to-service integration |
| **JWT bearer tokens** | Direct token authentication |
| **Form login** | Development and demo environments |

### Roles

Access control is role-based:

| Role | Capabilities |
|---|---|
| **reader** | Read templates, view jobs, download documents |
| **editor** | Create and edit template drafts |
| **generator** | Submit render requests and manage jobs |
| **manager** | Publish versions, manage environments and deployments |
| **tenant_control** | Manage tenant settings, attributes, and user access |

### Resource endpoints

The API provides endpoints for:

- **Templates** — CRUD, listing, and search
- **Variants** — Create, update, and manage per template
- **Versions** — Create drafts, publish, archive
- **Themes** — CRUD and listing
- **Environments** — CRUD and listing
- **Attributes** — CRUD and listing
- **Generation** — Preview (sync), generate (async), batch (async)
- **Jobs** — Status, listing, cancellation
- **Documents** — Download generated documents
- **Stencils** — CRUD, versioning, and usage tracking
