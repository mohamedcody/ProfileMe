#!/bin/bash
cd /home/mohamed-saad/front-end-vs/profileMain/portfolio-app

echo "Rewriting Contact.tsx for Pixel-Perfect match..."
cat << 'TSX' > src/pages/Contact.tsx
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageWrapper } from '../components/ui/PageWrapper';

const Contact = () => {
  return (
    <PageWrapper>
      <div style={{ paddingTop: 'var(--space-120)', paddingBottom: 'var(--space-120)' }}>
        <div className="container">
          
          <div className="flex md-flex-col" style={{ gap: '80px', alignItems: 'flex-start' }}>
            
            {/* Left Column - Huge Typography & Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ flex: '1 1 45%' }}
            >
              <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, textTransform: 'uppercase', letterSpacing: '-0.01em', marginBottom: 'var(--space-24)' }}>
                LET'S BUILD SOMETHING <br/>
                <span style={{ color: 'var(--accent-primary)', fontStyle: 'italic' }}>GRAND</span> TOGETHER
              </h1>
              
              <p className="text-body" style={{ marginBottom: 'var(--space-48)', maxWidth: '400px', color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>

              {/* Contact Info List */}
              <div className="flex flex-col gap-24" style={{ marginBottom: 'var(--space-48)' }}>
                
                <div className="flex items-center gap-16">
                  <div style={{ width: '48px', height: '48px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', backgroundColor: 'rgba(255,255,255,0.03)' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2px', fontWeight: 600 }}>Email</p>
                    <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-high)' }}>mohamedcody18@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-16">
                  <div style={{ width: '48px', height: '48px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', backgroundColor: 'rgba(255,255,255,0.03)' }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2px', fontWeight: 600 }}>Phone</p>
                    <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-high)' }}>+20 1148415128</p>
                  </div>
                </div>

                <div className="flex items-center gap-16">
                  <div style={{ width: '48px', height: '48px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', backgroundColor: 'rgba(255,255,255,0.03)' }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2px', fontWeight: 600 }}>Location</p>
                    <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-high)' }}>Cairo, Egypt</p>
                  </div>
                </div>

              </div>

              {/* Follow Me Section */}
              <div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-high)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px', fontWeight: 700 }}>FOLLOW ME</p>
                <div className="flex gap-16 items-center">
                  <motion.a 
                    href="https://github.com/mohamedcody" target="_blank" rel="noopener noreferrer" 
                    className="social-btn" aria-label="GitHub"
                    whileHover={{ y: -4, color: '#fff', backgroundColor: 'rgba(0,180,216,0.1)' }}
                  >
                     <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </motion.a>
                  
                  <motion.a 
                    href="#" target="_blank" rel="noopener noreferrer" 
                    className="social-btn" aria-label="LinkedIn"
                    whileHover={{ y: -4, color: '#fff', backgroundColor: 'rgba(0,180,216,0.1)' }}
                  >
                     <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
            
            {/* Right Column - Contact Form Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ flex: '1 1 55%', width: '100%' }}
            >
              <div style={{ backgroundColor: 'rgba(20,20,20,0.4)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.03)', borderRadius: '24px', padding: '40px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
                
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, textTransform: 'uppercase', color: '#fff' }}>Send me a message</h3>
                <div style={{ width: '40px', height: '3px', backgroundColor: 'var(--accent-primary)', marginTop: '8px', marginBottom: '32px', borderRadius: '2px' }}></div>
                
                <form className="flex flex-col gap-16" onSubmit={(e) => e.preventDefault()}>
                  
                  <input 
                    type="text" 
                    placeholder="Enter Your Name" 
                    style={{ 
                      width: '100%', padding: '14px 18px', 
                      backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', 
                      borderRadius: '8px', color: '#fff', outline: 'none', fontSize: '0.9rem',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.05)'}
                  />
                  
                  <input 
                    type="email" 
                    placeholder="Enter Your E-mail" 
                    style={{ 
                      width: '100%', padding: '14px 18px', 
                      backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', 
                      borderRadius: '8px', color: '#fff', outline: 'none', fontSize: '0.9rem',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.05)'}
                  />
                  
                  <textarea 
                    placeholder="Enter your message" 
                    rows={6}
                    style={{ 
                      width: '100%', padding: '14px 18px', 
                      backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', 
                      borderRadius: '8px', color: '#fff', outline: 'none', fontSize: '0.9rem', resize: 'none',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.05)'}
                  ></textarea>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      width: '100%', padding: '16px', marginTop: '8px',
                      backgroundColor: 'var(--accent-primary)', color: '#fff',
                      borderRadius: '30px', fontSize: '0.95rem', fontWeight: 700,
                      border: 'none', cursor: 'pointer', textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      boxShadow: '0 10px 20px rgba(0, 180, 216, 0.2)'
                    }}
                  >
                    Send Message
                  </motion.button>

                </form>
              </div>
            </motion.div>

          </div>
        </div>

        <style>{`
          .social-btn {
            width: 44px; height: 44px;
            border-radius: 10px;
            display: flex; align-items: center; justify-content: center;
            color: var(--text-muted);
            background-color: rgba(255,255,255,0.03);
            transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          }
        `}</style>
      </div>
    </PageWrapper>
  );
};

export default Contact;
TSX
