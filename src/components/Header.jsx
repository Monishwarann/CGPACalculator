import React from "react";
import { GraduationCap, ShieldCheck, Moon, Sun, Download, Trash2, Settings, Smartphone } from "lucide-react";

export default function Header({ isDarkMode, setIsDarkMode, onResetData, onOpenAdmin, deferredInstallPrompt, onInstallApp }) {
  return (
    <header className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-200 ${
      isDarkMode 
        ? "bg-[#060912]/80 border-slate-800 text-slate-100" 
        : "bg-white/80 border-slate-200 text-slate-800"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Title */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/25">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-lg font-bold tracking-tight bg-gradient-to-r from-indigo-400 via-violet-300 to-purple-400 bg-clip-text text-transparent">
                MSEC & AU GPA Calculator
              </h1>
              <span className="hidden sm:inline-block px-2 py-0.5 text-xs font-semibold rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                R2024 • R2023 • R2025
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              Automatic Credits • Automatic Grade Points • Autonomous & AU
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Privacy Badge */}
          <div className="hidden lg:flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>100% Local & Private</span>
          </div>

          {/* PWA Install Button (If available) */}
          {deferredInstallPrompt && (
            <button
              onClick={onInstallApp}
              className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md hover:from-indigo-500 hover:to-violet-500 transition"
              title="Install Web App for Offline Use"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Install App</span>
            </button>
          )}

          {/* Admin Curriculum Panel Button */}
          <button
            onClick={onOpenAdmin}
            className={`p-2 rounded-lg text-xs font-medium transition ${
              isDarkMode 
                ? "bg-slate-800 hover:bg-slate-700 text-slate-300" 
                : "bg-slate-100 hover:bg-slate-200 text-slate-700"
            }`}
            title="Curriculum Dataset Manager & Admin Utility"
          >
            <Settings className="w-4 h-4" />
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-lg text-xs font-medium transition ${
              isDarkMode 
                ? "bg-slate-800 hover:bg-slate-700 text-amber-400" 
                : "bg-slate-100 hover:bg-slate-200 text-slate-700"
            }`}
            title="Toggle Dark / Light Mode"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Reset All Data Button */}
          <button
            onClick={onResetData}
            className="p-2 rounded-lg text-xs font-medium text-rose-400 bg-rose-500/10 hover:bg-rose-500/20 transition"
            title="Reset All Local Input & History"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
