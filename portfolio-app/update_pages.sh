#!/bin/bash
cd /home/mohamed-saad/front-end-vs/profileMain/portfolio-app

echo "Updating Home.tsx with actual data..."
cat << 'TSX' > src/pages/Home.tsx
import { Server, Layout, Database, BrainCircuit, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ paddingTop: '110px' }}>
      {/* Hero Section */}
      <section className="container" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <p style={{ color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>Hello, I am</p>
          <h1 className="gradient-text" style={{ fontSize: '96px', lineHeight: 1.1, marginBottom: '24px' }}>Mohamed Saad</h1>
          <p style={{ fontSize: '24px', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '600px' }}>
            A Software Engineer focused on building secure, scalable, and modern full-stack applications.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/projects" className="btn btn-primary">View Projects</Link>
            <Link to="/contact" className="btn btn-outline">Contact Me</Link>
          </div>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <div style={{ width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,180,216,0.2) 0%, rgba(22,27,38,0) 70%)', position: 'absolute' }}></div>
          <div style={{ width: '300px', height: '400px', border: '1px solid var(--border)', borderRadius: '24px', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-card)', overflow: 'hidden' }}>
             <p style={{ color: 'var(--text-secondary)' }}>[ Mohamed's Portrait ]</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container" style={{ padding: '120px 140px', borderTop: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', gap: '80px', alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '48px', marginBottom: '32px', textTransform: 'uppercase' }}>
              &lt; <span className="gradient-text">About Me</span> /&gt;
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '24px' }}>
              I am a <strong style={{ color: 'var(--text-primary)' }}>Software Engineer</strong> with strong backend experience and a deep understanding of application development and engineering fundamentals. 
              I specialize in bridging the gap between complex backend architectures and intuitive frontend interfaces.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '32px' }}>
              Instead of just writing code, I focus on <span style={{ color: 'var(--accent)' }}>solving real business problems</span>. 
              I integrate modern tools, including AI, to improve productivity, while maintaining full responsibility for architectural decisions, security, and maintainability.
            </p>
            <div style={{ borderLeft: '4px solid var(--accent)', paddingLeft: '24px', backgroundColor: 'var(--bg-card-dark)', padding: '24px', borderRadius: '0 16px 16px 0', fontStyle: 'italic' }}>
              "I believe in building practical, secure, and modern web applications where every technology used has a clear purpose."
            </div>
          </div>
          
          <div style={{ flex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              
              <div className="card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: 'rgba(0,180,216,0.1)', color: 'var(--accent)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <Server size={24} />
                </div>
                <h3 style={{ fontSize: '32px', marginBottom: '8px' }}>Backend</h3>
                <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>Java, Spring Boot</p>
              </div>

              <div className="card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: 'rgba(37,99,235,0.1)', color: 'var(--accent-blue)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <Layout size={24} />
                </div>
                <h3 style={{ fontSize: '32px', marginBottom: '8px' }}>Frontend</h3>
                <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>React, Next.js</p>
              </div>

              <div className="card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: 'rgba(16,185,129,0.1)', color: 'var(--success)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <Database size={24} />
                </div>
                <h3 style={{ fontSize: '32px', marginBottom: '8px' }}>Database</h3>
                <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>PostgreSQL, SQL</p>
              </div>

              <div className="card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: 'rgba(168,85,247,0.1)', color: '#a855f7', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <BrainCircuit size={24} />
                </div>
                <h3 style={{ fontSize: '32px', marginBottom: '8px' }}>AI</h3>
                <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>Integration & Parsing</p>
              </div>

            </div>
            
            <div style={{ marginTop: '32px', padding: '16px', borderRadius: '999px', border: '1px dashed var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--success)', boxShadow: '0 0 10px var(--success)' }}></div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', fontWeight: 500 }}>Available for Freelance Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ backgroundColor: 'var(--bg-header-band)', padding: '120px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '48px', textTransform: 'uppercase' }}>&lt; <span className="gradient-text">Services</span> /&gt;</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '400px', textAlign: 'right' }}>Providing end-to-end software solutions focused on client problems and technical excellence.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            <div className="card" style={{ transition: 'transform 0.3s ease' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Backend & REST APIs</h3>
              <div style={{ width: '40px', height: '4px', backgroundColor: 'var(--accent)', marginBottom: '24px', borderRadius: '2px' }}></div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)' }}><CheckCircle2 size={18} color="var(--accent)"/> Robust API Development (Spring Boot)</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)' }}><CheckCircle2 size={18} color="var(--accent)"/> Database Integration & Modeling</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)' }}><CheckCircle2 size={18} color="var(--accent)"/> Secure Authentication (JWT, Spring Security)</li>
              </ul>
            </div>

            <div className="card" style={{ transition: 'transform 0.3s ease' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Full-Stack Development</h3>
              <div style={{ width: '40px', height: '4px', backgroundColor: 'var(--accent)', marginBottom: '24px', borderRadius: '2px' }}></div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)' }}><CheckCircle2 size={18} color="var(--accent)"/> Responsive Web Apps (React, Next.js)</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)' }}><CheckCircle2 size={18} color="var(--accent)"/> Clean UI/UX Implementation</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)' }}><CheckCircle2 size={18} color="var(--accent)"/> Existing Project Improvements</li>
              </ul>
            </div>

            <div className="card" style={{ transition: 'transform 0.3s ease' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>AI Integration</h3>
              <div style={{ width: '40px', height: '4px', backgroundColor: 'var(--accent)', marginBottom: '24px', borderRadius: '2px' }}></div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)' }}><CheckCircle2 size={18} color="var(--accent)"/> Semantic Search & Matching</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)' }}><CheckCircle2 size={18} color="var(--accent)"/> Document Parsing (CV Analysis)</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)' }}><CheckCircle2 size={18} color="var(--accent)"/> AI-Assisted Feature Implementation</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
