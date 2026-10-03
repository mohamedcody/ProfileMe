const fs = require('fs');

// --- 1. Update i18n.ts with new Role and Stronger Bio for Mohamed ---
let i18nCode = fs.readFileSync('src/i18n.ts', 'utf8');

// EN Updates
i18nCode = i18nCode.replace(
  /"Founder_Role": "Founder & Lead Software Engineer",\s*"Founder_Bio": "I architect and build enterprise-grade backend systems and full-stack applications. My focus is on writing clean, scalable code that solves complex business logic while maintaining top-tier security and performance.",/m,
  `"Founder_Role": "Front-End Developer",
      "Founder_Bio": "I am a dedicated Front-End Developer with a deep passion for crafting immersive, lightning-fast, and accessible user interfaces. I bridge the gap between complex logic and elegant design, transforming ambitious concepts into flawless digital experiences using modern web technologies.",`
);

// AR Updates
i18nCode = i18nCode.replace(
  /"Founder_Role": "المؤسس وكبير مهندسي البرمجيات",\s*"Founder_Bio": "أصمم وأبني أنظمة خلفية \(Backend\) وتطبيقات ويب متكاملة. تركيزي الأساسي على كتابة كود نظيف وقابل للتوسع يحل مشاكل البزنس المعقدة مع الحفاظ على أعلى معايير الأمان والأداء.",/m,
  `"Founder_Role": "مطور واجهات أمامية (Front-End)",
      "Founder_Bio": "أنا مطور واجهات أمامية بشغف عميق نحو بناء واجهات مستخدم غامرة، فائقة السرعة، وسهلة الاستخدام. أمتلك القدرة على دمج المنطق البرمجي المعقد مع التصميم الأنيق، لتحويل الأفكار الطموحة إلى تجارب رقمية خالية من العيوب باستخدام أحدث تقنيات الويب.",`
);

fs.writeFileSync('src/i18n.ts', i18nCode);

// --- 2. Update team.ts to support image field ---
let teamData = fs.readFileSync('src/data/team.ts', 'utf8');

if (!teamData.includes('image?: string;')) {
  teamData = teamData.replace(
    "avatarInitial: string;",
    "avatarInitial: string;\n  image?: string;"
  );
  
  // Add placeholder image paths to Mohamed and Ahmed
  teamData = teamData.replace(
    'avatarInitial: "MS",',
    'avatarInitial: "MS",\n    image: "/mohamed.jpg",' // they should place this in public/
  );
  teamData = teamData.replace(
    'avatarInitial: "AE",',
    'avatarInitial: "AE",\n    image: "/ahmed.jpg",' // they should place this in public/
  );
  
  fs.writeFileSync('src/data/team.ts', teamData);
}

// --- 3. Update TeamMemberCard.tsx to add Glowing Skills and Images ---
let cardCode = fs.readFileSync('src/components/ui/TeamMemberCard.tsx', 'utf8');

// Inject the image rendering logic
cardCode = cardCode.replace(
  /<div style=\{\{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient\(135deg, var\(--accent-primary\), #0077b6\)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 800, color: '#fff', flexShrink: 0 \}\}>\s*\{member.avatarInitial\}\s*<\/div>/m,
  `<div style={{ 
          width: '90px', height: '90px', borderRadius: '50%', 
          background: 'linear-gradient(135deg, var(--accent-primary), #0077b6)', 
          display: 'flex', alignItems: 'center', justifyContent: 'center', 
          fontSize: '2rem', fontWeight: 800, color: '#fff', flexShrink: 0,
          border: '2px solid rgba(0, 180, 216, 0.5)',
          boxShadow: '0 0 20px rgba(0, 180, 216, 0.4), inset 0 0 10px rgba(0,0,0,0.5)',
          overflow: 'hidden',
          position: 'relative'
        }}>
          {member.image ? (
            <img src={member.image} alt={member.nameKey} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.style.display = 'block'; }} />
          ) : null}
          <span style={{ display: member.image ? 'none' : 'block' }}>{member.avatarInitial}</span>
        </div>`
);

// Inject Glowing Skills
cardCode = cardCode.replace(
  /<span key=\{skill\} style=\{\{ padding: '6px 14px', borderRadius: '50px', backgroundColor: 'rgba\(255,255,255,0.05\)', border: '1px solid rgba\(255,255,255,0.08\)', fontSize: '0.85rem', color: 'var\(--text-high\)', fontWeight: 600 \}\}>/g,
  `<span key={skill} style={{ 
            padding: '6px 16px', 
            borderRadius: '50px', 
            backgroundColor: 'rgba(0, 180, 216, 0.05)', 
            border: '1px solid rgba(0, 180, 216, 0.3)', 
            fontSize: '0.85rem', 
            color: '#fff', 
            fontWeight: 600,
            boxShadow: '0 0 12px rgba(0, 180, 216, 0.25), inset 0 0 8px rgba(0, 180, 216, 0.15)',
            textShadow: '0 0 8px rgba(255,255,255,0.3)',
            transition: 'all 0.3s ease'
          }}
          className="hover:shadow-[0_0_20px_rgba(0,180,216,0.5)] hover:border-[rgba(0,180,216,0.6)] cursor-default"
          >`
);

fs.writeFileSync('src/components/ui/TeamMemberCard.tsx', cardCode);

console.log("Team enhancements applied.");
