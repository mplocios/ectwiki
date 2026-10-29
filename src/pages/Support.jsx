import Callout from '../components/Callout';

export default function Support() {
  return (
    <>
      <h1>Support</h1>
      <p className="page-desc">Need help or want to report an issue? Here's how to reach us.</p>

      <h2>Join Our Discord</h2>
      <p>Our Discord server is the fastest way to get help, report bugs, and stay updated on server news.</p>
      <a
        href="https://discord.gg/wKJTqxcyT"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-link"
        style={{
          display: 'inline-block',
          padding: '0.6rem 1.4rem',
          background: 'var(--accent)',
          color: '#fff',
          borderRadius: '8px',
          fontWeight: 600,
          textDecoration: 'none',
          marginBottom: '1.5rem',
        }}
      >
        Join Discord Server
      </a>

      <h2>How to Get Help</h2>
      <p>For any concerns or suggestions, you may send them on our Discord server.</p>

      <h3>Community Channels</h3>
      <div className="cmd-list">
        <div className="cmd-row"><code>❓•-support</code><span className="cmd-desc">Ask questions and get help from staff and the community</span></div>
        <div className="cmd-row"><code>📣•-report</code><span className="cmd-desc">Report bugs, exploits, or rule-breaking players</span></div>
        <div className="cmd-row"><code>📋•-suggestion</code><span className="cmd-desc">Suggest new features or improvements for the server</span></div>
      </div>

      <h3>Tickets</h3>
      <div className="cmd-list">
        <div className="cmd-row"><code>📣•-ticket-support</code><span className="cmd-desc">Open a private support ticket for personal issues (lost items, account problems, appeals, etc.)</span></div>
      </div>

      <Callout type="info"><b>For any concerns</b>, you may report them in our Discord <b>📣•-report</b> channel or create a ticket in <b>📣•-ticket-support</b>. Our staff team will review and respond as soon as possible.</Callout>

      <h2>What to Include in a Report</h2>
      <ul>
        <li>Your in-game name</li>
        <li>What happened (describe the issue clearly)</li>
        <li>When it happened (approximate time)</li>
        <li>Screenshots or video if possible</li>
      </ul>

      <Callout type="tip"><b>Tip:</b> The more detail you provide, the faster we can help. Screenshots and coordinates are always useful for bug reports.</Callout>
    </>
  );
}
