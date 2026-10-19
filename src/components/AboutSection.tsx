import React from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { VideoPlayerCard } from './VideoPlayerCard';

export const AboutSection: React.FC = () => {
  const aboutVideoProject = {
    id: 'satoo-about-reel',
    title: 'Satoo Showreel & Vision',
    category: 'shorts' as const,
    aspectRatio: '1:1' as const,
    url: 'https://res.cloudinary.com/xkhxv70d/video/upload/v1792349995/reel.mp4.mp4',
    thumbnail: 'https://pbs.twimg.com/amplify_video_thumb/2110066002574577664/img/L1D0taf0RdDE040s.jpg',
    tweetUrl: 'https://x.com/DSatoo_777/status/2110068012942496184',
    duration: '00:47',
    year: '2026',
    tag: 'SATOO EDITORIAL',
    tools: ['After Effects', 'Premiere Pro'],
    description: 'Flagship retention showreel from @DSatoo_777 on X.',
  };

  return (
    <section
      id="about"
      className="space-y-16 scroll-mt-28 text-center flex flex-col items-center max-w-6xl mx-auto px-6 md:px-12 w-full py-16"
    >
      {/* Section Header */}
      <div className="border-b border-[#241536]/40 pb-6 space-y-2 w-full max-w-2xl mx-auto">
        <h3 className="font-display text-3xl sm:text-5xl font-extrabold uppercase text-[#F2EFF8] tracking-tight">
          ABOUT
        </h3>
      </div>

      {/* 2-Column Content Split */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center w-full max-w-6xl text-left">
        {/* Left Column: Mission & Pacing Philosophy */}
        <div className="md:col-span-6 space-y-6 text-[#F2EFF8]/80 font-sans text-base sm:text-lg md:text-xl font-light leading-relaxed">
          <p className="border-l-2 border-[#7546C8]/60 pl-4">
            We are{' '}
            <span className="font-brand font-bold text-[#BBA7F5]">
              {portfolioConfig.brandName}
            </span>
            , a creative practice built around high-retention video editing and motion design for creators and brands who refuse to settle for average content. We work across Reels, YouTube, commercial campaigns, and narrative storytelling — always with an uncompromising cinematic eye behind every cut.
          </p>

          <p className="border-l-2 border-[#241536] pl-4 text-[#F2EFF8]/65 text-sm sm:text-base leading-relaxed">
            {portfolioConfig.aboutText2}
          </p>
        </div>

        {/* Right Column: Square Aspect Showcase Video Player */}
        <div className="md:col-span-6 flex justify-center items-center w-full">
          <div className="w-[420px] max-w-full aspect-square">
            <VideoPlayerCard
              project={aboutVideoProject}
              aspectClassName="aspect-square"
              className="border border-[#241536] rounded-2xl shadow-2xl hover:border-[#7546C8]/50 transition-all duration-500"
              showMuteButton={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
