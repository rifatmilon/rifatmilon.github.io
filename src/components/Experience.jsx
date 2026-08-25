import React from 'react';
import { profile } from '../data/profile';

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="section-heading">Experience</h2>
        <div className="timeline-list">
          {profile.experiences.map((exp, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-header">
                <div className="timeline-title">
                  <span>{exp.role}</span>
                  {' · '}
                  {exp.companyUrl ? (
                    <a href={exp.companyUrl} className="timeline-org">{exp.company}</a>
                  ) : (
                    <span className="timeline-org">{exp.company}</span>
                  )}
                </div>
                <span className="timeline-date">{exp.period}</span>
              </div>
              <ul className="timeline-bullets">
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="sub-heading">Education</h3>
        <div className="timeline-list">
          {profile.education.map((ed, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-header">
                <div className="timeline-title">
                  <span>{ed.degree}</span>
                  {' · '}
                  <span className="timeline-org">{ed.institution}</span>
                </div>
                <span className="timeline-date">{ed.period}</span>
              </div>
              {ed.note && (
                <ul className="timeline-bullets">
                  <li>{ed.note}</li>
                </ul>
              )}
            </div>
          ))}
        </div>

        <h3 className="sub-heading">Technical Skills</h3>
        <div className="skills-container">
          {profile.skills.map((sg, i) => (
            <div key={i}>
              <div className="skill-category-title">{sg.group}</div>
              <div className="skill-category-items">{sg.items}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
