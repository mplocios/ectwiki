import { useState, useMemo } from 'react';
import Callout from '../components/Callout';
import ResponsiveTable from '../components/ResponsiveTable';
import { FISH_DATA } from '../data/fishData';

const TIER_ORDER = ['Bronze', 'Silver', 'Gold', 'Diamond', 'Platinum', 'Mythical'];
const TIER_COLORS = {
  Bronze: '#cd7f32',
  Silver: '#c0c0c0',
  Gold: '#b8860b',
  Diamond: '#b9f2ff',
  Platinum: '#e5e4e2',
  Mythical: '#ff3333',
  Legendary: '#ff8c00',
  Divine: '#ffee00',
};
const TIER_BG = {
  Bronze: 'rgba(205,127,50,0.10)',
  Silver: 'rgba(192,192,192,0.10)',
  Gold: 'rgba(184,134,11,0.10)',
  Diamond: 'rgba(185,242,255,0.10)',
  Platinum: 'rgba(229,228,226,0.10)',
  Mythical: 'rgba(255,51,51,0.10)',
};

const CATCH_CHANCE = { Bronze: '60%', Silver: '20%', Gold: '5%', Diamond: '3%', Platinum: '1%', Mythical: '0.3%' };
const SELL_PRICE = { Bronze: '⛂ 100', Silver: '⛂ 550', Gold: '⛂ 1,500', Diamond: '⛂ 5,000', Platinum: '⛂ 10,000', Mythical: '⛂ 25,000' };
const ENTROPY = { Bronze: 20, Silver: 60, Gold: 150, Diamond: 200, Platinum: 800, Mythical: 2000 };
const FISHING_XP = { Bronze: 75, Silver: 150, Gold: 300, Diamond: 700, Platinum: 1700, Mythical: 7500 };

const TIER_COUNTS = {
  Bronze: 64,
  Silver: 60,
  Gold: 67,
  Diamond: 38,
  Platinum: 46,
  Mythical: 27,
  Legendary: 12,
  Divine: 10,
};

