const fs = require('fs');
const file = 'src/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

const heroRegex = /\{\/\* Upgraded Hero Section \*\/\}[\s\S]*?(?=\{\/\* About Section \*\/)/m;

const premiumHero = `{/* Premium Hero Section */}
        <section className="container flex md-flex-col md-items-center" style={{ minHeight: '90vh', alignItems: 'center', gap: '40px', paddingTop: 'var(--space-64)' }}>
          
          {/* Left Content (Staggered Animation) */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="w-full"
            style={{ flex: '1 1 50%', display: 'flex', flexDirection: 'col', justifyContent: 'center' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <motion.p 
                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
                style={{ color: 'var(--accent-primary)', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '12px', fontSize: '1rem', textTransform: 'uppercase' }}
              >
                Hello! I am
              </motion.p>
              
              <motion.h1 
                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
                style={{ fontSize: 'clamp(3rem, 5.5vw, 5.5rem)', fontWeight: 800, lineHeight: 1.05, textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '12px', color: '#fff' }}
              >
                MOHAMED <br/><span style={{ color: 'var(--accent-primary)' }}>SAAD</span>
              </motion.h1>
              
              <motion.h2 
                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
                style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)', fontWeight: 500, color: 'rgba(255,255,255,0.7)', marginBottom: '32px', letterSpacing: '0.02em' }}
              >
                Software Engineer
              </motion.h2>
              
              <motion.p 
                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
                className="text-body" style={{ marginBottom: '48px', maxWidth: '480px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, fontSize: '1.05rem' }}
              >
                Building secure, scalable, and modern full-stack applications focused on speed, clean architecture, and exceptional user experiences.
              </motion.p>
              
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
                className="flex gap-16 flex-wrap"
              >
                <Link to="/projects" style={{ textDecoration: 'none' }}>
                  <motion.button 
                    whileHover={{ y: -3, boxShadow: '0 10px 25px rgba(0, 180, 216, 0.3)' }} 
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }} 
                    style={{ padding: '16px 32px', backgroundColor: 'var(--accent-primary)', color: '#000', borderRadius: '50px', fontWeight: 700, fontSize: '1.05rem', border: 'none', cursor: 'pointer', transition: 'background 0.2s' }}
                  >
                    View My Work
                  </motion.button>
                </Link>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                  <motion.button 
                    whileHover={{ y: -3, backgroundColor: 'rgba(255,255,255,0.08)' }} 
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }} 
                    style={{ padding: '16px 32px', backgroundColor: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50px', fontWeight: 600, fontSize: '1.05rem', cursor: 'pointer', transition: 'background 0.2s' }}
                  >
                    Contact Me
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right Content (Premium Image Container) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full flex justify-center items-center relative"
            style={{ flex: '1 1 50%', display: 'flex', justifyContent: 'center' }}
          >
            {/* Soft Glow Behind Image */}
            <div style={{ position: 'absolute', width: '100%', maxWidth: '380px', aspectRatio: '3/4', borderRadius: '32px', background: 'radial-gradient(ellipse at center, rgba(0,180,216,0.15) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 0 }}></div>
            
            <motion.div 
              whileHover={{ y: -10, rotate: 1 }} 
              transition={{ type: "spring", stiffness: 300, damping: 20 }} 
              className="relative z-10" 
              style={{ 
                width: '100%', maxWidth: '360px', aspectRatio: '3/4', 
                borderRadius: '32px', overflow: 'hidden', 
                border: '1px solid rgba(255, 255, 255, 0.1)', 
                backgroundColor: 'rgba(255,255,255,0.02)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.4), 0 0 40px rgba(0, 180, 216, 0.1)',
                display: 'flex', justifyContent: 'center', alignItems: 'center'
              }}
            >
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
            </motion.div>
          </motion.div>
        </section>

        <GlowingDivider />

        `;

content = content.replace(heroRegex, premiumHero);
fs.writeFileSync(file, content);
console.log("Hero updated.");
