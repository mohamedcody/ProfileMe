import { motion } from 'framer-motion';

import { useTranslation } from 'react-i18next';
import type { TeamMember } from '../../data/team';

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
        <div style={{ 
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
            <img src={member.image} alt={member.nameKey} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : null}
          <span style={{ display: member.image ? 'none' : 'block' }}>{member.avatarInitial}</span>
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
          <span key={skill} style={{ 
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
          >
            {skill}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '16px', marginTop: 'auto' }}>
        {member.github && (
          <a href={member.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
             <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
        )}
        {member.linkedin && (
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
             <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
        )}
      </div>
    </motion.div>
  );
};
