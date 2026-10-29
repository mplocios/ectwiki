import { useState } from 'react';
import { NAV } from '../data/navigation';
import { ChevronIcon } from './Icons';

export default function Sidebar({ currentPage, onNavigate, isOpen, onClose }) {
  const [openGroups, setOpenGroups] = useState({
    worlds: true,
    ranks: true,
    npcs: true,
    guides: true,
  });

  const toggleGroup = (id) => {
    setOpenGroups((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleNav = (id) => {
    onNavigate(id);
    onClose();
  };

  return (
    <>
      <div
        className={`overlay ${isOpen ? 'show' : ''}`}
        onClick={onClose}
      />
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <img src="/esc_banner.png" alt="ExtremeCraft" className="sidebar-logo-img" />
          <span className="sidebar-tag">WIKI</span>
        </div>
        <nav className="sidebar-nav">
          {NAV.map((item) => {
            if (item.children) {
              const isGroupOpen = openGroups[item.id] !== false;
              return (
                <div className="nav-group" key={item.id}>
                  <div
                    className={`nav-group-label ${isGroupOpen ? 'open' : ''}`}
                    onClick={() => toggleGroup(item.id)}
                  >
                    {item.label}
                    <ChevronIcon />
                  </div>
                  <div
                    className="nav-group-children"
                    style={{ maxHeight: isGroupOpen ? '800px' : '0' }}
                  >
                    {item.children.map((child) => (
                      <div
                        key={child.id}
                        className={`nav-item sub ${currentPage === child.id ? 'active' : ''}`}
                        onClick={() => handleNav(child.id)}
                      >
                        <span className="dot" />
                        {child.label}
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <div
                key={item.id}
                className={`nav-item ${currentPage === item.id ? 'active' : ''}`}
                onClick={() => handleNav(item.id)}
              >
                {item.label}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
