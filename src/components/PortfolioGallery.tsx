import React, { useState } from 'react';
import { VideoProject, portfolioProjects } from '../data/portfolioData';
import { VideoPlayerCard } from './VideoPlayerCard';
import { ExternalLink } from 'lucide-react';

interface PortfolioGalleryProps {
  onExpandProject: (project: VideoProject) => void;
}

type TabType = 'all' | 'viral' | 'storytelling' | 'shorts';

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onExpandProject }) => {
  const [activeTab, setActiveTab] = useState<TabType>('all');

  const tabs: { id: TabType; label: string }[] = [
    { id: 'all', label: 'All Works' },
    { id: 'viral', label: 'Viral & Hooks' },
    { id: 'storytelling', label: 'Storytelling' },
    { id: 'shorts', label: 'Shorts & Reels' },
  ];

  const filteredProjects = activeTab === 'all'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="space-y-12 scroll-mt-28 text-center flex flex-col items-center max-w-[1400px] mx-auto px-6 md:px-12 w-full py-16">
      {/* Section Header */}
      <div className="border-b border-[#241536]/40 pb-6 space-y-2 w-full max-w-2xl mx-auto">
        <h3 className="font-display text-3xl sm:text-5xl font-extrabold uppercase text-[#F2EFF8] tracking-tight">
          PROJECTS
        </h3>
        <p className="text-xs text-[#F2EFF8]/50 tracking-wider font-mono">
          DIRECT FROM @DSATOO_777 · CLICK ANY VIDEO TO UNMUTE
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 pb-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-mono text-xs sm:text-sm tracking-[0.2em] uppercase py-2 px-4 border-b-2 transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'border-[#7546C8] text-[#BBA7F5] font-bold shadow-[0_4px_12px_rgba(117,70,200,0.2)]'
                  : 'border-transparent text-[#F2EFF8]/40 hover:text-[#F2EFF8]'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Grid of Vertical Video Projects */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-4 text-left items-start animate-[fadeIn_0.3s_ease-out]">
        {filteredProjects.map((project) => (
          <div key={project.id} className="flex flex-col space-y-3">
            <VideoPlayerCard
              project={project}
              aspectClassName="aspect-[9/16] max-h-[560px]"
              className="border-[#241536] shadow-xl"
              onExpand={onExpandProject}
            />

            {/* Video Info Card */}
            <div className="px-1 flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <h4 className="font-display text-sm font-semibold text-[#F2EFF8] truncate">
                  {project.title}
                </h4>
                <div className="flex items-center gap-2 mt-1 text-[11px] text-[#F2EFF8]/50 font-mono">
                  <span className="text-[#BBA7F5]">{project.tag}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.duration}</span>
                </div>
              </div>

              {/* Direct Link to X (Twitter) Post */}
              {project.tweetUrl && (
                <a
                  href={project.tweetUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg bg-[#100D1A] hover:bg-[#241536] text-[#F2EFF8]/60 hover:text-[#BBA7F5] border border-[#241536] transition-colors shrink-0"
                  title="View post on X (Twitter)"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
