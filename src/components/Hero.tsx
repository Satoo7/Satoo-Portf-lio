import React from 'react';
import { GeassEmblem } from './GeassEmblem';
import { GeassLogo } from './GeassLogo';
import { portfolioConfig } from '../data/portfolioData';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[92vh] flex flex-col justify-center items-center overflow-hidden py-24 scroll-mt-32 bg-[#090810]"
    >
      {/* Background Ambient Geass Emblem & Coordinate Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
        {/* Satoo's own video loop from X profile */}
        <video
          src="https://video.twimg.com/amplify_video/2110066002574577664/vid/avc1/720x1280/OkB3KE_pcAy-QoAL.mp4?tag=14"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full min-w-full min-h-full object-cover opacity-18 scale-105 pointer-events-none filter saturate-75"
        />

        {/* Ambient Dark Purple Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#090810]/95 via-[#090810]/70 to-[#090810] pointer-events-none z-10" />

        {/* Geass Emblem Centerpiece Floating in Atmosphere */}
        <div className="absolute z-10 opacity-30 scale-95 md:scale-115">
          <GeassEmblem size={480} />
        </div>

        {/* Technical Coordinate Hairlines */}
        <div className="absolute inset-0 pointer-events-none z-10 bg-[radial-gradient(circle,rgba(117,70,200,0.06)_1px,transparent_1px)] [background-size:20px_20px] opacity-60" />
        <div className="absolute inset-x-0 h-[1px] bg-[#241536]/40 top-1/4 z-10" />
        <div className="absolute inset-x-0 h-[1px] bg-[#241536]/40 bottom-1/4 z-10" />
        <div className="absolute inset-y-0 w-[1px] bg-[#241536]/30 left-1/3 z-10 hidden md:block" />
        <div className="absolute inset-y-0 w-[1px] bg-[#241536]/30 right-1/3 z-10 hidden md:block" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center justify-center space-y-6">
        {/* Code Geass Sigil Centerpiece */}
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#100D1A]/85 border border-[#7546C8]/50 shadow-[0_0_25px_rgba(117,70,200,0.45)] backdrop-blur-md hover:scale-105 transition-transform duration-300">
          <GeassLogo size={40} glow={true} />
        </div>

        {/* WELCOME Tracked Header */}
        <h2 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#F2EFF8] tracking-[0.42em] uppercase select-none opacity-90">
          {portfolioConfig.heroKicker}
        </h2>

        {/* Scroll Indicator (Falk Studios signature) */}
        <div className="pt-10 flex flex-col items-center gap-3">
          <button
            onClick={onExploreClick}
            className="text-[9px] text-[#F2EFF8]/40 hover:text-[#BBA7F5] tracking-[0.3em] uppercase font-mono transition-colors cursor-pointer"
          >
            SCROLL TO EXPLORE
          </button>
          <div className="w-[1.5px] h-12 bg-gradient-to-b from-[#7546C8] to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
};
