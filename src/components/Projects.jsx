import React, { useState, useMemo } from 'react';
import { projects } from '../data/projects';

export function Projects() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    if (!q) return projects;
    return projects.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.stack.some(s => s.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-heading">Selected Projects</h2>

        <input
          className="project-search-input"
          type="text"
          placeholder="Filter projects by name or technology…"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />

        <div className="project-list">
          {filtered.map(p => (
            <div key={p.repo} className="project-entry">
              <div className="project-entry-header">
                <div className="project-entry-title">
                  <a href={p.gh} target="_blank" rel="noopener">{p.name}</a>
                </div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '0.8rem' }}>
                  <a href={p.gh} target="_blank" rel="noopener">[Code ↗]</a>
                  {p.demo && (
                    <> &nbsp; <a href={p.demo} target="_blank" rel="noopener">[Demo ↗]</a></>
                  )}
                </div>
              </div>
              <p className="project-entry-desc">{p.desc}</p>
              <div className="project-tags">
                {p.stack.map(s => <span key={s} className="project-tag">{s}</span>)}
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p style={{ color: 'var(--text-dim)', fontSize: '0.875rem' }}>
            No projects found matching "{query}".
          </p>
        )}
      </div>
    </section>
  );
}
