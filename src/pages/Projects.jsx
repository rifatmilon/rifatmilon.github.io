import { Brain, Car, ExternalLink } from 'lucide-react';
import AnimatedCard from '../components/AnimatedCard';

const projects = [
  {
    icon: Brain,
    title: 'SCCM: Interpretable Skin Cancer Classification',
    period: '2024 – 2025',
    subtitle: 'Published · BioMedInformatics (MDPI)',
    description: 'Developed an interpretable transfer learning model for skin cancer classification on dermoscopic images, achieving 90.91% test accuracy and 93.73% external validation accuracy.',
    bullets: [
      'Ensemble architecture combining Xception, MobileNetV2, and DenseNet201 with a custom classification module.',
      'Applied Grad-CAM++ to generate clinically aligned visual explanations for medical decision support.',
      'Fine-tuned pretrained backbones and assessed performance using internal and external validation datasets.',
      'Deployed as a standalone Python/Flask desktop app enabling offline, explainable AI inference.',
      'Published findings in a peer-reviewed journal.',
    ],
    tags: ['PyTorch', 'Transfer Learning', 'Grad-CAM++', 'Flask', 'Medical Imaging', 'CNN', 'Explainable AI'],
    doi: 'https://doi.org/10.3390/biomedinformatics5030043',
  },
  {
    icon: Car,
    title: 'IoT-Based Automated Smart Parking System',
    period: '2025',
    subtitle: 'Systems & Computer Vision Project',
    description: 'Built an end-to-end automated parking system integrating IoT sensors, computer vision vehicle detection, and Automatic License Plate Recognition (ALPR).',
    bullets: [
      'Integrated IoT sensors and computer vision vehicle detection using OpenCV-based preprocessing.',
      'Implemented Automatic License Plate Recognition (ALPR) using EasyOCR for access control.',
      'Designed Python backend with MySQL for structured event logging and zone management.',
      'Enabled real-time edge-level inference to support responsive and scalable system operation across multiple zones.',
    ],
    tags: ['Python', 'OpenCV', 'EasyOCR', 'MySQL', 'IoT', 'ALPR', 'Edge AI'],
    doi: null,
  },
  {
    icon: Brain,
    title: 'Multimodal sEMG-IMU Based Gesture Recognition',
    period: '2024 – 2025',
    subtitle: 'Published · IEEE ICEEIE 2025 (Best Paper Award) · IEEE COMPAS 2025',
    description: 'Developed hybrid deep learning architectures for gesture recognition using surface electromyography (sEMG) and Inertial Measurement Unit (IMU) signals.',
    bullets: [
      'Developed hybrid deep learning models evaluated on diverse sEMG datasets for multi-gesture classification.',
      'Explored signal preprocessing and representation learning for time-series biomedical data.',
      'Performed cross-dataset evaluation to analyze robustness and scalability of the models.',
      'Contributed to feature engineering, model training, and experimental result analysis.',
      'Investigated implications for real-time human-computer interaction using wearable sensor data.',
    ],
    tags: ['PyTorch', 'Deep Learning', 'sEMG', 'Signal Processing', 'TinyML', 'Wearable AI', 'Biomedical'],
    doi: 'https://doi.org/10.1109/ICEEIE66203.2025.11252161',
  },
  {
    icon: Brain,
    title: 'Real-Time Brain Tumor Localization & Classification',
    period: '2025',
    subtitle: 'Published · IEEE COMPAS 2025',
    description: 'Built a real-time brain tumor detection and classification system using YOLOv11 for localization and MONAI MedNeXt for volumetric segmentation on medical imaging data.',
    bullets: [
      'Implemented YOLOv11 for fast, real-time brain tumor bounding-box localization.',
      'Used MONAI MedNeXt for 3D volumetric tumor segmentation and classification.',
      'Validated the pipeline on real-world clinical MRI datasets.',
      'Designed for integration into clinical decision-support workflows.',
    ],
    tags: ['YOLOv11', 'MONAI', 'MedNeXt', 'Medical Imaging', 'Computer Vision', 'PyTorch'],
    doi: 'https://doi.org/10.1109/COMPAS67506.2025.11381706',
  },
];

export default function Projects() {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', paddingBottom: '3rem' }}>
        <div className="container">
          <h1 className="gradient-text" style={{ marginBottom: '1rem' }}>Projects & Case Studies</h1>
          <p style={{ fontSize: '1.1rem', maxWidth: '700px' }}>
            End-to-end AI/ML systems spanning healthcare diagnostics, biomedical signal processing, and intelligent automation — from research to production deployment.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {projects.map((proj, i) => {
              const Icon = proj.icon;
              return (
                <AnimatedCard key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <div style={{ background: 'var(--bg-secondary)', padding: '0.75rem', borderRadius: '10px', color: 'var(--accent-base)', flexShrink: 0 }}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 style={{ marginBottom: '0.2rem' }}>{proj.title}</h3>
                        <p style={{ color: 'var(--accent-base)', fontWeight: '500', margin: 0, fontSize: '0.88rem' }}>{proj.subtitle}</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexShrink: 0 }}>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{proj.period}</span>
                      {proj.doi && (
                        <a href={proj.doi} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-base)', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', border: '1px solid var(--border-color-hover)', padding: '0.25rem 0.65rem', borderRadius: '6px' }}>
                          <ExternalLink size={13} /> Paper
                        </a>
                      )}
                    </div>
                  </div>
                  <p style={{ marginBottom: '1rem', lineHeight: '1.7' }}>{proj.description}</p>
                  <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {proj.bullets.map((b, j) => (
                      <li key={j} style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.93rem' }}>{b}</li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {proj.tags.map((tag, j) => (
                      <span key={j} style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', padding: '0.3rem 0.75rem', borderRadius: '20px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
