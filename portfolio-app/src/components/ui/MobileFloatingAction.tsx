import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowUp } from 'lucide-react';

export const MobileFloatingAction = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 280);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mobile-floating-container">
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-top-btn"
            initial={{ opacity: 0, scale: 0.6, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 15 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="floating-btn scroll-top-btn"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/201148415128?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D9%85%D9%87%D9%86%D8%AF%D8%B3%20%D9%85%D8%AD%D9%85%D8%AF%D8%8C%20%D8%A3%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%D9%83%20%D9%85%D9%86%20%D9%85%D9%88%D9%82%D8%B9%D9%83%20%D8%A7%D9%84%D8%B4%D8%AE%D8%B5%D9%8A"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact via WhatsApp"
        className="floating-btn whatsapp-btn"
        whileTap={{ scale: 0.92 }}
      >
        <MessageCircle size={22} />
        <span className="whatsapp-label">WhatsApp</span>
      </motion.a>

      <style>{`
        .mobile-floating-container {
          display: none;
          position: fixed;
          bottom: 24px;
          right: 20px;
          z-index: 950;
          flex-direction: column;
          gap: 12px;
          align-items: flex-end;
        }

        @media (max-width: 768px) {
          .mobile-floating-container {
            display: flex;
          }
        }

        .floating-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          cursor: pointer;
          text-decoration: none;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .scroll-top-btn {
          width: 44px;
          height: 44px;
          background: rgba(18, 21, 30, 0.85);
          color: var(--accent-primary);
          border: 1px solid rgba(0, 180, 216, 0.3);
        }

        .whatsapp-btn {
          height: 46px;
          padding: 0 16px;
          gap: 8px;
          background: rgba(16, 185, 129, 0.92);
          color: #ffffff;
          font-weight: 700;
          font-size: 0.85rem;
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 24px rgba(16, 185, 129, 0.35);
        }

        .whatsapp-label {
          letter-spacing: 0.02em;
        }
      `}</style>
    </div>
  );
};
