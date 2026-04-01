import { Award, Users } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';

const awards = [
  {
    icon: Award,
    title: 'Best Paper Award',
    organization: '9th IEEE ICEEIE 2025 International Conference',
    location: 'Mataram, Indonesia',
    year: '2025',
    description: 'Awarded for the paper "Scalable Hand Gesture Recognition from Surface Electromyography (sEMG) Signals Using a Hybrid Deep Learning Model Evaluated on Diverse Datasets" — recognizing its contribution to real-time biomedical AI.',
    highlight: true,
  },
];

const leadership = [
  {
    icon: Users,
    title: 'Vice President',
    organization: 'ULAB Computer Programming Club (UCPC)',
    period: '2023',
    description: 'Led club activities, organized coding competitions, workshops, and mentored junior students in competitive programming and software development.',
  },
];

export default function Awards() {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', paddingBottom: '3rem' }}>
        <div className="container">
          <h1 className="gradient-text" style={{ marginBottom: '1rem' }}>Awards & Co-Curricular</h1>
          <p style={{ fontSize: '1.1rem', maxWidth: '700px' }}>
            Recognition for research excellence and leadership contributions in academia and the tech community.
          </p>
        </div>
      </section>

      {/* Awards */}
      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: '3rem' }}>Awards & Recognition</h2>
          {awards.map((award, i) => {
            const Icon = award.icon;
            return (
              <AnimatedCard key={i} style={{ borderColor: 'rgba(255, 200, 0, 0.25)', background: 'rgba(255,200,0,0.04)' }}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                  <div style={{ background: 'rgba(255,200,0,0.15)', padding: '1.25rem', borderRadius: '14px', color: '#ffc800', flexShrink: 0 }}>
                    <Icon size={36} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{award.title}</h3>
                      <span style={{ background: 'rgba(255,200,0,0.15)', color: '#ffc800', border: '1px solid rgba(255,200,0,0.3)', padding: '0.2rem 0.7rem', borderRadius: '20px', fontSize: '0.78rem', fontWeight: '600' }}>{award.year}</span>
                    </div>
                    <p style={{ color: '#ffc800', fontWeight: '600', marginBottom: '0.25rem', fontSize: '1rem' }}>{award.organization}</p>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.88rem' }}>{award.location}</p>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', margin: 0 }}>{award.description}</p>
                  </div>
                </div>
              </AnimatedCard>
            );
          })}

          {/* Leadership */}
          <h2 style={{ marginTop: '4rem', marginBottom: '3rem' }}>Leadership & Activities</h2>
          {leadership.map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimatedCard key={i}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                  <div style={{ background: 'rgba(0,229,255,0.1)', padding: '1rem', borderRadius: '12px', color: 'var(--accent-base)', flexShrink: 0 }}>
                    <Icon size={28} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <h3 style={{ margin: 0 }}>{item.title}</h3>
                      <span style={{ background: 'var(--bg-secondary)', color: 'var(--text-muted)', padding: '0.2rem 0.7rem', borderRadius: '20px', fontSize: '0.8rem' }}>{item.period}</span>
                    </div>
                    <p style={{ color: 'var(--accent-base)', fontWeight: '600', marginBottom: '0.75rem', fontSize: '0.95rem' }}>{item.organization}</p>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', margin: 0 }}>{item.description}</p>
                  </div>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </section>
    </div>
  );
}
