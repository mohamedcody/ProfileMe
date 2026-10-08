import { ExternalLink, Image as ImageIcon, Code2, Rocket, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '../components/ui/Button';
import { ImageGalleryModal } from '../components/ui/ImageGalleryModal';
import { PageWrapper } from '../components/ui/PageWrapper';

const Projects = () => {
  const { t } = useTranslation();
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Array of images that will be passed to the Gallery Modal
  const jobfinderGalleryImages = [
    { src: '/image/1.png', caption: 'JobFinder Platform - Main Dashboard and Overview' },
    { src: '/image/2.png', caption: 'Advanced Job Search and Filtering Interface' },
    { src: '/image/3.png', caption: 'AI-Assisted Resume Parsing Results' },
    { src: '/image/4.png', caption: 'User Profile and Saved Jobs' },
    { src: '/image/5.png', caption: 'Employer Dashboard and Analytics' },
    { src: '/image/6.png', caption: 'Application Tracking and Management' }
  ];

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
        <div style={{ backgroundColor: 'var(--surface-2)', padding: 'var(--space-64) 0', textAlign: 'center', borderBottom: '1px solid var(--border-subtle)', marginBottom: 'var(--space-96)' }}>
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
        
        <div className="container" style={{ padding: '0 var(--space-32) var(--space-120)' }}>
          
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
                <img src="/image/1.png" alt="JobFinder Preview" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7, borderRadius: 'var(--radius-lg)' }} />
              </motion.div>
            </div>

            <div className="project-content w-full" style={{ flex: 1, minWidth: 0 }}>
              <div className="project-heading flex items-center gap-16" style={{ marginBottom: 'var(--space-8)' }}>
                <h2 className="text-h2" style={{ textTransform: 'uppercase' }}>JobFinder</h2>
                <span style={{ padding: '4px 12px', backgroundColor: 'rgba(234, 179, 8, 0.1)', color: '#eab308', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', border: '1px solid rgba(234, 179, 8, 0.2)' }}>
                  IN DEVELOPMENT
                </span>
              </div>
              <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-primary)', marginBottom: 'var(--space-24)', borderRadius: '2px' }}></div>
              
              <p className="text-body-lg" style={{ marginBottom: 'var(--space-24)' }}>
                {t("JobFinder_Desc")}
              </p>
              
              <div style={{ marginBottom: 'var(--space-32)' }}>
                <h4 className="text-body" style={{ color: 'var(--text-high)', marginBottom: 'var(--space-12)', fontWeight: 600 }}>{t("JobFinder_Decisions")}</h4>
                <ul className="text-body flex flex-col gap-8" style={{ paddingLeft: 'var(--space-24)' }}>
                  <li dangerouslySetInnerHTML={{ __html: t("JobFinder_Dec1") }} />
                  <li dangerouslySetInnerHTML={{ __html: t("JobFinder_Dec2") }} />
                  <li dangerouslySetInnerHTML={{ __html: t("JobFinder_Dec3") }} />
                  <li dangerouslySetInnerHTML={{ __html: t("JobFinder_Dec4") }} />
                </ul>
              </div>

              <div className="flex gap-16 items-center" style={{ marginBottom: 'var(--space-32)', flexWrap: 'wrap' }}>
                {['Java', 'Spring Boot', 'React', 'PostgreSQL'].map(tech => (
                  <span key={tech} style={{ padding: '6px 16px', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-subtle)', fontSize: 'var(--text-caption)', color: 'var(--accent-primary)', backgroundColor: 'rgba(0,180,216,0.05)' }}>{tech}</span>
                ))}
              </div>

              {/* Enhanced Buttons */}
              <div className="project-actions flex gap-16 flex-wrap">
                <Button 
                  onClick={() => showToast('Platform is currently under development and will be hosted soon! 🚀')}
                  style={{ gap: '8px', padding: '12px 24px' }}
                >
                  Live Demo <ExternalLink size={18}/>
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={() => setIsGalleryOpen(true)}
                  style={{ gap: '8px', padding: '12px 24px', borderColor: 'rgba(234, 179, 8, 0.5)', color: '#eab308' }}
                >
                  <ImageIcon size={18}/> View Image
                </Button>

                <a href="https://github.com/mohamedcody/jobfinder" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <Button variant="outline" style={{ gap: '8px', padding: '12px 24px' }}>
                    <Code2 size={18}/> Source Code
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div style={{ height: '1px', backgroundColor: 'var(--border-subtle)', margin: '0 auto var(--space-120)', width: '100%' }}></div>

          {/* Project 2: Telegram Bot */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
            className="flex md-flex-col-reverse gap-64 items-center" style={{ flexDirection: 'row-reverse' }}
          >
            <div className="w-full relative" style={{ flex: 1 }}>
              <div style={{ position: 'absolute', top: '-40px', right: '-20px', fontSize: '180px', fontWeight: 700, color: 'rgba(255,255,255,0.02)', zIndex: 0, lineHeight: 1 }}>02</div>
              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.4 }}
                style={{ height: '400px', backgroundColor: 'var(--surface-1)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}
              >
                {/* Bot Header */}
                <div style={{ padding: '16px', backgroundColor: 'rgba(255,255,255,0.03)', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Bot size={24} color="#000" />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, color: '#fff', fontSize: '1rem', fontFamily: 'system-ui, sans-serif' }}>{t("Bot_Header")}</h4>
                    <span style={{ fontSize: '0.75rem', color: 'var(--success)', fontFamily: 'system-ui, sans-serif' }}>{t("Bot_Online")}</span>
                  </div>
                </div>
                {/* Chat Messages */}
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1, overflowY: 'auto' }}>
                  {/* User Message */}
                  <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} style={{ alignSelf: 'flex-end', backgroundColor: 'var(--accent-primary)', color: '#000', padding: '10px 16px', borderRadius: '16px 16px 0 16px', maxWidth: '80%', fontWeight: 500, fontFamily: 'system-ui, sans-serif', fontSize: '0.9rem' }}>{t("Bot_Msg1_User")}</motion.div>
                  {/* Bot Message */}
                  <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} style={{ alignSelf: 'flex-start', backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff', padding: '12px 16px', borderRadius: '16px 16px 16px 0', maxWidth: '85%', border: '1px solid var(--border-subtle)', fontFamily: 'system-ui, sans-serif', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    
                  </motion.div>
                  
                  {/* User Message */}
                  <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }} style={{ alignSelf: 'flex-end', backgroundColor: 'var(--accent-primary)', color: '#000', padding: '10px 16px', borderRadius: '16px 16px 0 16px', maxWidth: '80%', fontWeight: 500, fontFamily: 'system-ui, sans-serif', fontSize: '0.9rem' }}>
                    /stats weekly
                  </motion.div>
                  {/* Bot Message */}
                  <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.6 }} style={{ alignSelf: 'flex-start', backgroundColor: 'rgba(255,255,255,0.05)', color: '#fff', padding: '12px 16px', borderRadius: '16px 16px 16px 0', maxWidth: '85%', border: '1px solid var(--border-subtle)', fontFamily: 'system-ui, sans-serif', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    📊 <strong>Weekly Summary:</strong><br/>
                    ☕ Coffee: $50.00<br/>
                    🍔 Food: $120.00<br/>
                    🚗 Transport: $30.00<br/>
                    <strong>Total: $200.00</strong>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <div className="project-content w-full" style={{ flex: 1, minWidth: 0 }}>
              <div className="project-heading flex items-center gap-16" style={{ marginBottom: 'var(--space-8)' }}>
                <h2 className="text-h2" style={{ textTransform: 'uppercase' }}>Expense Tracker Bot</h2>
              </div>
              <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-primary)', marginBottom: 'var(--space-24)', borderRadius: '2px' }}></div>
              
              <p className="text-body-lg" style={{ marginBottom: 'var(--space-24)' }}>
                {t("ExpenseBot_Desc")}
              </p>
              
              <div style={{ marginBottom: 'var(--space-32)' }}>
                <h4 className="text-body" style={{ color: 'var(--text-high)', marginBottom: 'var(--space-12)', fontWeight: 600 }}>{t("JobFinder_Decisions")}</h4>
                <ul className="text-body flex flex-col gap-8" style={{ paddingLeft: 'var(--space-24)' }}>
                  <li dangerouslySetInnerHTML={{ __html: t("ExpenseBot_Dec1") }} />
                  <li dangerouslySetInnerHTML={{ __html: t("ExpenseBot_Dec2") }} />
                  <li dangerouslySetInnerHTML={{ __html: t("ExpenseBot_Dec3") }} />
                  <li dangerouslySetInnerHTML={{ __html: t("ExpenseBot_Dec4") }} />
                </ul>
              </div>

              <div className="flex gap-16 items-center" style={{ marginBottom: 'var(--space-32)', flexWrap: 'wrap' }}>
                {['Java', 'Spring Boot', 'Telegram API', 'REST APIs'].map(tech => (
                  <span key={tech} style={{ padding: '6px 16px', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-subtle)', fontSize: 'var(--text-caption)', color: 'var(--accent-primary)', backgroundColor: 'rgba(0,180,216,0.05)' }}>{tech}</span>
                ))}
              </div>

              <div className="project-actions flex gap-16 flex-wrap">
                <a href="https://t.me/Mohamed20_Expense_bot" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <Button style={{ gap: '8px', padding: '12px 24px' }}>
                    Message Bot <ExternalLink size={18}/>
                  </Button>
                </a>

                <a href="https://github.com/mohamedcody/expense-tracker-bot" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <Button variant="outline" style={{ gap: '8px', padding: '12px 24px' }}>
                    <Code2 size={18}/> Source Code
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
</div>
      </div>
      
      {/* Premium Full-Screen Gallery Modal */}
      <ImageGalleryModal 
        isOpen={isGalleryOpen} 
        onClose={() => setIsGalleryOpen(false)} 
        images={jobfinderGalleryImages} 
      />
      
    </PageWrapper>
  );
};

export default Projects;
