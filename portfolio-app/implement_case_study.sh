#!/bin/bash
cd /home/mohamed-saad/front-end-vs/profileMain/portfolio-app

echo "Creating config directory and file..."
mkdir -p src/config
cat << 'TS' > src/config/site.ts
export const siteConfig = {
  githubProfile: "https://github.com/mohamedcody",
  projects: {
    jobfinder: {
      repoUrl: "", // [AWAITING YOUR DATA]
      demoUrl: "", // [AWAITING YOUR DATA]
      galleryImages: [
        "/jobfinder-1.jpg", // [AWAITING YOUR DATA]
        "/jobfinder-2.jpg",
        "/jobfinder-3.jpg"
      ]
    }
  }
};
TS

echo "Creating ImageGallery component..."
cat << 'TSX' > src/components/ui/ImageGallery.tsx
import { useState } from 'react';

export const ImageGallery = ({ images, altPrefix }: { images: string[], altPrefix: string }) => {
  return (
    <div className="grid grid-cols-2 md-grid-cols-1 gap-24" style={{ marginTop: 'var(--space-32)' }}>
      {images.map((src, idx) => {
        const [hasError, setHasError] = useState(false);
        return (
          <div 
            key={idx} 
            style={{ 
              backgroundColor: 'var(--surface-1)', 
              borderRadius: 'var(--radius-md)', 
              border: '1px solid var(--border-subtle)', 
              overflow: 'hidden', 
              aspectRatio: '16/9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {!hasError ? (
              <img 
                src={src} 
                alt={`${altPrefix} screenshot ${idx + 1}`} 
                loading="lazy" 
                decoding="async"
                onError={() => setHasError(true)}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Image placeholder</span>
            )}
          </div>
        );
      })}
    </div>
  );
};
TSX

