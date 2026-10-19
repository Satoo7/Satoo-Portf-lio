import React, { useRef, useState, useMemo } from 'react';
import { Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { VideoProject } from '../data/portfolioData';

interface VideoPlayerCardProps {
  project: VideoProject;
  className?: string;
  aspectClassName?: string;
  showMuteButton?: boolean;
  iframeClassName?: string;
  onExpand?: (project: VideoProject) => void;
}

/**
 * Transforms standard YouTube / Vimeo / MP4 URLs into embeddable autoplay loops
 * matching Falk Studios' engine with cross-origin audio controls.
 */
function formatEmbedUrl(url: string): { embedUrl: string; isDirectVideo: boolean } {
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    const id = match && match[2].length === 11 ? match[2] : null;
    return {
      embedUrl: id
        ? `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&rel=0&fs=0&modestbranding=1&showinfo=0&iv_load_policy=3&disablekb=1&enablejsapi=1`
        : url,
      isDirectVideo: false,
    };
  } else if (url.includes('vimeo.com')) {
    const regExp = /vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
    const match = url.match(regExp);
    const id = match ? match[3] : null;
    return {
      embedUrl: id
        ? `https://player.vimeo.com/video/${id}?autoplay=1&muted=1&loop=1&autopause=0&byline=0&title=0&portrait=0&badge=0&playbar=0&fullscreen=0&speed=0&api=1`
        : url,
      isDirectVideo: false,
    };
  }

  // Direct MP4 or WebM video
  return {
    embedUrl: url,
    isDirectVideo: true,
  };
}

export const VideoPlayerCard: React.FC<VideoPlayerCardProps> = ({
  project,
  className = '',
  aspectClassName = 'aspect-video',
  showMuteButton = true,
  iframeClassName = '',
  onExpand,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const { embedUrl, isDirectVideo } = useMemo(() => formatEmbedUrl(project.url), [project.url]);

const toggleSound = (e: React.MouseEvent) => {
  e.preventDefault();
  e.stopPropagation();

  const newMuted = !isMuted;

    if (isDirectVideo) {
      if (videoRef.current) {
        videoRef.current.muted = newMuted;
        if (!newMuted) {
          videoRef.current.play().catch(() => {});
        }
      }
      return;
    }

    const iframe = iframeRef.current;
    if (!iframe || !iframe.contentWindow) return;

    if (embedUrl.includes('youtube.com')) {
      const func = newMuted ? 'mute' : 'unMute';
      iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func }), '*');
    } else if (embedUrl.includes('vimeo.com')) {
      iframe.contentWindow.postMessage(JSON.stringify({ method: 'setMuted', value: newMuted }), '*');
      iframe.contentWindow.postMessage(JSON.stringify({ method: 'setVolume', value: newMuted ? 0 : 1 }), '*');
    }
  };

  return (
    <div
      className={`relative ${aspectClassName} w-full bg-[#090810] overflow-hidden border border-[#241536]/80 hover:border-[#7546C8]/60 shadow-lg rounded-xl group transition-all duration-500 hover:shadow-[0_12px_40px_rgba(117,70,200,0.18)] ${className}`}
    >
      {/* Media Layer: iframe or video */}
      {isDirectVideo ? (
        <video
          ref={videoRef}
          src={embedUrl}
          poster={project.thumbnail}
          autoPlay
          muted
          loop
          playsInline
          className={`w-full h-full object-cover absolute inset-0 ${iframeClassName}`}
        />
      ) : (
        <iframe
          ref={iframeRef}
          src={embedUrl}
          className={`w-full h-full absolute inset-0 pointer-events-none scale-[1.01] ${iframeClassName}`}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={project.title}
          frameBorder="0"
        />
      )}

      {/* Transparent Click Surface to toggle sound directly by tapping anywhere */}
      <div
        onClick={toggleSound}
        className="absolute inset-0 z-10 cursor-pointer bg-transparent"
        title="Click to mute / unmute"
      />

      {/* Hover Info & Controls Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-between p-3 sm:p-4 bg-gradient-to-t from-[#090810]/80 via-transparent to-[#090810]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Top bar with tag & expand affordance */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#BBA7F5] bg-[#100D1A]/80 backdrop-blur-sm px-2 py-0.5 rounded border border-[#241536]">
            {project.tag || project.category}
          </span>

          {onExpand && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onExpand(project);
              }}
              className="pointer-events-auto p-1.5 rounded-lg bg-[#090810]/80 hover:bg-[#7546C8] text-[#F2EFF8] border border-[#241536] hover:border-[#BBA7F5] transition-all cursor-pointer backdrop-blur-sm shadow-md"
              title="Expand details"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Bottom bar with Title */}
        <div className="pr-12">
          <h4 className="font-display text-xs sm:text-sm font-medium text-[#F2EFF8] tracking-tight truncate">
            {project.title}
          </h4>
          {project.duration && (
            <span className="text-[10px] font-mono text-[#F2EFF8]/60 tabular-nums">
              {project.duration}
            </span>
          )}
        </div>
      </div>

      {/* Floating Sound Toggle Button (Bottom-Right, exactly like Falk Studios) */}
      {showMuteButton && (
        <button
          onClick={toggleSound}
          className="pointer-events-auto absolute bottom-3.5 right-3.5 z-30 bg-[#090810]/85 hover:bg-[#100D1A] text-[#F2EFF8] hover:text-[#BBA7F5] border border-[#241536] hover:border-[#7546C8]/60 p-2.5 rounded-full shadow-lg transition-all duration-300 backdrop-blur-md cursor-pointer"
          title={isMuted ? 'Unmute' : 'Mute'}
          aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-[#F2EFF8]/70" />
          ) : (
            <Volume2 className="w-4 h-4 text-[#BBA7F5] animate-pulse" />
          )}
        </button>
      )}
    </div>
  );
};
