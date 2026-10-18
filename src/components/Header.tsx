import React from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { GeassLogo } from './GeassLogo';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isScrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  isScrolled,
}) => {
  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'about', label: 'ABOUT' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090810]/90 backdrop-blur-md py-3.5 border-b border-[#241536]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between gap-4 relative min-h-[40px]">
        {/* Brand Logo - Satoo with Code Geass Insignia */}
        <div className="flex items-center gap-4 z-10">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2.5 cursor-pointer group text-left"
            title="Satoo — Home"
          >
            <GeassLogo size={22} className="group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
            <span className="font-brand text-xl font-bold tracking-tight text-[#F2EFF8] group-hover:text-[#BBA7F5] transition-colors duration-300">
              {portfolioConfig.brandName}
            </span>
          </button>
        </div>

        {/* Center Navigation Links with Active Indicator */}
        <div className="hidden sm:block sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-1/2 sm:-translate-y-1/2 z-0">
          <nav className="flex items-center gap-6 sm:gap-8 text-[11px] uppercase tracking-[0.22em] font-medium text-[#F2EFF8]/60">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`transition-all duration-200 hover:text-[#F2EFF8] relative py-1 cursor-pointer ${
                    isActive ? 'text-[#F2EFF8] font-semibold' : ''
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#7546C8] shadow-[0_0_6px_rgba(117,70,200,0.8)] animate-[fadeIn_0.2s_ease-out]" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Action Button: CONTACT ME */}
        <div className="z-10 flex items-center gap-3">
          <button
            onClick={() => onNavigate('contact')}
            className="border border-[#7546C8]/40 text-[#BBA7F5] hover:bg-[#7546C8] hover:text-white hover:border-[#7546C8] transition-all duration-200 text-[10px] uppercase tracking-[0.2em] px-3.5 py-1.5 font-mono font-medium rounded cursor-pointer shadow-[0_0_12px_rgba(117,70,200,0.15)]"
          >
            CONTACT ME
          </button>
        </div>
      </div>
    </header>
  );
};
