const fs = require('fs');
const file = 'src/pages/Projects.tsx';
let content = fs.readFileSync(file, 'utf8');

// Update the images array
const oldImagesRegex = /const jobfinderGalleryImages = \[[\s\S]*?\];/;
const newImages = `const jobfinderGalleryImages = [
    { src: '/image/1.png', caption: 'JobFinder Platform - Main Dashboard and Overview' },
    { src: '/image/2.png', caption: 'Advanced Job Search and Filtering Interface' },
    { src: '/image/3.png', caption: 'AI-Assisted Resume Parsing Results' },
    { src: '/image/4.png', caption: 'User Profile and Saved Jobs' },
    { src: '/image/5.png', caption: 'Employer Dashboard and Analytics' },
    { src: '/image/6.png', caption: 'Application Tracking and Management' }
  ];`;

content = content.replace(oldImagesRegex, newImages);

// Rename "View Gallery" to "View Image"
content = content.replace(
  `<ImageIcon size={18}/> View Gallery`,
  `<ImageIcon size={18}/> View Image`
);

// Also update the thumbnail preview placeholder on the left to show the first image
const placeholderRegex = /<ImageIcon size=\{48\} color="rgba\(255,255,255,0\.1\)" \/>\s*<p className="text-sm" style=\{\{ color: 'var\(--text-muted\)' \}\}>Gallery Images Coming Soon<\/p>/;
const newThumbnail = `<img src="/image/1.png" alt="JobFinder Preview" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7, borderRadius: 'var(--radius-lg)' }} />`;
content = content.replace(placeholderRegex, newThumbnail);
// We should also remove the flex layout properties that center the placeholder, or just let the img fill it.
// The container has: display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', justifyContent: 'center'
// That's fine for an image if it has width/height 100%.

fs.writeFileSync(file, content);
console.log("Images added and button renamed.");
