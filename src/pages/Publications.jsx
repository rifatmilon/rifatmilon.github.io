import { BookOpen, Award, ExternalLink } from 'lucide-react';
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

const stats = [
  { value: '1', label: 'Journal Article' },
  { value: '3', label: 'Conference Papers (IEEE)' },
  { value: '1', label: 'Best Paper Award' },
];

const publications = [
  {
    type: 'Journal',
    venue: 'BioMedInformatics (MDPI)',
    year: '2025',
    award: null,
    title: 'SCCM: An Interpretable Enhanced Transfer Learning Model for Improved Skin Cancer Classification',
    authors: 'M. R. Aknda, F. A. Farid, J. Uddin, S. Mansor, and M. G. Kibria',
    citation: 'BioMedInformatics, vol. 5, no. 3, p. 43, 2025.',
    doi: 'https://doi.org/10.3390/biomedinformatics5030043',
    doiLabel: '10.3390/biomedinformatics5030043',
  },
  {
    type: 'Conference (IEEE)',
    venue: 'ICEEIE 2025 — Mataram, Indonesia',
    year: '2025',
    award: '🏆 Best Paper Award',
    title: 'Scalable Hand Gesture Recognition from Surface Electromyography (sEMG) Signals Using a Hybrid Deep Learning Model Evaluated on Diverse Datasets',
    authors: 'F. Rabby, R. Das, M. M. Rahman, M. H. Hossain, and M. R. Aknda',
    citation: '2025 9th International Conference on Electrical, Electronics and Information Engineering (ICEEIE), pp. 1–6.',
    doi: 'https://doi.org/10.1109/ICEEIE66203.2025.11252161',
    doiLabel: '10.1109/ICEEIE66203.2025.11252161',
  },
  {
    type: 'Conference (IEEE)',
    venue: 'COMPAS 2025 — Kushtia, Bangladesh',
    year: '2025',
    award: null,
    title: 'TinySenseNet: A Lightweight sEMG-IMU Fusion Network Using TinyML for Mechanical Arm Control in Low-Resource Settings',
    authors: 'F. Rabby, M. R. Aknda, M. T. Mahi, S. R. A. Ratul, and B. Z. Shezan',
    citation: '2025 IEEE 2nd International Conference on Computing, Applications and Systems (COMPAS), pp. 1–6.',
    doi: 'https://doi.org/10.1109/COMPAS67506.2025.11381831',
    doiLabel: '10.1109/COMPAS67506.2025.11381831',
  },
  {
    type: 'Conference (IEEE)',
    venue: 'COMPAS 2025 — Kushtia, Bangladesh',
    year: '2025',
    award: null,
    title: 'Real-Time Brain Tumor Localization and Classification Using YOLOv11 and MONAI MedNeXt',
    authors: 'F. Rabby, M. H. Hossain, M. R. Aknda, B. Z. Shezan, and S. S. Mou',
    citation: '2025 IEEE 2nd International Conference on Computing, Applications and Systems (COMPAS), pp. 1–6.',
    doi: 'https://doi.org/10.1109/COMPAS67506.2025.11381706',
    doiLabel: '10.1109/COMPAS67506.2025.11381706',
  },
];

const typeColor = {
  'Journal': '#00e5ff',
  'Conference (IEEE)': '#7000ff',
};

export default function Publications() {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', paddingBottom: '3rem' }}>
        <div className="container">
          <h1 className="gradient-text" style={{ marginBottom: '1rem' }}>Publications</h1>
          <p style={{ fontSize: '1.1rem', maxWidth: '700px' }}>
            Peer-reviewed research bridging cutting-edge AI with scalable real-world deployment in healthcare and biomedical applications.
          </p>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="section" style={{ paddingBottom: '1rem' }}>
        <div className="container">
          <AnimatedCard>
            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.6rem', textAlign: 'center' }}>Research Output/Summary</h2>
            <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {stats.map((s, i) => (
                <div key={i} style={{ textAlign: 'center', flexShrink: 0 }}>
                  <p style={{ color: 'var(--accent-base)', fontWeight: '800', fontSize: '2.5rem', lineHeight: 1, margin: 0 }}>{s.value}</p>
                  <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem', fontSize: '0.9rem' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Research Interests */}
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <h2 style={{ marginBottom: '2rem' }}>Research Interests</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {researchInterests.map((interest, i) => (
              <div key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', padding: '0.75rem 1.25rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '0.8rem', transition: 'transform 0.3s ease, border-color 0.3s ease' }} className="hover-interest">
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--accent-base)', flexShrink: 0, boxShadow: '0 0 8px var(--accent-glow)' }} />
                <p style={{ margin: 0, color: 'var(--text-primary)', fontWeight: '500', fontSize: '0.95rem' }}>{interest}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: '3rem' }}>All Publications</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {publications.map((pub, i) => (
              <AnimatedCard key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    <span style={{ background: `${typeColor[pub.type]}20`, color: typeColor[pub.type], border: `1px solid ${typeColor[pub.type]}50`, padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.78rem', fontWeight: '600' }}>
                      {pub.type}
                    </span>
                    {pub.award && (
                      <span style={{ background: 'rgba(255,200,0,0.12)', color: '#ffc800', border: '1px solid rgba(255,200,0,0.3)', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.78rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Award size={12} /> {pub.award}
                      </span>
                    )}
                  </div>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', flexShrink: 0 }}>{pub.year}</span>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--accent-base)', marginTop: '2px', flexShrink: 0 }}><BookOpen size={20} /></div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1.05rem', lineHeight: '1.5', marginBottom: '0.5rem' }}>{pub.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '0.4rem' }}>{pub.authors}</p>
                    <p style={{ color: 'var(--accent-base)', fontWeight: '500', fontSize: '0.88rem', marginBottom: '0.75rem' }}>{pub.venue}</p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontStyle: 'italic', marginBottom: '0.75rem' }}>{pub.citation}</p>
                    <a href={pub.doi} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-base)', fontSize: '0.85rem', border: '1px solid var(--border-color-hover)', padding: '0.3rem 0.8rem', borderRadius: '6px' }}>
                      <ExternalLink size={13} /> DOI: {pub.doiLabel}
                    </a>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
