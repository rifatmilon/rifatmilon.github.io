import AnimatedCard from '../components/AnimatedCard';

export default function Awards() {
  return (
    <div className="container section animate-fade-in">
      <h1 className="gradient-text" style={{ marginBottom: '3rem' }}>Awards & Co-Curricular</h1>
      <div className="grid-2">
        <AnimatedCard>
          <h3>1st Place - Global Hackathon</h3>
          <p style={{ color: 'var(--accent-base)', fontWeight: 'bold' }}>Tech Innovation Summit 2023</p>
          <p>Led a team of 4 to build an AI-powered accessibility tool.</p>
        </AnimatedCard>
      </div>
    </div>
  );
}
