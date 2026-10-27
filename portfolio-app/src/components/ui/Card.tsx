import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';
import { useRef, useCallback } from 'react';

interface CardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card = ({ children, className, hoverEffect = false, ...props }: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !hoverEffect) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--spot-x', `${x}px`);
    cardRef.current.style.setProperty('--spot-y', `${y}px`);
    cardRef.current.style.setProperty('--spot-opacity', '1');
  }, [hoverEffect]);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current || !hoverEffect) return;
    cardRef.current.style.setProperty('--spot-opacity', '0');
  }, [hoverEffect]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={hoverEffect ? {
        y: -5,
        borderColor: 'rgba(0, 180, 216, 0.45)',
        boxShadow: '0 20px 40px rgba(0, 180, 216, 0.16)'
      } : undefined}
      transition={hoverEffect ? { duration: 0.25, ease: 'easeOut' } : undefined}
      className={clsx("ui-card", className)}
      style={{
        position: 'relative',
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        padding: 'var(--space-32)',
        overflow: 'hidden',
        willChange: 'transform',
        ...props.style
      }}
      {...props}
    >
      {/* GPU-accelerated CSS Spotlight (Zero React re-renders) */}
      {hoverEffect && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: 'none',
            background: 'radial-gradient(550px circle at var(--spot-x, -999px) var(--spot-y, -999px), rgba(0, 180, 216, 0.12), transparent 40%)',
            opacity: 'var(--spot-opacity, 0)' as unknown as number,
            transition: 'opacity 0.25s ease',
            zIndex: 0
          }}
        />
      )}

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, height: '100%' }}>
        {children}
      </div>
    </motion.div>
  );
};
