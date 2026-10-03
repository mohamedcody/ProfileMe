const fs = require('fs');

const code = `import { ArrowRight, ExternalLink, Image as ImageIcon, Code2, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Button } from '../components/ui/Button';
import { PageWrapper } from '../components/ui/PageWrapper';

const Projects = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <PageWrapper>
      {/* Toast Notification System */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -50, x: '-50%' }}
            style={{
              position: 'fixed',
              top: '100px',
              left: '50%',
              backgroundColor: 'rgba(0, 180, 216, 0.9)',
              backdropFilter: 'blur(10px)',
              color: '#000',
              padding: '14px 28px',
              borderRadius: '50px',
              fontWeight: 700,
              zIndex: 2000,
              boxShadow: '0 10px 30px rgba(0, 180, 216, 0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              whiteSpace: 'nowrap'
            }}
          >
            <Rocket size={20} />
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ paddingTop: 'var(--space-120)' }}>
        <div style={{ backgroundColor: 'var(--surface-2)', padding: 'var(--space-64) 0', textAlign: 'center', borderBottom: '1px solid var(--border-subtle)' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-display gradient-text" style={{ marginBottom: 'var(--space-16)' }}>Case Studies</motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="label-spaced text-caption" style={{ color: 'var(--text-muted)' }}>
            HOME &rsaquo; <span style={{ color: 'var(--accent-primary)' }}>PROJECTS</span>
          </motion.p>
        </div>
        
        <div className="container" style={{ padding: 'var(--space-120) var(--space-32)' }}>
          
          {/* Project 1: JobFinder */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
            className="flex md-flex-col gap-64 items-center" style={{ marginBottom: 'var(--space-120)' }}
          >
            <div className="w-full relative" style={{ flex: 1 }}>
              <div style={{ position: 'absolute', top: '-40px', left: '-20px', fontSize: '180px', fontWeight: 700, color: 'rgba(255,255,255,0.02)', zIndex: 0, lineHeight: 1 }}>01</div>
              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.4 }}
                style={{ height: '400px', backgroundColor: 'var(--surface-1)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}
              >
                <ImageIcon size={48} color="rgba(255,255,255,0.1)" />
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Gallery Images Coming Soon</p>
              </motion.div>
            </div>

            <div className="w-full" style={{ flex: 1 }}>
              <div className="flex items-center gap-16" style={{ marginBottom: 'var(--space-8)' }}>
                <h2 className="text-h2" style={{ textTransform: 'uppercase' }}>JobFinder</h2>
                <span style={{ padding: '4px 12px', backgroundColor: 'rgba(234, 179, 8, 0.1)', color: '#eab308', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', border: '1px solid rgba(234, 179, 8, 0.2)' }}>
                  IN DEVELOPMENT
                </span>
              </div>
              <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-primary)', marginBottom: 'var(--space-24)', borderRadius: '2px' }}></div>
              
              <p className="text-body-lg" style={{ marginBottom: 'var(--space-24)' }}>
                A full-stack job search platform designed to help job seekers discover relevant opportunities through intelligent matching and robust user profiles.
              </p>
              
              <div style={{ marginBottom: 'var(--space-32)' }}>
                <h4 className="text-body" style={{ color: 'var(--text-high)', marginBottom: 'var(--space-12)', fontWeight: 600 }}>Key Engineering Decisions:</h4>
                <ul className="text-body flex flex-col gap-8" style={{ paddingLeft: 'var(--space-24)' }}>
                  <li>Implemented <strong style={{ color: 'var(--text-high)' }}>JWT authentication</strong> & Spring Security.</li>
                  <li>Built an <strong style={{ color: 'var(--text-high)' }}>AI-assisted CV analysis</strong> engine to extract skills.</li>
                  <li>Utilized <strong style={{ color: 'var(--text-high)' }}>Vector search</strong> for semantic matching.</li>
                  <li>Designed a normalized <strong style={{ color: 'var(--text-high)' }}>PostgreSQL</strong> schema.</li>
                </ul>
              </div>

              <div className="flex gap-16 items-center" style={{ marginBottom: 'var(--space-32)', flexWrap: 'wrap' }}>
                {['Java', 'Spring Boot', 'React', 'PostgreSQL'].map(tech => (
                  <span key={tech} style={{ padding: '6px 16px', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-subtle)', fontSize: 'var(--text-caption)', color: 'var(--accent-primary)', backgroundColor: 'rgba(0,180,216,0.05)' }}>{tech}</span>
                ))}
              </div>

              {/* Enhanced Buttons */}
              <div className="flex gap-16 flex-wrap">
                <Button 
                  onClick={() => showToast('Platform is currently under development and will be hosted soon! 🚀')}
                  style={{ gap: '8px', padding: '12px 24px' }}
                >
                  Live Demo <ExternalLink size={18}/>
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={() => showToast('Gallery is being prepared. Screenshots will be available shortly! 🖼️')}
                  style={{ gap: '8px', padding: '12px 24px', borderColor: 'rgba(234, 179, 8, 0.5)', color: '#eab308' }}
                >
                  <ImageIcon size={18}/> View Gallery
                </Button>

                <Button variant="outline" style={{ gap: '8px', padding: '12px 24px' }}>
                  <Code2 size={18}/> Source Code
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div style={{ height: '1px', backgroundColor: 'var(--border-subtle)', margin: '0 auto var(--space-120)', width: '100%' }}></div>

          {/* Placeholder for Project 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
            className="flex md-flex-col-reverse gap-64 items-center" style={{ flexDirection: 'row-reverse' }}
          >
            <div className="w-full relative" style={{ flex: 1 }}>
              <div style={{ position: 'absolute', top: '-40px', right: '-20px', fontSize: '180px', fontWeight: 700, color: 'rgba(255,255,255,0.02)', zIndex: 0, lineHeight: 1 }}>02</div>
              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.4 }}
                style={{ height: '400px', backgroundColor: 'var(--surface-1)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}
              >
                <p className="text-sm">Next Project Preview</p>
              </motion.div>
            </div>

            <div className="w-full" style={{ flex: 1 }}>
              <h2 className="text-h2" style={{ textTransform: 'uppercase', marginBottom: 'var(--space-8)' }}>Coming Soon</h2>
              <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-primary)', marginBottom: 'var(--space-24)', borderRadius: '2px' }}></div>
              
              <p className="text-body-lg" style={{ marginBottom: 'var(--space-32)' }}>
                More case studies demonstrating real-world problem solving, clean architecture, and modern full-stack development will be added here soon.
              </p>
              
              <Button variant="outline" style={{ gap: '8px' }}>
                Explore GitHub <ArrowRight size={18}/>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </PageWrapper>
  );
};

export default Projects;
`;

fs.writeFileSync('src/pages/Projects.tsx', code);
