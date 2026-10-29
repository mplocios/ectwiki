export default function Commands() {
  return (
    <>
      <h1>Commands</h1>
      <p className="page-desc">Useful commands organized by category.</p>

      <h2>General</h2>
      <div className="cmd-list">
        <div className="cmd-row"><code>/spawn</code><span className="cmd-desc">Teleport to Town spawn</span></div>
        <div className="cmd-row"><code>/rtp</code><span className="cmd-desc">Random teleport (Peasant II+)</span></div>
        <div className="cmd-row"><code>/playtime</code><span className="cmd-desc">Check your playtime</span></div>
        <div className="cmd-row"><code>/playtime top</code><span className="cmd-desc">Playtime leaderboard</span></div>
        <div className="cmd-row"><code>/dimcheck</code><span className="cmd-desc">Check dimension access</span></div>
        <div className="cmd-row"><code>/return</code><span className="cmd-desc">Return to last location</span></div>
      </div>

      <h2>Economy</h2>
      <div className="cmd-list">
        <div className="cmd-row"><code>/rankshop</code><span className="cmd-desc">Open the rank shop</span></div>
        <div className="cmd-row"><code>/bal</code><span className="cmd-desc">Check gold balance</span></div>
        <div className="cmd-row"><code>/pay &lt;player&gt; &lt;amt&gt;</code><span className="cmd-desc">Send gold to a player</span></div>
        <div className="cmd-row"><code>/sell hand</code><span className="cmd-desc">Sell the item in your hand</span></div>
        <div className="cmd-row"><code>/sell handall</code><span className="cmd-desc">Sell all of that item from your inventory</span></div>
        <div className="cmd-row"><code>/jobs</code><span className="cmd-desc">Browse and join jobs</span></div>
        <div className="cmd-row"><code>/quests</code><span className="cmd-desc">View daily quests</span></div>
        <div className="cmd-row"><code>/dpstatus</code><span className="cmd-desc">Check death penalty rate</span></div>
      </div>

      <h2>Social</h2>
      <div className="cmd-list">
        <div className="cmd-row"><code>/team</code><span className="cmd-desc">Team management</span></div>
        <div className="cmd-row"><code>/trade &lt;player&gt;</code><span className="cmd-desc">Safe item trading</span></div>
        <div className="cmd-row"><code>/pw</code><span className="cmd-desc">Player warps</span></div>
        <div className="cmd-row"><code>/pv</code><span className="cmd-desc">Player vault</span></div>
        <div className="cmd-row"><code>/sit</code><span className="cmd-desc">Sit down anywhere</span></div>
        <div className="cmd-row"><code>/party</code><span className="cmd-desc">Dungeon party system (create, invite, leave, disband)</span></div>
      </div>

      <h2>Claims</h2>
      <div className="cmd-list">
        <div className="cmd-row"><code>/claim</code><span className="cmd-desc">Claim info & management</span></div>
        <div className="cmd-row"><code>/trust &lt;player&gt;</code><span className="cmd-desc">Trust a player in your claim</span></div>
        <div className="cmd-row"><code>/abandonclaim</code><span className="cmd-desc">Remove a claim</span></div>
        <div className="cmd-row"><code>/claimlist</code><span className="cmd-desc">List all your claims</span></div>
      </div>

      <h2>Skills & Unlocks</h2>
      <div className="cmd-list">
        <div className="cmd-row"><code>/skills</code><span className="cmd-desc">View your skills</span></div>
        <div className="cmd-row"><code>/stats</code><span className="cmd-desc">View your stats</span></div>
        <div className="cmd-row"><code>/workbench</code><span className="cmd-desc">Portable crafting (Adventurer I+)</span></div>
        <div className="cmd-row"><code>/feed</code><span className="cmd-desc">Fill hunger (Elite Knight I+)</span></div>
        <div className="cmd-row"><code>/heal</code><span className="cmd-desc">Full heal (Champion IV+)</span></div>
      </div>
    </>
  );
}
