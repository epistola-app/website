---
title: "Rich Text"
description: "ProseMirror-gebaseerde inline bewerking met opmaak, lijsten, links en expressiechip-invoeging."
section: "editor"
sortOrder: 13
---

## Rich Text

Tekstblokken in de Epistola-editor gebruiken ProseMirror voor inline rich text-bewerking. Auteurs krijgen een vertrouwde tekstverwerker-ervaring binnen de templateontwerper.

### Opmaak

Ondersteunde opmaakopties:

- **Vet**, *cursief* en onderstrepen
- Subscript en superscript
- Links met tekstbehoud

### Lijsten

- Geordende lijsten (genummerd) met nestondersteuning
- Ongeordende lijsten (opsommingstekens) met nestondersteuning

### Expressiechips

Auteurs kunnen expressiechips direct in tekstinhoud invoegen via een inline dialoog. Chips verschijnen als afzonderlijke visuele elementen binnen de tekststroom, die dynamische data duidelijk onderscheiden van statische inhoud.

Elke chip toont de opgeloste waarde uit het geselecteerde datavoorbeeld, zodat auteurs realistische output zien terwijl ze bewerken.

### Statische en dynamische inhoud mixen

Tekstblokken mengen vrij statische tekst met expressiechips. Bijvoorbeeld:

> Geachte **{{ontvanger}}**, uw aanvraag van **{{aanvraagdatum}}** is **{{besluit}}**.

Elke chip wordt onafhankelijk opgelost, wat complexe zinnen mogelijk maakt die zijn opgebouwd uit meerdere datapunten.
