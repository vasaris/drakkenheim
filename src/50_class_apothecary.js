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
			description : "\n   Intelligence is my spellcasting ability. I prepare a number of apothecary spells equal to my Intelligence modifier + my apothecary level (minimum of one). My spell slots are Pact-Magic-style: they are all the SAME level (it rises as I gain levels, capped at 5th), they are few, and I regain all of them on a SHORT or long rest (the sheet does not auto-restore them on a short rest, so do that by hand).",
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
		},
		"esoteric theories" : {
			name : "Esoteric Theories",
			source : [["SCGD", 136]],
			minlevel : 2,
			description : "\n   Use the \"Choose Feature\" button to add an Esoteric Theory (scraps of forbidden lore)" + "\n   On an apothecary level-up I may replace one theory I know with another I qualify for",
			// Selectable pool, syntax per Battle Master Maneuvers / Eldritch Invocations (all_WotC). extraTimes = the book's "Theories Known" column (p.134).
			// This batch holds ONLY the text-only theories; CALC/SPELL/NORMAL theories are added in later phases. prereq is encoded in the choice name AND a prereqeval.
			extraname : "Esoteric Theory",
			extrachoices : ["Adrenaline Surge (prereq: level 6 apothecary)", "Caustic Formulae (prereq: level 6 apothecary)", "Corrosive Compound (prereq: level 6 apothecary)", "Cosmetic Surgery", "Critical Condition (prereq: level 6 apothecary)", "Diagnosis", "Double Dose (prereq: level 10 apothecary)", "Nerve Agent (prereq: level 14 apothecary)", "Noxious Blood (prereq: level 6 apothecary)", "Physiological Analysis", "Putrefaction", "Rapid Response", "Subject Preparation (prereq: level 10 apothecary)", "Surgeon's Instinct", "Virulence"],
			extraTimes : [0, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11],
			"adrenaline surge (prereq: level 6 apothecary)" : {
				name : "Adrenaline Surge",
				source : [["SCGD", 137]],
				description : "\n   When a creature at 0 HP regains HP from a spell I cast with an apothecary slot, until the end of its next turn it has resistance to all damage and advantage on saves, plus advantage on its first attack roll next turn (apply by hand)",
				prereqeval : function (v) { return classes.known.apothecary.level >= 6; }
			},
			"caustic formulae (prereq: level 6 apothecary)" : {
				name : "Caustic Formulae",
				source : [["SCGD", 137]],
				description : "\n   Once per turn when I damage a creature or object with an apothecary spell, I can expend an apothecary spell slot to deal +2d4 acid, plus another 2d4 per level of that slot (apply by hand)",
				prereqeval : function (v) { return classes.known.apothecary.level >= 6; }
			},
			"corrosive compound (prereq: level 6 apothecary)" : {
				name : "Corrosive Compound",
				source : [["SCGD", 137]],
				description : "\n   When I deal poison damage with an apothecary spell, I can deal half of it as poison and half as acid instead (apply by hand)",
				prereqeval : function (v) { return classes.known.apothecary.level >= 6; }
			},
			"cosmetic surgery" : {
				name : "Cosmetic Surgery",
				source : [["SCGD", 137]],
				description : "\n   I can spend 8 hours performing an occult surgery on a willing creature to permanently change its appearance (no change to its game statistics, size, or basic shape); greater restoration or similar magic can revert it"
			},
			"critical condition (prereq: level 6 apothecary)" : {
				name : "Critical Condition",
				source : [["SCGD", 137]],
				description : "\n   When a creature rolls a natural 1 on a save against one of my damaging apothecary spells, I roll all the spell's damage dice twice and add them together, then add modifiers as normal (apply by hand)",
				prereqeval : function (v) { return classes.known.apothecary.level >= 6; }
			},
			"diagnosis" : {
				name : "Diagnosis",
				source : [["SCGD", 137]],
				description : "\n   I can take the Help action as a bonus action on my turn",
				action : [["bonus action", " (Help)"]]
			},
			"double dose (prereq: level 10 apothecary)" : {
				name : "Double Dose",
				source : [["SCGD", 137]],
				description : "\n   When I cast an apothecary spell with a slot that targets a single creature and restores its HP, I can target one additional creature within range",
				prereqeval : function (v) { return classes.known.apothecary.level >= 10; }
			},
			"nerve agent (prereq: level 14 apothecary)" : {
				name : "Nerve Agent",
				source : [["SCGD", 137]],
				description : "\n   When I deal poison damage with my apothecary spells, I can choose to deal psychic damage instead (apply by hand)",
				prereqeval : function (v) { return classes.known.apothecary.level >= 14; }
			},
			"noxious blood (prereq: level 6 apothecary)" : {
				name : "Noxious Blood",
				source : [["SCGD", 138]],
				description : "\n   When a creature within 5 ft hits me with a melee attack, it takes poison damage equal to 1d6 + my Constitution modifier (apply by hand)",
				prereqeval : function (v) { return classes.known.apothecary.level >= 6; }
			},
			"physiological analysis" : {
				name : "Physiological Analysis",
				source : [["SCGD", 138]],
				description : "\n   If I spend at least 1 minute observing or interacting with a creature out of combat, the GM tells me two of: an ability score, AC, current HP, resistances, immunities, or vulnerabilities. Or I observe a corpse for 1 minute to learn its cause of death"
			},
			"putrefaction" : {
				name : "Putrefaction",
				source : [["SCGD", 138]],
				description : "\n   My apothecary spells and abilities ignore undead creatures' resistance or immunity to poison damage and their immunity to the poisoned condition"
			},
			"rapid response" : {
				name : "Rapid Response",
				source : [["SCGD", 138]],
				description : "\n   When I cast an apothecary spell that restores HP to a creature, before or after casting it I can move up to my speed without provoking opportunity attacks (apply by hand)"
			},
			"subject preparation (prereq: level 10 apothecary)" : {
				name : "Subject Preparation",
				source : [["SCGD", 138]],
				description : "\n   When I hit a creature with a melee weapon attack, it has disadvantage on the next save it makes against an apothecary spell I cast before the end of my next turn (apply by hand)",
				prereqeval : function (v) { return classes.known.apothecary.level >= 10; }
			},
			"surgeon's instinct" : {
				name : "Surgeon's Instinct",
				source : [["SCGD", 138]],
				description : "\n   When I cast a spell using an apothecary spell slot or my Greater Formula that restores HP to a creature, it regains additional HP equal to my Intelligence modifier (add by hand)"
			},
			"virulence" : {
				name : "Virulence",
				source : [["SCGD", 139]],
				description : "\n   When I roll a 1 on a damage die for an apothecary spell that deals poison damage, I can reroll the die; I must use the new result, even if it is a 1 (apply by hand)"
			}
		},
		"miraculous recovery" : {
			name : "Miraculous Recovery",
			source : [["SCGD", 136]],
			minlevel : 20,
			description : "\n   Over 5 minutes, tending creatures with a healer's kit that has at least one use left (it expends a use), I let up to my Intelligence modifier creatures (which can include me) regain hit points, spell slots, hit dice, and other abilities as if they had finished a long rest. A creature can benefit from only one Miraculous Recovery per 24 hours. (The sheet will not auto-restore the slots/hit dice — apply that by hand.)",
			usages : 1,
			recovery : "long rest"
		}
	}

	// Caveat the sheet does NOT enforce (also stated in the Apothecary Magic feature): all spell slots are the SAME
	// level and recover on a SHORT or long rest — track the short rest by hand.
	// Still to add: Occult Practices (subclasses), Esoteric Theories, and Greater Formula.
};
