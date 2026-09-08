import React from "react";
import { CheckCircle, Zap, Shield, Sparkles, Award } from "lucide-react";

export default function HeroSection({ isDarkMode, activeRegulation }) {
  return (
    <div className={`relative overflow-hidden py-10 px-4 sm:px-6 lg:px-8 border-b ${
      isDarkMode ? "border-slate-800/80 bg-gradient-to-b from-[#0c1322] to-[#060912]" : "bg-gradient-to-b from-slate-50 to-indigo-50/30 border-slate-200"
    }`}>
      {/* Background Decorative Glow */}
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-24 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        
        {/* Regulation Tag */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Meenakshi Sundararajan Engineering College • Autonomous & Anna University</span>
        </div>

        {/* Main Title */}
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${
          isDarkMode ? "text-white" : "text-slate-900"
        }`}>
          Automatic <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">GPA & CGPA Calculator</span>
        </h2>

        {/* Subtitle */}
        <p className={`max-w-3xl mx-auto text-sm sm:text-base mb-8 ${
          isDarkMode ? "text-slate-300" : "text-slate-600"
        }`}>
          Select your college, regulation, programme, and semester — subjects, codes, and official credits populate automatically. <strong className="text-indigo-400">Zero manual credit entry required.</strong>
        </p>

        {/* Feature Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto text-xs sm:text-sm font-medium">
          <div className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl border ${
            isDarkMode ? "bg-slate-900/60 border-slate-800 text-slate-300" : "bg-white border-slate-200 text-slate-700 shadow-sm"
          }`}>
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Automatic Credits Loading</span>
          </div>

          <div className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl border ${
            isDarkMode ? "bg-slate-900/60 border-slate-800 text-slate-300" : "bg-white border-slate-200 text-slate-700 shadow-sm"
          }`}>
            <Zap className="w-4 h-4 text-amber-400" />
            <span>MSEC R2024 & AU R2023 Rules</span>
          </div>

          <div className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl border ${
            isDarkMode ? "bg-slate-900/60 border-slate-800 text-slate-300" : "bg-white border-slate-200 text-slate-700 shadow-sm"
          }`}>
            <Award className="w-4 h-4 text-violet-400" />
            <span>Credit-Weighted CGPA</span>
          </div>

          <div className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl border ${
            isDarkMode ? "bg-slate-900/60 border-slate-800 text-slate-300" : "bg-white border-slate-200 text-slate-700 shadow-sm"
          }`}>
            <Shield className="w-4 h-4 text-indigo-400" />
            <span>100% Client-Side Privacy</span>
          </div>
        </div>

      </div>
    </div>
  );
}
