const fs = require('fs');
const file = 'src/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

const target = `<div className="relative z-10 flex items-center justify-center text-center" style={{ width: '100%', maxWidth: '340px', aspectRatio: '3/4', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 'var(--radius-lg)' }}>
               <p className="text-sm">Portrait Placeholder</p>
            </div>`;

const replacement = `<motion.div whileHover={{ scale: 1.03, rotate: 1 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="relative z-10" style={{ width: '100%', maxWidth: '340px', aspectRatio: '3/4', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.15)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.6)' }}>
               <img src="/profile.jpg" alt="Mohamed Saad" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="eager" />
            </motion.div>`;

content = content.replace(target, replacement);
fs.writeFileSync(file, content);
