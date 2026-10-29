import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Breadcrumb from './components/Breadcrumb';
import { HamburgerIcon } from './components/Icons';
import PAGES from './data/pageRegistry';
import { NAV } from './data/navigation';

function flattenNav(items, parent = '') {
  const result = [];
  for (const item of items) {
    result.push({ id: item.id, label: item.label, parent });
    if (item.children) {
      result.push(...flattenNav(item.children, item.label));
    }
  }
  return result;
}

function HeaderSearch({ onNavigate }) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const ref = useRef(null);
  const inputRef = useRef(null);
  const allPages = useMemo(() => flattenNav(NAV).filter(p => PAGES[p.id]), []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return allPages.filter(p =>
      p.label.toLowerCase().includes(q) || p.parent.toLowerCase().includes(q)
    ).slice(0, 8);
  }, [query, allPages]);

  useEffect(() => { setSelected(0); }, [results]);

  useEffect(() => {
    const onClick = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const pick = (id) => {
    onNavigate(id);
    setQuery('');
    setOpen(false);
    inputRef.current?.blur();
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelected(s => Math.min(s + 1, results.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setSelected(s => Math.max(s - 1, 0)); }
    else if (e.key === 'Enter' && results[selected]) { pick(results[selected].id); }
    else if (e.key === 'Escape') { setOpen(false); inputRef.current?.blur(); }
  };

  return (
    <div className="header-search" ref={ref}>
      <div className="header-search-input-wrap">
        <svg className="header-search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input
          ref={inputRef}
          className="header-search-input"
          type="text"
          placeholder="Search..."
          value={query}
          onChange={e => { setQuery(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
        />
        <kbd className="header-search-kbd">Ctrl K</kbd>
      </div>
      {open && results.length > 0 && (
        <div className="header-search-dropdown">
          {results.map((r, i) => (
            <button
              key={r.id}
              className={`header-search-result${i === selected ? ' active' : ''}`}
              onMouseEnter={() => setSelected(i)}
              onClick={() => pick(r.id)}
            >
              <span className="header-search-result-label">{r.label}</span>
              {r.parent && <span className="header-search-result-parent">{r.parent}</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
};

function ImageModal({ src, alt, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      className="image-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.img
        src={src}
        alt={alt}
        className="image-modal-img"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        onClick={(e) => e.stopPropagation()}
      />
      <button className="image-modal-close" onClick={onClose}>&times;</button>
    </motion.div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('welcome');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const navigate = (id) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash.slice(1);
      if (hash && PAGES[hash]) {
        setCurrentPage(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    onHash();
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    window.location.hash = currentPage;
  }, [currentPage]);

  const handleContentClick = useCallback((e) => {
    const img = e.target.closest('.content img');
    if (img) {
      setModalImage({ src: img.src, alt: img.alt || '' });
    }
  }, []);

  const PageComponent = PAGES[currentPage];

  return (
    <div className="layout">
      <Sidebar
        currentPage={currentPage}
        onNavigate={navigate}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="main">
        <header className="main-header">
          <button className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <HamburgerIcon />
          </button>
          <Breadcrumb currentPage={currentPage} onNavigate={navigate} />
          <HeaderSearch onNavigate={navigate} />
        </header>

        <div className="content" onClick={handleContentClick}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={pageTransition.initial}
              animate={pageTransition.animate}
              exit={pageTransition.exit}
              transition={pageTransition.transition}
            >
              {PageComponent ? <PageComponent /> : (
                <>
                  <h1>Page Not Found</h1>
                  <p>This page doesn't exist yet.</p>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {modalImage && (
          <ImageModal
            src={modalImage.src}
            alt={modalImage.alt}
            onClose={() => setModalImage(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
