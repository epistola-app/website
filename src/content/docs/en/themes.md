---
title: "Themes"
description: "Style definitions, page settings, the style cascade, and theme selection."
section: "core-concepts"
sortOrder: 5
---

## Themes

Themes define the visual styling of documents — fonts, colors, spacing, page dimensions, and more. They cascade from tenant to template to variant.

### Style definitions

A theme includes:

- **Typography** — Font families, sizes, line heights
- **Colors** — Text, accent, border, and background colors
- **Page settings** — Paper size, margins, orientation
- **Spacing** — Section gaps, paragraph spacing, list indentation

### Page settings

Themes control physical page properties:

- Paper size (A4, Letter, custom)
- Margins (top, bottom, left, right)
- Orientation (portrait, landscape)
- Header and footer dimensions

### Style cascade

Themes cascade through three levels:

1. **Tenant default** — Base theme applied to all templates within a tenant
2. **Template override** — Template-specific adjustments (e.g., add watermark)
3. **Variant tweak** — Variant-specific refinements (e.g., switch heading font for a brand)

Each level inherits from the one above and can override specific properties.

### Theme selection

When a version is published, the active theme is snapshotted and frozen with the version. This ensures that rendering is deterministic — the same version always uses the same theme, regardless of later theme changes.
