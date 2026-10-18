/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PortfolioGallery } from './components/PortfolioGallery';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { VideoModal } from './components/VideoModal';
import { VideoProject, portfolioProjects } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<VideoProject | null>(null);

  // Scroll listener for sticky header and active section tracking (Falk Studios architecture)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'projects', 'about', 'contact'];
      const scrollPosition = window.scrollY + 280;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090810] text-[#F2EFF8] flex flex-col font-sans selection:bg-[#7546C8]/30 selection:text-white relative overflow-x-hidden">
      {/* Subtle Global Radial Atmosphere */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] pointer-events-none z-0 opacity-40"
        style={{
          background: 'radial-gradient(circle at center, rgba(117, 70, 200, 0.12) 0%, rgba(36, 21, 54, 0.05) 45%, transparent 70%)',
        }}
      />

      {/* Persistent Navigation Bar */}
      <Header
        activeSection={activeSection}
        onNavigate={scrollToSection}
        isScrolled={isScrolled}
      />

      {/* Main Flow (Home -> Projects -> About -> Contact) */}
      <main className="flex-grow z-10 w-full space-y-16 sm:space-y-24">
        {/* Section 1: Home / Hero */}
        <Hero onExploreClick={() => scrollToSection('projects')} />

        {/* Section 2: Projects (Tabbed Layout: Major, Edits, YouTube, Others) */}
        <PortfolioGallery onExpandProject={(project) => setSelectedProject(project)} />

        {/* Section 3: About (Philosophy & Square Showreel Player) */}
        <AboutSection />

        {/* Section 4: Contact (Technical Transmission Flow & Footer) */}
        <ContactSection />
      </main>

      {/* Fullscreen Video Lightbox / Details Modal */}
      <VideoModal
        project={selectedProject}
        projects={portfolioProjects}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(project) => setSelectedProject(project)}
      />
    </div>
  );
}
