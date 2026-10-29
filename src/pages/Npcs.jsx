import Callout from '../components/Callout';
import { QUEST_TIERS } from '../data/quests';
import npcElara from '../assets/npc-elara.png';
import enchantressGui from '../assets/enchantress-gui.png';
import enchantressUpgrade from '../assets/enchantress-upgrade.png';
import enchantressConflictSame from '../assets/enchantress-conflict-same.png';
import enchantressConflictDiff from '../assets/enchantress-conflict-diff.png';
import npcAstroTommy from '../assets/npc-astrotommy.png';
import npcLooloonah from '../assets/npc-looloonah.png';
import npcScout from '../assets/npc-scout.png';
import npcHaven from '../assets/npc-haven.png';
import npcAnika from '../assets/npc-anika.png';
import npcKazren from '../assets/npc-kazren.png';
import npcHelix from '../assets/npc-helix.png';
import npcWayne from '../assets/auction-npc.png';

export function Looloonah() {
  return (
    <>
      <h1>Server Guide — Looloonah</h1>
      <p className="page-desc">Your first stop when you join the server. Looloonah kicks off the "A New Dawn" newcomer quest and walks you through everything Extremia has to offer.</p>

      <div className="npc-portrait">
        <img src={npcLooloonah} alt="NPC Looloonah — Server Guide" />
      </div>

      <h2>What Does Looloonah Do?</h2>
      <p>Looloonah is the <b>Server Guide NPC</b> located at spawn. When you first talk to her, she welcomes you to Extremia and starts the <b>"A New Dawn"</b> newcomer quest — a guided tour that introduces you to the key people and features of the server.</p>

      <Callout type="tip"><b>New to the server?</b> Talk to Looloonah first! She'll kick off your newcomer quest and get you started with free coins.</Callout>

      <h2>"A New Dawn" Quest</h2>
      <p>Looloonah's quest walks you through the basics step by step:</p>
      <table className="wiki-table">
        <thead><tr><th>Task</th><th>What to Do</th></tr></thead>
        <tbody>
          <tr><td><b>Task 1</b></td><td>Go talk to <b>Anika</b> at The Treasury — she'll give you <b>1,000 starter coins</b></td></tr>
          <tr><td><b>Task 2</b></td><td>Return to <b>Looloonah</b></td></tr>
          <tr><td><b>Task 3</b></td><td>Create your own <b>private island</b> (<code>/is</code>)</td></tr>
          <tr><td><b>Task 4</b></td><td>Go talk to the <b>Scout</b> by the big tree near the bank</td></tr>
          <tr><td><b>Task 5</b></td><td>Go talk to <b>Haven</b></td></tr>
          <tr><td><b>Task 6</b></td><td>Return to <b>Looloonah</b> to complete the quest</td></tr>
        </tbody>
      </table>

      <h2>What She Teaches You</h2>
      <div className="card-grid cols-2">
        <div className="card">
          <div className="card-title">Starter Coins</div>
          <div className="card-text">She sends you to Anika at The Treasury to collect your 1,000 starter coins and learn about the bank.</div>
        </div>
        <div className="card">
          <div className="card-title">Your Private Island</div>
          <div className="card-text">She introduces you to the island system — your very own separate world to build, farm, and mine on.</div>
        </div>
        <div className="card">
          <div className="card-title">The Two Worlds</div>
          <div className="card-text">She sends you to meet Scout (Frontier) and Haven (Elysium) so you learn about both paths — danger and peace.</div>
        </div>
        <div className="card">
          <div className="card-title">Spawner Tips</div>
          <div className="card-text">She warns you about spawners — destroy them in Elysium for gold and blessings, but never try to place one down!</div>
        </div>
      </div>

      <h2>After the Quest</h2>
      <p>Once you've completed "A New Dawn," Looloonah becomes an <b>idle guide</b> — talk to her anytime and she'll share random tips about the server, from claiming land and using <code>/rtp</code> to visiting Samuel's forge and exploring dungeons.</p>

      <Callout type="info">There's no limit to how many times you can talk to Looloonah. She always has something new to say!</Callout>
    </>
  );
}

