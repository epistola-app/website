---
title: "Edit in the visual editor"
description: "Design your template with the WYSIWYG editor — blocks, expressions, live preview, and autosave."
videoUrl: ""
videoBrief: "40-second screen recording: open the visual editor showing the split view. Add a text block with an expression chip (e.g. {{customer.name}}), drag a block to reorder, switch to a different data example to see the preview update live. Show the PDF preview panel rendering in real time."
posterImage: ""
sandboxCheckpointId: "editor-open"
nextUnits:
  - slug: "publish-and-deploy"
    label: "Publish and deploy"
  - slug: "explore-technical"
    label: "Learn about expressions"
deepLinks:
  - label: "Editor Overview"
    url: "/en/learn/suite/editor-overview"
  - label: "Block Types"
    url: "/en/learn/suite/block-types"
  - label: "Expressions"
    url: "/en/learn/suite/expressions"
  - label: "Rich Text"
    url: "/en/learn/suite/rich-text"
tags:
  - getting-started
sortOrder: 3
---

## The visual editor

The Epistola editor is where templates come to life. It's a full-page WYSIWYG editor with a split view: your template on the left, a live PDF preview on the right.

### Adding blocks

Build your document by adding blocks from the toolbar. The main block types are:

- **Text** — Rich text with bold, italic, lists, and inline expression chips for dynamic data
- **Table** — Structured tables with configurable column widths
- **Data Table** — Dynamic tables that repeat rows from an array in your data
- **Image** — Insert images from the asset library
- **Conditional** — Show or hide sections based on data values
- **Loop** — Repeat blocks for each item in an array
- **Page Header / Footer** — Content that repeats on every page

### Inserting expressions

Expressions are the bridge between your data and your template. Place your cursor in a text block and insert an expression chip — it resolves to a live value from your selected data example.

Epistola supports three expression languages: Simple Path for direct property access, JSONata for transformations and formatting, and JavaScript for complex logic.

### Live PDF preview

The right panel renders a real PDF as you work. Select a data example from the dropdown and see your template with realistic content. Changes are reflected after a short debounce — typically under 3 seconds.

### Autosave and undo

The editor autosaves every change with a 3-second debounce (plus Ctrl+S for manual save). Undo and redo stacks are maintained separately for block operations and text editing, so you can undo a text change without affecting block structure.

### Stencils

Need to reuse a block across templates? Insert a stencil from the library, or create a new stencil from blocks you've built. Stencils are versioned — when an update is available, the editor notifies you.

### Next steps

Once your template looks right, it's time to publish and deploy it.
