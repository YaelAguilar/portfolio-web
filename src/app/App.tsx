import React from "react";
import { Navbar } from './components/Navbar';
import { GridBackground } from './components/GridBackground';
import { Hero } from './sections/Hero';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Footer } from './sections/Footer';

export default function App() {
  return (
    <div
      className="relative min-h-screen text-white"
      style={{ backgroundColor: '#06060f', fontFamily: 'Space Grotesk, sans-serif' }}
    >
      <GridBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        {/* Divider */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>
        <Experience />
        <div className="max-w-5xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>
        <Skills />
        <div className="max-w-5xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>
        <Footer />
      </main>
    </div>
  );
}