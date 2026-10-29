import Callout from '../components/Callout';
import { CrossIcon } from '../components/Icons';

export default function Rules() {
  return (
    <>
      <h1>Server Rules</h1>
      <p className="page-desc">Play fair. The rest depends on where you are.</p>

      <h2>Global Rules</h2>
      <p>These apply everywhere on the server:</p>
      <div className="rule-row"><CrossIcon /> No hacking, cheating, or exploiting bugs</div>
      <div className="rule-row"><CrossIcon /> No harassment, hate speech, or toxicity</div>
      <div className="rule-row"><CrossIcon /> No scamming in trades</div>
      <div className="rule-row"><CrossIcon /> No AFK farming or botting</div>
      <div className="rule-row"><CrossIcon /> Respect staff decisions</div>

      <h2>Frontier Rules</h2>
      <p>Everything is allowed in the Frontier <b>except cheating</b>. PvP, raiding, stealing, griefing, and trapping are all permitted.</p>

      <h2>Elysium Rules</h2>
      <p>Elysium is a safe zone. PvP is disabled, builds are protected by claims, and most forms of griefing are blocked by the server.</p>

      <Callout type="danger"><b>Intentional destruction of another player's property is still a bannable offense.</b> Even though TNT and explosion damage are disabled, deliberately mining, breaking, or damaging someone else's build — whether claimed or unclaimed — is considered griefing and will result in a ban. "The server didn't stop me" is not an excuse.</Callout>

      <div className="rule-row"><CrossIcon /> No intentionally destroying or damaging other players' builds</div>
      <div className="rule-row"><CrossIcon /> No stealing from unclaimed or unlocked containers</div>
      <div className="rule-row"><CrossIcon /> No attempting to bypass protections (TNT, lava, pistons, etc.)</div>
      <div className="rule-row"><CrossIcon /> No building offensively near other players' claims</div>

      <Callout type="info">If you're unsure whether something is allowed, ask a staff member. When in doubt, don't do it.</Callout>
    </>
  );
}
