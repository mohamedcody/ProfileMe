#!/bin/bash
cd /home/mohamed-saad/front-end-vs/profileMain/portfolio-app

echo "Updating App.tsx to support AnimatePresence..."
cat << 'TSX' > src/App.tsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}

export default App;
TSX

echo "Updating Home.tsx..."
cat << 'TSX' > src/pages/Home.tsx
import { Server, Layout, Database, BrainCircuit, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { PageWrapper } from '../components/ui/PageWrapper';

const Home = () => {
  return (
    <PageWrapper>
      <div style={{ paddingTop: 'var(--space-120)' }}>
        
        {/* Hero Section */}
        <section className="container flex md-flex-col md-items-center gap-64" style={{ minHeight: '85vh', alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
            style={{ flex: 1 }}
          >
            <p className="label-spaced" style={{ marginBottom: 'var(--space-16)' }}>Hello, I am</p>
            <h1 className="text-display gradient-text" style={{ marginBottom: 'var(--space-24)' }}>Mohamed Saad</h1>
            <p className="text-body-lg" style={{ marginBottom: 'var(--space-48)', maxWidth: '600px' }}>
              A Software Engineer focused on building secure, scalable, and modern full-stack applications.
            </p>
            <div className="flex gap-24">
              <Link to="/projects"><Button size="lg">View Projects</Button></Link>
              <Link to="/contact"><Button variant="outline" size="lg">Contact Me</Button></Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full flex justify-center relative"
            style={{ flex: 1 }}
          >
            <div style={{ width: '100%', maxWidth: '400px', aspectRatio: '1/1', borderRadius: '50%', background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)', position: 'absolute' }}></div>
            <Card className="relative z-10 flex items-center justify-center text-center" style={{ width: '100%', maxWidth: '340px', aspectRatio: '3/4', backgroundColor: 'var(--surface-2)' }}>
               <p className="text-sm">Portrait Placeholder</p>
            </Card>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="container" style={{ padding: 'var(--space-120) var(--space-32)', borderTop: '1px solid var(--border-subtle)' }}>
          <div className="flex md-flex-col gap-64 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
              style={{ flex: 1 }}
            >
              <h2 className="text-h2" style={{ marginBottom: 'var(--space-32)', textTransform: 'uppercase' }}>
                &lt; <span className="gradient-text">About Me</span> /&gt;
              </h2>
              <p className="text-body-lg" style={{ marginBottom: 'var(--space-24)' }}>
                I am a <strong style={{ color: 'var(--text-high)' }}>Software Engineer</strong> with strong backend experience and a deep understanding of application development and engineering fundamentals.
              </p>
              <p className="text-body-lg" style={{ marginBottom: 'var(--space-32)' }}>
                Instead of just writing code, I focus on <span style={{ color: 'var(--accent-primary)' }}>solving real business problems</span>. 
                I integrate modern tools, including AI, to improve productivity, while maintaining full responsibility for architectural decisions, security, and maintainability.
              </p>
              <div style={{ borderLeft: '4px solid var(--accent-primary)', paddingLeft: 'var(--space-24)', backgroundColor: 'var(--surface-2)', padding: 'var(--space-24)', borderRadius: '0 var(--radius-md) var(--radius-md) 0', fontStyle: 'italic' }} className="text-body">
                "I believe in building practical, secure, and modern web applications where every technology used has a clear purpose."
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }}
              style={{ flex: 1 }}
            >
              <div className="grid grid-cols-2 gap-24">
                {[
                  { icon: Server, title: 'Backend', desc: 'Java, Spring Boot', color: 'var(--accent-primary)' },
                  { icon: Layout, title: 'Frontend', desc: 'React, Next.js', color: 'var(--accent-secondary)' },
                  { icon: Database, title: 'Database', desc: 'PostgreSQL, SQL', color: 'var(--success)' },
                  { icon: BrainCircuit, title: 'AI', desc: 'Integration & Parsing', color: '#a855f7' },
                ].map((skill, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                    <Card hoverEffect className="flex flex-col items-center text-center" style={{ padding: 'var(--space-32)' }}>
                      <div style={{ width: '48px', height: '48px', backgroundColor: `color-mix(in srgb, ${skill.color} 10%, transparent)`, color: skill.color, borderRadius: 'var(--radius-sm)' }} className="flex items-center justify-center mb-16">
                        <skill.icon size={24} />
                      </div>
                      <h3 className="text-h3" style={{ marginBottom: 'var(--space-8)' }}>{skill.title}</h3>
                      <p className="text-caption" style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>{skill.desc}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </section>

        {/* Services Section */}
        <section style={{ backgroundColor: 'var(--surface-2)', padding: 'var(--space-120) 0' }}>
          <div className="container">
            <div className="flex md-flex-col justify-between items-center md-items-center mb-64 gap-24">
              <h2 className="text-h2" style={{ textTransform: 'uppercase' }}>&lt; <span className="gradient-text">Services</span> /&gt;</h2>
              <p className="text-body md-text-center" style={{ maxWidth: '400px', textAlign: 'right' }}>Providing end-to-end software solutions focused on client problems and technical excellence.</p>
            </div>

            <div className="grid grid-cols-3 lg-grid-cols-2 md-grid-cols-1 gap-32">
              {[
                { title: 'Backend & REST APIs', features: ['Robust API Development', 'Database Integration', 'Secure Authentication'] },
                { title: 'Full-Stack Development', features: ['Responsive Web Apps', 'Clean UI/UX Implementation', 'Project Improvements'] },
                { title: 'AI Integration', features: ['Semantic Search', 'Document Parsing', 'AI-Assisted Features'] },
              ].map((service, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.15 }} viewport={{ once: true }}>
                  <Card hoverEffect className="h-full">
                    <h3 className="text-h3" style={{ marginBottom: 'var(--space-16)' }}>{service.title}</h3>
                    <div style={{ width: '40px', height: '4px', backgroundColor: 'var(--accent-primary)', marginBottom: 'var(--space-24)', borderRadius: '2px' }}></div>
                    <ul className="flex flex-col gap-16" style={{ listStyle: 'none' }}>
                      {service.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-12 text-body"><CheckCircle2 size={18} color="var(--accent-primary)"/> {f}</li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Home;
TSX

echo "Updating Navbar.tsx..."
cat << 'TSX' > src/components/Navbar.tsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Download } from 'lucide-react';
import { Button } from './ui/Button';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';

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
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.6 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        height: isScrolled ? '72px' : '100px',
        backgroundColor: isScrolled ? 'rgba(8, 10, 15, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        transition: 'all var(--transition-smooth)',
      }}
      className="flex items-center justify-between px-8"
    >
      <div className="container flex items-center justify-between w-full h-full">
        <Link to="/" className="text-h3">Mohamed<span style={{ color: 'var(--accent-primary)' }}>.</span></Link>
        
        <div className="flex items-center gap-8" style={{ backgroundColor: 'var(--surface-1)', padding: '4px', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-subtle)' }}>
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.path} 
                to={link.path}
                className={clsx(
                  "relative text-sm transition-colors rounded-full",
                  isActive ? "text-high" : "text-medium hover:text-high"
                )}
                style={{ color: isActive ? 'var(--text-high)' : 'var(--text-medium)', padding: '8px 24px', borderRadius: 'var(--radius-full)', fontWeight: 500, position: 'relative' }}
              >
                {isActive && (
                  <motion.div layoutId="nav-pill" className="absolute" style={{ top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'var(--surface-2)', borderRadius: 'var(--radius-full)', zIndex: -1, border: '1px solid var(--border-subtle)' }} />
                )}
                {link.name}
              </Link>
            );
          })}
        </div>

        <div style={{ display: 'flex' }}>
          <Button variant="outline" size="sm" style={{ gap: '8px' }}>
            <Download size={16} /> Resume
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
TSX

