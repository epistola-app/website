---
title: "Omgevingen"
description: "Deploydoelen, versieactivatie en de activatiematrix."
section: "core-concepts"
sortOrder: 4
---

## Omgevingen

Omgevingen vertegenwoordigen deployfasen (bijv. ontwikkeling, acceptatie, productie). Elke omgeving bepaalt onafhankelijk welke templateversie actief is.

### Deploydoelen

Typische omgevingen zijn:

- **Ontwikkeling** — Voor template-auteurs om wijzigingen te testen
- **Acceptatie** — Voor belanghebbenden om te beoordelen vóór productie
- **Productie** — Live, verwerkt echte documentgeneratieverzoeken

### Versieactivatie

Elke omgeving heeft een actieve versiepointer per variant. Promoveren betekent deze pointer naar een nieuwere gepubliceerde versie wijzigen.

- **Promotie** is direct — wijzig alleen de pointer
- **Rollback** is even snel — wijs terug naar de vorige versie
- Oudere versies blijven gearchiveerd en toegankelijk

### Activatiematrix

De activatiematrix toont welke versie actief is in elke omgeving voor elke variant. Dit geeft platformteams een helder overzicht van wat waar is gedeployd.

| Variant | Ontwikkeling | Acceptatie | Productie |
|---|---|---|---|
| nl-standaard | v5 (concept) | v4 | v3 |
| en-standaard | v3 (concept) | v2 | v2 |

### Omgevingsisolatie

Omgevingen zijn volledig geïsoleerd. Het activeren van een nieuwe versie in ontwikkeling heeft geen effect op productie. Dit laat auteurs veilig itereren zonder risico voor live documentgeneratie.
