/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Spells
	Effect:		New Spells from Sebastian Crowe's Guide to Drakkenheim, Chapter 4 — BATCH 3 (remaining 3rd & 4th level).
				Game content (C) Ghostfire Gaming / The Dungeon Dudes. Only import if you own the book.
				These are standard new spells (NOT Contaminated Spells), so casting them does not grant a Contamination Level.
				Class lists approximate the Ch.4 spell-by-class table; verify if strict list-purity matters.
	Edition:	D&D 5e (2014) — for MPMB's 2014 sheet.
	Code by:	(community build)
	Date:		2026-06-27 (sheet v13)
*/
var iFileName = "Drakkenheim_Contaminated_Spells_batch3.js";

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

SpellsList["corrosive blast"] = {
	name : "Corrosive Blast",
	classes : ["apothecary", "sorcerer", "wizard"],
	source : [["SCGD", 188]],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "Self (30-ft cone)",
	components : "V,S,M",
	compMaterial : "a vial of acid",
	duration : "Instantaneous",
	save : "Dex",
	description : "30-ft cone, Dex save: 10d4 acid (half on save); destroys organic objects; a creature it kills is left a corroded skeleton; +2d4/SL>3",
	descriptionFull : "Acrid chemicals erupt from your hands. Each creature in a 30-foot cone makes a Dexterity save, taking 10d4 acid damage on a failure or half on a success. The acid destroys organic objects in the area; a creature killed by the spell has its flesh dissolved, leaving only a skeleton." + "\n   At Higher Levels: +2d4 acid damage for each slot level above 3rd."
};

SpellsList["fetid blade"] = {
	name : "Fetid Blade",
	classes : ["apothecary", "ranger", "sorcerer", "wizard"],
	source : [["SCGD", 188]],
	level : 3,
	school : "Evoc",
	time : "1 bns",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "a drop of acid and a pinch of iron dust",
	duration : "Conc, 1 min",
	save : "Con",
	description : "Coat a weapon (Conc 1 min): +2d4 acid on hits, counts as magic; on a melee hit target makes Con save or is poisoned to end of my next turn; +1d4/SL>3",
	descriptionFull : "You coat a touched weapon in acid for the duration; its attacks deal +2d4 acid damage on a hit and it counts as magic. A creature hit by a melee attack with it makes a Constitution save or is poisoned until the end of your next turn." + "\n   At Higher Levels: +1d4 acid damage for each slot level above 3rd."
};

SpellsList["pestilence"] = {
	name : "Pestilence",
	classes : ["apothecary", "cleric", "druid", "warlock", "wizard"],
	source : [["SCGD", 188]],
	level : 3,
	school : "Necro",
	time : "1 a",
	range : "90 ft",
	components : "V,S,M",
	compMaterial : "a withered flower",
	duration : "Conc, 1 min",
	save : "Con",
	description : "Infect up to 3 creatures (Conc 1 min); at start of each of their turns Con save or 3d6 necrotic & 1 exhaustion; 3 successful saves ends it for that target",
	descriptionFull : "You infect up to three creatures within range with a magical disease. At the start of each of an affected target's turns it makes a Constitution save, taking 3d6 necrotic damage and gaining 1 level of exhaustion on a failure. If a target succeeds on three of these saves, the spell ends for it."
};

SpellsList["tranquilizing toxin"] = {
	name : "Tranquilizing Toxin",
	classes : ["apothecary", "druid", "sorcerer", "wizard"],
	source : [["SCGD", 188]],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "1 target, Con save: 8d6 poison + poisoned & stunned to end of my next turn; half & no poison on save; +1d6/SL>3",
	descriptionFull : "One creature within range makes a Constitution save, taking 8d6 poison damage and becoming poisoned (and stunned while so poisoned) until the end of your next turn on a failure, or half damage and no poison on a success." + "\n   At Higher Levels: +1d6 poison damage for each slot level above 3rd."
};

SpellsList["blood worm"] = {
	name : "Blood Worm",
	classes : ["apothecary", "warlock", "wizard"],
	source : [["SCGD", 189]],
	level : 4,
	school : "Necro",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M",
	compMaterial : "a jar full of leeches",
	duration : "Conc, 1 min",
	save : "Con",
	description : "Infect 1 creature (Conc 1 min): once/turn when it's hit by a weapon attack, +4d6 necrotic & the attacker heals that much; each time, infected makes Con save to end spell; +1d6/SL>4",
	descriptionFull : "A parasitic disease infests a creature within range. Once per turn, when a creature hits the infected target with a weapon attack, that attack deals an extra 4d6 necrotic damage and the attacker regains hit points equal to that necrotic damage. Each time the target takes this damage it makes a Constitution save; on a success the spell ends." + "\n   At Higher Levels: +1d6 necrotic damage for each slot level above 4th."
};

SpellsList["corpse explosion"] = {
	name : "Corpse Explosion",
	classes : ["apothecary", "sorcerer", "warlock", "wizard"],
	source : [["SCGD", 189]],
	level : 4,
	school : "Necro",
	time : "1 rea",
	timeFull : "1 reaction, which you take when a creature you can see dies within 120 ft of you",
	range : "120 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	description : "Reaction when a creature dies within 120 ft: its corpse bursts; creatures within 10 ft take 4d8 necrotic + 4d8 acid, Dex save for half; +1d8 acid/SL>4",
	descriptionFull : "As a reaction to a creature you can see dying within 120 feet, you make its body explode. Creatures within 10 feet of the corpse take 4d8 necrotic and 4d8 acid damage, halved on a successful Dexterity save." + "\n   At Higher Levels: +1d8 acid damage for each slot level above 4th."
};

SpellsList["corrupting spores"] = {
	name : "Corrupting Spores",
	classes : ["apothecary", "druid", "sorcerer", "wizard"],
	source : [["SCGD", 189]],
	level : 4,
	school : "Necro",
	time : "1 bns",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "a dried mushroom",
	duration : "Conc, 1 min",
	save : "Con",
	description : "3 poison mushrooms in a 5-ft square (Conc 1 min); creature starting its turn within 10 ft: Con save or 1d8 poison per mushroom & poisoned; bonus action to sprout +1; +1 starting mushroom/SL>4",
	descriptionFull : "Three poison mushrooms sprout in a 5-foot square within range. A creature that starts its turn within 10 feet of the patch makes a Constitution save or takes 1d8 poison damage per mushroom and is poisoned until the start of its next turn. On your turn you can use a bonus action to sprout one more mushroom in the patch." + "\n   At Higher Levels: one extra mushroom in the initial patch for each slot level above 4th."
};

SpellsList["last rites"] = {
	name : "Last Rites",
	classes : ["apothecary", "cleric", "paladin"],
	source : [["SCGD", 190]],
	level : 4,
	school : "Abjur",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "a small piece of brass, a rose petal, and a drop of holy water",
	duration : "Instantaneous",
	save : "Wis",
	description : "Beam of holy light, Wis save: 8d8 radiant (half on save); no effect on celestials/constructs; undead/fiend roll at disadv & take max dmg, reduced to 0 HP = ash; +1 target/SL>4",
	descriptionFull : "A beam of holy light strikes a creature within range. It makes a Wisdom save, taking 8d8 radiant damage on a failure or half on a success; the spell has no effect on celestials or constructs. An undead or fiend makes the save with disadvantage and takes maximum damage, and is reduced to ash if dropped to 0 hit points." + "\n   At Higher Levels: one additional target (within 30 ft of another) for each slot level above 4th."
};
