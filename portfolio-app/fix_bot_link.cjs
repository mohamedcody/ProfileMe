const fs = require('fs');
const file = 'src/pages/Projects.tsx';
let content = fs.readFileSync(file, 'utf8');

// Update Title to be more descriptive based on the bot username
content = content.replace(
  `<h2 className="text-h2" style={{ textTransform: 'uppercase' }}>Telegram Bot</h2>`,
  `<h2 className="text-h2" style={{ textTransform: 'uppercase' }}>Expense Tracker Bot</h2>`
);

// Update description slightly
content = content.replace(
  `A robust and high-performance Telegram bot developed using Java and Spring Boot.`,
  `A robust Expense Tracker Telegram bot developed using Java and Spring Boot.`
);

// Replace the button
const oldButton = `<Button 
                  onClick={() => showToast('Telegram Bot chat link will be available soon! 🤖')}
                  style={{ gap: '8px', padding: '12px 24px' }}
                >
                  Message Bot <ExternalLink size={18}/>
                </Button>`;

const newButton = `<a href="https://t.me/Mohamed20_Expense_bot" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <Button style={{ gap: '8px', padding: '12px 24px' }}>
                    Message Bot <ExternalLink size={18}/>
                  </Button>
                </a>`;

content = content.replace(oldButton, newButton);

fs.writeFileSync(file, content);
console.log("Bot link and title updated.");
