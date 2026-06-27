/*	-WHAT IS THIS?-
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


// ===== src/10_spells_batch1.js =====
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
	source : [["SCGD", 188]],
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
	source : [["SCGD", 189]],
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
	source : [["SCGD", 191]],
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

// ===== src/11_spells_batch2.js =====
/*	-INFORMATION-
	Subject:	Spells (Contaminated Spells)
	Effect:		Contaminated Spells from Sebastian Crowe's Guide to Drakkenheim, Chapter 4 — BATCH 2.
				This batch completes the spells referenced by the Circle of Contamination, Malfeasant, and Delerium Soul subclasses.
				Game content (C) Ghostfire Gaming / The Dungeon Dudes. Only import if you own the book.
				Spells marked "Contaminated" make the caster gain 1 Contamination Level when cast (per the setting rules / Codex).
				Class lists approximate the Ch.4 "Contaminated Spells by Class" table; verify if strict list-purity matters.
	Edition:	D&D 5e (2014) — for MPMB's 2014 sheet.
	Code by:	(community build)
	Date:		2026-06-27 (sheet v13)
*/

if (typeof SourceList["SCGD"] === "undefined") {
	SourceList["SCGD"] = {
		name : "Sebastian Crowe's Guide to Drakkenheim",
		abbreviation : "SCGD",
		group : "Ghostfire Gaming",
		date : "2024/01/01",
		url : "https://ghostfiregaming.com/product/sebastian-crowes-guide-to-drakkenheim-hardcover-book/"
	};
}

SpellsList["comet shards"] = {
	name : "Comet Shards",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["SCGD", 194]],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "a delerium chip worth 10 gp, consumed",
	duration : "Instantaneous",
	description : "[Contaminated: +1 Cont. Lvl] 3 comets auto-hit chosen targets; each 2d4+spellmod force & pushes 10 ft; +1 comet/SL>1",
	descriptionFull : "Contaminated: casting this spell gives you 1 Contamination Level. You hurl three comet-like motes of force, each automatically striking a creature of your choice within range (one or several creatures). Each comet deals 2d4 + your spellcasting ability modifier force damage and pushes the target 10 feet away from you." + "\n   At Higher Levels: one extra comet for each slot level above 1st."
};

SpellsList["controlled mutation"] = {
	name : "Controlled Mutation",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["SCGD", 194]],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M",
	compMaterial : "a delerium chip worth 100 gp",
	duration : "Conc, 1 h",
	description : "[Contaminated: +1 Cont. Lvl] Grant 1 creature a chosen ability mutation: advantage on that ability's attacks/checks/saves; target may take a Cont. Lvl for an extra perk; +1 effect/2 SL>2",
	descriptionFull : "Contaminated: casting this spell gives you 1 Contamination Level. You imbue a creature within range with a beneficial mutation for the duration. Choose Strength, Constitution, Dexterity, Intelligence, Wisdom, or Charisma: the target gains advantage on that ability's relevant attack rolls, ability checks, and saving throws (Int/Wis/Cha also grant advantage on spell attack rolls). The target may choose to gain a Contamination Level to also gain a stronger secondary benefit tied to that ability (e.g. extra necrotic damage, damage resistance, improved crits, unbreakable concentration, blindsight, or social reliability)." + "\n   At Higher Levels: choose one additional effect for every two slot levels above 2nd."
};

SpellsList["venomous aura"] = {
	name : "Venomous Aura",
	classes : ["apothecary", "druid", "sorcerer", "wizard"],
	source : [["SCGD", 189]],
	level : 3,
	school : "Trans",
	time : "1 bns",
	range : "Self (10-ft radius)",
	components : "V,S,M",
	compMaterial : "scales or fangs of a venomous snake",
	duration : "1 min",
	description : "Aura 1 min; any creature that starts its turn within 10 ft of me is poisoned until the start of its next turn",
	descriptionFull : "You emit a baleful aura for the duration. Any creature that starts its turn within 10 feet of you is poisoned until the start of its next turn."
};

