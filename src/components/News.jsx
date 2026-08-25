import React from 'react';
import { profile } from '../data/profile';

export function News() {
  return (
    <section className="section" id="news">
      <div className="container">
        <h2 className="section-heading">News</h2>
        <div className="news-list">
          {profile.news.map((item, i) => (
            <div key={i} className="news-item">
              <div className="news-date">{item.date}</div>
              <div
                className="news-content"
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