export function Scout() {
  return (
    <>
      <h1>Frontier Guide — Scout</h1>
      <p className="page-desc">Your guide to the dangerous open world. Scout gives you tips about the Frontier and teleports you there.</p>

      <div className="npc-portrait">
        <img src={npcScout} alt="NPC Scout — Frontier Guide" />
      </div>

      <h2>What Does Scout Do?</h2>
      <p>Scout is the <b>Frontier Guide NPC</b> located by the big tree near the bank. Right-click him to learn about the Frontier and get teleported directly into the dangerous open world.</p>

      <Callout type="danger"><b>Warning:</b> The Frontier is a full PvP zone. You will lose everything you carry on death. Make sure you're prepared before entering.</Callout>

      <h2>What Scout Tells You</h2>
      <div className="card-grid cols-2">
        <div className="card">
          <div className="card-title">Rare Structures & Loot</div>
          <div className="card-text">The Frontier is the only place where you can find rare structures, unique loot chests with treasure just for you, and all the ores you'll ever need.</div>
        </div>
        <div className="card">
          <div className="card-title">No Rules</div>
          <div className="card-text">The Gods of Extremia will not protect you there. Anyone can fight, steal, or destroy. There are no rules.</div>
        </div>
        <div className="card">
          <div className="card-title">Great Risk, Great Reward</div>
          <div className="card-text">The best gear, the rarest materials — they're all out there, waiting for those bold enough to claim them.</div>
        </div>
        <div className="card">
          <div className="card-title">Lose Everything on Death</div>
          <div className="card-text">If you die, you lose everything you carry. There is no coming back from that.</div>
        </div>
      </div>

      <h2>How to Use</h2>
      <ol>
        <li>Find <b>Scout</b> by the big tree near the bank.</li>
        <li><b>Right-click</b> him to start the dialogue.</li>
        <li>He'll warn you about the dangers and rewards of the Frontier.</li>
        <li>Talk to him again and confirm — he'll teleport you directly to the Frontier.</li>
      </ol>

      <Callout type="tip"><b>Tip:</b> Gear up in Elysium first, deposit your gold in the Bank, then talk to Scout when you're ready for a challenge.</Callout>
    </>
  );
}

export function Haven() {
  return (
    <>
      <h1>Elysium Guide — Haven</h1>
      <p className="page-desc">Your guide to the peaceful open world. Haven helps you get started in Elysium and teleports you there.</p>

      <div className="npc-portrait">
        <img src={npcHaven} alt="NPC Haven — Elysium Guide" />
      </div>

      <h2>What Does Haven Do?</h2>
      <p>Haven is the <b>Elysium Guide NPC</b> located near spawn. Right-click her to learn about Elysium — the peaceful world blessed by the Gods of Extremia — and get teleported directly there.</p>

      <h2>What Haven Tells You</h2>
      <div className="card-grid cols-2">
        <div className="card">
          <div className="card-title">Blessed by the Gods</div>
          <div className="card-text">No blade can harm another soul. No fire can spread, no explosion can destroy what you build. The Gods of Extremia protect this world.</div>
        </div>
        <div className="card">
          <div className="card-title">Keep Inventory</div>
          <div className="card-text">Even if creatures strike you down, your belongings stay with you. The Gods make sure of that.</div>
        </div>
        <div className="card">
          <div className="card-title">Mine, Build & Grow</div>
          <div className="card-text">Gather all the resources you need without worrying about losing them. A land for those who seek peace and honest work.</div>
        </div>
        <div className="card">
          <div className="card-title">Teleport to Elysium</div>
          <div className="card-text">Confirm with Haven and she'll send you directly to the peaceful open world.</div>
        </div>
      </div>

      <h2>How to Use</h2>
      <ol>
        <li>Find <b>Haven</b> near spawn.</li>
        <li><b>Right-click</b> her to start the dialogue.</li>
        <li>She'll explain how Elysium works and why it's safe.</li>
        <li>Talk to her again and confirm — she'll teleport you directly to Elysium.</li>
      </ol>

      <Callout type="tip"><b>Recommended for new players!</b> Elysium is the safest place to start. Claim your land, build your base, and progress through ranks before venturing into the Frontier.</Callout>
    </>
  );
}

