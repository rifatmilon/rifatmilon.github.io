import { GraduationCap, Users } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';



export default function Education() {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', paddingBottom: '3rem' }}>
        <div className="container">
          <h1 className="gradient-text" style={{ marginBottom: '1rem' }}>Education</h1>
          <p style={{ fontSize: '1.1rem', maxWidth: '700px' }}>
            Prospective PhD student in AI/ML with a strong academic foundation in Computer Science and Engineering.
          </p>
        </div>
      </section>

      {/* Degree */}
      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: '3rem' }}>Academic Qualifications</h2>
          <AnimatedCard>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '12px', color: 'var(--accent-base)', flexShrink: 0 }}>
                <GraduationCap size={36} />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.4rem' }}>B.Sc. in Computer Science & Engineering</h3>
                <p style={{ color: 'var(--accent-base)', fontWeight: '600', fontSize: '1.05rem', margin: 0 }}>University of Liberal Arts Bangladesh (ULAB)</p>
                <p style={{ color: 'var(--text-muted)', margin: '0.4rem 0 1.5rem' }}>Graduated 2025</p>

              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>
    </div>
  );
}
