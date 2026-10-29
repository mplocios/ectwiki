import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Breadcrumb from './components/Breadcrumb';
import { HamburgerIcon } from './components/Icons';
import PAGES from './data/pageRegistry';

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
