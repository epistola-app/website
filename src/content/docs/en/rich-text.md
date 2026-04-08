---
title: "Rich Text"
description: "ProseMirror-based inline editing with formatting, lists, links, and expression chip insertion."
section: "editor"
sortOrder: 13
---

## Rich Text

Text blocks in the Epistola editor use ProseMirror for inline rich text editing. Authors get a familiar word-processor experience within the template designer.

### Formatting

Supported formatting options:

- **Bold**, *italic*, and underline
- Subscript and superscript
- Links with text preservation

### Lists

- Ordered lists (numbered) with nesting support
- Unordered lists (bulleted) with nesting support

### Expression chips

Authors can insert expression chips directly into text content via an inline dialog. Chips appear as distinct visual elements within the text flow, clearly distinguishing dynamic data from static content.

Each chip shows the resolved value from the selected data example, so authors see realistic output as they edit.

### Mixing static and dynamic content

Text blocks freely mix static text with expression chips. For example:

> Dear **{{recipientName}}**, your application dated **{{applicationDate}}** has been **{{decision}}**.

Each chip resolves independently, allowing complex sentences built from multiple data points.
