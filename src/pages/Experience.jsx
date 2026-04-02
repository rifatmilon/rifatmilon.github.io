import { Briefcase, ExternalLink } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';

const experiences = [
  {
    title: 'AI Developer',
    company: 'Softvence (Betopia Group)',
    period: 'Feb 2026 – Present',
    type: 'Full-time',
    bullets: [
      'Build LLM-powered automation workflows using n8n, integrating OpenAI-compatible APIs with business logic pipelines for client-facing automation solutions.',
      'Develop RAG-based document processing pipelines using LangChain and vector databases (Pinecone, ChromaDB) to enable semantic search and intelligent document retrieval.',
      'Design and deploy an AI-powered email automation system combining LLM-based intent classification, LangChain chains, and Pinecone vector store for context-aware email response generation.',
      'Integrate AI agents and n8n workflow nodes with external APIs, databases, and messaging services to automate multi-step business processes end-to-end.',
    ],
  },
  {
    title: 'AI Engineer',
    company: 'EVOMED Technology — R&D Department',
    period: 'Apr 2025 – Sep 2025',
    type: 'Full-time',
    bullets: [
      'Designed and deployed end-to-end ML/DL solutions for healthcare diagnostics and industrial applications, covering full pipeline from data preprocessing through production deployment.',
      'Built and integrated real-time inference APIs with FastAPI and Flask backends, supporting both desktop and web-based production environments.',
      'Optimized model inference using ONNX optimization and INT8 quantization, reducing computational resource usage and improving real-time performance on edge hardware.',
      'Engineered large-scale preprocessing and annotation workflows for image, audio, and video datasets, improving dataset quality and consistency for model training.',
      'Applied SHAP-based feature analysis across multimodal datasets to identify data bias and model behavior patterns, improving model transparency for clinical stakeholders.',
    ],
  },
];

const skillCategories = [
  { label: 'AI & ML', skills: ['Machine Learning', 'Deep Learning', 'CNNs', 'Transformers', 'Transfer Learning', 'Multimodal ML', 'Explainable AI', 'Computer Vision', 'Medical Imaging'] },
  { label: 'LLMs & Automation', skills: ['LLM Integration', 'Prompt Engineering', 'RAG Pipelines', 'LLM Agents', 'n8n Workflows', 'LangChain', 'Hugging Face', 'Pinecone', 'ChromaDB'] },
  { label: 'Frameworks', skills: ['PyTorch', 'TensorFlow', 'Keras', 'scikit-learn', 'OpenCV', 'MONAI', 'NumPy', 'Pandas'] },
  { label: 'Deployment & MLOps', skills: ['ONNX Optimization', 'Model Quantization', 'FastAPI', 'Flask', 'Django', 'Docker', 'Real-Time Inference'] },
  { label: 'Data & Tools', skills: ['MySQL', 'PySpark', 'Git / GitHub', 'Jupyter', 'CVAT', 'Roboflow', 'Power BI'] },
  { label: 'Languages', skills: ['Python', 'R', 'C / C++', 'JavaScript', 'HTML / CSS'] },
  { label: 'Soft Skills', skills: ['Problem Solving', 'Team Leadership', 'Technical Writing', 'Public Speaking', 'Adaptability', 'Critical Thinking'] },
];

export default function Experience() {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', paddingBottom: '3rem' }}>
        <div className="container">
          <h1 className="gradient-text" style={{ marginBottom: '1rem' }}>Professional Experience</h1>
          <p style={{ fontSize: '1.1rem', maxWidth: '700px' }}>
            AI/ML Engineer with hands-on experience building and deploying production-grade machine learning systems for healthcare and industrial applications.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: '3rem' }}>Work History</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {experiences.map((exp, i) => (
              <AnimatedCard key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ background: 'var(--bg-secondary)', padding: '0.75rem', borderRadius: '10px', color: 'var(--accent-base)' }}>
                      <Briefcase size={22} />
                    </div>
                    <div>
                      <h3 style={{ marginBottom: '0.25rem' }}>{exp.title}</h3>
                      <p style={{ color: 'var(--accent-base)', fontWeight: '600', margin: 0 }}>{exp.company}</p>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ background: 'var(--bg-secondary)', padding: '0.3rem 0.85rem', borderRadius: '20px', fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.35rem' }}>{exp.period}</span>
                    <span style={{ background: 'rgba(0,229,255,0.1)', color: 'var(--accent-base)', padding: '0.2rem 0.7rem', borderRadius: '20px', fontSize: '0.78rem', fontWeight: '600' }}>{exp.type}</span>
                  </div>
                </div>
                <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>{b}</li>
                  ))}
                </ul>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Skills */}
      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: '3rem' }}>Professional Skills</h2>
          <div className="grid-3">
            {skillCategories.map((cat, i) => (
              <AnimatedCard key={i}>
                <h3 style={{ color: 'var(--accent-base)', fontSize: '1rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{cat.label}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {cat.skills.map((s, j) => (
                    <span key={j} style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', padding: '0.3rem 0.75rem', borderRadius: '20px', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{s}</span>
                  ))}
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
