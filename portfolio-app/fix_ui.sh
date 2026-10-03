#!/bin/bash
cd /home/mohamed-saad/front-end-vs/profileMain/portfolio-app

echo "Updating Card.tsx for better elevation..."
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
      whileHover={hoverEffect ? { y: -5, borderColor: 'var(--accent-primary)', boxShadow: '0 10px 30px rgba(0, 180, 216, 0.1)' } : {}}
      className={clsx("ui-card", className)}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        padding: 'var(--space-32)',
        transition: 'all var(--transition-fast)',
        ...props.style
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
TSX

echo "Updating Home.tsx for proper alignment and cohesive backgrounds..."
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
            <div className="flex flex-col mb-48 gap-16">
              <h2 className="text-h2" style={{ textTransform: 'uppercase' }}>&lt; <span className="gradient-text">Services</span> /&gt;</h2>
              <p className="text-body-lg" style={{ maxWidth: '600px' }}>Providing end-to-end software solutions focused on client problems and technical excellence.</p>
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
                    <ul className="flex flex-col gap-12" style={{ listStyle: 'none' }}>
                      {service.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-12 text-body"><CheckCircle2 size={16} color="var(--accent-primary)"/> {f}</li>
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
