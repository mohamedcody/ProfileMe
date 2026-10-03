const fs = require('fs');

// --- Translate Projects.tsx ---
let projectsCode = fs.readFileSync('src/pages/Projects.tsx', 'utf8');
if (!projectsCode.includes('useTranslation')) {
  projectsCode = projectsCode.replace(
    "import { motion } from 'framer-motion';",
    "import { motion } from 'framer-motion';\nimport { useTranslation } from 'react-i18next';"
  );
  
  projectsCode = projectsCode.replace(
    "const Projects = () => {",
    "const Projects = () => {\n  const { t } = useTranslation();"
  );
  
  projectsCode = projectsCode.replace(/>CASE STUDIES</, ">{t('CASE STUDIES')}<");
  projectsCode = projectsCode.replace(">HOME<", ">{t('Home')}<");
  projectsCode = projectsCode.replace(">CASE STUDIES<", ">{t('CASE STUDIES')}<");
  
  // Replace card texts
  projectsCode = projectsCode.replace(/>Live Demo</g, ">{t('Live Demo')}<");
  projectsCode = projectsCode.replace(/>Source Code</g, ">{t('Source Code')}<");
  projectsCode = projectsCode.replace(/Platform is currently under development... 🚀/g, "{t('Platform is currently under development...')}");
  projectsCode = projectsCode.replace(/GitHub Repository will be uploaded soon! 💻/g, "{t('GitHub Repository will be uploaded soon!')}");
  projectsCode = projectsCode.replace(/>View Gallery</g, ">{t('View Gallery')}<");
  projectsCode = projectsCode.replace(/>IN DEVELOPMENT</g, ">{t('IN DEVELOPMENT')}<");
  
  fs.writeFileSync('src/pages/Projects.tsx', projectsCode);
  console.log("Projects translated.");
}

// --- Translate Contact.tsx ---
let contactCode = fs.readFileSync('src/pages/Contact.tsx', 'utf8');
if (!contactCode.includes('useTranslation')) {
  contactCode = contactCode.replace(
    "import { motion } from 'framer-motion';",
    "import { motion } from 'framer-motion';\nimport { useTranslation } from 'react-i18next';"
  );
  
  contactCode = contactCode.replace(
    "const Contact = () => {",
    "const Contact = () => {\n  const { t } = useTranslation();"
  );
  
  contactCode = contactCode.replace(/>CONTACT ME</, ">{t('CONTACT ME')}<");
  contactCode = contactCode.replace(/>HOME</, ">{t('Home')}<");
  contactCode = contactCode.replace(/>CONTACT</, ">{t('Contact Me')}<");
  
  contactCode = contactCode.replace(/>Send me a message</, ">{t('Send me a message')}<");
  contactCode = contactCode.replace(/placeholder="Enter Your Name"/, "placeholder={t('Name_Placeholder')}");
  contactCode = contactCode.replace(/placeholder="Enter Your E-mail"/, "placeholder={t('Email_Placeholder')}");
  contactCode = contactCode.replace(/placeholder="Enter your message"/, "placeholder={t('Message_Placeholder')}");
  
  contactCode = contactCode.replace(/>Send Message</, ">{t('Send Message')}<");
  
  contactCode = contactCode.replace(/>Location</, ">{t('Location')}<");
  contactCode = contactCode.replace(/>Cairo, Egypt</, ">{t('Cairo, Egypt')}<");
  contactCode = contactCode.replace(/>Phone</, ">{t('Phone')}<");
  
  contactCode = contactCode.replace(/>FOLLOW ME</, ">{t('FOLLOW ME')}<");
  
  fs.writeFileSync('src/pages/Contact.tsx', contactCode);
  console.log("Contact translated.");
}

