import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { News } from './components/News';
import { Research } from './components/Research';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <News />
        <Research />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
