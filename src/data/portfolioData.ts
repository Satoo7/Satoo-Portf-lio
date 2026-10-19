/**
 * Portfolio Data Configuration - Satoo
 * 
 * Official video works synchronized from @DSatoo_777 on X (Twitter).
 * High-retention vertical edits, viral storytelling, and kinetic motion.
 */

export interface VideoProject {
  id: string;
  title: string;
  category: 'all' | 'shorts' | 'storytelling' | 'viral';
  aspectRatio: '9:16' | '16:9' | '1:1';
  url: string;
  thumbnail: string;
  tweetUrl: string;
  duration: string;
  year: string;
  tag: string;
  tools: string[];
  description: string;
}

export interface PortfolioConfig {
  brandName: string;
  brandTag: string;
  role: string;
  heroKicker: string;
  heroHeadline: string;
  heroHeadlineAccent: string;
  heroSubtitle: string;
  aboutText1: string;
  aboutText2: string;
  contactEmail: string;
  whatsappNumber: string;
  whatsappMessage: string;
  xHandle: string;
  xUrl: string;
  instagramHandle?: string;
  instagramUrl?: string;
  socials: {
    name: string;
    url: string;
    icon: 'instagram' | 'x' | 'youtube' | 'mail';
  }[];
}

export const portfolioConfig: PortfolioConfig = {
  brandName: 'Satoo',
  brandTag: 'SATOO',
  role: 'VIDEO EDITOR & MOTION DESIGNER',
  heroKicker: 'WELCOME',
  heroHeadline: 'Visuals that speak. ',
  heroHeadlineAccent: 'Edits that stand out.',
  heroSubtitle: 'Selected works in high-retention video editing, viral storytelling, and kinetic motion.',
  aboutText1:
    'We are Satoo, built around high-retention video editing and motion design for creators and brands who refuse to settle for average content. We specialize in Shorts, Reels, viral storytelling, and YouTube content — always with a cinematic eye behind every cut.',
  aboutText2:
    'Every project runs through the same process: rhythm and hook, surgical cutting, motion graphics, and immersive sound design — turning raw clips into videos that hold attention from the first second to the last, converting into real engagement and viral reach.',
  contactEmail: 'rodrigosato127@gmail.com',
  whatsappNumber: '5511999999999',
  whatsappMessage: 'Olá Satoo! Vi seus vídeos no portfólio e gostaria de iniciar um projeto de edição.',
  xHandle: '@DSatoo_777',
  xUrl: 'https://x.com/DSatoo_777',
  instagramHandle: '@rodrigosato7',
  instagramUrl: 'https://www.instagram.com/rodrigosato7/',
  socials: [
    { name: 'Instagram', url: 'https://www.instagram.com/rodrigosato7/', icon: 'instagram' },
    { name: 'X (Twitter)', url: 'https://x.com/DSatoo_777', icon: 'x' },
    { name: 'YouTube', url: 'https://youtube.com', icon: 'youtube' },
    { name: 'Email', url: 'mailto:rodrigosato127@gmail.com', icon: 'mail' },
  ],
};

