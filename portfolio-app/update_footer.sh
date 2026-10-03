#!/bin/bash
cd /home/mohamed-saad/front-end-vs/profileMain/portfolio-app

echo "Redesigning Footer.tsx..."
cat << 'TSX' > src/components/Footer.tsx
import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ backgroundColor: 'var(--bg-base)', borderTop: '1px solid var(--border-subtle)', padding: 'var(--space-96) 0 var(--space-32)', marginTop: 'auto', position: 'relative' }}>
      <div className="container">
        <div className="flex justify-between md-flex-col gap-64" style={{ marginBottom: 'var(--space-64)' }}>
          
          {/* Left Column - Logo & Bio */}
          <div style={{ flex: '1 1 350px' }}>
            <h3 className="text-h3" style={{ marginBottom: 'var(--space-16)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>
              Mohamed<span style={{ color: 'var(--accent-primary)' }}>.</span>
            </h3>
            <p className="text-body" style={{ marginBottom: 'var(--space-24)', maxWidth: '350px', lineHeight: '1.7', color: 'var(--text-medium)' }}>
              Crafting high-performance websites with modern tech stacks. Focused on speed, accessibility, and exceptional user experiences.
            </p>
            <div className="flex gap-12">
              {/* Custom SVG for GitHub to avoid Lucide import issues and ensure authentic look */}
              <a href="https://github.com/mohamedcody" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
                 <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              {/* Custom SVG for LinkedIn */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                 <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="mailto:mohamedcody18@gmail.com" className="social-btn" aria-label="Email">
                 <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Middle Column - Navigation */}
          <div style={{ flex: '1 1 200px' }}>
            <h4 className="label-spaced" style={{ marginBottom: 'var(--space-24)', color: 'var(--text-muted)' }}>NAVIGATION</h4>
            <div className="flex flex-col gap-16 text-body">
              <Link to="/projects" style={{ fontWeight: 500, color: 'var(--text-high)', transition: 'color var(--transition-fast)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-high)'}>Projects</Link>
              <Link to="/contact" style={{ fontWeight: 500, color: 'var(--text-high)', transition: 'color var(--transition-fast)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-high)'}>Contact Me</Link>
            </div>
          </div>

          {/* Right Column - Contact Cards */}
          <div style={{ flex: '1 1 350px' }}>
            <h4 className="label-spaced" style={{ marginBottom: 'var(--space-24)', color: 'var(--text-muted)' }}>GET IN TOUCH</h4>
            <div className="flex flex-col gap-16">
              
              <a href="mailto:mohamedcody18@gmail.com" style={{ display: 'block' }}>
                <motion.div 
                  whileHover={{ y: -2 }} 
                  style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-16) var(--space-24)', transition: 'border-color 0.3s ease' }} 
                  onMouseOver={(e) => e.currentTarget.style.borderColor = 'rgba(0,180,216,0.5)'} 
                  onMouseOut={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
                >
                  <div className="flex items-center gap-8" style={{ color: 'var(--accent-primary)', marginBottom: 'var(--space-8)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em' }}>
                     <Mail size={16} /> EMAIL ME
                  </div>
                  <p className="text-body" style={{ color: 'var(--text-high)', fontWeight: 500 }}>mohamedcody18@gmail.com</p>
                </motion.div>
              </a>

              <a href="tel:+201148415128" style={{ display: 'block' }}>
                <motion.div 
                  whileHover={{ y: -2 }} 
                  style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-16) var(--space-24)', transition: 'border-color 0.3s ease' }} 
                  onMouseOver={(e) => e.currentTarget.style.borderColor = 'rgba(0,180,216,0.5)'} 
                  onMouseOut={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
                >
                  <div className="flex items-center gap-8" style={{ color: 'var(--accent-primary)', marginBottom: 'var(--space-8)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em' }}>
                     <Phone size={16} /> CALL ME
                  </div>
                  <p className="text-body" style={{ color: 'var(--text-high)', fontWeight: 500 }}>+20 1148415128</p>
                </motion.div>
              </a>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between items-center md-flex-col gap-24" style={{ paddingTop: 'var(--space-32)', borderTop: '1px solid var(--border-subtle)' }}>
          <div className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Designed & Built by <strong style={{ color: 'var(--text-high)' }}>Mohamed Saad</strong> &bull; &copy; {new Date().getFullYear()} All rights reserved.
          </div>
          <button 
            onClick={scrollToTop} 
            title="Scroll to top"
            style={{ 
              width: '44px', height: '44px', borderRadius: '50%', 
              border: '1px solid var(--accent-primary)', backgroundColor: 'transparent', 
              color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', 
              justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s ease',
              flexShrink: 0
            }}
            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--accent-primary)'; e.currentTarget.style.color = '#fff'; }}
            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--accent-primary)'; }}
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <style>{`
          .social-btn {
            width: 48px; height: 48px;
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 12px;
            display: flex; align-items: center; justify-content: center;
            color: var(--text-medium);
            background-color: rgba(255,255,255,0.02);
            transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          }
          .social-btn:hover {
            background-color: rgba(0, 180, 216, 0.05);
            border-color: var(--accent-primary);
            color: var(--accent-primary);
            transform: translateY(-4px);
            box-shadow: 0 10px 20px rgba(0, 180, 216, 0.1);
          }
        `}</style>

      </div>
    </footer>
  );
};

export default Footer;
TSX
