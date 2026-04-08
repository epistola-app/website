---
title: "Expressies"
description: "Expressietalen: JSONata, JavaScript, eenvoudige paden en live evaluatie."
section: "editor"
sortOrder: 9
---

## Expressies

Expressies vormen de brug tussen uw data en uw template. Ze resolven dynamische waarden uit de renderpayload naar het document.

### Expressietypen

Epistola ondersteunt drie expressietalen:

#### Eenvoudig pad

Directe property-toegang met puntnotatie:

```
ontvanger
adres.stad
items[0].omschrijving
```

Ideaal voor eenvoudige databindings zonder transformatie.

#### JSONata

Een krachtige query- en transformatietaal voor JSON-data:

```
$uppercase(ontvanger)
$sum(items.bedrag)
$now('[D] [MNn] [Y]')
```

Gebruik JSONata wanneer u data moet filteren, aggregeren of formatteren.

#### JavaScript

Volledige JavaScript-expressies voor complexe logica:

```javascript
data.items.filter(i => i.bedrag > 100).length
new Date(data.besluitdatum).toLocaleDateString('nl-NL')
```

Gebruik JavaScript wanneer JSONata niet in uw transformatiebehoeften voorziet.

### Inline chips

In de editor verschijnen expressies als inline chips binnen tekstblokken. Chips zijn visueel onderscheidend van statische tekst, waardoor duidelijk is welke delen van het document dynamisch zijn.

### Live evaluatie

De editor evalueert expressies in realtime tegen het geselecteerde datavoorbeeld. Auteurs kunnen daadwerkelijk geresolvede waarden zien terwijl ze bewerken, wat trial-and-error tijdens templateontwerp vermindert.
