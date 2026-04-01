import { BadgeCheck, Calendar } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';

const certifications = [
  {
    title: 'Digital Security Training (DST) — Training of Trainers (ToT)',
    issuer: 'Asia Centre & Google',
    partner: 'In collaboration with Dept. of CSE, University of Liberal Arts Bangladesh (ULAB)',
    date: 'November 2025',
    category: 'Security & Leadership',
  },
  {
    title: 'Big Data Fundamentals with PySpark',
    issuer: 'DataCamp',
    partner: null,
    date: 'January 2025',
    category: 'Data Engineering',
  },
];

const categoryColors = {
  'Security & Leadership': '#00e5ff',
  'Data Engineering': '#7000ff',
};

export default function Certifications() {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', paddingBottom: '3rem' }}>
        <div className="container">
          <h1 className="gradient-text" style={{ marginBottom: '1rem' }}>Certifications & Training</h1>
          <p style={{ fontSize: '1.1rem', maxWidth: '700px' }}>
            Continuous professional development spanning data engineering, AI security, and digital leadership training.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: '3rem' }}>Completed Certifications</h2>
          <div className="grid-2">
            {certifications.map((cert, i) => {
              const color = categoryColors[cert.category] || 'var(--accent-base)';
              return (
                <AnimatedCard key={i}>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', alignItems: 'flex-start' }}>
                    <div style={{ background: `${color}20`, padding: '0.75rem', borderRadius: '10px', color: color, flexShrink: 0 }}>
                      <BadgeCheck size={24} />
                    </div>
                    <div>
                      <span style={{ background: `${color}20`, color: color, border: `1px solid ${color}40`, padding: '0.2rem 0.65rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '600', display: 'inline-block', marginBottom: '0.5rem' }}>
                        {cert.category}
                      </span>
                      <h3 style={{ fontSize: '1.05rem', lineHeight: '1.4', marginBottom: '0.4rem' }}>{cert.title}</h3>
                      <p style={{ color: color, fontWeight: '600', margin: 0, fontSize: '0.9rem' }}>{cert.issuer}</p>
                      {cert.partner && (
                        <p style={{ color: 'var(--text-muted)', margin: '0.25rem 0 0', fontSize: '0.82rem' }}>{cert.partner}</p>
                      )}
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.88rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                    <Calendar size={14} />
                    Issued: {cert.date}
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
