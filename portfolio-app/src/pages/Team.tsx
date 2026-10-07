import { motion } from 'framer-motion';
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
              maxWidth: '900px', margin: '0 auto 80px', textAlign: 'start',
              borderInlineStart: '3px solid var(--accent-primary)', paddingInlineStart: '24px' 
            }}
          >
            <p style={{ fontSize: '1.25rem', color: 'var(--text-medium)', lineHeight: 1.8 }}>
              {t('team_mission')}
            </p>
          </motion.div>

          {/* Team Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))',
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