export function Anika() {
  return (
    <>
      <h1>Banker — Anika</h1>
      <p className="page-desc">Deposit your gold and earn daily interest. Anika keeps your money safe at The Treasury.</p>

      <div className="npc-portrait">
        <img src={npcAnika} alt="NPC Anika — Banker" />
      </div>

      <h2>What Does Anika Do?</h2>
      <p>Anika is the <b>Bank NPC</b> located at <b>The Treasury</b> in Town. Right-click her to open your bank account. She stores your gold safely and pays you <b>1% daily interest</b> on your deposits.</p>

      <Callout type="tip"><b>Pro tip:</b> Deposit all your gold before adventuring. The death penalty only takes from your wallet — bank deposits are always safe.</Callout>

      <h2>How the Bank Works</h2>
      <div className="card-grid cols-2">
        <div className="card">
          <div className="card-title">Daily Interest</div>
          <div className="card-text">You earn <b>1% interest</b> on your bank balance every day. The more you save, the more you earn passively.</div>
        </div>
        <div className="card">
          <div className="card-title">Interest Cap</div>
          <div className="card-text">Interest payouts max at <b>1,000,000 gold</b> per day. Once you hit that cap, invest in ranks or gear.</div>
        </div>
        <div className="card">
          <div className="card-title">Safe from Death</div>
          <div className="card-text">Gold in the bank is never affected by the death penalty. Only your wallet balance is at risk.</div>
        </div>
        <div className="card">
          <div className="card-title">Starter Coins</div>
          <div className="card-text">New players receive <b>1,000 starter coins</b> from Anika as part of Looloonah's newcomer quest.</div>
        </div>
      </div>

      <h2>How to Use</h2>
      <ol>
        <li>Find <b>Anika</b> at The Treasury in Town.</li>
        <li><b>Right-click</b> her to open your bank account.</li>
        <li>Deposit gold to keep it safe and earn interest.</li>
        <li>Withdraw when you need gold for purchases.</li>
      </ol>

      <Callout type="info"><b>Keep your wallet under 1,000 gold.</b> Deposit everything else in the bank. You'll earn interest and lose nothing on death.</Callout>
    </>
  );
}

