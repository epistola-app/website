---
title: "Publish and deploy"
summary: "Publish a draft version, deploy to environments via the deployment matrix, and manage the version lifecycle."
videoUrl: ""
videoBrief: "25-second screen recording: open the version history, publish a draft version, then switch to the Deployments tab showing the deployment matrix. Select the newly published version in a cell to deploy it to an environment. Show the status updating."
posterImage: ""
sandboxCheckpointId: "version-published"
nextUnits:
  - slug: "connect-to-workflow"
    label: "Connect to a workflow"
deepLinks:
  - label: "Versions"
    url: "/en/learn/suite/versions"
  - label: "Environments"
    url: "/en/learn/suite/environments"
  - label: "Deployment Matrix"
    url: "/en/learn/suite/deployment-matrix"
  - label: "Version Comparison"
    url: "/en/learn/suite/version-comparison"
tags:
  - getting-started
sortOrder: 4
---

## Publishing and deploying

With your template designed in the editor, the next step is to publish the draft and deploy it to an environment where it can serve real document generation requests.

### Publishing a version

A draft version is your work in progress — editable and not yet available for rendering. When you're satisfied with the content, publish it:

- The draft becomes **Published**: its layout, theme snapshot, and schema hash are frozen
- The content is now immutable — the same input will always produce the same output
- A new draft can be created for the next round of changes

### The deployment matrix

Navigate to the Deployments tab on the template detail page. The deployment matrix shows:

- **Rows** — One per variant
- **Columns** — One per environment (e.g., Development, Acceptance, Production)
- **Cells** — The active version for each variant/environment pair

Select a version in any cell to deploy it immediately — the change takes effect via HTMX with no page reload.

### Version comparison

Before deploying, you can compare two versions side by side. The comparison dialog renders both versions with the same data example and displays them as PDFs in a fullscreen view. Access it from the Compare button in the deployment matrix.

### The version lifecycle

Versions move through three states:

1. **DRAFT** — Editable, at most one per variant
2. **PUBLISHED** — Frozen and immutable, available for deployment
3. **ARCHIVED** — Read-only, preserved for audit and historical reference

### Next steps

Your template is published and deployed. Now let's generate an actual document from it.
