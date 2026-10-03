import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';
import { useRef, useState } from 'react';

interface CardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card = ({ children, className, hoverEffect = false, ...props }: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !hoverEffect) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      whileHover={hoverEffect ? { 
        y: -5,
        borderColor: 'rgba(0, 180, 216, 0.4)', 
        boxShadow: '0 20px 40px rgba(0, 180, 216, 0.15)' 
      } : {}}
      transition={hoverEffect ? { type: "spring", stiffness: 300, damping: 20 } : undefined}
      className={clsx("ui-card", className)}
      style={{
        position: 'relative',
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        padding: 'var(--space-32)',
        overflow: 'hidden',
        ...props.style
      }}
      {...props}
    >
      {/* Spotlight Effect overlay */}
      {hoverEffect && (
        <div 
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            pointerEvents: 'none',
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 180, 216, 0.1), transparent 40%)`,
            opacity: isHovering ? 1 : 0,
            transition: 'opacity 0.4s ease',
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
