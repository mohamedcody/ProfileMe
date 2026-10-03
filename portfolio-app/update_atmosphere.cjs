const fs = require('fs');

// 1. Add Atmosphere CSS to index.css
let css = fs.readFileSync('src/index.css', 'utf8');

const atmosphereCSS = `
/* --- Cinematic Atmosphere & Noise --- */
.noise-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.04; /* Ultra-subtle cinematic grain */
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}

.mesh-gradient-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: -1;
  background: 
    radial-gradient(circle at 50% 0%, rgba(0, 180, 216, 0.04) 0%, transparent 40%),
    radial-gradient(circle at 85% 80%, rgba(37, 99, 235, 0.02) 0%, transparent 40%),
    radial-gradient(circle at 10% 90%, rgba(139, 92, 246, 0.015) 0%, transparent 40%);
}
`;

if (!css.includes('.noise-overlay')) {
  fs.writeFileSync('src/index.css', css + atmosphereCSS);
}

// 2. Inject into Layout.tsx
let layout = fs.readFileSync('src/components/Layout.tsx', 'utf8');
const oldLayoutRegex = /<div style=\{\{ display: 'flex', flexDirection: 'column', minHeight: '100vh' \}\}>/m;
const newLayout = `<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
      <div className="mesh-gradient-bg"></div>
      <div className="noise-overlay"></div>`;

if (!layout.includes('noise-overlay')) {
  layout = layout.replace(oldLayoutRegex, newLayout);
  fs.writeFileSync('src/components/Layout.tsx', layout);
}

console.log("Atmosphere and noise added.");
