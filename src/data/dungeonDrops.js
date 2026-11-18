// Dungeon drop data compiled from ATBP server MythicMobs drop tables
// Sources: SnowcloakDropTables.yml, loh.yml, HellzDropTable.yml, gem_drops.yml, chisel_drops.yml
// Last verified: 2026-11-18

// =====================================================
// SNOWCLOAK
// =====================================================
// Chests: Basic, Mid, Boss (weighted pool via TotalItems)
// Bosses: Bear → Archivist → Tyr → King (weighted pools)
// End reward: SnowcloakDrops (projectile shower after final boss)
// Mob drops: SnowMobDrops
// Difficulty: Normal / Master (dungeondifficulty)

export const SNOWCLOAK_DROPS = [
  // --- Mob Drops ---
  { name: 'Raw Cobalt', icon: 'raw_cobalt', rarity: 'common', stackSize: 1,
    lore: ['Unrefined cobalt ore'],
    sources: [
      { from: 'Mob Drop (Normal)', rate: '30%' },
      { from: 'Mob Drop (Master)', rate: '30% + 10%' },
    ]},
  { name: 'Steel Ingot', icon: 'steel_ingot', rarity: 'common', stackSize: 1,
    lore: ['A sturdy metal ingot'],
    sources: [
      { from: 'Mob Drop (Normal)', rate: '20%' },
      { from: 'Mob Drop (Master)', rate: '20% + 10%' },
    ]},
  { name: 'Magic Fragment', icon: 'mc_emerald', rarity: 'common',
    lore: ['A shard of raw magic'],
    sources: [
      { from: 'Mob Drop (Normal)', rate: '15%' },
      { from: 'Mob Drop (Master)', rate: '15% + 10%' },
    ]},
  { name: 'Diamond', icon: 'mc_diamond', rarity: 'uncommon', stackSize: 15,
    lore: ['Standard diamond'],
    sources: [
      { from: 'Mob Drop (Normal)', rate: '10%' },
      { from: 'End Reward (Normal)', rate: '25% (5-15)' },
      { from: 'End Reward (Master)', rate: '25% (8-20)' },
    ]},
  // --- Chest Drops (weighted pools — % = weight/total) ---
  { name: 'Cobalt Ingot', icon: 'cobalt_ingot', rarity: 'uncommon', stackSize: 2,
    lore: ['Refined cobalt metal'],
    sources: [
      { from: 'Basic Chest (Normal)', rate: '~17% per slot' },
      { from: 'Mid Chest (Normal)', rate: '~24% per slot' },
      { from: 'Boss Chest (Normal)', rate: '~24% per slot' },
    ]},
  { name: 'Mithril Ingot', icon: 'mithril_ingot', rarity: 'uncommon', stackSize: 1,
    lore: ['A gleaming mithril ingot'],
    sources: [
      { from: 'Mid Chest (Normal)', rate: '~12% per slot' },
      { from: 'Boss Chest (Normal)', rate: '~14% per slot' },
    ]},
  { name: 'Raw Hextech', icon: 'raw_hextech', rarity: 'rare', stackSize: 2,
    lore: ['Unstable hextech material'],
    sources: [
      { from: 'Mid Chest (Normal)', rate: '~9% per slot' },
      { from: 'Boss Chest (Normal)', rate: '~12% per slot' },
      { from: 'Mid Chest (Master)', rate: '~22% per slot' },
      { from: 'Boss Chest (Master)', rate: '~34% per slot' },
    ]},
  { name: 'Magic Essence', icon: 'mc_exp_bottle', rarity: 'uncommon',
    lore: ['Concentrated magical energy'],
    sources: [
      { from: 'Mid Chest (Normal)', rate: '~12% per slot' },
      { from: 'Boss Chest (Normal)', rate: '~14% per slot' },
      { from: 'Mid Chest (Master)', rate: '~18% per slot' },
    ]},
  // --- Tomes ---
  { name: 'Common Tome', icon: 'tome_common', rarity: 'uncommon',
    lore: ['Undeciphered Common Tome', 'Bring to Helix to decipher'],
    sources: [
      { from: 'Basic Chest (Normal)', rate: '~0.9% per slot' },
      { from: 'Mid Chest (Normal)', rate: '~1.8% per slot' },
      { from: 'Boss Chest (Normal)', rate: '~1.9% per slot' },
      { from: 'Basic Chest (Master)', rate: '~5.2% per slot' },
      { from: 'End Reward (Normal)', rate: '12%' },
      { from: 'End Reward (Master)', rate: '20%' },
    ]},
  { name: 'Rare Tome', icon: 'tome_rare', rarity: 'rare',
    lore: ['Undeciphered Rare Tome', 'Bring to Helix to decipher'],
    sources: [
      { from: 'Basic Chest (Normal)', rate: '~4.3% per slot' },
      { from: 'Mid Chest (Normal)', rate: '~1.2% per slot' },
      { from: 'Boss Chest (Normal)', rate: '~2.4% per slot' },
      { from: 'Basic Chest (Master)', rate: '~17% per slot' },
      { from: 'End Reward (Normal)', rate: '20%' },
      { from: 'End Reward (Master)', rate: '30%' },
    ]},
  { name: 'Legendary Tome', icon: 'tome_legendary', rarity: 'legendary',
    lore: ['Undeciphered Legendary Tome'],
    sources: [
      { from: 'Basic Chest (Master)', rate: '~4.3% per slot' },
      { from: 'Mid Chest (Master)', rate: '~5.5% per slot' },
      { from: 'Boss Chest (Master)', rate: '~5.7% per slot' },
      { from: 'End Reward (Normal)', rate: '5%' },
      { from: 'End Reward (Master)', rate: '10%' },
    ]},
  // --- Boss Unique Equipment (End Reward Shower) ---
  { name: 'Blood Spatter', icon: 'mc_diamond_axe', rarity: 'epic',
    lore: ["Tyr's Axe — Diamond Axe", 'Sharpness V', 'It feeds on rage & blood like a true Viking.'],
    sources: [
      { from: 'End Reward (Normal)', rate: '1.5%' },
      { from: 'End Reward (Master)', rate: '3%' },
    ]},
  { name: "Jökull's Blessing", icon: 'mc_diamond_boots', rarity: 'epic',
    lore: ["Tyr's Boots — Diamond Boots", 'Protection II, Fire Protection IV', 'Jökull gave these to Tyr as a pledge of allegiance.'],
    sources: [
      { from: 'End Reward (Normal)', rate: '1.5%' },
      { from: 'End Reward (Master)', rate: '3%' },
    ]},
  { name: 'Growling Dawn', icon: 'mc_bow', rarity: 'epic',
    lore: ["Bear's Bow", 'Power VI', 'The growls can be heard from miles away.'],
    sources: [
      { from: 'End Reward (Normal)', rate: '1.5%' },
      { from: 'End Reward (Master)', rate: '3%' },
    ]},
  { name: 'The Whitebeast', icon: 'mc_diamond_leggings', rarity: 'epic',
    lore: ["Bear's Leggings — Diamond Leggings", 'Protection IV, Fire Protection II', 'Able to absorb even the greatest Titans.'],
    sources: [
      { from: 'End Reward (Normal)', rate: '1.5%' },
      { from: 'End Reward (Master)', rate: '3%' },
    ]},
  { name: 'Mind Reader', icon: 'mc_diamond_helmet', rarity: 'epic',
    lore: ["Archivist's Helm — Diamond Helmet", 'Protection IV, Fire Protection II', 'Archivist used this to see into our minds.'],
    sources: [
      { from: 'End Reward (Normal)', rate: '1.5%' },
      { from: 'End Reward (Master)', rate: '3%' },
    ]},
  { name: 'The Great Library', icon: 'mc_diamond_boots', rarity: 'epic',
    lore: ["Archivist's Boots — Diamond Boots", 'Protection IV, Fire Protection II', 'Able to traverse you between the Great Archives.'],
    sources: [
      { from: 'End Reward (Normal)', rate: '1.5%' },
      { from: 'End Reward (Master)', rate: '3%' },
    ]},
  { name: 'Royal Arm', icon: 'mc_diamond_sword', rarity: 'legendary',
    lore: ["King's Sword — Diamond Sword", 'Sharpness V, Unbreaking III', 'Sword from the Royal arms collection.'],
    sources: [
      { from: 'End Reward (Normal)', rate: '1.5%' },
      { from: 'End Reward (Master)', rate: '3%' },
    ]},
  { name: 'Chestplate of Divine Kings', icon: 'mc_diamond_chestplate', rarity: 'legendary',
    lore: ["King's Chestplate — Diamond Chestplate", 'Protection IV, Fire Protection II', 'Imbued with the power of Great Northern Kings.'],
    sources: [
      { from: 'End Reward (Normal)', rate: '1.5%' },
      { from: 'End Reward (Master)', rate: '3%' },
    ]},
  // --- End Reward extras ---
  { name: 'Emerald', icon: 'mc_emerald', rarity: 'common', stackSize: 15,
    lore: ['5-15 from end reward shower'],
    sources: [
      { from: 'End Reward (Normal)', rate: '25%' },
    ]},
  // --- Coins ---
  { name: 'Dungeon Coin', icon: 'dungeon_coin', rarity: 'uncommon',
    lore: ['Currency for dungeon merchants'],
    sources: [
      { from: 'Mob Drop (Normal)', rate: '5%' },
      { from: 'Mob Drop (Master)', rate: '5% + 3%' },
      { from: 'Boss Drop (Normal)', rate: '12.5%' },
      { from: 'Boss Drop (Master)', rate: '12.5% + 12.5%' },
      { from: 'Chest Drop (Normal)', rate: '7.5%' },
      { from: 'Chest Drop (Master)', rate: '7.5% + 7.5%' },
    ]},
  // --- Gems & Chisels ---
  { name: 'Gem (Random)', icon: 'gem_ruby', rarity: 'rare',
    lore: ['A random gem (16 types)', 'Normal: Chipped 70% / Flawed 25% / Polished 5%', 'Master: +Pristine 8% & Radiant 2%'],
    sources: [
      { from: 'Mob Drop (Normal)', rate: '5%' },
      { from: 'Mob Drop (Master)', rate: '5% + 5%' },
      { from: 'Boss Drop (Normal)', rate: '10%' },
      { from: 'Boss Drop (Master)', rate: '10% + 10%' },
    ]},
  { name: 'Socket Chisel', icon: 'mc_amethyst_shard', rarity: 'uncommon',
    lore: ['Adds a gem socket to gear'],
    sources: [
      { from: 'Mob Drop (Master)', rate: '2%' },
      { from: 'Boss Drop (Normal)', rate: '3%' },
      { from: 'Boss Drop (Master)', rate: '3% + 5%' },
      { from: 'Chest Drop', rate: '3%' },
    ]},
  { name: 'Advanced Chisel', icon: 'mc_amethyst_shard', rarity: 'epic',
    lore: ['Adds an advanced gem socket'],
    sources: [
      { from: 'Boss Drop (Normal)', rate: '1%' },
      { from: 'Boss Drop (Master)', rate: '1% + 2%' },
    ]},
  { name: 'Gem Remover', icon: 'mc_nether_star', rarity: 'epic',
    lore: ['Safely removes a socketed gem'],
    sources: [
      { from: 'Boss Drop', rate: '1%' },
    ]},
];

