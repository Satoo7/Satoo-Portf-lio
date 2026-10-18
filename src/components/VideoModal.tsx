import React, { useEffect, useState } from 'react';
import { VideoProject } from '../data/portfolioData';
import { X, ChevronLeft, ChevronRight, Sparkles, ExternalLink } from 'lucide-react';
import { VideoPlayerCard } from './VideoPlayerCard';

interface VideoModalProps {
  project: VideoProject | null;
  projects: VideoProject[];
  onClose: () => void;
  onSelectProject: (project: VideoProject) => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  project,
  projects,
  onClose,
  onSelectProject,
}) => {
  const [showConfigTips, setShowConfigTips] = useState<boolean>(false);

  // Find index
  const currentIndex = project ? projects.findIndex((p) => p.id === project.id) : -1;
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  // Keyboard navigation
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && prevProject) {
        onSelectProject(prevProject);
      } else if (e.key === 'ArrowRight' && nextProject) {
        onSelectProject(nextProject);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, prevProject, nextProject, onClose, onSelectProject]);

  if (!project) return null;

  const isVertical = project.aspectRatio === '9:16';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#090810]/95 backdrop-blur-2xl animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
    >
      {/* Modal Box */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative flex flex-col bg-[#100D1A] border border-[#241536] rounded-2xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.85)] max-h-[92vh] w-full ${
          isVertical ? 'max-w-md md:max-w-lg' : 'max-w-5xl'
        }`}
      >
        {/* Top Bar inside Modal */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[#241536]/60 bg-[#090810]/80">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono tabular-nums text-[#BBA7F5]/80">
              0{currentIndex + 1} / 0{projects.length}
            </span>
            <span className="text-[#241536]" aria-hidden="true">|</span>
            <span className="text-xs tracking-wider uppercase text-[#F2EFF8]/50 font-mono">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Quick config helper toggle */}
            <button
              onClick={() => setShowConfigTips(!showConfigTips)}
              className="text-xs text-[#BBA7F5]/80 hover:text-[#F2EFF8] p-1.5 rounded transition-colors flex items-center gap-1 cursor-pointer font-mono"
              title="How to replace video"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="hidden sm:inline text-[11px]">Edit Guide</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-lg text-[#F2EFF8]/70 hover:text-[#F2EFF8] hover:bg-[#241536]/50 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player in Modal */}
        <div className="relative bg-black flex items-center justify-center group overflow-hidden">
          <VideoPlayerCard
            project={project}
            aspectClassName={isVertical ? 'aspect-[9/16] max-h-[65vh]' : 'aspect-video max-h-[70vh]'}
            className="border-none rounded-none shadow-none"
            showMuteButton={true}
          />

          {/* Previous Project Arrow */}
          <button
            onClick={() => onSelectProject(prevProject)}
            aria-label="Previous Project"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#090810]/70 hover:bg-[#7546C8] text-[#F2EFF8] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all cursor-pointer backdrop-blur-sm z-30"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next Project Arrow */}
          <button
            onClick={() => onSelectProject(nextProject)}
            aria-label="Next Project"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#090810]/70 hover:bg-[#7546C8] text-[#F2EFF8] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all cursor-pointer backdrop-blur-sm z-30"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Project Details Footer */}
        <div className="p-5 bg-[#100D1A] border-t border-[#241536]/40 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-lg md:text-xl font-semibold text-[#F2EFF8] tracking-tight">
                {project.title}
              </h2>
              {project.year && (
                <span className="text-xs text-[#BBA7F5]/80 font-mono">({project.year})</span>
              )}
            </div>
            {project.description && (
              <p className="text-xs md:text-sm text-[#F2EFF8]/65 max-w-2xl leading-relaxed">
                {project.description}
              </p>
            )}
          </div>

          {/* Tools & Tweet Link */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {project.tools && project.tools.length > 0 && (
              <div className="flex items-center gap-2 text-xs text-[#F2EFF8]/50 font-mono">
                {project.tools.map((tool, idx) => (
                  <React.Fragment key={tool}>
                    <span>{tool}</span>
                    {idx < project.tools!.length - 1 && <span aria-hidden="true">·</span>}
                  </React.Fragment>
                ))}
              </div>
            )}

            {project.tweetUrl && (
              <a
                href={project.tweetUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#241536] hover:bg-[#7546C8] text-[#F2EFF8] text-xs font-mono transition-colors border border-[#7546C8]/40"
              >
                <span>Post on X</span>
                <ExternalLink className="w-3 h-3 text-[#BBA7F5]" />
              </a>
            )}
          </div>
        </div>

        {/* Replace Video Helper Drawer */}
        {showConfigTips && (
          <div className="px-5 py-4 bg-[#090810] border-t border-[#7546C8]/30 text-xs text-[#F2EFF8]/80 animate-[fadeIn_0.2s_ease-out]">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-[#BBA7F5] flex items-center gap-1.5 font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                Como trocar pelo seu próprio vídeo:
              </span>
              <button
                onClick={() => setShowConfigTips(false)}
                className="text-[#F2EFF8]/50 hover:text-white"
              >
                ✕
              </button>
            </div>
            <p className="leading-relaxed text-[#F2EFF8]/70">
              No arquivo <code className="text-[#BBA7F5] bg-[#241536]/60 px-1 py-0.5 rounded font-mono">src/data/portfolioData.ts</code>, altere o campo <code className="text-[#BBA7F5] font-mono">url</code> para qualquer link do Vimeo, YouTube ou MP4. O player converte automaticamente e ajusta a proporção!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
