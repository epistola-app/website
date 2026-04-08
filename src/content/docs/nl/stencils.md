---
title: "Stencils"
description: "Versiebeheerde, herbruikbare templatecomponenten met insert-als-kopie-semantiek en bulk-upgradepropagatie."
section: "core-concepts"
sortOrder: 9
---

## Stencils

Stencils zijn versiebeheerde, herbruikbare templatecomponenten — zoals adresblokken, standaardheaders, handtekeningblokken of juridische disclaimers. Ze laten teams consistente bouwstenen onderhouden over templates heen.

### Insert-als-kopie

Wanneer een stencil in een template wordt ingevoegd, wordt de inhoud gekopieerd op het moment van invoegen. De template behoudt geen live referentie naar de stencil. Dit betekent:

- Templates zijn zelfstandig op het moment van rendering
- Wijzigingen aan de stencil propageren niet automatisch
- Auteurs kunnen de ingevoegde inhoud aanpassen voor hun specifieke template

### Versielevenscyclus

Stencils volgen dezelfde versielevenscyclus als templates:

| Status | Beschrijving |
|---|---|
| **CONCEPT** | Bewerkbaar, werk in uitvoering |
| **GEPUBLICEERD** | Bevroren en onveranderlijk |
| **GEARCHIVEERD** | Alleen-lezen, bewaard voor audit |

### Upgradeworkflow

Wanneer een nieuwe stencilversie wordt gepubliceerd, kunnen auteurs de update propageren naar templates die oudere versies gebruiken:

1. **Selecteer versie** — Kies de nieuwe stencilversie om te propageren
2. **Selecteer templates** — Kies welke templates de update moeten ontvangen
3. **Bulk toepassen** — Pas de upgrade toe met voortgangsregistratie

### In de UI

- **Stencilslijst** — Zoek en filter op tags. Elke kaart toont de stencilnaam en tagbadges
- **Stencil-detailpagina** — Toont versiegeschiedenis, een gebruikstabel met alle templates die de stencil bevatten, en de bulk-upgradepropagatiebediening
