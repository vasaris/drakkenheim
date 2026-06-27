#!/usr/bin/env node
/*
 * validate.js — checks every src/*.js (and optionally dist/Drakkenheim.js) against
 * MPMB-style stubs. Run: `node validate.js`  or  `node validate.js dist/Drakkenheim.js`
 *
 * Checks:
 *   - file parses (no syntax error) and runs against MPMB global stubs (no ReferenceError)
 *   - every SpellsList entry has the required fields
 *   - no duplicate keys across files (SpellsList / BackgroundList / FeatsList / ClassList)
 *   - no duplicate AddSubClass (class+key) pairs
 *   - every subclass spellcastingExtra entry resolves to a known spell (built here or a core spell)
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

// Core 2014 spells that come from the all_WotC import (not defined in this repo) but are
// legitimately referenced by Drakkenheim subclasses. Extend as needed.
const CORE_SPELLS = new Set([
  "faerie fire", "wall of force", "chill touch", "contact other plane", "gaseous form"
]);

const REQUIRED_SPELL_FIELDS = [
  "name", "classes", "source", "level", "school", "time", "range",
  "components", "duration", "description", "descriptionFull"
];

function makeSandbox() {
  const sb = {
    SourceList: {}, SpellsList: {}, BackgroundList: {}, FeatsList: {},
    ClassList: {}, ClassSubList: {}, WeaponsList: {}, ArmourList: {},
    GearList: {}, MagicItemsList: {}, CreatureList: {},
    subclassCalls: [],
    RequiredSheetVersion: () => true,
    AddSubClass: function (cls, key, obj) { sb.subclassCalls.push({ cls, key, obj }); },
    AddRace: () => {}, AddFeat: () => {}, AddBackgroundVariant: () => {},
    What: () => "0", Who: () => "", tDoc: {}, event: { value: 0 },
    console: console, Math: Math, Number: Number, String: String,
    Array: Array, Object: Object, parseInt: parseInt, parseFloat: parseFloat,
    isNaN: isNaN, RegExp: RegExp, JSON: JSON
  };
  sb.global = sb;
  return sb;
}

function run() {
  const target = process.argv[2];
  let files;
  if (target) {
    files = [target];
  } else {
    const dir = path.join(__dirname, "src");
    files = fs.readdirSync(dir).filter(f => f.endsWith(".js")).sort()
      .map(f => path.join("src", f));
  }

  const sb = makeSandbox();
  const ctx = vm.createContext(sb);
  const owners = { SpellsList: {}, BackgroundList: {}, FeatsList: {}, ClassList: {} };
  const subKeys = {};
  let errors = 0, warnings = 0;
  const seenBefore = name => new Set(Object.keys(sb[name]));

  for (const rel of files) {
    const abs = path.join(__dirname, rel);
    const code = fs.readFileSync(abs, "utf8");
    const before = {
      SpellsList: seenBefore("SpellsList"), BackgroundList: seenBefore("BackgroundList"),
      FeatsList: seenBefore("FeatsList"), ClassList: seenBefore("ClassList")
    };
    const subBefore = sb.subclassCalls.length;
    try {
      vm.runInContext(code, ctx, { filename: rel });
    } catch (e) {
      console.log(`FAIL  ${rel}\n      ${e.message}`);
      errors++; continue;
    }
    // duplicate keys across files
    for (const listName of Object.keys(owners)) {
      for (const k of Object.keys(sb[listName])) {
        if (!before[listName].has(k)) {
          if (owners[listName][k]) {
            console.log(`DUP   ${listName}["${k}"] in ${rel} (already added by ${owners[listName][k]})`);
            errors++;
          } else {
            owners[listName][k] = rel;
          }
        }
      }
    }
    // required spell fields for spells added by this file
    for (const k of Object.keys(sb.SpellsList)) {
      if (before.SpellsList.has(k)) continue;
      const s = sb.SpellsList[k];
      const miss = REQUIRED_SPELL_FIELDS.filter(f => s[f] === undefined);
      if (miss.length) { console.log(`FIELD ${rel} spell "${k}" missing: ${miss.join(", ")}`); errors++; }
    }
    // duplicate subclasses
    for (let i = subBefore; i < sb.subclassCalls.length; i++) {
      const c = sb.subclassCalls[i];
      const id = c.cls + "/" + c.key;
      if (subKeys[id]) { console.log(`DUP   subclass ${id} in ${rel} (already by ${subKeys[id]})`); errors++; }
      else subKeys[id] = rel;
    }
    console.log(`OK    ${rel}`);
  }

  // spell resolution for every subclass's spellcastingExtra
  for (const c of sb.subclassCalls) {
    const extra = c.obj && c.obj.spellcastingExtra;
    if (!Array.isArray(extra)) continue;
    const unresolved = extra.filter(s => !sb.SpellsList[s] && !CORE_SPELLS.has(s));
    if (unresolved.length) {
      console.log(`WARN  ${c.cls}/${c.key} spellcastingExtra unresolved: ${unresolved.join(", ")}`);
      warnings++;
    }
  }

  console.log("\n--- summary ---");
  console.log(`files:      ${files.length}`);
  console.log(`spells:     ${Object.keys(sb.SpellsList).length}`);
  console.log(`subclasses: ${sb.subclassCalls.length}`);
  console.log(`sources:    ${Object.keys(sb.SourceList).join(", ") || "(none)"}`);
  console.log(`errors:     ${errors}`);
  console.log(`warnings:   ${warnings}`);
  process.exit(errors ? 1 : 0);
}

run();
