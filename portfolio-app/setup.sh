#!/bin/bash
cd /home/mohamed-saad/front-end-vs/profileMain/portfolio-app

npm install react-router-dom lucide-react

mkdir -p src/components src/pages

cat << 'CSS' > src/index.css
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700&display=swap');

:root {
  --bg-main: #161b26;
  --bg-header-band: #0f1115;
  --bg-contact: #000000;
  --bg-card: #1f2430;
  --bg-card-dark: #0d0d0d;
  --bg-input: #1a1a1a;
  --accent: #00b4d8;
  --accent-btn: #0891b2;
  --accent-blue: #2563eb;
  --text-primary: #ffffff;
  --text-secondary: #9ca3af;
  --border: rgba(255, 255, 255, 0.08);
  --success: #10b981;

  --font-main: 'Outfit', sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--bg-main);
  color: var(--text-primary);
  font-family: var(--font-main);
  line-height: 1.6;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

h1, h2, h3, h4, h5, h6 {
  color: var(--text-primary);
  font-weight: 700;
}

.gradient-text {
  background: linear-gradient(90deg, #ffffff, #00d4ff, #2563eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 140px;
}
@media (max-width: 1280px) {
  .container { padding: 0 60px; }
}
@media (max-width: 768px) {
  .container { padding: 0 20px; }
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 999px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  font-family: inherit;
}

.btn-primary {
  background-color: var(--accent-btn);
  color: #fff;
  box-shadow: 0 4px 20px rgba(8, 145, 178, 0.4);
}
.btn-primary:hover {
  background-color: var(--accent);
  box-shadow: 0 6px 25px rgba(0, 180, 216, 0.6);
  transform: translateY(-2px);
}

.btn-outline {
  background-color: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border);
}
.btn-outline:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.card {
  background-color: var(--bg-card);
  border-radius: 32px;
  border: 1px solid var(--border);
  padding: 32px;
}
CSS

cat << 'TSX' > src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
TSX

cat << 'TSX' > src/components/Layout.tsx
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
TSX

cat << 'TSX' > src/components/Navbar.tsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Download, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyle = {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    height: isScrolled ? '75px' : '110px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 5%',
    backgroundColor: isScrolled ? 'rgba(22, 27, 38, 0.95)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
    borderBottom: isScrolled ? '1px solid var(--border)' : 'none',
    transition: 'all 0.3s ease',
    zIndex: 1000,
  };

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav style={navStyle}>
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
        <Link to="/">Mohamed<span style={{ color: 'var(--accent)' }}>.</span></Link>
      </div>
      
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link 
              key={link.path} 
              to={link.path}
              style={{
                color: isActive ? 'var(--accent)' : 'var(--text-primary)',
                backgroundColor: isActive ? '#082f37' : 'transparent',
                padding: '8px 16px',
                borderRadius: '999px',
                fontWeight: 500,
                transition: 'all 0.3s'
              }}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      <div>
        <button className="btn btn-outline" style={{ gap: '8px' }}>
          <Download size={18} />
          Resume
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
TSX

cat << 'TSX' > src/components/Footer.tsx
const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--bg-main)', borderTop: '1px solid var(--border)', padding: '60px 0 20px', marginTop: 'auto' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '40px', marginBottom: '40px' }}>
          
          <div style={{ flex: '1 1 300px' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Mohamed<span style={{ color: 'var(--accent)' }}>.</span></h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Software Engineer building practical, secure, and modern web applications.
            </p>
          </div>

          <div style={{ flex: '1 1 200px' }}>
            <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '13px', marginBottom: '20px', color: 'var(--text-secondary)' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="/">Home</a>
              <a href="/projects">Projects</a>
              <a href="/contact">Contact</a>
            </div>
          </div>

          <div style={{ flex: '1 1 300px' }}>
            <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '13px', marginBottom: '20px', color: 'var(--text-secondary)' }}>Contact Info</h4>
            <div className="card" style={{ padding: '16px', marginBottom: '12px', borderRadius: '16px' }}>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Email</p>
              <p>mohamedcody18@gmail.com</p>
            </div>
            <div className="card" style={{ padding: '16px', borderRadius: '16px' }}>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Phone</p>
              <p>+20 1148415128</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
