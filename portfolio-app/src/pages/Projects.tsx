import { ExternalLink, Image as ImageIcon, Code2, Rocket, Bot, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '../components/ui/Button';
import { ImageGalleryModal } from '../components/ui/ImageGalleryModal';
import { PageWrapper } from '../components/ui/PageWrapper';

type ProjectCategory = 'all' | 'fullstack' | 'ai-bots' | 'frontend';

interface ProjectItem {
  id: string;
  category: 'fullstack' | 'ai-bots' | 'frontend';
  number: string;
  titleKey: string;
  titleRaw?: string;
  statusBadge: {
    textKey?: string;
    textRaw?: string;
    bg: string;
    color: string;
    border: string;
  };
  descKey: string;
  decisionsKey: string;
  decisionPoints: string[];
  techStack: string[];
  image: string;
  galleryImages?: { src: string; caption: string }[];
  isInteractiveBot?: boolean;
  demoUrl?: string;
  demoToast?: string;
  sourceCodeUrl: string;
  reverseLayout?: boolean;
}

const Projects = () => {
  const { t } = useTranslation();
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const jobfinderGalleryImages = [
    { src: '/image/1.png', caption: 'JobFinder Platform - Main Dashboard and Overview' },
    { src: '/image/2.png', caption: 'Advanced Job Search and Filtering Interface' },
    { src: '/image/3.png', caption: 'AI-Assisted Resume Parsing Results' },
    { src: '/image/4.png', caption: 'User Profile and Saved Jobs' },
    { src: '/image/5.png', caption: 'Employer Dashboard and Analytics' },
    { src: '/image/6.png', caption: 'Application Tracking and Management' }
  ];

  const ahlMasrGalleryImages = [
    { src: '/image/ahlmasr/hero.png', caption: 'Ahl Masr Restaurant - Landing Page Hero & Brand Identity' },
    { src: '/image/ahlmasr/offers.png', caption: 'Royal Savings & Special Combo Deals' },
    { src: '/image/ahlmasr/menu.png', caption: 'Official Restaurant Menu & Meal Customization' },
    { src: '/image/ahlmasr/gallery.png', caption: 'Food Dishes & Atmosphere Visual Gallery' },
    { src: '/image/ahlmasr/about.png', caption: 'Restaurant Story, Branches & Hotline Direct Ordering' }
  ];

  const [activeGalleryImages, setActiveGalleryImages] = useState(jobfinderGalleryImages);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const categories: { id: ProjectCategory; labelKey: string }[] = [
    { id: 'all', labelKey: 'filter_all' },
    { id: 'fullstack', labelKey: 'filter_fullstack' },
    { id: 'ai-bots', labelKey: 'filter_ai' },
    { id: 'frontend', labelKey: 'filter_frontend' }
  ];

  const projectsData: ProjectItem[] = [
    {
      id: 'jobfinder',
      category: 'fullstack',
      number: '01',
      titleKey: '',
      titleRaw: 'JobFinder',
      statusBadge: {
        textKey: 'IN DEVELOPMENT',
        bg: 'rgba(234, 179, 8, 0.1)',
        color: '#eab308',
        border: 'rgba(234, 179, 8, 0.2)'
      },
      descKey: 'JobFinder_Desc',
      decisionsKey: 'JobFinder_Decisions',
      decisionPoints: ['JobFinder_Dec1', 'JobFinder_Dec2', 'JobFinder_Dec3', 'JobFinder_Dec4'],
      techStack: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'JWT', 'Vector Search'],
      image: '/image/1.png',
      galleryImages: jobfinderGalleryImages,
      demoToast: 'Platform is currently under development and will be hosted soon! 🚀',
      sourceCodeUrl: 'https://github.com/mohamedcody/jobfinder'
    },
    {
      id: 'expense-bot',
      category: 'ai-bots',
      number: '02',
      titleKey: '',
      titleRaw: 'Expense Tracker Bot',
      statusBadge: {
        textRaw: 'TELEGRAM BOT',
        bg: 'rgba(0, 180, 216, 0.1)',
        color: 'var(--accent-primary)',
        border: 'rgba(0, 180, 216, 0.25)'
      },
      descKey: 'ExpenseBot_Desc',
      decisionsKey: 'JobFinder_Decisions',
      decisionPoints: ['ExpenseBot_Dec1', 'ExpenseBot_Dec2', 'ExpenseBot_Dec3', 'ExpenseBot_Dec4'],
      techStack: ['Java', 'Spring Boot', 'Telegram API', 'REST APIs', 'PostgreSQL'],
      image: '',
      isInteractiveBot: true,
      demoUrl: 'https://t.me/Mohamed20_Expense_bot',
      sourceCodeUrl: 'https://github.com/mohamedcody/expense-tracker-bot',
      reverseLayout: true
    },
    {
      id: 'ahl-masr',
      category: 'frontend',
      number: '03',
      titleKey: 'AhlMasr_Title',
      statusBadge: {
        textKey: 'LIVE_PROJECT',
        bg: 'rgba(34, 197, 94, 0.1)',
        color: '#22c55e',
        border: 'rgba(34, 197, 94, 0.2)'
      },
      descKey: 'AhlMasr_Desc',
      decisionsKey: 'JobFinder_Decisions',
      decisionPoints: ['AhlMasr_Dec1', 'AhlMasr_Dec2', 'AhlMasr_Dec3', 'AhlMasr_Dec4'],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'REST APIs', 'Responsive UX'],
      image: '/image/ahlmasr/hero.png',
      galleryImages: ahlMasrGalleryImages,
      demoToast: 'Ahl Masr digital platform is active & accepting orders! 🍗',
      sourceCodeUrl: 'https://github.com/mohamedcody/marwa'
    }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

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
              backgroundColor: 'rgba(0, 180, 216, 0.92)',
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
        {/* Page Header */}
        <div style={{ backgroundColor: 'var(--surface-2)', padding: 'var(--space-64) 0', textAlign: 'center', borderBottom: '1px solid var(--border-subtle)', marginBottom: 'var(--space-48)' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-display" style={{ marginBottom: 'var(--space-16)', color: '#fff', textTransform: 'uppercase' }}
          >
            CASE <span style={{ color: 'var(--accent-primary)' }}>STUDIES</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="label-spaced text-caption" style={{ color: 'var(--text-muted)' }}
          >
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-high)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>{t('Home')}</Link> &rsaquo; <span style={{ color: 'var(--accent-primary)' }}>{t('CASE STUDIES')}</span>
          </motion.p>
        </div>

        <div className="container" style={{ padding: '0 var(--space-24) var(--space-120)' }}>
          
          {/* Interactive Filter Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--space-64)' }}>
            <div 
              style={{
                display: 'inline-flex',
                flexWrap: 'wrap',
                gap: '8px',
                padding: '6px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '50px',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}
            >
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    style={{
                      position: 'relative',
                      border: 'none',
                      background: 'transparent',
                      color: isActive ? '#fff' : 'var(--text-medium)',
                      padding: '10px 20px',
                      borderRadius: '50px',
                      fontSize: '0.9rem',
                      fontWeight: isActive ? 700 : 500,
                      cursor: 'pointer',
                      transition: 'color 0.25s ease',
                      outline: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-filter-indicator"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundColor: 'var(--accent-primary)',
                          borderRadius: '50px',
                          zIndex: 0,
                          boxShadow: '0 0 20px rgba(0, 180, 216, 0.4)'
                        }}
                        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                      />
                    )}
                    <span style={{ position: 'relative', zIndex: 1, color: isActive ? '#000' : 'inherit' }}>
                      {t(cat.labelKey)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Projects List with PopLayout Transition */}
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const title = project.titleRaw || t(project.titleKey);
              const badgeText = project.statusBadge.textRaw || (project.statusBadge.textKey ? t(project.statusBadge.textKey) : '');

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  style={{ marginBottom: 'var(--space-120)' }}
                >
                  <div
                    className={`flex md-flex-col gap-64 items-center ${project.reverseLayout ? 'md-flex-col-reverse' : ''}`}
                    style={{ flexDirection: project.reverseLayout ? 'row-reverse' : 'row' }}
                  >
                    {/* Visual Media Column */}
                    <div className="w-full relative" style={{ flex: 1 }}>
                      <div
                        style={{
                          position: 'absolute',
                          top: '-40px',
                          [project.reverseLayout ? 'right' : 'left']: '-20px',
                          fontSize: 'clamp(100px, 15vw, 180px)',
                          fontWeight: 800,
                          color: 'rgba(255,255,255,0.03)',
                          zIndex: 0,
                          lineHeight: 1,
                          userSelect: 'none'
                        }}
                      >
                        {project.number}
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.025, y: -6 }}
                        transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                        onClick={() => {
                          if (project.galleryImages) {
                            setActiveGalleryImages(project.galleryImages);
                            setIsGalleryOpen(true);
                          }
                        }}
                        style={{
                          minHeight: '380px',
                          height: '400px',
                          backgroundColor: 'var(--surface-1)',
                          borderRadius: 'var(--radius-lg)',
                          border: '1px solid rgba(0, 180, 216, 0.2)',
                          position: 'relative',
                          zIndex: 1,
                          display: 'flex',
                          flexDirection: 'column',
                          overflow: 'hidden',
                          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
                          cursor: project.galleryImages ? 'pointer' : 'default',
                          transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.borderColor = 'var(--accent-primary)';
                          e.currentTarget.style.boxShadow = '0 20px 45px rgba(0, 180, 216, 0.25)';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(0, 180, 216, 0.2)';
                          e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.4)';
                        }}
                      >
                        {project.isInteractiveBot ? (
                          <>
                            {/* Bot UI Mockup */}
                            <div style={{ padding: '16px', backgroundColor: 'rgba(255,255,255,0.03)', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Bot size={24} color="#000" />
                              </div>
                              <div>
                                <h4 style={{ margin: 0, color: '#fff', fontSize: '1rem', fontFamily: 'system-ui, sans-serif' }}>{t("Bot_Header")}</h4>
                                <span style={{ fontSize: '0.75rem', color: 'var(--success)', fontFamily: 'system-ui, sans-serif' }}>{t("Bot_Online")}</span>
                              </div>
                            </div>
                            <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1, overflowY: 'auto' }}>
                              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} style={{ alignSelf: 'flex-end', backgroundColor: 'var(--accent-primary)', color: '#000', padding: '10px 16px', borderRadius: '16px 16px 0 16px', maxWidth: '80%', fontWeight: 500, fontFamily: 'system-ui, sans-serif', fontSize: '0.9rem' }}>{t("Bot_Msg1_User")}</motion.div>
                              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} style={{ alignSelf: 'flex-end', backgroundColor: 'var(--accent-primary)', color: '#000', padding: '10px 16px', borderRadius: '16px 16px 0 16px', maxWidth: '80%', fontWeight: 500, fontFamily: 'system-ui, sans-serif', fontSize: '0.9rem' }}>
                                /stats weekly
                              </motion.div>
                              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} style={{ alignSelf: 'flex-start', backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff', padding: '12px 16px', borderRadius: '16px 16px 16px 0', maxWidth: '85%', border: '1px solid var(--border-subtle)', fontFamily: 'system-ui, sans-serif', fontSize: '0.9rem', lineHeight: '1.5' }}>
                                📊 <strong>Weekly Summary:</strong><br/>
                                ☕ Coffee: $50.00<br/>
                                🍔 Food: $120.00<br/>
                                🚗 Transport: $30.00<br/>
                                <strong>Total: $200.00</strong>
                              </motion.div>
                            </div>
                          </>
                        ) : (
                          <>
                            <img
                              src={project.image}
                              alt={title}
                              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85, transition: 'transform 0.4s ease, opacity 0.4s ease' }}
                              onMouseOver={(e) => (e.currentTarget.style.opacity = '1')}
                              onMouseOut={(e) => (e.currentTarget.style.opacity = '0.85')}
                            />
                            {project.galleryImages && (
                              <div
                                style={{
                                  position: 'absolute',
                                  bottom: '16px',
                                  right: '16px',
                                  backgroundColor: 'rgba(0,0,0,0.75)',
                                  backdropFilter: 'blur(8px)',
                                  color: '#fff',
                                  padding: '6px 14px',
                                  borderRadius: '50px',
                                  fontSize: '0.8rem',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '6px',
                                  border: '1px solid rgba(255,255,255,0.1)'
                                }}
                              >
                                <ImageIcon size={14} color="var(--accent-primary)" />
                                {project.galleryImages.length} Screenshots
                              </div>
                            )}
                          </>
                        )}
                      </motion.div>
                    </div>

                    {/* Content Column */}
                    <div className="project-content w-full" style={{ flex: 1, minWidth: 0 }}>
                      <div className="project-heading flex items-center gap-16" style={{ marginBottom: 'var(--space-8)', flexWrap: 'wrap' }}>
                        <h2 className="text-h2" style={{ textTransform: 'uppercase' }}>
                          {title}
                        </h2>
                        <span
                          style={{
                            padding: '4px 12px',
                            backgroundColor: project.statusBadge.bg,
                            color: project.statusBadge.color,
                            borderRadius: '50px',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            letterSpacing: '0.05em',
                            border: `1px solid ${project.statusBadge.border}`
                          }}
                        >
                          {badgeText}
                        </span>
                      </div>

                      <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-primary)', marginBottom: 'var(--space-24)', borderRadius: '2px', boxShadow: '0 0 10px var(--accent-primary)' }}></div>

                      <p className="text-body-lg" style={{ marginBottom: 'var(--space-24)' }}>
                        {t(project.descKey)}
                      </p>

                      <div style={{ marginBottom: 'var(--space-32)' }}>
                        <h4 className="text-body" style={{ color: 'var(--text-high)', marginBottom: 'var(--space-12)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <Sparkles size={16} color="var(--accent-primary)" />
                          {t(project.decisionsKey)}
                        </h4>
                        <ul className="text-body flex flex-col gap-8" style={{ paddingLeft: 'var(--space-24)' }}>
                          {project.decisionPoints.map((decPoint) => (
                            <li key={decPoint} dangerouslySetInnerHTML={{ __html: t(decPoint) }} />
                          ))}
                        </ul>
                      </div>

                      {/* Glowing Tech Badges */}
                      <div className="flex gap-12 items-center" style={{ marginBottom: 'var(--space-32)', flexWrap: 'wrap' }}>
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            style={{
                              padding: '6px 14px',
                              borderRadius: 'var(--radius-full)',
                              border: '1px solid rgba(0, 180, 216, 0.25)',
                              fontSize: 'var(--text-caption)',
                              color: 'var(--accent-primary)',
                              backgroundColor: 'rgba(0, 180, 216, 0.05)',
                              fontWeight: 600,
                              transition: 'all 0.25s ease'
                            }}
                            onMouseOver={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(0, 180, 216, 0.15)';
                              e.currentTarget.style.borderColor = 'var(--accent-primary)';
                              e.currentTarget.style.boxShadow = '0 0 12px rgba(0, 180, 216, 0.3)';
                            }}
                            onMouseOut={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(0, 180, 216, 0.05)';
                              e.currentTarget.style.borderColor = 'rgba(0, 180, 216, 0.25)';
                              e.currentTarget.style.boxShadow = 'none';
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="project-actions flex gap-16 flex-wrap">
                        {project.demoUrl ? (
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                            <Button style={{ gap: '8px', padding: '12px 24px' }}>
                              Message Bot <ExternalLink size={18} />
                            </Button>
                          </a>
                        ) : (
                          <Button
                            onClick={() => showToast(project.demoToast || 'Demo available soon!')}
                            style={{ gap: '8px', padding: '12px 24px' }}
                          >
                            Live Demo <ExternalLink size={18} />
                          </Button>
                        )}

                        {project.galleryImages && (
                          <Button
                            variant="outline"
                            onClick={() => {
                              if (project.galleryImages) {
                                setActiveGalleryImages(project.galleryImages);
                                setIsGalleryOpen(true);
                              }
                            }}
                            style={{ gap: '8px', padding: '12px 24px', borderColor: 'rgba(0, 180, 216, 0.5)', color: 'var(--accent-primary)' }}
                          >
                            <ImageIcon size={18} /> View Gallery
                          </Button>
                        )}

                        <a href={project.sourceCodeUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                          <Button variant="outline" style={{ gap: '8px', padding: '12px 24px' }}>
                            <Code2 size={18} /> Source Code
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Subtle Neon Line Divider */}
                  {idx < filteredProjects.length - 1 && (
                    <div
                      style={{
                        height: '1px',
                        background: 'linear-gradient(90deg, transparent, rgba(0, 180, 216, 0.25), transparent)',
                        margin: 'var(--space-96) auto',
                        width: '80%'
                      }}
                    />
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>

        </div>
      </div>

      {/* Full-Screen Gallery Modal */}
      <ImageGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        images={activeGalleryImages}
      />
    </PageWrapper>
  );
};

export default Projects;
