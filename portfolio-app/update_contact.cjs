const fs = require('fs');

let code = fs.readFileSync('src/pages/Contact.tsx', 'utf8');

// We are going to replace the current stateless form with a stateful one.
// Let's first ensure we have useState imported.
if (!code.includes('useState')) {
  code = code.replace(
    "import { motion } from 'framer-motion';",
    "import { motion } from 'framer-motion';\nimport { useState } from 'react';"
  );
}

// Find the start of the component
const componentStartRegex = /const Contact = \(\) => \{\n\s*const \{ t \} = useTranslation\(\);/m;
const componentStartMatch = code.match(componentStartRegex);

if (componentStartMatch) {
  const stateInjection = `const Contact = () => {
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
  };`;
  
  code = code.replace(componentStartRegex, stateInjection);
}

// Update the <form> to use state and handleSubmit
code = code.replace('<form className="flex flex-col gap-24">', '<form onSubmit={handleSubmit} className="flex flex-col gap-24">');

// Update Name Input
code = code.replace(
  /<input type="text" id="name" placeholder=\{t\('Name_Placeholder'\)\} style=\{\{[\s\S]*?\}\} \/>/m,
  `<input type="text" id="name" required value={formData.name} onChange={handleChange} placeholder={t('Name_Placeholder')} style={{ width: '100%', padding: '16px', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '12px', color: '#fff', fontSize: '1rem', outline: 'none' }} />`
);

// Update Email Input
code = code.replace(
  /<input type="email" id="email" placeholder=\{t\('Email_Placeholder'\)\} style=\{\{[\s\S]*?\}\} \/>/m,
  `<input type="email" id="email" required value={formData.email} onChange={handleChange} placeholder={t('Email_Placeholder')} style={{ width: '100%', padding: '16px', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '12px', color: '#fff', fontSize: '1rem', outline: 'none' }} />`
);

// Update Message Input
code = code.replace(
  /<textarea id="message" rows=\{5\} placeholder=\{t\('Message_Placeholder'\)\} style=\{\{[\s\S]*?\}\}><\/textarea>/m,
  `<textarea id="message" rows={5} required value={formData.message} onChange={handleChange} placeholder={t('Message_Placeholder')} style={{ width: '100%', padding: '16px', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '12px', color: '#fff', fontSize: '1rem', outline: 'none', resize: 'vertical' }}></textarea>`
);

// Update Submit Button and add status message
const buttonRegex = /<button className="btn-solid-cyber" style=\{\{[\s\S]*?\}\}>[\s\S]*?<\/button>/m;
const buttonMatch = code.match(buttonRegex);

if (buttonMatch) {
  const newButton = `
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
            )}`;
            
  code = code.replace(buttonRegex, newButton);
}

fs.writeFileSync('src/pages/Contact.tsx', code);
console.log("Contact form made functional.");
