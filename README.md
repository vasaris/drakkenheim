# drakkenheim-mpmb

Drakkenheim player options for [MorePurpleMoreBetter's D&D 5e (2014) Character Record Sheet](https://flapkan.com/mpmb/charsheets) ("Flapkan" / MPMB).

Each file in `src/` is a self-contained MPMB add-on script. `build.js` merges them into a single `dist/Drakkenheim.js`; `validate.js` checks them.

## Ownership notice

This repository contains community-authored add-on scripts for use with the official Drakkenheim books. **Only use this content if you own the source books.** Game content is © Ghostfire Gaming / The Dungeon Dudes (Monty Martin & Kelly McLaughlin). Sources: *Dungeons of Drakkenheim* (DoD) and *Sebastian Crowe's Guide to Drakkenheim* (SCGD). The book PDFs/texts are **not** part of this repo and must not be committed (see `.gitignore`).

## Import order on the sheet

Import into a fresh MPMB sheet (v13.2.0+), in this order, via **Add Extra Materials**:

1. **`all_WotC` script** — official 2014 WotC content (PHB, DMG, MM, Xanathar's, Tasha's, …) from [safety-orange's GitHub](https://github.com/safety-orange/Imports-for-MPMB-s-Character-Sheet). Provides core spells the subclasses reference (faerie fire, wall of force, …).
2. **External Drakkenheim deps** (third-party, not redistributed here):
   - CrimsonEdge7's *Dungeons of Drakkenheim* core-book script (backgrounds, mutations, delerium, DoD spells/items, Seals & Relics).
   - lizrdgizrd's Barbarian **Path of the Haze Rager**.
3. **`dist/Drakkenheim.js`** (this repo) — SCGD spells, subclasses, and (when built) the Apothecary class.

Order matters: spells must load before subclasses so `spellcastingExtra` resolves.

## Build & validate

```sh
node validate.js                  # check every src/*.js
node build.js                     # merge -> dist/Drakkenheim.js
node validate.js dist/Drakkenheim.js   # check the merged artifact
```

`validate.js` checks: parse + run against MPMB stubs, required spell fields, no duplicate keys across files, no duplicate subclasses, and that every subclass `spellcastingExtra` entry resolves (built here or a known core spell).

## Status

Built (SCGD):
- Contaminated/new spells — batches 1–3 (24 spells)
- Subclasses: Druid **Circle of Contamination**, Wizard **Malfeasant**, Sorcerer **Delerium Soul**

Planned: remaining Ch.4 spells (batches 4–6) · **Apothecary** class + 6 subclasses · 11 non-gated subclasses · tool feats · SCGD magic items · final merge audit.

## Design notes

**Summoned creatures are not given `CreatureList` stat blocks.** The two summon spells — *Summon the Thing with the Writhing Tail* ("Bruce") and *Summon Delerium Elemental* — conjure creatures whose AC, HP, Multiattack count, and damage are all parameterised by the spell's slot level (e.g. "AC 12 + the level of the spell"). MPMB's sheet has no hook for spell-slot level: a creature's `eval`/`changeeval` react to the **character's** level, not the slot used, and neither `CreatureList` nor `CompanionList` exposes a slot-level input. A static stat block would therefore show wrong numbers whenever the spell is upcast. So these creatures stay described in the casting spells' `descriptionFull` (with the scaling rules stated there), and the book stat block is referenced rather than reproduced — the same way MPMB handles the official Tasha's Cauldron summon spells. Revisit only if MPMB adds slot-level-aware companions.

## Attribution

- CrimsonEdge7 — *Dungeons of Drakkenheim* MPMB script (external).
- lizrdgizrd — Drakkenheim backgrounds & Path of the Haze Rager (external).
- MPMB / MorePurpleMoreBetter — the character sheet and import framework.
