---
title: "Rijke tekst"
description: "ProseMirror-gebaseerde opmaak en invoegen van expressiechips."
section: "editor"
sortOrder: 10
---

## Rijke tekst

De Epistola-editor gebruikt ProseMirror voor rijke-tekstbewerking en biedt een vertrouwde tekstverwerkingservaring binnen de templateontwerper.

### Opmaak

Ondersteunde opmaakopties zijn:

- **Vet**, *cursief* en onderstrepen
- Koppen (H1–H6)
- Genummerde en ongenummerde lijsten
- Tekstuitlijning (links, gecentreerd, rechts, uitvullen)
- Lettergrootte- en kleuroverschrijvingen
- Links

### Expressiechip invoegen

Binnen elk rijke-tekstblok kunnen auteurs expressiechips invoegen die resolven naar dynamische data tijdens rendering. Om een chip in te voegen:

1. Plaats de cursor waar de dynamische waarde moet verschijnen
2. Open de expressiepicker
3. Kies het expressietype (eenvoudig pad, JSONata of JavaScript)
4. Voer de expressie in
5. De chip verschijnt inline met een preview van de geresolvede waarde

### Statische en dynamische inhoud combineren

Tekstblokken mixen vrij statische tekst met expressiechips. Bijvoorbeeld:

> Geachte **{ontvanger}**, uw aanvraag van **{aanvraagdatum}** is **{besluit}**.

Elke chip resolveert onafhankelijk, wat complexe zinnen mogelijk maakt die zijn opgebouwd uit meerdere datapunten.
