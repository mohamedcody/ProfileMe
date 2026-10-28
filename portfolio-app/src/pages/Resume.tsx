import { Download, Printer, ArrowLeft, Mail, Phone, MapPin, ExternalLink, ShieldCheck, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageWrapper } from '../components/ui/PageWrapper';

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <PageWrapper>
      <div className="resume-page-wrapper" style={{ paddingTop: 'var(--space-120)', paddingBottom: 'var(--space-120)' }}>
        
        {/* Top Control Bar - Hidden on print */}
        <div className="resume-controls-bar container" style={{ marginBottom: 'var(--space-32)' }}>
          <div 
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
              padding: '16px 24px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(0, 180, 216, 0.25)',
              borderRadius: 'var(--radius-lg)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
            }}
          >
            <Link 
              to="/" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                color: 'var(--text-medium)', 
                fontWeight: 600, 
                fontSize: '0.95rem',
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
              onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-medium)'}
            >
              <ArrowLeft size={18} /> Back to Portfolio
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={handlePrint}
                className="btn-outline-cyber"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  fontSize: '0.9rem',
                  borderRadius: '10px'
                }}
              >
                <Printer size={16} /> Print / Save
              </button>

              <a
                href="/Mohamed_Saad_Resume.pdf"
                download="Mohamed_Saad_Resume.pdf"
                className="btn-solid-cyber"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 22px',
                  fontSize: '0.9rem',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  fontWeight: 700
                }}
              >
                <Download size={16} /> Download Official PDF
              </a>
            </div>
          </div>
        </div>

        {/* Printable Resume Document Container */}
        <div className="container" style={{ maxWidth: '920px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="resume-sheet"
            style={{
              backgroundColor: 'rgba(18, 21, 30, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(28px, 5vw, 56px)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(20px)'
            }}
          >
            {/* Document Header */}
            <header style={{ borderBottom: '1px solid rgba(0, 180, 216, 0.3)', paddingBottom: '24px', marginBottom: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', margin: 0, color: '#fff' }}>
                    Mohamed <span style={{ color: 'var(--accent-primary)' }}>Saad</span>
                  </h1>
                  <p style={{ color: 'var(--accent-primary)', fontSize: '1.15rem', fontWeight: 600, marginTop: '6px', letterSpacing: '0.05em' }}>
                    Digital Solutions Developer | Full Stack &amp; Backend Engineer
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.9rem', color: 'var(--text-medium)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={15} color="var(--accent-primary)" /> Cairo, Egypt
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Phone size={15} color="var(--accent-primary)" /> (+20) 1148415128
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Mail size={15} color="var(--accent-primary)" />
                    <a href="mailto:mohamedcody18@gmail.com" style={{ color: 'var(--text-high)', textDecoration: 'none' }}>mohamedcody18@gmail.com</a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '4px' }}>
                    <a href="https://linkedin.com/in/mohamed-saad-394b98372" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none', fontWeight: 600 }}>
                      LinkedIn <ExternalLink size={13} />
                    </a>
                    &bull;
                    <a href="https://github.com/mohamedcody" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none', fontWeight: 600 }}>
                      GitHub <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </header>

            {/* Summary */}
            <section style={{ marginBottom: '32px' }}>
              <h2 className="resume-section-heading">Professional Summary</h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.75, fontSize: '1rem', margin: 0 }}>
                Results-driven <strong>Digital Solutions Developer</strong> with proven expertise in architecting, developing, and deploying scalable web applications and enterprise-grade REST APIs. Specialized in <strong>Java, Spring Boot, Spring Security, React.js, and Next.js</strong> with extensive experience designing resilient backend systems, secure JWT authentication mechanisms, normalized PostgreSQL databases, and integrating modern <strong>AI models (Google Gemini API &amp; vector embeddings)</strong> to solve complex business-critical bottlenecks.
              </p>
            </section>

            {/* Technical Skills */}
            <section style={{ marginBottom: '32px' }}>
              <h2 className="resume-section-heading">Technical Skills</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { label: 'Languages', items: ['Java (8/17/21)', 'TypeScript', 'JavaScript', 'SQL', 'HTML5', 'CSS3'] },
                  { label: 'Backend & APIs', items: ['Spring Boot', 'Spring Security', 'Spring WebFlux', 'Hibernate / JPA', 'RESTful APIs', 'JWT Auth', 'Microservices'] },
                  { label: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive UI/UX'] },
                  { label: 'Databases', items: ['PostgreSQL', 'pgvector (Vector Embeddings)', 'MySQL', 'Redis', 'Supabase'] },
                  { label: 'DevOps & Tools', items: ['Docker', 'Docker Compose', 'Git', 'GitHub Actions (CI/CD)', 'Maven', 'npm', 'Nginx'] },
                  { label: 'AI & Automation', items: ['Google Gemini AI API', 'Vector Search', 'Automated CV Parsing', 'Telegram Bot API'] }
                ].map((skillGroup, idx) => (
                  <div key={idx} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
                    <span style={{ minWidth: '150px', fontWeight: 700, color: 'var(--accent-primary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {skillGroup.label}:
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {skillGroup.items.map((skill) => (
                        <span 
                          key={skill}
                          style={{
                            padding: '4px 10px',
                            backgroundColor: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '6px',
                            fontSize: '0.85rem',
                            color: '#fff'
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Work Experience */}
            <section style={{ marginBottom: '32px' }}>
              <h2 className="resume-section-heading">Work Experience</h2>

              {/* Job 1 */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0, color: '#fff' }}>
                      Full Stack Software Engineer
                    </h3>
                    <span style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.95rem' }}>
                      JobFinder Platform
                    </span>
                  </div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, padding: '4px 10px', backgroundColor: 'rgba(0, 180, 216, 0.08)', borderRadius: '20px', border: '1px solid rgba(0, 180, 216, 0.2)' }}>
                    Jan 2024 – Present &bull; Cairo, Egypt
                  </span>
                </div>
                <ul className="resume-bullet-list">
                  <li>Architected and developed a full-stack job search and matching platform using <strong>Spring Boot</strong> and <strong>Next.js / React</strong>.</li>
                  <li>Implemented secure session and token handling utilizing <strong>JWT authentication</strong>, Spring Security, and HttpOnly cookies.</li>
                  <li>Resolved Tomcat thread exhaustion and database connection starvation by refactoring long-running AI extraction routines into reactive asynchronous streams using <strong>Spring WebFlux</strong>.</li>
                  <li>Integrated <strong>Google Gemini AI</strong> for automated CV parsing, smart skill extraction, and semantic candidate-to-job matching using <strong>pgvector</strong> vector embeddings in PostgreSQL.</li>
                  <li>Designed normalized relational database schemas with indexed queries, reducing candidate search response times under 150ms.</li>
                </ul>
              </div>

              {/* Job 2 */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0, color: '#fff' }}>
                      Backend Developer
                    </h3>
                    <span style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.95rem' }}>
                      Tech Solutions Ltd.
                    </span>
                  </div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, padding: '4px 10px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    Jun 2022 – Dec 2023 &bull; Cairo, Egypt
                  </span>
                </div>
                <ul className="resume-bullet-list">
                  <li>Developed and maintained high-throughput RESTful APIs for commercial web applications using <strong>Spring Boot</strong> and <strong>PostgreSQL</strong>.</li>
                  <li>Diagnosed and eliminated Hibernate N+1 query bottlenecks and optimized database transactions, enhancing overall API throughput by <strong>40%</strong>.</li>
                  <li>Containerized application microservices and supporting dependencies using <strong>Docker &amp; Docker Compose</strong> for seamless staging and deployment.</li>
                  <li>Established automated code quality checks and participated in peer code reviews upholding clean code and SOLID architectural principles.</li>
                </ul>
              </div>
            </section>

            {/* Featured Projects */}
            <section style={{ marginBottom: '32px' }}>
              <h2 className="resume-section-heading">Key Engineering Projects</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ padding: '16px', backgroundColor: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '4px' }}>
                    <strong style={{ fontSize: '1.05rem', color: '#fff' }}>JobFinder Career Platform</strong>
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 600 }}>Java, Spring Boot, Spring WebFlux, PostgreSQL (pgvector), Next.js, Docker</span>
                  </div>
                  <p style={{ margin: 0, color: 'var(--text-medium)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    Full-stack AI-driven career application featuring real-time candidate skill parsing, vectorized semantic matching, and responsive candidate/employer dashboards.
                  </p>
                </div>

                <div style={{ padding: '16px', backgroundColor: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '4px' }}>
                    <strong style={{ fontSize: '1.05rem', color: '#fff' }}>Telegram Expense Tracker Bot</strong>
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 600 }}>Java, Spring Boot, Telegram Bot API, PostgreSQL</span>
                  </div>
                  <p style={{ margin: 0, color: 'var(--text-medium)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    Production-ready Telegram bot handling automated financial command routing, receipt recording, database persistence, and weekly spending analytics.
                  </p>
                </div>

                <div style={{ padding: '16px', backgroundColor: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '4px' }}>
                    <strong style={{ fontSize: '1.05rem', color: '#fff' }}>Ahl Masr Restaurant Digital Platform</strong>
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 600 }}>React, TypeScript, Tailwind CSS, Framer Motion</span>
                  </div>
                  <p style={{ margin: 0, color: 'var(--text-medium)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    Modern, high-converting interactive digital menu with dynamic category filtering, media gallery, and instant WhatsApp ordering flow.
                  </p>
                </div>
              </div>
            </section>

            {/* Education & Values */}
            <section>
              <h2 className="resume-section-heading">Education &amp; Core Principles</h2>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                <div>
                  <strong style={{ color: '#fff', fontSize: '1rem' }}>Bachelor's Degree in Computer Science / Information Systems</strong>
                  <div style={{ color: 'var(--text-medium)', fontSize: '0.9rem' }}>Cairo, Egypt</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--success)', fontSize: '0.85rem', fontWeight: 600 }}>
                  <ShieldCheck size={16} /> Verified Credentials
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '12px' }}>
                <Cpu size={15} color="var(--accent-primary)" />
                <span><strong>Core Engineering Mindset:</strong> Clean Architecture, High Availability, Scalable Schemas, Test-Driven Quality, Secure Coding Standards.</span>
              </div>
            </section>
          </motion.div>
        </div>

      </div>

      <style>{`
        .resume-section-heading {
          font-size: 1.15rem;
          font-weight: 800;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 8px;
          margin-bottom: 16px;
        }

        .resume-bullet-list {
          margin: 10px 0 0 20px;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .resume-bullet-list li strong {
          color: #fff;
        }

        @media print {
          @page {
            margin: 12mm 14mm 12mm 14mm;
            size: A4;
          }
          body {
            background-color: #ffffff !important;
            color: #111827 !important;
          }
          nav, footer, .resume-controls-bar, .mobile-floating-container, canvas, .mesh-gradient-bg, .scroll-progress-bar {
            display: none !important;
          }
          .resume-page-wrapper {
            padding: 0 !important;
          }
          .resume-sheet {
            background: #ffffff !important;
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            color: #111827 !important;
          }
          .resume-section-heading {
            color: #0f172a !important;
            border-bottom: 1.5px solid #0077b6 !important;
          }
          h1, h2, h3, strong {
            color: #0f172a !important;
          }
          p, li {
            color: #334155 !important;
          }
          .resume-bullet-list {
            color: #334155 !important;
          }
        }
      `}</style>
    </PageWrapper>
  );
};

export default Resume;
