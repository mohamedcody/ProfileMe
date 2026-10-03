import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PageWrapper } from '../components/ui/PageWrapper';

const Contact = () => {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    
    try {
      // Calling the Spring Boot Backend (To be implemented)
      const response = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // clear form
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Backend not reachable yet", error);
      // Simulate success for now so UX works until backend is ready
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }, 1500);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <PageWrapper>
      <div style={{ paddingTop: 'var(--space-120)', paddingBottom: 'var(--space-120)' }}>
        
        {/* Page Header Bar (Identical to Projects) */}
        <div style={{ backgroundColor: 'var(--surface-2)', padding: 'var(--space-64) 0', textAlign: 'center', borderBottom: '1px solid var(--border-subtle)', marginBottom: 'var(--space-96)' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-display" style={{ marginBottom: 'var(--space-16)', color: '#fff', textTransform: 'uppercase' }}
          >
            CONTACT <span style={{ color: 'var(--accent-primary)' }}>ME</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="label-spaced text-caption" style={{ color: 'var(--text-muted)' }}
          >
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-high)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>{t('Home')}</Link> &rsaquo; <span style={{ color: 'var(--accent-primary)' }}>{t('CONTACT ME')}</span>
          </motion.p>
        </div>

        <div className="container">
          
          <div className="flex md-flex-col" style={{ gap: '80px', alignItems: 'flex-start' }}>
            
            {/* Left Column - Huge Typography & Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ flex: '1 1 45%' }}
            >
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, textTransform: 'uppercase', letterSpacing: '-0.01em', marginBottom: 'var(--space-24)' }}>
                LET'S BUILD SOMETHING <br/>
                <span style={{ color: 'var(--accent-primary)', fontStyle: 'italic' }}>GRAND</span> TOGETHER
              </h2>
              
              <p className="text-body" style={{ marginBottom: 'var(--space-48)', maxWidth: '450px', color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1.15rem' }}>
                Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>

              {/* Contact Info List */}
              <div className="flex flex-col gap-32" style={{ marginBottom: 'var(--space-48)' }}>
                
                <div className="flex items-center gap-24">
                  <div style={{ width: '56px', height: '56px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', backgroundColor: 'rgba(255,255,255,0.03)' }}>
                    <Mail size={26} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px', fontWeight: 600 }}>Email</p>
                    <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-high)' }}>mohamedcody18@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-24">
                  <div style={{ width: '56px', height: '56px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', backgroundColor: 'rgba(255,255,255,0.03)' }}>
                    <Phone size={26} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px', fontWeight: 600 }}>{t('Phone')}</p>
                    <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-high)' }}>+20 1148415128</p>
                  </div>
                </div>

                <div className="flex items-center gap-24">
                  <div style={{ width: '56px', height: '56px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', backgroundColor: 'rgba(255,255,255,0.03)' }}>
                    <MapPin size={26} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px', fontWeight: 600 }}>{t('Location')}</p>
                    <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-high)' }}>{t('Cairo, Egypt')}</p>
                  </div>
                </div>

              </div>

              {/* Follow Me Section */}
              <div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-high)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px', fontWeight: 700 }}>{t('FOLLOW ME')}</p>
                <div className="flex gap-48 items-center" style={{ marginTop: 'var(--space-16)' }}>
                  <motion.a 
                    href="https://github.com/mohamedcody" target="_blank" rel="noopener noreferrer" 
                    className="social-btn" aria-label="GitHub"
                    whileHover={{ y: -8, scale: 1.15, rotate: -5, color: '#000', backgroundColor: 'var(--accent-primary)', boxShadow: '0 10px 25px rgba(0, 180, 216, 0.4)' }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                     <svg viewBox="0 0 24 24" width="26" height="26" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  </motion.a>
                  
                  <motion.a 
                    href="#" target="_blank" rel="noopener noreferrer" 
                    className="social-btn" aria-label="LinkedIn"
                    whileHover={{ y: -8, scale: 1.15, rotate: 5, color: '#000', backgroundColor: 'var(--accent-primary)', boxShadow: '0 10px 25px rgba(0, 180, 216, 0.4)' }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                     <svg viewBox="0 0 24 24" width="26" height="26" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
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
              <div style={{ backgroundColor: 'rgba(20,20,20,0.4)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.03)', borderRadius: '24px', padding: '48px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
                
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, textTransform: 'uppercase', color: '#fff' }}>{t('Send me a message')}</h3>
                <div style={{ width: '40px', height: '4px', backgroundColor: 'var(--accent-primary)', marginTop: '12px', marginBottom: '40px', borderRadius: '2px' }}></div>
                
                <form className="flex flex-col gap-24" onSubmit={handleSubmit}>
                  
                  <input 
                    type="text" id="name" required value={formData.name} onChange={handleChange}
                    placeholder={t('Name_Placeholder')} 
                    style={{ 
                      width: '100%', padding: '16px 20px', 
                      backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', 
                      borderRadius: '10px', color: '#fff', outline: 'none', fontSize: '1.05rem',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.05)'}
                  />
                  
                  <input 
                    type="email" id="email" required value={formData.email} onChange={handleChange}
                    placeholder={t('Email_Placeholder')} 
                    style={{ 
                      width: '100%', padding: '16px 20px', 
                      backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', 
                      borderRadius: '10px', color: '#fff', outline: 'none', fontSize: '1.05rem',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.05)'}
                  />
                  
                  <textarea 
                    id="message" required value={formData.message} onChange={handleChange}
                    placeholder={t('Message_Placeholder')} 
                    rows={6}
                    style={{ 
                      width: '100%', padding: '16px 20px', 
                      backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', 
                      borderRadius: '10px', color: '#fff', outline: 'none', fontSize: '1.05rem', resize: 'none',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.05)'}
                  ></textarea>
                  
                  
            <button type="submit" disabled={isSubmitting} className="btn-solid-cyber" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '16px', fontSize: '1.1rem', marginTop: '16px', opacity: isSubmitting ? 0.7 : 1 }}>
              <Send size={20} /> {isSubmitting ? 'Sending...' : t('Send Message')}
            </button>
            
            {status === 'success' && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: 'var(--success)', textAlign: 'center', marginTop: '16px', fontWeight: 600 }}>
                Message sent successfully! I'll get back to you soon.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: '#ff4d4d', textAlign: 'center', marginTop: '16px', fontWeight: 600 }}>
                Failed to send message. Please try again.
              </motion.p>
            )}

                </form>
              </div>
            </motion.div>

          </div>
        </div>

        <style>{`
          .social-btn {
            width: 56px; height: 56px;
            border-radius: 12px;
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