TSX

cat << 'TSX' > src/pages/Home.tsx
const Home = () => {
  return (
    <div style={{ paddingTop: '110px' }}>
      <section className="container" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <p style={{ color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px' }}>Hello, I am</p>
          <h1 className="gradient-text" style={{ fontSize: '96px', lineHeight: 1.1, marginBottom: '24px' }}>Mohamed Saad</h1>
          <p style={{ fontSize: '24px', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '600px' }}>
            A Software Engineer focused on building secure, scalable, and modern web applications.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <button className="btn btn-primary">View Projects</button>
            <button className="btn btn-outline">Contact Me</button>
          </div>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <div style={{ width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,180,216,0.2) 0%, rgba(22,27,38,0) 70%)', position: 'absolute' }}></div>
          <div style={{ width: '300px', height: '400px', border: '1px solid var(--border)', borderRadius: '24px', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-card)' }}>
            [ Portrait Placeholder ]
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
TSX

cat << 'TSX' > src/pages/Projects.tsx
const Projects = () => {
  return (
    <div style={{ paddingTop: '110px' }}>
      <div style={{ backgroundColor: 'var(--bg-header-band)', padding: '60px 0', textAlign: 'center' }}>
        <h1 className="gradient-text" style={{ fontSize: '64px', marginBottom: '16px' }}>My Projects</h1>
        <p style={{ letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '14px', color: 'var(--text-secondary)' }}>
          HOME &rsaquo; <span style={{ color: 'var(--accent)' }}>PROJECTS</span>
        </p>
      </div>
      <div className="container" style={{ padding: '100px 140px' }}>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center' }}>Projects showcase coming soon...</p>
      </div>
    </div>
  );
};

export default Projects;
TSX

cat << 'TSX' > src/pages/Contact.tsx
const Contact = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-contact)', paddingTop: '110px', minHeight: '100vh' }}>
      <div className="container" style={{ display: 'flex', gap: '60px', padding: '100px 140px' }}>
        
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: '64px', lineHeight: 1.1, marginBottom: '24px' }}>
            Let's work <br /><span className="gradient-text" style={{ fontStyle: 'italic' }}>together</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '48px', fontSize: '18px' }}>
            I am currently available for freelance projects and professional collaboration. Reach out if you have an exciting project in mind.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--bg-card)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>@</div>
              <div>
                <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>Email</p>
                <p style={{ fontSize: '18px', fontWeight: 500 }}>mohamedcody18@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <div className="card" style={{ backgroundColor: 'var(--bg-card-dark)', padding: '48px', borderRadius: '48px' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '8px' }}>Send a Message</h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent)', marginBottom: '32px', borderRadius: '2px' }}></div>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '16px 24px', backgroundColor: 'var(--bg-input)', border: '1px solid var(--border)', borderRadius: '16px', color: '#fff', fontSize: '16px' }} />
              <input type="email" placeholder="Your Email" style={{ width: '100%', padding: '16px 24px', backgroundColor: 'var(--bg-input)', border: '1px solid var(--border)', borderRadius: '16px', color: '#fff', fontSize: '16px' }} />
              <textarea placeholder="Your Message" style={{ width: '100%', padding: '16px 24px', backgroundColor: 'var(--bg-input)', border: '1px solid var(--border)', borderRadius: '16px', color: '#fff', fontSize: '16px', minHeight: '210px', resize: 'vertical' }}></textarea>
              <button type="button" className="btn btn-primary" style={{ width: '100%', padding: '16px', fontSize: '18px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Submit Message</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
TSX
