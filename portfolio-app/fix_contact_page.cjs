const fs = require('fs');
const file = 'src/pages/Contact.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Fix the HOME link in the breadcrumb
const breadcrumbRegex = /HOME &rsaquo; <span/g;
// Ensure we have Link imported, it should be if not we'll just use an anchor 
// But wait, react-router-dom Link is better. Let's add it if missing.
if (!content.includes("import { Link } from 'react-router-dom';")) {
  content = content.replace("import { motion } from 'framer-motion';", "import { motion } from 'framer-motion';\nimport { Link } from 'react-router-dom';");
}

content = content.replace(
  /HOME &rsaquo; <span/g, 
  `<Link to="/" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-high)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>HOME</Link> &rsaquo; <span`
);

// 2. Fix the Follow Me section (gap-20 -> gap-32, and cool animations)
const followMeRegex = /<div className="flex gap-20 items-center">[\s\S]*?<\/div>\s*<\/div>\s*<\/motion\.div>/m;
const newFollowMe = `<div className="flex gap-48 items-center" style={{ marginTop: 'var(--space-16)' }}>
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
            </motion.div>`;

content = content.replace(followMeRegex, newFollowMe);

fs.writeFileSync(file, content);
console.log("Contact page updated.");
