const fs = require('fs');
const path = require('path');

// Ensure directories exist
const dataDir = path.join('src', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// 1. Create Team Data File (Clean Architecture)
const teamDataContent = `export interface TeamMember {
  id: string;
  nameKey: string;
  roleKey: string;
  bioKey: string;
  skills: string[];
  avatarInitial: string;
  github?: string;
  linkedin?: string;
}

export const teamData: TeamMember[] = [
  {
    id: "mohamed",
    nameKey: "Mohamed Saad",
    roleKey: "Founder_Role",
    bioKey: "Founder_Bio",
    skills: ["Java", "Spring Boot", "PostgreSQL", "React", "System Architecture"],
    avatarInitial: "MS",
    github: "https://github.com/mohamedcody",
    linkedin: "#"
  },
  {
    id: "ahmed",
    nameKey: "Ahmed Esam",
    roleKey: "Ahmed_Role",
    bioKey: "Ahmed_Bio",
    skills: ["React", "JavaScript", "Material UI", "CSS", "UI/UX"],
    avatarInitial: "AE",
    github: "#",
    linkedin: "#"
  }
];
`;
fs.writeFileSync(path.join(dataDir, 'team.ts'), teamDataContent);

// 2. Create TeamMemberCard Component
const teamCardContent = `import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { TeamMember } from '../../data/team';

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

export const TeamMemberCard = ({ member, index }: TeamMemberCardProps) => {
  const { t } = useTranslation();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.02)', 
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: '24px',
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
        position: 'relative',
        overflow: 'hidden'
      }}
      className="team-card group"
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)', opacity: 0, transition: 'opacity 0.3s' }} className="group-hover:opacity-100" />
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '32px' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-primary), #0077b6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 800, color: '#fff', flexShrink: 0 }}>
          {member.avatarInitial}
        </div>
        <div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>
            {t(member.nameKey)}
          </h3>
          <p style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            {t(member.roleKey)}
          </p>
        </div>
      </div>

      <p style={{ color: 'var(--text-medium)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '32px', flexGrow: 1 }}>
        {t(member.bioKey)}
      </p>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
        {member.skills.map(skill => (
          <span key={skill} style={{ padding: '6px 14px', borderRadius: '50px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', fontSize: '0.85rem', color: 'var(--text-high)', fontWeight: 600 }}>
            {skill}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '16px', marginTop: 'auto' }}>
        {member.github && (
          <a href={member.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
             <Github size={22} />
          </a>
        )}
        {member.linkedin && (
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
             <Linkedin size={22} />
          </a>
        )}
      </div>
    </motion.div>
  );
};
`;
fs.writeFileSync(path.join('src', 'components', 'ui', 'TeamMemberCard.tsx'), teamCardContent);


// 3. Create Team Page
const teamPageContent = `import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from '../components/ui/PageWrapper';
import { TeamMemberCard } from '../components/ui/TeamMemberCard';
import { teamData } from '../data/team';
import { Link } from 'react-router-dom';

const Team = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <div style={{ paddingTop: 'var(--space-120)', paddingBottom: 'var(--space-120)' }}>
        
        {/* Editorial Header */}
        <div style={{ backgroundColor: 'var(--surface-2)', padding: 'var(--space-64) 0', textAlign: 'center', borderBottom: '1px solid var(--border-subtle)', marginBottom: 'var(--space-96)' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-display" style={{ marginBottom: 'var(--space-16)', color: '#fff', textTransform: 'uppercase' }}
          >
            {t('MEET THE')} <span style={{ color: 'var(--accent-primary)' }}>{t('TEAM')}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="label-spaced text-caption" style={{ color: 'var(--text-muted)' }}
          >
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text-high)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>{t('Home')}</Link> &rsaquo; <span style={{ color: 'var(--accent-primary)' }}>{t('Team')}</span>
          </motion.p>
        </div>

        <div className="container">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            style={{ 
              maxWidth: '900px', margin: '0 auto 80px', textAlign: 'center',
              borderLeft: '3px solid var(--accent-primary)', paddingLeft: '32px' 
            }}
          >
            <p style={{ fontSize: '1.25rem', color: 'var(--text-medium)', lineHeight: 1.8 }}>
              {t('team_mission')}
            </p>
          </motion.div>

          {/* Team Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '32px',
            paddingBottom: '80px' 
          }}>
            {teamData.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>

        </div>
      </div>
    </PageWrapper>
  );
};

export default Team;
`;
fs.writeFileSync(path.join('src', 'pages', 'Team.tsx'), teamPageContent);

console.log("Team architectural files created.");
