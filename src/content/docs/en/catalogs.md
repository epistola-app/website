---
title: "Catalogs"
description: "Local and imported catalogs with URL-based registration, auth modes, versioned releases, and template browsing."
section: "platform"
sortOrder: 19
---

## Catalogs

Catalogs enable sharing and distributing template resources between tenants and organizations. There are two types.

### Local catalogs

Local catalogs are created within the Epistola instance. Templates in a local catalog can be published via the `.well-known` endpoint, making them available for other instances to import.

### Imported catalogs

Imported catalogs are synced from a remote URL. Epistola tracks the remote version and shows when upgrades are available.

### Registration

Registering a catalog supports:

- **URL schemes** — `https`, `http`, `classpath`, and `file`
- **Authentication modes** — None, bearer token, or API key

### Versioned releases

Catalogs support versioned releases that capture a snapshot of templates at a point in time. Subscribers can browse available releases and choose when to adopt new versions.

### In the UI

- **Register form** — Enter a URL and select the authentication type to register a new catalog
- **Registered catalogs table** — Shows all registered catalogs with browse and remove actions
- **Browse page** — Lists available templates from a catalog with install and install-all buttons for importing templates into the local tenant
