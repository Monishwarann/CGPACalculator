import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Zap, Shield, Sparkles, Award } from "lucide-react";

export default function HeroSection({ isDarkMode }) {
  return (
    <div className={`relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 border-b transition-colors duration-300 ${
      isDarkMode 
        ? "border-slate-800/80 bg-gradient-to-b from-[#0a0f1d] via-[#060912] to-[#060912]" 
        : "bg-gradient-to-b from-indigo-50/60 via-purple-50/30 to-slate-50 border-slate-200"
    }`}>
      {/* Dynamic Background Glowing Spheres */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-purple-500/15 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-pink-500/10 rounded-full blur-[90px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Regulation Badge Pill */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 text-indigo-300 border border-indigo-500/25 mb-6 shadow-lg shadow-indigo-500/5 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-spin-slow" />
          <span>Meenakshi Sundararajan Engineering College • Autonomous & Anna University</span>
        </motion.div>

        {/* Main Hero Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-5 leading-none ${
            isDarkMode ? "text-white" : "text-slate-900"
          }`}
        >
          Automated <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">GPA & CGPA Engine</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`max-w-2xl mx-auto text-sm sm:text-base font-medium mb-9 leading-relaxed ${
            isDarkMode ? "text-slate-300" : "text-slate-600"
          }`}
        >
          Official curriculum specs with automatic subject codes, course names, and locked credit weightages. <strong className="text-indigo-400 font-semibold">Zero manual credit entry required.</strong>
        </motion.p>

        {/* Feature Highlights Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3.5 max-w-4xl mx-auto text-xs sm:text-sm font-bold"
        >
          <div className={`flex items-center space-x-2 px-4 py-2.5 rounded-2xl border transition-all duration-300 hover:scale-105 ${
            isDarkMode ? "bg-slate-900/60 border-slate-800 text-slate-200 shadow-md backdrop-blur-md" : "bg-white/80 border-slate-200 text-slate-800 shadow-sm"
          }`}>
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Auto Credits Lock</span>
          </div>

          <div className={`flex items-center space-x-2 px-4 py-2.5 rounded-2xl border transition-all duration-300 hover:scale-105 ${
            isDarkMode ? "bg-slate-900/60 border-slate-800 text-slate-200 shadow-md backdrop-blur-md" : "bg-white/80 border-slate-200 text-slate-800 shadow-sm"
          }`}>
            <Zap className="w-4 h-4 text-amber-400" />
            <span>MSEC R2024 & AU R2023 Rules</span>
          </div>

          <div className={`flex items-center space-x-2 px-4 py-2.5 rounded-2xl border transition-all duration-300 hover:scale-105 ${
            isDarkMode ? "bg-slate-900/60 border-slate-800 text-slate-200 shadow-md backdrop-blur-md" : "bg-white/80 border-slate-200 text-slate-800 shadow-sm"
          }`}>
            <Award className="w-4 h-4 text-purple-400" />
            <span>Credit-Weighted CGPA</span>
          </div>

          <div className={`flex items-center space-x-2 px-4 py-2.5 rounded-2xl border transition-all duration-300 hover:scale-105 ${
            isDarkMode ? "bg-slate-900/60 border-slate-800 text-slate-200 shadow-md backdrop-blur-md" : "bg-white/80 border-slate-200 text-slate-800 shadow-sm"
          }`}>
            <Shield className="w-4 h-4 text-indigo-400" />
            <span>100% Client-Side Privacy</span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