// The 6 official video works directly from https://x.com/DSatoo_777
export const portfolioProjects: VideoProject[] = [
  {
    id: 'satoo-cinematic-reel',
    title: 'Satoo Kinetic Motion & Retention Showreel',
    category: 'shorts',
    aspectRatio: '9:16',
    url: 'https://player.cloudinary.com/embed/?cloud_name=xkhxv70d&public_id=reel.mp4',
    thumbnail: 'https://pbs.twimg.com/amplify_video_thumb/2110066002574577664/img/L1D0taf0RdDE040s.jpg',
    tweetUrl: 'https://x.com/DSatoo_777/status/2110068012942496184',
    duration: '00:47',
    year: '2026',
    tag: 'Flagship Showreel',
    tools: ['After Effects', 'Premiere Pro', 'Custom Foley'],
    description: 'Master retention reel demonstrating signature transition mechanics, beat-synchronized cuts, and 4K vertical mastery.',
  },
  {
    id: 'satoo-mrbeast-speed',
    title: 'MrBeast Challenges IShowSpeed',
    category: 'viral',
    aspectRatio: '9:16',
    url: 'https://player.cloudinary.com/embed/?cloud_name=xkhxv70d&public_id=mrbeast.mp4',
    thumbnail: 'https://pbs.twimg.com/amplify_video_thumb/2110049649255911426/img/CbzEXF7Y0rrHGxi3.jpg',
    tweetUrl: 'https://player.cloudinary.com/embed/?cloud_name=xkhxv70d&public_id=mrbeast.mp4',
    duration: '00:45',
    year: '2026',
    tag: 'Fast-Paced Hook',
    tools: ['After Effects', 'Speed Ramping', 'Sound Design'],
    description: 'Dynamic challenge edit built around fast visual hooks, zoom punch-ins, and high-energy sound design.',
  },
  {
    id: 'satoo-speed-fans',
    title: 'iShowSpeed Really Appreciates His Fans',
    category: 'storytelling',
    aspectRatio: '9:16',
    url: 'https://res.cloudinary.com/xkhxv70d/video/upload/v1792349970/fans.mp4.mp4',
    thumbnail: 'https://pbs.twimg.com/amplify_video_thumb/2110050694749179904/img/LoeIXvb5YLxBpCL4.jpg',
    tweetUrl: 'https://x.com/DSatoo_777/status/2110051239526609363',
    duration: '00:52',
    year: '2026',
    tag: 'Heartwarming Storytelling',
    tools: ['DaVinci Resolve', 'Color Balancing', 'Audio Mixing'],
    description: 'Heartfelt storytelling edit harmonizing emotional audio ambiance, expressive reaction zooms, and smooth transitions.',
  },
  {
    id: 'satoo-hero-dad',
    title: 'My Hero is My Dad',
    category: 'storytelling',
    aspectRatio: '9:16',
    url: 'https://res.cloudinary.com/xkhxv70d/video/upload/v1792349991/dad.mp4.mp4',
    thumbnail: 'https://pbs.twimg.com/amplify_video_thumb/2110064708376002560/img/jqYicljH1ga78buf.jpg',
    tweetUrl: 'https://x.com/DSatoo_777/status/2110065146622333245',
    duration: '00:48',
    year: '2026',
    tag: 'Inspirational Narrative',
    tools: ['Premiere Pro', 'Audio Mastering', 'Story Pacing'],
    description: 'Tribute narrative piece utilizing slow-burn build up, motivational voiceover balance, and impactful punchlines.',
  },
  {
    id: 'satoo-heart-money',
    title: 'What matters is the heart, not the money',
    category: 'storytelling',
    aspectRatio: '9:16',
    url: 'https://res.cloudinary.com/xkhxv70d/video/upload/v1792349982/heart.mp4.mp4',
    thumbnail: 'https://pbs.twimg.com/amplify_video_thumb/2110065258932973568/img/U_U5uQZ5qbCXMkny.jpg',
    tweetUrl: 'https://x.com/DSatoo_777/status/2110065892474397049',
    duration: '00:55',
    year: '2026',
    tag: 'Emotional Resonance',
    tools: ['DaVinci Resolve', 'Text Animation', 'Soundscape'],
    description: 'Touching social experiment edit with disciplined timing, sensitive music swelling, and crisp animated subtitles.',
  },
  {
    id: 'satoo-speed-ronaldo',
    title: 'IShowSpeed Meets Cristiano Ronaldo',
    category: 'viral',
    aspectRatio: '9:16',
    url: 'https://res.cloudinary.com/xkhxv70d/video/upload/v1792349998/ronaldo.mp4.mp4',
    thumbnail: 'https://pbs.twimg.com/amplify_video_thumb/2110048781962014720/img/YAx5JYlT_NkMQeVX.jpg',
    tweetUrl: 'https://x.com/DSatoo_777/status/2110049217683317022',
    duration: '00:58',
    year: '2026',
    tag: 'Viral Pacing & Emotion',
    tools: ['Premiere Pro', 'Subtitles Sync', 'Sound FX'],
    description: 'High-emotion viral moment cut with dramatic musical pacing, kinetic subtitle animations, and tight reaction cuts.',
  },
];