const SPECIAL_FISH = {
  'Skyfall Leviathan': {
    catchRate: '0.1%',
    condition: 'Fish above Y=200 in an Ocean biome',
    method: 'Only those who dare to fish among the clouds above the sea will ever see this creature. Rise far above the ocean\'s surface — higher than any tower — and cast your line into water that should not exist at such heights.',
    lore: 'A colossal fish said to swim through the clouds. Fishermen who claim to have seen it are called mad — yet their nets always smell of rain.',
    consumeEffect: [{ effect: 'Slow Falling', duration: '5 min' }, { effect: 'Levitation', duration: '3 sec' }],
    consumeMsg: 'You feel lighter than air...',
  },
  'Sculk Devourer': {
    catchRate: '0.1%',
    condition: 'Fish below Y=0 in the Deep Dark',
    method: 'Descend into the deepest silence beneath the world, where the ancient sculk grows and something terrible listens. Bring your own water to those forsaken depths — and pray that every cast does not become your last sound.',
    lore: 'Born in the silence between heartbeats. It feeds on sound itself — or so the old miners whisper before they stop talking forever.',
    consumeEffect: [{ effect: 'Darkness', duration: '10 sec' }, { effect: 'Night Vision', duration: '3 min 10 sec' }],
    consumeMsg: 'Your eyes adjust to the darkness...',
  },
  'Infernal Serpent': {
    catchRate: '0.1%',
    condition: 'Fish in lava in a Nether biome',
    method: 'Cast your rod not into water, but into the molten rivers of the underworld itself. Only those who can withstand the hellfire and brave the Nether\'s endless fury will pull this serpent from the flames.',
    lore: 'Forged in the fires beneath the world. Its scales glow like magma, and its bite burns hotter than the sun.',
    consumeEffect: [{ effect: 'Fire Resistance', duration: '10 min' }, { effect: 'Catches fire', duration: '3 sec' }],
    consumeMsg: 'The flames burn... then embrace you.',
  },
  'Voidborn Angler': {
    catchRate: '0.1%',
    condition: 'Fish in the void in The End dimension',
    method: 'Beyond the dragon, beyond the portal, lies a realm of endless nothing. Cast your line into the void itself — no water needed. Only with the Void Fishing enchant can you fish in nothingness.',
    lore: 'It drifts between the islands of nothing, feeding on the void between stars. To see it is to question what is real.',
    consumeEffect: [{ effect: 'Slow Falling', duration: '3 min' }, { effect: 'Random Teleport', duration: '±10 blocks' }],
    consumeMsg: 'Reality warps around you...',
  },
  'Frozen Deity': {
    catchRate: '0.1%',
    condition: 'Fish in a Frozen Ocean biome during rain/snow',
    method: 'Seek the frozen seas at the edge of the world and wait for the sky to weep ice. Shatter the frozen surface, expose the dark waters beneath, and fish while the storm rages around you.',
    lore: 'A crystalline fish that only appears when the sky weeps ice. Legends say it was the first fish ever frozen — and the last to thaw.',
    consumeEffect: [{ effect: 'Slowness III', duration: '5 sec' }, { effect: 'Resistance II', duration: '3 min' }],
    consumeMsg: 'Ice crystallizes around you...',
  },
  'Aetheris': {
    catchRate: '0.05%',
    condition: 'Only appears in absolute nothingness',
    method: 'Where light has never reached and shadows consume your very sight, something ancient stirs. Only those who embrace total blindness in the deepest dark will feel its presence on the line.',
    lore: 'There is no proof this fish exists. Only the story of an old man who fished his whole life in every ocean, river, and lake — and found it in the one place no light has ever touched.',
    consumeEffect: [{ effect: 'Invisibility', duration: '5 min' }, { effect: 'Night Vision', duration: '5 min' }, { effect: 'Darkness', duration: '5 sec' }],
    consumeMsg: 'You become one with the void...',
  },
  'Deus Pisces': {
    catchRate: '0.05%',
    condition: 'Only appears to the desperate and unprotected',
    method: 'The god of fish does not appear to the prepared. Strip yourself of everything — armor, pride, even your health. Stand on the brink of death itself, bare and vulnerable, while the heavens rage above. Only then does divinity bite.',
    lore: 'A golden fish from the brink of death. It only reveals itself to those who have nothing left to lose.',
    consumeEffect: [{ effect: 'Absorption IV', duration: '5 min' }, { effect: 'Regeneration III', duration: '30 sec' }, { effect: 'Lightning Strike', duration: 'Instant' }],
    consumeMsg: 'The divine power surges through you...',
  },
  'Celestine': {
    catchRate: '0.05%',
    condition: 'Only appears between heaven and earth',
    method: 'This celestial being exists in the space between rising and falling, suspended where sky meets frozen ground. Defy gravity itself in a place where the earth is soft as clouds, and the heavens pull you upward.',
    lore: 'Between heaven and earth, neither rising nor falling. A being of pure light, frozen in the space between.',
    consumeEffect: [{ effect: 'Slow Falling', duration: '10 min' }, { effect: 'Speed II', duration: '5 min' }],
    consumeMsg: 'A celestial warmth purifies your body...',
  },
  'Valor Fin': {
    catchRate: '0.05%',
    condition: 'Only appears to the fearless and burning',
    method: 'The bravest fisherman who ever lived didn\'t hide from the fire — he stood in it. He wore no armor, showed no fear, and let the flames take him. Cast your line while the fire consumes you, empowered and standing tall.',
    lore: 'The bravest fisherman who ever lived didn\'t hide from the fire — he stood in it.',
    consumeEffect: [{ effect: 'Resistance II', duration: '5 min' }, { effect: 'Strength II', duration: '5 min' }, { effect: 'Fire Resistance', duration: '5 min' }],
    consumeMsg: 'The warrior\'s spirit burns within you...',
  },
  'Fata Morgana': {
    catchRate: '0.05%',
    condition: 'Only appears where opposites collide',
    method: 'Travel to the scorching desert and wait for the impossible — rain in a land that should never see it. You must also be freezing in the hottest place on earth. When fire and ice collide, the mirage becomes real.',
    lore: 'The desert shows you what isn\'t there — and hides what is.',
    consumeEffect: [{ effect: 'Invisibility', duration: '10 min' }, { effect: 'Speed III', duration: '5 min' }, { effect: 'Night Vision', duration: '10 min' }],
    consumeMsg: 'You shimmer and fade like a desert mirage...',
  },
  'Aurelia': {
    catchRate: '0.05%',
    condition: 'Only appears to those who sink with fortune in hand',
    method: 'He sank to the bottom, stood on a throne of precious metal, and clutched his last lucky charm. With nothing but ocean above and darkness around, he cast his line into the night — and the golden blessing answered.',
    lore: 'He sank to the bottom, stood on gold, clutched his last lucky charm, and cast his line into the dark above.',
    consumeEffect: [{ effect: 'Regeneration III', duration: '2 min' }, { effect: 'Absorption V', duration: '10 min' }, { effect: 'Luck', duration: '10 min' }, { effect: 'Saturation V', duration: '30 sec' }],
    consumeMsg: 'The Golden Blessing fills you with radiant life...',
  },
  'The Fish of Cthulu': {
    catchRate: '0.1%',
    condition: 'Only appears in the void beyond the dragon',
    method: 'Beyond the dragon lies an eldritch horror. Cast your line into the void between the islands, where reality itself unravels. Something ancient and terrible may answer — if you are unlucky enough.',
    lore: 'Something ancient and terrible lurks between the End islands, feeding on the void itself.',
    consumeEffect: [{ effect: 'Darkness', duration: '30 sec' }, { effect: 'Strength II', duration: '3 min' }, { effect: 'Nausea', duration: '10 sec' }],
    consumeMsg: 'Eldritch knowledge fills your mind...',
  },
  'Seven Finned Death': {
    catchRate: '0.1%',
    condition: 'Only appears in the void beyond the dragon',
    method: 'In The End, death takes many forms. Cast your line into the void — and pray that what bites isn\'t the seven-bladed horror that drifts between islands, leaving nothing alive in its wake.',
    lore: 'Seven fins, each one a blade. It drifts between End islands, leaving nothing alive in its wake.',
    consumeEffect: [{ effect: 'Wither', duration: '5 sec' }, { effect: 'Strength III', duration: '2 min' }, { effect: 'Resistance', duration: '2 min' }],
    consumeMsg: 'Death\'s power courses through you...',
  },
  'Cloudfish': {
    catchRate: '0.1%',
    condition: 'Only appears where the peaks touch the sky',
    method: 'Seek the highest mountain pools, where the peaks touch the clouds. It has never descended below — and neither should you.',
    lore: 'It swims through clouds at the top of the world, never descending below the mountain peaks.',
    consumeEffect: [{ effect: 'Slow Falling', duration: '10 min' }, { effect: 'Speed', duration: '5 min' }],
    consumeMsg: 'You feel light as a cloud...',
  },
  'Oarfish': {
    catchRate: '0.1%',
    condition: 'Only appears in the deepest ocean trenches',
    method: 'Dive to the very bottom of the deepest ocean, where sunlight is a forgotten memory. Only the brave who fish at the ocean floor will ever glimpse the longest fish in the sea.',
    lore: 'The longest fish in the sea, glimpsed only by those brave enough to fish at the ocean floor.',
    consumeEffect: [{ effect: 'Dolphin\'s Grace', duration: '5 min' }, { effect: 'Water Breathing', duration: '5 min' }],
    consumeMsg: 'The ancient deep grants you its gift...',
  },
  'Fishron': {
    catchRate: '0.1%',
    condition: 'Only appears when lightning meets the sea',
    method: 'When the heavens rage and lightning strikes the ocean, a dragon-fish stirs beneath the waves. Its scales crackle with electricity — you\'ll know when it bites.',
    lore: 'Half dragon, half fish, born of lightning striking the ocean. Its scales crackle with electricity.',
    consumeEffect: [{ effect: 'Strength II', duration: '3 min' }, { effect: 'Resistance', duration: '3 min' }, { effect: 'Lightning Strike', duration: 'Instant' }],
    consumeMsg: 'Thunder surges through your veins...',
  },
  'King of the Pond': {
    catchRate: '0.1%',
    condition: 'Only appears under moonlight in the swamp',
    method: 'Every swamp has a king. He watches from below, and only the patient will earn an audience. Wait for the moon to rise over the murky waters.',
    lore: 'Every swamp has a king. He watches from below, and only the patient will earn an audience.',
    consumeEffect: [{ effect: 'Regeneration II', duration: '5 min' }, { effect: 'Saturation III', duration: '20 sec' }],
    consumeMsg: 'The king\'s feast restores you...',
  },
  'The Sounding': {
    catchRate: '0.1%',
    condition: 'Only appears in the deepest ocean trenches',
    method: 'A sound from the deep — low, resonant, ancient. Fish in the deepest waters, and if the stars align, the great whale-fish surfaces. The old sailors called it The Sounding.',
    lore: 'A sound from the deep — low, resonant, ancient. The old sailors called it The Sounding.',
    consumeEffect: [{ effect: 'Water Breathing', duration: '10 min' }, { effect: 'Night Vision', duration: '10 min' }, { effect: 'Dolphin\'s Grace', duration: '5 min' }],
    consumeMsg: 'The deep sea reveals its secrets...',
  },
  'Fishbrine': {
    catchRate: '0.05%',
    condition: 'Only appears to burning ghosts in the deep dark',
    method: 'They say if you become something between alive and dead — unseen, burning, deep beneath the world where no sun reaches — something impossible bites. Fish as a ghost in flames, when the world above sleeps.',
    lore: 'They say if you fish while invisible and burning deep underground at night, something impossible bites.',
    consumeEffect: [{ effect: 'Invisibility', duration: '5 min' }, { effect: 'Fire Resistance', duration: '5 min' }, { effect: 'Catches fire', duration: '5 sec' }],
    consumeMsg: 'You flicker between worlds, burning yet unseen...',
  },
  'Yeti Crab': {
    catchRate: '0.05%',
    condition: 'Only appears where fire meets the frozen deep',
    method: 'Where boiling lava meets freezing ocean, life finds a way. Seek the deepest hydrothermal vents — places where the earth bleeds heat into the coldest waters. The Yeti Crab thrives in the impossible.',
    lore: 'Where boiling lava meets freezing ocean, life finds a way. The Yeti Crab thrives in the impossible.',
    consumeEffect: [{ effect: 'Fire Resistance', duration: '10 min' }, { effect: 'Water Breathing', duration: '10 min' }, { effect: 'Resistance', duration: '5 min' }],
    consumeMsg: 'The warmth of the deep vents protects you...',
  },
  'The Uncatchable': {
    catchRate: '0.05%',
    condition: 'Only appears to those faster than nature allows',
    method: 'It has never been caught — because no one was ever fast enough. Normal speed won\'t cut it. This fish only reveals itself to those moving far beyond what\'s natural. Find a way to go even faster.',
    lore: 'It has never been caught. Until now.',
    consumeEffect: [{ effect: 'Speed III', duration: '5 min' }, { effect: 'Jump Boost II', duration: '5 min' }],
    consumeMsg: 'You absorb the speed of the uncatchable...',
  },
  'Enchanted Bookfish': {
    catchRate: '0.05%',
    condition: 'Only appears atop the peak of arcane knowledge',
    method: 'Stand where the greatest enchantments are channeled, surrounded by the wisdom of countless tomes. Hold an ancient, undeciphered text and cast your line. Only when surrounded by the peak of arcane knowledge does this living tome reveal itself.',
    lore: 'A fish made of enchanted pages. Some say it contains every spell ever written — and a few that were never meant to be read.',
    consumeEffect: [{ effect: '+100 Experience Levels', duration: 'Instant' }],
    consumeMsg: 'Ancient knowledge floods your mind...',
  },
};

