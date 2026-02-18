# Epistola Website

Marketing site for Epistola, the open-source document generator focused on Common Ground–compatible PDF output. The site is built with [Astro](https://astro.build/) and Tailwind CSS.

## Getting Started

```bash
pnpm install
pnpm dev
```

- `pnpm dev` launches the marketing site at `http://localhost:4321`.
- `pnpm build` creates a production bundle inside `dist/`.
- `pnpm preview` serves the production bundle locally.

## Project Structure

```
src/
├── components/     # Marketing UI primitives and sections
├── pages/          # Astro route files for marketing pages
├── styles/         # Global Tailwind styles and design tokens
├── content/        # Markdown sources for the marketing blog
└── lib/            # Shared utilities
```

### Design System

- `src/styles/global.css` defines brand tokens (color, typography, spacing) consumed across every section.
- Shared utility classes such as `.surface-card`, `.cta-primary`, and `.eyebrow` ensure consistency across sections.

### Content

- Marketing pages live inside `src/pages/` and compose section components.
- Blog posts live in `src/content/blog/`.
- Product documentation is now hosted separately at [docs.epistola.app](https://docs.epistola.app).

## Development Guidelines

1. **Components first** – extend or add section components under `src/components/` before duplicating markup in page files.
2. **Tokens only** – when introducing new colors/spacing, add variables to `global.css` instead of using raw values inline.
3. **Accessibility** – verify color contrast (WCAG AA), focus states, and responsive layouts when building new sections.

## Deployment

The project outputs a static bundle that can be deployed to any static host (Netlify, Vercel, Cloudflare Pages, etc.). Ensure `dist/` is uploaded after running `pnpm build`.

For GitHub Pages (published under `/website`), set `DEPLOY_TARGET=gh-pages` before building:

```bash
DEPLOY_TARGET=gh-pages pnpm build
```

## Contributing

1. Create a feature branch.
2. Make changes + keep the design system consistent.
3. Update `CHANGELOG.md` with a summary of your work.
4. Run `pnpm build` before opening a PR.
