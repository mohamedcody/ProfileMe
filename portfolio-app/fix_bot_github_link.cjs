const fs = require('fs');
const file = 'src/pages/Projects.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldButton = `<Button variant="outline" onClick={() => showToast('GitHub Repository will be uploaded soon! 💻')} style={{ gap: '8px', padding: '12px 24px' }}>
                  <Code2 size={18}/> Source Code
                </Button>`;

const newButton = `<a href="https://github.com/mohamedcody/expense-tracker-bot" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <Button variant="outline" style={{ gap: '8px', padding: '12px 24px' }}>
                    <Code2 size={18}/> Source Code
                  </Button>
                </a>`;

content = content.replace(oldButton, newButton);

fs.writeFileSync(file, content);
console.log("GitHub link added to Expense Tracker Bot.");