// =====================================================
// LAB OF HORRORS
// =====================================================
// Chests: Basic (loh_lootchest), Diamond (loh_diamondchest),
//         Emerald (loh_emeraldchest), Star/Boss (loh_starchest)
// Source: loh.yml + SnowcloakDropTables.yml
// Difficulty: Normal / Master (dungeondifficulty)
// Weighted pools use TotalItems — rates are weight/total_weight

export const LOH_DROPS = [
  // --- Materials ---
  { name: 'Key Fragment', icon: 'key_fragment', rarity: 'common', stackSize: 2,
    lore: ['Collected from basic chests', 'Used for crafting dungeon keys'],
    sources: [
      { from: 'Basic Chest (Normal)', rate: 'Guaranteed (1-2)' },
      { from: 'Basic Chest (Master)', rate: 'Guaranteed (2-3)' },
    ]},
  { name: 'Lab Sample', icon: 'lab_sample', rarity: 'common', stackSize: 5,
    lore: ['Experimental lab material'],
    sources: [
      { from: 'Diamond Chest', rate: '~46% per slot' },
      { from: 'Emerald Chest', rate: '~37% per slot' },
      { from: 'Star Chest (Normal)', rate: '~37% per slot' },
    ]},
  { name: 'Cobalt Ingot', icon: 'cobalt_ingot', rarity: 'uncommon', stackSize: 3,
    lore: ['Refined cobalt metal'],
    sources: [
      { from: 'Basic Chest (Normal)', rate: '~47% per slot' },
      { from: 'Diamond Chest', rate: '~24% per slot' },
      { from: 'Emerald Chest', rate: '~19% per slot' },
      { from: 'Star Chest', rate: '~10% per slot' },
    ]},
  { name: 'Mithril Ingot', icon: 'mithril_ingot', rarity: 'uncommon', stackSize: 3,
    lore: ['A gleaming mithril ingot'],
    sources: [
      { from: 'Basic Chest (Normal)', rate: '~37% per slot' },
      { from: 'Diamond Chest', rate: '~12% per slot' },
      { from: 'Emerald Chest', rate: '~10% per slot' },
      { from: 'Star Chest', rate: '~10% per slot' },
    ]},
  { name: 'Raw Hextech', icon: 'raw_hextech', rarity: 'rare', stackSize: 3,
    lore: ['Unstable hextech material'],
    sources: [
      { from: 'Diamond Chest', rate: '~12% per slot' },
      { from: 'Emerald Chest', rate: '~19% per slot' },
      { from: 'Star Chest', rate: '~19% per slot' },
    ]},
  { name: 'Soulsteel Ingot', icon: 'soulsteel_ingot', rarity: 'rare', stackSize: 3,
    lore: ['A dark, soul-infused metal'],
    sources: [
      { from: 'Star Chest (Normal)', rate: '~10% per slot' },
    ]},
  { name: 'Warden Ingot', icon: 'warden_ingot', rarity: 'epic', stackSize: 3,
    lore: ['The rarest crafting metal'],
    sources: [
      { from: 'Emerald Chest', rate: '~5% per slot' },
      { from: 'Star Chest', rate: '~5% per slot' },
    ]},
  { name: 'Hextech Crystal', icon: 'hextech_crystal', rarity: 'epic', stackSize: 1,
    lore: ['Refined hextech crystal', 'Used in advanced hextech crafting'],
    sources: [
      { from: 'Emerald Chest (Normal)', rate: '~0.6% per slot' },
      { from: 'Star Chest (Normal)', rate: '~2.4% per slot' },
      { from: 'Emerald Chest (Master)', rate: '~1.4% per slot' },
      { from: 'Star Chest (Master)', rate: '~5% per slot' },
    ]},
  // --- Consumables ---
  { name: 'Hexia Crystal', icon: 'hexia', rarity: 'epic',
    lore: ['Hextech upgrade material', 'Used to upgrade ascended hextech equipment'],
    sources: [
      { from: 'Diamond Chest (Master)', rate: '~4% per slot' },
      { from: 'Emerald Chest (Master)', rate: '~7% per slot' },
      { from: 'Star Chest (Master)', rate: '~8% per slot' },
    ],
    note: 'Master mode only'},
  // --- Tomes ---
  { name: 'Common Tome', icon: 'tome_common', rarity: 'uncommon',
    lore: ['Undeciphered Common Tome'],
    sources: [
      { from: 'Basic Chest (Normal)', rate: '~7% per slot' },
      { from: 'Diamond Chest', rate: '~1.8% per slot' },
      { from: 'Emerald Chest', rate: '~1.5% per slot' },
      { from: 'Star Chest', rate: '~1.5% per slot' },
    ]},
  { name: 'Rare Tome', icon: 'tome_rare', rarity: 'rare',
    lore: ['Undeciphered Rare Tome'],
    sources: [
      { from: 'Basic Chest (Normal)', rate: '~9% per slot' },
      { from: 'Diamond Chest', rate: '~1.4% per slot' },
      { from: 'Emerald Chest', rate: '~1.7% per slot' },
      { from: 'Star Chest', rate: '~1.7% per slot' },
    ]},
  { name: 'Legendary Tome', icon: 'tome_legendary', rarity: 'legendary',
    lore: ['Undeciphered Legendary Tome'],
    sources: [
      { from: 'Diamond Chest (Master)', rate: '~2% per slot' },
      { from: 'Emerald Chest', rate: '~0.7% per slot' },
      { from: 'Star Chest', rate: '~1% per slot' },
    ]},
  // --- Weapons (from dungeon weapon pools) ---
  { name: 'Dungeon Sword', icon: 'cobalt_sword', rarity: 'rare',
    lore: ['Random dungeon-tier sword', 'Tier scales with chest level'],
    sources: [
      { from: 'Diamond Chest', rate: '~0.6% per slot' },
      { from: 'Emerald Chest', rate: '~0.7% per slot' },
      { from: 'Star Chest', rate: '~0.6% per slot' },
    ]},
  { name: 'Dungeon Bow', icon: 'cobalt_bow', rarity: 'rare',
    lore: ['Random dungeon-tier bow', 'Tier scales with chest level'],
    sources: [
      { from: 'Diamond Chest', rate: '~0.6% per slot' },
      { from: 'Emerald Chest', rate: '~0.7% per slot' },
      { from: 'Star Chest', rate: '~0.6% per slot' },
    ]},
  { name: 'Dungeon Wand', icon: 'hell_wand', rarity: 'rare',
    lore: ['Random dungeon-tier wand', 'Tier scales with chest level'],
    sources: [
      { from: 'Diamond Chest', rate: '~0.6% per slot' },
      { from: 'Emerald Chest', rate: '~0.7% per slot' },
      { from: 'Star Chest', rate: '~0.6% per slot' },
    ]},
  // --- Boss Exclusive ---
  { name: "Draedon's Grimoire", icon: 'draedon_grimoire', rarity: 'mythic',
    lore: ['Rarest item in the dungeon', 'A strange glowing book pulsating with dark power', 'Bring to Lilith — she will know what to do with it.'],
    sources: [
      { from: 'Draedon Boss (Master)', rate: '0.2%' },
      { from: 'Star Chest (Master)', rate: '~0.3% per slot' },
    ],
    note: 'Master mode only'},
  // --- Vanilla Materials ---
  { name: 'Iron Ingot', icon: 'mc_iron_ingot', rarity: 'common', stackSize: 20,
    lore: ['Standard iron ingot'],
    sources: [
      { from: 'Diamond Chest', rate: 'Guaranteed (10-20)' },
      { from: 'Emerald Chest', rate: 'Guaranteed (15-25)' },
      { from: 'Star Chest', rate: 'Guaranteed (20-30)' },
    ]},
  { name: 'Gold Ingot', icon: 'mc_gold_ingot', rarity: 'common', stackSize: 10,
    lore: ['Standard gold ingot'],
    sources: [
      { from: 'Diamond Chest', rate: 'Guaranteed (5-10)' },
      { from: 'Emerald Chest', rate: 'Guaranteed (7-12)' },
      { from: 'Star Chest', rate: 'Guaranteed (10-15)' },
    ]},
  { name: 'Diamond', icon: 'mc_diamond', rarity: 'uncommon', stackSize: 10,
    lore: ['Standard diamond'],
    sources: [
      { from: 'Diamond Chest', rate: 'Guaranteed (5-10)' },
      { from: 'Emerald Chest', rate: 'Guaranteed (7-12)' },
      { from: 'Star Chest', rate: 'Guaranteed (10-15)' },
    ]},
  { name: 'Netherite Ingot', icon: 'mc_netherite_ingot', rarity: 'rare',
    lore: ['Rare netherite ingot'],
    sources: [
      { from: 'Diamond Chest', rate: '30%' },
      { from: 'Emerald Chest', rate: '50%' },
      { from: 'Star Chest', rate: '70%' },
    ]},
  // --- Coins ---
  { name: 'Dungeon Coin', icon: 'dungeon_coin', rarity: 'uncommon',
    lore: ['Currency for dungeon merchants'],
    sources: [
      { from: 'Chest (Normal)', rate: '7.5%' },
      { from: 'Chest (Master)', rate: '7.5% + 7.5%' },
      { from: 'Boss Chest (Normal)', rate: '12.5%' },
      { from: 'Boss Chest (Master)', rate: '12.5% + 12.5%' },
    ]},
  // --- Gems & Utility ---
  { name: 'Gem (Random)', icon: 'gem_sapphire', rarity: 'rare',
    lore: ['A random gem (16 types)', 'Normal: Chipped 70% / Flawed 25% / Polished 5%', 'Master: +Pristine 8% & Radiant 2%'],
    sources: [
      { from: 'Chest (Normal)', rate: '5%' },
      { from: 'Chest (Master)', rate: '5%' },
      { from: 'Boss Chest (Normal)', rate: '10%' },
      { from: 'Boss Chest (Master)', rate: '10%' },
    ]},
  { name: 'Socket Chisel', icon: 'mc_amethyst_shard', rarity: 'uncommon',
    lore: ['Adds a gem socket to gear'],
    sources: [
      { from: 'Chest', rate: '3%' },
      { from: 'Boss Chest (Normal)', rate: '3%' },
      { from: 'Boss Chest (Master)', rate: '5%' },
    ]},
  { name: 'Advanced Chisel', icon: 'mc_amethyst_shard', rarity: 'epic',
    lore: ['Adds an advanced gem socket'],
    sources: [
      { from: 'Boss Chest (Normal)', rate: '1%' },
      { from: 'Boss Chest (Master)', rate: '2%' },
    ]},
  { name: 'Gem Remover', icon: 'mc_nether_star', rarity: 'epic',
    lore: ['Safely removes a socketed gem'],
    sources: [
      { from: 'Boss Drop', rate: '1%' },
    ]},
];

