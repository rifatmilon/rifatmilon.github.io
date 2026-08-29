import React from 'react';
import { profile } from '../data/profile';

export function Hero() {
  const { links } = profile;

  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-top">
          <div className="hero-info">
            <h1 className="hero-name">{profile.name}</h1>
            <p className="hero-subtitle">{profile.role}</p>
          </div>
          <div className="hero-avatar-wrapper">
            <img
              src={profile.avatar || "/profile-picture.jpg"}
              alt={profile.name}
              className="hero-avatar"
            />
          </div>
        </div>

        <div className="hero-links">
          <a href={links.email}>Email</a>
          <span className="dot">/</span>
          <a href={links.cv} target="_blank" rel="noopener">Resume</a>
          <span className="dot">/</span>
          <a href={links.academic_cv} target="_blank" rel="noopener">Academic CV</a>
          <span className="dot">/</span>
          <a href={links.github} target="_blank" rel="noopener">GitHub</a>
          <span className="dot">/</span>
          <a href={links.linkedin} target="_blank" rel="noopener">LinkedIn</a>
          <span className="dot">/</span>
          <a href={links.scholar} target="_blank" rel="noopener">Google Scholar</a>
          <span className="dot">/</span>
          <a href={links.orcid} target="_blank" rel="noopener">ORCID</a>
        </div>
      </div>
    </section>
  );
}
