import { ArrowRight, Download, Github, Linkedin, BookOpen, FlaskConical } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import AnimatedCard from '../components/AnimatedCard';

const stats = [
  { value: '4', label: 'Publications' },
  { value: '1', label: 'Best Paper Award' },
  { value: '2+', label: 'Years Industry Experience' },
];

const highlights = [
  {
    icon: FlaskConical,
    title: 'Experience',
    desc: 'AI Developer at Softvence & AI Engineer at EVOMED — building real-time ML pipelines, RAG systems, and LLM agents for production environments.',
    to: '/experience',
    cta: 'See Work History',
  },
  {
    icon: BookOpen,
    title: 'Publications',
    desc: '4 peer-reviewed papers including a Best Paper Award at ICEEIE 2025. Research in biomedical AI, sEMG signal processing, and skin cancer classification.',
    to: '/publications',
    cta: 'Read Publications',
  },
  {
    icon: ArrowRight,
    title: 'Projects',
    desc: 'End-to-end systems from interpretable skin cancer models with Grad-CAM++ to IoT smart parking and real-time brain tumor localization.',
    to: '/projects',
    cta: 'View Projects',
  },
];

export default function Overview() {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="section" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Background glow */}
        <div style={{ position: 'absolute', top: '10%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(112,0,255,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container">
          <div style={{ maxWidth: '850px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,229,255,0.08)', border: '1px solid rgba(0,229,255,0.2)', borderRadius: '20px', padding: '0.4rem 1rem', marginBottom: '2rem' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#00e5ff', display: 'inline-block', animation: 'pulse 2s infinite' }} />
              <span style={{ color: 'var(--accent-base)', fontSize: '0.85rem', fontWeight: '500' }}>Open to PhD positions &amp; Research Collaborations</span>
            </div>

            <h1 style={{ marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Hi, I'm <span className="gradient-text">Md. Rifat Aknda</span>.<br />
              AI/ML Engineer &amp; Researcher.
            </h1>

            <p style={{ fontSize: '1.2rem', marginBottom: '1rem', maxWidth: '680px', lineHeight: '1.8' }}>
              Specializing in end-to-end AI pipelines, real-time inference optimization, LLM-powered automation, and biomedical AI. Published researcher with four peer-reviewed papers and a Best Paper Award.
            </p>
            <p style={{ fontSize: '1rem', marginBottom: '2.5rem', color: 'var(--text-muted)' }}>
              📍 Dhaka, Bangladesh · Currently at Softvence (Betopia Group)
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <Link to="/projects" className="btn btn-primary">
                View My Work <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get In Touch
              </Link>
              <a href="https://scholar.google.com/citations?user=qPC0U2gAAAAJ" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ gap: '0.5rem' }}>
                <BookOpen size={17} /> Google Scholar
              </a>
            </div>

            <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
              {stats.map((s, i) => (
                <div key={i}>
                  <p style={{ color: 'var(--accent-base)', fontWeight: '800', fontSize: '2rem', lineHeight: 1, margin: 0 }}>{s.value}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.3rem', marginBottom: 0 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '4rem' }}>Explore My Portfolio</h2>
          <div className="grid-3">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <AnimatedCard key={i} onClick={() => navigate(h.to)} style={{ cursor: 'pointer' }}>
                  <div style={{ background: 'rgba(0,229,255,0.08)', padding: '0.85rem', borderRadius: '12px', color: 'var(--accent-base)', display: 'inline-flex', marginBottom: '1.25rem' }}>
                    <Icon size={24} />
                  </div>
                  <h3 style={{ marginBottom: '0.75rem' }}>{h.title}</h3>
                  <p style={{ marginBottom: '1.5rem', lineHeight: '1.7' }}>{h.desc}</p>
                  <span style={{ color: 'var(--accent-base)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                    {h.cta} <ArrowRight size={15} />
                  </span>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Summary Banner */}
      <section className="section">
        <div className="container">
          <AnimatedCard>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
              <div style={{ maxWidth: '600px' }}>
                <h2 style={{ marginBottom: '0.75rem' }}>Let's Build Something Together</h2>
                <p style={{ margin: 0, fontSize: '1.05rem' }}>
                  Whether it's a research collaboration, an industry AI project, or a PhD opportunity — I'd love to hear from you.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary">Get In Touch <ArrowRight size={18} /></Link>
                <a href="https://github.com/rifatmilon" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <Github size={18} /> GitHub
                </a>
                <a href="https://linkedin.com/in/rifatmilon" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>
    </div>
  );
}
