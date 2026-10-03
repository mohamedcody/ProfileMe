const fs = require('fs');

let cardCode = fs.readFileSync('src/components/ui/TeamMemberCard.tsx', 'utf8');

// Fix type import
cardCode = cardCode.replace(
  "import { TeamMember } from '../../data/team';",
  "import type { TeamMember } from '../../data/team';"
);

// Remove Github, Linkedin from lucide-react
cardCode = cardCode.replace(
  "import { Github, Linkedin } from 'lucide-react';",
  ""
);

// Replace <Github size={22} /> with SVG
cardCode = cardCode.replace(
  "<Github size={22} />",
  '<svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>'
);

// Replace <Linkedin size={22} /> with SVG
cardCode = cardCode.replace(
  "<Linkedin size={22} />",
  '<svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>'
);

fs.writeFileSync('src/components/ui/TeamMemberCard.tsx', cardCode);
