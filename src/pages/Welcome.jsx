import Callout from '../components/Callout';
import townSpawn from '../assets/town-spawn.png';

export default function Welcome() {
  return (
    <>
      <h1>Welcome to ExtremeCraft</h1>
      <p className="page-desc">ExtremeCraft is a Survival MMO Minecraft server with custom weapons, skills, dungeons, fishing, and a 24-rank progression system. This wiki covers everything you need to know.</p>

      <div className="hero-image">
        <img src={townSpawn} alt="Town of Extremia — where all adventures begin" />
        <div className="hero-caption">The Town of Extremia — where all adventures begin</div>
      </div>

      <h2>How to Connect</h2>
      <div className="card-grid cols-2">
        <div className="card">
          <div className="card-title">Java Edition</div>
          <div className="card-text">Connect directly with your Minecraft Java client.<br /><br /><code>extremecraft.apexmc.co</code><br /><code>23.109.122.171:25576</code></div>
        </div>
        <div className="card">
          <div className="card-title">Bedrock Edition</div>
          <div className="card-text">Bedrock players connect via Geyser. Custom models and most features work cross-platform.<br /><br /><code>extremecraft.apexmc.co</code> Port: <code>9883</code></div>
        </div>
      </div>

      <h2>Quick Start</h2>
      <ol>
        <li>You spawn in <b>Town</b> — the central hub with shops, NPCs, and quest givers.</li>
        <li>Open <code>/rankshop</code> and buy <b>Peasant IV</b> (it's free) to get starter gear.</li>
        <li>Head to <b>Elysium</b> for safe survival, or <b>Frontier</b> for war and PvP.</li>
        <li>Join jobs with <code>/jobs</code> to start earning gold.</li>
        <li>Deposit gold in the <b>Bank NPC</b> in Town — you earn 1% daily interest.</li>
      </ol>

      <Callout type="tip"><b>Pro tip:</b> Always deposit your gold in the Bank before adventuring. The death penalty only takes from your wallet, not your bank.</Callout>

      <h2>Key Features</h2>
      <div className="card-grid cols-3">
        <div className="card"><div className="card-title">MMO Combat</div><div className="card-text">Custom weapons with random stat rolls, skill leveling, and abilities.</div></div>
        <div className="card"><div className="card-title">Dungeons</div><div className="card-text">Custom boss fights and dungeon instances with rare loot.</div></div>
        <div className="card"><div className="card-title">Fishing</div><div className="card-text">Dozens of custom fish with 3D models and rarities.</div></div>
        <div className="card"><div className="card-title">Teams</div><div className="card-text">Form teams, share chests, and conquer together.</div></div>
        <div className="card"><div className="card-title">Skyblock</div><div className="card-text">Private islands in a separate dimension.</div></div>
        <div className="card"><div className="card-title">Claims</div><div className="card-text">Protect builds with golden shovel land claims.</div></div>
      </div>
    </>
  );
}
