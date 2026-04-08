---
title: "Deployment Matrix"
description: "Visual matrix of active versions per variant per environment with inline version selection and auto-deploy."
section: "core-concepts"
sortOrder: 7
---

## Deployment Matrix

The deployment matrix provides a visual overview of which version is active for each variant in each environment. It is the central control surface for managing deployments.

### Matrix layout

The matrix is a table with:

- **Rows** — One row per variant
- **Columns** — One column per environment (e.g., Development, Acceptance, Production)
- **Cells** — Each cell shows the active version number for that variant/environment pair, with a version selector for changing it

### Deploying a version

Changing the version in any cell triggers an auto-deploy via HTMX. The selected version becomes the active version for that variant in that environment immediately — no separate publish step is needed.

### Access

The deployment matrix is available on the **Deployments** tab of the template detail page. It gives platform teams and template authors a clear, at-a-glance view of what's deployed where.

### Related features

- **Version comparison** — Compare the currently deployed version against another version directly from the matrix
- **Version history** — View the full version history for any variant from its row in the matrix
