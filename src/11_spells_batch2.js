/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

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
var iFileName = "Drakkenheim_Contaminated_Spells_batch2.js";

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
	source : [["SCGD", 191]],
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
	source : [["SCGD", 189]],
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
	source : [["SCGD", 196]],
	level : 5,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "a delerium fragment worth 100 gp",
	duration : "Conc, 1 min",
	description : "[Contaminated: +1 Cont. Lvl] Create TWO Large octarine force hands (AC 20, HP = my max each); move 60 ft & each performs a forceful-hand effect; if either hits 0 HP the spell ends",
	descriptionFull : "Contaminated: casting this spell gives you 1 Contamination Level. You create two Large hands of octarine force (each AC 20, HP equal to your hit point maximum, Strength 26, Dexterity 10). When you cast and as an action on later turns you move the hands up to 60 feet and have each take a forceful-hand effect (clenched-fist strike, grasp/grapple, push, or interpose), similar to a two-handed Arcane Hand. If either hand drops to 0 hit points, the spell ends."
};