// =====================================================
// HELLZ CITADEL
// =====================================================
// Chests: NormalLootChest (interactable mob entity, all rooms)
// Bosses: Forgemaster → Necromancer → Cerberus → Abaddon (each has own loot chest)
// Mini-boss: Magma Golem
// Trash mobs: Gargoyle, Dog, Skeleton, Dwarf
// Difficulty: Normal (level 0) / Master (level >=5 via BonusMythicLevels)
// Source: Packs/hellz_dungeon/droptables/HellzDropTable.yml

export const HELLZ_CITADEL_DROPS = [
  // --- Normal Chest Drops (NormalChestDropsNormal/Master) ---
  { name: 'Arrow', icon: 'mc_arrow', rarity: 'common', stackSize: 5,
    lore: ['3-5 arrows'],
    sources: [
      { from: 'Chest (Normal)', rate: '10%' },
      { from: 'Chest (Master)', rate: '20%' },
    ]},
  { name: 'Golden Apple', icon: 'mc_golden_apple', rarity: 'uncommon',
    lore: ['A golden apple'],
    sources: [
      { from: 'Chest (Normal)', rate: '5%' },
      { from: 'Chest (Master)', rate: '10%' },
      { from: 'Boss Chest (Normal)', rate: '7.5%' },
      { from: 'Boss Chest (Master)', rate: '15%' },
    ]},
  { name: 'Enchanted Golden Apple', icon: 'mc_golden_apple', rarity: 'epic',
    lore: ['God apple — extremely rare from chests'],
    sources: [
      { from: 'Chest (Normal)', rate: '0.5%' },
      { from: 'Chest (Master)', rate: '1%' },
    ]},
  { name: 'Iron Ingot', icon: 'mc_iron_ingot', rarity: 'common',
    lore: ['Standard iron ingot'],
    sources: [
      { from: 'Chest (Normal)', rate: '12.5%' },
      { from: 'Chest (Master)', rate: '25%' },
    ]},
  { name: 'Diamond', icon: 'mc_diamond', rarity: 'uncommon',
    lore: ['Standard diamond'],
    sources: [
      { from: 'Chest (Normal)', rate: '7.5%' },
      { from: 'Chest (Master)', rate: '15%' },
    ]},
  { name: 'Netherite Ingot', icon: 'mc_netherite_ingot', rarity: 'rare',
    lore: ['Rare netherite ingot'],
    sources: [
      { from: 'Chest (Normal)', rate: '1%' },
      { from: 'Chest (Master)', rate: '3%' },
      { from: 'Boss Chest (Normal)', rate: '1%' },
      { from: 'Boss Chest (Master)', rate: '3%' },
    ]},
  { name: 'Dungeon Coin', icon: 'dungeon_coin', rarity: 'uncommon',
    lore: ['Hellz Dungeon Coin', 'Trade at the Hellz Merchant'],
    sources: [
      { from: 'Chest (Normal)', rate: '7.5%' },
      { from: 'Chest (Master)', rate: '15%' },
      { from: 'Boss Chest (Normal)', rate: '12.5%' },
      { from: 'Boss Chest (Master)', rate: '25%' },
      { from: 'Mob Drop (Normal)', rate: '5%' },
      { from: 'Mob Drop (Master)', rate: '8%' },
    ]},
  // --- Basic Weapons (Normal + Master) ---
  { name: 'Rusted Destroyer', icon: 'destroyer_sword', rarity: 'rare',
    lore: ['Destroyer Sword (Basic) — Tier 2', '5 ATK / 1.6 Speed / 25 PvE / 15 PvP', 'Ability: Poisonous Blade — chance to poison for 10❤ over time', 'A common blade used by the lesser skeletons.'],
    sources: [
      { from: 'Mob Drop (Normal)', rate: '0.5%' },
      { from: 'Mob Drop (Master)', rate: '0.75%' },
      { from: 'Magma Golem (Normal)', rate: '1%' },
      { from: 'Magma Golem (Master)', rate: '2%' },
      { from: 'Chest (Normal)', rate: '0.75%' },
      { from: 'Chest (Master)', rate: '1.5%' },
      { from: 'Boss Chest (Normal)', rate: '10%' },
      { from: 'Boss Chest (Master)', rate: '15%' },
    ]},
  { name: 'Dwarven Hatchet', icon: 'dwarf_axe', rarity: 'rare',
    lore: ['Dwarf Axe (Basic) — Tier 2', '6 ATK / 1.0 Speed / 25 PvE / 40 PvP / +3 Fire', 'Ability: Double Strike — chance to hit again for 4❤', 'A standard-issue dwarven axe.'],
    sources: [
      { from: 'Mob Drop (Normal)', rate: '0.5%' },
      { from: 'Mob Drop (Master)', rate: '0.75%' },
      { from: 'Magma Golem (Normal)', rate: '1%' },
      { from: 'Magma Golem (Master)', rate: '2%' },
      { from: 'Chest (Normal)', rate: '0.75%' },
      { from: 'Chest (Master)', rate: '1.5%' },
      { from: 'Boss Chest (Normal)', rate: '10%' },
      { from: 'Boss Chest (Master)', rate: '15%' },
    ]},
  { name: 'Dwarven Repeater', icon: 'dwarf_crossbow', rarity: 'rare',
    lore: ['Dwarf Crossbow (Basic) — Tier 2', '9 ATK / 25 PvE / 40 PvP', 'Ability: Piercing Arrow — shoots through enemies for 7❤', 'A standard-issue dwarven crossbow.'],
    sources: [
      { from: 'Mob Drop (Normal)', rate: '0.5%' },
      { from: 'Mob Drop (Master)', rate: '0.75%' },
      { from: 'Magma Golem (Normal)', rate: '1%' },
      { from: 'Magma Golem (Master)', rate: '2%' },
      { from: 'Chest (Normal)', rate: '0.75%' },
      { from: 'Chest (Master)', rate: '1.5%' },
      { from: 'Boss Chest (Normal)', rate: '10%' },
      { from: 'Boss Chest (Master)', rate: '15%' },
    ]},
  // --- Upgraded Weapons (Master only) ---
  { name: 'Destroyer Sword', icon: 'destroyer_sword', rarity: 'epic',
    lore: ['Destroyer Sword (Upgraded) — Tier 3', '7 ATK / 1.6 Speed / 35 PvE / 20 PvP', 'Ability: Poisonous Blade — chance to poison for 10❤ over time', 'These deadly blades are used by the giant skeletons.'],
    sources: [
      { from: 'Mob Drop (Master)', rate: '0.75%' },
      { from: 'Magma Golem (Master)', rate: '2%' },
      { from: 'Chest (Master)', rate: '1.5%' },
      { from: 'Boss Chest (Master)', rate: '15%' },
    ],
    note: 'Master mode only'},
  { name: 'Dwarven Axe', icon: 'dwarf_axe', rarity: 'epic',
    lore: ['Dwarf Axe (Upgraded) — Tier 3', '9 ATK / 1.0 Speed / 35 PvE / 60 PvP / +5 Fire', 'Ability: Double Strike — chance to hit again for 4❤', 'Small but deadly, forged in the depths of the dwarven halls.'],
    sources: [
      { from: 'Mob Drop (Master)', rate: '0.75%' },
      { from: 'Magma Golem (Master)', rate: '2%' },
      { from: 'Chest (Master)', rate: '1.5%' },
      { from: 'Boss Chest (Master)', rate: '15%' },
    ],
    note: 'Master mode only'},
  { name: 'Dwarven Crossbow', icon: 'dwarf_crossbow', rarity: 'epic',
    lore: ['Dwarf Crossbow (Upgraded) — Tier 3', '13 ATK / 35 PvE / 60 PvP', 'Ability: Piercing Arrow — shoots through enemies for 7❤', 'Enchanted with ancient dwarven technology.'],
    sources: [
      { from: 'Mob Drop (Master)', rate: '0.75%' },
      { from: 'Magma Golem (Master)', rate: '2%' },
      { from: 'Chest (Master)', rate: '1.5%' },
      { from: 'Boss Chest (Master)', rate: '15%' },
    ],
    note: 'Master mode only'},
  // --- Knight Armor Set ---
  { name: 'Knight Armor (Basic)', icon: 'hellz_knight_chestplate', rarity: 'rare',
    lore: ['Hellz Knight Set — Tier 3', 'Helmet: 3 Armor / 2 Tough / 1% DR', 'Chestplate: 6 Armor / 3 Tough / 2% DR / +0.5 HP', 'Leggings: 4 Armor / 2 Tough / 2% DR', 'Boots: 3 Armor / 2 Tough / 1% DR', 'No set ability — basic defensive gear', 'Each piece drops separately.'],
    sources: [
      { from: 'Mob Drop (Normal)', rate: '0.5% each' },
      { from: 'Mob Drop (Master)', rate: '0.75% each' },
      { from: 'Magma Golem (Normal)', rate: '1% each' },
      { from: 'Magma Golem (Master)', rate: '2% each' },
      { from: 'Chest (Normal)', rate: '0.75% each' },
      { from: 'Chest (Master)', rate: '1.5% each' },
      { from: 'Boss Chest (Normal)', rate: '10% each' },
      { from: 'Boss Chest (Master)', rate: '15% each' },
    ]},
  { name: 'Heroic Knight Armor', icon: 'hellz_knight_helmet', rarity: 'epic',
    lore: ['Hellz Knight Set (Upgraded) — Tier 3', 'Helmet: 4 Armor / 2 Tough / 3% DR / +1.0 HP', 'Chestplate: 8 Armor / 4 Tough / 4% DR / +1.5 HP', 'Leggings: 6 Armor / 3 Tough / 3% DR / +1.0 HP', 'Boots: 4 Armor / 2 Tough / 3% DR / +1.0 HP', 'Ability (Chestplate): Steel Wall — taking damage grants Resistance I for 5s (20s CD)', 'Ability (Leggings): Iron Meal — taking damage grants Saturation for 5s (20s CD)', 'Set Bonus (4pc): Heroic Knight — +5% DR, +2 HP, taking damage grants Resistance II + Strength I for 10s (20s CD)', 'Each piece drops separately.'],
    sources: [
      { from: 'Mob Drop (Master)', rate: '0.2% each' },
      { from: 'Magma Golem (Master)', rate: '0.8% each' },
      { from: 'Chest (Master)', rate: '0.5% each' },
      { from: 'Boss Chest (Master)', rate: '0.83% each' },
    ],
    note: 'Master mode only'},
  // --- Boss-exclusive Weapons (Basic) ---
  { name: "Forgekeeper's Mallet", icon: 'forgemaster_hammer', rarity: 'epic',
    lore: ['Forgemaster Hammer (Basic) — Tier 2', '8 ATK / 1.0 Speed / 25 PvE / 50 PvP / +5 Fire', 'Ability: Magma Strike — deals 9❤ in front and sets on fire', 'A standard forge hammer used by the lesser dwarven smiths.'],
    sources: [
      { from: 'Forgemaster Boss (Normal)', rate: '0.5%' },
      { from: 'Forgemaster Boss (Master)', rate: '1%' },
      { from: 'Chest (Normal)', rate: '0.05%' },
      { from: 'Chest (Master)', rate: '0.1%' },
    ]},
  { name: 'Cursed Branch', icon: 'necro_staff', rarity: 'epic',
    lore: ['Necromancer Staff (Basic) — Tier 2', '5 ATK / 1.2 Speed / 20 Magic / 10 Skill DMG', 'Ability: Haunting Skull — deals 15❤ + 5❤ over 4 seconds', 'A lesser staff imbued with faint traces of death magic.'],
    sources: [
      { from: 'Necromancer Boss (Normal)', rate: '0.5%' },
      { from: 'Necromancer Boss (Master)', rate: '1%' },
      { from: 'Chest (Normal)', rate: '0.05%' },
      { from: 'Chest (Master)', rate: '0.1%' },
    ]},
  { name: 'Hellguard Mace', icon: 'cerberus_flail', rarity: 'epic',
    lore: ['Cerberus Flail (Basic) — Tier 2', '7 ATK / 1.2 Speed / 25 PvE / 50 PvP', 'Ability: Impaling Spikes — 10% chance to impale for 12❤', 'A lesser flail recovered from the depths of the underworld.'],
    sources: [
      { from: 'Cerberus Boss (Normal)', rate: '0.5%' },
      { from: 'Cerberus Boss (Master)', rate: '1%' },
      { from: 'Chest (Normal)', rate: '0.05%' },
      { from: 'Chest (Master)', rate: '0.1%' },
    ]},
  // --- Boss-exclusive Weapons (Upgraded — Master only) ---
  { name: 'Sulfuras, Hand Of The Dwarfs', icon: 'forgemaster_hammer', rarity: 'legendary',
    lore: ['Forgemaster Hammer (Upgraded) — Tier 4', '12 ATK / 1.0 Speed / 35 PvE / 80 PvP / +10 Fire', 'Ability 1: Magma Strike — deals 9❤ + sets on fire', 'Ability 2: Corrupted Magma — 10% on hit, leaves a pool for 30❤ over time', 'The legendary hammer used to create Nether Castle.'],
    sources: [
      { from: 'Forgemaster Boss (Master)', rate: '1%' },
      { from: 'Chest (Master)', rate: '0.1%' },
    ],
    note: 'Master mode only'},
  { name: 'Staff of Guldan', icon: 'necro_staff', rarity: 'legendary',
    lore: ['Necromancer Staff (Upgraded) — Tier 4', '8 ATK / 1.2 Speed / 32 Magic / 15 Skill DMG', 'Ability 1: Haunting Skull — deals 15❤ + 5❤ over 4s', 'Ability 2: Advanced Necromancy — skulls spawn Tornado, Poison Cloud, or Skeleton Hand', 'Ancient staff infused with death magic.'],
    sources: [
      { from: 'Necromancer Boss (Master)', rate: '1%' },
      { from: 'Chest (Master)', rate: '0.1%' },
    ],
    note: 'Master mode only'},
  { name: 'Deathbringer, Legacy of Hades', icon: 'cerberus_flail', rarity: 'legendary',
    lore: ['Cerberus Flail (Upgraded) — Tier 4', '10 ATK / 1.2 Speed / 35 PvE / 80 PvP', 'Ability 1: Impaling Spikes — 10% chance to impale for 12❤', 'Ability 2: Cerberus Guardian — spawns guardians to fight for 15s', 'Used by Hades himself during his reign over the underworld.'],
    sources: [
      { from: 'Cerberus Boss (Master)', rate: '1%' },
      { from: 'Chest (Master)', rate: '0.1%' },
    ],
    note: 'Master mode only'},
  // --- Replica Weapons (Drops + Merchant) ---
  { name: 'Remornia Replica', icon: 'demon_sword', rarity: 'rare',
    lore: ['Demonic Sword (Replica) — Tier 4', '7 ATK / 1.6 Speed / 30 PvE / 60 PvP', 'No ability — basic version of the legendary blade', 'Also sold by the Travelling Merchant.'],
    sources: [
      { from: 'Mob Drop (Normal)', rate: '0.5%' },
      { from: 'Mob Drop (Master)', rate: '0.75%' },
      { from: 'Magma Golem (Normal)', rate: '1%' },
      { from: 'Magma Golem (Master)', rate: '2%' },
      { from: 'Chest (Normal)', rate: '0.75%' },
      { from: 'Chest (Master)', rate: '1.5%' },
      { from: 'Boss Chest (Normal)', rate: '10%' },
      { from: 'Boss Chest (Master)', rate: '15%' },
      { from: 'Travelling Merchant', rate: '20 Dungeon Coins' },
    ]},
  { name: 'Staff of Merlin Replica', icon: 'wizard_staff', rarity: 'rare',
    lore: ['Merlin Staff (Replica) — Tier 4', '6 ATK / 1.2 Speed / 20 Magic / 10 Skill DMG', 'No ability — basic version of the legendary staff', 'Also sold by the Travelling Merchant.'],
    sources: [
      { from: 'Mob Drop (Normal)', rate: '0.5%' },
      { from: 'Mob Drop (Master)', rate: '0.75%' },
      { from: 'Magma Golem (Normal)', rate: '1%' },
      { from: 'Magma Golem (Master)', rate: '2%' },
      { from: 'Chest (Normal)', rate: '0.75%' },
      { from: 'Chest (Master)', rate: '1.5%' },
      { from: 'Boss Chest (Normal)', rate: '10%' },
      { from: 'Boss Chest (Master)', rate: '15%' },
      { from: 'Travelling Merchant', rate: '20 Dungeon Coins' },
    ]},
  // --- Legendary Weapons (Upgraded only, no basic variant) ---
  { name: 'Remornia, The Living Blade', icon: 'demon_sword', rarity: 'legendary',
    lore: ['Demonic Sword — Mythic Tier', '10 ATK / 1.6 Speed / 40 PvE / 100 PvP / +10 Fire & Dark', 'Ability 1: Slicing Blood — 30% on hit, 20❤ + heals 20% of damage', 'Ability 2: Demon Form — 10% chance, +30% DMG, -40% taken for 10s', 'A cursed blade that hungers for more.'],
    sources: [
      { from: 'Abaddon Boss (Master)', rate: '0.5%' },
      { from: 'Chest (Master)', rate: '0.0125%' },
    ],
    note: 'Master mode only'},
  { name: 'Staff of Merlin', icon: 'wizard_staff', rarity: 'legendary',
    lore: ['Merlin Staff — Mythic Tier', '10 ATK / 1.2 Speed / 40 Magic / 20 Skill DMG', 'Ability 1: Meteor Strike — shoots a meteor for 25❤', 'Ability 2: Meteor Shower — calls down 3 meteors on enemies', 'The most powerful staff that has ever existed.'],
    sources: [
      { from: 'Magma Golem (Master)', rate: '0.125%' },
      { from: 'All Boss Chests (Master)', rate: '0.125%' },
      { from: 'Chest (Master)', rate: '0.0125%' },
    ],
    note: 'Master mode only'},
  // --- Demonic Armor ---
  { name: 'Demonic Armor (Basic)', icon: 'hellz_demonic_chestplate', rarity: 'epic',
    lore: ['Hellz Demonic Set — Tier 4', 'Helmet: 4 Armor / 2 Tough / 2% DR / +0.5 HP', 'Chestplate: 7 Armor / 3 Tough / 4% DR / +1.5 HP', 'Leggings: 6 Armor / 3 Tough / 3% DR / +0.5 HP', 'Boots: 3 Armor / 2 Tough / 2% DR / +0.5 HP', 'No set ability — strong defensive stats', 'Each piece drops separately.'],
    sources: [
      { from: 'Cerberus Boss (Normal)', rate: '10% each' },
      { from: 'Cerberus Boss (Master)', rate: '15% each' },
      { from: 'Abaddon Boss (Normal)', rate: '10% each' },
      { from: 'Abaddon Boss (Master)', rate: '15% each' },
      { from: 'Chest (Normal)', rate: '0.05% each' },
      { from: 'Chest (Master)', rate: '0.1% each' },
    ]},
  { name: 'Hellforged Demonic Armor', icon: 'hellz_demonic_helmet', rarity: 'legendary',
    lore: ['Hellz Demonic Set (Upgraded) — Tier 5', 'Helmet: 5 Armor / 4 Tough / 4% DR / +1.5 HP', 'Chestplate: 9 Armor / 5 Tough / 6% DR / +2.5 HP', 'Leggings: 8 Armor / 4 Tough / 5% DR / +1.5 HP', 'Boots: 4 Armor / 4 Tough / 4% DR / +1.5 HP', 'Ability (Chestplate): Slicing Shockwave — attacks launch a blood cone for 15❤ (3s CD)', 'Ability (Leggings): Deathly Whirlwind — attacks summon a blood whirlwind for 5❤ AoE (6s CD)', 'Set Bonus (4pc): Demonic Mark — +3 ATK, +5 PvE, blood explosion for 15❤ + multi-hit DOT (5s CD)', 'Armor of the demon lords, forged in blood-soaked flames.'],
    sources: [
      { from: 'Cerberus Boss (Master)', rate: '0.33% each' },
      { from: 'Abaddon Boss (Master)', rate: '0.33% each' },
      { from: 'Chest (Master)', rate: '0.033% each' },
    ],
    note: 'Master mode only'},
  // --- Necromancer Armor ---
  { name: 'Necromancer Armor (Basic)', icon: 'hellz_necromancer_chestplate', rarity: 'epic',
    lore: ['Hellz Necromancer Set — Tier 4', 'Helmet: 5 Armor / 3 Tough / 3% DR / +1.0 HP', 'Chestplate: 8 Armor / 4 Tough / 5% DR / +2.0 HP', 'Leggings: 7 Armor / 3 Tough / 4% DR / +1.0 HP', 'Boots: 4 Armor / 3 Tough / 3% DR / +1.0 HP', 'No set ability — highest base stats of basic sets', 'Each piece drops separately.'],
    sources: [
      { from: 'Forgemaster Boss (Master)', rate: '15% each' },
      { from: 'Necromancer Boss (Master)', rate: '15% each' },
      { from: 'Chest (Master)', rate: '0.1% each' },
    ],
    note: 'Master mode only'},
  { name: 'Cursed Necromancer Armor', icon: 'hellz_necromancer_helmet', rarity: 'legendary',
    lore: ['Hellz Necromancer Set (Upgraded) — Tier 5', 'Helmet: 6 Armor / 4 Tough / 5% DR / +2.0 HP', 'Chestplate: 10 Armor / 6 Tough / 7% DR / +3.5 HP', 'Leggings: 9 Armor / 5 Tough / 6% DR / +2.0 HP', 'Boots: 5 Armor / 4 Tough / 5% DR / +2.0 HP', 'Ability (Chestplate): Haunting Skull — attacks launch a skull for 12❤ Death + Wither (4s CD)', 'Ability (Leggings): Soul Drain — attacks drain souls for 5❤ Death AoE + Wither, heals 3❤ (6s CD)', 'Set Bonus (4pc): Boon of the Undead — +3 HP, +5% DR, attacks deal 8❤ Death DOT + heals you (8s CD)', 'Robes of the arch-necromancer, pulsing with souls of the damned.'],
    sources: [
      { from: 'Abaddon Boss (Master)', rate: '0.15% each' },
    ],
    note: 'Master mode only — rarest armor set'},
  // --- Boss Common Drops ---
  { name: 'Ancient Debris', icon: 'mc_ancient_debris', rarity: 'uncommon', stackSize: 4,
    lore: ['1-4 from boss chests'],
    sources: [
      { from: 'All Boss Chests (Normal)', rate: '30%' },
      { from: 'All Boss Chests (Master)', rate: '30%' },
    ]},
  { name: 'Netherite Scrap', icon: 'mc_netherite_scrap', rarity: 'uncommon', stackSize: 4,
    lore: ['1-4 from boss chests'],
    sources: [
      { from: 'All Boss Chests (Normal)', rate: '30%' },
      { from: 'All Boss Chests (Master)', rate: '30%' },
    ]},
  { name: 'Gold Ingot', icon: 'mc_gold_ingot', rarity: 'common', stackSize: 2,
    lore: ['1-2 from boss chests'],
    sources: [
      { from: 'All Boss Chests (Normal)', rate: '35%' },
      { from: 'All Boss Chests (Master)', rate: '35%' },
    ]},
  // --- Tomes ---
  { name: 'Common Tome', icon: 'tome_common', rarity: 'uncommon',
    lore: ['Undeciphered Common Tome'],
    sources: [
      { from: 'Chest (Normal)', rate: '3%' },
      { from: 'Chest (Master)', rate: '5%' },
      { from: 'Boss Chest (Normal)', rate: '6%' },
      { from: 'Boss Chest (Master)', rate: '10%' },
    ]},
  { name: 'Rare Tome', icon: 'tome_rare', rarity: 'rare',
    lore: ['Undeciphered Rare Tome'],
    sources: [
      { from: 'Chest (Normal)', rate: '1%' },
      { from: 'Chest (Master)', rate: '3%' },
      { from: 'Boss Chest (Normal)', rate: '2%' },
      { from: 'Boss Chest (Master)', rate: '6%' },
    ]},
  { name: 'Legendary Tome', icon: 'tome_legendary', rarity: 'legendary',
    lore: ['Undeciphered Legendary Tome'],
    sources: [
      { from: 'Chest (Master)', rate: '0.5%' },
      { from: 'Boss Chest (Master)', rate: '1%' },
    ],
    note: 'Master mode only'},
  // --- Gems & Utility ---
  { name: 'Gem (Random)', icon: 'gem_ruby', rarity: 'rare',
    lore: ['A random gem (16 types)', 'Normal: Chipped 70% / Flawed 25% / Polished 5%', 'Master: +Pristine 8% & Radiant 2%'],
    sources: [
      { from: 'Mob Drop (Normal)', rate: '5%' },
      { from: 'Mob Drop (Master)', rate: '5%' },
      { from: 'Boss Drop (Normal)', rate: '10%' },
      { from: 'Boss Drop (Master)', rate: '10%' },
      { from: 'Chest Drop', rate: '5%' },
    ]},
  { name: 'Socket Chisel', icon: 'mc_amethyst_shard', rarity: 'uncommon',
    lore: ['Adds a gem socket to gear'],
    sources: [
      { from: 'Mob Drop (Master)', rate: '2%' },
      { from: 'Boss Drop (Normal)', rate: '3%' },
      { from: 'Boss Drop (Master)', rate: '5%' },
      { from: 'Chest', rate: '3%' },
    ]},
  { name: 'Advanced Chisel', icon: 'mc_amethyst_shard', rarity: 'epic',
    lore: ['Adds an advanced gem socket'],
    sources: [
      { from: 'Boss Drop (Normal)', rate: '1%' },
      { from: 'Boss Drop (Master)', rate: '2%' },
    ]},
  { name: 'Gem Remover', icon: 'mc_nether_star', rarity: 'epic',
    lore: ['Safely removes a socketed gem'],
    sources: [
      { from: 'Boss Drop', rate: '1%' },
    ]},
];