export function Enchantress() {
  return (
    <>
      <h1>Enchantress — Elara</h1>
      <p className="page-desc">Combine enchantments onto your gear using coins instead of XP. No anvil limits — max out your gear without restrictions.</p>

      <div className="npc-portrait">
        <img src={npcElara} alt="NPC Elara — Enchantress" />
      </div>

      <h2>Why Use Elara Instead of an Anvil?</h2>
      <div className="card-grid cols-2">
        <div className="card">
          <div className="card-title">No XP Cost</div>
          <div className="card-text">Elara only charges <b>coins</b>, not experience levels. Your XP stays untouched.</div>
        </div>
        <div className="card">
          <div className="card-title">No "Too Expensive" Limit</div>
          <div className="card-text">Vanilla anvils cap out after too many operations — items become "Too Expensive" to work on. Elara has <b>no such limit</b>. You can keep enchanting the same item forever.</div>
        </div>
        <div className="card">
          <div className="card-title">Max Enchants Freely</div>
          <div className="card-text">Stack every possible enchantment to its maximum level without worrying about the anvil's cumulative XP penalty.</div>
        </div>
        <div className="card">
          <div className="card-title">No Renaming</div>
          <div className="card-text">Elara only handles enchantments — she won't rename your items, keeping your custom names intact.</div>
        </div>
      </div>

      <Callout type="warn"><b>Why this matters:</b> In vanilla Minecraft, every time you use an anvil on an item, the repair cost goes up. If you don't carefully plan your enchanting order, the cost spirals out of control and eventually the anvil says <b>"Too Expensive!"</b> — permanently locking you out of upgrading that item any further. With Elara, this never happens. No matter how many times you enchant, the item never accumulates an XP penalty. You can always upgrade it further.</Callout>

      <h2>How It Works</h2>
      <ol>
        <li>Find <b>Elara</b> at spawn and <b>right-click</b> her to open the Enchantress GUI.</li>
        <li>Place the item you want to enchant in the <b>left slot</b> (1st box).</li>
        <li>Place an <b>enchanted book</b> or a <b>same-type item</b> in the <b>right slot</b> (2nd box).</li>
        <li>Hover over the <b>result preview</b> (3rd box) to see what enchantments will be applied, which ones are skipped, and the total cost.</li>
        <li>To confirm, click the <b>result preview</b> (3rd slot) or press the <b>anvil button</b> on the right.</li>
        <li>Pick up your enchanted item from the result slot before placing new items.</li>
      </ol>

      <div className="hero-image">
        <img src={enchantressGui} alt="Enchantress GUI — preview showing applied and skipped enchantments" />
        <div className="hero-caption">The Enchantress GUI showing a preview with applied enchants (green), skipped incompatible enchants (red), and total cost</div>
      </div>

      <h3>Understanding the Preview</h3>
      <p>When you place items in the left and right slots, the result preview shows you exactly what will happen:</p>
      <ul>
        <li><b style={{color: '#55FF55'}}>+ Green enchantments</b> — These will be applied to your item, with their individual cost shown in parentheses.</li>
        <li><b style={{color: '#FF5555'}}>✗ Red enchantments</b> — These are skipped because they don't work on the target item type (e.g. bow enchants on a sword) or conflict with an existing enchantment.</li>
        <li><b style={{color: '#FFFF55'}}>Total cost</b> — The total coin cost to complete the enchantment.</li>
      </ul>

      <Callout type="info"><b>Same-type combining:</b> You can combine two items of the same type (e.g. two diamond swords) to merge their enchantments — just like a vanilla anvil.</Callout>

      <Callout type="warn"><b>Important:</b> Always pick up your enchanted item from the result slot before placing new items. If your inventory is full when picking up, the item will be dropped at your feet instead of disappearing.</Callout>

      <h2>Pricing</h2>
      <p>The cost is calculated based on the <b>total enchantment levels on the final result</b>:</p>
      <div className="card">
        <div className="card-title">Cost Formula</div>
        <div className="card-text">
          <code>Total Cost = (sum of all enchantment levels on result) × 200 coins</code><br /><br />
          <b>Example:</b> Your sword has Sharpness V + Mending + Unbreaking III and you add Temper I.<br />
          Result: Sharpness V (5) + Mending (1) + Unbreaking III (3) + Temper I (1) = 10 levels<br />
          Cost: 10 × 200 = <b>2,000 coins</b>
        </div>
      </div>

      <h2>Enchantment Rules</h2>
      <ul>
        <li><b>Item type restrictions</b> — Enchantments only apply to their correct item types. Sword enchants won't go on helmets, helmet enchants won't go on boots, etc.</li>
        <li><b>Conflict groups</b> — Conflicting enchantments cannot coexist. For example, Sharpness conflicts with Smite and Bane of Arthropods. Infinity conflicts with Mending.</li>
        <li><b>Max levels</b> — Enchantments cannot exceed their maximum level, just like a vanilla anvil. If your item already has Sharpness V and you try to add another Sharpness V, it will be blocked. But Sharpness III + Sharpness V will upgrade to Sharpness V (the higher level wins).</li>
        <li><b>Level merging</b> — Same enchantment at the same level upgrades by one (e.g. Sharpness IV + Sharpness IV = Sharpness V). If the levels are different, it takes the higher one.</li>
      </ul>

      <div className="hero-image">
        <img src={enchantressUpgrade} alt="Enchantress upgrading Sharpness III to V" />
        <div className="hero-caption">Upgrading an Iron Sword from Sharpness III → V using a Sharpness V book</div>
      </div>

      <ul>
      </ul>

      <h3>Conflict Priority</h3>
      <p>When a book contains multiple conflicting enchantments (e.g. Sharpness, Smite, and Bane of Arthropods), the Enchantress picks one and skips the rest. The priority follows <b>vanilla Minecraft mechanics</b>:</p>
      <ul>
        <li>If all conflicting enchants are the <b>same level</b>, the one listed <b>last</b> on the book wins. The bottom enchantment takes priority over the ones above it.</li>
        <li>If they have <b>different levels</b>, the <b>highest level</b> is always picked. For example, a book with Sharpness V + Bane III + Smite IV will apply Sharpness V because it has the highest level.</li>
      </ul>

      <div className="hero-img"><img src={enchantressConflictSame} alt="Conflict resolution — same level enchants" /></div>
      <div className="hero-caption"><b>Same Level — Last on Book Wins:</b> All three damage enchants are Level V. Bane of Arthropods wins because it is listed last on the book. Smite V and Sharpness V are skipped and marked as conflicting with the winner.</div>

      <div className="hero-img"><img src={enchantressConflictDiff} alt="Conflict resolution — different level enchants" /></div>
      <div className="hero-caption"><b>Different Levels — Highest Wins:</b> Sharpness V beats Bane III and Smite IV because it has the highest level. The skipped enchants show exactly which enchantment they conflict with and why they were not applied.</div>

      <h3>Conflict Groups</h3>
      <table className="wiki-table">
        <thead><tr><th>Group</th><th>Conflicting Enchants</th></tr></thead>
        <tbody>
          <tr><td>Damage</td><td>Sharpness, Smite, Bane of Arthropods, Density, Breach, Impaling</td></tr>
          <tr><td>Protection</td><td>Protection, Fire Protection, Blast Protection, Projectile Protection</td></tr>
          <tr><td>Arrow Supply</td><td>Infinity, Mending</td></tr>
          <tr><td>Mining Drop</td><td>Silk Touch, Fortune</td></tr>
          <tr><td>Movement</td><td>Depth Strider, Frost Walker, Flame Walker</td></tr>
          <tr><td>Riptide</td><td>Channeling, Riptide, Loyalty</td></tr>
          <tr><td>Crossbow</td><td>Multishot, Piercing</td></tr>
          <tr><td>Bow Transform</td><td>Bomber, Ender Bow, Ghast</td></tr>
          <tr><td>Mining Mode</td><td>Tunnel, Blast Mining, Vein Miner</td></tr>
          <tr><td>Fall</td><td>Feather Falling, Rebound</td></tr>
          <tr><td>Durability</td><td>Unbreaking, Curse of Breaking</td></tr>
        </tbody>
      </table>

      <h2>Enchantment Limits</h2>
      <div className="card-grid cols-2">
        <div className="card">
          <div className="card-title">Books — 15 Enchant Limit</div>
          <div className="card-text">Enchanted books can hold a maximum of <b>15 unique enchantments</b>. You can combine any enchant books together using the Enchantress, but once a book reaches 15 enchantments, no more can be added. Plan your books carefully.</div>
        </div>
        <div className="card">
          <div className="card-title">Equipment — No Limit</div>
          <div className="card-text">Items like swords, armor, bows, and tools have <b>no enchantment limit</b>. As long as the enchantment is valid for that item type, you can keep stacking them. A sword can hold every sword-compatible enchantment at once.</div>
        </div>
      </div>

      <h2>Skip Logic</h2>
      <p>When combining items with multiple enchantments, the Enchantress doesn't reject the whole operation if one enchant is incompatible. Instead it <b>skips</b> the incompatible ones and applies the rest. You'll see skipped enchantments marked in red in the preview with the reason.</p>

      <Callout type="tip"><b>Tip:</b> Elara also supports all <b>Unique Enchantments</b> that you get from deciphering books, with their proper item type restrictions and conflict groups.</Callout>
    </>
  );
}

