#!/bin/bash
cd /home/mohamed-saad/front-end-vs/profileMain/portfolio-app

echo "Rewriting Contact.tsx to match new design..."
cat << 'TSX' > src/pages/Contact.tsx
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageWrapper } from '../components/ui/PageWrapper';

const Contact = () => {
  return (
    <PageWrapper>
      <div style={{ paddingTop: 'var(--space-120)', paddingBottom: 'var(--space-120)' }}>
        <div className="container">
          
          <div className="flex md-flex-col gap-64" style={{ alignItems: 'flex-start' }}>
            
            {/* Left Column - Huge Typography & Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ flex: '1 1 50%' }}
            >
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: 'var(--space-32)' }}>
                Let's build something <br/>
                <span style={{ color: 'var(--accent-primary)', fontStyle: 'italic' }}>Grand</span> together
              </h1>
              
              <p className="text-body-lg" style={{ marginBottom: 'var(--space-48)', maxWidth: '450px', color: 'var(--text-medium)', lineHeight: 1.7 }}>
                Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>

              {/* Contact Info List */}
              <div className="flex flex-col gap-32" style={{ marginBottom: 'var(--space-48)' }}>
                
                <div className="flex items-center gap-24">
                  <div style={{ width: '56px', height: '56px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px', fontWeight: 600 }}>Email</p>
                    <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-high)' }}>mohamedcody18@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-24">
                  <div style={{ width: '56px', height: '56px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px', fontWeight: 600 }}>Phone</p>
                    <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-high)' }}>+20 1148415128</p>
                  </div>
                </div>

                <div className="flex items-center gap-24">
                  <div style={{ width: '56px', height: '56px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px', fontWeight: 600 }}>Location</p>
                    <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-high)' }}>Cairo, Egypt</p>
                  </div>
                </div>

              </div>

              {/* Follow Me Section */}
              <div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-high)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 'var(--space-16)', fontWeight: 700 }}>Follow Me</p>
                <div className="flex gap-16 items-center">
                  <motion.a 
                    href="https://github.com/mohamedcody" target="_blank" rel="noopener noreferrer" 
                    className="social-btn" aria-label="GitHub"
                    whileHover={{ y: -4, color: 'var(--accent-primary)', borderColor: 'var(--accent-primary)' }}
                  >
                     <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </motion.a>
                  
                  <motion.a 
                    href="#" target="_blank" rel="noopener noreferrer" 
                    className="social-btn" aria-label="LinkedIn"
                    whileHover={{ y: -4, color: 'var(--accent-primary)', borderColor: 'var(--accent-primary)' }}
                  >
                     <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
            
            {/* Right Column - Contact Form Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ flex: '1 1 50%', width: '100%' }}
            >
              <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: 'var(--space-48)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
                
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 'var(--space-8)', textTransform: 'uppercase' }}>Send me a message</h3>
                <div style={{ width: '40px', height: '3px', backgroundColor: 'var(--accent-primary)', marginBottom: 'var(--space-48)', borderRadius: '2px' }}></div>
                
                <form className="flex flex-col gap-24" onSubmit={(e) => e.preventDefault()}>
                  
                  <input 
                    type="text" 
                    placeholder="Enter Your Name" 
                    style={{ 
                      width: '100%', padding: '18px 24px', 
                      backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', 
                      borderRadius: '12px', color: '#fff', outline: 'none', fontSize: '1rem',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                  />
                  
                  <input 
                    type="email" 
                    placeholder="Enter Your E-mail" 
                    style={{ 
                      width: '100%', padding: '18px 24px', 
                      backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', 
                      borderRadius: '12px', color: '#fff', outline: 'none', fontSize: '1rem',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                  />
                  
                  <textarea 
                    placeholder="Enter your message" 
                    rows={5}
                    style={{ 
                      width: '100%', padding: '18px 24px', 
                      backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', 
                      borderRadius: '12px', color: '#fff', outline: 'none', fontSize: '1rem', resize: 'none',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                  ></textarea>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      width: '100%', padding: '18px', marginTop: 'var(--space-16)',
                      backgroundColor: 'var(--accent-primary)', color: '#000',
                      borderRadius: '50px', fontSize: '1.1rem', fontWeight: 700,
                      border: 'none', cursor: 'pointer', textTransform: 'uppercase',
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
            width: 48px; height: 48px;
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 12px;
            display: flex; align-items: center; justify-content: center;
            color: var(--text-medium);
            background-color: rgba(255,255,255,0.02);
            transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          }
        `}</style>
      </div>
    </PageWrapper>
  );
};

export default Contact;
TSX