echo "Creating Architecture Diagram component..."
cat << 'TSX' > src/components/ui/ArchitectureDiagram.tsx
export const ArchitectureDiagram = () => {
  return (
    <div 
      aria-label="Architecture flow: React Client sends requests to Spring Boot REST API, which communicates with PostgreSQL, a Vector Search engine, and an AI CV Parsing module."
      style={{ padding: 'var(--space-48)', backgroundColor: 'var(--surface-1)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: 'var(--space-32)', alignItems: 'center' }}
    >
      <div style={{ padding: 'var(--space-16) var(--space-32)', border: '1px solid var(--accent-primary)', borderRadius: 'var(--radius-full)', color: 'var(--text-high)' }}>
        React Client
      </div>
      
      <div style={{ width: '2px', height: '40px', backgroundColor: 'var(--border-subtle)' }}></div>
      
      <div style={{ padding: 'var(--space-16) var(--space-32)', border: '1px solid var(--text-high)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--surface-2)', color: 'var(--text-high)', width: '100%', maxWidth: '300px', textAlign: 'center' }}>
        Spring Boot REST API
      </div>

      <div className="flex w-full justify-center gap-32 md-flex-col md-items-center">
        <div className="flex flex-col items-center">
          <div style={{ width: '2px', height: '40px', backgroundColor: 'var(--border-subtle)' }}></div>
          <div style={{ padding: 'var(--space-16)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', color: 'var(--text-medium)', textAlign: 'center', minWidth: '160px' }}>
            PostgreSQL
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div style={{ width: '2px', height: '40px', backgroundColor: 'var(--border-subtle)' }}></div>
          <div style={{ padding: 'var(--space-16)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', color: 'var(--text-medium)', textAlign: 'center', minWidth: '160px' }}>
            Vector Search
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div style={{ width: '2px', height: '40px', backgroundColor: 'var(--border-subtle)' }}></div>
          <div style={{ padding: 'var(--space-16)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', color: 'var(--text-medium)', textAlign: 'center', minWidth: '160px' }}>
            AI CV Parsing
          </div>
        </div>
      </div>
    </div>
  );
};
TSX

echo "Creating JobFinder Case Study page..."
cat << 'TSX' > src/pages/JobFinder.tsx
import { motion } from 'framer-motion';
import { PageWrapper } from '../components/ui/PageWrapper';
import { Button } from '../components/ui/Button';
import { ImageGallery } from '../components/ui/ImageGallery';
import { ArchitectureDiagram } from '../components/ui/ArchitectureDiagram';
import { siteConfig } from '../config/site';

const JobFinder = () => {
  const data = siteConfig.projects.jobfinder;

  return (
    <PageWrapper>
      <div style={{ paddingTop: '100px', backgroundColor: 'var(--bg-base)', minHeight: '100vh' }}>
        
        {/* Header Section */}
        <header className="container" style={{ padding: 'var(--space-64) var(--space-32)', borderBottom: '1px solid var(--border-subtle)' }}>
          <h1 className="text-display" style={{ marginBottom: 'var(--space-24)', color: 'var(--text-high)' }}>JobFinder Platform</h1>
          
          <div className="grid grid-cols-2 md-grid-cols-1 gap-48">
            <div>
              <p className="text-body-lg" style={{ marginBottom: 'var(--space-32)' }}>
                A full-stack job search application designed to intelligently match candidates with relevant opportunities using semantic vector search and automated CV parsing.
              </p>
              <div className="flex gap-16 flex-wrap">
                {data.demoUrl && <Button as="a" href={data.demoUrl} target="_blank" rel="noopener noreferrer">View Live Demo</Button>}
                {data.repoUrl && <Button as="a" href={data.repoUrl} variant="outline" target="_blank" rel="noopener noreferrer">View Source Code</Button>}
              </div>
            </div>
            
            <div className="flex flex-col gap-16" style={{ padding: 'var(--space-32)', backgroundColor: 'var(--surface-1)', borderRadius: 'var(--radius-md)' }}>
              <div>
                <span className="text-sm" style={{ color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Role</span>
                <p className="text-body" style={{ color: 'var(--text-high)' }}>Full-Stack Engineer</p>
              </div>
              <div>
                <span className="text-sm" style={{ color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Stack</span>
                <p className="text-body" style={{ color: 'var(--text-high)' }}>React, Java, Spring Boot, PostgreSQL, AI Integration</p>
              </div>
              <div>
                <span className="text-sm" style={{ color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Timeline</span>
                <p className="text-body" style={{ color: 'var(--accent-primary)' }}>[AWAITING DATA: e.g., 3 Months]</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content Section */}
        <article className="container" style={{ padding: 'var(--space-64) var(--space-32)' }}>
          
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 'var(--space-96)' }}>
            <h2 className="text-h2" style={{ marginBottom: 'var(--space-16)' }}>The Problem</h2>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--accent-primary)', marginBottom: 'var(--space-24)' }}></div>
            <p className="text-body-lg" style={{ maxWidth: '800px' }}>
              Standard job boards rely on strict keyword matching, which frustrates both applicants and recruiters. Highly qualified candidates are often filtered out simply because they used a synonym, while recruiters spend countless hours manually parsing unstructured CVs. The goal was to build a system that understands the <em>meaning</em> of a candidate's experience.
            </p>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 'var(--space-96)' }}>
            <h2 className="text-h2" style={{ marginBottom: 'var(--space-16)' }}>The Solution</h2>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--accent-primary)', marginBottom: 'var(--space-24)' }}></div>
            <p className="text-body-lg" style={{ maxWidth: '800px', marginBottom: 'var(--space-32)' }}>
              I engineered a platform that automates the ingestion of applicant data and matches it semantically to job postings. Key features include secure role-based authentication, an automated PDF parsing pipeline, and a vector-based search engine.
            </p>
            <ImageGallery images={data.galleryImages} altPrefix="JobFinder Platform" />
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 'var(--space-96)' }}>
            <h2 className="text-h2" style={{ marginBottom: 'var(--space-16)' }}>System Architecture</h2>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--accent-primary)', marginBottom: 'var(--space-24)' }}></div>
            <ArchitectureDiagram />
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 'var(--space-96)' }}>
            <h2 className="text-h2" style={{ marginBottom: 'var(--space-16)' }}>Engineering Decisions</h2>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--accent-primary)', marginBottom: 'var(--space-24)' }}></div>
            
            <div className="flex flex-col gap-32" style={{ maxWidth: '800px' }}>
              <div>
                <h3 className="text-h3" style={{ marginBottom: 'var(--space-8)' }}>JWT + Spring Security</h3>
                <p className="text-body">I implemented stateless JWT authentication to decouple the React client from the backend, ensuring secure and scalable authorization checks for multi-tenant roles (Recruiters vs. Applicants).</p>
              </div>
              <div>
                <h3 className="text-h3" style={{ marginBottom: 'var(--space-8)' }}>Vector Search</h3>
                <p className="text-body">Instead of standard SQL `LIKE` queries, I integrated vector embeddings. This allows the system to calculate the mathematical similarity between a job description and a user's parsed skills, yielding significantly higher matching accuracy.</p>
              </div>
              <div>
                <h3 className="text-h3" style={{ marginBottom: 'var(--space-8)' }}>Normalized PostgreSQL Schema</h3>
                <p className="text-body">Designed a strict, normalized relational database to maintain data integrity across users, companies, job postings, and applications, preventing data anomalies during high-concurrency writes.</p>
              </div>
            </div>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 'var(--space-96)' }}>
            <h2 className="text-h2" style={{ marginBottom: 'var(--space-16)' }}>Challenges & Solutions</h2>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--accent-primary)', marginBottom: 'var(--space-24)' }}></div>
            <p className="text-body-lg" style={{ maxWidth: '800px' }}>
              <strong>Challenge:</strong> [AWAITING DATA: e.g., Handling timeouts during AI CV parsing via the external API]. <br/><br/>
              <strong>Solution:</strong> [AWAITING DATA: e.g., I implemented an asynchronous message queue to process CVs in the background, updating the React UI via WebSockets once parsing completed].
            </p>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 'var(--space-96)' }}>
            <h2 className="text-h2" style={{ marginBottom: 'var(--space-16)' }}>Results & Next Steps</h2>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--accent-primary)', marginBottom: 'var(--space-24)' }}></div>
            <p className="text-body-lg" style={{ maxWidth: '800px' }}>
              <strong>Results:</strong> [AWAITING DATA: e.g., The matching engine successfully matched 90% of mock candidates to relevant roles instantly]. <br/><br/>
              <strong>What's Next:</strong> [AWAITING DATA: e.g., I plan to implement caching with Redis to reduce repetitive database queries on highly trafficked job postings].
            </p>
          </motion.section>

        </article>
      </div>
    </PageWrapper>
  );
};

