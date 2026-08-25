import React from 'react';
import { profile } from '../data/profile';

export function Contact() {
  const { links } = profile;

  return (
    <section className="section" id="contact">
      <div className="container">
        <h2 className="section-heading">Contact</h2>
        <p className="contact-bio">
          I am always open to discussing research collaborations, machine learning systems,
          and engineering opportunities. Feel free to reach out via email.
        </p>
        <div className="contact-links-row">
          <a href={links.email}>{profile.email}</a>
          <span style={{ color: 'var(--text-dim)' }}>/</span>
          <a href={links.github} target="_blank" rel="noopener">GitHub</a>
          <span style={{ color: 'var(--text-dim)' }}>/</span>
          <a href={links.linkedin} target="_blank" rel="noopener">LinkedIn</a>
          <span style={{ color: 'var(--text-dim)' }}>/</span>
          <a href={links.scholar} target="_blank" rel="noopener">Google Scholar</a>
          <span style={{ color: 'var(--text-dim)' }}>/</span>
          <a href={links.researchgate} target="_blank" rel="noopener">ResearchGate</a>
          <span style={{ color: 'var(--text-dim)' }}>/</span>
          <a href={links.orcid} target="_blank" rel="noopener">ORCID</a>
        </div>
      </div>
    </section>
  );
}
