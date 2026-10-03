const fs = require('fs');

let navbarCode = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// 1. Fix Lucide Import
navbarCode = navbarCode.replace(
  "import { Download, Github } from 'lucide-react';",
  "import { Download } from 'lucide-react';"
);

// 2. Fix 'previous' undefined error
navbarCode = navbarCode.replace(
  "if (latest > 150 && latest > previous) {",
  "if (previous !== undefined && latest > 150 && latest > previous) {"
);

// 3. Replace <Github /> with raw SVG
const githubSvg = `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`;

navbarCode = navbarCode.replace("<Github size={20} />", githubSvg);

fs.writeFileSync('src/components/Navbar.tsx', navbarCode);
console.log("Navbar TS fixed.");
