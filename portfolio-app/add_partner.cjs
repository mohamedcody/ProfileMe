const fs = require('fs');

// --- 1. Update i18n.ts ---
let i18nCode = fs.readFileSync('src/i18n.ts', 'utf8');

// Inject english keys
i18nCode = i18nCode.replace(
  '"Tools_subtitle": "A carefully curated stack of technologies I use to build scalable, high-performance applications.",',
  `"Tools_subtitle": "A carefully curated stack of technologies I use to build scalable, high-performance applications.",
      "Trusted Partners": "Trusted Partners",
      "partners_subtitle": "For large-scale applications, I collaborate with specialized engineers to deliver end-to-end full-stack perfection.",
      "Ahmed Esam": "Ahmed Esam",
      "Ahmed_Role": "Front-End Developer",
      "Ahmed_Bio": "I’m a Front-End Developer with a strong focus on building modern, clean, and scalable web applications. My expertise lies in React, JavaScript, CSS, and UI frameworks like Material UI. Whether I'm designing an e-commerce interface, creating reusable UI components, or improving performance, I always aim for clarity, simplicity, and user-focused design.",`
);

// Inject arabic keys
i18nCode = i18nCode.replace(
  '"Tools_subtitle": "مجموعة مختارة بعناية من التقنيات التي أستخدمها لبناء تطبيقات سريعة وقابلة للتوسع.",',
  `"Tools_subtitle": "مجموعة مختارة بعناية من التقنيات التي أستخدمها لبناء تطبيقات سريعة وقابلة للتوسع.",
      "Trusted Partners": "فريق العمل وشركاء النجاح",
      "partners_subtitle": "في المشاريع الضخمة، أتعاون مع نخبة من المهندسين المتخصصين لتقديم منتجات متكاملة من الألف للياء.",
      "Ahmed Esam": "أحمد عصام",
      "Ahmed_Role": "مطور واجهات أمامية (Front-End)",
      "Ahmed_Bio": "مطور واجهات أمامية أركز على بناء تطبيقات ويب حديثة وقابلة للتوسع. تتركز خبرتي في تقنيات React و JavaScript و CSS و Material UI. سواء كنت أصمم واجهة متجر إلكتروني أو أبني مكونات UI قابلة لإعادة الاستخدام، فإن هدفي الدائم هو الوضوح، البساطة، وتقديم تجربة مستخدم استثنائية.",`
);

fs.writeFileSync('src/i18n.ts', i18nCode);


// --- 2. Update Home.tsx ---
let homeCode = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const partnerSection = `
        <GlowingDivider />

        {/* Trusted Partners Section */}
        <section style={{ padding: '0 0 var(--space-120)' }}>
          <div className="container flex flex-col gap-12 text-center items-center" style={{ marginBottom: '64px' }}>
            <h2 className="text-h2" style={{ textTransform: 'uppercase' }}>&lt; <span className="gradient-text">{t('Trusted Partners')}</span> /&gt;</h2>
            <p className="text-body-lg" style={{ maxWidth: '600px', color: 'var(--text-medium)' }}>
              {t('partners_subtitle')}
            </p>
          </div>

          <div className="container flex justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              style={{ maxWidth: '850px', width: '100%' }}
            >
              <Card hoverEffect className="flex md-flex-col gap-32 items-center" style={{ padding: '40px', backgroundColor: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(0, 180, 216, 0.2)' }}>
                
                {/* Avatar / Visual Side */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', minWidth: '180px' }}>
                  <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-primary), #0077b6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 800, color: '#fff', boxShadow: '0 10px 25px rgba(0, 180, 216, 0.3)' }}>
                    AE
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff' }}>{t('Ahmed Esam')}</h3>
                    <p style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: '4px' }}>{t('Ahmed_Role')}</p>
                  </div>
                </div>

                {/* Bio Side */}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px', justifyContent: 'center' }} className="md-justify-center">
                    {['React', 'JavaScript', 'Material UI', 'CSS'].map(tech => (
                      <span key={tech} style={{ padding: '4px 12px', borderRadius: '50px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.85rem', color: 'var(--text-high)', fontWeight: 600 }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p style={{ color: 'var(--text-medium)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }} className="md-text-center">
                    {t('Ahmed_Bio')}
                  </p>
                </div>

              </Card>
            </motion.div>
          </div>
        </section>
`;

if (!homeCode.includes('Trusted Partners Section')) {
  homeCode = homeCode.replace(
    "        <style>{`",
    partnerSection + "        <style>{`"
  );
  fs.writeFileSync('src/pages/Home.tsx', homeCode);
  console.log("Partner section added.");
}