SpellsList["poison wave"] = {
	name : "Poison Wave",
	classes : ["apothecary", "druid", "sorcerer", "wizard"],
	source : [["SCGD", 190]],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "Self (30-ft sphere)",
	components : "V,S,M",
	compMaterial : "a withered root and a drop of vinegar",
	duration : "Instantaneous",
	save : "Con",
	description : "30-ft sphere; Con save: 4d12 poison & poisoned to end of my next turn; half & no poison on save; +1d12/SL>4",
	descriptionFull : "A wave of poisonous fumes bursts from you. Each creature within 30 feet makes a Constitution save, taking 4d12 poison damage and being poisoned until the end of your next turn on a failure, or half damage and no poison on a success." + "\n   At Higher Levels: +1d12 poison damage for each slot level above 4th."
};

SpellsList["toxic barrage"] = {
	name : "Toxic Barrage",
	classes : ["apothecary", "druid", "sorcerer", "wizard"],
	source : [["SCGD", 192]],
	level : 5,
	school : "Conj",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "four death cap mushrooms",
	duration : "Instantaneous",
	save : "Con",
	description : "4 rays, ranged spell attack each, 3d6 poison/hit; if hit by 1+: Con save or poisoned 1 min (save ends); +1 ray/SL>5",
	descriptionFull : "You hurl four rays of poison at one or several targets. Make a ranged spell attack for each ray; a hit deals 3d6 poison damage. A creature hit by one or more rays makes a Constitution save or is poisoned for 1 minute, repeating the save at the end of each of its turns to end it." + "\n   At Higher Levels: one additional ray for each slot level above 5th."
};

SpellsList["vanish to the space between worlds"] = {
	name : "Vanish to the Space Between Worlds",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["SCGD", 195]],
	level : 3,
	school : "Abjur",
	time : "1 rea",
	timeFull : "1 reaction, which you take when you take damage",
	range : "Self",
	components : "S,M",
	compMaterial : "a delerium chip worth 10 gp",
	duration : "1 round",
	description : "[Contaminated: +1 Cont. Lvl] Reaction on taking damage: vanish (avoid that damage), return within 30 ft at start of my next turn",
	descriptionFull : "Contaminated: casting this spell gives you 1 Contamination Level. As a reaction when you take damage, you vanish into the Space Between Worlds, avoiding the triggering damage. At the start of your next turn you return to an unoccupied space within 30 feet. While there you can see/hear your origin plane as a blur (up to 60 ft) and only interact with creatures also in that space."
};

SpellsList["weave the elder sign"] = {
	name : "Weave the Elder Sign",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["SCGD", 195]],
	level : 3,
	school : "Illus",
	time : "1 a",
	range : "120 ft",
	components : "S,M",
	compMaterial : "a delerium chip worth 10 gp, consumed",
	duration : "Conc, 1 min",
	save : "Int",
	description : "[Contaminated: +1 Cont. Lvl] 30-ft cube; seers make Int save or blinded+stunned (dur); save = blinded to end of my next turn; stun ends on damage, then 3d6 psychic",
	descriptionFull : "Contaminated: casting this spell gives you 1 Contamination Level. An impossible sign flashes in a 30-foot cube within range. Each creature that sees it makes an Intelligence save: on a failure it is blinded and stunned for the duration; on a success it is blinded until the end of your next turn. The stun ends if the creature takes damage or someone uses an action to shake it free; when the stun ends it takes 3d6 psychic damage."
};

SpellsList["horrific transformation"] = {
	name : "Horrific Transformation",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["SCGD", 195]],
	level : 4,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "a delerium fragment worth 100 gp and the heart or brain of a creature of the same type as the chosen form, both consumed",
	duration : "Conc, 1 min",
	description : "[Contaminated: +1 Cont. Lvl] Turn a willing creature you touch into an aberration of CR 4 or lower for up to 1 min (it can't speak/cast/use hands)",
	descriptionFull : "Contaminated: casting this spell gives you 1 Contamination Level. A willing creature you touch becomes a horrific aberration of CR 4 or lower for the duration (no effect on shapechangers or creatures at 0 HP). Its statistics, including mental scores, are replaced by the form's, keeping alignment and personality; it assumes the new form's hit points and reverts to its prior HP when the form ends. It can't speak, cast spells, or take actions needing hands or speech, and its gear melds in."
};

