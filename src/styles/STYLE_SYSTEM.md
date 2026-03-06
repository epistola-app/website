# Style System

This project now uses a **Peach Paper** visual direction for section surfaces in both light and dark themes.

## Core Principles

1. Use semantic CSS variables from `src/styles/global.css`.
2. Use reusable components (`Card`, `Button`, `Title`) instead of one-off style blocks.
3. Keep dark theme parity by always defining light + dark token values.
4. Avoid ad-hoc gradient strings in section markup. Use gradient tokens.
5. Keep uppercase tracking restrained; avoid wide letter spacing.

## Theme Tokens

Primary Peach Paper tokens:

- `--gradient-peach-paper`
- `--gradient-peach-paper-card`
- `--gradient-peach-paper-soft`
- `--gradient-peach-paper-deep`
- `--color-peach-paper-accent`
- `--color-peach-paper-heading`
- `--color-peach-paper-copy`
- `--color-peach-paper-surface`
- `--color-peach-paper-surface-soft`
- `--color-peach-paper-border`
- `--color-peach-paper-border-soft`
- `--color-peach-paper-border-strong`
- `--color-peach-paper-chip-bg`
- `--color-peach-paper-chip-text`

All of these tokens are defined in both `:root` and `:root[data-theme="dark"]`.

## Component Usage

- `src/components/ui/card.astro`
  - Variants: `default`, `subtle`, `brand`, `outline`
  - Controls: `padding`, `radius`, `shadow`, `as`
- `src/components/ui/button.astro`
  - Variants: `primary`, `secondary`, `link`
  - Sizes: `sm`, `md`, `lg`
- `src/components/ui/title.astro`
  - Unified heading primitive for `h1` through `h6`

## Gradient Policy

- Use gradient tokens from `global.css` for section backgrounds.
- Keep gradients subtle and low-noise.
- Do not add new gradients directly inside random sections without adding a token first.

## Typography Tracking

- Prefer custom tracking values between `0.08em` and `0.16em` for uppercase UI labels.
- Avoid large tracking values (`>= 0.3em`) and `tracking-widest` for core UI text.

## Review and Iteration

- Keep Peach Paper as the baseline surface direction unless we intentionally revise the palette.
- When introducing a new gradient direction, add tokens first and test light + dark before usage.
- Remove unused tokens and references quickly to keep the style system focused.
