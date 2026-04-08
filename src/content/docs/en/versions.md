---
title: "Versions"
description: "Template version lifecycle: Draft, Published, and Archived states."
section: "core-concepts"
sortOrder: 3
---

## Versions

Every variant maintains an immutable version history. Versions move through a strict lifecycle that ensures reproducibility and auditability.

### Lifecycle states

| State | Description |
|---|---|
| **Draft** | Work in progress — editable, not yet available for rendering |
| **Published** | Locked and available for rendering in assigned environments |
| **Archived** | No longer active but preserved for audit and reproduction |

### Immutability

Once a version is published, its content is frozen:

- The template layout is locked
- The theme snapshot is captured
- The schema hash is recorded

This guarantees that the same input data will always produce the same output, even years later.

### Version numbering

Versions are numbered sequentially within each variant (v1, v2, v3, ...). Each new draft automatically receives the next version number.

### Publishing

Publishing a draft version:

1. Locks the layout and theme snapshot
2. Records the schema hash for reproducibility
3. Makes the version available for environment activation
4. Creates an audit trail entry
