const fs = require('fs');

const code = `import { Server, Layout, Database, BrainCircuit, AppWindow, Cloud, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
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

const servicesData = [
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
  { 
    icon: Cloud, 
    title: 'Cloud & DevOps', 
    features: ['Docker Containerization', 'CI/CD Pipelines', 'AWS & Cloud Deployment'] 
  },
  { 
    icon: Database, 
    title: 'Database Architecture', 
    features: ['Complex Schema Design', 'Query Optimization', 'Data Security'] 
  },
  { 
    icon: Layers, 
    title: 'System Architecture', 
    features: ['Microservices', 'Clean Code Practices', 'Code Refactoring'] 
  }
];

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
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % servicesData.length);
    }, 3500); // Slides every 3.5 seconds
    return () => clearInterval(timer);
  }, []);

  const visibleServices = [
    servicesData[startIndex % servicesData.length],
    servicesData[(startIndex + 1) % servicesData.length],
    servicesData[(startIndex + 2) % servicesData.length],
  ];

  return (
    <PageWrapper>
      <div style={{ paddingTop: 'var(--space-120)' }}>
        
        {/* Premium Hero Section */}
        <section className="container flex md-flex-col md-items-center" style={{ minHeight: '90vh', alignItems: 'center', gap: '40px', paddingTop: 'var(--space-64)' }}>
          
          {/* Left Content (Staggered Animation) */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="w-full"
            style={{ flex: '1 1 50%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <motion.p 
                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
                style={{ color: 'var(--accent-primary)', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '12px', fontSize: '1rem', textTransform: 'uppercase' }}
              >
                Hello! I am
              </motion.p>
              
              <motion.h1 
                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
                style={{ fontSize: 'clamp(3rem, 5.5vw, 5.5rem)', fontWeight: 800, lineHeight: 1.05, textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '12px', color: '#fff' }}
              >
                MOHAMED <br/><span style={{ color: 'var(--accent-primary)' }}>SAAD</span>
              </motion.h1>
              
              <motion.h2 
                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
                style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 500, color: 'rgba(255,255,255,0.7)', marginBottom: '32px', letterSpacing: '0.02em' }}
              >
                Software Engineer
              </motion.h2>
              
              <motion.p 
                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
                className="text-body" style={{ marginBottom: '48px', maxWidth: '480px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, fontSize: '1.05rem' }}
              >
                Building secure, scalable, and modern full-stack applications focused on speed, clean architecture, and exceptional user experiences.
              </motion.p>
              
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
                className="flex gap-16 flex-wrap"
              >
                <Link to="/projects" style={{ textDecoration: 'none' }}>
                  <motion.button 
                    whileHover={{ y: -3, boxShadow: '0 10px 25px rgba(0, 180, 216, 0.3)' }} 
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }} 
                    style={{ padding: '16px 32px', backgroundColor: 'var(--accent-primary)', color: '#000', borderRadius: '50px', fontWeight: 700, fontSize: '1.05rem', border: 'none', cursor: 'pointer', transition: 'background 0.2s' }}
                  >
                    View My Work
                  </motion.button>
                </Link>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                  <motion.button 
                    whileHover={{ y: -3, backgroundColor: 'rgba(255,255,255,0.08)' }} 
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }} 
                    style={{ padding: '16px 32px', backgroundColor: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50px', fontWeight: 600, fontSize: '1.05rem', cursor: 'pointer', transition: 'background 0.2s' }}
                  >
                    Contact Me
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right Content (Bigger Image with Spinning Glow) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full flex justify-center items-center relative"
            style={{ flex: '1 1 50%', display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ position: 'absolute', width: '100%', maxWidth: '480px', aspectRatio: '3/4', borderRadius: '32px', background: 'radial-gradient(ellipse at center, rgba(0,180,216,0.15) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 0 }}></div>
            
            <motion.div 
              whileHover={{ y: -8, rotate: 1 }} 
              transition={{ type: "spring", stiffness: 300, damping: 20 }} 
              className="relative z-10 glowing-border-wrapper" 
              style={{ 
                width: '100%', maxWidth: '420px', aspectRatio: '3/4', 
                borderRadius: '32px', 
                boxShadow: '0 30px 60px rgba(0,0,0,0.5), 0 0 50px rgba(0, 180, 216, 0.1)',
                padding: '3px',
                display: 'flex', justifyContent: 'center', alignItems: 'center'
              }}
            >
               <div className="glowing-border-inner">
                 <img 
                   src="/profile.jpg" 
                   alt="Mohamed Saad" 
                   style={{ 
                     width: '100%', height: '100%', 
                     objectFit: 'cover', 
                     objectPosition: 'center 15%',
                     display: 'block',
                     pointerEvents: 'none'
                   }} 
                   loading="eager" 
                 />
               </div>
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
                      <div style={{ width: '40px', height: '40px', backgroundColor: \`color-mix(in srgb, \${skill.color} 10%, transparent)\`, color: skill.color, borderRadius: 'var(--radius-sm)' }} className="flex items-center justify-center mb-16">
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

        {/* How I Can Help Section - Auto Slider */}
        <section>
          <div className="container">
            <div className="flex flex-col mb-48 gap-12">
              <h2 className="text-h2" style={{ textTransform: 'uppercase' }}>&lt; <span className="gradient-text">How I Can Help</span> /&gt;</h2>
              <p className="text-body-lg" style={{ maxWidth: '600px', color: 'var(--text-medium)' }}>Providing comprehensive full-stack solutions tailored to your unique technical needs.</p>
            </div>

            {/* Slider Container */}
            <div className="overflow-hidden w-full relative" style={{ padding: '20px 0' }}>
              <div className="flex gap-24" style={{ width: '100%', flexWrap: 'nowrap' }}>
                <AnimatePresence mode="popLayout">
                  {visibleServices.map((service) => (
                    <motion.div 
                      layout
                      key={service.title} 
                      initial={{ opacity: 0, x: 100, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -100, scale: 0.95 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      style={{ flex: '1 1 calc(33.333% - 16px)', minWidth: '320px', maxWidth: '400px' }}
                    >
                      <Card hoverEffect className="h-full flex flex-col">
                        <div style={{ width: '56px', height: '56px', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-24)', backgroundColor: 'rgba(255,255,255,0.03)' }}>
                           <service.icon size={28} color="var(--accent-primary)" />
                        </div>
                        <h3 className="text-h3" style={{ marginBottom: 'var(--space-16)', fontSize: '1.25rem' }}>{service.title}</h3>
                        <div style={{ width: '40px', height: '3px', backgroundColor: 'var(--accent-primary)', marginBottom: 'var(--space-24)', borderRadius: '2px' }}></div>
                        <ul className="flex flex-col gap-16" style={{ listStyle: 'none' }}>
                          {service.features.map((f, i) => (
                            <li key={i} className="flex items-center gap-12" style={{ color: 'var(--text-high)', fontSize: '1.05rem', lineHeight: '1.6' }}>
                              <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-primary)', borderRadius: '50%', flexShrink: 0 }} /> 
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
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
        
        <style>{\`
          @keyframes spin-glow {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
          }
          .glowing-border-wrapper {
            position: relative;
            overflow: hidden;
          }
          .glowing-border-wrapper::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            width: 150%;
            height: 150%;
            background: conic-gradient(from 0deg, transparent 70%, rgba(0, 180, 216, 0.8) 95%, rgba(255, 255, 255, 0.8) 100%);
            animation: spin-glow 4s linear infinite;
            z-index: 0;
          }
          .glowing-border-inner {
            position: relative;
            z-index: 1;
            border-radius: 29px;
            overflow: hidden;
            background-color: var(--surface-1);
            height: 100%;
            width: 100%;
          }
        \`}</style>
      </div>
    </PageWrapper>
  );
};

export default Home;
`;
fs.writeFileSync('src/pages/Home.tsx', code);
