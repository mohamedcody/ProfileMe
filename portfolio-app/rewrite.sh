#!/bin/bash
cd /home/mohamed-saad/front-end-vs/profileMain/portfolio-app

echo "Updating index.css..."
cat << 'CSS' > src/index.css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  /* Quiet, Professional Palette */
  --bg-base: #0a0a0a;
  --surface-1: #171717;
  --surface-2: #262626;
  --border-subtle: #262626;
  
  --text-high: #f5f5f5;
  --text-medium: #a3a3a3; /* WCAG AA compliant on #0a0a0a */
  --text-muted: #737373;
  
  --accent-primary: #0ea5e9;
  --accent-glow: rgba(14, 165, 233, 0.15);

  --success: #10b981;

  /* Typography Scale */
  --text-display: clamp(2.5rem, 5vw + 1rem, 4rem);
  --text-h1: clamp(2rem, 4vw + 1rem, 3rem);
  --text-h2: clamp(1.75rem, 3vw + 0.5rem, 2.5rem);
  --text-h3: 1.25rem;
  --text-body-lg: 1.125rem; /* 18px */
  --text-body: 1rem; /* 16px */
  --text-sm: 0.875rem;

  /* Spacing Scale */
  --space-8: 8px;
  --space-16: 16px;
  --space-24: 24px;
  --space-32: 32px;
  --space-48: 48px;
  --space-64: 64px;
  --space-96: 96px;
  --space-120: 120px;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 999px;

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-smooth: 300ms cubic-bezier(0.22, 1, 0.36, 1);
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

body {
  background-color: var(--bg-base);
  color: var(--text-high);
  font-family: 'Inter', sans-serif;
  line-height: 1.7;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

::selection { background-color: var(--accent-primary); color: #fff; }
a { color: inherit; text-decoration: none; }

/* Typography */
.text-display { font-size: var(--text-display); font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; }
.text-h1 { font-size: var(--text-h1); font-weight: 600; line-height: 1.2; letter-spacing: -0.01em; }
.text-h2 { font-size: var(--text-h2); font-weight: 600; line-height: 1.3; }
.text-h3 { font-size: var(--text-h3); font-weight: 500; }
.text-body-lg { font-size: var(--text-body-lg); color: var(--text-medium); line-height: 1.7; }
.text-body { font-size: var(--text-body); color: var(--text-medium); }
.text-sm { font-size: var(--text-sm); color: var(--text-muted); }

/* Layout Utilities */
.container { max-width: 1200px; margin: 0 auto; padding: 0 var(--space-32); }
@media (max-width: 768px) { .container { padding: 0 var(--space-16); } }

.flex { display: flex; }
.flex-col { display: flex; flex-direction: column; }
.grid { display: grid; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }

.gap-8 { gap: var(--space-8); }
.gap-16 { gap: var(--space-16); }
.gap-24 { gap: var(--space-24); }
.gap-32 { gap: var(--space-32); }
.gap-48 { gap: var(--space-48); }
.gap-64 { gap: var(--space-64); }

.w-full { width: 100%; }

/* Grid specific */
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }

/* Responsive Overrides */
@media (max-width: 1024px) {
  .lg-grid-cols-1 { grid-template-columns: 1fr; }
  .lg-flex-col { flex-direction: column; }
}

@media (max-width: 768px) {
  .md-grid-cols-1 { grid-template-columns: 1fr; }
  .md-flex-col { flex-direction: column; }
  .md-flex-col-reverse { flex-direction: column-reverse; }
}

/* Reduced Motion Override */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
CSS

echo "Updating Button.tsx..."
cat << 'TSX' > src/components/ui/Button.tsx
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  as?: 'button' | 'a';
  href?: string;
  download?: boolean;
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'md', className, as = 'button', ...props }, ref) => {
    const Component = as === 'a' ? motion.a : motion.button;

    return (
      <Component
        ref={ref as any}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={clsx(
          "btn-core",
          `btn-${variant}`,
          `btn-size-${size}`,
          className
        )}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 500,
          borderRadius: 'var(--radius-sm)',
          cursor: 'pointer',
          transition: 'background-color var(--transition-fast), border-color var(--transition-fast)',
          fontFamily: 'inherit',
          border: '1px solid transparent',
          ...props.style
        }}
        {...(props as any)}
      >
        <style>{`
          .btn-primary {
            background-color: var(--accent-primary);
            color: #fff;
          }
          .btn-primary:hover {
            background-color: #0284c7;
          }
          .btn-secondary {
            background-color: var(--text-high);
            color: var(--bg-base);
          }
          .btn-secondary:hover {
            background-color: #d4d4d4;
          }
          .btn-outline {
            background-color: transparent;
            color: var(--text-high);
            border-color: var(--border-subtle);
          }
          .btn-outline:hover {
            border-color: var(--text-medium);
            background-color: var(--surface-1);
          }
          .btn-ghost {
            background-color: transparent;
            color: var(--text-medium);
          }
          .btn-ghost:hover {
            color: var(--text-high);
            background-color: var(--surface-1);
          }
          .btn-size-sm { padding: 6px 12px; font-size: var(--text-sm); }
          .btn-size-md { padding: 10px 20px; font-size: var(--text-body); }
          .btn-size-lg { padding: 14px 28px; font-size: var(--text-body-lg); }
        `}</style>
        {children}
      </Component>
    );
  }
);
Button.displayName = 'Button';
TSX

