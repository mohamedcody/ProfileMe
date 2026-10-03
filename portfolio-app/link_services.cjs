const fs = require('fs');

// 1. Update App.tsx
let appCode = fs.readFileSync('src/App.tsx', 'utf8');
if (!appCode.includes("import Services")) {
  appCode = appCode.replace("import Contact from './pages/Contact';", "import Contact from './pages/Contact';\nimport Services from './pages/Services';");
  appCode = appCode.replace('<Route path="/contact" element={<Contact />} />', '<Route path="/services" element={<Services />} />\n        <Route path="/contact" element={<Contact />} />');
  fs.writeFileSync('src/App.tsx', appCode);
}

// 2. Update Navbar.tsx
let navCode = fs.readFileSync('src/components/Navbar.tsx', 'utf8');
if (!navCode.includes("{ name: 'Services'")) {
  navCode = navCode.replace(
    "{ name: 'Projects', path: '/projects' },",
    "{ name: 'Projects', path: '/projects' },\n    { name: 'Services', path: '/services' },"
  );
  fs.writeFileSync('src/components/Navbar.tsx', navCode);
}

console.log("Services page linked.");