SpellsList["siphon time"] = {
	name : "Siphon Time",
	classes : ["sorcerer", "wizard"],
	source : [["SCGD", 196]],
	level : 4,
	school : "Trans",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "a broken clock and a delerium fragment worth 100 gp, consumed",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "[Contaminated: +1 Cont. Lvl] Up to 3 creatures: Wis save or no reactions & only one of move/action/bonus per turn; while 1+ affected I gain a limited extra action",
	descriptionFull : "Contaminated: casting this spell gives you 1 Contamination Level. Up to three creatures within range make a Wisdom save or be affected: they can't take reactions and on their turn may take only one of move, an action, or a bonus action. An affected creature can spend its action to repeat the save. While at least one creature is affected, you gain one extra action per turn usable only for Attack (one weapon attack), Cast a Spell (an action cantrip), Dash, Disengage, Hide, or Use an Object."
};

SpellsList["summon delerium elemental"] = {
	name : "Summon Delerium Elemental",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["SCGD", 196]],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
	components : "V,S,M",
	compMaterial : "a delerium fragment worth 100 gp, consumed",
	duration : "Conc, 1 h",
	description : "[Contaminated: +1 Cont. Lvl] Summon an air/earth/fire/water contaminated elemental (Delerium Elemental stat block in book) for 1 hr; obeys me; lose conc. = it turns hostile",
	descriptionFull : "Contaminated: casting this spell gives you 1 Contamination Level. You conjure a contaminated elemental (living haze/air, walking geode/earth, entropic flame/fire, or animated sludge/water) using the Delerium Elemental stat block (see book). It is friendly, shares your initiative (acting just after you), and obeys your verbal commands. If you lose concentration it turns hostile and can't be dismissed until destroyed." + "\n   At Higher Levels: cast with a 5th-level or higher slot to use the higher level in its stat block."
};

SpellsList["contaminated hands"] = {
	name : "Contaminated Hands",
	classes : ["sorcerer", "wizard"],
	source : [["SCGD", 197]],
	level : 5,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "a delerium fragment worth 100 gp, consumed",
	duration : "Conc, 1 min",
	description : "[Contaminated: +1 Cont. Lvl] Create TWO Large octarine force hands (AC 20, HP = my max each); move 60 ft & each performs a forceful-hand effect; if either hits 0 HP the spell ends",
	descriptionFull : "Contaminated: casting this spell gives you 1 Contamination Level. You create two Large hands of octarine force (each AC 20, HP equal to your hit point maximum, Strength 26, Dexterity 10). When you cast and as an action on later turns you move the hands up to 60 feet and have each take a forceful-hand effect (clenched-fist strike, grasp/grapple, push, or interpose), similar to a two-handed Arcane Hand. If either hand drops to 0 hit points, the spell ends."
};

// ===== src/12_spells_batch3.js =====
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
	source : [["SCGD", 189]],
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
	source : [["SCGD", 189]],
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
	source : [["SCGD", 189]],
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
	source : [["SCGD", 190]],
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

// Book prints "above 5th" but Last Rites is a 4th-level spell — treated as a book typo, normalized to "above 4th".
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

// ===== src/13_spells_batch4.js =====
/*	-INFORMATION-
	Subject:	Spells
	Effect:		New Spells from Sebastian Crowe's Guide to Drakkenheim, Chapter 4 — BATCH 4 (cantrips, 1st & 2nd level, plus the deferred Summon the Thing with the Writhing Tail).
				Game content (C) Ghostfire Gaming / The Dungeon Dudes. Only import if you own the book.
				These are standard New Spells (NOT Contaminated Spells), so casting them does not grant a Contamination Level.
				Class lists approximate the Ch.4 spell-by-class table; verify if strict list-purity matters.
				The Thing with the Writhing Tail ("Bruce") summoned stat block is NOT defined here (would be an MPMB CreatureList entry); only the spell is.
	Edition:	D&D 5e (2014) — for MPMB's 2014 sheet.
	Code by:	(community build)
	Date:		2026-06-27 (sheet v13)
*/

if (typeof SourceList["SCGD"] === "undefined") {
	SourceList["SCGD"] = {
		name : "Sebastian Crowe's Guide to Drakkenheim",
		abbreviation : "SCGD",
		group : "Ghostfire Gaming",
		date : "2024/01/01",
		url : "https://ghostfiregaming.com/product/sebastian-crowes-guide-to-drakkenheim-hardcover-book/"
	};
}

