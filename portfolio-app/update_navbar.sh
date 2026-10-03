#!/bin/bash
cd /home/mohamed-saad/front-end-vs/profileMain/portfolio-app

echo "Upgrading Navbar.tsx for larger text and button-like glowing effects..."
cat << 'TSX' > src/components/Navbar.tsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Download } from 'lucide-react';
import { Button } from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact Me', path: '/contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.6 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        height: isScrolled ? '85px' : '110px',
        backgroundColor: isScrolled ? 'rgba(8, 10, 15, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        transition: 'all var(--transition-smooth)',
      }}
      className="flex items-center justify-between px-8"
    >
      <div className="container flex items-center justify-between w-full h-full">
        
        {/* Logo */}
        <Link to="/" style={{ fontSize: '1.8rem', fontWeight: 800, textDecoration: 'none', color: '#fff', letterSpacing: '-0.02em' }}>
          MOHAMED<span style={{ color: 'var(--accent-primary)' }}>.</span>
        </Link>
        
        {/* Navigation Links - Pill Container */}
        <div 
          className="flex items-center" 
          style={{ 
            backgroundColor: 'rgba(255,255,255,0.02)', 
            padding: '6px', 
            borderRadius: '50px', 
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
          }}
        >
          {links.map((link) => {
            const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
            
            return (
              <Link 
                key={link.path} 
                to={link.path}
                style={{ position: 'relative', display: 'block', textDecoration: 'none' }}
              >
                {/* Active Indicator Glow */}
                {isActive && (
                  <motion.div 
                    layoutId="nav-pill" 
                    className="absolute" 
                    style={{ 
                      top: 0, left: 0, right: 0, bottom: 0, 
                      backgroundColor: 'rgba(0, 180, 216, 0.15)', // Cyan tint
                      borderRadius: '50px', 
                      zIndex: 0, 
                      border: '1px solid rgba(0, 180, 216, 0.3)',
                      boxShadow: '0 0 20px rgba(0, 180, 216, 0.2)' // Glowing effect
                    }} 
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                
                {/* Hover effect for non-active links */}
                {!isActive && (
                  <motion.div 
                    className="absolute"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                      top: 0, left: 0, right: 0, bottom: 0,
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '50px',
                      zIndex: 0
                    }}
                  />
                )}

                {/* Link Text */}
                <span 
                  style={{ 
                    position: 'relative', zIndex: 1, 
                    display: 'block', padding: '10px 28px', 
                    fontSize: '1.05rem', fontWeight: isActive ? 700 : 500, 
                    color: isActive ? 'var(--accent-primary)' : 'var(--text-medium)',
                    transition: 'color 0.3s'
                  }}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Resume Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'flex' }}>
          <Button variant="outline" style={{ padding: '12px 24px', fontSize: '1rem', fontWeight: 600, gap: '8px', borderRadius: '50px' }}>
            <Download size={18} /> Resume
          </Button>
        </motion.div>
        
      </div>
    </motion.nav>
  );
};

export default Navbar;
TSX
