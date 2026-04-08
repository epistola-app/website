---
title: "Variants"
description: "Presentation variations of a template with attribute-based resolution, scoring, and default fallback."
section: "core-concepts"
sortOrder: 3
---

## Variants

Variants are presentation variations of a single template. A `decision-letter` template might have variants for Dutch, English, corporate branding, or consumer branding — each sharing the same data contract but with its own layout and styling.

### Variant properties

Each variant has:

- **Title** — A display name (e.g., "Dutch — Corporate")
- **Slug** — A unique identifier within the template
- **Attributes** — Key-value pairs drawn from the tenant's attribute definitions (e.g., `language=nl`, `brand=corporate`)
- **Default flag** — Exactly one variant per template is marked as default

### Variant resolution

When a render request provides attributes instead of a specific variant ID, the resolver automatically selects the best match:

1. **Filter** — Eliminate variants that lack any required attribute from the request
2. **Score** — Award points for matching optional attributes (weighted 10x) with attribute count as tiebreaker
3. **Select** — Pick the highest-scoring variant
4. **Fallback** — If no candidates remain, use the default variant

This lets API consumers describe intent (e.g., "Dutch, business brand") without knowing specific variant IDs.

### In the UI

Variants appear as cards on the Variants tab of the template detail page. Each card shows:

- The variant title and slug
- Attribute badges for assigned key-value pairs
- Status badges showing draft and published version counts
- Inline editing for title, slug, and attributes

Use the attribute filter above the cards to narrow the list by specific attribute values.
