---
title: "Advanced Theming Strategies for Epistola Documents"
description: "How to build multi-brand, multi-channel design systems for Epistola templates without duplicating effort."
date: 2026-02-10
updatedDate: 2026-02-10
author: "Epistola Team"
cover: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=630&fit=crop&q=80"
tags: ["document-generation", "design-systems", "theming", "docops", "accessibility"]
---

## Why Theming Matters in DocOps

Document generation spans print-ready PDFs, responsive emails, customer portals, and CRM attachments. Stakeholders expect every output to carry the right typography, colors, spacing, and compliance badges automatically. Rather than cloning templates for every brand or channel, invest in a shared design system the way you would for a product UI.

### Benefits

- **Consistency**: Legal clauses and branded sections look identical across delivery channels.
- **Speed**: Spin up a new partner or locale by swapping tokens, not rewriting markup.
- **Governance**: Centralize approvals for logo usage, disclaimers, and accessibility compliance.
- **Performance**: Reuse render logic so compute and storage stay predictable.

## 1. Define Token Layers

Start with a layered token hierarchy stored in `tokens/`:

```json
{
  "core": {
    "font.family.heading": "IBM Plex Sans",
    "font.family.body": "Source Serif 4",
    "color.text.primary": "#03141d",
    "space.lg": "32px"
  },
  "brand:acme": {
    "color.accent": "#0f7bff",
    "logo.primary": "assets/acme-logo.svg"
  },
  "brand:nova": {
    "color.accent": "#f9622f",
    "logo.primary": "assets/nova-logo.svg"
  }
}
```

Templates read tokens through helpers (`{{ tokens.color.accent }}`), so flipping brands or launching "dark" vs "light" experiences is a configuration change.

## 2. Separate Layout from Content

- **Partial templates** host structural markup (headers, tables, clauses).
- **Content dictionaries** supply localized copy and legal text.
- **Slot APIs** let downstream apps inject custom sections without touching core layouts.

```liquid
{% render "layout/document" with {
  title: i18n.title.invoice,
  headerSlot: block "hero" %}
  <p>{{ copy.hero }}</p>
{% endblock %}
```

## 3. Handle Multi-Channel Nuances

### PDFs / Print

- Use CSS `@page` with margin boxes to control headers/footers.
- Embed fonts so offline readers maintain typography.
- Avoid elements that rely on interaction (accordions, hover states).

### Emails (MJML/HTML)

- Inline CSS and keep width <= 600px.
- Provide text-only fallbacks.
- Test in Litmus or Email on Acid as part of CI.

### DOCX

- Map tokens to DOCX styles using Epistola's Word renderer config.
- Keep table structures simple; nested tables often break.

## 4. Accessibility & Compliance

- Maintain WCAG AA contrast, even for letterhead backgrounds.
- Supply descriptive alt text for logos and hero illustrations.
- Keep font sizes >= 11pt for legal templates.
- Provide machine-readable text; avoid rasterized paragraphs.
- Automate compliance footers by jurisdiction to eliminate manual paste mistakes.

## 5. Advanced Techniques

### Dynamic Palette Generation

Use color math libraries to derive tints/shades automatically:

```ts
import { darken, lighten } from 'polished';

export const palette = (accent: string) => ({
  accent,
  accentDark: darken(0.2, accent),
  accentLight: lighten(0.4, accent),
});
```

Feed this into Liquid filters so tables, callouts, and background chips stay harmonious.

### Conditional Assets

Not every output supports SVG. Provide fallback logic:

```liquid
{% if output == 'pdf' %}
  <img src="{{ tokens.logo.primary }}" width="160" />
{% else %}
  <img src="{{ tokens.logo.png }}" width="160" />
{% endif %}
```

### Theme Switching at Runtime

Expose a `theme` parameter on render jobs:

```json
{
  "template": "invoice",
  "data": { ... },
  "options": { "theme": "brand:nova" }
}
```

The renderer merges `core` tokens with the requested theme so the same template serves multiple business units.

## 6. Testing Strategy

- Snapshot each theme/output combination weekly and compare via CI.
- Lint tokens to ensure every brand overrides the minimum required set.
- Validate fonts/assets exist before publishing new template versions.
- Use Percy/Loki to review HTML previews with different themes.

## 7. Governance Playbook

1. Designers update Figma tokens and sync via API.
2. DocOps runs `pnpm epistola tokens sync` to pull updates.
3. CI runs renders for top ten templates across all themes.
4. Legal/compliance review diffs inside Epistola's preview UI.
5. Templates promote to staging/production with audit logs referencing ticket IDs.

## 8. Troubleshooting

| Symptom | Root Cause | Fix |
| --- | --- | --- |
| Colors look washed out in PDF | RGB palette not converted to CMYK-safe values | Clamp values or provide print-specific palette |
| Email buttons misaligned | Table-based layout missing explicit widths | Add fixed widths + align attributes |
| DOCX bullets wrong font | Theme overrides limited to paragraph styles | Update numbering styles or embed fonts |
| Brand assets missing | CDN blocked by downstream recipients | Use Epistola-managed asset storage + signed URLs |

## Conclusion

When templates, tokens, and delivery rules live together, supporting new brands or compliance requirements stops being a rewrite. Treat document generation theming like any other design system: automate synchronization, enforce governance, and test every channel continuously. Epistola gives you the guardrails—lean on them to move fast without losing trust.
