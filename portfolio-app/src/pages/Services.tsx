import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, CreditCard, MessageSquare, FileText, X } from 'lucide-react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// --- Types & Data ---
interface ServiceOffering {
  id: string;
  title: string;
  description: string;
  priceUSD: string;
  priceEGP: string;
  deliverables: string[];
  imageUrl: string;
}

const servicesData: ServiceOffering[] = [
  {
    id: 'landing-pages',
    title: 'Premium Landing Pages',
    description: 'Stop losing potential clients. I build lightning-fast, visually stunning landing pages engineered to turn traffic into paying customers. Fully responsive, accessible, and optimized for SEO.',
    priceUSD: '$299',
    priceEGP: '15,000 EGP',
    deliverables: ['Custom UI/UX Design', 'Framer Motion Animations', 'Mobile-First Responsive', 'SEO & Performance Optimized'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'data-automation',
    title: 'Data & File Automation',
    description: 'Eliminate manual data entry and save hundreds of hours. I create custom scripts that extract data from PDFs, convert complex Word documents to Excel, and scrape web data automatically.',
    priceUSD: '$150',
    priceEGP: '7,500 EGP',
    deliverables: ['PDF & Word to Excel parsing', 'Automated Web Scraping', 'Data Cleaning & Formatting', 'Custom Python/Node Scripts'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'workflow-bots',
    title: 'Custom Telegram & AI Bots',
    description: 'Automate your business processes and customer support with custom Telegram or Discord bots. Manage expenses, send real-time notifications, and handle user queries 24/7.',
    priceUSD: '$250',
    priceEGP: '12,500 EGP',
    deliverables: ['Telegram/Discord Integration', 'Custom Command Routing', 'Database Storage', 'Deployed on reliable servers'],
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'fullstack-apps',
    title: 'Full-Stack Web Apps',
    description: 'Build powerful, scalable business software from the ground up. I develop complete SaaS MVPs, admin dashboards, and custom web applications using Java Spring Boot and React.',
    priceUSD: '$899',
    priceEGP: '45,000 EGP',
    deliverables: ['Java Spring Boot Backend', 'React/Next.js Frontend', 'PostgreSQL Database', 'Secure Authentication'],
    imageUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'api-integration',
    title: 'API & System Integration',
    description: 'Connect disparate systems and third-party services seamlessly. I build secure REST APIs and webhooks to ensure your backend operations flow perfectly without human intervention.',
    priceUSD: 'Custom Quote',
    priceEGP: 'تسعير مخصص',
    deliverables: ['REST API Development', 'Third-party Webhooks', 'Secure Authentication (JWT)', 'Performance Monitoring'],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop'
  }
];

// --- Sub-Components ---
const ServiceRow = ({ service, index, currency }: { service: ServiceOffering; index: number; currency: 'USD' | 'EGP' }) => {
  const { t } = useTranslation();
  const isEven = index % 2 === 0;
  const currentPrice = currency === 'USD' ? service.priceUSD : service.priceEGP;
  const isCustomQuote = currentPrice === 'Custom Quote' || currentPrice === 'تسعير مخصص';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex md-flex-col gap-64 items-center"
      style={{ flexDirection: isEven ? 'row' : 'row-reverse', position: 'relative' }}
    >
      {/* Image Side */}
      <div style={{ flex: '1 1 50%', width: '100%', position: 'relative' }}>
        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          style={{ 
            position: 'relative', width: '100%', aspectRatio: '4/3',
            borderRadius: '24px', overflow: 'hidden',
            border: '1px solid var(--border-subtle)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
          }}
        >
          <img 
            src={service.imageUrl} 
            alt={service.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} 
            loading="lazy"
          />
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(8,10,15,0.8), transparent)' }}></div>
        </motion.div>
      </div>

      {/* Content Side */}
      <div style={{ flex: '1 1 50%', width: '100%' }}>
        
        {/* Sleek Minimal Price Tag above Title */}
        <div style={{ 
          display: 'inline-block', padding: '6px 16px', 
          backgroundColor: 'rgba(0,180,216,0.08)', color: 'var(--accent-primary)', 
          borderRadius: '8px', fontSize: '0.85rem', fontWeight: 700, 
          letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px',
          border: '1px solid rgba(0,180,216,0.2)'
        }}>
          {isCustomQuote ? currentPrice : `{t('Starting at')} ${currentPrice}`}
        </div>

        <h2 className="text-h2" style={{ color: '#fff', marginBottom: '16px' }}>{t(service.title)}</h2>
        <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--accent-primary)', marginBottom: '24px', borderRadius: '2px' }}></div>
        
        <p className="text-body-lg" style={{ marginBottom: '32px' }}>
          {service.description}
        </p>

        <div style={{ marginBottom: '40px' }}>
          <h4 style={{ fontSize: '0.9rem', color: 'var(--text-high)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px', fontWeight: 700 }}>{t('What you get:')}</h4>
          <ul className="flex flex-col gap-12" style={{ listStyle: 'none' }}>
            {service.deliverables.map((item, i) => (
              <li key={i} className="flex items-center gap-12" style={{ color: 'var(--text-medium)', fontSize: '1.05rem' }}>
                <CheckCircle2 size={18} color="var(--success)" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Dual CTA Buttons */}
        <div className="flex gap-16 flex-wrap">
          <button 
            className="btn-solid-cyber" 
            style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 28px' }}
            onClick={() => alert('This would redirect to Stripe Checkout or Fiverr Gig.')}
          >
            <CreditCard size={18} /> {t('Order Now')}
          </button>
          
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <button className="btn-outline-cyber" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 28px' }}>
              <MessageSquare size={18} /> {t('Discuss Project')}
            </button>
          </Link>
        </div>

      </div>
    </motion.div>
  );
};

// --- Main Page Component ---
const Services = () => {
  const { t } = useTranslation();
  const [currency, setCurrency] = useState<'USD' | 'EGP'>('EGP');
  const [showGuidelines, setShowGuidelines] = useState(false);

  return (
    <PageWrapper>
      <div style={{ paddingTop: 'var(--space-120)', paddingBottom: 'var(--space-120)' }}>
        
        {/* Premium Page Header */}
        <div style={{ backgroundColor: 'var(--surface-2)', padding: 'var(--space-64) 0', textAlign: 'center', borderBottom: '1px solid var(--border-subtle)', marginBottom: 'var(--space-96)' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-display" style={{ marginBottom: 'var(--space-16)', color: '#fff', textTransform: 'uppercase' }}
          >
            MY <span style={{ color: 'var(--accent-primary)' }}>{t('SERVICES')}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="label-spaced text-caption" style={{ color: 'var(--text-muted)', marginBottom: '32px' }}
          >
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-high)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>HOME</Link> &rsaquo; <span style={{ color: 'var(--accent-primary)' }}>SERVICES</span>
          </motion.p>
        </div>

        <div className="container">
          
          {/* Editorial Intro & Control Toolbar */}
          <div style={{ maxWidth: '1000px', margin: '0 auto 80px' }}>
            
            {/* Sleek Trust Statement (Editorial Style) */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              style={{ 
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', color: 'var(--text-medium)', 
                lineHeight: 1.8, marginBottom: '64px', 
                borderLeft: '3px solid var(--accent-primary)', paddingLeft: '32px' 
              }}
            >
              I deliver <strong style={{ color: '#fff' }}>scalable business solutions</strong>, not just code. 
              Whether automating manual processes or building high-performance applications, 
              you get transparent pricing, clear deliverables, and robust engineering.
            </motion.p>

            {/* The Control Toolbar (Clean, Human-designed UI) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              style={{ 
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px',
                paddingBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.08)'
              }}
            >
              {/* Guidelines Action */}
              <button 
                onClick={() => setShowGuidelines(true)}
                style={{ 
                  background: 'transparent', border: 'none', color: 'var(--text-high)', 
                  display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem', 
                  fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', 
                  cursor: 'pointer', transition: 'color 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-high)'}
              >
                <FileText size={18} style={{ opacity: 0.8 }} /> Client Guidelines
              </button>

              {/* Currency Switcher (SaaS Style) */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>{t('Billing Currency:')}</span>
                
                <div style={{ display: 'flex', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '8px', padding: '4px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <button 
                    onClick={() => setCurrency('EGP')}
                    style={{ 
                      padding: '6px 20px', borderRadius: '6px', border: 'none', 
                      background: currency === 'EGP' ? 'var(--accent-primary)' : 'transparent', 
                      color: currency === 'EGP' ? '#000' : 'var(--text-muted)', 
                      fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s', fontSize: '0.85rem'
                    }}
                  >
                    EGP
                  </button>
                  <button 
                    onClick={() => setCurrency('USD')}
                    style={{ 
                      padding: '6px 20px', borderRadius: '6px', border: 'none', 
                      background: currency === 'USD' ? 'var(--accent-primary)' : 'transparent', 
                      color: currency === 'USD' ? '#000' : 'var(--text-muted)', 
                      fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s', fontSize: '0.85rem'
                    }}
                  >
                    USD
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Services List */}
          <div className="flex flex-col gap-96" style={{ paddingBottom: '80px' }}>
            {servicesData.map((service, index) => (
              <ServiceRow key={service.id} service={service} index={index} currency={currency} />
            ))}
          </div>

        </div>
      </div>

      {/* Client Guidelines Modal */}
      <AnimatePresence>
        {showGuidelines && (
          <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(8,10,15,0.85)', backdropFilter: 'blur(8px)' }}
              onClick={() => setShowGuidelines(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              style={{ 
                position: 'relative', width: '100%', maxWidth: '650px', 
                backgroundColor: 'var(--surface-1)', border: '1px solid var(--border-subtle)', 
                borderRadius: '24px', padding: '40px', maxHeight: '85vh', overflowY: 'auto', 
                zIndex: 1, boxShadow: '0 20px 60px rgba(0,0,0,0.6)' 
              }}
            >
              <button 
                onClick={() => setShowGuidelines(false)} 
                style={{ position: 'absolute', top: '24px', right: '24px', background: 'rgba(255,255,255,0.05)', border: 'none', color: '#fff', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background 0.2s' }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
              >
                <X size={20} />
              </button>
              
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>{t('Client Guidelines')}</h2>
              <div style={{ width: '40px', height: '3px', backgroundColor: 'var(--accent-primary)', marginBottom: '32px', borderRadius: '2px' }}></div>
              
              <div className="flex flex-col gap-24 text-body" style={{ color: 'var(--text-medium)', lineHeight: 1.7 }}>
                <div>
                  <h4 style={{ color: 'var(--accent-primary)', fontSize: '1.1rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16}/> {t('Scope of Work')}</h4>
                  <p>{t('Scope_Text')}</p>
                </div>
                
                <div>
                  <h4 style={{ color: 'var(--accent-primary)', fontSize: '1.1rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16}/> {t('Payment Terms')}</h4>
                  <p>{t('Payment_Text')}</p>
                </div>
                
                <div>
                  <h4 style={{ color: 'var(--accent-primary)', fontSize: '1.1rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16}/> {t('Revisions & Changes')}</h4>
                  <p>Each service includes up to <strong>2 rounds of major revisions</strong> during the design/development phase. Additional major revisions or changing the core requirements mid-project will be billed at an hourly rate.</p>
                </div>

                <div>
                  <h4 style={{ color: 'var(--accent-primary)', fontSize: '1.1rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16}/> {t('Communication & Delivery')}</h4>
                  <p>{t('Communication_Text')}</p>
                </div>
              </div>

              <div style={{ marginTop: '40px', padding: '24px', backgroundColor: 'rgba(0,180,216,0.05)', border: '1px solid rgba(0,180,216,0.2)', borderRadius: '16px', textAlign: 'center' }}>
                <p style={{ color: '#fff', fontWeight: 600, marginBottom: '16px' }}>{t('Ready to start your project?')}</p>
                <button onClick={() => setShowGuidelines(false)} className="btn-solid-cyber" style={{ width: '100%' }}>{t('I Understand, Close Guidelines')}</button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
};

export default Services;
