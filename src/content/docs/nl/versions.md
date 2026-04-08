---
title: "Versies"
description: "Templateversielevenscyclus: Concept, Gepubliceerd en Gearchiveerd."
section: "core-concepts"
sortOrder: 3
---

## Versies

Elke variant behoudt een onveranderlijke versiegeschiedenis. Versies doorlopen een strikte levenscyclus die reproduceerbaarheid en controleerbaarheid waarborgt.

### Levenscyclusstatussen

| Status | Beschrijving |
|---|---|
| **Concept** | In bewerking — bewerkbaar, nog niet beschikbaar voor rendering |
| **Gepubliceerd** | Vergrendeld en beschikbaar voor rendering in toegewezen omgevingen |
| **Gearchiveerd** | Niet meer actief maar bewaard voor audit en reproductie |

### Onveranderlijkheid

Zodra een versie is gepubliceerd, wordt de inhoud bevroren:

- De templatelay-out wordt vergrendeld
- De themasnapshot wordt vastgelegd
- De schemahash wordt geregistreerd

Dit garandeert dat dezelfde invoerdata altijd dezelfde output produceert, zelfs jaren later.

### Versienummering

Versies worden sequentieel genummerd binnen elke variant (v1, v2, v3, ...). Elk nieuw concept ontvangt automatisch het volgende versienummer.

### Publiceren

Het publiceren van een conceptversie:

1. Vergrendelt de lay-out en themasnapshot
2. Registreert de schemahash voor reproduceerbaarheid
3. Maakt de versie beschikbaar voor omgevingsactivatie
4. Creëert een audittrail-vermelding
