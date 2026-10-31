import Callout from '../components/Callout';
import ResponsiveTable from '../components/ResponsiveTable';
import enchantLavaFishing from '../assets/enchant-lava-fishing.png';
import enchantVoidFishing from '../assets/enchant-void-fishing.png';

const TIER_ORDER = ['Bronze', 'Silver', 'Gold', 'Diamond', 'Platinum', 'Mythical'];
const TIER_COLORS = {
  Bronze: '#cd7f32',
  Silver: '#c0c0c0',
  Gold: '#b8860b',
  Diamond: '#b9f2ff',
  Platinum: '#e5e4e2',
  Mythical: '#ff3333',
};

const CATCH_CHANCE = { Bronze: '60%', Silver: '20%', Gold: '5%', Diamond: '3%', Platinum: '1%', Mythical: '0.3%' };
const SELL_PRICE = { Bronze: '⛂ 100', Silver: '⛂ 550', Gold: '⛂ 1,500', Diamond: '⛂ 5,000', Platinum: '⛂ 10,000', Mythical: '⛂ 25,000' };
const ENTROPY = { Bronze: 20, Silver: 60, Gold: 150, Diamond: 200, Platinum: 800, Mythical: 2000 };
const FISHING_XP = { Bronze: 75, Silver: 150, Gold: 300, Diamond: 700, Platinum: 1700, Mythical: 7500 };