export default JobFinder;
TSX

echo "Updating App.tsx with new route..."
cat << 'TSX' > src/App.tsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import JobFinder from './pages/JobFinder';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/jobfinder" element={<JobFinder />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Router>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </Router>
    </MotionConfig>
  );
}

export default App;
TSX

echo "Updating Projects.tsx to link to Case Study..."
cat << 'TSX' > src/pages/Projects.tsx
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { PageWrapper } from '../components/ui/PageWrapper';
import { siteConfig } from '../config/site';
import { Link } from 'react-router-dom';

const Projects = () => {
  const jobfinderData = siteConfig.projects.jobfinder;

  return (
    <PageWrapper>
      <div style={{ paddingTop: '100px' }}>
        <div className="container" style={{ padding: 'var(--space-64) var(--space-32) var(--space-32)' }}>
          <h1 className="text-h1" style={{ marginBottom: 'var(--space-16)' }}>Case Studies</h1>
          <p className="text-body-lg" style={{ maxWidth: '600px' }}>Detailed breakdowns of my architectural decisions and full-stack implementations.</p>
        </div>
        
        <div className="container" style={{ padding: 'var(--space-64) var(--space-32)' }}>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
            className="flex md-flex-col gap-64 items-center" style={{ marginBottom: 'var(--space-120)' }}
          >
            <div className="w-full relative" style={{ flex: 1 }}>
              <div 
                style={{ 
                  height: '400px', backgroundColor: 'var(--surface-1)', borderRadius: 'var(--radius-md)', 
                  border: '1px solid var(--border-subtle)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
              >
                <img src="/jobfinder.jpg" alt="JobFinder Interface" onError={(e) => { e.currentTarget.style.display = 'none' }} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>

            <div className="w-full" style={{ flex: 1 }}>
              <h2 className="text-h2" style={{ marginBottom: 'var(--space-16)' }}>JobFinder Platform</h2>
              <p className="text-body-lg" style={{ marginBottom: 'var(--space-32)' }}>
                A full-stack application that allows users to search for jobs. I built the back-end infrastructure to support intelligent job matching based on user profiles.
              </p>
              
              <div className="flex gap-16 flex-wrap" style={{ marginBottom: 'var(--space-32)' }}>
                {['Java', 'Spring Boot', 'React', 'PostgreSQL', 'AI'].map(tech => (
                  <span key={tech} style={{ padding: '4px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', fontSize: 'var(--text-sm)', color: 'var(--text-medium)' }}>{tech}</span>
                ))}
              </div>

              <div className="flex gap-16 flex-wrap items-center">
                <Link to="/projects/jobfinder">
                  <Button variant="primary" style={{ gap: '8px' }}>Read full case study <ArrowRight size={16}/></Button>
                </Link>
                {jobfinderData.repoUrl && (
                  <a href={jobfinderData.repoUrl} target="_blank" rel="noopener noreferrer" className="text-sm" style={{ color: 'var(--text-medium)', textDecoration: 'underline' }}>
                    View repository
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          <div style={{ height: '1px', backgroundColor: 'var(--border-subtle)', margin: '0 auto var(--space-64)', width: '100%' }}></div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center text-center" style={{ padding: 'var(--space-32) 0' }}
          >
            <a href={siteConfig.githubProfile} target="_blank" rel="noopener noreferrer" className="text-body" style={{ color: 'var(--text-high)', textDecoration: 'underline' }}>
              View more projects on GitHub
            </a>
          </motion.div>

        </div>
      </div>
    </PageWrapper>
  );
};

export default Projects;
TSX

