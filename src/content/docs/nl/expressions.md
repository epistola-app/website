---
title: "Expressies"
description: "Drie expressietalen — JSONata, JavaScript, Eenvoudig Pad — met live-evaluatie en inline chiprendering."
section: "editor"
sortOrder: 12
---

## Expressies

Expressies verbinden templateinhoud met data. Elke expressie wordt opgeslagen in alle drie ondersteunde talen, en de renderingengine evalueert degene die overeenkomt met de geconfigureerde standaard.

### Expressietalen

#### Eenvoudig Pad

Lichtgewicht dot-path-traversal voor eenvoudige datatoegang:

```
ontvanger
adres.stad
items[0].beschrijving
```

Het beste voor directe property-lookups zonder transformatie.

#### JSONata

De standaard expressietaal, met de Dashjoin-implementatie. Ondersteunt paden, filters, aggregaties en opmaak:

```
$uppercase(ontvanger)
$sum(items.bedrag)
$now('[D] [MNn] [Y]')
items[prijs > 100].beschrijving
```

#### JavaScript

GraalJS-gesandboxed JavaScript voor complexe logica. Geen bestandssysteem- of netwerktoegang beschikbaar:

```javascript
data.items.filter(i => i.bedrag > 100).length
new Date(data.besluitdatum).toLocaleDateString('nl-NL')
```

### Waar expressies worden gebruikt

- **Tekstinterpolatie** — `{{expressie}}` binnen rich text-blokken, gerenderd als inline chips
- **Conditionele zichtbaarheid** — Bepaalt of een conditieblok wordt getoond of verborgen
- **Lusiteratie** — Definieert de array waarover een lusblok itereert
- **Tabelcelwaarden** — Bindt datatabelkolommen aan datapaden

### In de UI

Het expressiedialog laat auteurs expressies schrijven en testen. Het biedt:

- **Live-evaluatiepreview** — Toont de opgeloste waarde tegen het geselecteerde datavoorbeeld in realtime
- **JSONata-referentie** — Ingebouwde documentatie voor JSONata-syntax en -functies
- **Taalselector** — Wissel tussen Eenvoudig Pad, JSONata en JavaScript
