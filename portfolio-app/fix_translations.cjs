const fs = require('fs');

// --- 1. Update i18n.ts ---
let i18nCode = fs.readFileSync('src/i18n.ts', 'utf8');

// Inject new english keys
i18nCode = i18nCode.replace(
  '"How I Can Help": "How I Can Help",',
  `"How I Can Help": "How I Can Help",
      "About Me": "About Me",
      "about_p1": "I am a <strong style=\\"color: var(--text-high)\\">Software Engineer</strong> with strong backend experience and a deep understanding of application development and engineering fundamentals.",
      "about_p2": "Instead of just writing code, I focus on <span style=\\"color: var(--accent-primary)\\">solving real business problems</span>. I integrate modern tools, including AI, to improve productivity, while maintaining full responsibility for architectural decisions, security, and maintainability.",
      "about_quote": "\\"I believe in building practical, secure, and modern web applications where every technology used has a clear purpose.\\"",
      "How_subtitle": "Providing comprehensive full-stack solutions tailored to your unique technical needs.",
      "Tools in my Toolbox": "Tools in my Toolbox",
      "Tools_subtitle": "A carefully curated stack of technologies I use to build scalable, high-performance applications.",
      
      "Backend & REST APIs": "Backend & REST APIs",
      "Robust API Development": "Robust API Development",
      "Database Integration": "Database Integration",
      "Secure Authentication": "Secure Authentication",
      "Full-Stack Development": "Full-Stack Development",
      "Responsive Web Apps": "Responsive Web Apps",
      "Clean UI/UX Implementation": "Clean UI/UX Implementation",
      "Project Improvements": "Project Improvements",
      "AI Integration": "AI Integration",
      "Semantic Search": "Semantic Search",
      "Document Parsing": "Document Parsing",
      "AI-Assisted Features": "AI-Assisted Features",
      "Cloud & DevOps": "Cloud & DevOps",
      "Docker Containerization": "Docker Containerization",
      "CI/CD Pipelines": "CI/CD Pipelines",
      "AWS & Cloud Deployment": "AWS & Cloud Deployment",
      "Database Architecture": "Database Architecture",
      "Complex Schema Design": "Complex Schema Design",
      "Query Optimization": "Query Optimization",
      "Data Security": "Data Security",
      "System Architecture": "System Architecture",
      "Microservices": "Microservices",
      "Clean Code Practices": "Clean Code Practices",
      "Code Refactoring": "Code Refactoring",`
);

// Inject new arabic keys
i18nCode = i18nCode.replace(
  '"How I Can Help": "كيف يمكنني مساعدتك",',
  `"How I Can Help": "كيف يمكنني مساعدتك",
      "About Me": "نبذة عني",
      "about_p1": "أنا <strong style=\\"color: var(--text-high)\\">مهندس برمجيات</strong> أمتلك خبرة قوية في الـ Backend وفهم عميق لأساسيات هندسة وتطوير النظم والبرمجيات.",
      "about_p2": "بدلاً من مجرد كتابة الكود، أركز على <span style=\\"color: var(--accent-primary)\\">حل مشاكل البزنس الحقيقية</span>. أدمج الأدوات الحديثة، بما فيها الذكاء الاصطناعي لزيادة الإنتاجية، مع تحمل المسئولية الكاملة لقرارات التصميم المعماري والأمان وسهولة الصيانة.",
      "about_quote": "\\"أؤمن ببناء تطبيقات ويب عملية، آمنة، وحديثة، حيث يكون لكل تقنية مستخدمة غرض وهدف واضح.\\"",
      "How_subtitle": "أقدم حلول برمجية متكاملة (Full-Stack) مخصصة لتلبية احتياجاتك التقنية الفريدة.",
      "Tools in my Toolbox": "الأدوات والتقنيات",
      "Tools_subtitle": "مجموعة مختارة بعناية من التقنيات التي أستخدمها لبناء تطبيقات سريعة وقابلة للتوسع.",
      
      "Backend & REST APIs": "تطوير الـ Backend والـ APIs",
      "Robust API Development": "بناء واجهات برمجية (APIs) قوية",
      "Database Integration": "ربط قواعد البيانات بكفاءة",
      "Secure Authentication": "أنظمة مصادقة وتسجيل دخول آمنة",
      "Full-Stack Development": "تطوير شامل (Full-Stack)",
      "Responsive Web Apps": "تطبيقات ويب متوافقة مع الموبايل",
      "Clean UI/UX Implementation": "تنفيذ واجهات مستخدم نظيفة (UI/UX)",
      "Project Improvements": "تحسين وتطوير المشاريع القائمة",
      "AI Integration": "دمج الذكاء الاصطناعي",
      "Semantic Search": "بناء محركات بحث دلالية (Semantic)",
      "Document Parsing": "تحليل واستخراج البيانات من المستندات",
      "AI-Assisted Features": "إضافة ميزات ذكية للتطبيقات",
      "Cloud & DevOps": "الخدمات السحابية والـ DevOps",
      "Docker Containerization": "إدارة التطبيقات باستخدام Docker",
      "CI/CD Pipelines": "أتمتة النشر والتكامل المستمر (CI/CD)",
      "AWS & Cloud Deployment": "النشر على خوادم AWS السحابية",
      "Database Architecture": "هندسة قواعد البيانات",
      "Complex Schema Design": "تصميم هياكل بيانات معقدة",
      "Query Optimization": "تسريع وتحسين استعلامات البيانات",
      "Data Security": "تأمين وحماية البيانات",
      "System Architecture": "تصميم بنية الأنظمة",
      "Microservices": "بناء بنية الخدمات المصغرة",
      "Clean Code Practices": "تطبيق معايير الكود النظيف",
      "Code Refactoring": "إعادة هيكلة وتطوير الكود القديم",`
);

