---
title: "Environments"
description: "Deployment targets, version activation, and the activation matrix."
section: "core-concepts"
sortOrder: 4
---

## Environments

Environments represent deployment stages (e.g., development, acceptance, production). Each environment independently controls which template version is active.

### Deployment targets

Typical environments include:

- **Development** — For template authors to test changes
- **Acceptance** — For stakeholders to review before production
- **Production** — Live, serving real document generation requests

### Version activation

Each environment has an active version pointer per variant. Promoting a template means switching this pointer to a newer published version.

- **Promotion** is instant — just update the pointer
- **Rollback** is equally fast — point back to the previous version
- Older versions remain archived and accessible

### Activation matrix

The activation matrix shows which version is active in each environment for every variant. This gives platform teams a clear overview of what's deployed where.

| Variant | Development | Acceptance | Production |
|---|---|---|---|
| nl-default | v5 (draft) | v4 | v3 |
| en-default | v3 (draft) | v2 | v2 |

### Environment isolation

Environments are fully isolated. Activating a new version in development has no effect on production. This lets authors iterate safely without risk to live document generation.
