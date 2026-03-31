import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{ borderTop: '1px solid var(--border-color)', padding: '4rem 0', marginTop: '4rem' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="https://github.com/rifatmilon" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@rifatmilon.com" style={{ color: 'var(--text-secondary)' }}>
              <Mail size={24} />
            </a>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            &copy; {currentYear} Rifat Milon. All rights reserved. Built with React.
          </p>
        </div>
      </div>
    </footer>
  );
}
