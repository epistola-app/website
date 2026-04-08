---
title: "Catalogi"
description: "Lokale en geïmporteerde catalogi met URL-gebaseerde registratie, authenticatiemodi, versiebeheerde releases en templatebrowsing."
section: "platform"
sortOrder: 19
---

## Catalogi

Catalogi maken het delen en distribueren van templateresources mogelijk tussen tenants en organisaties. Er zijn twee typen.

### Lokale catalogi

Lokale catalogi worden aangemaakt binnen de Epistola-instantie. Templates in een lokale catalogus kunnen gepubliceerd worden via het `.well-known`-eindpunt, waardoor ze beschikbaar worden voor andere instanties om te importeren.

### Geïmporteerde catalogi

Geïmporteerde catalogi worden gesynchroniseerd vanaf een externe URL. Epistola houdt de externe versie bij en toont wanneer upgrades beschikbaar zijn.

### Registratie

Het registreren van een catalogus ondersteunt:

- **URL-schema's** — `https`, `http`, `classpath` en `file`
- **Authenticatiemodi** — Geen, bearer token of API-sleutel

### Versiebeheerde releases

Catalogi ondersteunen versiebeheerde releases die een snapshot van templates vastleggen op een moment in de tijd. Abonnees kunnen beschikbare releases doorbladeren en kiezen wanneer ze nieuwe versies adopteren.

### In de UI

- **Registratieformulier** — Voer een URL in en selecteer het authenticatietype om een nieuwe catalogus te registreren
- **Geregistreerde catalogi-tabel** — Toont alle geregistreerde catalogi met doorblader- en verwijderacties
- **Bladerpagina** — Toont beschikbare templates uit een catalogus met installeer- en alles-installeren-knoppen voor het importeren van templates naar de lokale tenant
