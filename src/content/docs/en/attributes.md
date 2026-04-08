---
title: "Attributes"
description: "Tenant-level attribute definitions, allowed values, and variant matching."
section: "platform"
sortOrder: 15
---

## Attributes

Attributes are tenant-level key-value definitions used to tag variants and drive automatic variant resolution.

### Tenant-level definitions

Each tenant defines its own set of attributes. Common examples include:

- `language` — Document language (nl, en, de, ...)
- `brand` — Business unit or brand identity
- `channel` — Output channel (print, email, web)

### Allowed values

Attributes can have a defined set of allowed values. This prevents typos and ensures consistency across templates and API calls.

For example, a `language` attribute might allow: `nl`, `en`, `de`, `fr`.

### Variant matching

When a render request includes attributes, the variant resolver uses them to find the best matching variant:

1. **Required attributes** — The request marks certain attributes as required; variants missing these are eliminated
2. **Optional attributes** — Additional attributes that improve the match score
3. **Scoring** — Variants receive points for matching optional attributes and for specificity

This mechanism lets API consumers describe their intent without coupling to specific variant IDs.
