import type { ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';
import { useRef, useState } from 'react';

interface CardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  enableTilt?: boolean;
}

export const Card = ({ children, className, hoverEffect = false, enableTilt = true, ...props }: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovering, setIsHovering] = useState(false);

  // 3D Tilt calculation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), {
    stiffness: 300,
    damping: 25
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), {
    stiffness: 300,
    damping: 25
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !hoverEffect) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    if (enableTilt && window.matchMedia('(pointer: fine)').matches) {
      mouseX.set(x / rect.width - 0.5);
      mouseY.set(y / rect.height - 0.5);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (enableTilt) {
      mouseX.set(0);
      mouseY.set(0);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={hoverEffect ? { 
        y: -6,
        borderColor: 'rgba(0, 180, 216, 0.5)', 
        boxShadow: '0 20px 45px rgba(0, 180, 216, 0.18), 0 0 20px rgba(0, 180, 216, 0.12)' 
      } : {}}
      transition={hoverEffect ? { type: "spring", stiffness: 350, damping: 22 } : undefined}
      className={clsx("ui-card", className)}
      style={{
        position: 'relative',
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        padding: 'var(--space-32)',
        overflow: 'hidden',
        rotateX: enableTilt && isHovering ? rotateX : 0,
        rotateY: enableTilt && isHovering ? rotateY : 0,
        transformStyle: 'preserve-3d',
        perspective: 1000,
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
            background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 180, 216, 0.14), transparent 45%)`,
            opacity: isHovering ? 1 : 0,
            transition: 'opacity 0.3s ease',
            zIndex: 0
          }}
        />
      )}
      
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, height: '100%', transform: 'translateZ(10px)' }}>
        {children}
      </div>
    </motion.div>
  );
};
