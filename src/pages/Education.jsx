import AnimatedCard from '../components/AnimatedCard';

export default function Education() {
  return (
    <div className="container section animate-fade-in">
      <h1 className="gradient-text" style={{ marginBottom: '3rem' }}>Education</h1>
      <div className="grid-2">
        <AnimatedCard>
          <h3>B.Sc. in Computer Science</h3>
          <p style={{ color: 'var(--accent-base)', fontWeight: 'bold' }}>University Name • 20X1 - 20X5</p>
          <p>Graduated with distinction. Focus on artificial intelligence and distributed systems.</p>
        </AnimatedCard>
      </div>
    </div>
  );
}
