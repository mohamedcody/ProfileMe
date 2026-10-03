#!/bin/bash
cd /home/mohamed-saad/front-end-vs/profileMain/portfolio-app

echo "Updating Home.tsx..."
cat << 'TSX' > src/pages/Home.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { PageWrapper } from '../components/ui/PageWrapper';
import { Link } from 'react-router-dom';

const Home = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <PageWrapper>
      <div>
        {/* Hero Section */}
        <section className="container flex lg-flex-col lg-grid-cols-1 items-center gap-64" style={{ minHeight: '100vh', paddingTop: '100px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full flex-col"
            style={{ flex: 1, order: 2 }}
          >
            <h1 className="text-display" style={{ marginBottom: 'var(--space-24)', color: 'var(--text-high)' }}>
              I build full-stack web applications and AI-integrated platforms for product teams.
            </h1>
            <p className="text-body-lg" style={{ marginBottom: 'var(--space-48)', maxWidth: '540px' }}>
              I am a Software Engineer specializing in Java, Spring Boot, and React. I handle everything from database schema design to responsive front-end development.
            </p>
            <div className="flex gap-24 flex-wrap">
              <Button as="a" href="/resume.pdf" download size="lg" variant="primary">Download resume</Button>
              <Link to="/projects"><Button variant="outline" size="lg">Read case studies</Button></Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full flex justify-center"
            style={{ flex: 1, order: 1 }}
          >
            <div 
              style={{ 
                width: '100%', maxWidth: '320px', aspectRatio: '1/1', 
                backgroundColor: 'var(--surface-1)', borderRadius: 'var(--radius-full)', 
                overflow: 'hidden', border: '1px solid var(--border-subtle)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}
            >
              {!imgError ? (
                <img 
                  src="/profile.jpg" 
                  alt="Mohamed Saad Portrait" 
                  onError={() => setImgError(true)}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <span className="text-body-lg">MS</span>
              )}
            </div>
          </motion.div>
        </section>

        {/* Engineering Philosophy */}
        <section className="container" style={{ padding: 'var(--space-120) var(--space-32)', borderTop: '1px solid var(--border-subtle)' }}>
          <div className="flex md-flex-col gap-64">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
              style={{ flex: 1 }}
            >
              <h2 className="text-h2" style={{ marginBottom: 'var(--space-24)' }}>How I work</h2>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--accent-primary)', marginBottom: 'var(--space-32)' }}></div>
              <p className="text-body-lg" style={{ marginBottom: 'var(--space-24)' }}>
                I write software from the database up to the browser. I do not rely on frameworks to hide poor architecture; I prioritize secure APIs, normalized databases, and clean React components.
              </p>
              <p className="text-body-lg" style={{ marginBottom: 'var(--space-24)' }}>
                Recently, I integrated AI directly into standard application workflows. For example, I built a CV parsing engine that extracts and structures applicant data before writing it to a PostgreSQL database.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
              style={{ flex: 1 }}
            >
              <h2 className="text-h2" style={{ marginBottom: 'var(--space-24)' }}>Applied Skills</h2>
              <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--border-subtle)', marginBottom: 'var(--space-32)' }}></div>
              
              <div className="flex flex-col gap-24">
                <div>
                  <h3 className="text-h3" style={{ marginBottom: 'var(--space-8)' }}>Java & Spring Boot</h3>
                  <p className="text-body">Wrote secure REST APIs with JWT authentication and role-based access control.</p>
                </div>
                <div>
                  <h3 className="text-h3" style={{ marginBottom: 'var(--space-8)' }}>React & Next.js</h3>
                  <p className="text-body">Built client-side applications with global state management and custom hooks.</p>
                </div>
                <div>
                  <h3 className="text-h3" style={{ marginBottom: 'var(--space-8)' }}>PostgreSQL</h3>
                  <p className="text-body">Designed normalized relational schemas and wrote raw SQL queries for data aggregation.</p>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* What I've Built (Replacing Services) */}
        <section style={{ backgroundColor: 'var(--surface-1)', padding: 'var(--space-120) 0', borderTop: '1px solid var(--border-subtle)' }}>
          <div className="container">
            <h2 className="text-h2" style={{ marginBottom: 'var(--space-16)' }}>What I have built</h2>
            <p className="text-body-lg" style={{ marginBottom: 'var(--space-64)', maxWidth: '600px' }}>
              Specific examples of features and systems I implemented in recent projects.
            </p>

            <div className="grid grid-cols-3 lg-grid-cols-2 md-grid-cols-1 gap-32">
              {[
                { title: 'Semantic Search Engines', description: 'Implemented vector embeddings to match user queries with database records based on meaning, rather than exact keywords.' },
                { title: 'Document Parsing Pipelines', description: 'Wrote an AI-assisted pipeline that accepts user-uploaded PDFs, extracts relevant text, and maps the output directly to relational database columns.' },
                { title: 'Secure Authentication', description: 'Configured Spring Security to issue, validate, and refresh JSON Web Tokens (JWT) for multi-role user systems.' },
              ].map((item, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.15 }} viewport={{ once: true }}>
                  <div style={{ padding: 'var(--space-32)', backgroundColor: 'var(--bg-base)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', height: '100%' }}>
                    <h3 className="text-h3" style={{ marginBottom: 'var(--space-16)' }}>{item.title}</h3>
                    <p className="text-body">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div style={{ marginTop: 'var(--space-64)' }}>
               <Link to="/projects"><Button variant="outline">Read the JobFinder case study</Button></Link>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Home;
TSX

echo "Updating Projects.tsx..."
cat << 'TSX' > src/pages/Projects.tsx
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { PageWrapper } from '../components/ui/PageWrapper';
import { useState } from 'react';

const ProjectCard = ({ 
  title, description, tags, features, demoUrl, repoUrl, imgSrc, reversed 
}: { 
  title: string, description: string, tags: string[], features: string[], demoUrl?: string, repoUrl?: string, imgSrc: string, reversed?: boolean 
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
      className={`flex md-flex-col gap-64 items-center ${reversed ? 'flex-row-reverse' : ''}`} style={{ marginBottom: 'var(--space-120)' }}
    >
      <div className="w-full relative" style={{ flex: 1 }}>
        <div 
          style={{ 
            height: '400px', backgroundColor: 'var(--surface-1)', borderRadius: 'var(--radius-md)', 
            border: '1px solid var(--border-subtle)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}
        >
          {!imgError ? (
            <img src={imgSrc} alt={`${title} interface`} onError={() => setImgError(true)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
          ) : (
            <span className="text-body">Image file not found in /public</span>
          )}
        </div>
      </div>

      <div className="w-full" style={{ flex: 1 }}>
        <h2 className="text-h2" style={{ marginBottom: 'var(--space-16)' }}>{title}</h2>
        <p className="text-body-lg" style={{ marginBottom: 'var(--space-32)' }}>{description}</p>
        
        <div style={{ marginBottom: 'var(--space-32)' }}>
          <h4 className="text-body" style={{ color: 'var(--text-high)', marginBottom: 'var(--space-16)', fontWeight: 600 }}>What I built</h4>
          <ul className="text-body flex flex-col gap-8" style={{ paddingLeft: 'var(--space-24)', listStyleType: 'disc' }}>
            {features.map((feature, i) => <li key={i}>{feature}</li>)}
          </ul>
        </div>

        <div className="flex gap-16 items-center" style={{ marginBottom: 'var(--space-32)', flexWrap: 'wrap' }}>
          {tags.map(tech => (
            <span key={tech} style={{ padding: '4px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', fontSize: 'var(--text-sm)', color: 'var(--text-medium)' }}>{tech}</span>
          ))}
        </div>

        <div className="flex gap-16 flex-wrap">
          {repoUrl && <Button as="a" href={repoUrl} variant="outline" style={{ gap: '8px' }}><Github size={16}/> View source code</Button>}
          {demoUrl && <Button as="a" href={demoUrl} variant="primary" style={{ gap: '8px' }}>Open JobFinder live <ExternalLink size={16}/></Button>}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <PageWrapper>
      <div style={{ paddingTop: '100px' }}>
        <div className="container" style={{ padding: 'var(--space-64) var(--space-32) var(--space-32)' }}>
          <h1 className="text-h1" style={{ marginBottom: 'var(--space-16)' }}>Case Studies</h1>
          <p className="text-body-lg" style={{ maxWidth: '600px' }}>Detailed breakdowns of my architectural decisions and full-stack implementations.</p>
        </div>
        
        <div className="container" style={{ padding: 'var(--space-64) var(--space-32)' }}>
          
          <ProjectCard 
            title="JobFinder Platform"
            description="A full-stack application that allows users to search for jobs. I built the back-end infrastructure to support intelligent job matching based on user profiles."
            tags={['Java', 'Spring Boot', 'React', 'PostgreSQL', 'JWT']}
            features={[
              'Configured Spring Security for secure user sessions.',
              'Wrote a parser that extracts data from uploaded CVs.',
              'Implemented vector search to match job requirements with applicant skills.',
              'Designed a normalized PostgreSQL database schema for jobs and applications.'
            ]}
            imgSrc="/jobfinder.jpg"
            demoUrl="#"
            repoUrl="#"
          />

          <div style={{ height: '1px', backgroundColor: 'var(--border-subtle)', margin: '0 auto var(--space-120)', width: '100%' }}></div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center text-center" style={{ padding: 'var(--space-64) 0' }}
          >
            <h2 className="text-h2" style={{ marginBottom: 'var(--space-16)' }}>More coming soon</h2>
            <p className="text-body-lg" style={{ marginBottom: 'var(--space-32)', maxWidth: '500px' }}>
              I am currently documenting more full-stack projects showcasing real-world problem solving.
            </p>
            <Button as="a" href="https://github.com/mohamedcody" variant="outline" style={{ gap: '8px' }}>
              <Github size={16}/> View my GitHub profile
            </Button>
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
            <h1 className="text-display" style={{ marginBottom: 'var(--space-24)', color: 'var(--text-high)' }}>
              Get in touch
            </h1>
            <p className="text-body-lg" style={{ marginBottom: 'var(--space-48)' }}>
              I am available for software engineering roles and freelance collaboration. Send me an email and I will respond within 24 hours.
            </p>
            
            <div className="flex flex-col gap-24">
              <motion.div whileHover={{ x: 10 }} className="flex items-center gap-24">
                <div style={{ width: '64px', height: '64px', backgroundColor: 'var(--surface-1)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', border: '1px solid var(--border-subtle)', fontSize: '24px' }}>@</div>
                <div>
                  <p className="text-sm" style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email address</p>
                  <p className="text-body" style={{ color: 'var(--text-high)', fontSize: '18px' }}>mohamedcody18@gmail.com</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full" style={{ flex: 1 }}
          >
            <div style={{ padding: 'var(--space-48)', backgroundColor: 'var(--surface-1)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
              <h2 className="text-h2" style={{ marginBottom: 'var(--space-8)' }}>Send me an email</h2>
              <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-primary)', marginBottom: 'var(--space-32)', borderRadius: '2px' }}></div>
              
              <form className="flex flex-col gap-24">
                <Input placeholder="Your full name" />
                <Input type="email" placeholder="Your email address" />
                <Textarea placeholder="How can I help you?" />
                <Button size="lg" style={{ width: '100%', marginTop: 'var(--space-8)' }}>Send message</Button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
TSX