SpellsList["acid burn"] = {
	name : "Acid Burn",
	classes : ["apothecary", "sorcerer", "wizard"],
	source : [["SCGD", 186]],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "Self (15-ft cone)",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	description : "15-ft cone; each creature Dex save or 1d6 acid; +1d6 at CL5/11/17",
	descriptionFull : "You magically produce a spray of acidic formula in a 15-foot cone in front of you. All creatures in the cone must succeed on a Dexterity saving throw or take 1d6 acid damage." + "\n   The damage increases by 1d6 at character level 5 (2d6), 11 (3d6), and 17 (4d6)."
};

SpellsList["bacterial barrage"] = {
	name : "Bacterial Barrage",
	classes : ["apothecary", "druid", "sorcerer", "wizard"],
	source : [["SCGD", 186]],
	level : 0,
	school : "Necro",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "Ranged spell attack: 1d8 necrotic (1d12 if target is poisoned or diseased); scales at CL5/11/17",
	descriptionFull : "You attack a creature in range with a quick spreading infection that takes advantage of existing conditions. Make a ranged spell attack; on a hit the infection deals 1d8 necrotic damage. If the target is suffering from the poisoned condition or a disease, it instead takes 1d12 necrotic damage." + "\n   The damage increases by one die at character level 5 (2d8 or 2d12), 11 (3d8 or 3d12), and 17 (4d8 or 4d12)."
};

SpellsList["acrid orb"] = {
	name : "Acrid Orb",
	classes : ["apothecary", "ranger", "sorcerer", "wizard"],
	source : [["SCGD", 187]],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "a vial of stomach acid and a pinch of sulfate",
	duration : "Instantaneous",
	save : "Dex",
	description : "Ranged spell attack: 2d6 acid on hit; hit or miss the orb explodes - target & creatures within 5 ft Dex save or 2d6 acid; +1d6 (explosion)/SL>1",
	descriptionFull : "You create an orb of acid gel and fling it at one creature within range. Make a ranged spell attack; on a hit the target takes 2d6 acid damage. Whether the attack hits or misses, the orb explodes: the target and each creature within 5 feet of it must succeed on a Dexterity save or take 2d6 acid damage." + "\n   At Higher Levels: the exploding acid damage increases by 1d6 for each slot level above 1st."
};

SpellsList["envenom"] = {
	name : "Envenom",
	classes : ["apothecary", "druid", "sorcerer", "wizard"],
	source : [["SCGD", 187]],
	level : 1,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "a vial of basic poison",
	duration : "Conc, 1 min",
	save : "Con",
	description : "Target: 2d4 poison & Con save or poisoned (dur); while poisoned Con save end of each turn, 2d4 poison on fail (success ends); lesser restoration ends it; +1 target/SL>1",
	descriptionFull : "Choose a creature you can see within range. It takes 2d4 poison damage and makes a Constitution save; on a failure it is poisoned for the duration. While poisoned this way it makes a Constitution save at the end of each of its turns, taking 2d4 poison damage on a failure; on a success the spell ends on that target. A lesser restoration spell cast on the target ends this spell early." + "\n   At Higher Levels: one additional target for each slot level above 1st."
};

SpellsList["infect"] = {
	name : "Infect",
	classes : ["apothecary", "druid", "sorcerer", "wizard"],
	source : [["SCGD", 187]],
	level : 1,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "a petri dish",
	duration : "Conc, 1 min",
	save : "Con",
	description : "Disease; at start of each of target's turns Con save: 1d12 necrotic on fail, half on success; 3 successes ends; lesser restoration ends it; +1d12/2 SL>1",
	descriptionFull : "You inflict a creature you can see within range with a magical disease. At the start of each of the target's turns it makes a Constitution save, taking 1d12 necrotic damage on a failure or half on a success. If a target succeeds on three of these saves, the spell ends. A lesser restoration spell cast on the target ends this spell early." + "\n   At Higher Levels: the damage increases by 1d12 for every two slot levels above 1st."
};

