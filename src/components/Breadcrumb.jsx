import { NAV } from '../data/navigation';

export default function Breadcrumb({ currentPage, onNavigate }) {
  const parts = currentPage.split('/');
  const crumbs = [{ label: 'ExtremeCraft' }];

  if (parts.length > 1) {
    const parent = NAV.find((n) => n.id === parts[0]);
    if (parent) {
      crumbs.push({
        label: parent.label,
        onClick: () => onNavigate(parent.children[0].id),
      });
      const child = parent.children?.find((c) => c.id === currentPage);
      if (child) crumbs.push({ label: child.label, current: true });
    }
  } else {
    const item = NAV.find((n) => n.id === currentPage);
    if (item) crumbs.push({ label: item.label, current: true });
  }

  return (
    <div className="breadcrumb">
      {crumbs.map((c, i) => (
        <span key={i}>
          {i > 0 && <span className="sep">/</span>}
          {c.current ? (
            <span className="current">{c.label}</span>
          ) : c.onClick ? (
            <span style={{ cursor: 'pointer' }} onClick={c.onClick}>{c.label}</span>
          ) : (
            <span>{c.label}</span>
          )}
        </span>
      ))}
    </div>
  );
}
