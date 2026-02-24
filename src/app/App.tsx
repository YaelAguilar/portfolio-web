import React from "react";
import { Navbar } from './components/Navbar';
import { GridBackground } from './components/GridBackground';
import { Hero } from './sections/Hero';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Footer } from './sections/Footer';
import { ThemeProvider } from '../hooks/useTheme';

export default function App() {
  return (
    <ThemeProvider>
      <div
        className="relative min-h-screen text-gray-900 dark:text-white transition-colors duration-300"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        <GridBackground />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          {/* Divider */}
          <div className="max-w-5xl mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/[0.06] to-transparent" />
          </div>
          <Experience />
          <div className="max-w-5xl mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/[0.06] to-transparent" />
          </div>
          <Skills />
          <div className="max-w-5xl mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/[0.06] to-transparent" />
          </div>
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}
