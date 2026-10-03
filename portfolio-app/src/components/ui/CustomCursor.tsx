import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;
    
    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over interactive elements
      if (
        target.tagName.toLowerCase() === 'button' || 
        target.tagName.toLowerCase() === 'a' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('tool-card')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Small Glowing Core */}
      <motion.div
        style={{
          position: 'fixed', top: 0, left: 0,
          width: '6px', height: '6px',
          backgroundColor: '#fff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          boxShadow: '0 0 15px 4px var(--accent-primary)',
          mixBlendMode: 'difference'
        }}
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      />
      
      {/* Magnetic Outer Ring / Aura */}
      <motion.div
        style={{
          position: 'fixed', top: 0, left: 0,
          width: '36px', height: '36px',
          border: '1.5px solid var(--accent-primary)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          backgroundColor: isHovering ? 'rgba(0, 180, 216, 0.15)' : 'transparent',
          boxShadow: isHovering ? '0 0 30px rgba(0, 180, 216, 0.4)' : 'none',
          backdropFilter: isHovering ? 'blur(2px)' : 'none'
        }}
        animate={{
          x: mousePosition.x - 18,
          y: mousePosition.y - 18,
          scale: isHovering ? 1.8 : 1
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.4 }}
      />
    </>
  );
};
