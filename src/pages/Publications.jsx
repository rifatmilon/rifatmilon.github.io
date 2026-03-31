import AnimatedCard from '../components/AnimatedCard';

export default function Publications() {
  return (
    <div className="container section animate-fade-in">
      <h1 className="gradient-text" style={{ marginBottom: '3rem' }}>Publications</h1>
      <div className="grid-2">
        <AnimatedCard>
          <h3>Research Paper Title</h3>
          <p style={{ color: 'var(--accent-base)', fontWeight: 'bold' }}>Conference Journal • 2024</p>
          <p>A comprehensive study on scaling distributed system caching algorithms.</p>
        </AnimatedCard>
      </div>
    </div>
  );
}
