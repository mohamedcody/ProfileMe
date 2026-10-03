const fs = require('fs');
const path = require('path');

// --- 1. Update App.tsx ---
let appCode = fs.readFileSync('src/App.tsx', 'utf8');
if (!appCode.includes('Team')) {
  appCode = appCode.replace("import Contact from './pages/Contact';", "import Contact from './pages/Contact';\nimport Team from './pages/Team';");
  appCode = appCode.replace(
    '<Route path="/contact" element={<Contact />} />',
    '<Route path="/contact" element={<Contact />} />\n            <Route path="/team" element={<Team />} />'
  );
  fs.writeFileSync('src/App.tsx', appCode);
}

// --- 2. Update Navbar.tsx ---
let navCode = fs.readFileSync('src/components/Navbar.tsx', 'utf8');
if (!navCode.includes('t(\'Team\')')) {
  navCode = navCode.replace(
    "{ name: t('Services'), path: '/services' },",
    "{ name: t('Services'), path: '/services' },\n    { name: t('Team'), path: '/team' },"
  );
  fs.writeFileSync('src/components/Navbar.tsx', navCode);
}

// --- 3. Update i18n.ts ---
let i18nCode = fs.readFileSync('src/i18n.ts', 'utf8');

// EN Translations
i18nCode = i18nCode.replace(
  '"Contact Me": "Contact Me",',
  `"Contact Me": "Contact Me",
      "Team": "Team",
      "MEET THE": "MEET THE",
      "TEAM": "TEAM",
      "team_mission": "We are a collective of senior engineers and designers committed to delivering robust, scalable, and high-performance digital products from the ground up.",
      "Founder_Role": "Founder & Lead Software Engineer",
      "Founder_Bio": "I architect and build enterprise-grade backend systems and full-stack applications. My focus is on writing clean, scalable code that solves complex business logic while maintaining top-tier security and performance.",`
);

// AR Translations
i18nCode = i18nCode.replace(
  '"Contact Me": "تواصل معي",',
  `"Contact Me": "تواصل معي",
      "Team": "فريق العمل",
      "MEET THE": "تعرف على",
      "TEAM": "فريق العمل",
      "team_mission": "نحن مجموعة من كبار المهندسين والمصممين نلتزم بتقديم منتجات رقمية قوية، سريعة، وقابلة للتوسع من الصفر وحتى الإطلاق.",
      "Founder_Role": "المؤسس وكبير مهندسي البرمجيات",
      "Founder_Bio": "أصمم وأبني أنظمة خلفية (Backend) وتطبيقات ويب متكاملة. تركيزي الأساسي على كتابة كود نظيف وقابل للتوسع يحل مشاكل البزنس المعقدة مع الحفاظ على أعلى معايير الأمان والأداء.",`
);

fs.writeFileSync('src/i18n.ts', i18nCode);

// --- 4. Link from Home to Team ---
let homeCode = fs.readFileSync('src/pages/Home.tsx', 'utf8');
if (homeCode.includes('Trusted Partners Section')) {
  // Let's replace the large card of Ahmed with a simple "View Team" Call to action in Home
  // Actually, keeping the card but adding a link to the team page is good. Let's add a button below the card.
  if (!homeCode.includes('to="/team"')) {
    const buttonHtml = `
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
            <Link to="/team" className="btn-solid-cyber" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px', fontSize: '1.1rem', borderRadius: '12px', textDecoration: 'none' }}>
              {t('MEET THE')} {t('TEAM')}
            </Link>
          </div>
    `;
    homeCode = homeCode.replace(
      '          </div>\n        </section>\n        <style>{`',
      `          </div>${buttonHtml}\n        </section>\n        <style>{\``
    );
    fs.writeFileSync('src/pages/Home.tsx', homeCode);
  }
}
console.log("Integration complete.");
