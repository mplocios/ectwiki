import { useState, useEffect } from 'react';

// Custom item textures
import cobaltIngot from '../assets/items/cobalt_ingot.png';
import mithrilIngot from '../assets/items/mithril_ingot.png';
import soulsteelIngot from '../assets/items/soulsteel_ingot.png';
import wardenIngot from '../assets/items/warden_ingot.png';
import steelIngot from '../assets/items/steel_ingot.png';
import hextechIngot from '../assets/items/hextech_ingot.png';
import rawCobalt from '../assets/items/raw_cobalt.png';
import rawMithril from '../assets/items/raw_mithril.png';
import rawHextech from '../assets/items/raw_hextech.png';
import rawSoulsteel from '../assets/items/raw_soulsteel.png';
import hextechCrystal from '../assets/items/hextech_crystal.png';
import keyFragment from '../assets/items/key_fragment.png';
import labSample from '../assets/items/lab_sample.png';
import dungeonCoin from '../assets/items/dungeon_coin.png';
import hellDungeonCoin from '../assets/items/hell_dungeon_coin.png';
import diceOfFate from '../assets/items/dice_of_fate.png';
import hexia from '../assets/items/hexia.png';
import draedonGrimoire from '../assets/items/draedon_grimoire.png';
import scrollDivine from '../assets/items/scroll_divine_intervention.png';
import gemRuby from '../assets/items/gem_ruby.png';
import gemSapphire from '../assets/items/gem_sapphire.png';
import gemEmerald from '../assets/items/gem_emerald.png';
import gemDiamond from '../assets/items/gem_diamond.png';
import gemAmber from '../assets/items/gem_amber.png';
import gemAmethyst from '../assets/items/gem_amethyst.png';
import wardenSword from '../assets/items/warden_sword.png';
import gildedNetheriteSword from '../assets/items/gilded_netherite_sword.png';
import soulNetheriteSword from '../assets/items/soul_netherite_sword.png';
import cobaltSword from '../assets/items/cobalt_sword.png';
import mithrilSword from '../assets/items/mithril_sword.png';
import hextechSword from '../assets/items/hextech_sword.png';
import wardenBow from '../assets/items/warden_bow.png';
import cobaltBow from '../assets/items/cobalt_bow.png';
import mithrilBow from '../assets/items/mithril_bow.png';
import hextechBow from '../assets/items/hextech_bow.png';
import luckyBlock from '../assets/items/lucky_block.png';

// Vanilla MC textures
import mcGoldenApple from '../assets/items/mc_golden_apple.png';
import mcDiamond from '../assets/items/mc_diamond.png';
import mcIronIngot from '../assets/items/mc_iron_ingot.png';
import mcGoldIngot from '../assets/items/mc_gold_ingot.png';
import mcNetheriteIngot from '../assets/items/mc_netherite_ingot.png';
import mcNetheriteScrap from '../assets/items/mc_netherite_scrap.png';
import mcEmerald from '../assets/items/mc_emerald.png';
import mcBow from '../assets/items/mc_bow.png';
import mcBook from '../assets/items/mc_book.png';
import mcPaper from '../assets/items/mc_paper.png';
import mcDiamondBlock from '../assets/items/mc_diamond_block.png';
import mcGoldBlock from '../assets/items/mc_gold_block.png';
import mcNetheriteBlock from '../assets/items/mc_netherite_block.png';
import mcDiamondSword from '../assets/items/mc_diamond_sword.png';
import mcNetheriteSword from '../assets/items/mc_netherite_sword.png';
import mcIronSword from '../assets/items/mc_iron_sword.png';
import mcFeather from '../assets/items/mc_feather.png';
import mcExpBottle from '../assets/items/mc_experience_bottle.png';
import mcArrow from '../assets/items/mc_arrow.png';
import mcDiamondAxe from '../assets/items/mc_diamond_axe.png';
import mcAmethystShard from '../assets/items/mc_amethyst_shard.png';
import mcNetherStar from '../assets/items/mc_nether_star.png';
import mcAncientDebris from '../assets/items/mc_ancient_debris.png';
import mcDiamondBoots from '../assets/items/mc_diamond_boots.png';
import mcDiamondLeggings from '../assets/items/mc_diamond_leggings.png';
import mcDiamondHelmet from '../assets/items/mc_diamond_helmet.png';
import mcDiamondChestplate from '../assets/items/mc_diamond_chestplate.png';
import goldenApple from '../assets/items/golden_apple.png';
import gildedNetheriteIngot from '../assets/items/gilded_netherite_ingot.png';
import soulNetheriteIngot from '../assets/items/soul_netherite_ingot.png';

