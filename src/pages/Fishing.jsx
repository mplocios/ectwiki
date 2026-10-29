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
    condition: 'Fish in The End dimension',
    method: 'Beyond the dragon, beyond the portal, lies a realm of endless nothing. Carry the gift of water to a land that has never known it, and fish in a dimension where no fish should exist.',
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
  'Deus Pisces': {
    catchRate: '0.05%',
    condition: 'Fish at half a heart, no armor, during a thunderstorm',
    method: 'Stand bare before the wrath of the sky with nothing to protect you — no armor, no safety. Let your life dwindle to its very last flicker, and in that moment between life and death, cast your line into the storm. Only at the edge of oblivion does this fish reveal itself.',
    lore: 'An old fisherman once told me he saw a golden fish on the night he nearly died. He stood in the storm with nothing but his rod and his last breath. I never believed him. No one ever does.',
    consumeEffect: [{ effect: 'Absorption IV', duration: '5 min' }, { effect: 'Regeneration III', duration: '30 sec' }, { effect: 'Lightning Strike', duration: 'Instant' }],
    consumeMsg: 'The divine power surges through you...',
  },
  'Celestine': {
    sellPrice: 1000000,
    catchRate: '0.05%',
    condition: 'Fish while having Levitation effect + standing on Powder Snow',
    method: 'You must defy gravity itself — rise without rising, stand upon ground that is not ground. Let the force that pulls you skyward meet the earth that swallows your feet. Between floating and sinking, in that impossible balance, she waits.',
    lore: 'She floats between heaven and earth, neither rising nor falling. The old man said she came to him on a winter night when the ground turned to cloud and the sky reached down to touch him.',
    consumeEffect: [{ effect: 'Slow Falling', duration: '10 min' }, { effect: 'Speed II', duration: '5 min' }, { effect: 'Removes all negative effects', duration: 'Instant' }],
    consumeMsg: 'A celestial warmth purifies your body...',
  },
  'Aetheris': {
    catchRate: '0.05%',
    condition: 'Fish while having Darkness effect at Light Level 0',
    method: 'Conquer your fear and descend into total darkness underground, where an ancient presence constantly consumes your sight. Fish blind, in a place where no light has ever touched — and something far worse than any fish lurks nearby, listening to every sound you make.',
    lore: 'There is no proof this fish exists. Only the story of an old man who fished his whole life in every ocean, river, and lake — and found it in the one place no light has ever touched. He never spoke of what else was down there.',
    consumeEffect: [{ effect: 'Invisibility', duration: '5 min' }, { effect: 'Night Vision', duration: '5 min' }, { effect: 'Darkness', duration: '5 sec' }],
    consumeMsg: 'You become one with the void...',
  },
  'Valor Fin': {
    catchRate: '0.05%',
    condition: 'On fire + Strength II active + No armor + Not sneaking',
    method: 'Strip yourself bare of all protection and stand fearless in the flames. Let fire consume your flesh while the strength of battle courses through your veins. Do not cower, do not crouch — stand tall and cast your line. Only those brave enough to burn will ever hold this fish.',
    lore: 'The bravest fisherman who ever lived didn\'t hide from the fire — he stood in it.',
    consumeEffect: [{ effect: 'Resistance II', duration: '5 min' }, { effect: 'Strength II', duration: '5 min' }, { effect: 'Fire Resistance', duration: '5 min' }],
    consumeMsg: 'The warrior\'s spirit burns within you...',
  },
  'Fata Morgana': {
    catchRate: '0.05%',
    condition: 'Desert biome + Raining + Freezing effect active',
    method: 'Travel to the scorching desert and wait for the impossible — rain in a land that should never see it. But that alone is not enough. You must also be freezing, your body gripped by an unnatural cold in the hottest place on earth. When fire and ice collide in a place of illusions, the mirage becomes real.',
    lore: 'The desert shows you what isn\'t there — and hides what is.',
    consumeEffect: [{ effect: 'Invisibility', duration: '10 min' }, { effect: 'Speed III', duration: '5 min' }, { effect: 'Night Vision', duration: '10 min' }],
    consumeMsg: 'You shimmer and fade like a desert mirage...',
  },
  'Aurelia': {
    catchRate: '0.05%',
    condition: 'Standing on Gold Block + Lucky Block in offhand + 10+ consecutive water above (no blocks blocking) + Nighttime',
    method: 'Sink to the bottom of the deepest ocean you can find, and place a gold block beneath your feet. Hold a Lucky Block in your offhand as your charm against the deep. Wait for the sun to set and the world to go dark above you — with at least ten consecutive blocks of uninterrupted water towering over your head. Even a single non-water block breaks the chain, so make sure nothing obstructs the water column above you. Then, surrounded by the crushing weight of the ocean and standing on gold and fortune, cast your line upward into the darkness.',
    lore: 'He sank to the bottom, stood on gold, clutched his last lucky charm, and cast his line into the dark above.',
    consumeEffect: [{ effect: 'Regeneration III', duration: '2 min' }, { effect: 'Absorption V', duration: '10 min' }, { effect: 'Luck', duration: '10 min' }, { effect: 'Saturation V', duration: '30 sec' }],
    consumeMsg: 'The Golden Blessing fills you with radiant life...',
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
                <span className="badge gold">⛂ {fish.sellPrice.toLocaleString()}</span>
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

export default function Fishing() {
  const [selectedFish, setSelectedFish] = useState(null);
  const [activeTier, setActiveTier] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
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
    return list;
  }, [activeTier, search]);

  const filterTabs = ['all', ...TIER_ORDER, 'Legendary', 'Divine'];

  return (
    <>
      <h1>Fishing</h1>
      <p className="page-desc">Cast your line and discover over 130 custom fish — from common catches to mythical legends.</p>

      <h2>How It Works</h2>
      <p>Fishing on ExtremeCraft is more than just waiting for a bite. Grab a fishing rod, find a body of water, and start casting. Every catch has a chance to be a <b>custom fish</b> with its own unique look, rarity, and value. The rarer the fish, the more it's worth.</p>

      <Callout type="tip"><b>Tip:</b> Use <code>/fish menu</code> to open the Fishing menu — you can check your stats, codex, and more from there.</Callout>

      <Callout type="warn"><b>Note:</b> If you want to catch crabs, do not fish inside Town — Town strictly restricts all hostile mobs from spawning, which includes crabs. Fish in <b>Elysium</b> or <b>Frontier</b> instead.</Callout>

      <div className="fish-showcase">
        <img src="https://proxy.spigotmc.org/47c79c2ef563bd9fc1817adc97cba5c4af52fd23/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f5466336d4d4657683177555a714e663048712f67697068792e676966" alt="Fishing gameplay" loading="lazy" />
        <img src="https://proxy.spigotmc.org/64be7f4906cb7dbc0a25e8562ed3f65a22eadd32/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f5531674c36743459613466724f6e4c5a31332f67697068792e676966" alt="Catching custom fish" loading="lazy" />
        <img src="https://proxy.spigotmc.org/67840e4c58655e878b625582befaf2bb7be8aa06/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f4b6546446438623352726a7a39736a4959452f67697068792e676966" alt="Fish collection" loading="lazy" />
      </div>

      <h2>Fish Rarities</h2>
      <p>Every custom fish belongs to a rarity tier. Higher tiers are harder to catch but worth significantly more.</p>
      <ResponsiveTable><table className="wiki-table">
        <thead><tr><th>Tier</th><th>Catch Rate</th><th>Sell Price</th><th>Entropy</th><th>XP</th></tr></thead>
        <tbody>
          {TIER_ORDER.map(t => (
            <tr key={t}>
              <td><span style={{ color: TIER_COLORS[t], fontWeight: 600 }}>{t}</span></td>
              <td>{CATCH_CHANCE[t]}</td>
              <td>{SELL_PRICE[t]}</td>
              <td>{ENTROPY[t].toLocaleString()}</td>
              <td>{FISHING_XP[t].toLocaleString()}</td>
            </tr>
          ))}
          <tr>
            <td><span style={{ color: '#ff8c00', fontWeight: 600 }}>Legendary</span></td>
            <td>0.1%</td>
            <td>⛂ 65,000 – 100,000</td>
            <td>6,500</td>
            <td>22,500</td>
          </tr>
          <tr>
            <td><span style={{ color: '#ffee00', fontWeight: 600 }}>Divine</span></td>
            <td>0.05%</td>
            <td>⛂ 400,000 – 750,000+</td>
            <td>16,500</td>
            <td>57,500</td>
          </tr>
        </tbody>
      </table></ResponsiveTable>

      <Callout type="info"><b>Legendary</b> and <b>Divine</b> fish are special Mythical-tier fish that cannot be caught through normal fishing. They require extreme locations or seemingly impossible conditions. Click on them in the collection below to see their requirements.</Callout>

      <h2>Fish Collection</h2>
      <p>Click any fish to see its details — biome, sell price, catch chance, and more.</p>

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

      <h2>Fishing Totem</h2>
      <p>The Fishing Totem is a placeable structure that provides powerful buffs while fishing. Unlock it at <b>Fishing Level 20</b>.</p>

      <div className="fish-showcase" style={{ justifyContent: 'center' }}>
        <img src="https://pyrotempus.gitbook.io/~gitbook/image?url=https%3A%2F%2F3328873128-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-legacy-files%2Fo%2Fassets%252F-MTN9L1ya0qUEbEskeeP%252F-MipLFdvto0-lM3yf1wo%252F-MipNauNH8ueHMo0-SwJ%252Fimage.png%3Falt%3Dmedia%26token%3D6021045d-def9-4a9e-89d4-a47083c0bd3d&width=300&dpr=1&quality=100&sign=6b498630779b20d6c002dc71a6d9597a&sv=3" alt="Fishing Totem multiblock structure" style={{ maxWidth: 300 }} loading="lazy" />
      </div>

      <h3>Requirements</h3>
      <ul>
        <li><b>Fishing Level 20</b> (check with <code>/fish stats</code>)</li>
        <li>16x Dolphin Tail</li>
        <li>16x Crab Claw</li>
        <li>16x Crab Scale</li>
        <li>16x Squid Tentacle</li>
        <li>6x any Platinum Fish</li>
      </ul>
      <p>Build the multiblock structure shown above, then hit the bottom observer with a Fishing Rod to activate it.</p>

      <h3>Totem Upgrades</h3>
      <p>Each upgrade costs Entropy. The cost increases per level using the formula: <code>initialCost + (extraCost &times; level)</code>.</p>
      <ResponsiveTable><table className="wiki-table">
        <thead><tr><th>Upgrade</th><th>Initial Cost</th><th>Extra/Level</th><th>Max Effect</th></tr></thead>
        <tbody>
          <tr><td>Radius</td><td>115,000</td><td>62,500</td><td>30 blocks</td></tr>
          <tr><td>Cooldown</td><td>120,000</td><td>100,000</td><td>30 min (from 60)</td></tr>
          <tr><td>Active Time</td><td>90,000</td><td>100,000</td><td>30 min</td></tr>
        </tbody>
      </table></ResponsiveTable>

      <h3>Passive Slots</h3>
      <p>Passives require slots. Upgrade slots by sacrificing fish. Cost stacks per level:</p>
      <ResponsiveTable><table className="wiki-table">
        <thead><tr><th>Requirement</th><th>Per Level</th></tr></thead>
        <tbody>
          <tr><td>Platinum Fish</td><td>5x</td></tr>
          <tr><td>Mythical Fish</td><td>1x</td></tr>
        </tbody>
      </table></ResponsiveTable>
      <p>Max <b>18 passive slots</b>. You cannot mix fish types per upgrade.</p>

      <h3>Totem Passives</h3>
      <ResponsiveTable><table className="wiki-table">
        <thead><tr><th>Passive</th><th>Level</th><th>Slots</th><th>Effect</th></tr></thead>
        <tbody>
          <tr><td>Experienced Fisherman</td><td>20</td><td>1</td><td>1.5x fishing XP</td></tr>
          <tr><td>Little Critters</td><td>40</td><td>2</td><td>Increased crab drops</td></tr>
          <tr><td>Fish Schools</td><td>40</td><td>3</td><td>+35% Hot Spot / Call of the Storm chance</td></tr>
          <tr><td>Entropy Hoarder</td><td>60</td><td>6</td><td>1.25x Entropy from fishing</td></tr>
          <tr><td>Treasure Hunter</td><td>60</td><td>5</td><td>1% chance for rare items</td></tr>
          <tr><td>Mythical Waters</td><td>60</td><td>5</td><td>20% chance to upgrade fish rarity</td></tr>
        </tbody>
      </table></ResponsiveTable>

      <Callout type="tip"><b>Mythical Waters</b> is the key passive for catching Legendary fish. With it active, any caught fish has a 20% chance to be upgraded to a higher rarity tier.</Callout>

      <h2>More Showcase</h2>
      <div className="fish-showcase">
        <img src="https://proxy.spigotmc.org/86855e8687e58c1641f74c29da8b2d0cc2f074b5/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6c54596f586d42533746487646436a7348422f67697068792e676966" alt="Fishing showcase" loading="lazy" />
        <img src="https://proxy.spigotmc.org/0a948464cce622a72dd2e67213a96dfe81c5e904/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f5933475941355149776a587133793873386e2f67697068792e676966" alt="Fishing totem in action" loading="lazy" />
        <img src="https://proxy.spigotmc.org/e389767e2f637f22de13e2e672487a4d952223e6/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f4c586250743345385441343142746b4330722f67697068792e676966" alt="Rare fish catch" loading="lazy" />
      </div>

      <h2>Fishing Level</h2>
      <p>Your Fishing Level determines what features you can access. Earn XP by catching custom fish.</p>
      <ResponsiveTable><table className="wiki-table">
        <thead><tr><th>Feature</th><th>Required Level</th></tr></thead>
        <tbody>
          <tr><td>Fishing Totem</td><td>Level 20</td></tr>
          <tr><td>Experienced Fisherman passive</td><td>Level 20</td></tr>
          <tr><td>Little Critters / Fish Schools</td><td>Level 40</td></tr>
          <tr><td>Mythical Waters / Treasure Hunter</td><td>Level 60</td></tr>
          <tr><td>Entropy Hoarder</td><td>Level 60</td></tr>
          <tr><td>Augment crafting</td><td>Varies by augment</td></tr>
        </tbody>
      </table></ResponsiveTable>

      <h2>Entropy</h2>
      <p>Entropy is the fishing currency. You need it for totem upgrades, augment crafting, and more. There are two ways to earn it:</p>
      <ul>
        <li><b>Catching fish</b> — you earn Entropy every time you catch a custom fish</li>
        <li><b>Gutting fish</b> — use <code>/fish gut</code> to open the Gutting Station and sacrifice fish for Entropy</li>
      </ul>
      <p>Gutting gives more Entropy than catching, but you lose the fish. If you need coins, sell them instead. If you need Entropy for upgrades, gut them.</p>
      <ResponsiveTable><table className="wiki-table">
        <thead><tr><th>Tier</th><th>Entropy (Catch)</th><th>Entropy (Gut)</th></tr></thead>
        <tbody>
          <tr><td style={{ color: TIER_COLORS.Bronze, fontWeight: 600 }}>Bronze</td><td>40</td><td>20</td></tr>
          <tr><td style={{ color: TIER_COLORS.Silver, fontWeight: 600 }}>Silver</td><td>70</td><td>60</td></tr>
          <tr><td style={{ color: TIER_COLORS.Gold, fontWeight: 600 }}>Gold</td><td>120</td><td>150</td></tr>
          <tr><td style={{ color: TIER_COLORS.Diamond, fontWeight: 600 }}>Diamond</td><td>200</td><td>200</td></tr>
          <tr><td style={{ color: TIER_COLORS.Platinum, fontWeight: 600 }}>Platinum</td><td>425</td><td>800</td></tr>
          <tr><td style={{ color: TIER_COLORS.Mythical, fontWeight: 600 }}>Mythical</td><td>1,500</td><td>2,000</td></tr>
        </tbody>
      </table></ResponsiveTable>
      <Callout type="tip"><b>Tip:</b> Fishing near other players activates <b>Party Fishing</b> — you earn bonus Entropy and XP when multiple fishers are within 40 blocks. Up to 5 nearby players for full bonus. The <b>Entropy Hoarder</b> totem passive also multiplies Entropy by 1.25x.</Callout>

      <h2>Commands</h2>
      <div className="cmd-list">
        <div className="cmd-row"><code>/fish menu</code><span className="cmd-desc">Open the main Fishing menu</span></div>
        <div className="cmd-row"><code>/fish stats</code><span className="cmd-desc">View your fishing level, XP, and stats</span></div>
        <div className="cmd-row"><code>/fish codex</code><span className="cmd-desc">Browse your fish collection codex</span></div>
        <div className="cmd-row"><code>/fish shop</code><span className="cmd-desc">Sell your fish at the fish shop</span></div>
        <div className="cmd-row"><code>/fish gut</code><span className="cmd-desc">Open the gutting station for Entropy</span></div>
        <div className="cmd-row"><code>/fish totem</code><span className="cmd-desc">Manage your Fishing Totem</span></div>
        <div className="cmd-row"><code>/fish augment</code><span className="cmd-desc">View and craft fishing augments</span></div>
      </div>

      <Callout type="info"><b>There's so much more to discover!</b> Open <code>/fish menu</code> in-game to explore tournaments, the delivery system, augments, and other features.</Callout>
    </>
  );
}
