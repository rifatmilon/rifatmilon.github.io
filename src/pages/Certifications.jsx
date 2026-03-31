import AnimatedCard from '../components/AnimatedCard';

export default function Certifications() {
  return (
    <div className="container section animate-fade-in">
      <h1 className="gradient-text" style={{ marginBottom: '3rem' }}>Certifications & Training</h1>
      <div className="grid-2">
        <AnimatedCard>
          <h3>AWS Certified Solutions Architect</h3>
          <p style={{ color: 'var(--accent-base)', fontWeight: 'bold' }}>Amazon Web Services</p>
          <p>Issued: Dec 2023 • Expires: Dec 2026</p>
        </AnimatedCard>
      </div>
    </div>
  );
}