fs.writeFileSync('src/i18n.ts', i18nCode);


// --- 2. Update Home.tsx to use the new keys ---
let homeCode = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// Replace About Me
homeCode = homeCode.replace(
  '<span className="gradient-text">About Me</span>',
  '<span className="gradient-text">{t(\'About Me\')}</span>'
);
homeCode = homeCode.replace(
  /<p className="text-body-lg"[^>]*>I am a <strong[^>]*>Software Engineer<\/strong>[^<]*<\/p>/,
  '<p className="text-body-lg" style={{ marginBottom: \'var(--space-24)\' }} dangerouslySetInnerHTML={{ __html: t(\'about_p1\') }} />'
);
homeCode = homeCode.replace(
  /<p className="text-body-lg"[^>]*>Instead of just writing code[^<]*<\/span>[^<]*<\/p>/,
  '<p className="text-body-lg" style={{ marginBottom: \'var(--space-32)\' }} dangerouslySetInnerHTML={{ __html: t(\'about_p2\') }} />'
);
homeCode = homeCode.replace(
  /<em style={{ color: 'var\(--text-high\)' }}>"I believe in building practical, secure, and modern web applications where every technology used has a clear purpose\."<\/em>/,
  "<em style={{ color: 'var(--text-high)' }}>{t('about_quote')}</em>"
);

// RTL style for the quote
homeCode = homeCode.replace(
  "borderLeft: '3px solid var(--accent-primary)', paddingLeft: 'var(--space-24)'",
  "borderInlineStart: '3px solid var(--accent-primary)', paddingInlineStart: 'var(--space-24)'"
);

// Replace "Providing comprehensive full-stack solutions..."
homeCode = homeCode.replace(
  ">Providing comprehensive full-stack solutions tailored to your unique technical needs.</p>",
  ">{t('How_subtitle')}</p>"
);

// Replace "Tools in my Toolbox"
homeCode = homeCode.replace(
  />Tools in my Toolbox</,
  ">{t('Tools in my Toolbox')}<"
);
homeCode = homeCode.replace(
  ">A carefully curated stack of technologies I use to build scalable, high-performance applications.</p>",
  ">{t('Tools_subtitle')}</p>"
);

// We need to translate the services array dynamically inside the component instead of at the top level
// The easiest way is to apply t() inside the render loop for service.title and service.features.
homeCode = homeCode.replace(
  "<h3>{service.title}</h3>", // in case it was h3
  "<h3>{t(service.title)}</h3>"
);
homeCode = homeCode.replace(
  ">{service.title}</h3>",
  ">{t(service.title)}</h3>"
);
homeCode = homeCode.replace(
  "<span>{f}</span>",
  "<span>{t(f)}</span>"
);

fs.writeFileSync('src/pages/Home.tsx', homeCode);
console.log("Translations completed.");