// Tome textures
import tomeCommon from '../assets/items/tome_common.png';
import tomeRare from '../assets/items/tome_rare.png';
import tomeLegendary from '../assets/items/tome_legendary.png';
import tomeFabled from '../assets/items/tome_fabled.png';

// Hellz dungeon weapons
import destroyerSword from '../assets/items/destroyer_sword.png';
import dwarfAxe from '../assets/items/dwarf_axe.png';
import dwarfCrossbow from '../assets/items/dwarf_crossbow.png';
import cerberusFlail from '../assets/items/cerberus_flail.png';
import demonSword from '../assets/items/demon_sword.png';
import necroStaff from '../assets/items/necro_staff.png';
import wizardStaff from '../assets/items/wizard_staff.png';
import forgemasterHammer from '../assets/items/forgemaster_hammer.png';

// Hellz dungeon armor
import hellzKnightHelmet from '../assets/items/hellz_knight_helmet.png';
import hellzKnightChestplate from '../assets/items/hellz_knight_chestplate.png';
import hellzKnightBoots from '../assets/items/hellz_knight_boots.png';
import hellzKnightLeggings from '../assets/items/hellz_knight_leggings.png';
import hellzDemonicHelmet from '../assets/items/hellz_demonic_helmet.png';
import hellzDemonicChestplate from '../assets/items/hellz_demonic_chestplate.png';
import hellzDemonicBoots from '../assets/items/hellz_demonic_boots.png';
import hellzDemonicLeggings from '../assets/items/hellz_demonic_leggings.png';
import hellzNecromancerHelmet from '../assets/items/hellz_necromancer_helmet.png';
import hellzNecromancerChestplate from '../assets/items/hellz_necromancer_chestplate.png';
import hellzNecromancerBoots from '../assets/items/hellz_necromancer_boots.png';
import hellzNecromancerLeggings from '../assets/items/hellz_necromancer_leggings.png';

// Misc dungeon items
import hellWand from '../assets/items/hell_wand.png';
import diamondKey from '../assets/items/diamond_key.png';
import emeraldKey from '../assets/items/emerald_key.png';
import starKey from '../assets/items/star_key.png';

const TEXTURES = {
  cobalt_ingot: cobaltIngot,
  mithril_ingot: mithrilIngot,
  soulsteel_ingot: soulsteelIngot,
  warden_ingot: wardenIngot,
  steel_ingot: steelIngot,
  hextech_ingot: hextechIngot,
  raw_cobalt: rawCobalt,
  raw_mithril: rawMithril,
  raw_hextech: rawHextech,
  raw_soulsteel: rawSoulsteel,
  hextech_crystal: hextechCrystal,
  key_fragment: keyFragment,
  lab_sample: labSample,
  dungeon_coin: dungeonCoin,
  hell_dungeon_coin: hellDungeonCoin,
  dice_of_fate: diceOfFate,
  hexia: hexia,
  draedon_grimoire: draedonGrimoire,
  scroll_divine: scrollDivine,
  gem_ruby: gemRuby,
  gem_sapphire: gemSapphire,
  gem_emerald: gemEmerald,
  gem_diamond: gemDiamond,
  gem_amber: gemAmber,
  gem_amethyst: gemAmethyst,
  warden_sword: wardenSword,
  gilded_netherite_sword: gildedNetheriteSword,
  soul_netherite_sword: soulNetheriteSword,
  cobalt_sword: cobaltSword,
  mithril_sword: mithrilSword,
  hextech_sword: hextechSword,
  warden_bow: wardenBow,
  cobalt_bow: cobaltBow,
  mithril_bow: mithrilBow,
  hextech_bow: hextechBow,
  lucky_block: luckyBlock,
  // Vanilla MC
  golden_apple: goldenApple,
  mc_golden_apple: mcGoldenApple,
  mc_diamond: mcDiamond,
  mc_iron_ingot: mcIronIngot,
  mc_gold_ingot: mcGoldIngot,
  mc_netherite_ingot: mcNetheriteIngot,
  mc_netherite_scrap: mcNetheriteScrap,
  mc_emerald: mcEmerald,
  mc_bow: mcBow,
  mc_book: mcBook,
  mc_paper: mcPaper,
  mc_diamond_block: mcDiamondBlock,
  mc_gold_block: mcGoldBlock,
  mc_netherite_block: mcNetheriteBlock,
  mc_diamond_sword: mcDiamondSword,
  mc_netherite_sword: mcNetheriteSword,
  mc_iron_sword: mcIronSword,
  mc_feather: mcFeather,
  mc_exp_bottle: mcExpBottle,
  mc_arrow: mcArrow,
  mc_diamond_axe: mcDiamondAxe,
  mc_amethyst_shard: mcAmethystShard,
  mc_nether_star: mcNetherStar,
  mc_ancient_debris: mcAncientDebris,
  mc_diamond_boots: mcDiamondBoots,
  mc_diamond_leggings: mcDiamondLeggings,
  mc_diamond_helmet: mcDiamondHelmet,
  mc_diamond_chestplate: mcDiamondChestplate,
  gilded_netherite_ingot: gildedNetheriteIngot,
  soul_netherite_ingot: soulNetheriteIngot,
  // Tomes
  tome_common: tomeCommon,
  tome_rare: tomeRare,
  tome_legendary: tomeLegendary,
  tome_fabled: tomeFabled,
  // Hellz weapons
  destroyer_sword: destroyerSword,
  dwarf_axe: dwarfAxe,
  dwarf_crossbow: dwarfCrossbow,
  cerberus_flail: cerberusFlail,
  demon_sword: demonSword,
  necro_staff: necroStaff,
  wizard_staff: wizardStaff,
  forgemaster_hammer: forgemasterHammer,
  // Hellz armor
  hellz_knight_helmet: hellzKnightHelmet,
  hellz_knight_chestplate: hellzKnightChestplate,
  hellz_knight_boots: hellzKnightBoots,
  hellz_knight_leggings: hellzKnightLeggings,
  hellz_demonic_helmet: hellzDemonicHelmet,
  hellz_demonic_chestplate: hellzDemonicChestplate,
  hellz_demonic_boots: hellzDemonicBoots,
  hellz_demonic_leggings: hellzDemonicLeggings,
  hellz_necromancer_helmet: hellzNecromancerHelmet,
  hellz_necromancer_chestplate: hellzNecromancerChestplate,
  hellz_necromancer_boots: hellzNecromancerBoots,
  hellz_necromancer_leggings: hellzNecromancerLeggings,
  // Misc dungeon
  hell_wand: hellWand,
  diamond_key: diamondKey,
  emerald_key: emeraldKey,
  star_key: starKey,
};

