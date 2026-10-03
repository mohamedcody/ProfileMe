const fs = require('fs');
const file = 'src/pages/Projects.tsx';
let content = fs.readFileSync(file, 'utf8');

// Ensure Bot is imported from lucide-react
if (!content.includes('Bot,')) {
    content = content.replace('import { ArrowRight, ExternalLink, Image as ImageIcon, Code2, Rocket } from \'lucide-react\';', 
    'import { ArrowRight, ExternalLink, Image as ImageIcon, Code2, Rocket, Bot } from \'lucide-react\';');
}

const oldProject2Regex = /\{\/\* Placeholder for Project 2 \*\/\}[\s\S]*?(?=<\/div>\s*<\/div>\s*\{\/\* Premium Full-Screen Gallery Modal \*\/})/m;

const newProject2 = `{/* Project 2: Telegram Bot */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
            className="flex md-flex-col-reverse gap-64 items-center" style={{ flexDirection: 'row-reverse' }}
          >
            <div className="w-full relative" style={{ flex: 1 }}>
              <div style={{ position: 'absolute', top: '-40px', right: '-20px', fontSize: '180px', fontWeight: 700, color: 'rgba(255,255,255,0.02)', zIndex: 0, lineHeight: 1 }}>02</div>
              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.4 }}
                style={{ height: '400px', backgroundColor: 'var(--surface-1)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}
              >
                <Bot size={56} color="var(--accent-primary)" style={{ opacity: 0.5 }} />
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Bot Screenshots Coming Soon</p>
              </motion.div>
            </div>

            <div className="w-full" style={{ flex: 1 }}>
              <div className="flex items-center gap-16" style={{ marginBottom: 'var(--space-8)' }}>
                <h2 className="text-h2" style={{ textTransform: 'uppercase' }}>Telegram Bot</h2>
              </div>
              <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-primary)', marginBottom: 'var(--space-24)', borderRadius: '2px' }}></div>
              
              <p className="text-body-lg" style={{ marginBottom: 'var(--space-24)' }}>
                A robust and high-performance Telegram bot developed using Java and Spring Boot. It seamlessly integrates with the Telegram Bot API to process user commands, automate workflows, and provide instant interactive responses.
              </p>
              
              <div style={{ marginBottom: 'var(--space-32)' }}>
                <h4 className="text-body" style={{ color: 'var(--text-high)', marginBottom: 'var(--space-12)', fontWeight: 600 }}>Key Engineering Decisions:</h4>
                <ul className="text-body flex flex-col gap-8" style={{ paddingLeft: 'var(--space-24)' }}>
                  <li>Integrated <strong style={{ color: 'var(--text-high)' }}>Telegram Bot API</strong> for seamless real-time messaging and event handling.</li>
                  <li>Built a scalable architecture using <strong style={{ color: 'var(--text-high)' }}>Spring Boot</strong> for rapid and secure request processing.</li>
                  <li>Engineered a dynamic command routing system to parse and execute user inputs efficiently.</li>
                  <li>Optimized external API calls to ensure minimal latency and high system availability.</li>
                </ul>
              </div>

              <div className="flex gap-16 items-center" style={{ marginBottom: 'var(--space-32)', flexWrap: 'wrap' }}>
                {['Java', 'Spring Boot', 'Telegram API', 'REST APIs'].map(tech => (
                  <span key={tech} style={{ padding: '6px 16px', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-subtle)', fontSize: 'var(--text-caption)', color: 'var(--accent-primary)', backgroundColor: 'rgba(0,180,216,0.05)' }}>{tech}</span>
                ))}
              </div>

              <div className="flex gap-16 flex-wrap">
                <Button 
                  onClick={() => showToast('Telegram Bot chat link will be available soon! 🤖')}
                  style={{ gap: '8px', padding: '12px 24px' }}
                >
                  Message Bot <ExternalLink size={18}/>
                </Button>

                <Button variant="outline" onClick={() => showToast('GitHub Repository will be uploaded soon! 💻')} style={{ gap: '8px', padding: '12px 24px' }}>
                  <Code2 size={18}/> Source Code
                </Button>
              </div>
            </div>
          </motion.div>
`;

content = content.replace(oldProject2Regex, newProject2);

fs.writeFileSync(file, content);
console.log("Telegram Bot project added.");
