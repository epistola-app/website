---
title: "Stencils"
description: "Versioned, reusable template components with insert-as-copy semantics and bulk upgrade propagation."
section: "core-concepts"
sortOrder: 9
---

## Stencils

Stencils are versioned, reusable template components — such as address blocks, standard headers, signature blocks, or legal disclaimers. They let teams maintain consistent building blocks across templates.

### Insert-as-copy

When a stencil is inserted into a template, the content is copied at insertion time. The template does not maintain a live reference to the stencil. This means:

- Templates are self-contained at render time
- Changes to the stencil do not automatically propagate
- Authors can customize the inserted content for their specific template

### Version lifecycle

Stencils follow the same version lifecycle as templates:

| State | Description |
|---|---|
| **DRAFT** | Editable, work in progress |
| **PUBLISHED** | Frozen and immutable |
| **ARCHIVED** | Read-only, preserved for audit |

### Upgrade workflow

When a new stencil version is published, authors can propagate the update to templates that use older versions:

1. **Select version** — Choose the new stencil version to propagate
2. **Select templates** — Pick which templates should receive the update
3. **Bulk apply** — Apply the upgrade with progress tracking

### In the UI

- **Stencils list** — Search and filter by tags. Each card shows the stencil name and tag badges
- **Stencil detail page** — Shows version history, a usage tracking table listing all templates that contain the stencil, and the bulk upgrade propagation controls
