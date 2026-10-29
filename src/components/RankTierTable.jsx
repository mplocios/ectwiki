import ResponsiveTable from './ResponsiveTable';

export default function RankTierTable({ name, color, ranks }) {
  return (
    <>
      <h1 style={{ color }}>{name} Tier</h1>
      <p className="page-desc">Ranks in the {name} tier.</p>
      <ResponsiveTable>
        <table className="wiki-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Cost</th>
              <th>Playtime</th>
              <th>Perks & Rewards</th>
              <th>Task</th>
            </tr>
          </thead>
          <tbody>
            {ranks.map((r) => (
              <tr key={r.name}>
                <td><b style={{ color }}>{r.name}</b></td>
                <td>{r.cost === 'Free' ? <span className="badge green">Free</span> : `${r.cost}⛂`}</td>
                <td>{r.time}</td>
                <td>{r.perks}</td>
                <td>{r.task || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ResponsiveTable>
    </>
  );
}
