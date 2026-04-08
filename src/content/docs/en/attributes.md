---
title: "Attributes"
description: "Tenant-scoped attribute registry with keys, display names, allowed values, and variant classification."
section: "platform"
sortOrder: 18
---

## Attributes

Attributes are a tenant-scoped registry of keys used to classify variants and drive automatic variant resolution.

### Attribute definitions

Each attribute definition has:

- **Key** — A slug identifier (e.g., `language`, `brand`, `channel`)
- **Display name** — A human-readable label (e.g., "Language", "Brand")
- **Allowed values** — An optional list of permitted values. If empty, any value is accepted

### Usage

Attributes serve two purposes:

1. **Variant classification** — Variants are tagged with attribute key-value pairs (e.g., `language=nl`, `brand=corporate`) that describe their characteristics
2. **Automatic variant resolution** — When a render request includes attributes, the resolver matches them against variant attributes to find the best fit

### In the UI

The attributes list page shows a table with columns for:

- **Key** — The attribute slug
- **Display name** — The human-readable label
- **Allowed values** — Displayed as badges

Clicking an attribute opens an edit dialog (loaded via HTMX) for modifying the display name and allowed values.
