---
title: "Environments"
description: "Tenant-scoped deployment targets for version activation and the deployment matrix."
section: "core-concepts"
sortOrder: 6
---

## Environments

Environments are tenant-scoped deployment targets — such as production, staging, or development. They control which template version is active for document generation in each context.

### Environment properties

Each environment has:

- **Slug** — A unique identifier within the tenant (e.g., `production`)
- **Name** — A display name (e.g., "Production")
- **Description** — An optional explanation of the environment's purpose

### Publishing and activation

Publishing a version to an environment freezes the draft and activates it for that specific variant/environment pair. The published version becomes the one used when document generation requests target that environment.

### Environments in the deployment matrix

Environments form the columns of the deployment matrix on the template detail page. Each cell shows which version is active for a given variant in that environment, allowing quick visual comparison of what's deployed where.

### In the UI

The environments list page provides:

- **Search** — Filter environments by name or slug
- **Table view** — Each row shows the environment name, slug, and description

Environments are managed at the tenant level and shared across all templates.
