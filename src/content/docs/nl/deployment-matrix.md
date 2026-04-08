---
title: "Deploymentmatrix"
description: "Visuele matrix van actieve versies per variant per omgeving met inline versieselectie en auto-deploy."
section: "core-concepts"
sortOrder: 7
---

## Deploymentmatrix

De deploymentmatrix biedt een visueel overzicht van welke versie actief is voor elke variant in elke omgeving. Het is het centrale bedieningsoppervlak voor het beheren van deployments.

### Matrixlay-out

De matrix is een tabel met:

- **Rijen** — Eén rij per variant
- **Kolommen** — Eén kolom per omgeving (bijv. Ontwikkeling, Acceptatie, Productie)
- **Cellen** — Elke cel toont het actieve versienummer voor dat variant/omgevingspaar, met een versieselector om het te wijzigen

### Een versie deployen

Het wijzigen van de versie in een cel triggert een auto-deploy via HTMX. De geselecteerde versie wordt direct de actieve versie voor die variant in die omgeving — er is geen aparte publicatiestap nodig.

### Toegang

De deploymentmatrix is beschikbaar op het tabblad **Deployments** van de template-detailpagina. Het geeft platformteams en templateauteurs een duidelijk, in-één-oogopslag overzicht van wat waar gedeployd is.

### Gerelateerde functies

- **Versievergelijking** — Vergelijk de momenteel gedeployde versie met een andere versie direct vanuit de matrix
- **Versiegeschiedenis** — Bekijk de volledige versiegeschiedenis voor elke variant vanuit de rij in de matrix
