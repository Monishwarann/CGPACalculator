import React from "react";
import { GraduationCap, ShieldCheck, Heart, Sparkles } from "lucide-react";

export default function Footer({ isDarkMode }) {
  return (
    <footer className={`mt-20 border-t transition-colors duration-300 ${
      isDarkMode ? "bg-[#04060d] border-slate-800/80 text-slate-400" : "bg-slate-100 border-slate-200 text-slate-600"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3.5">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className={`font-extrabold text-lg tracking-tight ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                MSEC GPA Engine
              </span>
            </div>
            <p className="text-xs font-medium max-w-md leading-relaxed">
              Designed specifically for students of Meenakshi Sundararajan Engineering College (MSEC Autonomous) and Anna University affiliated colleges under R2024 & R2023 regulations.
            </p>
          </div>

          {/* Quick Rules Links */}
          <div className="md:col-span-3 space-y-2.5 text-xs">
            <h4 className={`font-extrabold uppercase tracking-wider text-[11px] ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}>
              Supported Regulations
            </h4>
            <ul className="space-y-1.5 font-medium opacity-80">
              <li className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                <span>MSEC Autonomous — R2024</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                <span>Anna University — R2023</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Anna University — R2025</span>
              </li>
            </ul>
          </div>

          {/* Privacy Note */}
          <div className="md:col-span-3 space-y-2.5 text-xs">
            <h4 className={`font-extrabold uppercase tracking-wider text-[11px] ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}>
              Privacy & Security
            </h4>
            <div className="flex items-start space-x-2 text-emerald-400 font-bold p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
              <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" />
              <span>100% Client-Side Processing. No grade data is ever stored on external servers.</span>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer */}
        <div className="pt-8 border-t border-slate-800/40 text-center text-[11px] space-y-2 font-medium opacity-75">
          <p>
            <strong>Educational Disclaimer:</strong> Developed for academic calculation & self-assessment. Always verify official results with the MSEC Controller of Examinations or Anna University COE.
          </p>
          <p className="flex items-center justify-center space-x-1">
            <span>© 2026 MSEC GPA Engine • Built with precision & autonomous regulation compliance</span>
          </p>
        </div>

      </div>
    </footer>
  );
}

