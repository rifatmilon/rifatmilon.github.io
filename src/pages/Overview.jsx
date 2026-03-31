import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedCard from '../components/AnimatedCard';

export default function Overview() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <h1 style={{ marginBottom: '1.5rem' }}>
              Hi, I'm <span className="gradient-text">Rifat Milon</span>.<br />
              Building the future through code.
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '600px' }}>
              A passionate Software Engineer specialized in creating scalable, modern web applications
              with high-performance and beautiful User Interfaces.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/projects" className="btn btn-primary">
                View My Work <ArrowRight size={20} />
              </Link>
              <a href="/resume.pdf" target="_blank" className="btn btn-outline">
                <Download size={20} /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Areas */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>Explore My Portfolio</h2>
          <div className="grid-3">
            <AnimatedCard onClick={() => window.location.href = '/experience'}>
              <h3>Experience</h3>
              <p>Discover my professional journey, the roles I've held, and the impact I've made in the tech industry.</p>
              <span style={{ color: 'var(--accent-base)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                Learn More <ArrowRight size={16} />
              </span>
            </AnimatedCard>

            <AnimatedCard onClick={() => window.location.href = '/projects'}>
              <h3>Projects & Case Studies</h3>
              <p>Explore detailed breakdowns of my favorite technical challenges and the solutions I built.</p>
              <span style={{ color: 'var(--accent-base)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                View Projects <ArrowRight size={16} />
              </span>
            </AnimatedCard>

            <AnimatedCard onClick={() => window.location.href = '/publications'}>
              <h3>Publications</h3>
              <p>Read my academic and technical publications focusing on modern web architectures.</p>
              <span style={{ color: 'var(--accent-base)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                Read Publications <ArrowRight size={16} />
              </span>
            </AnimatedCard>
          </div>
        </div>
      </section>
    </div>
  );
}