const RARITY_COLORS = {
  common: '#AAAAAA',
  uncommon: '#55FF55',
  rare: '#5555FF',
  epic: '#AA00AA',
  legendary: '#FFAA00',
  mythic: '#FF5555',
};

function parseLoreLine(line, index, totalLines) {
  if (line.includes(' — Tier ') || line.includes(' — Mythic'))
    return { text: line, color: '#AAAAAA' };
  if (/^(Helmet|Chestplate|Leggings|Boots):/.test(line) && /\d+\s*(Armor|Tough|DR|HP)/.test(line))
    return { text: line, color: '#55FF55' };
  if (/\d+\s*(ATK|Armor|Tough|DR|HP|Speed|Magic|Skill|PvE|PvP|Fire|Dark)/.test(line) && !line.startsWith('Ability'))
    return { text: line, color: '#55FF55' };
  if (line.startsWith('Set Bonus'))
    return { text: line, color: '#55FFFF' };
  if (line.startsWith('Ability'))
    return { text: line, color: '#FFAA00' };
  if (/^(Sharpness|Protection|Fire Protection|Power|Unbreaking|Infinity)/.test(line))
    return { text: line, color: '#5555FF' };
  if (line.includes('Master mode only'))
    return { text: line, color: '#FF5555' };
  if (line.includes('drops separately') || line.startsWith('No set ability') || line.startsWith('Each piece'))
    return { text: line, color: '#AAAAAA' };
  if (index === totalLines - 1 && !line.includes('%') && !line.includes('slot') && /[.!]$/.test(line))
    return { text: line, color: '#AA00AA', italic: true };
  return { text: line, color: '#AAAAAA' };
}

function LoreLine({ line, index, totalLines }) {
  const parsed = parseLoreLine(line, index, totalLines);
  return (
    <div className={`mc-tooltip__lore${parsed.italic ? ' mc-tooltip__lore--italic' : ''}`} style={{ color: parsed.color }}>
      {parsed.text}
    </div>
  );
}