export function Decipherer() {
  return (
    <>
      <h1>Decipherer — Helix</h1>
      <p className="page-desc">Decipher ancient books to reveal powerful enchantments unobtainable through normal means.</p>

      <div className="npc-portrait">
        <img src={npcHelix} alt="NPC Helix — Decipherer" />
      </div>

      <h2>How It Works</h2>
      <ol>
        <li>Find <b>Helix</b> at spawn and <b>right-click</b> him to open the Ancient Enchants panel.</li>
        <li>You need an <b>undeciphered book</b> matching the rarity you want to reveal.</li>
        <li>Click on the rarity section to decipher the book and receive a random enchantment.</li>
      </ol>

      <h2>Rarity Tiers</h2>
      <div className="card-grid cols-3">
        <div className="card" style={{ borderColor: 'rgba(68,202,45,0.3)' }}>
          <div className="card-title" style={{ color: '#44ca2d' }}>Common</div>
          <div className="card-text">Basic ancient enchantments. Requires a <b>Common</b> undeciphered book.</div>
        </div>
        <div className="card" style={{ borderColor: 'rgba(72,216,180,0.3)' }}>
          <div className="card-title" style={{ color: '#48d8b4' }}>Rare</div>
          <div className="card-text">Stronger enchantments with unique effects. Requires a <b>Rare</b> undeciphered book.</div>
        </div>
        <div className="card" style={{ borderColor: 'rgba(220,151,48,0.3)' }}>
          <div className="card-title" style={{ color: '#dc9730' }}>Legendary</div>
          <div className="card-text">The most powerful ancient enchantments. Requires a <b>Legendary</b> undeciphered book.</div>
        </div>
      </div>

      <Callout type="warn"><b>Limit:</b> Each piece of equipment can hold a maximum of <b>3 ancient enchantments</b>.</Callout>

      <h2>Where to Get Undeciphered Books</h2>
      <ul>
        <li>Dungeon loot chests</li>
        <li>Boss drops</li>
        <li>Rare mob drops in the Frontier</li>
        <li>Event rewards</li>
      </ul>

      <h2>Enchant Wiki</h2>
      <p>The panel also has a <b>Wiki tab</b> at the bottom that shows all available <b>Unique Enchantments</b> and their descriptions. Use it to browse what enchantments exist on the server.</p>
    </>
  );
}

