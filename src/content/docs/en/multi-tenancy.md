---
title: "Multi-tenancy"
description: "Tenant scoping, data isolation, and tenant management."
section: "platform"
sortOrder: 14
---

## Multi-tenancy

Epistola is multi-tenant by default. Every resource — templates, themes, assets, and configurations — is scoped to a tenant.

### Tenant scoping

All API operations are scoped to the authenticated tenant. A template slug like `decision-letter` is unique within a tenant but can exist independently in other tenants.

### Data isolation

Tenants are fully isolated:

- **Templates** — Each tenant manages its own template library
- **Themes** — Tenant-specific styling and branding
- **Assets** — Uploaded images and resources are tenant-scoped
- **Configurations** — Attributes, environments, and settings per tenant

There is no cross-tenant data access. The platform enforces isolation at the API and database level.

### Tenant management

Tenants are managed through Keycloak:

- Each tenant maps to a Keycloak realm or group
- Users authenticate via SSO and are automatically scoped to their tenant
- Role-based access control governs who can author, publish, and manage templates

Platform operators can onboard new tenants without deploying additional infrastructure.
