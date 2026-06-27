/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Spells
	Effect:		New Spells from Sebastian Crowe's Guide to Drakkenheim, Chapter 4 — BATCH 6 (7th, 8th & 9th level).
				Game content (C) Ghostfire Gaming / The Dungeon Dudes. Only import if you own the book.
				Contaminated Spells here (casting gives 1 Contamination Level): Octarine Sword, Unbind Gravity,
				Banish to the Space Between Worlds, Delerium Meteor Swarm. The other seven are standard New Spells.
				Class lists approximate the Ch.4 spell-by-class table; verify if strict list-purity matters.
	Edition:	D&D 5e (2014) — for MPMB's 2014 sheet.
	Code by:	(community build)
	Date:		2026-06-27 (sheet v13)
*/
var iFileName = "Drakkenheim_Spells_batch6.js";

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

SpellsList["contamination immunity"] = {
	name : "Contamination Immunity",
	classes : ["apothecary", "cleric", "druid", "paladin", "wizard"],
	source : [["SCGD", 193]],
	level : 7,
	school : "Abjur",
	time : "1 min",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "an eldritch lily mixed into 250 gp of purified fluids per target, consumed",
	duration : "24 h",
	description : "1 willing creature I touch is immune to necrotic & can't gain Contamination Levels for 24 hr (may rest in the Haze); ends if it casts a Contaminated spell",
	descriptionFull : "Until the spell ends, one willing creature you touch is immune to necrotic damage and can't gain Contamination Levels, and may rest normally within the Haze. The spell ends immediately if the creature casts a contaminated spell."
};

SpellsList["grievous wounds"] = {
	name : "Grievous Wounds",
	classes : ["apothecary", "sorcerer", "warlock", "wizard"],
	source : [["SCGD", 193]],
	level : 7,
	school : "Necro",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "a needle and several stitches",
	duration : "Instantaneous",
	description : "1 creature: until end of my next turn it loses all damage resistances & immunities, is vulnerable to all damage, and makes all saves with disadvantage",
	descriptionFull : "Choose a creature you can see within range; you momentarily strip its physiology of all resilience. Until the end of your next turn, the target loses any damage resistances or immunities, becomes vulnerable to all damage, and makes all its saving throws with disadvantage."
};

SpellsList["miasma"] = {
	name : "Miasma",
	classes : ["apothecary", "druid", "sorcerer", "wizard"],
	source : [["SCGD", 193]],
	level : 7,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "a freshly harvested corpse lily",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "Opaque wall of toxic fumes (60x20x1 ft or 20-ft ring): on appearing Dex save 10d4 acid (half); one chosen side deals 8d8 poison to creatures ending turn within 30 ft/inside or entering, then Con save or poisoned; +2d8/SL>7",
	descriptionFull : "You create an opaque wall of toxic fumes on a solid surface within range, up to 60 ft long, 20 ft high, and 1 ft thick (or a ring up to 20 ft in diameter). When it appears, each creature in its area makes a Dexterity save, taking 10d4 acid damage on a failure or half on a success. One side (your choice) emits toxic fumes dealing 8d8 poison damage to each creature that ends its turn within 30 feet of that side or inside the wall, or enters the wall for the first time on a turn; the other side deals no damage. A creature that takes poison damage from the wall makes a Constitution save or is poisoned for the duration." + "\n   At Higher Levels: +2d8 damage for each slot level above 7th."
};

SpellsList["breath of nightshade"] = {
	name : "Breath of Nightshade",
	classes : ["apothecary", "sorcerer", "warlock", "wizard"],
	source : [["SCGD", 193]],
	level : 8,
	school : "Conj",
	time : "1 a",
	range : "Self (60-ft cone)",
	components : "V,S,M",
	compMaterial : "a pair of deadly nightshade flowers",
	duration : "Instantaneous",
	save : "Con",
	description : "60-ft cone of lethal poison; Con save or poisoned 1 hr & paralyzed while so poisoned; the effect ends for a creature if it takes any damage",
	descriptionFull : "You exhale a 60-foot cone of lethal poison. Each creature in the area when you cast the spell makes a Constitution save or becomes poisoned for 1 hour; while poisoned by this spell the creature is paralyzed. The spell ends for an affected creature if it takes any damage."
};

