const fs = require('fs');
const file = 'src/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetSection = /\{\/\* Right Content \(Premium Image Container\) \*\/\}[\s\S]*?(?=<\/section>)/m;

const newSection = `{/* Right Content (Bigger Image with Spinning Glow) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full flex justify-center items-center relative"
            style={{ flex: '1 1 50%', display: 'flex', justifyContent: 'center' }}
          >
            {/* Soft Glow Behind Image */}
            <div style={{ position: 'absolute', width: '100%', maxWidth: '480px', aspectRatio: '3/4', borderRadius: '32px', background: 'radial-gradient(ellipse at center, rgba(0,180,216,0.15) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 0 }}></div>
            
            <motion.div 
              whileHover={{ y: -8, rotate: 1 }} 
              transition={{ type: "spring", stiffness: 300, damping: 20 }} 
              className="relative z-10 glowing-border-wrapper" 
              style={{ 
                width: '100%', maxWidth: '420px', aspectRatio: '3/4', 
                borderRadius: '32px', 
                boxShadow: '0 30px 60px rgba(0,0,0,0.5), 0 0 50px rgba(0, 180, 216, 0.1)',
                padding: '3px',
                display: 'flex', justifyContent: 'center', alignItems: 'center'
              }}
            >
               <div className="glowing-border-inner">
                 <img 
                   src="/profile.jpg" 
                   alt="Mohamed Saad" 
                   style={{ 
                     width: '100%', height: '100%', 
                     objectFit: 'cover', 
                     objectPosition: 'center 15%',
                     display: 'block',
                     pointerEvents: 'none'
                   }} 
                   loading="eager" 
                 />
               </div>
            </motion.div>
          </motion.div>
        `;

content = content.replace(targetSection, newSection);

// Add the CSS styles at the bottom if not already there
if (!content.includes('glowing-border-wrapper')) {
  const styles = `
        <style>{\`
          @keyframes spin-glow {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
          }
          .glowing-border-wrapper {
            position: relative;
            overflow: hidden;
          }
          .glowing-border-wrapper::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            width: 150%;
            height: 150%;
            background: conic-gradient(from 0deg, transparent 70%, rgba(0, 180, 216, 0.8) 95%, rgba(255, 255, 255, 0.8) 100%);
            animation: spin-glow 4s linear infinite;
            z-index: 0;
          }
          .glowing-border-inner {
            position: relative;
            z-index: 1;
            border-radius: 29px;
            overflow: hidden;
            background-color: var(--surface-1);
            height: 100%;
            width: 100%;
          }
        \`}</style>
      </div>
    </PageWrapper>
  );
};`;
  content = content.replace(/<\/div>\s*<\/PageWrapper>\s*\);\s*\};\s*export default Home;/m, styles + '\nexport default Home;');
}

fs.writeFileSync(file, content);
console.log("Image size and glowing border updated.");
