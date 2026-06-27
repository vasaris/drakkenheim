#!/usr/bin/env node
/*
 * build.js — merges every src/*.js (sorted by filename) into a single dist/Drakkenheim.js
 * with one unified header. Run: `node build.js`
 *
 * Ordering: src files are numbered so a lexical sort gives the correct import order
 *   (sources/spells first, then classes, then subclasses, so spellcastingExtra resolves).
 * Per-file headers, iFileName, and RequiredSheetVersion lines are stripped; the merged file
 * declares them once. Duplicate unconditional SourceList re-assignments are harmless
 * (identical content, last write wins) and left as-is.
 */
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "src");
const OUT = path.join(__dirname, "dist", "Drakkenheim.js");

const HEADER = `/*	-WHAT IS THIS?-
	This file adds the Drakkenheim player options to "MPMB's Character Record Sheet" (https://flapkan.com/mpmb/charsheets).
	Import it using the "Add Extra Materials" bookmark, AFTER importing the official 2014 WotC content (all_WotC script).
	-KEEP IN MIND-
	Import into a fresh sheet before building a character. You must own the source books to use this content legally.
	Sources: Dungeons of Drakkenheim (DoD) and Sebastian Crowe's Guide to Drakkenheim (SCGD), (C) Ghostfire Gaming / The Dungeon Dudes.
	-GENERATED-
	This is a merged build produced by build.js. Do not edit by hand; edit the files in src/ and re-run the build.
*/
var iFileName = "Drakkenheim.js";
RequiredSheetVersion("13.2.0");
`;

function strip(code) {
  // remove leading block comment(s), the iFileName declaration, and RequiredSheetVersion call,
  // since the merged file provides these once at the top.
  return code
    .replace(/^\uFEFF/, "")
    .replace(/\/\*[\s\S]*?\*\/\s*/g, function (m, off) { return off === 0 ? "" : m; }) // only the very first block comment
    .replace(/^\s*var\s+iFileName\s*=\s*["'][^"']*["']\s*;?\s*$/m, "")
    .replace(/^\s*RequiredSheetVersion\([^)]*\)\s*;?\s*$/m, "")
    .trim();
}

function run() {
  const files = fs.readdirSync(SRC).filter(f => f.endsWith(".js")).sort();
  let body = HEADER + "\n";
  for (const f of files) {
    const code = fs.readFileSync(path.join(SRC, f), "utf8");
    body += `\n// ===== src/${f} =====\n` + strip(code) + "\n";
  }
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, body);
  console.log(`Merged ${files.length} file(s) -> dist/Drakkenheim.js (${body.length} bytes)`);
}

run();