SpellsList["plague wind"] = {
	name : "Plague Wind",
	classes : ["apothecary", "cleric", "druid", "warlock", "wizard"],
	source : [["SCGD", 193]],
	level : 8,
	school : "Conj",
	time : "1 a",
	range : "Self (120-ft cone)",
	components : "V,S,M",
	compMaterial : "mucus from a ghoul",
	duration : "Instantaneous",
	save : "Con",
	description : "120-ft cone; Con save: 5d8 poison + 5d8 necrotic (half on save); after the damage, any affected creature left with 25 HP or fewer instantly dies (reduced to a skeleton)",
	descriptionFull : "You summon a roiling wind of flesh-devouring disease in a 120-foot cone. Creatures in the area make a Constitution save, taking 5d8 poison and 5d8 necrotic damage on a failure or half on a success. After taking this damage, any affected creature with 25 hit points or fewer remaining immediately dies and is reduced to a weathered skeleton."
};

SpellsList["pandemic"] = {
	name : "Pandemic",
	classes : ["apothecary", "cleric", "druid", "warlock", "wizard"],
	source : [["SCGD", 193]],
	level : 9,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "the fetid corpse of a plague rat",
	duration : "Instantaneous",
	save : "Con",
	description : "Infect 1 creature with an incurable disease (only greater restoration/heal/wish cures): start of each turn Con save or 10d8 necrotic & incapacitated (half & no incap on save); creature starting within 10 ft Con save or contracts it; I pick up to 8 others + me immune",
	descriptionFull : "You infect one creature you can see within range with a deadly, highly infectious disease that lasts until cured by greater restoration, heal, or wish (other disease-removal fails). At the start of each of its turns the infected creature makes a Constitution save, taking 10d8 necrotic damage and being incapacitated until the start of its next turn on a failure, or half damage and no incapacitation on a success. A creature that starts its turn within 10 feet of an infected creature makes a Constitution save or contracts the infection. When you cast the spell, you can choose yourself and up to eight other creatures to be unaffected by the infection from this casting."
};

SpellsList["touch of death"] = {
	name : "Touch of Death",
	classes : ["apothecary", "sorcerer", "warlock", "wizard"],
	source : [["SCGD", 193]],
	level : 9,
	school : "Necro",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "the finger of a hag",
	duration : "Instantaneous",
	description : "Melee spell attack: 200 poison (ignores poison resistance/immunity, can't be reduced/prevented); a target dropped to 0 HP auto-fails death saves until a long rest (heal/greater restoration ends this)",
	descriptionFull : "Make a melee spell attack against a target within 5 feet of you. On a hit the target takes 200 poison damage; this damage ignores any resistance or immunity to poison and can't be reduced or prevented in any way. A target reduced to 0 hit points by this damage automatically fails death saving throws until it finishes a long rest; a heal or greater restoration spell cast on it also ends this effect."
};

SpellsList["octarine sword"] = {
	name : "Octarine Sword",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["SCGD", 197]],
	level : 7,
	school : "Evoc",
	time : "1 bns",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "a delerium fragment worth 100 gp and a dagger",
	duration : "1 min",
	save : "Con",
	description : "[Contaminated: +1 Cont. Lvl] Conjure a force sword (1 min); melee spell attack within 5 ft of it: 4d10 force, then Con save or +4d6 necrotic & target gains 1 Cont. Lvl; bonus action to move 30 ft & repeat; +1d10 force & +1d6 necrotic/SL>7",
	descriptionFull : "Contaminated: casting this spell gives you 1 Contamination Level. You create a sword-shaped plane of contaminated energy that hovers within range for the duration (or until you recast this spell). When it appears, make a melee spell attack against a target within 5 feet of the sword; on a hit the target takes 4d10 force damage and makes a Constitution save, taking an additional 4d6 necrotic damage and gaining 1 Contamination Level on a failure. On each of your turns you can use a bonus action to move the sword up to 30 feet and repeat the attack." + "\n   At Higher Levels: the force damage increases by 1d10 and the necrotic by 1d6 for each slot level above 7th."
};

