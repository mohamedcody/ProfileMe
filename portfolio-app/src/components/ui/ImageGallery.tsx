import { useState } from 'react';

const GalleryImage = ({ src, alt }: { src: string; alt: string }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      style={{
        backgroundColor: 'var(--surface-1)',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-subtle)',
        overflow: 'hidden',
        aspectRatio: '16/9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setHasError(true)}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Image placeholder</span>
      )}
    </div>
  );
};

export const ImageGallery = ({ images, altPrefix }: { images: string[], altPrefix: string }) => {
  return (
    <div className="grid grid-cols-2 md-grid-cols-1 gap-24" style={{ marginTop: 'var(--space-32)' }}>
      {images.map((src, idx) => (
        <GalleryImage key={src} src={src} alt={`${altPrefix} screenshot ${idx + 1}`} />
      ))}
    </div>
  );
};
