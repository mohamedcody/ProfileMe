const fs = require('fs');

let code = fs.readFileSync('src/pages/Services.tsx', 'utf8');

// 1. Add required imports if not present
if (!code.includes('AnimatePresence')) {
  code = code.replace(
    "import { motion } from 'framer-motion';",
    "import { motion, AnimatePresence } from 'framer-motion';"
  );
}
if (!code.includes('FileText') || !code.includes('X')) {
  code = code.replace(
    "import { CheckCircle2, CreditCard, MessageSquare } from 'lucide-react';",
    "import { CheckCircle2, CreditCard, MessageSquare, FileText, X } from 'lucide-react';"
  );
}

// 2. Inject State for Modal
if (!code.includes('showGuidelines')) {
  code = code.replace(
    "const [currency, setCurrency] = useState<'USD' | 'EGP'>('EGP');",
    "const [currency, setCurrency] = useState<'USD' | 'EGP'>('EGP');\n  const [showGuidelines, setShowGuidelines] = useState(false);"
  );
}

// 3. Inject Button next to Currency Toggle
const oldToggleRegex = /\{\/\* Currency Toggle \*\/\}\s*<motion\.div[\s\S]*?<\/motion\.div>/m;
const toggleMatch = code.match(oldToggleRegex);

if (toggleMatch) {
  const newToggleSection = `
            <div className="flex gap-16 flex-wrap justify-center">
              {/* Currency Toggle */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }}
                style={{ display: 'flex', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '50px', padding: '6px', border: '1px solid var(--border-subtle)' }}
              >
                <button 
                  onClick={() => setCurrency('EGP')}
                  style={{ 
                    padding: '10px 24px', borderRadius: '50px', border: 'none', 
                    background: currency === 'EGP' ? 'var(--accent-primary)' : 'transparent', 
                    color: currency === 'EGP' ? '#000' : 'var(--text-muted)', 
                    fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s',
                    fontSize: '0.95rem'
                  }}
                >
                  EGP (ج.م)
                </button>
                <button 
                  onClick={() => setCurrency('USD')}
                  style={{ 
                    padding: '10px 24px', borderRadius: '50px', border: 'none', 
                    background: currency === 'USD' ? 'var(--accent-primary)' : 'transparent', 
                    color: currency === 'USD' ? '#000' : 'var(--text-muted)', 
                    fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s',
                    fontSize: '0.95rem'
                  }}
                >
                  USD ($)
                </button>
              </motion.div>

              {/* Guidelines Button */}
              <motion.button 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }}
                onClick={() => setShowGuidelines(true)}
                className="btn-outline-cyber"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 24px', borderRadius: '50px', fontSize: '0.95rem' }}
              >
                <FileText size={18} /> Client Guidelines
              </motion.button>
            </div>
`;
  code = code.replace(oldToggleRegex, newToggleSection);
}

// 4. Inject Modal Component at the end of the PageWrapper
const modalComponent = `
      {/* Client Guidelines Modal */}
      <AnimatePresence>
        {showGuidelines && (
          <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(8,10,15,0.85)', backdropFilter: 'blur(8px)' }}
              onClick={() => setShowGuidelines(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              style={{ 
                position: 'relative', width: '100%', maxWidth: '650px', 
                backgroundColor: 'var(--surface-1)', border: '1px solid var(--border-subtle)', 
                borderRadius: '24px', padding: '40px', maxHeight: '85vh', overflowY: 'auto', 
                zIndex: 1, boxShadow: '0 20px 60px rgba(0,0,0,0.6)' 
              }}
            >
              <button 
                onClick={() => setShowGuidelines(false)} 
                style={{ position: 'absolute', top: '24px', right: '24px', background: 'rgba(255,255,255,0.05)', border: 'none', color: '#fff', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background 0.2s' }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
              >
                <X size={20} />
              </button>
              
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>Client Guidelines</h2>
              <div style={{ width: '40px', height: '3px', backgroundColor: 'var(--accent-primary)', marginBottom: '32px', borderRadius: '2px' }}></div>
              
              <div className="flex flex-col gap-24 text-body" style={{ color: 'var(--text-medium)', lineHeight: 1.7 }}>
                <div>
                  <h4 style={{ color: 'var(--accent-primary)', fontSize: '1.1rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16}/> 1. Scope of Work</h4>
                  <p>The prices listed cover exactly the deliverables mentioned. Any additional features, extra pages, or custom requirements outside the original agreement will require a separate custom quote and timeline adjustment.</p>
                </div>
                
                <div>
                  <h4 style={{ color: 'var(--accent-primary)', fontSize: '1.1rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16}/> 2. Payment Terms</h4>
                  <p>For custom projects, a <strong>50% non-refundable upfront deposit</strong> is required before any development begins. The remaining 50% is due upon final delivery and project approval. Fixed-price services (e.g., Landing Pages) require full payment upfront.</p>
                </div>
                
                <div>
                  <h4 style={{ color: 'var(--accent-primary)', fontSize: '1.1rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16}/> 3. Revisions & Changes</h4>
                  <p>Each service includes up to <strong>2 rounds of major revisions</strong> during the design/development phase. Additional major revisions or changing the core requirements mid-project will be billed at an hourly rate.</p>
                </div>

                <div>
                  <h4 style={{ color: 'var(--accent-primary)', fontSize: '1.1rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={16}/> 4. Communication & Delivery</h4>
                  <p>All official project communication will be handled via Email or a dedicated Slack/Telegram channel. I provide regular progress updates. Source code and deployment assets are handed over only after full payment is received.</p>
                </div>
              </div>

              <div style={{ marginTop: '40px', padding: '24px', backgroundColor: 'rgba(0,180,216,0.05)', border: '1px solid rgba(0,180,216,0.2)', borderRadius: '16px', textAlign: 'center' }}>
                <p style={{ color: '#fff', fontWeight: 600, marginBottom: '16px' }}>Ready to start your project?</p>
                <button onClick={() => setShowGuidelines(false)} className="btn-solid-cyber" style={{ width: '100%' }}>I Understand, Close Guidelines</button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
`;

if (!code.includes('Client Guidelines Modal')) {
  code = code.replace(
    "    </PageWrapper>\n  );\n};\n\nexport default Services;",
    modalComponent + "    </PageWrapper>\n  );\n};\n\nexport default Services;"
  );
  fs.writeFileSync('src/pages/Services.tsx', code);
  console.log("Guidelines Modal injected.");
} else {
  console.log("Guidelines Modal already exists.");
}