function FishCard({ fish, onClick }) {
  const isLeg = fish.special === 'legendary';
  const isDiv = fish.special === 'divine';
  const isSpecial = isLeg || isDiv;
  const isSoon = fish.comingSoon;
  const tierColor = isLeg ? '#ff8c00' : isDiv ? '#ffee00' : TIER_COLORS[fish.tier];
  const tierBg = isLeg ? 'rgba(255,140,0,0.10)' : isDiv ? 'rgba(255,238,0,0.10)' : TIER_BG[fish.tier];
  return (
    <button
      className={`fish-card${isSoon ? ' fish-card-soon' : ''}`}
      onClick={() => onClick(fish)}
      style={{
        border: `1px solid ${isSoon ? 'rgba(255,238,0,0.15)' : isSpecial ? (isDiv ? 'rgba(255,238,0,0.3)' : 'rgba(255,140,0,0.3)') : 'var(--border)'}`,
        background: isSoon ? 'rgba(255,238,0,0.03)' : isSpecial ? (isDiv ? 'rgba(255,238,0,0.05)' : 'rgba(255,140,0,0.05)') : 'var(--bg-card)',
      }}
    >
      <div className="fish-card-img" style={isSoon ? { filter: 'grayscale(0.6) opacity(0.5)' } : undefined}>
        {fish.image ? (
          <img src={fish.image} alt={fish.name} loading="lazy" />
        ) : (
          <div className="fish-card-placeholder">?</div>
        )}
      </div>
      <div className="fish-card-name">{fish.name}</div>
      {isSoon ? (
        <span className="fish-card-tier" style={{ color: '#888', background: 'rgba(136,136,136,0.12)', fontSize: 10, letterSpacing: '0.5px' }}>
          COMING SOON
        </span>
      ) : (
        <span className="fish-card-tier" style={{ color: tierColor, background: tierBg }}>
          {isLeg ? 'Legendary' : isDiv ? 'Divine' : fish.tier}
        </span>
      )}
    </button>
  );
}

