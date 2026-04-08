---
title: "Expressions"
description: "Expression languages: JSONata, JavaScript, simple paths, and live evaluation."
section: "editor"
sortOrder: 9
---

## Expressions

Expressions are the bridge between your data and your template. They resolve dynamic values from the render payload into the document.

### Expression types

Epistola supports three expression languages:

#### Simple path

Direct property access using dot notation:

```
recipientName
address.city
items[0].description
```

Best for straightforward data bindings without transformation.

#### JSONata

A powerful query and transformation language for JSON data:

```
$uppercase(recipientName)
$sum(items.amount)
$now('[D] [MNn] [Y]')
```

Use JSONata when you need to filter, aggregate, or format data.

#### JavaScript

Full JavaScript expressions for complex logic:

```javascript
data.items.filter(i => i.amount > 100).length
new Date(data.decisionDate).toLocaleDateString('nl-NL')
```

Use JavaScript when JSONata doesn't cover your transformation needs.

### Inline chips

In the editor, expressions appear as inline chips within text blocks. Chips are visually distinct from static text, making it clear which parts of the document are dynamic.

### Live evaluation

The editor evaluates expressions in real-time against the selected data example. Authors can see actual resolved values as they edit, reducing trial-and-error during template design.
