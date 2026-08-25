import React from 'react';
import { profile } from '../data/profile';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <span>© {year} {profile.name}</span>
        <div style={{ display: 'flex', gap: '1.25rem' }}>
          <a href={profile.links.github} target="_blank" rel="noopener">GitHub</a>
          <a href={profile.links.scholar} target="_blank" rel="noopener">Google Scholar</a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
