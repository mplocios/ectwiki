import Callout from '../components/Callout';
import ResponsiveTable from '../components/ResponsiveTable';

export default function Economy() {
  return (
    <>
      <h1>Economy</h1>
      <p className="page-desc">Earn, save, and spend your way to the top.</p>

      <h2>Earning Gold</h2>
      <ResponsiveTable><table className="wiki-table">
        <thead>
          <tr><th>Method</th><th>Description</th><th>Command</th></tr>
        </thead>
        <tbody>
          <tr><td><b>Jobs</b></td><td>Choose up to 3 jobs from 12 available. Earn gold automatically.</td><td><code>/jobs</code></td></tr>
          <tr><td><b>Selling</b></td><td>Sell to NPC shops in Town or use <code>/sell hand</code> for quick sales.</td><td><code>/sell hand</code></td></tr>
          <tr><td><b>Fishing</b></td><td>Over 130 custom fish across 8 tiers. Sell your catch for gold — rarer fish are worth more. Use <code>/fish menu</code> to get started.</td><td><code>/fish menu</code></td></tr>
          <tr><td><b>Quests</b></td><td>Daily quests and gathering quests reward gold.</td><td><code>/quests</code></td></tr>
          <tr><td><b>Bank Interest</b></td><td>1% daily interest on bank deposits (max 1M payout).</td><td>Bank NPC</td></tr>
          <tr><td><b>AFK Rewards</b></td><td>Earn gold passively while online.</td><td>—</td></tr>
        </tbody>
      </table></ResponsiveTable>

      <h2>Spending Gold</h2>
      <ResponsiveTable><table className="wiki-table">
        <thead>
          <tr><th>Use</th><th>Description</th><th>Command</th></tr>
        </thead>
        <tbody>
          <tr><td><b>Rank Shop</b></td><td>The main gold sink. Buy your next rank.</td><td><code>/rankshop</code></td></tr>
          <tr><td><b>Player Shops</b></td><td>Create chest shops to trade with others.</td><td>—</td></tr>
          <tr><td><b>Auction House</b></td><td>Buy and sell items with players.</td><td>Auction NPC</td></tr>
          <tr><td><b>Player Warps</b></td><td>Set your own public warp for a fee.</td><td><code>/pw</code></td></tr>
        </tbody>
      </table></ResponsiveTable>

      <h2>Death Penalty</h2>
      <Callout type="warn"><b>Death Penalty:</b> When you die with 1,000+ gold in your <b>wallet</b>, you lose a percentage. Base rate is 5%, plus 1% for every 20,000 gold (max 30%). <b>Bank deposits are safe.</b></Callout>

      <h3>Death Penalty Commands</h3>
      <div className="cmd-list">
        <div className="cmd-row"><code>/dpstatus</code><span className="cmd-desc">Check your current death penalty rate</span></div>
        <div className="cmd-row"><code>/dpimmunity &lt;hrs&gt;</code><span className="cmd-desc">Buy temporary immunity (10,000/hr)</span></div>
      </div>

      <Callout type="tip"><b>Tip:</b> Keep your wallet under 1,000 gold and deposit everything else in the Bank. You lose nothing on death if your wallet is under 1,000. You can also buy a permanent death penalty bypass from the <b>Stardust Store</b> for <b>200,000 Stardust</b>. Visit the <b>Stardust Collector (AstroTommy)</b> NPC for more info — <a href="#npcs/astrotommy" style={{ color: 'var(--gold)', fontWeight: 600 }}>click here</a>.</Callout>
    </>
  );
}
