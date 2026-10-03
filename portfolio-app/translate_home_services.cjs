const fs = require('fs');

// --- 1. Translate Home.tsx ---
let homeCode = fs.readFileSync('src/pages/Home.tsx', 'utf8');
if (!homeCode.includes('useTranslation')) {
  homeCode = homeCode.replace(
    "import { motion, AnimatePresence } from 'framer-motion';",
    "import { motion, AnimatePresence } from 'framer-motion';\nimport { useTranslation } from 'react-i18next';"
  );
  homeCode = homeCode.replace(
    "const Home = () => {",
    "const Home = () => {\n  const { t, i18n } = useTranslation();\n  const isRTL = i18n.language === 'ar';"
  );
  
  // Replace text
  homeCode = homeCode.replace("Hello, I am", "{t('Hello, I am')}");
  homeCode = homeCode.replace("Full-stack Developer", "{t('Full-stack Developer')}");
  homeCode = homeCode.replace("Building seamless digital experiences and robust backend systems with modern architecture.", "{t('Building seamless digital experiences')}");
  homeCode = homeCode.replace("View My Work", "{t('View My Work')}");
  homeCode = homeCode.replace("Contact Me", "{t('Contact Me')}");
  homeCode = homeCode.replace("Tools in my toolbox", "{t('Tools in my toolbox')}");
  homeCode = homeCode.replace("How I Can Help", "{t('How I Can Help')}");
  
  // Adjust alignments for RTL dynamically
  homeCode = homeCode.replace("marginLeft: '8%'", "marginInlineStart: '8%'");
  homeCode = homeCode.replace("marginLeft: '-5%'", "marginInlineStart: '-5%'");
  
  fs.writeFileSync('src/pages/Home.tsx', homeCode);
  console.log("Home translated.");
}

// --- 2. Translate Services.tsx ---
let servicesCode = fs.readFileSync('src/pages/Services.tsx', 'utf8');
if (!servicesCode.includes('useTranslation')) {
  servicesCode = servicesCode.replace(
    "import { useState } from 'react';",
    "import { useState } from 'react';\nimport { useTranslation } from 'react-i18next';"
  );
  
  // Need to inject hook into ServiceRow
  servicesCode = servicesCode.replace(
    "const ServiceRow = ({ service, index, currency }: { service: ServiceOffering; index: number; currency: 'USD' | 'EGP' }) => {",
    "const ServiceRow = ({ service, index, currency }: { service: ServiceOffering; index: number; currency: 'USD' | 'EGP' }) => {\n  const { t } = useTranslation();"
  );
  
  // Replace text in ServiceRow
  servicesCode = servicesCode.replace("Starting at ${currentPrice}", "{t('Starting at')} ${currentPrice}");
  servicesCode = servicesCode.replace(/>What you get:</, ">{t('What you get:')}<");
  servicesCode = servicesCode.replace(/> Order Now/, "> {t('Order Now')}");
  servicesCode = servicesCode.replace(/> Discuss Project/, "> {t('Discuss Project')}");
  
  // Replace text in Services component
  servicesCode = servicesCode.replace(
    "const Services = () => {",
    "const Services = () => {\n  const { t } = useTranslation();"
  );
  servicesCode = servicesCode.replace(/>MY </, ">{t('MY')} <");
  servicesCode = servicesCode.replace(/>SERVICES</, ">{t('SERVICES')}<");
  
  // Replace the trust banner with the translation string
  const oldBanner = /I don't just write code[\s\S]*?robust engineering\./m;
  servicesCode = servicesCode.replace(oldBanner, "        <span dangerouslySetInnerHTML={{ __html: t('trust_banner') }} />");

  servicesCode = servicesCode.replace(">Billing Currency:<", ">{t('Billing Currency:')}<");
  servicesCode = servicesCode.replace(">Client Guidelines<", ">{t('Client Guidelines')}<");
  servicesCode = servicesCode.replace(">Client Guidelines & Terms<", ">{t('Client Guidelines & Terms')}<");
  servicesCode = servicesCode.replace("1. Scope of Work", "{t('Scope of Work')}");
  servicesCode = servicesCode.replace("2. Payment Terms", "{t('Payment Terms')}");
  servicesCode = servicesCode.replace("3. Revisions & Changes", "{t('Revisions & Changes')}");
  servicesCode = servicesCode.replace("4. Communication & Delivery", "{t('Communication & Delivery')}");
  servicesCode = servicesCode.replace("Ready to start your project?", "{t('Ready to start your project?')}");
  servicesCode = servicesCode.replace("I Understand, Close Guidelines", "{t('I Understand, Close Guidelines')}");
  
  servicesCode = servicesCode.replace(/The prices listed cover exactly[\s\S]*?timeline adjustment\./m, "{t('Scope_Text')}");
  servicesCode = servicesCode.replace(/For custom projects[\s\S]*?payment upfront\./m, "{t('Payment_Text')}");
  servicesCode = servicesCode.replace(/Each service includes up to 2[\s\S]*?hourly rate\./m, "{t('Revisions_Text')}");
  servicesCode = servicesCode.replace(/All official project communication[\s\S]*?payment is received\./m, "{t('Communication_Text')}");

  // Note: We'll translate the hardcoded array by replacing its values with t() calls, but it's outside the component.
  // Instead, let's move `servicesData` inside `Services` or pass translations. 
  // For this quick port, since it's a portfolio, we will fetch title/desc via t() dynamically in ServiceRow if needed.
  // We'll map the `service.title` to `t(service.title)`.
  servicesCode = servicesCode.replace(/>\{service\.title\}</g, ">{t(service.title)}<");
  servicesCode = servicesCode.replace(/>\{service\.description\}</g, ">{t(service.id + '_desc') || service.description}<");
  // We already added translation keys in i18n for 'Premium Landing Pages', 'landing-pages_desc' etc.

  fs.writeFileSync('src/pages/Services.tsx', servicesCode);
  console.log("Services translated.");
}

