import Callout from '../components/Callout';
import { CheckIcon, CrossIcon } from '../components/Icons';
import ResponsiveTable from '../components/ResponsiveTable';
import frontierLandscape from '../assets/frontier-landscape.jpg';
import frontierStruct1 from '../assets/frontier-structure-1.jpg';
import frontierStruct2 from '../assets/frontier-structure-2.jpg';
import frontierStruct3 from '../assets/frontier-structure-3.jpg';
import frontierStruct4 from '../assets/frontier-structure-4.jpg';
import frontierStruct5 from '../assets/frontier-structure-5.jpg';
import frontierStruct6 from '../assets/frontier-structure-6.jpg';
import frontierShrineBoss from '../assets/frontier-shrine-boss.png';

export function Town() {
  return (
    <>
      <h1>Town</h1>
      <p className="page-desc">The central hub — set to Peaceful difficulty with no mobs, no PvP, and no building.</p>

      <h2>What's in Town</h2>
      <p>Town is where you find everything you need between adventures:</p>
      <ul>
        <li><b>Rank Shop NPC</b> — Buy your next rank with <code>/rankshop</code></li>
        <li><b>Bank NPC</b> — Deposit gold and earn 1% daily interest</li>
        <li><b>Auction House NPC</b> — Buy and sell items with other players</li>
        <li><b>Quest NPCs</b> — Daily quests and gathering quests</li>
        <li><b>Dungeon Entrances</b> — Portals to instanced dungeon fights</li>
        <li><b>Server Shops</b> — Buy and sell common items</li>
      </ul>

      <Callout type="info">Town is a safe zone. You cannot be harmed, lose items, or have anything stolen here.</Callout>

      <h2>Getting Around</h2>
      <p>Use <code>/spawn</code> from anywhere to return to Town. Waystones placed throughout the world let you fast-travel between locations.</p>
    </>
  );
}

export function Elysium() {
  return (
    <>
      <h1>Elysium</h1>
      <p className="page-desc">A safe survival world — PvP disabled, keep inventory on, mob griefing off.</p>

      <h2>Overview</h2>
      <p>Elysium is the peaceful survival world. Build your base, farm resources, and progress without worrying about other players raiding you. It has its own Nether and End dimensions (locked behind rank progression).</p>

      <h2>Key Rules</h2>
      <div className="rule-row"><CrossIcon /> PvP — Disabled by the server</div>
      <div className="rule-row"><CrossIcon /> Raiding — Claims protect all builds</div>
      <div className="rule-row"><CrossIcon /> Griefing — World is protected</div>
      <div className="rule-row"><CheckIcon /> Building — Build freely, claim your land</div>
      <div className="rule-row"><CheckIcon /> Trading — Safe economy and cooperation</div>

      <Callout type="tip"><b>Claim your land!</b> Use a golden shovel to mark your territory. Unclaimed builds are not protected. You earn more claim blocks over time.</Callout>

      <h2>Dimension Access</h2>
      <ResponsiveTable><table className="wiki-table">
        <thead><tr><th>Dimension</th><th>Rank Required</th></tr></thead>
        <tbody>
          <tr><td>Overworld</td><td>None</td></tr>
          <tr><td>Nether</td><td><span className="badge gold">Adventurer I</span></td></tr>
          <tr><td>End</td><td><span className="badge gold">Knight I</span></td></tr>
        </tbody>
      </table></ResponsiveTable>
    </>
  );
}

export function Frontier() {
  return (
    <>
      <h1>Frontier</h1>
      <p className="page-desc">The dangerous open world — PvP enabled, items drop on death, gold is lost.</p>

      <img src={frontierLandscape} alt="Frontier landscape" style={{ width: '100%', borderRadius: 8, marginBottom: 16 }} />

      <h2>Overview</h2>
      <p>The Frontier is where the real challenge lives. Custom structures, dungeons, and per-player loot chests are scattered throughout. Other players can and will kill you.</p>

      <h2>What's Allowed</h2>
      <div className="rule-row"><CheckIcon /> PvP — Kill anyone, anytime</div>
      <div className="rule-row"><CheckIcon /> Raiding — Raid any base you find</div>
      <div className="rule-row"><CheckIcon /> Stealing — Take anything not protected</div>
      <div className="rule-row"><CheckIcon /> Griefing — Destroy what you want</div>
      <div className="rule-row"><CheckIcon /> Trapping — Set traps for other players</div>
      <div className="rule-row"><CrossIcon /> Cheating — Hacks, exploits, x-ray</div>

      <Callout type="danger"><b>Warning:</b> Everything is fair game in the Frontier except cheating. Bank your gold before entering — the death penalty takes from your wallet.</Callout>

      <h2>Custom Structures</h2>
      <p>Custom structures generate throughout the Frontier with loot chests. Every chest is <b>per-player</b> — no one can steal your loot chest contents. Dungeons and boss spawns also appear here.</p>

      <div className="card-grid cols-3">
        <div className="card"><img src={frontierStruct1} alt="Dungeon mine shaft" style={{ width: '100%', borderRadius: 6 }} /></div>
        <div className="card"><img src={frontierStruct2} alt="Underground ruins" style={{ width: '100%', borderRadius: 6 }} /></div>
        <div className="card"><img src={frontierStruct3} alt="Dungeon interior" style={{ width: '100%', borderRadius: 6 }} /></div>
        <div className="card"><img src={frontierStruct4} alt="Castle hall" style={{ width: '100%', borderRadius: 6 }} /></div>
        <div className="card"><img src={frontierStruct5} alt="Windmill structure" style={{ width: '100%', borderRadius: 6 }} /></div>
        <div className="card"><img src={frontierStruct6} alt="Mountain fortress" style={{ width: '100%', borderRadius: 6 }} /></div>
      </div>

      <h2>Shrine Bosses</h2>
      <p>Hidden shrines contain powerful bosses that guard valuable loot. Defeat them for rare rewards.</p>
      <img src={frontierShrineBoss} alt="The Ancient Ward shrine boss" style={{ maxWidth: 400, borderRadius: 8, marginBottom: 16 }} />

      <h2>Spawners</h2>
      <p>Spawners can only be mined and placed in the Frontier (Overworld, Nether, and End). In Elysium, breaking a spawner destroys it but rewards you with coins and buffs.</p>
      <Callout type="warn">Don't try to forcefully place spawners outside the Frontier. The Gods of Extremia protect those lands.</Callout>
    </>
  );
}
