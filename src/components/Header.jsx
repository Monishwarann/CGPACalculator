import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck, Moon, Sun, Trash2, Settings, Smartphone, Sparkles } from "lucide-react";

export default function Header({ isDarkMode, setIsDarkMode, onResetData, onOpenAdmin, deferredInstallPrompt, onInstallApp }) {
  return (
    <header className={`sticky top-0 z-40 backdrop-blur-xl border-b transition-all duration-300 ${
      isDarkMode 
        ? "bg-[#060912]/80 border-slate-800/80 text-slate-100 shadow-lg shadow-black/20" 
        : "bg-white/80 border-slate-200/80 text-slate-800 shadow-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Title */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center space-x-3.5"
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 text-white ring-1 ring-white/20">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-base sm:text-lg font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                MSEC & AU <span className="font-semibold text-slate-200">GPA Engine</span>
              </h1>
              <span className="hidden md:inline-flex items-center space-x-1 px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-gradient-to-r from-indigo-500/15 via-purple-500/15 to-pink-500/15 text-indigo-300 border border-indigo-500/30 shadow-sm">
                <Sparkles className="w-3 h-3 text-indigo-400" />
                <span>R2024 • R2023</span>
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block font-medium">
              Autonomous MSEC & Anna University Grade Portal
            </p>
          </div>
        </motion.div>

        {/* Action Controls */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center space-x-2 sm:space-x-3"
        >
          {/* Privacy Badge */}
          <div className="hidden lg:flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 shadow-sm shadow-emerald-500/5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>100% Client-Side Private</span>
          </div>

          {/* PWA Install Button (If available) */}
          {deferredInstallPrompt && (
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={onInstallApp}
              className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-bold rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 transition"
              title="Install Web App for Offline Use"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Install App</span>
            </motion.button>
          )}

          {/* Admin Curriculum Panel Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenAdmin}
            className={`p-2 rounded-xl text-xs font-medium transition-all ${
              isDarkMode 
                ? "bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 border border-slate-700/60" 
                : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
            }`}
            title="Curriculum Dataset Manager & Custom Datasets"
          >
            <Settings className="w-4 h-4" />
          </motion.button>

          {/* Theme Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-xl text-xs font-medium transition-all ${
              isDarkMode 
                ? "bg-slate-800/80 hover:bg-slate-700/80 text-amber-400 border border-slate-700/60" 
                : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
            }`}
            title="Toggle Dark / Light Mode"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </motion.button>

          {/* Reset All Data Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onResetData}
            className="p-2 rounded-xl text-xs font-medium text-rose-400 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 transition-all"
            title="Reset All Local Input & History"
          >
            <Trash2 className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </header>
  );
}

