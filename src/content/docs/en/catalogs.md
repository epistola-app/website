---
title: "Catalogs"
description: "Local and imported catalogs, versioned releases, and resource exchange."
section: "platform"
sortOrder: 16
---

## Catalogs

Catalogs provide a mechanism for sharing and distributing template resources between tenants and organizations.

### Local catalogs

Every tenant has a local catalog containing their own templates, stencils, and themes. The local catalog is the default working space for template authors.

### Imported catalogs

Tenants can import catalogs from other organizations or from a central template library. Imported catalog items are read-only within the importing tenant but can be used as starting points:

- Import a stencil and insert it into local templates
- Import a theme and extend it with tenant-specific overrides
- Import a template as a reference for creating local variants

### Versioned releases

Catalogs support versioned releases. A publisher can:

1. Curate a set of templates, stencils, and themes
2. Tag them as a versioned release (e.g., v1.0, v2.0)
3. Distribute the release to subscribing tenants

Subscribers receive the update and can choose when to adopt new versions.

### Resource exchange

Catalogs enable a resource exchange model where central teams (e.g., a shared services organization) publish standard document templates that individual tenants consume and customize.