TSX

echo "Updating Projects.tsx with actual data..."
cat << 'TSX' > src/pages/Projects.tsx
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <div style={{ paddingTop: '110px' }}>
      <div style={{ backgroundColor: 'var(--bg-header-band)', padding: '60px 0', textAlign: 'center' }}>
        <h1 className="gradient-text" style={{ fontSize: '64px', marginBottom: '16px' }}>Case Studies</h1>
        <p style={{ letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '14px', color: 'var(--text-secondary)' }}>
          HOME &rsaquo; <span style={{ color: 'var(--accent)' }}>PROJECTS</span>
        </p>
      </div>
      
      <div className="container" style={{ padding: '100px 140px' }}>
        
        {/* Project 1: JobFinder */}
        <div style={{ display: 'flex', gap: '60px', alignItems: 'center', marginBottom: '120px' }}>
          
          <div style={{ flex: 1, position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-40px', left: '-20px', fontSize: '180px', fontWeight: 700, color: 'rgba(255,255,255,0.02)', zIndex: 0, lineHeight: 1 }}>01</div>
            <div style={{ height: '400px', backgroundColor: 'var(--bg-card)', borderRadius: '40px', border: '1px solid var(--border)', position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ color: 'var(--text-secondary)' }}>[ JobFinder App Preview ]</p>
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '48px', textTransform: 'uppercase', marginBottom: '8px' }}>JobFinder</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent)', marginBottom: '24px', borderRadius: '2px' }}></div>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '24px', lineHeight: 1.8 }}>
              A full-stack job search platform designed to help job seekers discover relevant opportunities through intelligent matching and robust user profiles.
            </p>
            
            <div style={{ marginBottom: '32px' }}>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>Key Engineering Decisions:</h4>
              <ul style={{ color: 'var(--text-secondary)', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Implemented <strong>JWT authentication</strong> & Spring Security for secure user sessions.</li>
                <li>Built an <strong>AI-assisted CV analysis</strong> engine to automatically extract skills from uploads.</li>
                <li>Utilized <strong>Vector search</strong> for semantic matching between job requirements and user profiles.</li>
                <li>Designed a normalized <strong>PostgreSQL</strong> schema to handle relationships between companies, jobs, and applications.</li>
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '32px' }}>
              <span style={{ padding: '6px 16px', borderRadius: '999px', border: '1px solid var(--border)', fontSize: '14px', color: 'var(--accent)' }}>Java</span>
              <span style={{ padding: '6px 16px', borderRadius: '999px', border: '1px solid var(--border)', fontSize: '14px', color: 'var(--accent)' }}>Spring Boot</span>
              <span style={{ padding: '6px 16px', borderRadius: '999px', border: '1px solid var(--border)', fontSize: '14px', color: 'var(--accent)' }}>React</span>
              <span style={{ padding: '6px 16px', borderRadius: '999px', border: '1px solid var(--border)', fontSize: '14px', color: 'var(--accent)' }}>PostgreSQL</span>
            </div>

            <div style={{ display: 'flex', gap: '20px' }}>
              <button className="btn btn-outline" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}><Github size={18}/> Repository</button>
              <button className="btn btn-primary" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>Live Demo <ExternalLink size={18}/></button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: 'var(--border)', margin: '0 auto 120px', width: '100%' }}></div>

        {/* Placeholder for Project 2 */}
        <div style={{ display: 'flex', gap: '60px', alignItems: 'center', flexDirection: 'row-reverse' }}>
          
          <div style={{ flex: 1, position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-40px', right: '-20px', fontSize: '180px', fontWeight: 700, color: 'rgba(255,255,255,0.02)', zIndex: 0, lineHeight: 1 }}>02</div>
            <div style={{ height: '400px', backgroundColor: 'var(--bg-card)', borderRadius: '40px', border: '1px solid var(--border)', position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ color: 'var(--text-secondary)' }}>[ Next Project Preview ]</p>
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '48px', textTransform: 'uppercase', marginBottom: '8px' }}>Coming Soon</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent)', marginBottom: '24px', borderRadius: '2px' }}></div>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '24px', lineHeight: 1.8 }}>
              More case studies demonstrating real-world problem solving, clean architecture, and modern full-stack development will be added here soon.
            </p>
            
            <button className="btn btn-outline" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              Explore GitHub <ArrowRight size={18}/>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
TSX

