---
title: "Themes"
description: "Reusable style definitions with document styles, page settings, block style presets, and a multi-level style cascade."
section: "core-concepts"
sortOrder: 8
---

## Themes

Themes are reusable style definitions shared across templates. A theme controls how documents look — from typography and colors to page dimensions and block-level formatting.

### What a theme contains

- **Document styles** — Typography (font families, sizes, line heights), colors (text, accent, border, background), and alignment defaults
- **Page settings** — Paper format (A4, Letter, etc.), orientation (portrait, landscape), and margins (top, bottom, left, right)
- **Block style presets** — Named style sets per block type, allowing consistent formatting across blocks of the same type
- **Spacing unit** — A base unit in points used to derive consistent spacing throughout the document

### Style cascade

Styles resolve through a four-level cascade:

1. **Theme document styles** — The base styles from the selected theme
2. **Template document style overrides** — Template-specific adjustments
3. **Block style preset** — The named preset applied to a specific block
4. **Block inline styles** — Per-block overrides set directly in the editor

Each level inherits from the one above and can override specific properties.

### Theme selection cascade

The theme used for rendering resolves through three levels:

1. **Variant-level override** — If the variant specifies a theme, that theme is used
2. **Template-level** — If no variant override, the template's default theme applies
3. **Tenant default** — If neither variant nor template specifies a theme, the tenant's default theme is used

### In the UI

The themes list page shows all themes with search filtering. The theme editor is an embedded web component that provides visual editing of all theme properties — typography, colors, page settings, and block style presets.
