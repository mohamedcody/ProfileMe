const fs = require('fs');

// 1. Inject Premium CSS for Buttons
let css = fs.readFileSync('src/index.css', 'utf8');
const btnCss = `
/* --- Premium Button Aesthetics --- */
.btn-solid-cyber {
  position: relative;
  overflow: hidden;
  background: var(--accent-primary);
  color: #000;
  border: none;
  box-shadow: 0 10px 25px rgba(0, 180, 216, 0.2);
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  font-weight: 700;
  padding: 16px 32px;
  border-radius: 50px;
  font-size: 1.05rem;
  cursor: pointer;
  z-index: 1;
}
.btn-solid-cyber::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.4), rgba(255,255,255,0));
  transform: translateX(-100%) skewX(-15deg);
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  z-index: -1;
}
.btn-solid-cyber:hover {
  box-shadow: 0 15px 35px rgba(0, 180, 216, 0.5);
  transform: translateY(-3px);
}
.btn-solid-cyber:hover::before {
  transform: translateX(100%) skewX(-15deg);
}

.btn-outline-cyber {
  position: relative;
  overflow: hidden;
  background: rgba(255,255,255,0.02);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  font-weight: 600;
  padding: 16px 32px;
  border-radius: 50px;
  font-size: 1.05rem;
  cursor: pointer;
  backdrop-filter: blur(10px);
}
.btn-outline-cyber:hover {
  border-color: var(--accent-primary);
  background: rgba(0, 180, 216, 0.05);
  box-shadow: 0 15px 35px rgba(0, 180, 216, 0.2), inset 0 0 15px rgba(0, 180, 216, 0.1);
  transform: translateY(-3px);
  color: var(--accent-primary);
}
`;
if (!css.includes('.btn-solid-cyber')) {
  fs.writeFileSync('src/index.css', css + btnCss);
}

// 2. Update Home.tsx to use new buttons and animated divider
let home = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// Replace Divider
const oldDividerRegex = /const GlowingDivider = \(\) => \([\s\S]*?<\/div>\n\);\n/m;
const newDivider = `const GlowingDivider = () => (
  <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: 'var(--space-64) 0', overflow: 'hidden' }}>
    <motion.div 
      initial={{ width: '0%', opacity: 0 }}
      whileInView={{ width: '60%', opacity: 0.8 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      style={{ 
        height: '1px', 
        background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)', 
        boxShadow: '0 0 20px var(--accent-primary)', 
        borderRadius: '50%'
      }}
    />
  </div>
);
`;
if (home.match(oldDividerRegex)) {
  home = home.replace(oldDividerRegex, newDivider);
}

// Replace Hero Buttons
const oldButtonsRegex = /<Link to="\/projects" style=\{\{ textDecoration: 'none' \}\}>\s*<motion\.button[\s\S]*?View My Work\s*<\/motion\.button>\s*<\/Link>\s*<Link to="\/contact" style=\{\{ textDecoration: 'none' \}\}>\s*<motion\.button[\s\S]*?Contact Me\s*<\/motion\.button>\s*<\/Link>/m;
const newButtons = `<Link to="/projects" style={{ textDecoration: 'none' }}>
                  <button className="btn-solid-cyber">
                    View My Work
                  </button>
                </Link>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                  <button className="btn-outline-cyber">
                    Contact Me
                  </button>
                </Link>`;
if (home.match(oldButtonsRegex)) {
  home = home.replace(oldButtonsRegex, newButtons);
} else {
    console.log("Could not find hero buttons to replace.");
}

fs.writeFileSync('src/pages/Home.tsx', home);
console.log("Buttons and Divider upgraded.");
