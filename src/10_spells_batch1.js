/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Spells (Contaminated Spells)
	Effect:		Adds Contaminated Spells from Sebastian Crowe's Guide to Drakkenheim, Chapter 4 (Magic of Drakkenheim).
				Game content (C) Ghostfire Gaming / The Dungeon Dudes. Only import if you own the book.
				BATCH 1 of the chapter (the full chapter has 40+ Contaminated Spells; more batches to follow).
				Casting a Contaminated Spell normally inflicts a Contamination Level (see the setting's rules / Codex).
				Class lists below cover the relevant casters; verify against the Ch.4 "Contaminated Spells by Class" table if strict list-purity matters.
	Edition:	D&D 5e (2014) — for MPMB's 2014 sheet.
	Code by:	(community build)
	Date:		2026-06-27 (sheet v13)
*/
var iFileName = "Drakkenheim_Contaminated_Spells_batch1.js";

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

SpellsList["poison needle"] = {
	name : "Poison Needle",
	classes : ["apothecary", "druid", "sorcerer", "warlock", "wizard"],
	source : [["SCGD", 186]],
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "Ranged spell attack; 1d10 poison; if reduced to 0 HP: stable but poisoned+paralyzed 1 hr; +1d10 at CL5/11/17",
	descriptionFull : "You launch a conjured poisoned dart at a creature within range. Make a ranged spell attack; on a hit the target takes 1d10 poison damage. If this damage reduces the target to 0 hit points, it is stable but poisoned for 1 hour (even after regaining hit points) and is paralyzed while so poisoned." + "\n   The damage increases by 1d10 at character level 5 (2d10), 11 (3d10), and 17 (4d10)."
};

SpellsList["biohazard"] = {
	name : "Biohazard",
	classes : ["apothecary", "druid", "sorcerer", "wizard"],
	source : [["SCGD", 187]],
	level : 2,
	school : "Conj",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "a withered root and a drop of vinegar",
	duration : "1 min",
	save : "Con",
	description : "15-ft cube of toxic sludge 1 min; difficult terrain; enter/start there: Con save or 1d8 poison & poisoned to start of next turn; +1d8/SL>2",
	descriptionFull : "A 15-foot cube within range fills with toxic sludge for the duration; the area is difficult terrain. A creature that enters the area or starts its turn there makes a Constitution save, taking 1d8 poison damage and being poisoned until the start of its next turn on a failure. Creatures are affected even if holding their breath or not needing to breathe." + "\n   At Higher Levels: +1d8 damage for each slot level above 2nd."
};

SpellsList["grasping ghost"] = {
	name : "Grasping Ghost",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["SCGD", 187]],
	level : 2,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "S,M",
	compMaterial : "a finger bone and a scrap of fabric",
	duration : "Instantaneous",
	save : "Str",
	description : "Str save: 3d8 necrotic (half on save); on fail also grappled to end of my next turn & moved up to 30 ft; +1 target/SL>2",
	descriptionFull : "Spectral hands grasp a target within range. It makes a Strength save, taking 3d8 necrotic damage on a failure or half on a success. On a failed save the target is also grappled until the end of your next turn and is immediately moved up to 30 feet in a direction you choose (not upward). On its turn it can use an action to escape with a Strength or Dexterity check vs your spell save DC." + "\n   At Higher Levels: one additional target within range for each slot level above 2nd."
};

SpellsList["purge contamination"] = {
	name : "Purge Contamination",
	classes : ["apothecary", "cleric", "druid", "paladin", "wizard"],
	source : [["SCGD", 188]],
	level : 3,
	school : "Abjur",
	time : "1 h",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "100 gp of alchemical fluids or holy water, consumed",
	duration : "Instantaneous",
	description : "1-hr rite on a humanoid: removes ALL contamination levels & mutations; target gains 1 exhaustion per level removed",
	descriptionFull : "Over 1 hour you apply alchemical fluids or holy water to a contaminated humanoid while reciting a chant that expels eldritch contaminants. When you finish, all contamination levels and mutations are removed from the creature; it then gains 1 level of exhaustion for each contamination level removed this way."
};

SpellsList["acid rain"] = {
	name : "Acid Rain",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["SCGD", 190]],
	level : 5,
	school : "Conj",
	time : "1 a",
	range : "150 ft",
	components : "V,S,M",
	compMaterial : "a pinch of sulfur and ground coal",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "40-ft-tall, 40-ft-rad cylinder 1 min; lightly obscured, douses flames, difficult terrain; enter/start: 3d6 acid + Dex save or prone & +3d6; +1d6/SL>5",
	descriptionFull : "Acid rain falls in a 40-foot-tall, 40-foot-radius cylinder centered on a point within range for the duration. The area is lightly obscured, open flames in it are doused, and accumulating pools make it difficult terrain. When a creature enters the area for the first time on a turn or starts its turn there, it takes 3d6 acid damage and makes a Dexterity save; on a failure it falls prone in the pools and takes an additional 3d6 acid damage." + "\n   At Higher Levels: +1d6 acid damage for each slot level above 5th."
};
