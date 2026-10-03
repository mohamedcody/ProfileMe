const fs = require('fs');

// 1. Create i18n.ts
const i18nCode = `import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Home": "Home",
      "Projects": "Projects",
      "Services": "Services",
      "Contact Me": "Contact Me",
      "Available": "Available",
      "Resume": "Resume",
      
      "Hello, I am": "Hello, I am",
      "Full-stack Developer": "Full-stack Developer",
      "Building seamless digital experiences": "Building seamless digital experiences and robust backend systems with modern architecture.",
      "View My Work": "View My Work",
      
      "Tools in my toolbox": "Tools in my toolbox",
      "How I Can Help": "How I Can Help",
      
      "CASE STUDIES": "CASE STUDIES",
      "Live Demo": "Live Demo",
      "Source Code": "Source Code",
      "Platform is currently under development...": "Platform is currently under development... 🚀",
      "GitHub Repository will be uploaded soon!": "GitHub Repository will be uploaded soon! 💻",
      "View Gallery": "View Gallery",
      "IN DEVELOPMENT": "IN DEVELOPMENT",
      
      "MY SERVICES": "MY SERVICES",
      "trust_banner": "I deliver <strong style=\\"color: #fff\\">scalable business solutions</strong>, not just code. Whether automating manual processes or building high-performance applications, you get transparent pricing, clear deliverables, and robust engineering.",
      "Client Guidelines": "Client Guidelines",
      "Billing Currency:": "Billing Currency:",
      "Starting at": "Starting at",
      "Custom Quote": "Custom Quote",
      "What you get:": "What you get:",
      "Order Now": "Order Now",
      "Discuss Project": "Discuss Project",
      
      "Send me a message": "Send me a message",
      "Name_Placeholder": "Enter Your Name",
      "Email_Placeholder": "Enter Your E-mail",
      "Message_Placeholder": "Enter your message",
      "Send Message": "Send Message",
      "Location": "Location",
      "Phone": "Phone",
      "FOLLOW ME": "FOLLOW ME",
      "Cairo, Egypt": "Cairo, Egypt",
      
      // Services specific
      "Premium Landing Pages": "Premium Landing Pages",
      "landing_desc": "Stop losing potential clients. I build lightning-fast, visually stunning landing pages engineered to turn traffic into paying customers. Fully responsive, accessible, and optimized for SEO.",
      "Data & File Automation": "Data & File Automation",
      "data_desc": "Eliminate manual data entry and save hundreds of hours. I create custom scripts that extract data from PDFs, convert complex Word documents to Excel, and scrape web data automatically.",
      "Custom Telegram & AI Bots": "Custom Telegram & AI Bots",
      "bots_desc": "Automate your business processes and customer support with custom Telegram or Discord bots. Manage expenses, send real-time notifications, and handle user queries 24/7.",
      "Full-Stack Web Apps": "Full-Stack Web Apps",
      "apps_desc": "Build powerful, scalable business software from the ground up. I develop complete SaaS MVPs, admin dashboards, and custom web applications using Java Spring Boot and React.",
      "API & System Integration": "API & System Integration",
      "api_desc": "Connect disparate systems and third-party services seamlessly. I build secure REST APIs and webhooks to ensure your backend operations flow perfectly without human intervention.",
      
      // Guidelines
      "Client Guidelines & Terms": "Client Guidelines & Terms",
      "Scope of Work": "1. Scope of Work",
      "Payment Terms": "2. Payment Terms",
      "Revisions & Changes": "3. Revisions & Changes",
      "Communication & Delivery": "4. Communication & Delivery",
      "Ready to start your project?": "Ready to start your project?",
      "I Understand, Close Guidelines": "I Understand, Close Guidelines",
      "Scope_Text": "The prices listed cover exactly the deliverables mentioned. Any additional features, extra pages, or custom requirements outside the original agreement will require a separate custom quote and timeline adjustment.",
      "Payment_Text": "For custom projects, a 50% non-refundable upfront deposit is required before any development begins. The remaining 50% is due upon final delivery and project approval. Fixed-price services (e.g., Landing Pages) require full payment upfront.",
      "Revisions_Text": "Each service includes up to 2 rounds of major revisions during the design/development phase. Additional major revisions or changing the core requirements mid-project will be billed at an hourly rate.",
      "Communication_Text": "All official project communication will be handled via Email or a dedicated Slack/Telegram channel. I provide regular progress updates. Source code and deployment assets are handed over only after full payment is received."
    }
  },
  ar: {
    translation: {
      "Home": "الرئيسية",
      "Projects": "المشاريع",
      "Services": "الخدمات",
      "Contact Me": "تواصل معي",
      "Available": "متاح للعمل",
      "Resume": "السيرة الذاتية",
      
      "Hello, I am": "مرحباً، أنا",
      "Full-stack Developer": "مطور برمجيات شامل (Full-Stack)",
      "Building seamless digital experiences": "أبني تجارب رقمية سلسة وأنظمة خلفية قوية باستخدام أحدث التقنيات.",
      "View My Work": "شاهد أعمالي",
      
      "Tools in my toolbox": "الأدوات والتقنيات",
      "How I Can Help": "كيف يمكنني مساعدتك",
      
      "CASE STUDIES": "دراسات الحالة (مشاريعي)",
      "Live Demo": "معاينة حية",
      "Source Code": "الكود المصدري",
      "Platform is currently under development...": "المنصة قيد التطوير حالياً... 🚀",
      "GitHub Repository will be uploaded soon!": "سيتم رفع المشروع على جيت هب قريباً! 💻",
      "View Gallery": "معرض الصور",
      "IN DEVELOPMENT": "قيد التطوير",
      
      "MY SERVICES": "خدماتي",
      "trust_banner": "أنا أقدم <strong style=\\"color: #fff\\">حلول برمجية لنجاح البيزنس</strong>، مش مجرد كود. سواء بتحويل العمل اليدوي لنظام آلي أو بناء منصات سريعة، هتحصل على تسعير شفاف، ونتائج واضحة، وهندسة برمجيات قوية.",
      "Client Guidelines": "سياسة العمل وشروط العميل",
      "Billing Currency:": "عملة الدفع:",
      "Starting at": "تبدأ من",
      "Custom Quote": "تسعير مخصص",
      "What you get:": "ما ستحصل عليه:",
      "Order Now": "اطلب الآن",
      "Discuss Project": "ناقش المشروع",
      
      "Send me a message": "أرسل لي رسالة",
      "Name_Placeholder": "أدخل اسمك",
      "Email_Placeholder": "أدخل بريدك الإلكتروني",
      "Message_Placeholder": "اكتب رسالتك هنا...",
      "Send Message": "إرسال الرسالة",
      "Location": "الموقع",
      "Phone": "رقم الهاتف",
      "FOLLOW ME": "تابعني",
      "Cairo, Egypt": "القاهرة، مصر",

      // Services specific
      "Premium Landing Pages": "صفحات هبوط احترافية (Landing Pages)",
      "landing_desc": "توقف عن خسارة العملاء. أبني صفحات هبوط سريعة جداً وتصميمها يخطف العين، مبرمجة خصيصاً لتحويل الزوار لعملاء دائمين. متوافقة مع الموبايل ومحسنة لمحركات البحث.",
      "Data & File Automation": "أتمتة البيانات والملفات",
      "data_desc": "وفر مئات الساعات من العمل اليدوي. أصمم سكريبتات تستخرج البيانات من الـ PDF، وتحول ملفات الـ Word المعقدة لـ Excel، وجمع البيانات من المواقع تلقائياً.",
      "Custom Telegram & AI Bots": "بوتات تليجرام وذكاء اصطناعي",
      "bots_desc": "أتمتة أعمالك ودعم عملائك من خلال بوتات تليجرام وديسكورد مخصصة. إدارة المصروفات، إرسال إشعارات لحظية، والرد على استفسارات المستخدمين 24/7.",
      "Full-Stack Web Apps": "تطبيقات الويب الشاملة (Full-Stack)",
      "apps_desc": "بناء أنظمة برمجية قابلة للتوسع من الصفر. أطور نماذج SaaS، ولوحات تحكم إدارية، وتطبيقات مخصصة باستخدام Java Spring Boot و React.",
      "API & System Integration": "ربط الأنظمة والـ APIs",
      "api_desc": "ربط الأنظمة والخدمات الخارجية بسلاسة. أبني واجهات REST APIs آمنة و Webhooks لضمان تدفق العمليات الخلفية بدقة وبدون تدخل بشري.",

      // Guidelines
      "Client Guidelines & Terms": "سياسة العمل وشروط العميل",
      "Scope of Work": "1. نطاق العمل",
      "Payment Terms": "2. نظام الدفع",
      "Revisions & Changes": "3. التعديلات",
      "Communication & Delivery": "4. التواصل والتسليم",
      "Ready to start your project?": "جاهز نبدأ الشغل؟",
      "I Understand, Close Guidelines": "موافق، أغلق النافذة",
      "Scope_Text": "الأسعار المذكورة تغطي بالضبط المتطلبات المتفق عليها. أي إضافات، صفحات جديدة، أو متطلبات خارج الاتفاق الأصلي تتطلب تسعيراً جديداً وتعديلاً في وقت التسليم.",
      "Payment_Text": "للمشاريع الخاصة، يُشترط دفع 50% مقدم غير مسترد قبل بدء التطوير. الـ 50% المتبقية تُدفع عند التسليم النهائي. الخدمات الثابتة (مثل صفحات الهبوط) تُدفع بالكامل مقدماً.",
      "Revisions_Text": "كل خدمة تتضمن تعديلين جوهريين (2 Rounds) خلال فترة التصميم/التطوير. أي تعديلات إضافية أو تغيير جذري في المتطلبات سيتم حسابه بتكلفة إضافية.",
      "Communication_Text": "يتم التواصل الرسمي بخصوص المشروع عبر البريد الإلكتروني أو تليجرام. أقدم تحديثات دورية للعمل. يتم تسليم الكود المصدري ورفع المشروع فقط بعد استلام الدفعة كاملة."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
`;
fs.writeFileSync('src/i18n.ts', i18nCode);

// 2. Import i18n in main.tsx
let mainTsx = fs.readFileSync('src/main.tsx', 'utf8');
if (!mainTsx.includes('./i18n')) {
  mainTsx = mainTsx.replace("import './index.css'", "import './index.css'\nimport './i18n'");
  fs.writeFileSync('src/main.tsx', mainTsx);
}

// 3. Update index.css for RTL and Arabic Fonts (Tajawal/Cairo)
let css = fs.readFileSync('src/index.css', 'utf8');
if (!css.includes('Tajawal')) {
  css = `@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Tajawal:wght@300;400;500;700;800;900&display=swap');\n` + css;
  css += `
/* RTL & Arabic Support */
[dir="rtl"] body {
  font-family: 'Tajawal', 'Outfit', sans-serif;
  letter-spacing: 0; /* Remove english letter spacing for arabic */
}
[dir="rtl"] .text-display, [dir="rtl"] .text-h1, [dir="rtl"] .text-h2, [dir="rtl"] .text-h3 {
  letter-spacing: 0 !important;
}
`;
  fs.writeFileSync('src/index.css', css);
}

// We will inject the language switcher in Navbar next.
console.log("i18n engine, fonts, and dictionaries set up.");
