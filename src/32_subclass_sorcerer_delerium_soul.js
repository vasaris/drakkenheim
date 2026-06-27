/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		Adds the Delerium Soul, a Sorcerous Origin from Sebastian Crowe's Guide to Drakkenheim (p.170).
				Game content (C) Ghostfire Gaming / The Dungeon Dudes. Only import if you own the book.
				NOTE: most Delerium Spells are Contaminated Spells (Crowe's Guide Ch.4) and are not defined here.
				Faerie Fire and Wall of Force are core spells and will populate at the right sorcerer levels via
				spellcastingExtra; the Contaminated ones light up once a Contaminated Spells script is imported.
	Edition:	D&D 5e (2014) — for MPMB's 2014 sheet.
	Code by:	(community build, matches the SCGtD AddSubClass pattern)
	Date:		2026-06-27 (sheet v13)
*/
var iFileName = "Sorcerer_Delerium_Soul.js";

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

AddSubClass("sorcerer", "delerium soul", {
	regExpSearch : /^(?=.*delerium)(?=.*soul).*$/i,
	subname : "Delerium Soul",
	source : [["SCGD", 170]],
	// Defined core spells auto-populate at the correct levels; undefined Contaminated Spells are skipped until a spells script is added
	spellcastingExtra : ["faerie fire", "comet shards", "controlled mutation", "grasping ghost", "vanish to the space between worlds", "weave the elder sign", "siphon time", "summon delerium elemental", "contaminated hands", "wall of force"],
	features : {
		"subclassfeature1" : {
			name : "Delerium Spells",
			source : [["SCGD", 170]],
			minlevel : 1,
			description : "\n   I gain extra always-known sorcerer spells that don't count against my spells known:" +
			              "\n   1st: Comet Shards, Faerie Fire   3rd: Controlled Mutation, Grasping Ghost   5th: Vanish to the Space Between Worlds, Weave the Elder Sign" +
			              "\n   7th: Siphon Time, Summon Delerium Elemental   9th: Contaminated Hand, Wall of Force" +
			              "\n   On a sorcerer level-up I can swap one of these for another Contaminated Spell of the same level" +
			              "\n   (The Contaminated ones need a Contaminated Spells script to show on the sheet)"
		},
		"subclassfeature1.1" : {
			name : "Mutant Manifestation",
			source : [["SCGD", 170]],
			minlevel : 1,
			description : "\n   When I finish a long rest I can roll twice on the Mutations table and pick one result; I gain that mutation" +
			              "\n   until my next long rest, even if I have no Contamination Levels",
			recovery : "long rest"
		},
		"subclassfeature6" : {
			name : "Contaminated Sorcery",
			source : [["SCGD", 170]],
			minlevel : 6,
			description : "\n   I can cast a Contaminated Spell with a spell slot, or by spending sorcery points equal to its level" +
			              "\n   If I use sorcery points: no Contamination Level, delerium components aren't consumed, but it immediately causes an Arcane Anomaly"
		},
		"subclassfeature14" : {
			name : "Incomprehensible Arcana",
			source : [["SCGD", 170]],
			minlevel : 14,
			description : "\n   I can cast any spell from any class list, of a level I have slots for, expending a slot and providing components as normal" +
			              "\n   Before it takes effect I gain Contamination Levels equal to half the spell's level (round down, min 1); I can't prevent these but can remove them normally"
		},
		"subclassfeature18" : {
			name : "Chaos Theory",
			source : [["SCGD", 170]],
			minlevel : 18,
			description : "\n   Once per turn, when I make an attack roll, ability check, or saving throw, I can trigger an Arcane Anomaly to roll with advantage" +
			              "\n   Uses equal to my Charisma modifier (min 1), regained on a long rest",
			usages : 1,
			usagescalc : "event.value = Math.max(1, Number(What('Cha Mod')) || 1);",
			additional : "Cha modifier",
			recovery : "long rest"
		}
	}
});
