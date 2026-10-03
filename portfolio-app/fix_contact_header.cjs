const fs = require('fs');
const file = 'src/pages/Contact.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldHeaderRegex = /<div style=\{\{ paddingTop: 'var\(--space-96\)', paddingBottom: 'var\(--space-120\)' \}\}>[\s\S]*?<\/div>\s*<div className="container">/m;

const newHeader = `<div style={{ paddingTop: 'var(--space-120)', paddingBottom: 'var(--space-120)' }}>
        
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
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-high)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>HOME</Link> &rsaquo; <span style={{ color: 'var(--accent-primary)' }}>CONTACT ME</span>
          </motion.p>
        </div>

        <div className="container">`;

content = content.replace(oldHeaderRegex, newHeader);

fs.writeFileSync(file, content);
console.log("Contact header matched to Projects header.");
