const fs = require('fs');

let navCode = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// Add imports
if (!navCode.includes('useTranslation')) {
  navCode = navCode.replace(
    "import { motion, useScroll, useMotionValueEvent } from 'framer-motion';",
    "import { motion, useScroll, useMotionValueEvent } from 'framer-motion';\nimport { useTranslation } from 'react-i18next';"
  );
  navCode = navCode.replace(
    "import { Download } from 'lucide-react';",
    "import { Download, Globe } from 'lucide-react';"
  );
}

// Inject hooks
if (!navCode.includes('const { t, i18n } = useTranslation()')) {
  navCode = navCode.replace(
    "const Navbar = () => {",
    `const Navbar = () => {
  const { t, i18n } = useTranslation();
  
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };
`
  );
}

// Update Links
navCode = navCode.replace(
  /const links = \[[\s\S]*?\];/m,
  `const links = [
    { name: t('Home'), path: '/' },
    { name: t('Projects'), path: '/projects' },
    { name: t('Services'), path: '/services' },
    { name: t('Contact Me'), path: '/contact' }
  ];`
);

// Update Available Text
navCode = navCode.replace(
  ">Available</span>",
  ">{t('Available')}</span>"
);

// Add Globe Button next to Github/Resume
const rightSideRegex = /<div style=\{\{ display: 'flex', alignItems: 'center', gap: '12px' \}\}>[\s\S]*?<\/div>/m;
const rightSideMatch = navCode.match(rightSideRegex);

if (rightSideMatch) {
  const newRightSide = `
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          
          {/* Language Switcher */}
          <motion.button 
            onClick={toggleLanguage}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }} whileTap={{ scale: 0.95 }} 
            style={{ 
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
              height: '40px', padding: '0 12px', color: '#fff',
              backgroundColor: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px',
              cursor: 'pointer', transition: 'all 0.2s ease', fontWeight: 600, fontSize: '0.9rem'
            }}
          >
            <Globe size={18} /> {i18n.language === 'en' ? 'AR' : 'EN'}
          </motion.button>

          <motion.a 
            href="https://github.com/mohamedcody" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }} whileTap={{ scale: 0.95 }} 
            style={{ 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '40px', height: '40px', color: '#fff',
              backgroundColor: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px',
              cursor: 'pointer', transition: 'all 0.2s ease'
            }}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </motion.a>
          
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <button className="btn-solid-cyber" style={{ 
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '10px 24px', fontSize: '0.95rem', fontWeight: 700, borderRadius: '12px'
            }}>
              <Download size={16} /> {t('Resume')}
            </button>
          </motion.div>
        </div>`;
  navCode = navCode.replace(rightSideRegex, newRightSide);
}

fs.writeFileSync('src/components/Navbar.tsx', navCode);
console.log("Navbar translated and switcher added.");
