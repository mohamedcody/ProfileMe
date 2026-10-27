import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        backgroundColor: 'var(--accent-primary)',
        backgroundImage: 'linear-gradient(90deg, var(--accent-primary), #60a5fa)',
        boxShadow: '0 0 12px var(--accent-primary)',
        transformOrigin: '0%',
        scaleX,
        zIndex: 1200,
        pointerEvents: 'none'
      }}
      aria-hidden="true"
    />
  );
};
