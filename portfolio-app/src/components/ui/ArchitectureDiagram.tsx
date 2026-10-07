export const ArchitectureDiagram = () => {
  return (
    <div 
      aria-label="Architecture flow: React Client sends requests to Spring Boot REST API, which communicates with PostgreSQL, a Vector Search engine, and an AI CV Parsing module."
      style={{ padding: 'var(--space-48)', backgroundColor: 'var(--surface-1)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: 'var(--space-32)', alignItems: 'center' }}
    >
      <div style={{ padding: 'var(--space-16) var(--space-32)', border: '1px solid var(--accent-primary)', borderRadius: 'var(--radius-full)', color: 'var(--text-high)' }}>
        React Client
      </div>
      
      <div style={{ width: '2px', height: '40px', backgroundColor: 'var(--border-subtle)' }}></div>
      
      <div style={{ padding: 'var(--space-16) var(--space-32)', border: '1px solid var(--text-high)', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--surface-2)', color: 'var(--text-high)', width: '100%', maxWidth: '300px', textAlign: 'center' }}>
        Spring Boot REST API
      </div>

      <div className="flex w-full justify-center gap-32 md-flex-col md-items-center">
        <div className="flex flex-col items-center">
          <div style={{ width: '2px', height: '40px', backgroundColor: 'var(--border-subtle)' }}></div>
          <div className="architecture-node" style={{ padding: 'var(--space-16)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', color: 'var(--text-medium)', textAlign: 'center', minWidth: '160px' }}>
            PostgreSQL
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div style={{ width: '2px', height: '40px', backgroundColor: 'var(--border-subtle)' }}></div>
          <div className="architecture-node" style={{ padding: 'var(--space-16)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', color: 'var(--text-medium)', textAlign: 'center', minWidth: '160px' }}>
            Vector Search
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div style={{ width: '2px', height: '40px', backgroundColor: 'var(--border-subtle)' }}></div>
          <div className="architecture-node" style={{ padding: 'var(--space-16)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', color: 'var(--text-medium)', textAlign: 'center', minWidth: '160px' }}>
            AI CV Parsing
          </div>
        </div>
      </div>
    </div>
  );
};