SpellsList["unbind gravity"] = {
	name : "Unbind Gravity",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["SCGD", 198]],
	level : 7,
	school : "Trans",
	time : "1 a",
	range : "100 ft",
	components : "V,S,M",
	compMaterial : "a delerium fragment worth 100 gp, consumed",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "[Contaminated: +1 Cont. Lvl] Control gravity in a 100-ft cube: each turn choose the pull direction; unanchored creatures/objects fall that way (Dex save to grab a fixed object & avoid); or suspend gravity (creatures levitate); all fall back when it ends",
	descriptionFull : "Contaminated: casting this spell gives you 1 Contamination Level. You control gravity in a 100-foot cube centered on a point within range. When you cast it and at the start of each of your turns, you choose the direction gravity pulls within the area; unanchored creatures and objects fall that way until they reach the edge (a creature can make a Dexterity save to grab a fixed object within reach and avoid the fall). Alternatively you can suspend gravity, leaving creatures levitating (they move by pushing/pulling against fixed surfaces) and objects floating. When the spell ends, affected creatures and objects fall back down."
};

SpellsList["banish to the space between worlds"] = {
	name : "Banish to the Space Between Worlds",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["SCGD", 198]],
	level : 8,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "a delerium fragment worth 100 gp, consumed",
	duration : "Conc, 10 min",
	description : "[Contaminated: +1 Cont. Lvl] Banish 1 creature into the Space Between Worlds (dur); it can act to escape via an Int check vs my spell DC (success: escapes, spell ends; fail: 4d6 psychic); on end it returns to its space; a creature that dies there doesn't return",
	descriptionFull : "Contaminated: casting this spell gives you 1 Contamination Level. You banish a creature you can see within range into the Space Between Worlds for the duration or until it escapes. The target can use its action to attempt escape, making an Intelligence check against your spell save DC: on a success it escapes and the spell ends; on a failure it takes 4d6 psychic damage. When the spell ends, the target reappears in the space it left (or the nearest unoccupied space). It perceives its time there as hundreds or thousands of years. A creature that dies in the Space Between Worlds does not return."
};

SpellsList["delerium meteor swarm"] = {
	name : "Delerium Meteor Swarm",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["SCGD", 199]],
	level : 9,
	school : "Evoc",
	time : "1 a",
	range : "1 mile",
	components : "V,S,M",
	compMaterial : "an igneous rock and a delerium fragment worth 100 gp, consumed",
	duration : "1 min",
	save : "Dex",
	description : "[Contaminated: +1 Cont. Lvl] 4 falling stars, each a 40-ft-radius sphere; Dex save: 10d6 radiant + 10d6 necrotic + 10d6 thunder + 10d6 psychic + 10d6 force (half on save; overlap counts once); areas stay contaminated 1 hr (start turn: Con save or 5d6 necrotic & 1 Cont. Lvl); 0 HP from this = Monstrous Transformation (as 6 Cont. Lvls)",
	descriptionFull : "Contaminated: casting this spell gives you 1 Contamination Level. You call down four eldritch falling stars at points you can see within range. Each creature in a 40-foot-radius sphere centered on each point makes a Dexterity save, taking 10d6 radiant, 10d6 necrotic, 10d6 thunder, 10d6 psychic, and 10d6 force damage on a failure, or half on a success (a creature in more than one burst is affected only once). The areas remain contaminated for 1 hour: a creature that starts its turn in an affected area makes a Constitution save or takes 5d6 necrotic damage and gains 1 Contamination Level (half damage and no Contamination Level on a success). A creature reduced to 0 hit points by this damage immediately undergoes a Monstrous Transformation as if it had gained 6 Contamination Levels. The spell also damages structures and unattended objects in the area."
};
