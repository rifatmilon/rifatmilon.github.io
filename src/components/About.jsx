import React from 'react';
import { profile } from '../data/profile';

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-heading">About</h2>
        <div
          className="about-bio"
          dangerouslySetInnerHTML={{ __html: profile.bio }}
        />
      </div>
    </section>
  );
}
