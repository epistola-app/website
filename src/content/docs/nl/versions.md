---
title: "Versies"
description: "Genummerde versielevenscyclus per variant: Concept, Gepubliceerd en Gearchiveerd met onveranderlijkheidsgaranties."
section: "core-concepts"
sortOrder: 4
---

## Versies

Elke variant heeft een genummerde versiegeschiedenis. Versies lopen van 1 tot 200 per variant en doorlopen een strikte levenscyclus die reproduceerbaarheid en controleerbaarheid garandeert.

### Levenscyclusstatussen

| Status | Bewerkbaar | Beschrijving |
|---|---|---|
| **CONCEPT** | Ja | Werk in uitvoering. Maximaal één concept per variant tegelijk. Kan bewerkt en gepreviewd worden. |
| **GEPUBLICEERD** | Nee | Bevroren en onveranderlijk. Inhoud, themasnapshot en schemahash zijn vergrendeld. Kan gepreviewd of gearchiveerd worden. |
| **GEARCHIVEERD** | Nee | Alleen-lezen, bewaard voor audit. Kan alleen gepreviewd worden. |

### Onveranderlijkheid

Zodra een versie is gepubliceerd, kan de inhoud niet meer wijzigen. De lay-out, themasnapshot en schemahash zijn allemaal bevroren. Dit garandeert dat dezelfde invoerdata altijd dezelfde output produceert, zelfs jaren later.

### Versienummering

Versies worden sequentieel genummerd binnen elke variant (v1, v2, v3, ...). Elk nieuw concept krijgt automatisch het volgende beschikbare nummer.

### In de UI

Het versiegeschiedenisdialoog toont een tabel met:

- **Versienummer** en **statusbadge**
- **Aangemaakt** en **laatst-gewijzigd-tijdstempels**
- **Acties** die variëren per status: conceptversies kunnen bewerkt of gepreviewd worden, gepubliceerde versies kunnen gepreviewd of gearchiveerd worden, gearchiveerde versies zijn alleen preview
