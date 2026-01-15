---
title: "Getting Started with Epistola Suite - Complete Setup Guide"
description: "Learn how to quickly set up and customize your Epistola documentation site. This comprehensive guide covers installation, configuration, customization, and deployment."
date: 2024-01-15
author: "Epistola Team"
cover: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop&q=80"
tags: ["getting-started", "tutorial", "setup", "documentation"]
---

## Introduction

Welcome to Epistola Suite! This guide will walk you through the complete setup process, from installation to deployment. Whether you're a developer setting up documentation for the first time or an experienced professional looking to customize your setup, this guide has you covered.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **pnpm** (recommended) or npm/yarn
- **Git** for version control

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/epistola-app/epistola-suite.git
cd epistola-suite
```

### Step 2: Install Dependencies

Using pnpm (recommended):

```bash
pnpm install
```

Or using npm:

```bash
npm install
```

### Step 3: Start Development Server

```bash
pnpm dev
```

Your documentation site is now running at `http://localhost:4321`!

## Project Structure

Understanding the project structure is key to effective customization:

```
epistola-suite/
├── src/
│   ├── content/
│   │   └── docs/           # Documentation markdown files
│   ├── pages/              # Astro pages
│   ├── components/         # Reusable components
│   ├── styles/             # Global styles
│   └── content.config.ts   # Content collections config
├── public/                 # Static assets
├── astro.config.mjs        # Astro configuration
└── package.json
```

## Configuration

### Site Settings

Configure your site in `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://your-domain.com',
  base: '/',
  integrations: [
    starlight({
      title: 'Your Documentation',
      social: {
        github: 'https://github.com/your-org/repo',
      },
    }),
  ],
});
```

### Custom CSS

Add custom styles in `src/styles/custom.css`:

```css
/* Custom color overrides */
:root {
  --accent: #055e68;
  --accent-light: #b9d2d2;
}

/* Dark mode colors */
.dark {
  --accent: #62a388;
  --accent-light: #b9d2d2;
}
```

## Writing Documentation

### Creating a New Page

1. Create a markdown file in `src/content/docs/`:

```markdown
---
title: "My New Page"
description: "A short description"
---

## Introduction

Your content here...
```

2. The file automatically becomes available at `/docs/my-new-page`

### Using Components

Epistola Suite includes useful components:

```markdown
import { Steps } from '@astrojs/starlight/components';

<Steps>
1. First step
2. Second step
3. Third step
</Steps>
```

### Adding Images

Place images in `public/` or `src/assets/`:

```markdown
![Alt text](/images/my-image.png)
```

## Customization

### Theming

Epistola Suite supports custom themes. Enable a theme in your configuration:

```javascript
starlight({
  plugins: [
    starlightThemeFlexoki(),
  ],
});
```

### Adding Components

Create custom components in `src/components/`:

```astro
---
// src/components/MyComponent.astro
---
<div class="my-component">
  <slot />
</div>
```

Then use it in your markdown:

```markdown
import MyComponent from '../../components/MyComponent.astro';

<MyComponent>
Custom content here
</MyComponent>
```

## Deployment

### Building for Production

Generate static files:

```bash
pnpm build
```

Output is in the `dist/` directory.

### Deploy Options

#### GitHub Pages

1. Set `base` in `astro.config.mjs` to your repo path
2. Add deployment script to `package.json`:

```json
{
  "scripts": {
    "build": "astro build",
    "deploy": "npx gh-pages -d dist"
  }
}
```

3. Run:

```bash
pnpm build && pnpm deploy
```

#### Vercel

Connect your repository to Vercel for automatic deployments.

#### Netlify

Use the Netlify CLI or connect your Git repository.

## Best Practices

### Writing Clear Documentation

- Use descriptive titles
- Include code examples
- Add screenshots when helpful
- Keep content up to date

### Version Control

- Use meaningful commit messages
- Create branches for new features
- Review changes before merging

### Performance

- Optimize images before adding
- Use lazy loading for large assets
- Monitor bundle size

## Troubleshooting

### Common Issues

#### "Module not found" errors

Run `pnpm install` to ensure all dependencies are installed.

#### Styles not applying

Check that your custom CSS is properly imported in `astro.config.mjs`.

#### Build failures

Run `pnpm build` locally to see detailed error messages.

### Getting Help

- Check the FAQ section
- Search existing issues on GitHub
- Open a new issue for bugs

## Conclusion

Epistola Suite provides a powerful foundation for your documentation needs. With this guide, you should be able to:

- Set up a new documentation site
- Customize the appearance and behavior
- Write and organize documentation effectively
- Deploy your site to production

Continue exploring the documentation to learn more advanced features and customization options. Happy documenting!
