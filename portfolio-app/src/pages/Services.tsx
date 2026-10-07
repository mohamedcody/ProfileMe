import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, CreditCard, FileText, X } from 'lucide-react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// --- Types & Data ---
interface ServiceOffering {
  id: string;
  titleKey: string;
  descKey: string;
  priceUSD: string;
  priceEGP: string;
  deliverables: string[];
  imageUrl: string;
}

const servicesData: ServiceOffering[] = [
  {
    id: 'data-automation',
    titleKey: 'Data & File Automation',
    descKey: 'data_desc',
    priceUSD: '$15',
    priceEGP: '650 EGP',
    deliverables: [
      'PDF & Word to Clean Excel',
      'Automated Web Scraping',
      'Data Cleaning & Validation',
      'Ready-to-run Script + Setup Help'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'workflow-bots',
    titleKey: 'Custom Telegram & AI Bots',
    descKey: 'bots_desc',
    priceUSD: '$25',
    priceEGP: '1,200 EGP',
    deliverables: [
      'Custom Commands & Interactive Menus',
      'Secure Database Logging',
      'Instant Real-time Notifications',
      'Free Cloud Server Setup'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'landing-pages',
    titleKey: 'Premium Landing Pages',
    descKey: 'landing_desc',
    priceUSD: '$35',
    priceEGP: '1,800 EGP',
    deliverables: [
      'High-Converting UI/UX Design',
      'Framer Motion Smooth Animations',
      'Mobile-First Responsive & Fast',
      'WhatsApp & Lead Form Integration'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'api-integration',
    titleKey: 'Backend & Secure REST APIs',
    descKey: 'api_desc',
    priceUSD: '$30',
    priceEGP: '1,500 EGP',
    deliverables: [
      'Secure Spring Boot REST APIs',
      'JWT Authentication & Security',
      'Optimized PostgreSQL Schema',
      'Clear API Documentation'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'fullstack-apps',
    titleKey: 'Full-Stack Web Apps',
    descKey: 'apps_desc',
    priceUSD: '$85',
    priceEGP: '3,900 EGP',
    deliverables: [
      'Full-Stack App (Frontend + Backend)',
      'Admin Dashboard & Control',
      'Docker Setup & Deployment',
      'Free Post-launch Technical Support'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop'
  }
];

// --- Sub-Components ---
const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.36 7.34 9.09 7.4 8.87 7.65C8.64 7.9 8 8.5 8 9.72C8 10.94 8.89 12.12 9.01 12.28C9.13 12.44 10.74 14.94 13.23 16C13.82 16.26 14.28 16.42 14.64 16.53C15.23 16.72 15.77 16.69 16.2 16.63C16.68 16.56 17.67 16.03 17.88 15.45C18.08 14.86 18.08 14.36 18.02 14.26C17.96 14.16 17.8 14.1 17.55 13.98C17.3 13.85 16.07 13.25 15.84 13.16C15.61 13.08 15.45 13.04 15.28 13.29C15.11 13.54 14.63 14.1 14.49 14.26C14.34 14.43 14.2 14.45 13.95 14.32C13.7 14.2 12.89 13.93 11.94 13.08C11.2 12.42 10.7 11.61 10.55 11.36C10.41 11.11 10.54 10.98 10.66 10.85C10.77 10.74 10.91 10.55 11.04 10.41C11.16 10.26 11.2 10.16 11.28 10C11.36 9.83 11.32 9.69 11.26 9.56C11.2 9.44 10.71 8.24 10.5 7.74C10.3 7.25 10.1 7.31 9.95 7.31C9.81 7.31 9.65 7.34 9.53 7.34Z" />
  </svg>
);

const ServiceRow = ({ service, index, currency }: { service: ServiceOffering; index: number; currency: 'USD' | 'EGP' }) => {
  const { t, i18n } = useTranslation();
  const isEven = index % 2 === 0;
  const currentPrice = currency === 'USD' ? service.priceUSD : service.priceEGP;
  const isCustomQuote = currentPrice === 'Custom Quote' || currentPrice === 'تسعير مخصص';
  const isArabic = i18n.language === 'ar';
  const serviceTitle = t(service.titleKey);

  // Professional pre-filled messages tailored to each specific service
  const discussMessage = isArabic
    ? `السلام عليكم يا بشمهندس محمد،\nأنا مهتم بمناقشة مشروع بخصوص خدمة: *${serviceTitle}*.\n\n📋 تفاصيل مبدئية:\n• نوع الخدمة: ${serviceTitle}\n• التسعير المرجعي: ${currentPrice}\n\nأود مشاركة تفاصيل متطلبات مشروعي معكم لمناقشة خطة العمل والتنفيذ.`
    : `Hello Mohamed,\nI would like to discuss a project regarding: *${serviceTitle}*.\n\n📋 Preliminary Details:\n• Service: ${serviceTitle}\n• Reference Price: ${currentPrice}\n\nI'd like to share my requirements and discuss the project scope and timeline with you.`;

  const orderMessage = isArabic
    ? `السلام عليكم يا بشمهندس محمد،\nأود تأكيد طلب خدمة: *${serviceTitle}* مباشرة.\n\n📋 تفاصيل الطلب:\n• الخدمة: ${serviceTitle}\n• السعر: ${currentPrice}\n\nجاهز للاتفاق وبدء العمل.`
    : `Hello Mohamed,\nI would like to order: *${serviceTitle}* directly.\n\n📋 Order Details:\n• Service: ${serviceTitle}\n• Pricing: ${currentPrice}\n\nI am ready to proceed with the project kick-off.`;

  const discussWhatsAppUrl = `https://wa.me/201148415128?text=${encodeURIComponent(discussMessage)}`;
  const orderWhatsAppUrl = `https://wa.me/201148415128?text=${encodeURIComponent(orderMessage)}`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`service-row ${isEven ? 'service-row-forward' : 'service-row-reverse'} flex md-flex-col gap-64 items-center`}
      style={{ position: 'relative' }}
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
            alt={serviceTitle} 
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
          {isCustomQuote ? currentPrice : `${t('Starting at')} ${currentPrice}`}
        </div>

        <h2 className="text-h2" style={{ color: '#fff', marginBottom: '16px' }}>{serviceTitle}</h2>
        <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--accent-primary)', marginBottom: '24px', borderRadius: '2px' }}></div>
        
        <p className="text-body-lg" style={{ marginBottom: '32px' }}>
          {t(service.descKey)}
        </p>

        <div style={{ marginBottom: '40px' }}>
          <h4 style={{ fontSize: '0.9rem', color: 'var(--text-high)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px', fontWeight: 700 }}>{t('What you get:')}</h4>
          <ul className="flex flex-col gap-12" style={{ listStyle: 'none' }}>
            {service.deliverables.map((item, i) => (
              <li key={i} className="flex items-center gap-12" style={{ color: 'var(--text-medium)', fontSize: '1.05rem' }}>
                <CheckCircle2 size={18} color="var(--success)" />
                {t(item)}
              </li>
            ))}
          </ul>
        </div>

        {/* Dual CTA Buttons */}
        <div className="flex gap-16 flex-wrap">
          <a 
            href={orderWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid-cyber" 
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', textDecoration: 'none' }}
          >
            <CreditCard size={18} /> {t('Order Now')}
          </a>
          
          <a 
            href={discussWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-cyber" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              padding: '14px 28px', 
              textDecoration: 'none',
              borderColor: 'rgba(37, 211, 102, 0.4)',
              color: '#fff',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = '#25D366';
              e.currentTarget.style.color = '#25D366';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(37, 211, 102, 0.25)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = 'rgba(37, 211, 102, 0.4)';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <WhatsAppIcon size={18} /> {t('Discuss Project')}
          </a>
        </div>

      </div>
    </motion.div>
  );
};

// --- Main Page Component ---
const Services = () => {
  const { t, i18n } = useTranslation();
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
                lineHeight: 1.8, marginBottom: '48px', 
                borderInlineStart: '3px solid var(--accent-primary)', paddingInlineStart: '32px' 
              }}
              dangerouslySetInnerHTML={{ __html: t('trust_banner') }}
            />

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
                <FileText size={18} style={{ opacity: 0.8 }} /> {t('Client Guidelines')}
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

            {/* Starter Specials Banner */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                padding: '16px 28px',
                backgroundColor: 'rgba(0, 180, 216, 0.08)',
                border: '1px dashed rgba(0, 180, 216, 0.35)',
                borderRadius: '16px',
                marginTop: '32px',
                textAlign: 'center'
              }}
            >
              <span style={{ fontSize: '1rem', color: '#fff', fontWeight: 600, lineHeight: 1.6 }}>
                {i18n.language === 'ar' 
                  ? '🔥 عروض افتتاحية خاصة لأول العملاء — تسليم سريع + تعديلات مجانية ومساعدة كاملة في التشغيل حتى رضاك التام 100%!'
                  : '🔥 Starter Special Offers for First Clients — Rapid Turnaround + Free Revisions & Setup Help until 100% Satisfied!'}
              </span>
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
