---
title: "Rich Text"
description: "ProseMirror-based formatting and expression chip insertion."
section: "editor"
sortOrder: 10
---

## Rich Text

The Epistola editor uses ProseMirror for rich text editing, providing a familiar word-processor experience within the template designer.

### Formatting

Supported formatting options include:

- **Bold**, *italic*, and underline
- Headings (H1–H6)
- Ordered and unordered lists
- Text alignment (left, center, right, justify)
- Font size and color overrides
- Links

### Expression chip insertion

Within any rich text block, authors can insert expression chips that resolve to dynamic data at render time. To insert a chip:

1. Place the cursor where the dynamic value should appear
2. Open the expression picker
3. Choose the expression type (simple path, JSONata, or JavaScript)
4. Enter the expression
5. The chip appears inline with a preview of the resolved value

### Mixing static and dynamic content

Text blocks freely mix static text with expression chips. For example:

> Dear **{recipientName}**, your application dated **{applicationDate}** has been **{decision}**.

Each chip resolves independently, allowing complex sentences built from multiple data points.
