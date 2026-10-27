import { motion, useScroll } from 'framer-motion';

export const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();

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
        boxShadow: '0 0 10px var(--accent-primary)',
        transformOrigin: '0%',
        scaleX: scrollYProgress,
        zIndex: 1200,
        pointerEvents: 'none',
        willChange: 'transform'
      }}
      aria-hidden="true"
    />
  );
};