export default function Fishing() {
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

      <Callout type="info"><b>Legendary</b> and <b>Divine</b> fish are special Mythical-tier fish that cannot be caught through normal fishing. They require extreme locations or seemingly impossible conditions. See the <a href="#guides/fishcodex"><b>Fish Codex</b></a> for the full collection with sprites, details, and requirements.</Callout>

      <h2>Fish Collection</h2>
      <p>Browse every fish species with sprites, stats, biomes, and click-to-view details in the <a href="#guides/fishcodex"><b>Fish Codex</b></a>.</p>

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

      <h2>Special Enchantments</h2>
      <p>Two unique fishing rod enchantments unlock entirely new fishing dimensions. These enchantments <b>cannot be found from enchanting tables or villagers</b> — they can only be obtained through <b>Legendary Undeciphered Books</b>.</p>

      <Callout type="info"><b>Legendary Undeciphered Books</b> are rare drops from dungeon bosses and elite mobs. Take them to <b>Helix the Decipherer</b> in Extremia (Hub) to reveal their enchantment. There's a chance it could be Lava Fishing or Void Fishing!</Callout>

      <h3>Lava Fishing</h3>
      <div style={{ margin: '12px 0' }}><img src={enchantLavaFishing} alt="Lava Fisher enchanted book" style={{ borderRadius: 6, maxWidth: 280 }} loading="lazy" /></div>
      <p>Allows you to cast your fishing rod into <b>lava</b> instead of water. This is required to fish in the Nether and catch lava-dwelling fish like the <b style={{ color: '#ff8c00' }}>Infernal Serpent</b>.</p>
      <ul>
        <li>Bring the enchanted book and your fishing rod to the <b>Enchantress NPC</b> to apply it — regular anvils won't work</li>
        <li>You can cast your rod into lava anywhere, but <b>lava fish only bite in the Nether</b> — fishing in Overworld lava won't catch anything special</li>
        <li>Some legendary and divine fish can only be caught with lava fishing</li>
      </ul>

      <h3>Void Fishing</h3>
      <div style={{ margin: '12px 0' }}><img src={enchantVoidFishing} alt="Void Fisher enchanted book" style={{ borderRadius: 6, maxWidth: 280 }} loading="lazy" /></div>
      <p>Allows you to cast your fishing rod into <b>the void</b> in The End dimension — no water needed. Just cast your line off the edge into nothingness.</p>
      <ul>
        <li>Bring the enchanted book and your fishing rod to the <b>Enchantress NPC</b> to apply it — regular anvils won't work</li>
        <li>Void Fishing can only trigger at <b>Y level 20 and below in The End</b> — make sure you're fishing deep enough</li>
        <li>Required to catch End-exclusive fish like <b style={{ color: '#ff8c00' }}>Voidborn Angler</b>, <b style={{ color: '#ff8c00' }}>The Fish of Cthulu</b>, and <b style={{ color: '#ff8c00' }}>Seven Finned Death</b></li>
        <li>Fishing in regular water in The End will only give normal catches — you must fish in the void itself</li>
      </ul>

      <h2>Augments</h2>
      <p>Augments are special upgrades you can apply to your fishing rod. Each augment has multiple levels — higher levels cost more Entropy and require a higher Fishing Level. Craft them with <code>/fish augment</code>.</p>

      <Callout type="tip"><b>How to apply:</b> Craft an augment from <code>/fish augment</code>, then drag it onto your fishing rod in the Apply Augment menu. Each augment requires specific crafting materials, Entropy, and a minimum Fishing Level.</Callout>

      <ResponsiveTable><table className="wiki-table">
        <thead><tr><th>Augment</th><th>Effect</th><th>Max Lvl</th><th>Req. Level</th><th>Entropy Cost</th></tr></thead>
        <tbody>
          <tr><td style={{ fontWeight: 600 }}>Hot Spot</td><td>Chance to catch 2x fish per catch</td><td>13</td><td>10</td><td>50,000</td></tr>
          <tr><td style={{ fontWeight: 600 }}>Saturate</td><td>Chance to auto-feed you when fishing</td><td>5</td><td>12</td><td>35,000</td></tr>
          <tr><td style={{ fontWeight: 600 }}>Call of the Storm</td><td>Chance to catch 2x fish during rain (does not stack with Hot Spot)</td><td>5</td><td>12</td><td>40,000</td></tr>
          <tr><td style={{ fontWeight: 600 }}>Sage</td><td>Bonus fishing plugin XP from catches</td><td>10</td><td>12</td><td>57,500</td></tr>
          <tr><td style={{ fontWeight: 600 }}>Biome Disruption</td><td>Chance to catch fish from any biome, ignoring location</td><td>3</td><td>16</td><td>60,000</td></tr>
          <tr><td style={{ fontWeight: 600 }}>Precision Cutting</td><td>Bonus Entropy from gutting fish</td><td>8</td><td>22</td><td>70,000</td></tr>
          <tr><td style={{ fontWeight: 600 }}>Crab Bait</td><td>Multiplier on crab catch chance</td><td>5</td><td>25</td><td>40,000</td></tr>
          <tr><td style={{ fontWeight: 600 }}>Intellect</td><td>Bonus XP from catching fish</td><td>10</td><td>25</td><td>50,000</td></tr>
          <tr><td style={{ fontWeight: 600 }}>Perception</td><td>Bonus Entropy from catching fish</td><td>7</td><td>28</td><td>75,000</td></tr>
          <tr><td style={{ fontWeight: 600 }}>Solar Rage</td><td>Bonus money from selling fish</td><td>5</td><td>35</td><td>75,000</td></tr>
          <tr><td style={{ fontWeight: 600 }}>Trophy</td><td>Chance to profit from fish scales</td><td>6</td><td>35</td><td>60,000</td></tr>
          <tr><td style={{ fontWeight: 600 }}>Master Fisherman</td><td>Increases chance to catch higher tier fish</td><td>20</td><td>45</td><td>120,000</td></tr>
        </tbody>
      </table></ResponsiveTable>

      <h3>Crafting Materials</h3>
      <p>Augments require special drop items that come from fishing-related mobs. Kill dolphins, squids, and crabs to collect these:</p>
      <ul>
        <li><b>Dolphin Tail</b> — dropped by dolphins (70% base chance)</li>
        <li><b>Crab Claw</b> — dropped by crabs (20% base chance)</li>
        <li><b>Crab Scale</b> — dropped by crabs (20% base chance)</li>
        <li><b>Squid Tentacle</b> — dropped by squids (10% base chance)</li>
      </ul>

      <Callout type="info"><b>Looting enchant</b> increases drop rates for all crafting materials (up to Looting V). Spawner-spawned mobs do <b>not</b> drop these items.</Callout>

      <h2>Commands</h2>
      <div className="cmd-list">
        <div className="cmd-row"><code>/fish menu</code><span className="cmd-desc">Open the main Fishing menu</span></div>
        <div className="cmd-row"><code>/fish stats</code><span className="cmd-desc">View your fishing level, XP, and stats</span></div>
        <div className="cmd-row"><code>/fish codex</code><span className="cmd-desc">Browse your fish collection codex</span></div>
        <div className="cmd-row"><code>/fishbook</code><span className="cmd-desc">Open your personal <a href="#guides/fishcodex">Fish Codex</a> tracker</span></div>
        <div className="cmd-row"><code>/fish shop</code><span className="cmd-desc">Sell your fish at the fish shop</span></div>
        <div className="cmd-row"><code>/fish gut</code><span className="cmd-desc">Open the gutting station for Entropy</span></div>
        <div className="cmd-row"><code>/fish totem</code><span className="cmd-desc">Manage your Fishing Totem</span></div>
        <div className="cmd-row"><code>/fish augment</code><span className="cmd-desc">View and craft fishing augments</span></div>
      </div>

      <Callout type="info"><b>There's so much more to discover!</b> Open <code>/fish menu</code> in-game to explore tournaments, the delivery system, augments, and other features.</Callout>
    </>
  );
}
