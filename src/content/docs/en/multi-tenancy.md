---
title: "Multi-tenancy"
description: "Tenant-scoped resources with slug identifiers, data isolation, tenant switcher, and per-tenant dashboards."
section: "platform"
sortOrder: 17
---

## Multi-tenancy

Epistola is multi-tenant by default. Tenants are the top-level organizational unit, and every resource — templates, themes, assets, environments, attributes — is scoped to a tenant.

### Tenant identifiers

Each tenant has a slug identifier: 3–63 characters, kebab-case (e.g., `gemeente-amsterdam`). The slug appears in all API paths and is the primary key for tenant scoping.

### Data isolation

All resources are tenant-scoped. Data isolation is enforced at the business logic layer — there is no cross-tenant data access. A template slug like `decision-letter` is unique within a tenant but can exist independently in other tenants.

### In the UI

- **Tenant list page** — A standalone page (outside the main application shell) showing all tenants the user has access to
- **Tenant switcher** — Located in the navigation bar (top right), allowing quick switching between tenants without leaving the application
- **Tenant dashboard** — Each tenant has its own dashboard with statistics and quick-action shortcuts for common tasks
