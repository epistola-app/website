---
title: "Variants"
description: "Multiple presentations of a template, attribute matching, and the variant resolver."
section: "core-concepts"
sortOrder: 2
---

## Variants

Variants allow a single template to produce different document presentations based on context — such as language, brand, or channel.

### Multiple presentations

A template can have any number of variants. Each variant shares the parent template's data contract but maintains its own layout, styling, and version history.

For example, a `decision-letter` template might have:

- `nl-default` — Dutch version with municipal branding
- `en-default` — English translation
- `nl-business` — Dutch version with business unit branding

### Attributes

Variants are tagged with attributes — key-value pairs that describe their characteristics (e.g., `language=nl`, `brand=business`). These attributes drive the automatic variant resolution process.

### Default variant

Every template must have exactly one default variant. The default is used as a fallback when no other variant matches the requested attributes.

### Resolution algorithm

When a render request includes attributes instead of a specific variant ID, the resolver:

1. **Filters** — Removes variants missing any required attribute
2. **Scores** — Awards points for optional attribute matches and specificity
3. **Selects** — Picks the highest-scoring variant
4. **Falls back** — Uses the default variant if no candidates remain

This lets API consumers describe their intent (e.g., "Dutch, business brand") without knowing the exact variant ID.
