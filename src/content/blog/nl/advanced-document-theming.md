---
title: "Geavanceerde Theming Strategieën voor Epistola Documenten"
description: "Hoe je multi-brand, multi-channel design systems bouwt voor Epistola templates zonder effort te dupliceren."
date: 2026-02-10
updatedDate: 2026-02-10
author: "Epistola Team"
cover: "/blog/placeholder-theming.svg"
tags: ["document-generation", "design-systems", "theming", "docops", "accessibility"]
locale: nl
---

## Waarom Theming Telt in DocOps

Documentgeneratie omvat print-klare PDFs, responsieve emails, klant portals, en CRM attachments. Stakeholders verwachten dat elke output automatisch de juiste typografie, kleuren, spacing, en compliance badges draagt. In plaats van templates te clonen voor elk merk of kanaal, investeer in een shared design system zoals je zou doen voor een product UI.

### Voordelen

- **Consistentie**: Juridische clausules en branded secties zien er identiek uit over delivery kanalen heen.
- **Snelheid**: Spin up een nieuwe partner of locale door tokens te swappen, niet markup te herschrijven.
- **Governance**: Centraliseer approvals voor logo gebruik, disclaimers, en accessibility compliance.
- **Performance**: Hergebruik render logic zodat compute en storage voorspelbaar blijven.

## 1. Definieer Token Lagen

Begin met een layered token hierarchy opgeslagen in `tokens/`:

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

Templates lezen tokens via helpers (`{{ tokens.color.accent }}`), dus merken flippen of "dark" vs "light" experiences lanceren is een configuratie wijziging.

## 2. Scheiding van Layout en Content

- **Partial templates** hosten structurele markup (headers, tabellen, clausules).
- **Content dictionaries** leveren gelokaliseerde copy en juridische tekst.
- **Slot APIs** laten downstream apps custom secties injecteren zonder core layouts aan te raken.

```liquid
{% render "layout/document" with {
  title: i18n.title.invoice,
  headerSlot: block "hero" %}
  <p>{{ copy.hero }}</p>
{% endblock %}
```

## 3. Omgaan met Multi-Channel Nuances

### PDFs / Print

- Gebruik CSS `@page` met margin boxes om headers/footers te controleren.
- Embed fonts zodat offline readers typografie behouden.
- Vermijd elementen die op interactie vertrouwen (accordions, hover states).

### Emails (MJML/HTML)

- Inline CSS en houd breedte <= 600px.
- Lever text-only fallbacks.
- Test in Litmus of Email on Acid als deel van CI.

### DOCX

- Map tokens naar DOCX styles met Epistola's Word renderer config.
- Houd tabel structuren simpel; geneste tabellen breken vaak.

## 4. Toegankelijkheid & Compliance

- Handhaaf WCAG AA contrast, zelfs voor briefhoofd achtergronden.
- Lever descriptive alt text voor logos en hero illustraties.
- Houd font sizes >= 11pt voor juridische templates.
- Lever machine-readable text; vermijd gerasterde paragrafen.
- Automatiseer compliance footers per jurisdictie om manual paste fouten te elimineren.

## 5. Geavanceerde Technieken

### Dynamische Palette Generatie

Gebruik color math libraries om tints/shades automatisch af te leiden:

```ts
import { darken, lighten } from "polished";

export const palette = (accent: string) => ({
  accent,
  accentDark: darken(0.2, accent),
  accentLight: lighten(0.4, accent),
});
```

Feed dit in Liquid filters zodat tabellen, callouts, en background chips harmonieus blijven.

### Conditionele Assets

Niet elke output ondersteunt SVG. Lever fallback logic:

```liquid
{% if output == 'pdf' %}
  <img src="{{ tokens.logo.primary }}" width="160" />
{% else %}
  <img src="{{ tokens.logo.png }}" width="160" />
{% endif %}
```

### Theme Switching op Runtime

Expose een `theme` parameter op render jobs:

```json
{
  "template": "invoice",
  "data": { ... },
  "options": { "theme": "brand:nova" }
}
```

De renderer merged `core` tokens met het gevraagde theme zodat dezelfde template meerdere business units bedient.

## 6. Testing Strategie

- Snapshot elke theme/output combinatie wekelijks en vergelijk via CI.
- Lint tokens om zeker te zijn dat elk merk de minimum vereiste set override.
- Valideer fonts/assets bestaan voor het publiceren van nieuwe template versies.
- Gebruik Percy/Loki om HTML previews te reviewen met verschillende themes.

## 7. Governance Playbook

1. Designers updaten Figma tokens en sync via API.
2. DocOps runt `pnpm epistola tokens sync` om updates te pullen.
3. CI runt renders voor top tien templates over alle themes.
4. Legal/compliance review diffs binnen Epistola's preview UI.
5. Templates promoveren naar staging/productie met audit logs die ticket IDs refereren.

## 8. Troubleshooting

| Symptoom                       | Root Cause                                    | Fix                                              |
| ----------------------------- | --------------------------------------------- | ------------------------------------------------ |
| Kleuren zien er washed out uit in PDF | RGB palette niet geconverteerd naar CMYK-safe values | Clamp values of lever print-specifieke palette   |
| Email buttons misaligned      | Table-based layout mist expliciete widths    | Voeg fixed widths + align attributen toe              |
| DOCX bullets verkeerd font       | Theme overrides beperkt tot paragraph styles   | Update numbering styles of embed fonts           |
| Brand assets ontbreken          | CDN geblokkeerd door downstream recipients          | Gebruik Epistola-managed asset storage + signed URLs |

## Conclusie

Wanneer templates, tokens, en delivery rules samenleven, stoppen nieuwe merken of compliance vereisten met een rewrite zijn. Behandel documentgeneratie theming als elk ander design system: automatiseer synchronisatie, enforce governance, en test elk kanaal continu. Epistola geeft je de guardrails—lean op hen om snel te bewegen zonder vertrouwen te verliezen.
