---
title: "Versions"
description: "Numbered version lifecycle per variant: Draft, Published, and Archived states with immutability guarantees."
section: "core-concepts"
sortOrder: 4
---

## Versions

Every variant maintains a numbered version history. Versions range from 1 to 200 per variant and move through a strict lifecycle that ensures reproducibility and auditability.

### Lifecycle states

| State | Editable | Description |
|---|---|---|
| **DRAFT** | Yes | Work in progress. At most one draft per variant at any time. Can be edited and previewed. |
| **PUBLISHED** | No | Frozen and immutable. Content, theme snapshot, and schema hash are locked. Can be previewed or archived. |
| **ARCHIVED** | No | Read-only, preserved for audit. Can only be previewed. |

### Immutability

Once a version is published, its content cannot change. The layout, theme snapshot, and schema hash are all frozen. This guarantees that the same input data always produces the same output, even years later.

### Version numbering

Versions are numbered sequentially within each variant (v1, v2, v3, ...). Each new draft automatically receives the next available number.

### In the UI

The version history dialog shows a table with:

- **Version number** and **status badge**
- **Created** and **last-modified timestamps**
- **Actions** that vary by status: draft versions can be edited or previewed, published versions can be previewed or archived, archived versions are preview-only
