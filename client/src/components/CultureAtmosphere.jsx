import React from 'react';
import { motion } from 'framer-motion';

export function CultureAtmosphere({ theme, active }) {
  if (!active || !theme) return null;

  // Render authentic cultural corner/border ornaments based on the theme name
  const renderOrnament = (themeName) => {
    const nameLower = themeName?.toLowerCase() || '';

    if (nameLower.includes('majesty') || nameLower.includes('oasis') || nameLower.includes('bosphorus')) {
      // Islamic / Mughal / Turkish Archway Framing
      return (
        <svg className="absolute top-0 left-0 w-full h-24 opacity-[0.06] text-white" viewBox="0 0 100 20" preserveAspectRatio="none">
          <path d="M 0 0 L 0 12 C 15 12 25 10 35 15 C 43 19 47 20 50 20 C 53 20 57 19 65 15 C 75 10 85 12 100 12 L 100 0 Z" fill="currentColor" />
          <path d="M 0 0 L 0 9 C 15 9 25 7 35 12 C 43 16 47 17 50 17 C 53 17 57 16 65 12 C 75 7 85 9 100 9 L 100 0 Z" fill="none" stroke="currentColor" strokeWidth="0.4" />
        </svg>
      );
    }

    if (nameLower.includes('sakura')) {
      // Japanese cherry blossom branch hanging from the top right
      return (
        <svg className="absolute top-0 right-0 w-48 h-48 opacity-[0.14] text-pink-300 pointer-events-none" viewBox="0 0 100 100">
          <path d="M 100,0 C 85,10 75,8 60,18 C 50,25 42,20 30,28" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <path d="M 75,10 C 65,5 60,3 55,1" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <path d="M 52,22 C 45,26 40,28 35,32" fill="none" stroke="currentColor" strokeWidth="0.8" />
          
          {/* Detailed Sakura Blossoms */}
          <circle cx="30" cy="28" r="3.5" fill="currentColor" />
          <circle cx="60" cy="18" r="3.5" fill="currentColor" />
          <circle cx="75" cy="10" r="3" fill="currentColor" />
          <circle cx="48" cy="22" r="2.5" fill="currentColor" />
          <circle cx="90" cy="4" r="4.5" fill="currentColor" />
        </svg>
      );
    }

    if (nameLower.includes('imperial') || nameLower.includes('dynasty')) {
      // Traditional Chinese clouds in corners
      return (
        <>
          <svg className="absolute top-4 left-4 w-20 h-20 opacity-[0.08] text-red-400" viewBox="0 0 64 64">
            <path d="M 10,40 C 10,30 22,28 26,34 C 30,22 48,22 48,34 C 48,42 42,46 36,41 C 30,48 18,48 10,40 Z M 20,40 C 24,40 28,38 28,34 C 28,30 20,30 20,34" fill="none" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          <svg className="absolute top-4 right-4 w-20 h-20 opacity-[0.08] text-red-400" viewBox="0 0 64 64" transform="scale(-1, 1)">
            <path d="M 10,40 C 10,30 22,28 26,34 C 30,22 48,22 48,34 C 48,42 42,46 36,41 C 30,48 18,48 10,40 Z M 20,40 C 24,40 28,38 28,34 C 28,30 20,30 20,34" fill="none" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </>
      );
    }

    if (nameLower.includes('aegean') || nameLower.includes('azure') || nameLower.includes('colosseum') || nameLower.includes('tuscan')) {
      // Greek/Roman Meander Key border at the top
      return (
        <div className="absolute top-0 inset-x-0 h-3 opacity-[0.07] bg-repeat-x text-white pointer-events-none" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='12' viewBox='0 0 24 12'%3E%3Cpath d='M0,2 h20 v8 h-16 v-6 h12 v4 h-8 v-2 h4' fill='none' stroke='white' stroke-width='1.5'/%3E%3C/svg%3E")`,
               backgroundSize: '24px 12px'
             }} 
        />
      );
    }

    if (nameLower.includes('lisbon') || nameLower.includes('oceanic')) {
      // Portuguese Azulejos side borders
      const tileSvg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Crect width='16' height='16' fill='none' stroke='white' stroke-width='0.5'/%3E%3Cpath d='M0,0 L16,16 M16,0 L0,16 M8,0 L8,16 M0,8 L16,8' stroke='white' stroke-width='0.25'/%3E%3Ccircle cx='8' cy='8' r='3' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E";
      return (
        <>
          <div className="absolute top-0 bottom-0 left-0 w-4 opacity-[0.06] bg-repeat-y pointer-events-none"
               style={{
                 backgroundImage: `url("${tileSvg}")`,
                 backgroundSize: '16px 16px'
               }}
          />
          <div className="absolute top-0 bottom-0 right-0 w-4 opacity-[0.06] bg-repeat-y pointer-events-none"
               style={{
                 backgroundImage: `url("${tileSvg}")`,
                 backgroundSize: '16px 16px'
               }}
          />
        </>
      );
    }

    // Default: Tudor Rose/English minimal corner decorations
    return (
      <svg className="absolute top-4 right-4 w-12 h-12 opacity-[0.04] text-white" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M 12 2 C 10 7 14 7 12 2 Z M 12 22 C 10 17 14 17 12 22 Z M 2 12 C 7 10 7 14 2 12 Z M 22 12 C 17 10 17 14 22 12 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
      </svg>
    );
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* 
        LAYER 1: CINEMATIC MESH GRADIENT 
        This creates a deep, organic 'Aurora' effect that matches the cultural palette
      */}
      <div className="absolute inset-0 opacity-80 mix-blend-screen">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 transition-colors duration-1000"
          style={{ 
            background: `
              radial-gradient(circle at 20% 30%, ${theme.accentColor}aa 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, ${theme.accentColor}88 0%, transparent 40%),
              radial-gradient(circle at 40% 70%, ${theme.accentColor}66 0%, transparent 60%),
              radial-gradient(circle at 70% 80%, ${theme.accentColor}99 0%, transparent 50%)
            `,
            filter: 'blur(100px) saturate(1.8)',
          }}
        />
      </div>



      {/* 
        LAYER 2: ORGANIC NOISE & GRAIN 
        Removes the 'digital' look and adds premium texture
      */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" 
           style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }} />

      {/* 
        LAYER 3: VIGNETTE & DEPTH FOG 
        Directs focus to the chat content
      */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(2,6,23,0.6)_100%)]" />
      
      {/* Cinematic Color Wash */}
      <div 
        className="absolute inset-0 mix-blend-color opacity-20 pointer-events-none"
        style={{ backgroundColor: theme.accentColor }}
      />

      {/* LAYER 4: Authentic Cultural Corner/Border Ornaments */}
      {renderOrnament(theme.name)}
    </div>
  );
}