echo "Updating App.tsx with MotionConfig..."
cat << 'TSX' > src/App.tsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig } from 'framer-motion';
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
    <MotionConfig reducedMotion="user">
      <Router>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </Router>
    </MotionConfig>
  );
}

export default App;
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
        backgroundColor: isScrolled ? 'rgba(10, 10, 10, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        transition: 'all var(--transition-smooth)',
      }}
      className="flex items-center justify-between"
    >
      <div className="container flex items-center justify-between w-full h-full">
        <Link to="/" className="text-h3" aria-label="Mohamed Saad Portfolio Home">Mohamed.</Link>
        
        <div className="flex items-center gap-8">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.path} 
                to={link.path}
                className={clsx(
                  "relative text-sm transition-colors",
                  isActive ? "text-high" : "text-medium hover:text-high"
                )}
                style={{ padding: '8px 16px', fontWeight: 500, position: 'relative' }}
              >
                {isActive && (
                  <motion.div 
                    layoutId="nav-underline" 
                    className="absolute" 
                    style={{ bottom: 0, left: '16px', right: '16px', height: '2px', backgroundColor: 'var(--accent-primary)' }} 
                  />
                )}
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex">
          <Button as="a" href="/resume.pdf" download variant="secondary" size="sm" style={{ gap: '8px' }}>
            <Download size={16} /> Resume
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
TSX

echo "Updating Home.tsx..."
cat << 'TSX' > src/pages/Home.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { PageWrapper } from '../components/ui/PageWrapper';

