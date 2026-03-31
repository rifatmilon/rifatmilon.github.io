import AnimatedCard from '../components/AnimatedCard';

export default function Experience() {
  return (
    <div className="container section animate-fade-in">
      <h1 className="gradient-text" style={{ marginBottom: '3rem' }}>Experience</h1>
      <div className="grid-2">
        <AnimatedCard>
          <h3>Senior Software Engineer</h3>
          <p style={{ color: 'var(--accent-base)', fontWeight: 'bold' }}>Company Name • 2021 - Present</p>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
            <li>Architected and implemented scalable microservices...</li>
            <li>Led a team of developers...</li>
            <li>Improved application performance by X%...</li>
          </ul>
        </AnimatedCard>
        {/* Add more cards here */}
      </div>
    </div>
  );
}
