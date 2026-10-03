const fs = require('fs');

const servicesCode = `import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, CreditCard, MessageSquare } from 'lucide-react';
import { PageWrapper } from '../components/ui/PageWrapper';
import { Link } from 'react-router-dom';

// --- Types & Data ---
interface ServiceOffering {
  id: string;
  title: string;
  description: string;
  price: string;
  deliverables: string[];
  imageUrl: string;
}

const servicesData: ServiceOffering[] = [
  {
    id: 'landing-pages',
    title: 'Premium Landing Pages',
    description: 'Stop losing potential clients. I build lightning-fast, visually stunning landing pages engineered to turn traffic into paying customers. Fully responsive, accessible, and optimized for SEO.',
    price: '$299',
    deliverables: ['Custom UI/UX Design', 'Framer Motion Animations', 'Mobile-First Responsive', 'SEO & Performance Optimized'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'data-automation',
    title: 'Data & File Automation',
    description: 'Eliminate manual data entry and save hundreds of hours. I create custom scripts that extract data from PDFs, convert complex Word documents to Excel, and scrape web data automatically.',
    price: '$150',
    deliverables: ['PDF & Word to Excel parsing', 'Automated Web Scraping', 'Data Cleaning & Formatting', 'Custom Python/Node Scripts'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'workflow-bots',
    title: 'Custom Telegram & AI Bots',
    description: 'Automate your business processes and customer support with custom Telegram or Discord bots. Manage expenses, send real-time notifications, and handle user queries 24/7.',
    price: '$250',
    deliverables: ['Telegram/Discord Integration', 'Custom Command Routing', 'Database Storage', 'Deployed on reliable servers'],
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'fullstack-apps',
    title: 'Full-Stack Web Apps',
    description: 'Build powerful, scalable business software from the ground up. I develop complete SaaS MVPs, admin dashboards, and custom web applications using Java Spring Boot and React.',
    price: '$899',
    deliverables: ['Java Spring Boot Backend', 'React/Next.js Frontend', 'PostgreSQL Database', 'Secure Authentication'],
    imageUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'api-integration',
    title: 'API & System Integration',
    description: 'Connect disparate systems and third-party services seamlessly. I build secure REST APIs and webhooks to ensure your backend operations flow perfectly without human intervention.',
    price: 'Custom Quote',
    deliverables: ['REST API Development', 'Third-party Webhooks', 'Secure Authentication (JWT)', 'Performance Monitoring'],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop'
  }
];

// --- Sub-Components ---
const ServiceRow = ({ service, index }: { service: ServiceOffering; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex md-flex-col gap-64 items-center"
      style={{ flexDirection: isEven ? 'row' : 'row-reverse', position: 'relative' }}
    >
      {/* Image Side (No Floating Price Tag) */}
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
          {service.price === 'Custom Quote' ? 'Custom Quote' : \`Starting at \${service.price}\`}
        </div>

        <h2 className="text-h2" style={{ color: '#fff', marginBottom: '16px' }}>{service.title}</h2>
        <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--accent-primary)', marginBottom: '24px', borderRadius: '2px' }}></div>
        
        <p className="text-body-lg" style={{ marginBottom: '32px' }}>
          {service.description}
        </p>

        <div style={{ marginBottom: '40px' }}>
          <h4 style={{ fontSize: '0.9rem', color: 'var(--text-high)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px', fontWeight: 700 }}>What you get:</h4>
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
            <CreditCard size={18} /> Order Now
          </button>
          
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <button className="btn-outline-cyber" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '14px 28px' }}>
              <MessageSquare size={18} /> Discuss Project
            </button>
          </Link>
        </div>

      </div>
    </motion.div>
  );
};

// --- Main Page Component ---
const Services = () => {
  return (
    <PageWrapper>
      <div style={{ paddingTop: 'var(--space-120)', paddingBottom: 'var(--space-120)' }}>
        
        {/* Premium Page Header */}
        <div style={{ backgroundColor: 'var(--surface-2)', padding: 'var(--space-64) 0', textAlign: 'center', borderBottom: '1px solid var(--border-subtle)', marginBottom: 'var(--space-96)' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-display" style={{ marginBottom: 'var(--space-16)', color: '#fff', textTransform: 'uppercase' }}
          >
            MY <span style={{ color: 'var(--accent-primary)' }}>SERVICES</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="label-spaced text-caption" style={{ color: 'var(--text-muted)' }}
          >
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-high)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>HOME</Link> &rsaquo; <span style={{ color: 'var(--accent-primary)' }}>SERVICES</span>
          </motion.p>
        </div>

        <div className="container">
          
          {/* Trust Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            style={{ 
              maxWidth: '800px', margin: '0 auto 80px', textAlign: 'center',
              backgroundColor: 'rgba(255,255,255,0.02)', padding: '32px',
              borderRadius: '24px', border: '1px solid var(--border-subtle)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <p style={{ fontSize: '1.2rem', color: 'var(--text-medium)', lineHeight: 1.6 }}>
              I don't just write code. I deliver <strong style={{ color: 'var(--text-high)' }}>scalable business solutions</strong>. 
              Whether you need to convert manual processes into automated scripts or build a high-performance landing page, 
              you get transparent pricing, clear deliverables, and robust engineering.
            </p>
          </motion.div>

          {/* Services List */}
          <div className="flex flex-col gap-96" style={{ paddingBottom: '80px' }}>
            {servicesData.map((service, index) => (
              <ServiceRow key={service.id} service={service} index={index} />
            ))}
          </div>

        </div>
      </div>
    </PageWrapper>
  );
};

export default Services;
`;

fs.writeFileSync('src/pages/Services.tsx', servicesCode);
console.log("Services UX completely redesigned for a real client flow.");
