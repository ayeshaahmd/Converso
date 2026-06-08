import React, { useEffect, useState } from 'react';

export function LivingBackground({ culturalTheme = 'english', chatMode = 'classic' }) {
  const [particlePositions, setParticlePositions] = useState([]);

  useEffect(() => {
    // Generate organic ambient particles
    const particles = Array.from({ length: 20 }).map(() => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1.5 + Math.random() * 2,
      duration: 5 + Math.random() * 7,
      delay: Math.random() * -5,
    }));
    setParticlePositions(particles);
  }, []);

  const renderPattern = () => {
    const strokeColor = "var(--primary)";
    const accentStroke = "var(--accent)";

    if (chatMode !== 'culture') {
      return (
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      );
    }

    switch (culturalTheme) {
      case 'japanese':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="seigaiha-pattern" x="0" y="0" width="60" height="30" patternUnits="userSpaceOnUse">
                <path d="M 0 30 A 30 30 0 0 1 60 30 Z M -30 15 A 30 30 0 0 1 30 15 Z M 30 15 A 30 30 0 0 1 90 15 Z M 0 0 A 30 30 0 0 1 60 0 Z" fill="none" stroke={strokeColor} strokeWidth="0.75" />
                <path d="M 0 30 A 20 20 0 0 1 60 30 Z M -30 15 A 20 20 0 0 1 30 15 Z M 30 15 A 20 20 0 0 1 90 15 Z" fill="none" stroke={accentStroke} strokeWidth="0.5" />
                <circle cx="30" cy="25" r="1.5" fill={accentStroke} />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#seigaiha-pattern)" />
          </svg>
        );

      case 'arabic':
      case 'urdu':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="girih-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 40,0 L 52,28 L 80,40 L 52,52 L 40,80 L 28,52 L 0,40 L 28,28 Z" fill="none" stroke={strokeColor} strokeWidth="0.8" />
                <circle cx="40" cy="40" r="15" fill="none" stroke={accentStroke} strokeWidth="0.5" />
                <path d="M 0,0 L 15,15 M 80,0 L 65,15 M 0,80 L 15,65 M 80,80 L 65,65" stroke={strokeColor} strokeWidth="0.5" />
                <polygon points="40,28 44,36 52,40 44,44 40,52 36,44 28,40 36,36" fill="none" stroke={accentStroke} strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#girih-pattern)" />
          </svg>
        );

      case 'spanish':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="talavera-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 50,0 C 50,25 25,50 0,50 C 25,50 50,75 50,100 C 50,75 75,50 100,50 C 75,50 50,25 50,0 Z" fill="none" stroke={strokeColor} strokeWidth="0.8" />
                <circle cx="50" cy="50" r="12" fill="none" stroke={accentStroke} strokeWidth="0.75" />
                <path d="M 0,0 C 25,25 25,35 0,50 M 100,0 C 75,25 75,35 100,50 M 0,100 C 25,75 25,65 0,50 M 100,100 C 75,75 75,65 100,50" fill="none" stroke={strokeColor} strokeWidth="0.5" />
                <circle cx="50" cy="18" r="2" fill={accentStroke} />
                <circle cx="50" cy="82" r="2" fill={accentStroke} />
                <circle cx="18" cy="50" r="2" fill={accentStroke} />
                <circle cx="82" cy="50" r="2" fill={accentStroke} />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#talavera-pattern)" />
          </svg>
        );

      case 'chinese':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="xiangyun-pattern" x="0" y="0" width="120" height="60" patternUnits="userSpaceOnUse">
                <path d="M 20,30 C 20,15 35,15 45,25 C 55,15 70,15 70,30 C 70,45 55,45 45,35 C 35,45 20,45 20,30 Z" fill="none" stroke={strokeColor} strokeWidth="0.8" />
                <path d="M 45,25 C 45,30 40,35 35,30" fill="none" stroke={accentStroke} strokeWidth="0.6" />
                <path d="M 80,15 C 80,5 90,5 95,12 C 100,5 110,5 110,15 C 110,25 100,25 95,18 C 90,25 80,25 80,15 Z" fill="none" stroke={strokeColor} strokeWidth="0.6" />
                <path d="M 95,12 C 95,15 92,18 89,16" fill="none" stroke={accentStroke} strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#xiangyun-pattern)" />
          </svg>
        );

      case 'indian':
      case 'bengali':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="mandala-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                <circle cx="60" cy="60" r="52" fill="none" stroke={strokeColor} strokeWidth="0.75" />
                <circle cx="60" cy="60" r="32" fill="none" stroke={accentStroke} strokeWidth="0.5" />
                <circle cx="60" cy="60" r="12" fill="none" stroke={strokeColor} strokeWidth="0.5" />
                <path d="M 60,8 L 60,112 M 8,60 L 112,60 M 23,23 L 97,97 M 23,97 L 97,23" stroke={strokeColor} strokeWidth="0.5" opacity="0.7" />
                <path d="M 60,44 C 55,30 65,30 60,44 M 60,76 C 55,90 65,90 60,76 M 44,60 C 30,55 30,65 44,60 M 76,60 C 90,55 90,65 76,60" fill="none" stroke={accentStroke} strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mandala-pattern)" />
          </svg>
        );

      case 'french':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="fleur-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 40,15 C 40,30 48,35 48,40 C 48,45 45,47 40,47 C 35,47 32,45 32,40 C 32,30 40,30 40,15 Z" fill="none" stroke={strokeColor} strokeWidth="0.8" />
                <path d="M 40,32 C 30,32 24,25 24,40 C 24,50 34,45 40,47 C 46,45 56,50 56,40 C 56,25 50,32 40,32 Z" fill="none" stroke={strokeColor} strokeWidth="0.6" />
                <path d="M 22,43 C 30,45 50,45 58,43" fill="none" stroke={accentStroke} strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#fleur-pattern)" />
          </svg>
        );

      case 'portuguese':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="azulejos-pattern" x="0" y="0" width="90" height="90" patternUnits="userSpaceOnUse">
                <rect x="2" y="2" width="86" height="86" fill="none" stroke={strokeColor} strokeWidth="0.6" />
                <circle cx="45" cy="45" r="30" fill="none" stroke={strokeColor} strokeWidth="0.5" />
                <path d="M 45,2 L 45,88 M 2,45 L 88,45" stroke={strokeColor} strokeWidth="0.5" opacity="0.6" />
                <polygon points="45,15 75,45 45,75 15,45" fill="none" stroke={accentStroke} strokeWidth="0.6" />
                <rect x="35" y="35" width="20" height="20" transform="rotate(45 45 45)" fill="none" stroke={accentStroke} strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#azulejos-pattern)" />
          </svg>
        );

      case 'italian':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="mosaic-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="80" height="80" fill="none" stroke={strokeColor} strokeWidth="0.25" opacity="0.3" />
                <path d="M 40,0 A 40,40 0 0,0 80,40 A 40,40 0 0,0 40,80 A 40,40 0 0,0 0,40 A 40,40 0 0,0 40,0 Z" fill="none" stroke={strokeColor} strokeWidth="0.75" />
                <circle cx="40" cy="40" r="26" fill="none" stroke={accentStroke} strokeWidth="0.5" />
                <path d="M 0,0 L 80,80 M 80,0 L 0,80" stroke={strokeColor} strokeWidth="0.25" opacity="0.4" />
                <circle cx="40" cy="40" r="10" fill="none" stroke={accentStroke} strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mosaic-pattern)" />
          </svg>
        );

      case 'greek':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="meander-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 0,10 H 50 V 50 H 20 V 30 H 40 V 40 H 30" fill="none" stroke={strokeColor} strokeWidth="1" />
                <path d="M 60,10 H 50" stroke={strokeColor} strokeWidth="1" />
                <path d="M 0,50 H 20" stroke={strokeColor} strokeWidth="1" />
                <circle cx="30" cy="30" r="1.5" fill={accentStroke} />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#meander-pattern)" />
          </svg>
        );

      case 'turkish':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="iznik-pattern" x="0" y="0" width="80" height="100" patternUnits="userSpaceOnUse">
                <path d="M 40,90 C 35,60 20,40 40,10 C 60,40 45,60 40,90 Z" fill="none" stroke={strokeColor} strokeWidth="0.8" />
                <path d="M 40,90 C 30,70 10,60 25,45 C 30,55 38,70 40,90 Z" fill="none" stroke={accentStroke} strokeWidth="0.5" />
                <path d="M 40,90 C 50,70 70,60 55,45 C 50,55 42,70 40,90 Z" fill="none" stroke={accentStroke} strokeWidth="0.5" />
                <circle cx="40" cy="10" r="2" fill={accentStroke} />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#iznik-pattern)" />
          </svg>
        );

      case 'german':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="bauhaus-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <rect x="10" y="10" width="30" height="30" fill="none" stroke={strokeColor} strokeWidth="0.8" />
                <circle cx="55" cy="25" r="15" fill="none" stroke={strokeColor} strokeWidth="0.8" />
                <polygon points="10,70 40,70 25,40" fill="none" stroke={accentStroke} strokeWidth="0.8" />
                <line x1="50" y1="50" x2="70" y2="70" stroke={strokeColor} strokeWidth="1" />
                <line x1="70" y1="50" x2="50" y2="70" stroke={accentStroke} strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#bauhaus-pattern)" />
          </svg>
        );

      case 'korean':
        return (
          <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dancheong-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="40" fill="none" stroke={strokeColor} strokeWidth="0.5" />
                <path d="M 50,10 C 30,10 30,30 50,30 C 70,30 70,10 50,10" fill="none" stroke={strokeColor} strokeWidth="0.6" />
                <path d="M 50,90 C 30,90 30,70 50,70 C 70,70 70,90 50,90" fill="none" stroke={strokeColor} strokeWidth="0.6" />
                <path d="M 10,50 C 10,30 30,30 30,50 C 30,70 10,70 10,50" fill="none" stroke={accentStroke} strokeWidth="0.6" />
                <path d="M 90,50 C 90,30 70,30 70,50 C 70,70 90,70 90,50" fill="none" stroke={accentStroke} strokeWidth="0.6" />
                <circle cx="50" cy="50" r="8" fill="none" stroke={accentStroke} strokeWidth="0.75" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dancheong-pattern)" />
          </svg>
        );

      default: // English Grid
        return (
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke={strokeColor} strokeWidth="0.5" />
                <circle cx="25" cy="25" r="1" fill={accentStroke} opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        );
    }
  };

  const isCulture = chatMode === 'culture';

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden transition-colors duration-1000"
      style={{ 
        zIndex: 'var(--z-atmosphere)',
        backgroundColor: 'transparent'
      }}
    >
      {/* Base gradient (Classic vs Culture) */}
      <div 
        className="absolute inset-0 transition-all duration-1000"
        style={{
          background: 'transparent',
          opacity: isCulture ? 0.4 : 1.0
        }}
      />

      {/* Pattern overlay */}
      <div className="absolute inset-0 text-white transition-opacity duration-1000">
        {renderPattern()}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {particlePositions.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full transition-all duration-1000"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: isCulture
                ? (particle.id > 0.5 ? 'var(--primary)' : 'var(--accent)')
                : (particle.id > 0.5 ? '#7c3aed' : '#06b6d4'),
              animation: `float-particle ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
              opacity: particle.id > 0.7 ? 0.35 : 0.18,
            }}
          />
        ))}
      </div>

      {/* Glow orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[36rem] h-[36rem] rounded-full blur-[120px] opacity-[0.18] transition-all duration-1000"
          style={{
            backgroundColor: isCulture ? 'var(--primary)' : '#7c3aed',
            top: '-25%',
            right: '-15%',
            animation: 'glow-pulse-ambient 12s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-[28rem] h-[28rem] rounded-full blur-[100px] opacity-[0.12] transition-all duration-1000"
          style={{
            backgroundColor: isCulture ? 'var(--accent)' : '#06b6d4',
            bottom: '-15%',
            left: '-10%',
            animation: 'glow-pulse-ambient 10s ease-in-out infinite 3s',
          }}
        />
      </div>

      <style>{`
        @keyframes float-particle {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-40px) translateX(15px); }
        }
        @keyframes glow-pulse-ambient {
          0%, 100% { transform: scale(1) translate(0px, 0px); opacity: 0.15; }
          50% { transform: scale(1.15) translate(20px, -20px); opacity: 0.22; }
        }
      `}</style>
    </div>
  );
}
