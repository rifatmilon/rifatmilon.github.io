import React, { useState } from 'react';
import { publications } from '../data/publications';

function BibTexButton({ bibtex }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = bibtex;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      className={`pub-action-btn${copied ? ' copied' : ''}`}
      onClick={copy}
      title="Copy BibTeX Citation"
    >
      [{copied ? '✓ Copied' : 'BibTeX'}]
    </button>
  );
}

export function Research() {
  return (
    <section className="section" id="research">
      <div className="container">
        <h2 className="section-heading">Research</h2>
        <p className="pub-intro">
          My research focus is on computer vision, biomedical signal processing, and TinyML —
          developing lightweight and interpretable neural architectures for edge hardware and clinical decision-support.
          For citation metrics, see my{' '}
          <a href="https://scholar.google.com/citations?user=qPC0U2gAAAAJ" target="_blank" rel="noopener">
            Google Scholar
          </a>{' '}
          profile.
        </p>

        <div className="pub-list">
          {publications.map((pub) => (
            <div key={pub.id} className="pub-item">
              <div>
                <a
                  href={pub.doi}
                  target="_blank"
                  rel="noopener"
                  className="pub-title"
                >
                  {pub.title}
                </a>
                {pub.award && (
                  <span className="pub-award-inline">🏆 {pub.award}</span>
                )}
              </div>

              <div
                className="pub-authors"
                dangerouslySetInnerHTML={{ __html: pub.authors }}
              />

              <div className="pub-venue">
                <em>{pub.venue}</em>, {pub.year}
                {pub.note && <span> · {pub.note}</span>}
              </div>

              <div className="pub-links">
                <a href={pub.doi} target="_blank" rel="noopener">[DOI]</a>
                <BibTexButton bibtex={pub.bibtex} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
