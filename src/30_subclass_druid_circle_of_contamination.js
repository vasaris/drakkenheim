/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		Adds the Circle of Contamination, a Druid subclass from Sebastian Crowe's Guide to Drakkenheim (p.157).
				Game content (C) Ghostfire Gaming / The Dungeon Dudes. Only import if you own the book.
				NOTE: the leveled Circle spells are Contaminated Spells from Crowe's Guide Ch.4. They are listed in
				the feature text but are NOT auto-added here, because they require a separate Contaminated Spells script.
				Once that script is imported, the spells can be wired in via spellcastingExtra.
	Edition:	D&D 5e (2014) — for MPMB's 2014 sheet.
	Code by:	(community build, matches the SCGtD AddSubClass pattern)
	Date:		2026-06-27 (sheet v13)
*/
var iFileName = "Druid_Circle_of_Contamination.js";

RequiredSheetVersion("13.2.0");

SourceList["SCGD"] = {
	name : "Sebastian Crowe's Guide to Drakkenheim",
	abbreviation : "SCGD",
	group : "Ghostfire Gaming",
	date : "2024/01/01",
	url : "https://ghostfiregaming.com/product/sebastian-crowes-guide-to-drakkenheim-hardcover-book/"
};

AddSubClass("druid", "circle of contamination", {
	regExpSearch : /^(?=.*circle)(?=.*contamination)(?=.*druid).*$/i,
	subname : "Circle of Contamination",
	source : [["SCGD", 157]],
	features : {
		"subclassfeature2" : {
			name : "Circle Spells",
			source : [["SCGD", 157]],
			minlevel : 2,
			description : "\n   I learn the Chill Touch and Poison Needle cantrips; they don't count against my cantrips known" +
			              "\n   At druid level 3/5/7/9 I gain Circle of Contamination spells, always prepared, not counting against my prepared spells:" +
			              "\n   3rd: Biohazard, Controlled Mutation   5th: Purge Contamination, Venomous Aura" +
			              "\n   7th: Horrific Transformation, Poison Wave   9th: Acid Rain, Toxic Barrage" +
			              "\n   (These leveled spells are Contaminated Spells; add the Contaminated Spells script to see them on the sheet)",
			spellcastingBonus : [{
				name : "Circle of Contamination",
				spells : ["chill touch", "poison needle"],
				selection : ["chill touch", "poison needle"],
				firstCol : "atwill"
			}]
		},
		"subclassfeature2.1" : {
			name : "Blighted Magic",
			source : [["SCGD", 157]],
			minlevel : 2,
			description : "\n   When I cast a spell I can expend one use of Wild Shape to apply one option below:" +
			              "\n   Twin Spell: a single-target, non-self spell also targets a 2nd creature in range" +
			              "\n   Quicken Spell: cast a 1-action spell as a bonus action" +
			              "\n   Corrupt Spell: change all the spell's damage to necrotic; reroll up to Wis mod damage dice (min 1)" +
			              "\n   Purify Spell: cast a Contaminated spell without gaining a Contamination Level"
		},
		"subclassfeature6" : {
			name : "Despoiler",
			source : [["SCGD", 157]],
			minlevel : 6,
			description : "\n   I gain resistance to poison and necrotic damage",
			dmgres : ["Poison", "Necrotic"]
		},
		"subclassfeature6.1" : {
			name : "Cycle of Contamination",
			source : [["SCGD", 157]],
			minlevel : 6,
			description : "\n   Once per long rest I can cast Purge Contamination as an action without a spell slot or material components;" +
			              "\n   the target gains no exhaustion from that casting",
			usages : 1,
			recovery : "long rest",
			action : [["action", "Purge Contamination"]]
		},
		"subclassfeature10" : {
			name : "Draw Corruption",
			source : [["SCGD", 157]],
			minlevel : 10,
			description : "\n   Once per turn as a bonus action I can gain one Contamination Level; if I do, I regain one use of Wild Shape",
			action : [["bonus action", "Draw Corruption"]]
		},
		"subclassfeature10.1" : {
			name : "Defile Elements",
			source : [["SCGD", 157]],
			minlevel : 10,
			description : "\n   I always have Summon Delerium Elemental prepared (doesn't count against prepared spells)" +
			              "\n   Once per long rest I cast it free (no slot, component, or Contamination Level)" +
			              "\n   I can cast it without concentration; if I do, its duration becomes 1 minute",
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature14" : {
			name : "Haze Aura",
			source : [["SCGD", 157]],
			minlevel : 14,
			description : "\n   While I am not incapacitated, a creature of my choice that starts its turn within 10 ft makes a Con save vs my spell DC" +
			              "\n   On a fail: 3d6 necrotic damage; if it fails by 5+ it also gains one Contamination Level" +
			              "\n   On a success it is immune to my Haze Aura for 24 hours"
		}
	}
});
