---
title: "Stencils"
description: "Herbruikbare templatecomponenten met versiebeheer en upgrade-propagatie."
section: "core-concepts"
sortOrder: 6
---

## Stencils

Stencils zijn herbruikbare documentcomponenten die gedeeld kunnen worden tussen templates. Ze maken consistente bouwstenen mogelijk zonder inhoud te dupliceren.

### Wat zijn stencils?

Een stencil is een voorgebouwd documentfragment — zoals een standaard koptekst, voettekst, handtekeningblok of juridische disclaimer. Auteurs kunnen stencils in elke template invoegen om consistentie te behouden.

### Versiebeheer

Stencils volgen hetzelfde versiemodel als templates:

- Elke stencil heeft zijn eigen versiegeschiedenis
- Gepubliceerde versies zijn onveranderlijk
- Updates creëren nieuwe versies zonder bestaand gebruik te beïnvloeden

### Invoegen-als-kopie

Wanneer een stencil in een template wordt ingevoegd, wordt de inhoud gekopieerd op het moment van invoegen. Dit betekent:

- De template is zelfstandig — hij is niet afhankelijk van de stencil tijdens rendering
- Wijzigingen aan de stencil propageren niet automatisch naar bestaande templates
- Auteurs kunnen de ingevoegde inhoud aanpassen voor hun specifieke template

### Upgrade-propagatie

Wanneer een stencil wordt bijgewerkt, ontvangen auteurs upgrademeldingen voor templates die oudere versies gebruiken. Ze kunnen:

- De wijzigingen in de nieuwe stencilversie **bekijken**
- De upgrade **accepteren** om de nieuwste inhoud op te halen
- De upgrade **overslaan** en hun huidige versie behouden

Dit geeft teams de voordelen van hergebruik met behoud van controle over wanneer wijzigingen propageren.
