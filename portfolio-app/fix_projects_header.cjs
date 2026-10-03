const fs = require('fs');
const file = 'src/pages/Projects.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldHeaderRegex = /<div style=\{\{ backgroundColor: 'var\(--surface-2\)', padding: 'var\(--space-64\) 0', textAlign: 'center', borderBottom: '1px solid var\(--border-subtle\)' \}\}>[\s\S]*?<\/div>/m;

const newHeader = `<div style={{ backgroundColor: 'var(--surface-2)', padding: 'var(--space-64) 0', textAlign: 'center', borderBottom: '1px solid var(--border-subtle)', marginBottom: 'var(--space-96)' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-display" style={{ marginBottom: 'var(--space-16)', color: '#fff', textTransform: 'uppercase' }}
          >
            CASE <span style={{ color: 'var(--accent-primary)' }}>STUDIES</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="label-spaced text-caption" style={{ color: 'var(--text-muted)' }}
          >
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-high)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>HOME</Link> &rsaquo; <span style={{ color: 'var(--accent-primary)' }}>CASE STUDIES</span>
          </motion.p>
        </div>`;

// Wait, Projects.tsx might not have Link imported! Let's check imports.
if (!content.includes("import { Link }")) {
    content = content.replace("import { motion, AnimatePresence } from 'framer-motion';", "import { motion, AnimatePresence } from 'framer-motion';\nimport { Link } from 'react-router-dom';");
}

content = content.replace(oldHeaderRegex, newHeader);

// Adjust spacing in Projects container
// Projects currently has: <div className="container" style={{ padding: 'var(--space-120) var(--space-32)' }}>
// Because we added marginBottom: 96 to the header, we can change the container padding-top to 0 or leave it so it spaces properly.
// Let's leave it and see, or just replace var(--space-120) with var(--space-32) on top.
content = content.replace(
  `className="container" style={{ padding: 'var(--space-120) var(--space-32)' }}`,
  `className="container" style={{ padding: '0 var(--space-32) var(--space-120)' }}`
);

fs.writeFileSync(file, content);
console.log("Projects header matched to Contact header.");
