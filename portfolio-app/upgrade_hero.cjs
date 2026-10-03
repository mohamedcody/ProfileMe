const fs = require('fs');
const file = 'src/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Upgrade the H1 Typography (Asymmetry, Overlap, Stroke)
const oldH1Regex = /<motion\.h1\s*variants=\{\{ hidden: \{ opacity: 0, y: 15 \}, visible: \{ opacity: 1, y: 0, transition: \{ duration: 0\.5, ease: 'easeOut' \} \} \}\}\s*style=\{\{ fontSize: 'clamp\(3rem, 5\.5vw, 5\.5rem\)', fontWeight: 800, lineHeight: 1\.05, textTransform: 'uppercase', letterSpacing: '-0\.02em', marginBottom: '12px', color: '#fff' \}\}\s*>\s*MOHAMED <br\/><span style=\{\{ color: 'var\(--accent-primary\)' \}\}>SAAD<\/span>\s*<\/motion\.h1>/m;

const newH1 = `<motion.h1 
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}
                style={{ 
                  fontSize: 'clamp(4.5rem, 9vw, 9rem)', 
                  fontWeight: 900, 
                  lineHeight: 0.9, 
                  textTransform: 'uppercase', 
                  letterSpacing: '-0.03em', 
                  marginBottom: '32px', 
                  position: 'relative',
                  zIndex: 20
                }}
              >
                <span style={{ color: '#fff', display: 'block' }}>MOHAMED</span>
                <span style={{ 
                  color: 'transparent', 
                  WebkitTextStroke: '2px var(--accent-primary)', 
                  display: 'block',
                  marginLeft: '8%',
                  textShadow: '0 0 30px rgba(0, 180, 216, 0.2)'
                }}>SAAD</span>
              </motion.h1>`;

if (content.match(oldH1Regex)) {
  content = content.replace(oldH1Regex, newH1);
} else {
  console.log("Could not find H1 to replace. Maybe regex mismatch.");
}

// 2. Adjust the Image container to overlap the text slightly (bringing it closer)
// The flex container has gap: '40px', let's make the container overlap by using negative margins on the image wrapper
const oldImageWrapperRegex = /<motion\.div \n\s*initial=\{\{ opacity: 0, scale: 0\.95 \}\} \n\s*animate=\{\{ opacity: 1, scale: 1 \}\} \n\s*transition=\{\{ duration: 0\.8, delay: 0\.2, ease: \[0\.22, 1, 0\.36, 1\] \}\}\n\s*className="w-full flex justify-center items-center relative"\n\s*style=\{\{ flex: '1 1 50%', display: 'flex', justifyContent: 'center' \}\}\n\s*>/m;

const newImageWrapper = `<motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }} 
            animate={{ opacity: 1, scale: 1, x: 0 }} 
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-full flex justify-center items-center relative"
            style={{ flex: '1 1 50%', display: 'flex', justifyContent: 'center', marginLeft: '-5%' }}
          >`;

if (content.match(oldImageWrapperRegex)) {
  content = content.replace(oldImageWrapperRegex, newImageWrapper);
}

// 3. Make the "Hello I am" intro more editorial
const oldIntroRegex = /<motion\.p variants=\{\{ hidden: \{ opacity: 0, y: 15 \}, visible: \{ opacity: 1, y: 0, transition: \{ duration: 0\.5, ease: 'easeOut' \} \} \}\} style=\{\{ color: 'var\(--accent-primary\)', fontWeight: 600, letterSpacing: '0\.1em', marginBottom: '12px', fontSize: '1rem', textTransform: 'uppercase' \}\}>Hello! I am<\/motion\.p>/m;

const newIntro = `<motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } } }} style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--accent-primary)' }}></div>
                <p style={{ color: 'var(--accent-primary)', fontWeight: 600, letterSpacing: '0.2em', fontSize: '0.9rem', textTransform: 'uppercase', margin: 0 }}>Hello, I am</p>
              </motion.div>`;

if (content.match(oldIntroRegex)) {
  content = content.replace(oldIntroRegex, newIntro);
}

fs.writeFileSync(file, content);
console.log("Hero upgraded to Awwwards aesthetics.");