SpellsList["stream of consumption"] = {
	name : "Stream of Consumption",
	classes : ["apothecary", "sorcerer", "warlock", "wizard"],
	source : [["SCGD", 187]],
	level : 1,
	school : "Necro",
	time : "1 a",
	range : "Self (60-ft tether)",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Con",
	description : "1 creature within 60 ft Con save or gains 1 exhaustion & I regain 1d4+spellmod HP; each turn (action) retarget; can't retarget one that saved",
	descriptionFull : "For the duration your tongue becomes an elongated tether of necrotic energy. One creature of your choice within 60 feet that you can see makes a Constitution save; on a failure it gains 1 level of exhaustion and you regain hit points equal to 1d4 + your spellcasting ability modifier. On each of your turns until the spell ends you can use your action to target the same or a different creature, but can't target a creature again if it has succeeded on a save against this casting."
};

SpellsList["toxic shield"] = {
	name : "Toxic Shield",
	classes : ["apothecary", "druid", "sorcerer", "wizard"],
	source : [["SCGD", 187]],
	level : 1,
	school : "Conj",
	time : "1 a",
	range : "Self",
	components : "S,M",
	compMaterial : "a drop of dwarven blood",
	duration : "Conc, 1 min",
	description : "Resistance to poison & advantage on saves vs poisoned; a creature that hits me with a melee attack within 5 ft takes 1d8 poison; +1d8/2 SL>1",
	descriptionFull : "You gain resistance to poison damage and advantage on saves against being poisoned for the duration. Whenever a creature within 5 feet of you hits you with a melee attack, the shield sprays it with poison, dealing 1d8 poison damage to the attacker." + "\n   At Higher Levels: the poison damage increases by 1d8 for every two slot levels above 1st."
};

SpellsList["caustic grip"] = {
	name : "Caustic Grip",
	classes : ["apothecary", "sorcerer", "wizard"],
	source : [["SCGD", 188]],
	level : 2,
	school : "Evoc",
	time : "1 a",
	range : "Self (5 ft)",
	components : "S",
	duration : "Conc, 1 min",
	description : "Melee spell attack within 5 ft (recast as action): 4d4 acid & restrained to end of my next turn; Str check vs DC to escape; +4d4 if it ends turn restrained; +2d4/SL>2",
	descriptionFull : "Your hand secretes sticky burning acid. When you cast this spell, and as an action on later turns, you can make a melee spell attack against one creature within 5 feet; on a hit it takes 4d4 acid damage and is restrained until the end of your next turn. You can switch targets (the prior target is freed). A restrained creature can use its action to make a Strength check against your spell save DC to end the restraint. Each time a creature ends its turn restrained by this spell it takes an additional 4d4 acid damage." + "\n   At Higher Levels: the damage increases by 2d4 for each slot level above 2nd."
};

SpellsList["invigorate"] = {
	name : "Invigorate",
	classes : ["apothecary", "bard", "cleric", "wizard"],
	source : [["SCGD", 188]],
	level : 2,
	school : "Abjur",
	time : "1 a",
	range : "30 ft",
	components : "S,M",
	compMaterial : "a syringe and a blood sample",
	duration : "1 h",
	description : "Up to 3 creatures each gain 10 temp HP; +5 temp HP/SL>2",
	descriptionFull : "Choose up to three creatures within range. Each target gains 10 temporary hit points." + "\n   At Higher Levels: the temporary hit points increase by 5 for each slot level above 2nd."
};

SpellsList["ocular necrosis"] = {
	name : "Ocular Necrosis",
	classes : ["apothecary", "sorcerer", "warlock", "wizard"],
	source : [["SCGD", 188]],
	level : 2,
	school : "Necro",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "Ranged spell attack: 2d6 necrotic & blinded to end of my next turn; +1d6/SL>2",
	descriptionFull : "Make a ranged spell attack against a creature you can see in range. On a hit you wrack it with a deadly toxin that causes its eyes to bleed: the creature takes 2d6 necrotic damage and is blinded until the end of your next turn." + "\n   At Higher Levels: the necrotic damage increases by 1d6 for each slot level above 2nd."
};

