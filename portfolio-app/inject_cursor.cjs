const fs = require('fs');
let layout = fs.readFileSync('src/components/Layout.tsx', 'utf8');

if (!layout.includes('CustomCursor')) {
  layout = layout.replace(
    "import Footer from './Footer';",
    "import Footer from './Footer';\nimport { CustomCursor } from './ui/CustomCursor';"
  );
  
  layout = layout.replace(
    "<Navbar />",
    "<CustomCursor />\n      <Navbar />"
  );
  
  fs.writeFileSync('src/components/Layout.tsx', layout);
  console.log("Cursor injected into Layout.");
}

// Optionally, let's hide the default cursor on desktop to make it fully immersive.
let css = fs.readFileSync('src/index.css', 'utf8');
if (!css.includes('cursor: none')) {
  const cursorCss = `
@media (pointer: fine) {
  body, a, button {
    cursor: none !important;
  }
}
`;
  fs.writeFileSync('src/index.css', css + cursorCss);
}

