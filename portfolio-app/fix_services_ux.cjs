const fs = require('fs');

let code = fs.readFileSync('src/pages/Services.tsx', 'utf8');

// Regex to capture the entire messy section: from {/* Trust Banner & Currency Toggle */} down to the end of the flex gap-16 flex-wrap justify-center div.
const oldSectionRegex = /\{\/\* Trust Banner & Currency Toggle \*\/\}[\s\S]*?\{\/\* Services List \*\/\}/;

const newSection = `{/* Editorial Intro & Control Toolbar */}
          <div style={{ maxWidth: '1000px', margin: '0 auto 80px' }}>
            
            {/* Sleek Trust Statement (Editorial Style) */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              style={{ 
                fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', color: 'var(--text-medium)', 
                lineHeight: 1.8, marginBottom: '64px', 
                borderLeft: '3px solid var(--accent-primary)', paddingLeft: '32px' 
              }}
            >
              I deliver <strong style={{ color: '#fff' }}>scalable business solutions</strong>, not just code. 
              Whether automating manual processes or building high-performance applications, 
              you get transparent pricing, clear deliverables, and robust engineering.
            </motion.p>

            {/* The Control Toolbar (Clean, Human-designed UI) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              style={{ 
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px',
                paddingBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.08)'
              }}
            >
              {/* Guidelines Action */}
              <button 
                onClick={() => setShowGuidelines(true)}
                style={{ 
                  background: 'transparent', border: 'none', color: 'var(--text-high)', 
                  display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem', 
                  fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', 
                  cursor: 'pointer', transition: 'color 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-high)'}
              >
                <FileText size={18} style={{ opacity: 0.8 }} /> Client Guidelines
              </button>

              {/* Currency Switcher (SaaS Style) */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Billing Currency:</span>
                
                <div style={{ display: 'flex', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '8px', padding: '4px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <button 
                    onClick={() => setCurrency('EGP')}
                    style={{ 
                      padding: '6px 20px', borderRadius: '6px', border: 'none', 
                      background: currency === 'EGP' ? 'var(--accent-primary)' : 'transparent', 
                      color: currency === 'EGP' ? '#000' : 'var(--text-muted)', 
                      fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s', fontSize: '0.85rem'
                    }}
                  >
                    EGP
                  </button>
                  <button 
                    onClick={() => setCurrency('USD')}
                    style={{ 
                      padding: '6px 20px', borderRadius: '6px', border: 'none', 
                      background: currency === 'USD' ? 'var(--accent-primary)' : 'transparent', 
                      color: currency === 'USD' ? '#000' : 'var(--text-muted)', 
                      fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s', fontSize: '0.85rem'
                    }}
                  >
                    USD
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Services List */}`;

if (code.match(oldSectionRegex)) {
  code = code.replace(oldSectionRegex, newSection);
  fs.writeFileSync('src/pages/Services.tsx', code);
  console.log("Services UX cleaned and refined.");
} else {
  console.log("Could not find the section to replace.");
}

