import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../state/ThemeContext.jsx";
import { culturalThemes } from "../data/themes.js";
import { getTheme } from "../themes/conversoThemes.js";

export function CulturalThemeSelector({ direction = "down" }) {
  const { culturalTheme, setCulturalTheme, availableThemes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeThemeMetadata = getTheme(culturalTheme);

  const dropdownPositionClass = direction === "up" ? "bottom-full mb-3" : "top-full mt-3";
  const animationVariants = {
    initial: { opacity: 0, y: direction === "up" ? -15 : 15, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: direction === "up" ? -10 : 10, scale: 0.95 }
  };

  return (
    <div className="relative" ref={containerRef}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-md transition hover:border-converso-gold hover:text-white"
        title="Choose Conversation Cultural Theme"
      >
        <span className="text-base select-none">
          {activeThemeMetadata?.elements?.[0] || "📚"}
        </span>
        <span className="font-semibold text-xs tracking-wider uppercase font-display">
          {activeThemeMetadata?.name || "London Fog"}
        </span>
        <span className="text-[10px] text-white/30">▼</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animationVariants}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`absolute right-0 ${dropdownPositionClass} w-80 max-h-[420px] rounded-2xl border border-white/10 bg-[#09090B]/85 backdrop-blur-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 overflow-y-auto custom-scrollbar`}
          >
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
              <h3 className="text-xs font-black uppercase tracking-[0.15em] text-white/50 font-display">
                Cultural Atmosphere
              </h3>
              <span className="text-[10px] text-converso-gold/80 font-mono">
                {availableThemes.length} Atmosphere Pairs
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {availableThemes.map((themeKey) => {
                const themeData = culturalThemes[themeKey];
                const themeMeta = getTheme(themeKey);
                const isSelected = culturalTheme === themeKey;

                return (
                  <motion.button
                    key={themeKey}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      setCulturalTheme(themeKey);
                      setIsOpen(false);
                    }}
                    className={`group relative rounded-xl border p-3 text-left transition-all duration-300 ${
                      isSelected
                        ? "border-converso-gold bg-converso-gold/10 shadow-[0_0_15px_rgba(245,200,108,0.15)]"
                        : "border-white/8 bg-white/4 hover:border-white/20 hover:bg-white/8"
                    }`}
                  >
                    {/* Background Subtle Color Wash */}
                    <div 
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300"
                      style={{ backgroundColor: themeMeta?.accentColor }}
                    />

                    <div className="flex flex-col gap-1.5 relative z-10">
                      {/* Flag and Accent Orb */}
                      <div className="flex items-center justify-between">
                        <span className="text-base filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                          {themeMeta?.elements?.[0] || "🗺️"}
                        </span>
                        <div
                          className="h-2 w-2 rounded-full opacity-60 transition-transform duration-300 group-hover:scale-125"
                          style={{ backgroundColor: themeMeta?.accentColor || themeData.colors.primary }}
                        />
                      </div>

                      {/* Theme Name in Cultural Font */}
                      <div className="min-w-0">
                        <span 
                          className={`block truncate text-xs font-bold transition-colors ${
                            isSelected ? "text-converso-gold" : "text-white group-hover:text-white"
                          }`}
                          style={{ fontFamily: themeData?.font?.heading || 'inherit' }}
                        >
                          {themeMeta?.name || themeData.name}
                        </span>
                        
                        {/* Landmark / Subtext */}
                        <span className="block truncate text-[9px] text-white/40 group-hover:text-white/60">
                          {themeMeta?.landmark || "Landmark"}
                        </span>
                      </div>

                      {/* Emojis floating preview on hover */}
                      <div className="flex gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        {themeMeta?.elements?.slice(1, 4).map((el, i) => (
                          <span key={i} className="text-[10px]">{el}</span>
                        ))}
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
