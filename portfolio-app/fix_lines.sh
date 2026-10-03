#!/bin/bash
cd /home/mohamed-saad/front-end-vs/profileMain/portfolio-app

echo "Rewriting Home.tsx to include uniform glowing dividers..."
cat << 'TSX' > src/pages/Home.tsx
import { Server, Layout, Database, BrainCircuit, AppWindow } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { PageWrapper } from '../components/ui/PageWrapper';

const tools = [
  { name: 'JAVA', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'SPRING BOOT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
  { name: 'POSTGRESQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'REACT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'NEXT.JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', filter: 'invert(1)' },
  { name: 'TYPESCRIPT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'DOCKER', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'TAILWIND CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' }
];

// Reusable Glowing Divider Component for uniform spacing and design
const GlowingDivider = () => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: 'var(--space-64) 0' }}>
    <div style={{ 
      width: '60%', 
      height: '1px', 
      background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)', 
      boxShadow: '0 0 15px var(--accent-primary)', 
      opacity: 0.6,
      borderRadius: '50%'
    }}></div>
  </div>
);

const Home = () => {
  return (
    <PageWrapper>
      <div style={{ paddingTop: 'var(--space-120)' }}>
        
        {/* Hero Section */}
        <section className="container flex md-flex-col md-items-center gap-64" style={{ minHeight: '80vh', alignItems: 'center' }}>
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
            <motion.div whileHover={{ scale: 1.03, rotate: 1 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="relative z-10" style={{ width: '100%', maxWidth: '340px', aspectRatio: '3/4', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.15)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.6)' }}>
               <img src="/profile.jpg" alt="Mohamed Saad" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="eager" />
            </motion.div>
          </motion.div>
        </section>

        <GlowingDivider />

        {/* About Section */}
        <section className="container" style={{ padding: '0 var(--space-32)' }}>
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

        <GlowingDivider />

        {/* How I Can Help Section */}
        <section>
          <div className="container">
            <div className="flex flex-col mb-48 gap-12">
              <h2 className="text-h2" style={{ textTransform: 'uppercase' }}>&lt; <span className="gradient-text">How I Can Help</span> /&gt;</h2>
              <p className="text-body-lg" style={{ maxWidth: '600px', color: 'var(--text-medium)' }}>Providing comprehensive full-stack solutions tailored to your unique technical needs.</p>
            </div>

            <div className="grid grid-cols-3 lg-grid-cols-2 md-grid-cols-1 gap-24">
              {[
                { 
                  icon: Server, 
                  title: 'Backend & REST APIs', 
                  features: ['Robust API Development', 'Database Integration', 'Secure Authentication'] 
                },
                { 
                  icon: AppWindow, 
                  title: 'Full-Stack Development', 
                  features: ['Responsive Web Apps', 'Clean UI/UX Implementation', 'Project Improvements'] 
                },
                { 
                  icon: BrainCircuit, 
                  title: 'AI Integration', 
                  features: ['Semantic Search', 'Document Parsing', 'AI-Assisted Features'] 
                },
              ].map((service, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.15 }} viewport={{ once: true }}>
                  <Card hoverEffect className="h-full flex flex-col">
                    <div style={{ width: '48px', height: '48px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-24)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                       <service.icon size={22} color="var(--text-high)" />
                    </div>
                    <h3 className="text-h3" style={{ marginBottom: 'var(--space-16)' }}>{service.title}</h3>
                    <div style={{ width: '40px', height: '3px', backgroundColor: 'var(--accent-primary)', marginBottom: 'var(--space-24)', borderRadius: '2px' }}></div>
                    <ul className="flex flex-col gap-16" style={{ listStyle: 'none' }}>
                      {service.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-12" style={{ color: '#f4f4f5', fontSize: '1.05rem', lineHeight: '1.6' }}>
                          <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-primary)', borderRadius: '50%', flexShrink: 0 }} /> 
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

        <GlowingDivider />

        {/* Tools Marquee Section */}
        <section style={{ padding: '0 0 var(--space-120)', overflow: 'hidden' }}>
          <div className="container flex flex-col gap-12 text-center items-center" style={{ marginBottom: '80px' }}>
            <h2 className="text-h2" style={{ textTransform: 'uppercase' }}>&lt; <span className="gradient-text">Tools in my Toolbox</span> /&gt;</h2>
            <p className="text-body-lg" style={{ maxWidth: '600px', color: 'var(--text-medium)' }}>
              A carefully curated stack of technologies I use to build scalable, high-performance applications.
            </p>
          </div>

          <div className="relative w-full" style={{ padding: 'var(--space-16) 0' }}>
            {/* Fade Gradients for smooth entering/exiting */}
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '150px', background: 'linear-gradient(to right, var(--bg-base), transparent)', zIndex: 2, pointerEvents: 'none' }}></div>
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '150px', background: 'linear-gradient(to left, var(--bg-base), transparent)', zIndex: 2, pointerEvents: 'none' }}></div>
            
            <div className="animate-marquee gap-24 px-12">
              {[...tools, ...tools].map((tool, idx) => (
                <div 
                  key={idx} 
                  className="tool-card"
                  style={{ 
                    minWidth: '180px', height: '180px', flexShrink: 0, 
                    backgroundColor: 'rgba(255, 255, 255, 0.02)', backdropFilter: 'blur(10px)', 
                    border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 'var(--radius-lg)', 
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-24)',
                    cursor: 'pointer'
                  }}
                >
                   <img src={tool.icon} alt={tool.name} style={{ width: '64px', height: '64px', filter: tool.filter || 'none', objectFit: 'contain' }} />
                   <span className="label-spaced" style={{ fontSize: '0.75rem', color: 'var(--text-medium)', fontWeight: 600 }}>{tool.name}</span>
                </div>
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
