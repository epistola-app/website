---
title: "Import & Export"
description: "Exporteer alle templates als JSON en importeer vanuit bestand met per-template resultaattracking."
section: "platform"
sortOrder: 20
---

## Import & Export

Epistola biedt bulk-import en -export van templatedata voor migratie, backup en cross-instantie-overdracht.

### Export

Export produceert een JSON-bestand met alle templates in de tenant, inclusief:

- Templatedefinities en instellingen
- Varianten en hun attributen
- Deploymentconfiguraties

De export wordt gestart vanaf de admin-databeheerPagina met een enkele downloadknop.

### Import

Import leest een JSON-bestand en verwerkt elke template, met rapportage van resultaten per item:

| Metriek | Beschrijving |
|---|---|
| **Verwerkt** | Totaal aantal templates in het bestand |
| **Aangemaakt** | Templates die nieuw zijn aangemaakt |
| **Bijgewerkt** | Templates die bestonden en zijn bijgewerkt |
| **Ongewijzigd** | Templates die overeenkwamen met de bestaande status |
| **Mislukt** | Templates die niet geïmporteerd konden worden (met foutdetails) |

### In de UI

De admin-databeheerpagina biedt:

- **Downloadknop** — Exporteer alle templates als een JSON-bestand
- **Bestandsuploadformulier** — Selecteer een JSON-bestand om te importeren
- **Resultatensamenvatting** — Na import toont een samenvattingstabel verwerkt/aangemaakt/bijgewerkt/ongewijzigd/mislukt per template
