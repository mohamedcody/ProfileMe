import { Server, Layout, Database, BrainCircuit, AppWindow, Cloud, Layers, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
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
  <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: 'var(--space-64) 0', overflow: 'hidden' }}>
    <motion.div 
      initial={{ width: '0%', opacity: 0 }}
      whileInView={{ width: '60%', opacity: 0.8 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      style={{ 
        height: '1px', 
        background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)', 
        boxShadow: '0 0 20px var(--accent-primary)', 
        borderRadius: '50%'
      }}
    />
  </div>
);

const Home = () => {
  const { t } = useTranslation();
  
  const [startIndex, setStartIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for right (next), -1 for left (prev)
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  useEffect(() => {
    // Pause auto-play if mouse is hovering over the slider
    if (isHovered) return;

    const timer = setInterval(() => {
      setDirection(1);
      setStartIndex((prev) => (prev + 1) % servicesData.length);
    }, 3500);
    
    return () => clearInterval(timer);
  }, [isHovered]);

  const handleNext = () => {
    setDirection(1);
    setStartIndex((prev) => (prev + 1) % servicesData.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setStartIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);
  };

  const visibleServices = Array.from({ length: cardsToShow }, (_, i) =>
    servicesData[(startIndex + i) % servicesData.length]
  );

  return (
    <PageWrapper>
      <div style={{ paddingTop: 'var(--space-120)' }}>
        
        {/* Premium Hero Section */}
        <section aria-label="Hero" className="container flex md-flex-col md-items-center" style={{ minHeight: '90vh', alignItems: 'center', gap: '40px', paddingTop: 'var(--space-64)' }}>
          <motion.div 
            initial="hidden" animate="visible"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
            className="w-full" style={{ flex: '1 1 50%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } } }} style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--accent-primary)' }}></div>
                <p style={{ color: 'var(--accent-primary)', fontWeight: 600, letterSpacing: '0.2em', fontSize: '0.9rem', textTransform: 'uppercase', margin: 0 }}>{t('Hello, I am')}</p>
              </motion.div>
              <motion.h1 
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}
                style={{ 
                  fontSize: 'clamp(2.75rem, 8vw, 7.5rem)', 
                  fontWeight: 900, 
                  lineHeight: 0.95, 
                  textTransform: 'uppercase', 
                  letterSpacing: '-0.03em', 
                  marginBottom: '32px', 
                  position: 'relative',
                  zIndex: 20,
                  wordBreak: 'break-word'
                }}
              >
                <span style={{ color: '#fff', display: 'block' }}>MOHAMED</span>
                <span style={{ 
                  color: 'transparent', 
                  WebkitTextStroke: '2px var(--accent-primary)', 
                  display: 'block',
                  marginInlineStart: '8%',
                  textShadow: '0 0 30px rgba(0, 180, 216, 0.2)'
                }}>SAAD</span>
              </motion.h1>
              <motion.h2 variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }} style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 500, color: 'rgba(255,255,255,0.85)', marginBottom: '32px', letterSpacing: '0.02em' }}>Software Engineer</motion.h2>
              <motion.p variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }} className="text-body" style={{ marginBottom: '48px', maxWidth: '480px', color: 'rgba(255,255,255,0.78)', lineHeight: 1.6, fontSize: '1.05rem' }}>Building secure, scalable, and modern full-stack applications focused on speed, clean architecture, and exceptional user experiences.</motion.p>
              
              <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }} className="flex gap-16 flex-wrap">
                <Link to="/projects" className="btn-solid-cyber" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  {t('View My Work')}
                </Link>
                <Link to="/contact" className="btn-outline-cyber" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  {t('Contact Me')}
                </Link>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="w-full flex justify-center items-center relative" style={{ flex: '1 1 50%', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', width: '100%', maxWidth: '480px', aspectRatio: '3/4', borderRadius: '32px', background: 'radial-gradient(ellipse at center, rgba(0,180,216,0.15) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 0 }}></div>
            
            <motion.div whileHover={{ y: -8, rotate: 1 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="relative z-10 glowing-border-wrapper" style={{ width: '100%', maxWidth: '420px', aspectRatio: '3/4', borderRadius: '32px', boxShadow: '0 30px 60px rgba(0,0,0,0.5), 0 0 50px rgba(0, 180, 216, 0.1)', padding: '3px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
               <div className="glowing-border-inner">
                 <img src="/profile.jpg" alt="Mohamed Saad" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%', display: 'block', pointerEvents: 'none' }} loading="eager" />
               </div>
            </motion.div>
          </motion.div>
        </section>

        <GlowingDivider />

        {/* About Section */}
        <section aria-label="About Me" className="container">
          <div className="flex md-flex-col gap-64 items-center">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} style={{ flex: 1 }}>
              <div style={{ marginBottom: 'var(--space-32)' }}>
                <h2 className="text-h2" style={{ textTransform: 'uppercase', marginBottom: 'var(--space-8)' }}>&lt; <span className="gradient-text">{t('About Me')}</span> /&gt;</h2>
                <div style={{ width: '40px', height: '3px', backgroundColor: 'var(--accent-primary)', borderRadius: '2px' }}></div>
              </div>
              <p className="text-body-lg" style={{ marginBottom: 'var(--space-24)', color: 'rgba(255, 255, 255, 0.78)' }} dangerouslySetInnerHTML={{ __html: t('about_p1') }} />
              <p className="text-body-lg" style={{ marginBottom: 'var(--space-32)', color: 'rgba(255, 255, 255, 0.78)' }}>Instead of just writing code, I focus on <span style={{ color: 'var(--accent-primary)' }}>solving real business problems</span>. I integrate modern tools, including AI, to improve productivity, while maintaining full responsibility for architectural decisions, security, and maintainability.</p>
              <div style={{ borderInlineStart: '3px solid var(--accent-primary)', paddingInlineStart: 'var(--space-24)' }} className="text-body">
                <em style={{ color: 'var(--text-high)' }}>{t('about_quote')}</em>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} style={{ flex: 1 }}>
              <div className="grid grid-cols-2 gap-16">
                {[
                  { icon: Server, title: 'Backend', desc: 'Java, Spring Boot', color: 'var(--accent-primary)' },
                  { icon: Layout, title: 'Frontend', desc: 'React, Next.js', color: 'var(--accent-secondary)' },
                  { icon: Database, title: 'Database', desc: 'PostgreSQL, SQL', color: 'var(--success)' },
                  { icon: BrainCircuit, title: 'AI', desc: 'Integration & Parsing', color: '#a855f7' },
                ].map((skill, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                    <Card hoverEffect className="flex flex-col items-center text-center" style={{ padding: 'var(--space-24) var(--space-16)' }}>
                      <div style={{ width: '40px', height: '40px', backgroundColor: `color-mix(in srgb, ${skill.color} 10%, transparent)`, color: skill.color, borderRadius: 'var(--radius-sm)' }} className="flex items-center justify-center mb-16"><skill.icon size={20} /></div>
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

        {/* {t('How I Can Help')} Section - Auto Slider w/ Controls */}
        <section aria-label="How I Can Help">
          <div className="container">
            <div className="flex justify-between items-end mb-48 gap-24 flex-wrap" style={{ alignItems: 'flex-end' }}>
              <div className="flex flex-col gap-12">
                <h2 className="text-h2" style={{ textTransform: 'uppercase' }}>&lt; <span className="gradient-text">How I Can Help</span> /&gt;</h2>
                <p className="text-body-lg" style={{ maxWidth: '600px', color: 'rgba(255, 255, 255, 0.78)' }}>{t('How_subtitle')}</p>
              </div>

              {/* Navigation Controls & Pagination Indicator */}
              <div className="flex gap-16 items-center">
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginInlineEnd: '8px' }}>
                  {servicesData.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setStartIndex(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      style={{
                        width: startIndex === i ? '20px' : '8px',
                        height: '8px',
                        borderRadius: '4px',
                        backgroundColor: startIndex === i ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.2)',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                        transition: 'all 0.3s ease'
                      }}
                    />
                  ))}
                </div>
                <motion.button 
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,180,216,0.1)', color: 'var(--accent-primary)', borderColor: 'var(--accent-primary)' }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handlePrev}
                  aria-label="Previous services"
                  style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.02)', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', transition: 'all 0.2s' }}
                >
                  <ChevronLeft size={24} />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,180,216,0.1)', color: 'var(--accent-primary)', borderColor: 'var(--accent-primary)' }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleNext}
                  aria-label="Next services"
                  style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.02)', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', transition: 'all 0.2s' }}
                >
                  <ChevronRight size={24} />
                </motion.button>
              </div>
            </div>

            {/* Slider Container with Hover Pause */}
            <div 
              className="overflow-hidden w-full relative" 
              style={{ padding: '20px 0' }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="flex gap-24" style={{ width: '100%', flexWrap: 'nowrap' }}>
                <AnimatePresence mode="popLayout">
                  {visibleServices.map((service) => (
                    <motion.div 
                      layout
                      key={service.title} 
                      initial={{ opacity: 0, x: direction > 0 ? 100 : -100, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: direction > 0 ? -100 : 100, scale: 0.95 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      style={{ 
                        flex: cardsToShow === 1 ? '1 1 100%' : cardsToShow === 2 ? '1 1 calc(50% - 12px)' : '1 1 calc(33.333% - 16px)',
                        width: cardsToShow === 1 ? '100%' : 'auto',
                        minWidth: 0,
                        maxWidth: cardsToShow === 1 ? '100%' : cardsToShow === 2 ? '500px' : '400px'
                      }}
                    >
                      <Card hoverEffect className="h-full flex flex-col">
                        <div style={{ width: '56px', height: '56px', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-24)', backgroundColor: 'rgba(255,255,255,0.03)' }}>
                           <service.icon size={28} color="var(--accent-primary)" />
                        </div>
                        <h3 className="text-h3" style={{ marginBottom: 'var(--space-16)', fontSize: '1.25rem' }}>{t(service.title)}</h3>
                        <div style={{ width: '40px', height: '3px', backgroundColor: 'var(--accent-primary)', marginBottom: 'var(--space-24)', borderRadius: '2px' }}></div>
                        <ul className="flex flex-col gap-16" style={{ listStyle: 'none' }}>
                          {service.features.map((f, i) => (
                            <li key={i} className="flex items-center gap-12" style={{ color: 'var(--text-high)', fontSize: '1.05rem', lineHeight: '1.6' }}>
                              <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent-primary)', borderRadius: '50%', flexShrink: 0 }} /> 
                              <span>{t(f)}</span>
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
        <section aria-label="Tools and Technologies" style={{ padding: '0 0 var(--space-120)', overflow: 'hidden' }}>
          <div className="container flex flex-col gap-12 text-center items-center" style={{ marginBottom: '80px' }}>
            <h2 className="text-h2" style={{ textTransform: 'uppercase' }}>&lt; <span className="gradient-text">{t('Tools in my Toolbox')}</span> /&gt;</h2>
            <p className="text-body-lg" style={{ maxWidth: '600px', color: 'rgba(255, 255, 255, 0.78)' }}>
              A carefully curated stack of technologies I use to build scalable, high-performance applications.
            </p>
          </div>

          <div className="relative w-full" style={{ padding: 'var(--space-16) 0' }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '150px', background: 'linear-gradient(to right, var(--bg-base), transparent)', zIndex: 2, pointerEvents: 'none' }}></div>
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '150px', background: 'linear-gradient(to left, var(--bg-base), transparent)', zIndex: 2, pointerEvents: 'none' }}></div>
            
            <div className="animate-marquee gap-24 px-12" aria-label="Tools marquee">
              {tools.map((tool, idx) => (
                <div 
                  key={`tool-${idx}`} 
                  className="tool-card"
                  style={{ minWidth: '180px', height: '180px', flexShrink: 0, backgroundColor: 'rgba(255, 255, 255, 0.02)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 'var(--radius-lg)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-24)', cursor: 'pointer' }}
                >
                   <img src={tool.icon} alt="" aria-hidden="true" style={{ width: '64px', height: '64px', filter: tool.filter || 'none', objectFit: 'contain' }} />
                   <span className="label-spaced" style={{ fontSize: '0.75rem', color: 'var(--text-medium)', fontWeight: 600 }}>{tool.name}</span>
                </div>
              ))}
              {tools.map((tool, idx) => (
                <div 
                  key={`tool-dup-${idx}`} 
                  aria-hidden="true"
                  className="tool-card"
                  style={{ minWidth: '180px', height: '180px', flexShrink: 0, backgroundColor: 'rgba(255, 255, 255, 0.02)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: 'var(--radius-lg)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-24)', cursor: 'pointer' }}
                >
                   <img src={tool.icon} alt="" style={{ width: '64px', height: '64px', filter: tool.filter || 'none', objectFit: 'contain' }} />
                   <span className="label-spaced" style={{ fontSize: '0.75rem', color: 'var(--text-medium)', fontWeight: 600 }}>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        

        <GlowingDivider />

        {/* Trusted Partners Section */}
        <section aria-label="Trusted Partners" style={{ padding: '0 0 var(--space-120)' }}>
          <div className="container flex flex-col gap-12 text-center items-center" style={{ marginBottom: '64px' }}>
            <h2 className="text-h2" style={{ textTransform: 'uppercase' }}>&lt; <span className="gradient-text">{t('Trusted Partners')}</span> /&gt;</h2>
            <p className="text-body-lg" style={{ maxWidth: '600px', color: 'rgba(255, 255, 255, 0.78)' }}>
              {t('partners_subtitle')}
            </p>
          </div>

          <div className="container flex justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              style={{ maxWidth: '850px', width: '100%' }}
            >
              <Card hoverEffect className="flex md-flex-col gap-32 items-center" style={{ padding: '40px', backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(0, 180, 216, 0.2)' }}>
                
                {/* Avatar / Visual Side */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', minWidth: '180px' }}>
                  <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-primary), #0077b6)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px rgba(0, 180, 216, 0.3)', overflow: 'hidden', border: '2px solid rgba(0, 180, 216, 0.5)' }}>
                    <img src="/ahmed.jpg" alt="Ahmed Esam" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff' }}>{t('Ahmed Esam')}</h3>
                    <p style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: '4px' }}>{t('Ahmed_Role')}</p>
                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '10px' }}>
                      <a href="https://github.com/AhmedEsam-415" target="_blank" rel="noopener noreferrer" aria-label="Ahmed Esam GitHub" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                      </a>
                      <a href="https://www.linkedin.com/in/ahmed-esam-0bb173297/" target="_blank" rel="noopener noreferrer" aria-label="Ahmed Esam LinkedIn" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bio Side */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px', justifyContent: 'center' }} className="md-justify-center">
                    {['React', 'JavaScript', 'Material UI', 'CSS'].map(tech => (
                      <span key={tech} style={{ padding: '4px 12px', borderRadius: '50px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.85rem', color: 'var(--text-high)', fontWeight: 600 }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p style={{ color: 'rgba(255, 255, 255, 0.78)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'start' }} className="md-text-center">
                    {t('Ahmed_Bio')}
                  </p>
                </div>

              </Card>
            </motion.div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
            <Link to="/team" className="btn-solid-cyber" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px', fontSize: '1.1rem', borderRadius: '12px', textDecoration: 'none' }}>
              {t('MEET THE')} {t('TEAM')}
            </Link>
          </div>
    
        </section>
        <style>{`
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
        `}</style>
      </div>
    </PageWrapper>
  );
};

export default Home;
