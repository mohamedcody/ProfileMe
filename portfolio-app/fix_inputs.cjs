const fs = require('fs');

let code = fs.readFileSync('src/pages/Contact.tsx', 'utf8');

// Replace Name
code = code.replace(
  /<input\s+type="text"\s+id="name"\s+placeholder=\{t\('Name_Placeholder'\)\}\s+style=\{\{[\s\S]*?\}\}\s*\/>/m,
  `<input type="text" id="name" required value={formData.name} onChange={handleChange} placeholder={t('Name_Placeholder')} style={{ width: '100%', padding: '16px', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '12px', color: '#fff', fontSize: '1rem', outline: 'none' }} />`
);

// Replace Email
code = code.replace(
  /<input\s+type="email"\s+id="email"\s+placeholder=\{t\('Email_Placeholder'\)\}\s+style=\{\{[\s\S]*?\}\}\s*\/>/m,
  `<input type="email" id="email" required value={formData.email} onChange={handleChange} placeholder={t('Email_Placeholder')} style={{ width: '100%', padding: '16px', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '12px', color: '#fff', fontSize: '1rem', outline: 'none' }} />`
);

// Replace Message
code = code.replace(
  /<textarea\s+id="message"\s+rows=\{5\}\s+placeholder=\{t\('Message_Placeholder'\)\}\s+style=\{\{[\s\S]*?\}\}\><\/textarea>/m,
  `<textarea id="message" rows={5} required value={formData.message} onChange={handleChange} placeholder={t('Message_Placeholder')} style={{ width: '100%', padding: '16px', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '12px', color: '#fff', fontSize: '1rem', outline: 'none', resize: 'vertical' }}></textarea>`
);

fs.writeFileSync('src/pages/Contact.tsx', code);
