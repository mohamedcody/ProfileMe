#!/bin/bash
cd /home/mohamed-saad/front-end-vs/profileMain/portfolio-app

echo "Updating Card.tsx for juicier hover effects..."
cat << 'TSX' > src/components/ui/Card.tsx
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';

interface CardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card = ({ children, className, hoverEffect = false, ...props }: CardProps) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { 
        y: -8, 
        scale: 1.02,
        borderColor: 'rgba(0, 180, 216, 0.4)', 
        boxShadow: '0 20px 40px rgba(0, 180, 216, 0.15)' 
      } : {}}
      transition={hoverEffect ? { type: "spring", stiffness: 300, damping: 20 } : undefined}
      className={clsx("ui-card", className)}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        padding: 'var(--space-32)',
        ...props.style
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
TSX

echo "Replacing Home.tsx (Fixing Services spacing and text clarity)..."
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
            <div className="flex gap-24 flex-wrap">
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
            <div className="relative z-10 flex items-center justify-center text-center" style={{ width: '100%', maxWidth: '340px', aspectRatio: '3/4', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 'var(--radius-lg)' }}>
               <p className="text-sm">Portrait Placeholder</p>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="container" style={{ padding: 'var(--space-120) var(--space-32)', borderTop: '1px solid var(--border-subtle)' }}>
          <div className="flex md-flex-col gap-64 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
              style={{ flex: 1 }}
            >
              <div style={{ marginBottom: 'var(--space-32)' }}>
                <h2 className="text-h2" style={{ textTransform: 'uppercase', marginBottom: 'var(--space-8)' }}>
                  &lt; <span className="gradient-text">About Me</span> /&gt;
                </h2>
                <div style={{ width: '40px', height: '3px', backgroundColor: 'var(--accent-primary)', borderRadius: '2px' }}></div>
              </div>
              
              <p className="text-body-lg" style={{ marginBottom: 'var(--space-24)' }}>
                I am a <strong style={{ color: 'var(--text-high)' }}>Software Engineer</strong> with strong backend experience and a deep understanding of application development and engineering fundamentals.
              </p>
              <p className="text-body-lg" style={{ marginBottom: 'var(--space-32)' }}>
                Instead of just writing code, I focus on <span style={{ color: 'var(--accent-primary)' }}>solving real business problems</span>. 
                I integrate modern tools, including AI, to improve productivity, while maintaining full responsibility for architectural decisions, security, and maintainability.
              </p>
              <div style={{ borderLeft: '3px solid var(--accent-primary)', paddingLeft: 'var(--space-24)' }} className="text-body">
                <em style={{ color: 'var(--text-high)' }}>"I believe in building practical, secure, and modern web applications where every technology used has a clear purpose."</em>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }}
              style={{ flex: 1 }}
            >
              <div className="grid grid-cols-2 gap-16">
                {[
                  { icon: Server, title: 'Backend', desc: 'Java, Spring Boot', color: 'var(--accent-primary)' },
                  { icon: Layout, title: 'Frontend', desc: 'React, Next.js', color: 'var(--accent-secondary)' },
                  { icon: Database, title: 'Database', desc: 'PostgreSQL, SQL', color: 'var(--success)' },
                  { icon: BrainCircuit, title: 'AI', desc: 'Integration & Parsing', color: '#a855f7' },
                ].map((skill, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                    <Card hoverEffect className="flex flex-col items-center text-center" style={{ padding: 'var(--space-24) var(--space-16)' }}>
                      <div style={{ width: '40px', height: '40px', backgroundColor: `color-mix(in srgb, ${skill.color} 10%, transparent)`, color: skill.color, borderRadius: 'var(--radius-sm)' }} className="flex items-center justify-center mb-16">
                        <skill.icon size={20} />
                      </div>
                      <h3 className="text-h3" style={{ fontSize: '18px', marginBottom: 'var(--space-4)' }}>{skill.title}</h3>
                      <p className="text-caption" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>{skill.desc}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </section>

        {/* Services Section */}
        <section style={{ padding: 'var(--space-96) 0 var(--space-120)', borderTop: '1px solid var(--border-subtle)' }}>
          <div className="container">
            <div className="flex flex-col mb-48 gap-12">
              <h2 className="text-h2" style={{ textTransform: 'uppercase' }}>&lt; <span className="gradient-text">Services</span> /&gt;</h2>
              <p className="text-body-lg" style={{ maxWidth: '600px', color: 'var(--text-medium)' }}>Providing end-to-end software solutions focused on client problems and technical excellence.</p>
            </div>

            <div className="grid grid-cols-3 lg-grid-cols-2 md-grid-cols-1 gap-24">
              {[
                { title: 'Backend & REST APIs', features: ['Robust API Development', 'Database Integration', 'Secure Authentication'] },
                { title: 'Full-Stack Development', features: ['Responsive Web Apps', 'Clean UI/UX Implementation', 'Project Improvements'] },
                { title: 'AI Integration', features: ['Semantic Search', 'Document Parsing', 'AI-Assisted Features'] },
              ].map((service, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.15 }} viewport={{ once: true }}>
                  <Card hoverEffect className="h-full">
                    <h3 className="text-h3" style={{ marginBottom: 'var(--space-16)' }}>{service.title}</h3>
                    <div style={{ width: '40px', height: '3px', backgroundColor: 'var(--accent-primary)', marginBottom: 'var(--space-24)', borderRadius: '2px' }}></div>
                    <ul className="flex flex-col gap-16" style={{ listStyle: 'none' }}>
                      {service.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-12" style={{ color: '#f4f4f5', fontSize: '1.05rem', lineHeight: '1.6' }}>
                          <CheckCircle2 size={20} color="var(--accent-primary)" style={{ marginTop: '2px', flexShrink: 0 }}/> 
                          <span>{f}</span>
                        </li>
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

echo "Rewriting Footer.tsx for a clean layout..."
cat << 'TSX' > src/components/Footer.tsx
import { Link } from 'react-router-dom';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--bg-base)', padding: 'var(--space-96) 0 var(--space-32)', marginTop: 'auto', position: 'relative' }}>
      
      {/* Subtle Top Glow Effect */}
      <div style={{ position: 'absolute', top: 0, left: '0', right: '0', height: '1px', backgroundColor: 'var(--border-subtle)' }}></div>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '40%', height: '1px', background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 100%)', opacity: 0.5, boxShadow: '0 0 15px var(--accent-primary)' }}></div>

      <div className="container">
        <div className="flex justify-between md-flex-col gap-64" style={{ marginBottom: 'var(--space-64)' }}>
          
          <div style={{ flex: '1 1 300px' }}>
            <h3 className="text-h3" style={{ marginBottom: 'var(--space-16)' }}>Mohamed<span style={{ color: 'var(--accent-primary)' }}>.</span></h3>
            <p className="text-body-lg" style={{ marginBottom: 'var(--space-24)', maxWidth: '350px' }}>
              Software Engineer building practical, secure, and modern web applications.
            </p>
          </div>

          <div style={{ flex: '1 1 200px' }}>
            <h4 className="label-spaced" style={{ marginBottom: 'var(--space-24)' }}>Quick Links</h4>
            <div className="flex flex-col gap-16 text-body">
              <Link to="/" style={{ transition: 'color var(--transition-fast)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-high)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-medium)'}>Home</Link>
              <Link to="/projects" style={{ transition: 'color var(--transition-fast)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-high)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-medium)'}>Projects</Link>
              <Link to="/contact" style={{ transition: 'color var(--transition-fast)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-high)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-medium)'}>Contact</Link>
            </div>
          </div>

          <div style={{ flex: '1 1 300px' }}>
            <h4 className="label-spaced" style={{ marginBottom: 'var(--space-24)' }}>Contact Info</h4>
            <div className="flex flex-col gap-16">
              <a href="mailto:mohamedcody18@gmail.com" className="flex items-center gap-12 text-body transition-colors" style={{ transition: 'color var(--transition-fast)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-high)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-medium)'}>
                <Mail size={20} color="var(--accent-primary)" /> mohamedcody18@gmail.com
              </a>
              <a href="tel:+201148415128" className="flex items-center gap-12 text-body transition-colors" style={{ transition: 'color var(--transition-fast)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-high)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-medium)'}>
                <Phone size={20} color="var(--accent-primary)" /> +20 1148415128
              </a>
              <a href="https://github.com/mohamedcody" target="_blank" rel="noopener noreferrer" className="flex items-center gap-12 text-body transition-colors" style={{ transition: 'color var(--transition-fast)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-high)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-medium)'}>
                <Github size={20} color="var(--accent-primary)" /> GitHub Profile
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-12 text-body transition-colors" style={{ transition: 'color var(--transition-fast)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-high)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-medium)'}>
                <Linkedin size={20} color="var(--accent-primary)" /> LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-sm" style={{ paddingTop: 'var(--space-32)', borderTop: '1px solid var(--border-subtle)' }}>
          &copy; {new Date().getFullYear()} Mohamed Saad. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
TSX

