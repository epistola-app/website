---
title: "Stencils"
description: "Reusable template components with versioning and upgrade propagation."
section: "core-concepts"
sortOrder: 6
---

## Stencils

Stencils are reusable document components that can be shared across templates. They enable consistent building blocks without duplicating content.

### What are stencils?

A stencil is a pre-built document fragment — such as a standard header, footer, signature block, or legal disclaimer. Authors can insert stencils into any template to maintain consistency.

### Versioning

Stencils follow the same versioning model as templates:

- Each stencil has its own version history
- Published versions are immutable
- Updates create new versions without affecting existing usage

### Insert-as-copy

When a stencil is inserted into a template, the content is copied at insertion time. This means:

- The template is self-contained — it doesn't depend on the stencil at render time
- Changes to the stencil don't automatically propagate to existing templates
- Authors can customize the inserted content for their specific template

### Upgrade propagation

When a stencil is updated, authors receive upgrade notifications for templates that use older versions. They can:

- **Review** the changes in the new stencil version
- **Accept** the upgrade to pull in the latest content
- **Skip** the upgrade and keep their current version

This gives teams the benefits of reuse while maintaining control over when changes propagate.
