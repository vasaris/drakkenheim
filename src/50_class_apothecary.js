/*	-WHAT IS THIS?-
	This file adds the Apothecary class to "MPMB's Character Record Sheet" (https://flapkan.com/mpmb/charsheets).
	Import it using the "Add Extra Materials" bookmark, AFTER the official 2014 WotC content (the class spell list
	references core spells such as "melf's acid arrow") and the Drakkenheim spell scripts in this pack.
	-KEEP IN MIND-
	This is the class's SPELLCASTING CORE: custom warlock-style slot table, the full p.139 spell list, Intelligence
	casting, skills, and the book's prepared-count formula. Still to be added: the six Occult Practice subclasses,
	Esoteric Theories, Greater Formula (Mystic Arcanum), and multiclass spell math.
	Game content (C) Ghostfire Gaming / The Dungeon Dudes. Only import if you own the book.
*/

/*	-INFORMATION-
	Subject:	Class (Apothecary — spellcasting core)
	Effect:		Apothecary (Sebastian Crowe's Guide to Drakkenheim, p.134) — Intelligence caster.
				The Apothecary uses WARLOCK-STYLE Pact Magic: every spell slot is the SAME level,
				few slots, regained on a SHORT or long rest. The slot counts differ from the warlock,
				so no built-in spellcastingFactor matches -> a custom spellcastingTable is used.
	Edition:	D&D 5e (2014) — for MPMB's 2014 sheet.
	Code by:	(community build)
	Date:		2026-06-27 (sheet v13)
*/
var iFileName = "Apothecary.js";

RequiredSheetVersion("13.2.0");

if (typeof SourceList["SCGD"] === "undefined") {
	SourceList["SCGD"] = {
		name : "Sebastian Crowe's Guide to Drakkenheim",
		abbreviation : "SCGD",
		group : "Ghostfire Gaming",
		date : "2024/01/01",
		url : "https://ghostfiregaming.com/product/sebastian-crowes-guide-to-drakkenheim-hardcover-book/"
	};
}

