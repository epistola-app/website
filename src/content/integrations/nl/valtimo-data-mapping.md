---
title: "Datamapping"
description: "Hoe je zaak- en procesgegevens koppelt aan Epistola-templatevelden met value resolvers."
plugin: "valtimo"
sortOrder: 4
---

## Overzicht

Datamapping verbindt waarden uit Valtimo (zaakgegevens, procesvariabelen) met de velden die verwacht worden door het datacontract van een Epistola-template.

## Value resolvers

De plugin ondersteunt meerdere resolver-prefixen:

| Prefix | Bron | Voorbeeld |
|---|---|---|
| `doc:` | Zaakdocumentgegevens | `doc:aanvrager.voornaam` |
| `pv:` | Procesvariabelen | `pv:aanvraagDatum` |
| `case:` | Zaakeigenschappen | `case:behandelaar` |
| `template:` | Templatemetadata | `template:naam` |

## Eenvoudige mapping

Koppel individuele velden met een platte sleutel-waardestructuur:

```yaml
aanvragerNaam: "doc:aanvrager.voornaam"
aanvraagDatum: "pv:aanvraagDatum"
zaaknummer: "case:zaakId"
```

## Geneste objecten

Koppel complexe structuren met geneste sleutels:

```yaml
aanvragerAdres:
  straat: "doc:aanvrager.adres.straat"
  plaats: "doc:aanvrager.adres.plaats"
  postcode: "doc:aanvrager.adres.postcode"
```

## Array-mapping met veldhernoeming

Koppel arrays uit de bron met optionele veldhernoeming:

```yaml
activiteiten:
  _source: "doc:activiteiten"
  type: "type"
  geschatteKosten: "kosten"
```

De `_source`-sleutel identificeert de bronarray. Andere sleutels definiëren de velden die uit elk item worden geëxtraheerd, met optionele hernoeming (links = uitvoernaam, rechts = bronveldnaam).

## Resolvers combineren

Je kunt resolvers mixen in één mapping — haal sommige waarden uit zaakgegevens en andere uit procesvariabelen:

```yaml
aanvragerNaam: "doc:aanvrager.voornaam"
behandelaarNaam: "pv:huidigeBehandelaar"
genereerdOp: "pv:generatietijdstip"
items:
  _source: "doc:bestelregels"
  omschrijving: "omschrijving"
  bedrag: "totaalBedrag"
```
