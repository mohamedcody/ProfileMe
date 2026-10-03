const fs = require('fs');

const navbarCode = `import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Download, Github } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smart Navbar: Hide on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > 150 && latest > previous) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact Me', path: '/contact' }
  ];

  return (
    <motion.div 
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 }
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{ display: 'flex', justifyContent: 'center', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, padding: isScrolled ? '16px 20px' : '24px 20px', transition: 'padding 0.3s ease' }}
    >
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: '100%', maxWidth: '1200px',
          height: '70px',
          backgroundColor: isScrolled ? 'rgba(10, 12, 16, 0.75)' : 'rgba(10, 12, 16, 0.4)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '24px',
          boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.3)' : '0 10px 40px rgba(0,0,0,0.1)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 16px 0 24px',
          transition: 'all 0.3s ease'
        }}
      >
        {/* Left Side: Logo & Status Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <Link to="/" style={{ fontSize: '1.4rem', fontWeight: 900, textDecoration: 'none', color: '#fff', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center' }}>
            MOHAMED<span style={{ color: 'var(--accent-primary)' }}>.</span>
          </Link>
          
          {/* Status Badge: Available for work */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 12px', backgroundColor: 'rgba(16, 185, 129, 0.1)', borderRadius: '50px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--success)', borderRadius: '50%', zIndex: 1 }}></div>
              <motion.div 
                animate={{ scale: [1, 2.5], opacity: [0.7, 0] }} 
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }} 
                style={{ position: 'absolute', width: '8px', height: '8px', backgroundColor: 'var(--success)', borderRadius: '50%', zIndex: 0 }}
              />
            </div>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--success)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Available</span>
          </div>
        </div>
        
        {/* Navigation Links */}
        <div className="flex items-center gap-4 hidden-mobile">
          {links.map((link) => {
            const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
            
            return (
              <Link 
                key={link.path} 
                to={link.path}
                style={{ position: 'relative', display: 'block', textDecoration: 'none' }}
              >
                {isActive && (
                  <motion.div 
                    layoutId="navbar-indicator" 
                    className="absolute" 
                    style={{ 
                      top: 0, left: 0, right: 0, bottom: 0, 
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      borderRadius: '12px', 
                      zIndex: 0
                    }} 
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                
                {!isActive && (
                  <motion.div 
                    className="absolute"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                      top: 0, left: 0, right: 0, bottom: 0,
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '12px',
                      zIndex: 0
                    }}
                  />
                )}

                <span 
                  style={{ 
                    position: 'relative', zIndex: 1, 
                    display: 'block', padding: '10px 20px', 
                    fontSize: '0.95rem', fontWeight: isActive ? 600 : 500, 
                    color: isActive ? '#fff' : 'rgba(255,255,255,0.6)',
                    transition: 'color 0.2s ease'
                  }}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Right Side: GitHub & Resume */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <motion.a 
            href="https://github.com/mohamedcody" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }} whileTap={{ scale: 0.95 }} 
            style={{ 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '40px', height: '40px', color: '#fff',
              backgroundColor: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px',
              cursor: 'pointer', transition: 'all 0.2s ease'
            }}
          >
            <Github size={20} />
          </motion.a>
          
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <button className="btn-solid-cyber" style={{ 
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '10px 24px', fontSize: '0.95rem', fontWeight: 700, borderRadius: '12px'
            }}>
              <Download size={16} /> Resume
            </button>
          </motion.div>
        </div>
        
      </motion.nav>
      
      <style>{\`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
      \`}</style>
    </motion.div>
  );
};

export default Navbar;
`;

fs.writeFileSync('src/components/Navbar.tsx', navbarCode);
console.log("Navbar upgraded.");
