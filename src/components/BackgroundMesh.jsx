import React from "react";

/**
 * BackgroundMesh Component
 * Renders floating ambient radial glow blobs for depth and rich aesthetics.
 */
export default function BackgroundMesh({ isDarkMode }) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Top Left Indigo Glow */}
      <div 
        className={`absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[120px] transition-opacity duration-700 animate-float ${
          isDarkMode ? "bg-indigo-600/20" : "bg-indigo-400/25"
        }`} 
      />

      {/* Top Right Violet/Purple Glow */}
      <div 
        className={`absolute -top-20 -right-20 w-[28rem] h-[28rem] rounded-full blur-[130px] transition-opacity duration-700 animate-float-reverse ${
          isDarkMode ? "bg-purple-600/18" : "bg-purple-300/30"
        }`} 
      />

      {/* Center Ambient Accent Glow */}
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full blur-[140px] transition-opacity duration-700 animate-pulse-glow ${
          isDarkMode ? "bg-blue-600/10" : "bg-indigo-200/20"
        }`} 
      />

      {/* Bottom Right Emerald Glow */}
      <div 
        className={`absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-[120px] transition-opacity duration-700 animate-float ${
          isDarkMode ? "bg-emerald-600/15" : "bg-teal-300/25"
        }`} 
      />
    </div>
  );
}