function FishModal({ fish, onClose }) {
  if (!fish) return null;
  const isLegendary = fish.special === 'legendary';
  const isDivine = fish.special === 'divine';
  const isSpecial = isLegendary || isDivine;
  const isSoon = fish.comingSoon;
  const tierLabel = isLegendary ? 'Legendary' : isDivine ? 'Divine' : fish.tier;
  const details = SPECIAL_FISH[fish.name];

  return (
    <div className="fish-modal-overlay" onClick={onClose}>
      <div className="fish-modal" onClick={e => e.stopPropagation()}>
        <button className="fish-modal-close" onClick={onClose}>&times;</button>
        {isSoon && (
          <div style={{ background: 'rgba(255,238,0,0.10)', border: '1px solid rgba(255,238,0,0.25)', borderRadius: 8, padding: '8px 14px', marginBottom: 12, textAlign: 'center', fontSize: 13, color: '#ffee00', fontWeight: 600, letterSpacing: '0.5px' }}>
            COMING SOON — This fish is not yet catchable
          </div>
        )}
        <div className="fish-modal-header">
          <div className="fish-modal-img" style={isSoon ? { filter: 'grayscale(0.4) opacity(0.7)' } : undefined}>
            {fish.image ? <img src={fish.image} alt={fish.name} /> : <div className="fish-card-placeholder">?</div>}
          </div>
          <div>
            <h3 style={{ color: isLegendary ? '#ff8c00' : isDivine ? '#ffee00' : TIER_COLORS[fish.tier], margin: 0 }}>{fish.name}</h3>
            <span className="fish-card-tier" style={{ color: isLegendary ? '#ff8c00' : isDivine ? '#ffee00' : TIER_COLORS[fish.tier], background: isLegendary ? 'rgba(255,140,0,0.10)' : isDivine ? 'rgba(255,238,0,0.10)' : TIER_BG[fish.tier], marginTop: 4 }}>
              {tierLabel}
            </span>
          </div>
        </div>

        {details ? (
          <p className="fish-modal-desc fish-modal-lore">"{details.lore}"</p>
        ) : fish.description && fish.description !== '???' ? (
          <p className="fish-modal-desc">"{fish.description}"</p>
        ) : null}

        {isSpecial && details ? (
          <div className="fish-modal-special">
            <div className="fish-modal-mystery">
              <span style={{ fontSize: 20 }}>{isDivine ? '☄' : '✨'}</span>
              <div>
                <strong style={{ color: isDivine ? '#ffee00' : '#ff8c00' }}>{isDivine ? 'Divine Fish' : 'Legendary Fish'}</strong>
                <p>{details.condition}</p>
              </div>
            </div>
            <div className="fish-modal-row">
              <span className="fish-modal-label">Catch Rate</span>
              <span style={{ color: isDivine ? '#ffee00' : '#ff8c00', fontWeight: 600 }}>{details.catchRate}</span>
            </div>
            {fish.sellPrice && (
              <div className="fish-modal-row">
                <span className="fish-modal-label">Sell Value</span>
                <span className="badge gold">{'⛂'} {fish.sellPrice.toLocaleString()}</span>
              </div>
            )}
            <div className="fish-modal-row">
              <span className="fish-modal-label">Entropy</span>
              <span>{isDivine ? '16,500' : '6,500'}</span>
            </div>
            <div className="fish-modal-row">
              <span className="fish-modal-label">Fishing XP</span>
              <span>{isDivine ? '57,500' : '22,500'}</span>
            </div>
            <div className="fish-modal-method">
              <strong>How to find it</strong>
              <p>{details.method}</p>
            </div>
            {details.consumeEffect && (
              <div className="fish-modal-consume">
                <strong>When Consumed</strong>
                <p style={{ fontStyle: 'italic', color: isDivine ? '#ffee00' : '#ff8c00', margin: '6px 0 8px' }}>"{details.consumeMsg}"</p>
                <div className="fish-consume-effects">
                  {details.consumeEffect.map((e, i) => (
                    <div key={i} className="fish-consume-row">
                      <span className="fish-consume-effect">{e.effect}</span>
                      <span className="fish-consume-duration">{e.duration}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="fish-modal-stats">
            <div className="fish-modal-row">
              <span className="fish-modal-label">Catch Chance</span>
              <span>{CATCH_CHANCE[fish.tier]}</span>
            </div>
            <div className="fish-modal-row">
              <span className="fish-modal-label">Sell Price</span>
              <span>{SELL_PRICE[fish.tier]}</span>
            </div>
            <div className="fish-modal-row">
              <span className="fish-modal-label">Entropy (Gut)</span>
              <span>{ENTROPY[fish.tier].toLocaleString()}</span>
            </div>
            <div className="fish-modal-row">
              <span className="fish-modal-label">Fishing XP</span>
              <span>{FISHING_XP[fish.tier].toLocaleString()}</span>
            </div>
            <div className="fish-modal-row">
              <span className="fish-modal-label">Biomes</span>
              <span>{fish.allBiomes ? 'All Biomes' : fish.biomes}</span>
            </div>
            {fish.weather === 'rain' && (
              <div className="fish-modal-row">
                <span className="fish-modal-label">Weather</span>
                <span>Only during rain</span>
              </div>
            )}
            <div className="fish-modal-row">
              <span className="fish-modal-label">When Consumed</span>
              <span>Restores hunger</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function FishCodex() {
  const [selectedFish, setSelectedFish] = useState(null);
  const [activeTier, setActiveTier] = useState('all');
  const [search, setSearch] = useState('');
  const totalFish = Object.values(TIER_COUNTS).reduce((a, b) => a + b, 0);

  const filtered = useMemo(() => {
    const SORT_ORDER = { Bronze: 0, Silver: 1, Gold: 2, Diamond: 3, Platinum: 4, Mythical: 5 };
    let list = FISH_DATA;
    if (activeTier !== 'all') {
      if (activeTier === 'Legendary') {
        list = list.filter(f => f.special === 'legendary');
      } else if (activeTier === 'Divine') {
        list = list.filter(f => f.special === 'divine');
      } else {
        list = list.filter(f => f.tier === activeTier && !f.special);
      }
    }
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(f => f.name.toLowerCase().includes(q));
    }
    list = [...list].sort((a, b) => {
      const aOrder = a.special === 'divine' ? 7 : a.special === 'legendary' ? 6 : (SORT_ORDER[a.tier] ?? 5);
      const bOrder = b.special === 'divine' ? 7 : b.special === 'legendary' ? 6 : (SORT_ORDER[b.tier] ?? 5);
      if (aOrder !== bOrder) return aOrder - bOrder;
      return a.name.localeCompare(b.name);
    });
    return list;
  }, [activeTier, search]);

  const filterTabs = ['all', ...TIER_ORDER, 'Legendary', 'Divine'];

  return (
    <>
      <h1>Fish Codex</h1>
      <p className="page-desc">Track every fish you've ever caught — from common Bronze to impossible Divine.</p>

      <h2>What is the Fish Codex?</h2>
      <p>
        The <b>Fish Codex</b> is your personal fish collection tracker. Every time you catch a new species of fish, it gets permanently recorded in your codex.
        Use it to see which fish you've discovered, how many times you've caught them, and how many are left to find in each tier.
      </p>
      <p>
        Open your Fish Codex at any time with <code>/fishbook</code>.
      </p>

      <div className="cmd-list">
        <div className="cmd-row"><code>/fishbook</code><span className="cmd-desc">Open the Fish Codex GUI</span></div>
        <div className="cmd-row"><code>/mycodex</code><span className="cmd-desc">Alias for /fishbook</span></div>
        <div className="cmd-row"><code>/fcodex</code><span className="cmd-desc">Alias for /fishbook</span></div>
      </div>

      <h2>How It Works</h2>
      <p>When you open the Fish Codex, you'll see a menu with all <b>8 tiers</b> of fish. Click on any tier to browse its fish.</p>
      <ul>
        <li><b>Discovered fish</b> show their name, tier color, how many times you've caught them, and the date of your first catch.</li>
        <li><b>Undiscovered fish</b> appear as a dark silhouette with a <b>"???"</b> name — you won't know what they are until you catch one.</li>
        <li>The codex also tracks the <b>Global First Catch</b> — the very first player on the server to catch each species.</li>
      </ul>

      <Callout type="tip"><b>Tip:</b> Try to be the first player to catch a species! Your name will be permanently recorded as the Global First Catch for that fish.</Callout>

      <h2>Fish Unlocked Notification</h2>
      <p>Every time you catch a <b>new species</b> for the first time, you'll see a special notification in chat:</p>

      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, padding: '16px 20px', margin: '16px 0', fontFamily: 'monospace', fontSize: 14, lineHeight: 1.8 }}>
        <div style={{ color: '#55ff55', fontWeight: 700 }}>&nbsp;&nbsp;FISH UNLOCKED!</div>
        <div style={{ color: '#aaa' }}>&nbsp;&nbsp;You caught a new <span style={{ color: '#fff' }}>Gold</span> fish: <span style={{ color: '#b8860b' }}>Sunscale Koi</span>!</div>
        <div style={{ color: '#aaa' }}>&nbsp;&nbsp;Check <span style={{ color: '#55ff55' }}>/fishbook</span> to see your fish progress!</div>
      </div>

      <p>The notification shows the <b>tier</b> and <b>name</b> of the fish, so you can find it easily in your codex.</p>

      <h2>Tiers &amp; Fish Count</h2>
      <p>There are <b>{totalFish}</b> total fish species across 8 tiers. Higher tiers are rarer and harder to catch.</p>

      <ResponsiveTable><table className="wiki-table">
        <thead><tr><th>Tier</th><th>Fish Count</th><th>How to Catch</th></tr></thead>
        <tbody>
          {Object.entries(TIER_COUNTS).map(([tier, count]) => (
            <tr key={tier}>
              <td><span style={{ color: TIER_COLORS[tier], fontWeight: 600 }}>{tier}</span></td>
              <td>{count}</td>
              <td>
                {tier === 'Legendary' ? 'Special locations + 1/1,000 roll per catch' :
                 tier === 'Divine' ? 'Extreme conditions + 1/2,000 roll per catch' :
                 'Normal fishing — rarer tiers have lower catch rates'}
              </td>
            </tr>
          ))}
        </tbody>
      </table></ResponsiveTable>

      <h2>Fish Collection</h2>
      <p>Click any fish to see its details — biome, sell price, catch chance, consume effects, and more.</p>

      <div className="fish-filters">
        <div className="fish-filter-tabs">
          {filterTabs.map(t => (
            <button
              key={t}
              className={`fish-filter-btn ${activeTier === t ? 'active' : ''}`}
              onClick={() => setActiveTier(t)}
              style={activeTier === t && t !== 'all' ? { color: TIER_COLORS[t] || '#ff6ec7', borderColor: TIER_COLORS[t] || '#ff6ec7' } : {}}
            >
              {t === 'all' ? 'All' : t}
            </button>
          ))}
        </div>
        <input
          className="fish-search"
          type="text"
          placeholder="Search fish..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="fish-count">{filtered.length} fish</div>

      <div className="fish-grid">
        {filtered.map(f => (
          <FishCard key={f.name} fish={f} onClick={setSelectedFish} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p style={{ textAlign: 'center', color: 'var(--text-dim)', padding: 32 }}>No fish found matching your search.</p>
      )}

      <FishModal fish={selectedFish} onClose={() => setSelectedFish(null)} />

      <h2>Completing the Codex</h2>
      <p>Filling your Fish Codex is the ultimate fishing challenge on ExtremeCraft. Here are some tips:</p>
      <ul>
        <li><b>Fish everywhere</b> — different biomes yield different fish. Explore oceans, rivers, swamps, frozen biomes, and more.</li>
        <li><b>Get the enchantments</b> — Lava Fishing and Void Fishing unlock an additional 5+ legendary and divine species that are otherwise impossible to catch.</li>
        <li><b>Use the Fishing Totem</b> — the <b>Mythical Waters</b> passive gives a 20% chance to upgrade any fish's rarity tier, making rare catches more common.</li>
        <li><b>Fish during weather</b> — several legendary fish require rain, snow, or thunderstorms.</li>
        <li><b>Fish at night</b> — some fish only appear after dark.</li>
        <li><b>Explore height extremes</b> — fish at Y=200+ for Skyfall Leviathan and Cloudfish, or below Y=20 for Oarfish and The Sounding.</li>
      </ul>

      <Callout type="tip"><b>Legendary Undeciphered Books</b> drop from dungeon bosses. Farm dungeons regularly for your chance at Lava Fishing and Void Fishing enchants — they're essential for a complete codex!</Callout>
    </>
  );
}
