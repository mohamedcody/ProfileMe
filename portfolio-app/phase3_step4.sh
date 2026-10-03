#!/bin/bash
cd /home/mohamed-saad/front-end-vs/profileMain/portfolio-app

echo "Updating Projects.tsx..."
cat << 'TSX' > src/pages/Projects.tsx
import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { PageWrapper } from '../components/ui/PageWrapper';

const Projects = () => {
  return (
    <PageWrapper>
      <div style={{ paddingTop: 'var(--space-120)' }}>
        <div style={{ backgroundColor: 'var(--surface-2)', padding: 'var(--space-64) 0', textAlign: 'center', borderBottom: '1px solid var(--border-subtle)' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-display gradient-text" style={{ marginBottom: 'var(--space-16)' }}>Case Studies</motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="label-spaced text-caption" style={{ color: 'var(--text-muted)' }}>
            HOME &rsaquo; <span style={{ color: 'var(--accent-primary)' }}>PROJECTS</span>
          </motion.p>
        </div>
        
        <div className="container" style={{ padding: 'var(--space-120) var(--space-32)' }}>
          
          {/* Project 1: JobFinder */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
            className="flex md-flex-col gap-64 items-center" style={{ marginBottom: 'var(--space-120)' }}
          >
            <div className="w-full relative" style={{ flex: 1 }}>
              <div style={{ position: 'absolute', top: '-40px', left: '-20px', fontSize: '180px', fontWeight: 700, color: 'rgba(255,255,255,0.02)', zIndex: 0, lineHeight: 1 }}>01</div>
              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.4 }}
                style={{ height: '400px', backgroundColor: 'var(--surface-1)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}
              >
                <p className="text-sm">JobFinder App Preview</p>
              </motion.div>
            </div>

            <div className="w-full" style={{ flex: 1 }}>
              <h2 className="text-h2" style={{ textTransform: 'uppercase', marginBottom: 'var(--space-8)' }}>JobFinder</h2>
              <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-primary)', marginBottom: 'var(--space-24)', borderRadius: '2px' }}></div>
              
              <p className="text-body-lg" style={{ marginBottom: 'var(--space-24)' }}>
                A full-stack job search platform designed to help job seekers discover relevant opportunities through intelligent matching and robust user profiles.
              </p>
              
              <div style={{ marginBottom: 'var(--space-32)' }}>
                <h4 className="text-body" style={{ color: 'var(--text-high)', marginBottom: 'var(--space-12)', fontWeight: 600 }}>Key Engineering Decisions:</h4>
                <ul className="text-body flex flex-col gap-8" style={{ paddingLeft: 'var(--space-24)' }}>
                  <li>Implemented <strong style={{ color: 'var(--text-high)' }}>JWT authentication</strong> & Spring Security.</li>
                  <li>Built an <strong style={{ color: 'var(--text-high)' }}>AI-assisted CV analysis</strong> engine to extract skills.</li>
                  <li>Utilized <strong style={{ color: 'var(--text-high)' }}>Vector search</strong> for semantic matching.</li>
                  <li>Designed a normalized <strong style={{ color: 'var(--text-high)' }}>PostgreSQL</strong> schema.</li>
                </ul>
              </div>

              <div className="flex gap-16 items-center" style={{ marginBottom: 'var(--space-32)', flexWrap: 'wrap' }}>
                {['Java', 'Spring Boot', 'React', 'PostgreSQL'].map(tech => (
                  <span key={tech} style={{ padding: '6px 16px', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-subtle)', fontSize: 'var(--text-caption)', color: 'var(--accent-primary)', backgroundColor: 'rgba(0,180,216,0.05)' }}>{tech}</span>
                ))}
              </div>

              <div className="flex gap-24">
                <Button variant="outline" style={{ gap: '8px' }}>Repository</Button>
                <Button style={{ gap: '8px' }}>Live Demo <ExternalLink size={18}/></Button>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div style={{ height: '1px', backgroundColor: 'var(--border-subtle)', margin: '0 auto var(--space-120)', width: '100%' }}></div>

          {/* Placeholder for Project 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
            className="flex md-flex-col-reverse gap-64 items-center" style={{ flexDirection: 'row-reverse' }}
          >
            <div className="w-full relative" style={{ flex: 1 }}>
              <div style={{ position: 'absolute', top: '-40px', right: '-20px', fontSize: '180px', fontWeight: 700, color: 'rgba(255,255,255,0.02)', zIndex: 0, lineHeight: 1 }}>02</div>
              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.4 }}
                style={{ height: '400px', backgroundColor: 'var(--surface-1)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}
              >
                <p className="text-sm">Next Project Preview</p>
              </motion.div>
            </div>

            <div className="w-full" style={{ flex: 1 }}>
              <h2 className="text-h2" style={{ textTransform: 'uppercase', marginBottom: 'var(--space-8)' }}>Coming Soon</h2>
              <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-primary)', marginBottom: 'var(--space-24)', borderRadius: '2px' }}></div>
              
              <p className="text-body-lg" style={{ marginBottom: 'var(--space-32)' }}>
                More case studies demonstrating real-world problem solving, clean architecture, and modern full-stack development will be added here soon.
              </p>
              
              <Button variant="outline" style={{ gap: '8px' }}>
                Explore GitHub <ArrowRight size={18}/>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </PageWrapper>
  );
};

export default Projects;
TSX

echo "Updating Contact.tsx..."
cat << 'TSX' > src/pages/Contact.tsx
import { motion } from 'framer-motion';
import { PageWrapper } from '../components/ui/PageWrapper';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input, Textarea } from '../components/ui/Input';

const Contact = () => {
  return (
    <PageWrapper>
      <div style={{ backgroundColor: 'var(--bg-base)', paddingTop: 'var(--space-120)', minHeight: '100vh' }}>
        <div className="container flex md-flex-col gap-64" style={{ padding: 'var(--space-96) var(--space-32)' }}>
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
            className="w-full" style={{ flex: 1 }}
          >
            <h1 className="text-display" style={{ marginBottom: 'var(--space-24)' }}>
              Let's work <br /><span className="gradient-text" style={{ fontStyle: 'italic' }}>together</span>
            </h1>
            <p className="text-body-lg" style={{ marginBottom: 'var(--space-48)' }}>
              I am currently available for freelance projects and professional collaboration. Reach out if you have an exciting project in mind.
            </p>
            
            <div className="flex flex-col gap-24">
              <motion.div whileHover={{ x: 10 }} className="flex items-center gap-24">
                <div style={{ width: '64px', height: '64px', backgroundColor: 'var(--surface-1)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', border: '1px solid var(--border-subtle)', fontSize: '24px' }}>@</div>
                <div>
                  <p className="label-spaced">Email</p>
                  <p className="text-body" style={{ color: 'var(--text-high)', fontSize: '18px' }}>mohamedcody18@gmail.com</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full" style={{ flex: 1 }}
          >
            <Card style={{ padding: 'var(--space-48)', borderRadius: 'var(--radius-lg)' }}>
              <h2 className="text-h2" style={{ marginBottom: 'var(--space-8)' }}>Send a Message</h2>
              <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-primary)', marginBottom: 'var(--space-32)', borderRadius: '2px' }}></div>
              
              <form className="flex flex-col gap-24">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Textarea placeholder="Your Message" />
                <Button size="lg" style={{ width: '100%', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 'var(--space-8)' }}>Submit Message</Button>
              </form>
            </Card>
          </motion.div>

        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
TSX

echo "Updating Footer.tsx..."
cat << 'TSX' > src/components/Footer.tsx
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--surface-1)', borderTop: '1px solid var(--border-subtle)', padding: 'var(--space-64) 0 var(--space-24)', marginTop: 'auto' }}>
      <div className="container">
        <div className="flex justify-between md-flex-col gap-48" style={{ marginBottom: 'var(--space-48)' }}>
          
          <div style={{ flex: '1 1 300px' }}>
            <h3 className="text-h3" style={{ marginBottom: 'var(--space-16)' }}>Mohamed<span style={{ color: 'var(--accent-primary)' }}>.</span></h3>
            <p className="text-body" style={{ marginBottom: 'var(--space-24)' }}>
              Software Engineer building practical, secure, and modern web applications.
            </p>
          </div>

          <div style={{ flex: '1 1 200px' }}>
            <h4 className="label-spaced" style={{ marginBottom: 'var(--space-24)' }}>Quick Links</h4>
            <div className="flex flex-col gap-12 text-body">
              <Link to="/" style={{ transition: 'color var(--transition-fast)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-high)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-medium)'}>Home</Link>
              <Link to="/projects" style={{ transition: 'color var(--transition-fast)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-high)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-medium)'}>Projects</Link>
              <Link to="/contact" style={{ transition: 'color var(--transition-fast)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-high)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-medium)'}>Contact</Link>
            </div>
          </div>

          <div style={{ flex: '1 1 300px' }}>
            <h4 className="label-spaced" style={{ marginBottom: 'var(--space-24)' }}>Contact Info</h4>
            <div style={{ padding: 'var(--space-16)', backgroundColor: 'var(--surface-2)', borderRadius: 'var(--radius-md)', marginBottom: 'var(--space-12)', border: '1px solid var(--border-subtle)' }}>
              <p className="label-spaced" style={{ fontSize: '10px', color: 'var(--text-muted)' }}>Email</p>
              <p className="text-body" style={{ color: 'var(--text-high)' }}>mohamedcody18@gmail.com</p>
            </div>
            <div style={{ padding: 'var(--space-16)', backgroundColor: 'var(--surface-2)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
              <p className="label-spaced" style={{ fontSize: '10px', color: 'var(--text-muted)' }}>Phone</p>
              <p className="text-body" style={{ color: 'var(--text-high)' }}>+20 1148415128</p>
            </div>
          </div>
        </div>

        <div className="text-center text-sm" style={{ paddingTop: 'var(--space-24)', borderTop: '1px solid var(--border-subtle)' }}>
          &copy; {new Date().getFullYear()} Mohamed Saad. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
TSX

