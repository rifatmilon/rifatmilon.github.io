import AnimatedCard from '../components/AnimatedCard';

export default function Projects() {
  return (
    <div className="container section animate-fade-in">
      <h1 className="gradient-text" style={{ marginBottom: '3rem' }}>Case Studies / Projects</h1>
      <div className="grid-3">
        <AnimatedCard>
          <h3>Project Alpha</h3>
          <p>A high-performance modern web app tailored for real-time analytics.</p>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ background: '#222', padding: '0.2rem 0.8rem', borderRadius: '1rem', fontSize: '0.8rem' }}>React</span>
            <span style={{ background: '#222', padding: '0.2rem 0.8rem', borderRadius: '1rem', fontSize: '0.8rem' }}>Node.js</span>
          </div>
        </AnimatedCard>
        {/* Add more cards here */}
      </div>
    </div>
  );
}