// Deferred pickup. Book layout: the title prints at the foot of p.190 while the casting block, description, and stat block print on p.191-192; page set to 191 (where the description is printed). The summoned creature ("Bruce") would be a separate MPMB CreatureList entry, not defined here.
SpellsList["summon the thing with the writhing tail"] = {
	name : "Summon the Thing with the Writhing Tail",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["SCGD", 191]],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
	components : "V,S,M",
	compMaterial : "a tuft of cat hair and a dead rat",
	duration : "Conc, 1 h",
	description : "Summon The Thing with the Writhing Tail ('Bruce', Medium aberration; stat block in book) for 1 hr; ally, shares my initiative (acts after me), obeys my verbal commands; 5th+ slot uses the higher level in its stat block",
	descriptionFull : "You call forth The Thing with the Writhing Tail, which manifests in an unoccupied space within range and uses the stat block in the book. It disappears at 0 HP or when the spell ends. It is an ally, shares your initiative count (taking its turn immediately after yours), and obeys your verbal commands (no action required); if you issue none it takes the Dodge action and moves to avoid danger." + "\n   At Higher Levels: cast with a 5th-level or higher slot to use the higher level wherever the spell's level appears in its stat block."
};

SpellsList["vitriol ichor"] = {
	name : "Vitriol Ichor",
	classes : ["apothecary", "sorcerer", "wizard"],
	source : [["SCGD", 191]],
	level : 4,
	school : "Trans",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M",
	compMaterial : "a vial of nitric acid and a flask of water",
	duration : "Conc, 1 min",
	description : "1 armored (or natural-armor) creature: its armor corrodes, AC becomes 10 + Dex mod (dur); +1 target/SL>4",
	descriptionFull : "Choose a creature within range that has natural armor or is wearing armor. You cause its natural or manufactured armor to become corroded and brittle for the duration; while its armor is corroded the creature's AC becomes 10 + its Dexterity modifier." + "\n   At Higher Levels: one additional target for each slot level above 4th."
};

// ===== src/14_spells_batch5.js =====
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
	classes : ["apothecary", "sorcerer", "wizard"],
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
	classes : ["apothecary", "cleric", "druid", "paladin", "sorcerer", "wizard"],
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
	classes : ["apothecary", "sorcerer", "warlock", "wizard"],
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

// ===== src/30_subclass_druid_circle_of_contamination.js =====
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

// ===== src/31_subclass_wizard_malfeasant.js =====
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

// ===== src/32_subclass_sorcerer_delerium_soul.js =====
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
	source : [["SCGD", 171]],
	// Defined core spells auto-populate at the correct levels; undefined Contaminated Spells are skipped until a spells script is added
	spellcastingExtra : ["faerie fire", "comet shards", "controlled mutation", "grasping ghost", "vanish to the space between worlds", "weave the elder sign", "siphon time", "summon delerium elemental", "contaminated hands", "wall of force"],
	features : {
		"subclassfeature1" : {
			name : "Delerium Spells",
			source : [["SCGD", 171]],
			minlevel : 1,
			description : "\n   I gain extra always-known sorcerer spells that don't count against my spells known:" +
			              "\n   1st: Comet Shards, Faerie Fire   3rd: Controlled Mutation, Grasping Ghost   5th: Vanish to the Space Between Worlds, Weave the Elder Sign" +
			              "\n   7th: Siphon Time, Summon Delerium Elemental   9th: Contaminated Hand, Wall of Force" +
			              "\n   On a sorcerer level-up I can swap one of these for another Contaminated Spell of the same level" +
			              "\n   (The Contaminated ones need a Contaminated Spells script to show on the sheet)"
		},
		"subclassfeature1.1" : {
			name : "Mutant Manifestation",
			source : [["SCGD", 171]],
			minlevel : 1,
			description : "\n   When I finish a long rest I can roll twice on the Mutations table and pick one result; I gain that mutation" +
			              "\n   until my next long rest, even if I have no Contamination Levels",
			recovery : "long rest"
		},
		"subclassfeature6" : {
			name : "Contaminated Sorcery",
			source : [["SCGD", 171]],
			minlevel : 6,
			description : "\n   I can cast a Contaminated Spell with a spell slot, or by spending sorcery points equal to its level" +
			              "\n   If I use sorcery points: no Contamination Level, delerium components aren't consumed, but it immediately causes an Arcane Anomaly"
		},
		"subclassfeature14" : {
			name : "Incomprehensible Arcana",
			source : [["SCGD", 171]],
			minlevel : 14,
			description : "\n   I can cast any spell from any class list, of a level I have slots for, expending a slot and providing components as normal" +
			              "\n   Before it takes effect I gain Contamination Levels equal to half the spell's level (round down, min 1); I can't prevent these but can remove them normally"
		},
		"subclassfeature18" : {
			name : "Chaos Theory",
			source : [["SCGD", 171]],
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
