import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface GalleryImage {
  src: string;
  caption: string;
}

interface ImageGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: GalleryImage[];
}

export const ImageGalleryModal: React.FC<ImageGalleryModalProps> = ({ isOpen, onClose, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lock body scroll when modal is open & Handle keyboard navigation
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'auto';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            zIndex: 9999, display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center',
            backgroundColor: 'rgba(5, 5, 5, 0.95)',
            backdropFilter: 'blur(15px)'
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: '32px', right: '32px',
              backgroundColor: 'rgba(255,255,255,0.1)', border: 'none',
              borderRadius: '50%', width: '48px', height: '48px',
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              color: '#fff', cursor: 'pointer', zIndex: 10,
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.8)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
            aria-label="Close Gallery"
          >
            <X size={24} />
          </button>

          {/* Main Content Area */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            
            {/* Prev Button */}
            {images.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                style={{
                  position: 'absolute', left: '32px',
                  backgroundColor: 'rgba(255,255,255,0.1)', border: 'none',
                  borderRadius: '50%', width: '56px', height: '56px',
                  display: 'flex', justifyContent: 'center', alignItems: 'center',
                  color: '#fff', cursor: 'pointer', zIndex: 10,
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-primary)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                aria-label="Previous Image"
              >
                <ChevronLeft size={32} />
              </button>
            )}

            {/* Image Container with Animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="gallery-content"
                style={{ width: '100%', height: '100%', padding: '0 100px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                onClick={(e) => e.stopPropagation()} // Prevent closing if clicking on image area
              >
                <div style={{ position: 'relative', width: '100%', height: '100%', maxHeight: 'calc(80vh - 60px)', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '16px', overflow: 'hidden' }}>
                  {/* Image */}
                  <img
                    src={images[currentIndex].src}
                    alt={images[currentIndex].caption}
                    style={{
                      maxWidth: '100%', maxHeight: '100%',
                      objectFit: 'contain',
                      borderRadius: '12px',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
                    }}
                    // Fallback if image not found
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div style="color:var(--text-muted); font-size:1.2rem; text-align:center;">Image not found:<br/>' + images[currentIndex].src + '<br/><br/>Please place the image in the public folder.</div>';
                    }}
                  />
                </div>

                {/* Caption Area */}
                <div style={{ marginTop: '24px', textAlign: 'center' }}>
                  <p style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', letterSpacing: '0.02em' }}>
                    {images[currentIndex].caption}
                  </p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '8px' }}>
                    {currentIndex + 1} of {images.length}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Next Button */}
            {images.length > 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                style={{
                  position: 'absolute', right: '32px',
                  backgroundColor: 'rgba(255,255,255,0.1)', border: 'none',
                  borderRadius: '50%', width: '56px', height: '56px',
                  display: 'flex', justifyContent: 'center', alignItems: 'center',
                  color: '#fff', cursor: 'pointer', zIndex: 10,
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-primary)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                aria-label="Next Image"
              >
                <ChevronRight size={32} />
              </button>
            )}

          </div>
        </motion.div>
      )}
      <style>{`
        .gallery-content {
          min-width: 0;
        }
        @media (max-width: 768px) {
          .gallery-content { padding: 0 56px; }
        }
        @media (max-width: 480px) {
          .gallery-content { padding: 0 16px; }
        }
      `}</style>
    </AnimatePresence>
  );
};
