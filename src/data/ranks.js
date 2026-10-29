export const RANK_TIERS = {
  peasant: {
    name: 'Peasant',
    color: '#9ca3af',
    ranks: [
      { name: 'Peasant IV', cost: 'Free', time: '5m', perks: 'Stone toolkit + chainmail armor, 16 bread', task: '' },
      { name: 'Peasant III', cost: '100', time: '30m', perks: '16 steak, 8 torches', task: '' },
      { name: 'Peasant II', cost: '200', time: '1h', perks: '8 iron ingots, 16 coal, Overworld /rtp', task: '' },
      { name: 'Peasant I', cost: '300', time: '5h', perks: 'Full iron toolkit, 32 redstone, 32 steak', task: '' },
    ],
  },
  adventurer: {
    name: 'Adventurer',
    color: '#fbbf24',
    ranks: [
      { name: 'Adventurer IV', cost: '500', time: '10h', perks: 'Iron armor, 16 sugar cane, 8 leather, 3 diamonds', task: 'Kill 30 Rabbits' },
      { name: 'Adventurer III', cost: '600', time: '15h', perks: 'Enchanting table, 8 bookshelves, 64 lapis lazuli', task: '' },
      { name: 'Adventurer II', cost: '700', time: '20h', perks: 'Lava bucket, brewing stand, 16 golden carrots', task: '' },
      { name: 'Adventurer I', cost: '800', time: '25h', perks: '32 nether quartz, 8 ender pearls, Nether Access, /workbench', task: '' },
    ],
  },
  squire: {
    name: 'Squire',
    color: '#c084fc',
    ranks: [
      { name: 'Squire IV', cost: '1,000', time: '30h', perks: '8 blaze rods, 32 diamonds, 3 golden apples, Nether /rtp', task: 'Kill 3 Ravagers' },
      { name: 'Squire III', cost: '1,500', time: '35h', perks: '16 ancient debris, 16 gold ingots', task: '' },
      { name: 'Squire II', cost: '2,000', time: '40h', perks: '3 wither skulls, 32 soul sand, Soul Speed III book', task: '' },
      { name: 'Squire I', cost: '2,500', time: '45h', perks: '4 ghast tears, 16 obsidian, 16 golden carrots', task: '' },
    ],
  },
  knight: {
    name: 'Knight',
    color: '#eab308',
    ranks: [
      { name: 'Knight IV', cost: '5,000', time: '50h', perks: 'Dried ghast, 32 gold blocks, 64 snow blocks, 3 fire resistance potions', task: 'Kill 1 Wither' },
      { name: 'Knight III', cost: '6,000', time: '60h', perks: 'Enchanted trident (Loyalty), 8 golden apples, night vision potions', task: '' },
      { name: 'Knight II', cost: '7,000', time: '70h', perks: '8 ender eyes, slow falling & strength potions', task: '' },
      { name: 'Knight I', cost: '8,000', time: '80h', perks: '64 golden carrots, 8 golden apples, End Dimension Access', task: '' },
    ],
  },
  elite: {
    name: 'Elite Knight',
    color: '#34d399',
    ranks: [
      { name: 'Elite Knight IV', cost: '10,000', time: '100h', perks: 'Elytra, 64 rockets, 16 shulker shells, End /rtp', task: 'Kill 1 Warden' },
      { name: 'Elite Knight III', cost: '80,000', time: '150h', perks: '16 firework rockets', task: '' },
      { name: 'Elite Knight II', cost: '100,000', time: '200h', perks: '64 golden carrots', task: '' },
      { name: 'Elite Knight I', cost: '150,000', time: '250h', perks: '/feed command', task: '' },
    ],
  },
  champion: {
    name: 'Champion',
    color: '#60a5fa',
    ranks: [
      { name: 'Champion IV', cost: '200,000', time: '300h', perks: '/heal command, Lucky Block x16', task: 'Kill 1 Blue Axolotl' },
      { name: 'Champion III', cost: '300,000', time: '400h', perks: 'Lucky Block x32', task: 'Kill 100 Villagers (Adult) + Kill 10 Nitwits' },
      { name: 'Champion II', cost: '500,000', time: '500h', perks: 'Lucky Block x48', task: '14 Labor Tasks (Mine Iron x300, Copper x500, Diamond x100, Coal x500, Redstone x200, Lapis x200, Stone x1000, Chop Logs x500, Catch Fish x1000, Plant Crops x500, Shear Sheep x200, Breed Animals x100, Ancient Debris x50, Nether Quartz x100)' },
      { name: 'Champion I', cost: '750,000', time: '750h', perks: 'Lucky Block x64, Max rank!', task: 'Consume any Divine Fish' },
    ],
  },
};
