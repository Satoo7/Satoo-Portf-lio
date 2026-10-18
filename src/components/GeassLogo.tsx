import React from 'react';

interface GeassLogoProps {
  className?: string;
  size?: number;
  glow?: boolean;
}

/**
 * The iconic Code Geass insignia (Lelouch's Geass eye/winged crest).
 * Accurately vectorized with the characteristic swept wings, inner feather arcs,
 * and central diamond core.
 */
export const GeassLogo: React.FC<GeassLogoProps> = ({
  className = '',
  size = 28,
  glow = true,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      {glow && (
        <div
          className="absolute inset-0 rounded-full blur-md opacity-70 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: 'radial-gradient(circle, rgba(187,167,245,0.7) 0%, rgba(117,70,200,0.4) 60%, transparent 90%)',
          }}
        />
      )}

      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 drop-shadow-[0_0_8px_rgba(117,70,200,0.8)]"
      >
        <defs>
          <linearGradient id="geassInsigniaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F2EFF8" />
            <stop offset="40%" stopColor="#BBA7F5" />
            <stop offset="100%" stopColor="#7546C8" />
          </linearGradient>
          <filter id="geassInnerGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 
          Official Code Geass Sigil Path 
          Sweeping avian wings arching outwards from bottom apex,
          inner feather recurve, and top crest points.
        */}
        <path
          d="M 50 90
             C 47 78, 32 64, 18 52
             C 8 43, 6 28, 12 18
             C 14 14, 19 16, 22 21
             C 27 30, 33 42, 42 48
             C 45 50, 48 47, 47 42
             C 46 32, 41 20, 37 13
             C 41 11, 46 13, 49 20
             C 50 24, 50 32, 50 37
             C 50 32, 50 24, 51 20
             C 54 13, 59 11, 63 13
             C 59 20, 54 32, 53 42
             C 52 47, 55 50, 58 48
             C 67 42, 73 30, 78 21
             C 81 16, 86 14, 88 18
             C 94 28, 92 43, 82 52
             C 68 64, 53 78, 50 90 Z"
          fill="url(#geassInsigniaGrad)"
          stroke="#F2EFF8"
          strokeWidth="0.8"
          strokeLinejoin="round"
        />

        {/* Inner secondary wing cutouts for depth */}
        <path
          d="M 50 80
             C 44 68, 34 57, 24 47
             C 21 44, 24 40, 28 43
             C 36 49, 44 56, 48 60
             Z"
          fill="rgba(9, 8, 16, 0.75)"
          stroke="url(#geassInsigniaGrad)"
          strokeWidth="0.5"
        />

        <path
          d="M 50 80
             C 56 68, 66 57, 76 47
             C 79 44, 76 40, 72 43
             C 64 49, 56 56, 52 60
             Z"
          fill="rgba(9, 8, 16, 0.75)"
          stroke="url(#geassInsigniaGrad)"
          strokeWidth="0.5"
        />

        {/* Central Eye Diamond Core */}
        <polygon
          points="50,46 55.5,55 50,65 44.5,55"
          fill="#F2EFF8"
          stroke="#7546C8"
          strokeWidth="0.75"
        />

        {/* Center Vertical Ray */}
        <line
          x1="50"
          y1="34"
          x2="50"
          y2="76"
          stroke="#BBA7F5"
          strokeWidth="0.8"
          strokeDasharray="2 2"
          opacity="0.8"
        />

        {/* Glowing Central Pupil Node */}
        <circle
          cx="50"
          cy="55"
          r="1.6"
          fill="#FFFFFF"
          className="animate-pulse"
        />
      </svg>
    </div>
  );
};