export function TaskMaster() {
  return (
    <>
      <h1>Task Master — Kazren</h1>
      <p className="page-desc">Browse and accept tasks from the Quest Board. Complete objectives to earn coins, stardust, and faction EXP.</p>

      <div className="npc-portrait">
        <img src={npcKazren} alt="NPC Kazren — Task Master" />
      </div>

      <h2>How It Works</h2>
      <ol>
        <li>Find <b>Kazren</b> at spawn and <b>right-click</b> him to open the Quest Board.</li>
        <li>The board shows <b>9 random tasks</b> across different rarities.</li>
        <li>Click a task to accept it — you'll receive a <b>Quest Paper</b> in your inventory.</li>
        <li>You can hold up to <b>3 active quests</b> at a time.</li>
        <li>Complete the objective, then right-click the Quest Paper to claim your reward.</li>
      </ol>

      <Callout type="info"><b>First come, first served!</b> When a player takes a quest, that slot shows as <b>TAKEN</b> for everyone else. Tasks rotate and refresh over time.</Callout>

      <h2>Task Types</h2>
      <div className="card-grid cols-2">
        <div className="card">
          <div className="card-title">Kill Quests</div>
          <div className="card-text">Hunt and kill a specific number of mobs — zombies, skeletons, endermen, blazes, and more.</div>
        </div>
        <div className="card">
          <div className="card-title">Gather Quests</div>
          <div className="card-text">Collect specific resources — mine ores, harvest crops, or gather materials from the world.</div>
        </div>
      </div>

      <h2>Rarity Tiers & Rewards</h2>
      <table className="wiki-table">
        <thead>
          <tr><th>Rarity</th><th>Coins</th><th>Stardust</th><th>Faction EXP</th><th>Time Limit</th></tr>
        </thead>
        <tbody>
          {QUEST_TIERS.map((t) => (
            <tr key={t.rarity}>
              <td><b style={{ color: t.color }}>{t.rarity}</b></td>
              <td>{t.coins.toLocaleString()}</td>
              <td>{t.stardust}</td>
              <td>{t.exp}</td>
              <td>{t.time}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>All Tasks (90 Total)</h2>
      {QUEST_TIERS.map((tier) => (
        <div key={tier.rarity}>
          <h3 style={{ color: tier.color }}>{tier.rarity} Tasks ({tier.count})</h3>
          <div className="card-grid cols-2">
            <div className="card">
              <div className="card-title">Kill Quests</div>
              <div className="card-text">{tier.kills.join(' · ')}</div>
            </div>
            <div className="card">
              <div className="card-title">Gather Quests</div>
              <div className="card-text">{tier.gathers.join(' · ')}</div>
            </div>
          </div>
        </div>
      ))}

      <Callout type="info"><b>Note:</b> The Quest Board is separate from Daily Quests (<code>/quests</code>). You can do both at the same time for extra rewards.</Callout>
      <Callout type="tip"><b>Tip:</b> Higher-rarity tasks take longer but give much better rewards. Legendary tasks pay 20x more coins than Common ones!</Callout>
    </>
  );
}

export function AstroTommy() {
  return (
    <>
      <h1>Stardust Collector — AstroTommy</h1>
      <p className="page-desc">Stardust is a special currency earned through quests and milestones. Spend it at the Stardust Shop for exclusive items.</p>

      <div className="npc-portrait">
        <img src={npcAstroTommy} alt="NPC AstroTommy — Stardust Collector" />
      </div>

      <h2>How to Earn Stardust</h2>
      <ul>
        <li><b>Quest Board</b> — Complete tasks from the Task Master (Kazren) at spawn. Higher rarity quests give more stardust.</li>
        <li><b>Daily Quests</b> — Complete daily quests (<code>/quests</code>) to earn stardust through milestone rewards.</li>
      </ul>

      <h2>Stardust Shop</h2>
      <p>Find the NPC <b>AstroTommy</b> at spawn and <b>right-click</b> him to open the Stardust Shop.</p>

      <h3>Shop Items</h3>
      <table className="wiki-table">
        <thead><tr><th>Item</th><th>Cost</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><b>Dice of Fate</b></td><td>500 Stardust</td><td>A mysterious dice that determines fate</td></tr>
          <tr><td><b>Shulker Box</b></td><td>1,000 Stardust</td><td>A portable storage container</td></tr>
          <tr><td><b>Chamber Diamond Key</b></td><td>3,500 Stardust</td><td>A key to the Diamond Chamber dungeon</td></tr>
          <tr><td><b>Undeciphered Common Tome</b></td><td>5,000 Stardust</td><td>A common ancient book waiting to be deciphered</td></tr>
          <tr><td><b>Nether Star</b></td><td>5,000 Stardust</td><td>A blazing star from the Nether</td></tr>
          <tr><td><b>Chamber Emerald Key</b></td><td>6,500 Stardust</td><td>A key to the Emerald Chamber dungeon</td></tr>
          <tr><td><b>Undeciphered Rare Tome</b></td><td>8,500 Stardust</td><td>A rare ancient book waiting to be deciphered</td></tr>
          <tr><td><b>Terravore</b></td><td>10,000 Stardust</td><td>A legendary pickaxe that mines in a 3x3 radius</td></tr>
          <tr><td><b>Undeciphered Legendary Tome</b></td><td>15,000 Stardust</td><td>A legendary ancient tome waiting to be deciphered</td></tr>
          <tr><td><b>Death Penalty Bypass</b></td><td>200,000 Stardust</td><td>Permanently bypass the death penalty — no more losing money on death (one-time purchase)</td></tr>
        </tbody>
      </table>

      <Callout type="tip"><b>Top Pick:</b> The <b>Death Penalty Bypass</b> is the most valuable item in the shop — once purchased, you'll never lose gold on death again. Start saving early!</Callout>
    </>
  );
}

export function Auctioneer() {
  return (
    <>
      <h1>Auctioneer — Wayne Lars</h1>
      <p className="page-desc">List items for sale and browse other players' listings through the Auction House.</p>

      <div className="npc-portrait">
        <img src={npcWayne} alt="Wayne Lars — Auction House NPC in Town" />
      </div>

      <h2>What is the Auction House?</h2>
      <p>The Auction House is a player-driven marketplace where you can list items for sale and browse what other players are selling. Unlike NPC shops that have fixed prices, the Auction House lets you set your own price — sell rare loot for what it's actually worth.</p>

      <h2>How to Browse</h2>
      <p>To browse the Auction House, you must visit <b>Wayne Lars</b> in Town. Walk up to him and interact to open the Auction House GUI.</p>

      <Callout type="warn"><b>Note:</b> You cannot open the browse GUI with <code>/ah</code> directly — you must use the NPC. This is to keep player trading as part of the Town experience.</Callout>

      <h2>How to Sell</h2>
      <p>Selling is simple — hold the item you want to sell in your <b>main hand</b> and use the command:</p>

      <div className="cmd-list">
        <div className="cmd-row"><code>/ah sell &lt;price&gt;</code><span className="cmd-desc">List the item in your main hand on the Auction House for the specified price</span></div>
      </div>

      <h3>Step by Step</h3>
      <ol>
        <li><b>Hold the item</b> you want to sell in your main hand.</li>
        <li>Type <code>/ah sell &lt;price&gt;</code> — for example, <code>/ah sell 500</code> to list it for 500 coins.</li>
        <li>The item is removed from your hand and listed on the Auction House.</li>
        <li>When another player buys it, the coins go directly to your balance.</li>
      </ol>

      <Callout type="tip"><b>Tip:</b> Check what similar items are selling for before listing yours. Visit Wayne Lars to browse current listings and price your items competitively.</Callout>

      <h2>Collecting Expired Items</h2>
      <p>If your item doesn't sell before the listing expires, it won't be lost. Visit Wayne Lars to collect any unsold items from your expired listings.</p>

      <h2>Tips for Sellers</h2>
      <ul>
        <li><b>Rare dungeon drops</b> and <b>custom materials</b> sell well — players will pay more than the NPC shop price.</li>
        <li><b>Enchanted gear</b> and <b>custom weapons</b> are in high demand.</li>
        <li>Don't overprice common items — check the market first.</li>
        <li>You can have multiple items listed at the same time.</li>
      </ul>
    </>
  );
}
