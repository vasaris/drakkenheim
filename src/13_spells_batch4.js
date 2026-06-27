/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

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
var iFileName = "Drakkenheim_Spells_batch4.js";

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

SpellsList["acid burn"] = {
	name : "Acid Burn",
	classes : ["sorcerer", "wizard"],
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
	classes : ["druid", "sorcerer", "wizard"],
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
	classes : ["ranger", "sorcerer", "wizard"],
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
	classes : ["druid", "sorcerer", "wizard"],
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
	classes : ["druid", "sorcerer", "wizard"],
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
	classes : ["sorcerer", "warlock", "wizard"],
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
	classes : ["druid", "sorcerer", "wizard"],
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
	classes : ["sorcerer", "wizard"],
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
	classes : ["bard", "cleric", "wizard"],
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
	classes : ["sorcerer", "warlock", "wizard"],
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
	classes : ["sorcerer", "wizard"],
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
