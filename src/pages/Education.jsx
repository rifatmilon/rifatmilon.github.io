import { GraduationCap, Users } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';

const researchInterests = [
  'Artificial Intelligence & Machine Learning',
  'Computer Vision',
  'Multimodal Machine Learning (Signal, Image, Text)',
  'Biomedical Signal Processing',
  'Deep Learning & Edge AI',
  'Transfer Learning and Feature Fusion',
  'Wearable Computing & Human-Centered AI',
  'Explainable AI for Clinical Decision Support',
];

const referees = [
  {
    name: 'Prof. Muhammad Golam Kibria, PhD, SMIEEE',
    role: 'Professor & Head, Department of Computer Science and Engineering',
    institution: 'University of Liberal Arts Bangladesh (ULAB)',
    note: 'Supervisor — Capstone Project & Internship',
    email: 'golam.kibria@ulab.edu.bd',
    linkedin: 'https://linkedin.com/in/muhammad-golam-kibria-phd-smieee-b630b78b',
  },
  {
    name: 'Md Liton Hossain, PhD',
    role: 'Post Doctoral Fellow — Centre for New Energy Transition Research',
    institution: 'Federation University, Australia',
    note: 'Assistant Professor (On Leave), Dept. of EEE, ULAB',
    email: 'mdliton.hossain@federation.edu.au',
    linkedin: 'https://linkedin.com/in/hossain-md-liton',
  },
];

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
          <h2 style={{ marginBottom: '3rem' }}>Academic Degree</h2>
          <AnimatedCard>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '12px', color: 'var(--accent-base)', flexShrink: 0 }}>
                <GraduationCap size={36} />
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.4rem' }}>B.Sc. in Computer Science & Engineering</h3>
                <p style={{ color: 'var(--accent-base)', fontWeight: '600', fontSize: '1.05rem', margin: 0 }}>University of Liberal Arts Bangladesh (ULAB)</p>
                <p style={{ color: 'var(--text-muted)', margin: '0.4rem 0 1.5rem' }}>Graduated 2025</p>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '0.75rem 1.5rem', textAlign: 'center' }}>
                    <p style={{ color: 'var(--accent-base)', fontWeight: '700', fontSize: '1.6rem', margin: 0 }}>3.51</p>
                    <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.85rem' }}>CGPA / 4.00</p>
                  </div>
                  <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '0.75rem 1.5rem', textAlign: 'center' }}>
                    <p style={{ color: 'var(--accent-base)', fontWeight: '700', fontSize: '1.6rem', margin: 0 }}>4</p>
                    <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.85rem' }}>Publications</p>
                  </div>
                  <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '0.75rem 1.5rem', textAlign: 'center' }}>
                    <p style={{ color: 'var(--accent-base)', fontWeight: '700', fontSize: '1.6rem', margin: 0 }}>1</p>
                    <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.85rem' }}>Best Paper Award</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>

          {/* Research Interests */}
          <h2 style={{ marginTop: '4rem', marginBottom: '2rem' }}>Research Interests</h2>
          <div className="grid-2">
            {researchInterests.map((interest, i) => (
              <AnimatedCard key={i}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-base)', flexShrink: 0, boxShadow: '0 0 8px var(--accent-glow)' }} />
                  <p style={{ margin: 0, color: 'var(--text-primary)', fontWeight: '500' }}>{interest}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Referees */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 style={{ marginBottom: '3rem' }}>Academic Referees</h2>
          <div className="grid-2">
            {referees.map((ref, i) => (
              <AnimatedCard key={i}>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ background: 'var(--bg-primary)', padding: '0.75rem', borderRadius: '10px', color: 'var(--accent-base)', flexShrink: 0 }}>
                    <Users size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', marginBottom: '0.3rem' }}>{ref.name}</h3>
                    <p style={{ color: 'var(--accent-base)', fontWeight: '500', margin: 0, fontSize: '0.9rem' }}>{ref.role}</p>
                    <p style={{ margin: '0.2rem 0 0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{ref.institution}</p>
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '0.75rem', fontStyle: 'italic' }}>{ref.note}</p>
                <a href={`mailto:${ref.email}`} style={{ color: 'var(--accent-base)', fontSize: '0.88rem' }}>{ref.email}</a>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
