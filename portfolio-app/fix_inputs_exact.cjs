const fs = require('fs');
let code = fs.readFileSync('src/pages/Contact.tsx', 'utf8');

// Fix form
code = code.replace(
  '<form className="flex flex-col gap-24" onSubmit={(e) => e.preventDefault()}>',
  '<form className="flex flex-col gap-24" onSubmit={handleSubmit}>'
);

// Fix Name input
code = code.replace(
  '<input \n                    type="text" \n                    placeholder={t(\'Name_Placeholder\')}',
  '<input \n                    type="text" id="name" required value={formData.name} onChange={handleChange}\n                    placeholder={t(\'Name_Placeholder\')}'
);

// Fix Email input
code = code.replace(
  '<input \n                    type="email" \n                    placeholder={t(\'Email_Placeholder\')}',
  '<input \n                    type="email" id="email" required value={formData.email} onChange={handleChange}\n                    placeholder={t(\'Email_Placeholder\')}'
);

// Fix Textarea
code = code.replace(
  '<textarea \n                    placeholder={t(\'Message_Placeholder\')}',
  '<textarea \n                    id="message" required value={formData.message} onChange={handleChange}\n                    placeholder={t(\'Message_Placeholder\')}'
);

fs.writeFileSync('src/pages/Contact.tsx', code);
