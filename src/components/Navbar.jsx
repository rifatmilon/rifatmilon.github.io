import React from 'react';
import { profile } from '../data/profile';

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="nav-title">{profile.name}</a>
        <div className="nav-menu">
          <a href="#about">about</a>
          <a href="#news">news</a>
          <a href="#research">research</a>
          <a href="#projects">projects</a>
          <a href="#experience">experience</a>
          <a href="#contact">contact</a>
          <a href={profile.links.cv} target="_blank" rel="noopener">cv ↗</a>
        </div>
      </div>
    </nav>
  );
}
