import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const ScholarIcon = () => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/>
  </svg>
);

const ResearchGateIcon = () => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.586 0H4.414A4.414 4.414 0 0 0 0 4.414v15.172A4.414 4.414 0 0 0 4.414 24h15.172A4.414 4.414 0 0 0 24 19.586V4.414A4.414 4.414 0 0 0 19.586 0zm-8.868 18.066H8.257V9.756h2.576c1.077 0 2.227.345 2.227 1.942 0 1.258-1.01 1.777-1.636 1.838l1.791 4.53h-2.58l-1.393-3.791h-1.04v3.791h.001zm5.28-1.782h-1.579v-2.029h1.564c1.127 0 2.05-.623 2.05-1.996s-.923-1.996-2.05-1.996h-2.227v8.31h2.241zM21.571 8.52h-2.035v-1.16h2.035z"/>
  </svg>
);

const OrcidIcon = () => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.949-.947.949a.95.95 0 0 1-.949-.949c0-.516.424-.947.949-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.575-1.731 5.016-5.344 5.016h-3.9V7.416zm1.444 1.303v7.434h2.228c2.072 0 3.425-1.25 3.425-3.722 0-2.453-1.388-3.712-3.425-3.712h-2.228z"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ borderTop: '1px solid var(--border-color)', padding: '4rem 0', marginTop: '4rem' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="https://scholar.google.com/citations?user=qPC0U2gAAAAJ" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }} title="Google Scholar">
              <ScholarIcon />
            </a>
            <a href="https://researchgate.net/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }} title="ResearchGate">
              <ResearchGateIcon />
            </a>
            <a href="https://orcid.org/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }} title="ORCID">
              <OrcidIcon />
            </a>
            <a href="https://github.com/rifatmilon" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }} title="GitHub">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }} title="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@rifatmilon.com" style={{ color: 'var(--text-secondary)' }} title="Email">
              <Mail size={24} />
            </a>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'center' }}>
            &copy; {currentYear} Md. Rifat Aknda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
