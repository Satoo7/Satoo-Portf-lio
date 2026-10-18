import React from 'react';

interface GeassEmblemProps {
  className?: string;
  size?: number;
  interactive?: boolean;
}

/**
 * Minimalist geometric emblem inspired by the iconic Geass sigil silhouette.
 * Designed with elegant hairline strokes, mysterious symmetry, and slow ambient breathing.
 */
export const GeassEmblem: React.FC<GeassEmblemProps> = ({
  className = '',
  size = 320,
}) => {
  return (
    <div
      className={`relative select-none pointer-events-none flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* Ambient violet radial aura */}
      <div
        className="absolute inset-0 rounded-full blur-3xl opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(117,70,200,0.4) 0%, rgba(36,21,54,0.15) 50%, transparent 70%)',
        }}
      />

      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-[#BBA7F5] transition-all duration-1000 animate-[pulse_8s_cubic-bezier(0.4,0,0.6,1)_infinite] motion-reduce:animate-none"
      >
        <defs>
          <linearGradient id="geassGradient" x1="100" y1="20" x2="100" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#BBA7F5" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#7546C8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#241536" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="innerCoreGradient" x1="100" y1="75" x2="100" y2="135" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F2EFF8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#7546C8" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Outer subtle orbital geometric ring */}
        <circle
          cx="100"
          cy="100"
          r="92"
          stroke="url(#geassGradient)"
          strokeWidth="0.75"
          strokeDasharray="2 6"
          opacity="0.3"
        />

        {/* Outer Crest Wings - Left Wing */}
        <path
          d="M 100 170 
             C 96 150, 72 125, 45 105
             C 25 90, 16 68, 28 42
             C 32 34, 42 36, 48 46
             C 56 60, 68 82, 86 94
             C 93 98, 97 90, 97 80
             C 97 60, 88 40, 78 28
             C 85 24, 94 28, 98 42
             C 100 50, 100 65, 100 75"
          stroke="url(#geassGradient)"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.7"
        />

        {/* Outer Crest Wings - Right Wing */}
        <path
          d="M 100 170 
             C 104 150, 128 125, 155 105
             C 175 90, 184 68, 172 42
             C 168 34, 158 36, 152 46
             C 144 60, 132 82, 114 94
             C 107 98, 103 90, 103 80
             C 103 60, 112 40, 122 28
             C 115 24, 106 28, 102 42
             C 100 50, 100 65, 100 75"
          stroke="url(#geassGradient)"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.7"
        />

        {/* Secondary Inner Geometric Wings - Left */}
        <path
          d="M 100 152 
             C 88 132, 68 112, 52 92
             C 45 83, 50 78, 58 84
             C 72 96, 85 106, 95 110"
          stroke="url(#geassGradient)"
          strokeWidth="0.9"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Secondary Inner Geometric Wings - Right */}
        <path
          d="M 100 152 
             C 112 132, 132 112, 148 92
             C 155 83, 150 78, 142 84
             C 128 96, 115 106, 105 110"
          stroke="url(#geassGradient)"
          strokeWidth="0.9"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Central Eye / Diamond Core */}
        <path
          d="M 100 85 L 109 104 L 100 126 L 91 104 Z"
          stroke="url(#innerCoreGradient)"
          strokeWidth="1"
          fill="rgba(117, 70, 200, 0.12)"
        />

        {/* Central Vertical Piercing Line */}
        <line
          x1="100"
          y1="55"
          x2="100"
          y2="158"
          stroke="url(#geassGradient)"
          strokeWidth="0.8"
          strokeDasharray="4 4"
          opacity="0.4"
        />

        {/* Focal Point Light Dot */}
        <circle
          cx="100"
          cy="104"
          r="2.2"
          fill="#F2EFF8"
          opacity="0.9"
        />
      </svg>
    </div>
  );
};