function ItemSlot({ item, onClick }) {
  const [hover, setHover] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  if (!item) {
    return <div className="chest-slot chest-slot--empty" />;
  }

  const tex = TEXTURES[item.icon];
  const rarityColor = RARITY_COLORS[item.rarity] || '#AAAAAA';

  const handleMouseMove = (e) => {
    setPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="chest-slot"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={handleMouseMove}
      onClick={() => onClick && onClick(item)}
    >
      {tex ? (
        <img src={tex} alt={item.name} className="chest-slot__icon" draggable={false} />
      ) : (
        <div className="chest-slot__fallback" style={{ background: item.fallbackColor || '#555' }}>
          {item.fallbackLabel || '?'}
        </div>
      )}
      {item.stackSize && item.stackSize > 1 && (
        <span className="chest-slot__count">{item.stackSize}</span>
      )}
      {hover && (
        <div
          className="mc-tooltip"
          style={{
            left: pos.x + 12,
            top: pos.y - 10,
          }}
        >
          <div className="mc-tooltip__name" style={{ color: rarityColor }}>{item.name}</div>
          {item.rarity && (
            <div className="mc-tooltip__rarity" style={{ color: rarityColor }}>
              {item.rarity.charAt(0).toUpperCase() + item.rarity.slice(1)}
            </div>
          )}
          {item.lore && item.lore.map((line, i) => (
            <LoreLine key={i} line={line} index={i} totalLines={item.lore.length} />
          ))}
          <div className="mc-tooltip__divider" />
          <div className="mc-tooltip__drop-label">Drop Sources</div>
          {item.sources && item.sources.map((src, i) => (
            <div key={i} className="mc-tooltip__source">
              <span className="mc-tooltip__source-name">{src.from}</span>
              <span className="mc-tooltip__source-rate">{src.rate}</span>
            </div>
          ))}
          {item.note && <div className="mc-tooltip__note">{item.note}</div>}
        </div>
      )}
    </div>
  );
}

function MobileItemCard({ item, onClose }) {
  const rarityColor = RARITY_COLORS[item.rarity] || '#AAAAAA';
  const tex = TEXTURES[item.icon];

  return (
    <div className="mobile-item-overlay" onClick={onClose}>
      <div className="mobile-item-card" onClick={(e) => e.stopPropagation()}>
        <div className="mobile-item-card__header">
          {tex ? (
            <img src={tex} alt={item.name} className="mobile-item-card__icon" />
          ) : (
            <div className="chest-slot__fallback" style={{ background: item.fallbackColor || '#555' }}>
              {item.fallbackLabel || '?'}
            </div>
          )}
          <div>
            <div className="mc-tooltip__name" style={{ color: rarityColor, fontSize: '1.1rem' }}>{item.name}</div>
            {item.rarity && (
              <div className="mc-tooltip__rarity" style={{ color: rarityColor }}>
                {item.rarity.charAt(0).toUpperCase() + item.rarity.slice(1)}
              </div>
            )}
          </div>
        </div>
        <div style={{ padding: '0 14px' }}>
          {item.lore && item.lore.map((line, i) => (
            <LoreLine key={i} line={line} index={i} totalLines={item.lore.length} />
          ))}
        </div>
        <div className="mc-tooltip__divider" style={{ margin: '8px 14px' }} />
        <div style={{ padding: '0 14px 14px' }}>
          <div className="mc-tooltip__drop-label">Drop Sources</div>
          {item.sources && item.sources.map((src, i) => (
            <div key={i} className="mc-tooltip__source" style={{ padding: '3px 0' }}>
              <span className="mc-tooltip__source-name">{src.from}</span>
              <span className="mc-tooltip__source-rate">{src.rate}</span>
            </div>
          ))}
        </div>
        {item.note && <div className="mc-tooltip__note" style={{ padding: '0 14px 14px' }}>{item.note}</div>}
        <button className="mobile-item-card__close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default function ChestGui({ title, items, cols = 9 }) {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        if (selectedItem) setSelectedItem(null);
        else setOpen(false);
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, selectedItem]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const rows = Math.ceil(items.length / cols);
  const slots = [];
  for (let i = 0; i < rows * cols; i++) {
    slots.push(items[i] || null);
  }

  return (
    <>
      <button className="chest-gui-btn" onClick={() => setOpen(true)}>
        View Drops
      </button>

      {open && (
        <div className="chest-modal-overlay" onClick={() => setOpen(false)}>
          <div className="chest-modal" onClick={(e) => e.stopPropagation()}>
            <div className="chest-modal__header">
              <div className="chest-gui__title">{title}</div>
              <button className="chest-modal__close" onClick={() => setOpen(false)} aria-label="Close">&times;</button>
            </div>
            <div className="chest-gui__grid" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
              {slots.map((item, i) => (
                <ItemSlot key={i} item={item} onClick={(it) => setSelectedItem(it)} />
              ))}
            </div>
            <div className="chest-gui__hint">Hover over items for drop info</div>
          </div>
        </div>
      )}

      {selectedItem && (
        <MobileItemCard item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}
