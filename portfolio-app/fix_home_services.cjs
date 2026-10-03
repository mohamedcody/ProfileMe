const fs = require('fs');
const file = 'src/pages/Home.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Add Cloud and Layers to imports
if (!content.includes('Cloud,')) {
    content = content.replace('import { Server, Layout, Database, BrainCircuit, AppWindow } from \'lucide-react\';', 'import { Server, Layout, Database, BrainCircuit, AppWindow, Cloud, Layers } from \'lucide-react\';');
}

// 2. Replace the array in the How I Can Help section
const oldServicesRegex = /\{\[\s*\{\s*icon:\s*Server[\s\S]*?\]\.map/m;
const newServices = `{[
                { 
                  icon: Server, 
                  title: 'Backend & REST APIs', 
                  features: ['Robust API Development', 'Database Integration', 'Secure Authentication'] 
                },
                { 
                  icon: AppWindow, 
                  title: 'Full-Stack Development', 
                  features: ['Responsive Web Apps', 'Clean UI/UX Implementation', 'Project Improvements'] 
                },
                { 
                  icon: BrainCircuit, 
                  title: 'AI Integration', 
                  features: ['Semantic Search', 'Document Parsing', 'AI-Assisted Features'] 
                },
                { 
                  icon: Cloud, 
                  title: 'Cloud & DevOps', 
                  features: ['Docker Containerization', 'CI/CD Pipelines', 'AWS & Deployment'] 
                },
                { 
                  icon: Database, 
                  title: 'Database Architecture', 
                  features: ['Complex Schema Design', 'Query Optimization', 'Data Security'] 
                },
                { 
                  icon: Layers, 
                  title: 'System Architecture', 
                  features: ['Microservices', 'Clean Code Practices', 'Code Refactoring'] 
                },
              ].map`;

content = content.replace(oldServicesRegex, newServices);

// 3. Make icons cyan and text a bit brighter
content = content.replace(/<service\.icon size=\{22\} color="[^"]+" \/>/g, '<service.icon size={24} color="var(--accent-primary)" />');
content = content.replace(/color: '#f4f4f5'/g, "color: 'var(--text-high)'");

fs.writeFileSync(file, content);
console.log("Services updated to 6 items!");