ClassList["apothecary"] = {
	name : "Apothecary",
	regExpSearch : /^(?=.*apothecary).*$/i,
	source : [["SCGD", 134]],
	primaryAbility : "Intelligence",
	prereqs : "Intelligence 13",
	die : 8,
	// --- proficiency / progression stubs (rough; refine when finishing the class) ---
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5], // ASI at 4/8/12/16/19 (cumulative) — stub
	saves : ["Int", "Wis"],
	subclasses : ["Occult Practice", []], // REQUIRED by MPMB (Source Material + Class Selection iterate oClass.subclasses). Empty stub; real Occult Practices attach later via AddSubClass("apothecary", ...).
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // REQUIRED; attacks per turn by level (Apothecary has no Extra Attack -> 1 at all levels).
	// skills drives the "choose 2" picker (skillstxt was tooltip-only). Plain text (no toUni) so the standalone validator stays clean; the real class can wrap "Apothecary" in toUni() for the underline.
	skills : ["\n\nApothecary: Choose two from Arcana, History, Investigation, Medicine, Nature, and Religion.", "\n\nApothecary: Choose one from Arcana, History, Investigation, Medicine, Nature, and Religion."],
	armor : [[true, true, false, false], [true, true, false, false]], // light, medium (no heavy, no shield)
	weapons : [[true, false, ["short sword", "hand crossbow"]], [true, false, ["short sword", "hand crossbow"]]], // simple + shortswords + hand crossbows
	equipment : "Apothecary starting equipment — see SCGD p.134 (stub)",

	// =================== SPELLCASTING ===================
	abilitySave : 4, // 4 = Intelligence (index into [Str,Dex,Con,Int,Wis,Cha]); Int is the apothecary's spell ability

	// spellcastingFactor is REQUIRED even with a custom table (it only affects MULTICLASS slot math, which is out of scope here).
	// Following the real Warden-class pattern: a number + a custom single-class spellcastingTable below.
	spellcastingFactor : 2,

	// Explicit Apothecary spell list, transcribed from the book's "Apothecary Spell List" (SCGD p.139).
	// Variant A: the class list lives ONLY here; individual spells no longer carry an "apothecary" tag.
	// Core (non-Drakkenheim) spells use their all_WotC keys (2014 naming, e.g. "melf's acid arrow", "tenser's floating disk").
	// Levels 0-9: 6th-9th are for the Greater Formula (Mystic Arcanum) picks (gated by a feature later).
	// Excludes Contaminated Spells and the two research spells (neutralizing field, contamination immunity) per the book.
	spellcastingList : {
		spells : [
			// Cantrips
			"acid burn", "acid splash", "bacterial barrage", "chill touch", "guidance", "light", "mending", "message", "poison needle", "poison spray", "resistance", "shocking grasp", "spare the dying", "thaumaturgy",
			// 1st
			"acrid orb", "alarm", "comprehend languages", "create or destroy water", "cure wounds", "detect evil and good", "detect magic", "detect poison and disease", "envenom", "false life", "feather fall", "tenser's floating disk", "fog cloud", "grease", "healing word", "tasha's hideous laughter", "identify", "illusory script", "infect", "jump", "purify food and drink", "sleep", "stream of consumption", "toxic shield", "unseen servant",
			// 2nd
			"melf's acid arrow", "aid", "biohazard", "blindness/deafness", "caustic grip", "enhance ability", "enlarge/reduce", "gentle repose", "grasping ghost", "hold person", "invigorate", "lesser restoration", "ocular necrosis", "protection from poison", "ray of enfeeblement", "see invisibility", "silence", "spider climb", "web",
			// 3rd
			"bestow curse", "corrosive blast", "dispel magic", "fear", "fetid blade", "gaseous form", "glyph of warding", "haste", "hypnotic pattern", "magic circle", "mass healing word", "pestilence", "purge contamination", "protection from energy", "remove curse", "revivify", "sending", "slow", "speak with dead", "stinking cloud", "tranquilizing toxin", "vampiric touch", "venomous aura", "water breathing",
			// 4th
			"blight", "blood worm", "corpse explosion", "corrupting spores", "death ward", "evard's black tentacles", "freedom of movement", "last rites", "poison wave", "polymorph", "stoneskin", "vitriol ichor",
			// 5th
			"acid rain", "antilife shell", "cloudkill", "contact other plane", "greater restoration", "hold monster", "mass cure wounds", "nerve gas", "raise dead", "scrying", "rary's telepathic bond", "septic shock", "teleportation circle", "toxic barrage",
			// 6th (Greater Formula)
			"chain lightning", "circle of death", "create undead", "disintegrate", "eyebite", "flesh to stone", "globe of invulnerability", "harm", "heal", "mephitic vapors", "true seeing", "vile necrosis",
			// 7th (Greater Formula)
			"etherealness", "finger of death", "forcecage", "grievous wounds", "miasma", "plane shift", "prismatic spray", "regenerate", "resurrection",
			// 8th (Greater Formula)
			"antimagic field", "antipathy/sympathy", "breath of nightshade", "clone", "dominate monster", "feeblemind", "mind blank", "plague wind", "power word stun",
			// 9th (Greater Formula)
			"astral projection", "foresight", "mass heal", "pandemic", "power word kill", "time stop", "touch of death", "true polymorph", "true resurrection"
		]
	},

	spellcastingKnown : {
		cantrips : [3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], // Cantrips Known per level (book table)
		spells : "list",   // prepares from the apothecary list above
		// Prepared COUNT is overridden to the book formula (Int + full level) via calcChanges.spellCalc in the "apothecary magic" feature below.
		prepared : true
	},

	// --- Custom warlock-style Pact Magic table (book p.134) ---
	// Format (verified against the working Warden class, PbFarmer): 9 columns = SPELL LEVELS 1..9
	//   (column index 0 = number of 1st-level slots, index 1 = 2nd-level, ... index 4 = 5th-level).
	//   Rows = character levels; index 0 = level 1 ... index 19 = level 20 (20 rows).
	// Apothecary: ALL slots are the SAME level, capped at 5th. Counts 1->20: 1,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6.
	// !! IN-SHEET VERIFY: a level-1 apothecary should show exactly 1 first-level slot; a level-5 should show 3 third-level slots.
	//    If the slots appear shifted by one character level, the engine wants index0=level0 -> prepend a [0,0,0,0,0,0,0,0,0] row.
	spellcastingTable : [
		[1, 0, 0, 0, 0, 0, 0, 0, 0], // lvl 1:  1x 1st
		[2, 0, 0, 0, 0, 0, 0, 0, 0], // lvl 2:  2x 1st
		[0, 2, 0, 0, 0, 0, 0, 0, 0], // lvl 3:  2x 2nd
		[0, 2, 0, 0, 0, 0, 0, 0, 0], // lvl 4:  2x 2nd
		[0, 0, 3, 0, 0, 0, 0, 0, 0], // lvl 5:  3x 3rd
		[0, 0, 3, 0, 0, 0, 0, 0, 0], // lvl 6:  3x 3rd
		[0, 0, 0, 3, 0, 0, 0, 0, 0], // lvl 7:  3x 4th
		[0, 0, 0, 3, 0, 0, 0, 0, 0], // lvl 8:  3x 4th
		[0, 0, 0, 0, 4, 0, 0, 0, 0], // lvl 9:  4x 5th
		[0, 0, 0, 0, 4, 0, 0, 0, 0], // lvl 10: 4x 5th
		[0, 0, 0, 0, 4, 0, 0, 0, 0], // lvl 11: 4x 5th
		[0, 0, 0, 0, 4, 0, 0, 0, 0], // lvl 12: 4x 5th
		[0, 0, 0, 0, 5, 0, 0, 0, 0], // lvl 13: 5x 5th
		[0, 0, 0, 0, 5, 0, 0, 0, 0], // lvl 14: 5x 5th
		[0, 0, 0, 0, 5, 0, 0, 0, 0], // lvl 15: 5x 5th
		[0, 0, 0, 0, 5, 0, 0, 0, 0], // lvl 16: 5x 5th
		[0, 0, 0, 0, 6, 0, 0, 0, 0], // lvl 17: 6x 5th
		[0, 0, 0, 0, 6, 0, 0, 0, 0], // lvl 18: 6x 5th
		[0, 0, 0, 0, 6, 0, 0, 0, 0], // lvl 19: 6x 5th
		[0, 0, 0, 0, 6, 0, 0, 0, 0]  // lvl 20: 6x 5th
	],

	// REQUIRED by MPMB. This file adds only the spellcasting feature (it carries the prepared-count override).
	// Occult Practices, Esoteric Theories, and Greater Formula come later.
	features : {
		"apothecary magic" : {
			name : "Apothecary Magic",
			source : [["SCGD", 134]],
			minlevel : 1,
			description : "\n   I prepare Intelligence modifier + my apothecary level apothecary spells (minimum of one). All my apothecary spell slots are the SAME level and are regained on a SHORT or long rest (track the short rest manually).",
			// Override the prepared-spell COUNT to the book formula (SCGD p.135): Int mod + FULL apothecary level (min 1).
			// MPMB's half-caster default is Int + floor(level/2); spellCalc adds the missing ceil(level/2) = level - floor(level/2) on "prepare".
			// spellCalc syntax confirmed from real all_WotC code (Rod of the Pact Keeper, Blackstaff, etc.): function(type, spellcasters, ability) returning a number added to the calc for that type.
			calcChanges : {
				spellCalc : [
					function (type, spellcasters, ability) {
						if (type !== "prepare" || spellcasters.indexOf("apothecary") === -1) return;
						var c = classes.known.apothecary;
						if (!c) return;
						return c.level - Math.floor(c.level / 2);
					},
					"I prepare a number of apothecary spells equal to my Intelligence modifier + my apothecary level (minimum of one)."
				]
			}
		}
	}

	// Caveat the sheet does NOT enforce (also stated in the Apothecary Magic feature): all spell slots are the SAME
	// level and recover on a SHORT or long rest — track the short rest by hand.
	// Still to add: Occult Practices (subclasses), Esoteric Theories, and Greater Formula.
};
