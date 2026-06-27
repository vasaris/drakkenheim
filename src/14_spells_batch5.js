/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Spells
	Effect:		New Spells from Sebastian Crowe's Guide to Drakkenheim, Chapter 4 — BATCH 5 (5th & 6th level).
				Game content (C) Ghostfire Gaming / The Dungeon Dudes. Only import if you own the book.
				Storm of Contamination is a Contaminated Spell (casting it gives 1 Contamination Level); the others are not.
				Class lists approximate the Ch.4 spell-by-class table; verify if strict list-purity matters.
				NOTE: in the two-column print layout the names Septic Shock and Mephitic Vapors sit by their blocks;
				names were reconciled against the book index, the by-class table, and the official text:
				Septic Shock = the bacteria/necrotic block (5th necromancy), Mephitic Vapors = the acrid-gas block (6th conjuration).
	Edition:	D&D 5e (2014) — for MPMB's 2014 sheet.
	Code by:	(community build)
	Date:		2026-06-27 (sheet v13)
*/
var iFileName = "Drakkenheim_Spells_batch5.js";

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

SpellsList["nerve gas"] = {
	name : "Nerve Gas",
	classes : ["sorcerer", "wizard"],
	source : [["SCGD", 191]],
	level : 5,
	school : "Necro",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "samples of phosphate and chlorine mixed with a drop of pure alcohol",
	duration : "Conc, 10 min",
	save : "Int",
	description : "10-ft-radius sphere of toxic fog (heavily obscured, spreads around corners); enter/start turn there: Int save or 3d6 psychic & stunned to start of its next turn; half & no stun on save; +1d6/SL>5",
	descriptionFull : "You create a 10-foot-radius sphere of toxic fog centered on a point within range. The fog spreads around corners and heavily obscures its area; it lasts for the duration or until strong wind disperses it. When a creature enters the area for the first time on a turn or starts its turn there, it makes an Intelligence save, taking 3d6 psychic damage and being stunned until the start of its next turn on a failure, or half damage and no stun on a success. Creatures are affected even if holding their breath or not needing to breathe." + "\n   At Higher Levels: +1d6 psychic damage for each slot level above 5th."
};

SpellsList["neutralizing field"] = {
	name : "Neutralizing Field",
	classes : ["cleric", "druid", "paladin", "sorcerer", "wizard"],
	source : [["SCGD", 192]],
	level : 5,
	school : "Abjur",
	time : "1 a",
	range : "Self (10-ft radius)",
	components : "V,S,M",
	compMaterial : "a delerium crystal or holy relic worth 1,000 gp",
	duration : "Conc, 1 h",
	description : "10-ft-radius sphere moves with me; creatures inside (incl. me) can't gain Contamination Levels & have resistance to necrotic; Contaminated spells can't be cast inside",
	descriptionFull : "You negate contaminated magical energies in a 10-foot-radius sphere that moves with you, centered on you, for the duration. Creatures in the sphere (including you) can't gain Contamination Levels and have resistance to necrotic damage. Contaminated spells can't be cast by creatures in the area."
};

// Names reconciled vs the book index, the by-class table, and the official text (the two-column layout invited a name/block mix-up):
// Septic Shock = bacteria/necrotic block (5th necromancy); Mephitic Vapors = acrid gas/slime block (6th conjuration). Mechanics below are unchanged.
// classes here are verified against the Ch.4 by-class table (unlike the approximate lists elsewhere in this pack).
SpellsList["mephitic vapors"] = {
	name : "Mephitic Vapors",
	classes : ["cleric", "warlock", "wizard"],
	source : [["SCGD", 192]],
	level : 6,
	school : "Conj",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "a vial of chlorine",
	duration : "Conc, 10 min",
	save : "Con",
	description : "20-ft-radius acrid slime (dur): difficult terrain; a creature wholly inside is blinded & can't take reactions; start turn there: Con save or 2d8 poison + 2d8 acid & 1 exhaustion; +1d8 poison & +1d8 acid/SL>6",
	descriptionFull : "You douse a 20-foot-radius area within range with acrid slime for the duration. The area is difficult terrain, and any creature wholly within it is blinded and can't take reactions. A creature that starts its turn in the area makes a Constitution save or takes 2d8 poison and 2d8 acid damage and gains 1 level of exhaustion." + "\n   At Higher Levels: +1d8 poison and 1d8 acid damage for each slot level above 6th."
};

// classes here are verified against the Ch.4 by-class table (unlike the approximate lists elsewhere in this pack).
SpellsList["septic shock"] = {
	name : "Septic Shock",
	classes : ["sorcerer", "wizard"],
	source : [["SCGD", 192]],
	level : 5,
	school : "Necro",
	time : "1 a",
	range : "150 ft",
	components : "V,S,M",
	compMaterial : "a piece of a rotten liver",
	duration : "Instantaneous",
	save : "Con",
	description : "1 wounded creature (not at full HP), Con save (disadv if below half its max HP): 10d8 necrotic & 1 exhaustion; half & no exhaustion on save",
	descriptionFull : "Choose a creature you can see within range that doesn't have all its hit points; you infect its wounds with putrefying bacteria. It makes a Constitution save (with disadvantage if it has less than half its maximum hit points), taking 10d8 necrotic damage and gaining 1 level of exhaustion on a failure, or half damage and no exhaustion on a success."
};

SpellsList["vile necrosis"] = {
	name : "Vile Necrosis",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["SCGD", 192]],
	level : 6,
	school : "Necro",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "a vial of coagulated blood",
	duration : "Instantaneous",
	save : "Con",
	description : "Ranged spell attack: 12d6 necrotic on hit & target weakened (deals half damage with weapons & spells); Con save at end of each of its turns ends the weakness",
	descriptionFull : "You project a pale green beam at a creature within range. Make a ranged spell attack; on a hit the target takes 12d6 necrotic damage and becomes weakened. While weakened, the target deals half damage with weapon attacks and spells. It can make a Constitution save at the end of each of its turns, ending the weakness on a success."
};

SpellsList["storm of contamination"] = {
	name : "Storm of Contamination",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["SCGD", 197]],
	level : 6,
	school : "Evoc",
	time : "1 a",
	range : "150 ft",
	components : "V,S,M",
	compMaterial : "a delerium fragment worth 100 gp, consumed",
	duration : "Instantaneous",
	save : "Dex",
	description : "[Contaminated: +1 Cont. Lvl] Eldritch lightning hits 1 target, then leaps to up to 5 others within 30 ft (each hit once); Dex save: 10d12 lightning (half on save); a target that fails also gains 1 Cont. Lvl",
	descriptionFull : "Contaminated: casting this spell gives you 1 Contamination Level. You create an arcing bolt of eldritch lightning that strikes a target you can see within range; bolts then leap to up to five other targets, each within 30 feet of the first. A target can be a creature or object and can be hit by only one bolt. Each target makes a Dexterity save, taking 10d12 lightning damage on a failure or half on a success; a target that fails the save also gains 1 Contamination Level."
};
