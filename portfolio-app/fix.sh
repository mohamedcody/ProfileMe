sed -i "s/import { ReactNode }/import type { ReactNode }/g" src/components/Layout.tsx
sed -i "s/import { Download, Menu, X }/import { Download }/g" src/components/Navbar.tsx
sed -i "s/import { ArrowRight, Github, ExternalLink }/import { ArrowRight, ExternalLink }/g" src/pages/Projects.tsx
sed -i "s/<Github size={18}\/>//g" src/pages/Projects.tsx