const Home = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <PageWrapper>
      <div>
        {/* Hero Section */}
        <section className="container flex lg-flex-col lg-grid-cols-1 items-center gap-64" style={{ minHeight: '100vh', paddingTop: '100px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full flex-col"
            style={{ flex: 1, order: 2 }}
          >
            <h1 className="text-display" style={{ marginBottom: 'var(--space-24)', color: 'var(--text-high)' }}>
              Mohamed Saad.
            </h1>
            <p className="text-body-lg" style={{ marginBottom: 'var(--space-48)', maxWidth: '540px' }}>
              Software Engineer building scalable backends and modern frontends. Specializing in Java, Spring Boot, and React.
            </p>
            <div className="flex gap-24">
              <Button as="a" href="/resume.pdf" download size="lg" variant="primary">Download Resume</Button>
              <Link to="/projects"><Button variant="outline" size="lg">View Projects</Button></Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full flex justify-center"
            style={{ flex: 1, order: 1 }} // On mobile, image on top.
          >
            <div 
              style={{ 
                width: '100%', maxWidth: '320px', aspectRatio: '1/1', 
                backgroundColor: 'var(--surface-1)', borderRadius: 'var(--radius-full)', 
                overflow: 'hidden', border: '1px solid var(--border-subtle)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}
            >
              {!imgError ? (
                <img 
                  src="/profile.jpg" 
                  alt="Mohamed Saad Portrait" 
                  onError={() => setImgError(true)}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <span className="text-body-lg">MS</span>
              )}
            </div>
          </motion.div>
        </section>

        {/* Editorial About Section */}
        <section className="container" style={{ padding: 'var(--space-120) var(--space-32)', borderTop: '1px solid var(--border-subtle)' }}>
          <div className="flex md-flex-col gap-64">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
              style={{ flex: 1 }}
            >
              <h2 className="text-h2" style={{ marginBottom: 'var(--space-24)' }}>Engineering philosophy</h2>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--accent-primary)', marginBottom: 'var(--space-32)' }}></div>
              <p className="text-body-lg" style={{ marginBottom: 'var(--space-24)' }}>
                I bridge the gap between complex backend architectures and intuitive frontend interfaces. My approach focuses on solving real business problems rather than just writing code.
              </p>
              <p className="text-body-lg" style={{ marginBottom: 'var(--space-24)' }}>
                I take full responsibility for architectural decisions, security, and maintainability. When integrating modern tools like AI, I ensure every technology used serves a clear, measurable purpose.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
              style={{ flex: 1 }}
            >
              <h2 className="text-h2" style={{ marginBottom: 'var(--space-24)' }}>Core Stack</h2>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--border-subtle)', marginBottom: 'var(--space-32)' }}></div>
              
              <div className="flex flex-col gap-24">
                <div>
                  <h3 className="text-h3" style={{ marginBottom: 'var(--space-8)' }}>Backend & Database</h3>
                  <p className="text-body">Java, Spring Boot, PostgreSQL, JWT Authentication</p>
                </div>
                <div>
                  <h3 className="text-h3" style={{ marginBottom: 'var(--space-8)' }}>Frontend</h3>
                  <p className="text-body">React, Next.js, TypeScript, Tailwind CSS</p>
                </div>
                <div>
                  <h3 className="text-h3" style={{ marginBottom: 'var(--space-8)' }}>AI Integration</h3>
                  <p className="text-body">Vector Search, Semantic Matching, Document Parsing</p>
                </div>
              </div>
            </motion.div>

          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Home;
TSX

echo "Updating Projects.tsx..."
cat << 'TSX' > src/pages/Projects.tsx
import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { PageWrapper } from '../components/ui/PageWrapper';
import { useState } from 'react';

const ProjectCard = ({ 
  title, description, tags, features, demoUrl, repoUrl, imgSrc, reversed 
}: { 
  title: string, description: string, tags: string[], features: string[], demoUrl?: string, repoUrl?: string, imgSrc: string, reversed?: boolean 
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
      className={`flex md-flex-col gap-64 items-center ${reversed ? 'flex-row-reverse' : ''}`} style={{ marginBottom: 'var(--space-120)' }}
    >
      <div className="w-full relative" style={{ flex: 1 }}>
        <div 
          style={{ 
            height: '400px', backgroundColor: 'var(--surface-1)', borderRadius: 'var(--radius-md)', 
            border: '1px solid var(--border-subtle)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}
        >
          {!imgError ? (
            <img src={imgSrc} alt={`${title} screenshot`} onError={() => setImgError(true)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
          ) : (
            <span className="text-body">Image Unavailable</span>
          )}
        </div>
      </div>

      <div className="w-full" style={{ flex: 1 }}>
        <h2 className="text-h2" style={{ marginBottom: 'var(--space-16)' }}>{title}</h2>
        <p className="text-body-lg" style={{ marginBottom: 'var(--space-32)' }}>{description}</p>
        
        <div style={{ marginBottom: 'var(--space-32)' }}>
          <h4 className="text-body" style={{ color: 'var(--text-high)', marginBottom: 'var(--space-16)', fontWeight: 600 }}>Engineering Highlights</h4>
          <ul className="text-body flex flex-col gap-8" style={{ paddingLeft: 'var(--space-24)' }}>
            {features.map((feature, i) => <li key={i}>{feature}</li>)}
          </ul>
        </div>

        <div className="flex gap-16 items-center" style={{ marginBottom: 'var(--space-32)', flexWrap: 'wrap' }}>
          {tags.map(tech => (
            <span key={tech} style={{ padding: '4px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', fontSize: 'var(--text-sm)', color: 'var(--text-medium)' }}>{tech}</span>
          ))}
        </div>

        <div className="flex gap-16">
          {repoUrl && <Button as="a" href={repoUrl} variant="outline" style={{ gap: '8px' }}>Repository</Button>}
          {demoUrl && <Button as="a" href={demoUrl} variant="primary" style={{ gap: '8px' }}>Live Demo <ExternalLink size={16}/></Button>}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <PageWrapper>
      <div style={{ paddingTop: '100px' }}>
        <div className="container" style={{ padding: 'var(--space-64) var(--space-32) var(--space-32)' }}>
          <h1 className="text-h1" style={{ marginBottom: 'var(--space-16)' }}>Case Studies</h1>
          <p className="text-body-lg" style={{ maxWidth: '600px' }}>Detailed breakdowns of architectural decisions and full-stack implementations.</p>
        </div>
        
        <div className="container" style={{ padding: 'var(--space-64) var(--space-32)' }}>
          
          <ProjectCard 
            title="JobFinder Platform"
            description="A full-stack job search application designed to help candidates discover relevant opportunities through intelligent matching and robust user profiles."
            tags={['Java', 'Spring Boot', 'React', 'PostgreSQL']}
            features={[
              'Secure JWT authentication via Spring Security.',
              'AI-assisted CV analysis engine to automatically extract skills.',
              'Vector search implementation for semantic job matching.',
              'Normalized relational database design in PostgreSQL.'
            ]}
            imgSrc="/jobfinder.jpg"
            demoUrl="#"
            repoUrl="#"
          />

          <div style={{ height: '1px', backgroundColor: 'var(--border-subtle)', margin: '0 auto var(--space-120)', width: '100%' }}></div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center text-center" style={{ padding: 'var(--space-64) 0' }}
          >
            <h2 className="text-h2" style={{ marginBottom: 'var(--space-16)' }}>More coming soon</h2>
            <p className="text-body-lg" style={{ marginBottom: 'var(--space-32)', maxWidth: '500px' }}>
              Currently documenting more full-stack projects showcasing clean architecture and real-world problem solving.
            </p>
            <Button as="a" href="https://github.com/mohamedcody" variant="outline" style={{ gap: '8px' }}>
              Explore GitHub <ArrowRight size={16}/>
            </Button>
          </motion.div>

        </div>
      </div>
    </PageWrapper>
  );
};

export default Projects;
TSX

