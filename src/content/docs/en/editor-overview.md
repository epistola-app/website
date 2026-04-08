---
title: "Editor Overview"
description: "Full-page WYSIWYG editor with split view, live PDF preview, autosave, undo/redo, and stencil management."
section: "editor"
sortOrder: 10
---

## Editor Overview

The Epistola Suite includes a full-page WYSIWYG editor for designing document templates. It is built with Lit and ProseMirror web components.

### Split view

The editor uses a resizable split-view layout:

- **Left panel** — Template structure and content editing with a block tree, toolbar, and inline editing
- **Right panel** — Live PDF preview rendered with the selected test data example

The divider between panels can be dragged to adjust the ratio.

### Live PDF preview

The preview panel renders a real PDF using the current template state and a selected data example. Changes in the editor are reflected in the preview after a short debounce. Authors can switch between data examples from a dropdown above the preview.

### Autosave

Draft versions are saved automatically with a 3-second debounce after each change. Manual save is also available via Ctrl+S. Work is never lost — the editor persists changes continuously.

### Undo and redo

The editor maintains separate undo/redo stacks for block-level operations (add, delete, reorder) and rich text editing. This lets authors undo a text formatting change without affecting block structure, and vice versa.

### Drag-and-drop

Content blocks can be reordered using drag-and-drop. Grab any block's handle and move it to a new position in the document tree.

### Stencil management

From within the editor, authors can:

- **Search** available stencils and insert them into the template
- **Check for updates** on inserted stencils to see if newer versions exist
- **Create new stencils** from selected blocks in the current template

### Asset picker

The editor includes an asset picker dialog for inserting images. Authors can browse uploaded assets, preview thumbnails, and select images to include in the template.

### Data contract editor

The data contract editor lives in a separate tab on the template detail page (not inside the visual editor). It provides a dedicated interface for editing the JSON Schema and managing named data examples.
