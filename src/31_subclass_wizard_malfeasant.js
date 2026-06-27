/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		Adds the Malfeasant, a Wizard arcane tradition from Sebastian Crowe's Guide to Drakkenheim (p.176).
				Game content (C) Ghostfire Gaming / The Dungeon Dudes. Only import if you own the book.
				NOTE: this subclass revolves around Contaminated Spells (Crowe's Guide Ch.4). Those spells are not
				added here; import a Contaminated Spells script to have them appear on the sheet.
	Edition:	D&D 5e (2014) — for MPMB's 2014 sheet.
	Code by:	(community build, matches the SCGtD AddSubClass pattern)
	Date:		2026-06-27 (sheet v13)
*/
var iFileName = "Wizard_Malfeasant.js";

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

AddSubClass("wizard", "malfeasant", {
	regExpSearch : /malfeasant/i,
	subname : "Malfeasant",
	source : [["SCGD", 177]],
	features : {
		"subclassfeature2" : {
			name : "Forbidden Study",
			source : [["SCGD", 177]],
			minlevel : 2,
			description : "\n   Whenever I gain a wizard level I can add one Contaminated Spell to my spellbook," +
			              "\n   in addition to the two wizard spells I normally learn; I develop it through my own research" +
			              "\n   (Contaminated Spells are from Crowe's Guide Ch.4; add a Contaminated Spells script to see them)"
		},
		"subclassfeature2.1" : {
			name : "Anomalous Materials",
			source : [["SCGD", 177]],
			minlevel : 2,
			description : "\n   I can cast a Contaminated Spell without gaining a Contamination Level; delerium material" +
			              "\n   components aren't consumed (but I still provide them). Uses = my proficiency bonus, regained on a long rest",
			usages : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6],
			recovery : "long rest"
		},
		"subclassfeature2.2" : {
			name : "Horrific Potential",
			source : [["SCGD", 177]],
			minlevel : 2,
			description : "\n   If I undergo a Monstrous Transformation, the GM-chosen form must have CR at least half my level" +
			              "\n   (rounded down) and no greater than my level"
		},
		"subclassfeature6" : {
			name : "Expel Contaminants",
			source : [["SCGD", 177]],
			minlevel : 6,
			description : "\n   When I finish a long rest I can reduce my Contamination Level by half my proficiency bonus (rounded down)",
			recovery : "long rest"
		},
		"subclassfeature6.1" : {
			name : "Increased Threshold",
			source : [["SCGD", 177]],
			minlevel : 6,
			description : "\n   I gain proficiency in Constitution saving throws and resistance to necrotic damage" +
			              "\n   For Contamination Symptoms I count as having half my current Contamination Level (round down)," +
			              "\n   I undergo a Monstrous Transformation at 12 Levels instead of 6, and mutation checks use that halved value" +
			              "\n   (Caution: Purge Contamination while at 6+ Levels still inflicts 6+ exhaustion and kills me)",
			saves : ["Con"],
			dmgres : ["Necrotic"]
		},
		"subclassfeature10" : {
			name : "Contaminated Casting",
			source : [["SCGD", 177]],
			minlevel : 10,
			description : "\n   When I cast a spell that scales with higher slots, I can raise its level without a higher slot;" +
			              "\n   I gain 1 Contamination Level per level raised. Not usable on Contaminated Spells, and not above my highest slot level"
		},
		"subclassfeature10.1" : {
			name : "Stabilizing Focus",
			source : [["SCGD", 177]],
			minlevel : 10,
			description : "\n   While concentrating on a spell I ignore the Symptoms of any Contamination Levels I have, except a Monstrous Transformation"
		},
		"subclassfeature14" : {
			name : "Apotheosis in Flesh",
			source : [["SCGD", 177]],
			minlevel : 14,
			description : "\n   If I undergo a Monstrous Transformation I keep control of the new form for 1 minute" +
			              "\n   Unless I die I revert after 24 hours; on reverting I gain a long rest's benefits and all Contamination Levels are removed" +
			              "\n   The GM sets what memories I keep, and I gain one form of Drakkenheim Madness"
		}
	}
});
