import React from "react";
import { GraduationCap, ShieldCheck, ExternalLink } from "lucide-react";

export default function Footer({ isDarkMode }) {
  return (
    <footer className={`mt-16 border-t transition-colors duration-200 ${
      isDarkMode ? "bg-[#04060d] border-slate-800/80 text-slate-400" : "bg-slate-100 border-slate-200 text-slate-600"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className={`font-bold text-base ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                MSEC GPA & CGPA Calculator
              </span>
            </div>
            <p className="text-xs max-w-md leading-relaxed">
              Designed specifically for students of Meenakshi Sundararajan Engineering College (MSEC Autonomous) and Anna University affiliated colleges under R2024, R2023, and R2025 regulations.
            </p>
          </div>

          {/* Quick Rules Links */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <h4 className={`font-bold uppercase tracking-wider text-[11px] ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}>
              Supported Regulations
            </h4>
            <ul className="space-y-1 opacity-80">
              <li>• MSEC Autonomous — R2024</li>
              <li>• Anna University — R2023</li>
              <li>• Anna University — R2025</li>
              <li>• Autonomous Choice Based Credit System</li>
            </ul>
          </div>

          {/* Privacy Note */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <h4 className={`font-bold uppercase tracking-wider text-[11px] ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}>
              Privacy & Security
            </h4>
            <div className="flex items-start space-x-2 text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" />
              <span>100% Client-Side Processing. No grades or personal data are ever uploaded or transmitted.</span>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer */}
        <div className="pt-6 border-t border-slate-800/40 text-center text-[11px] space-y-2 opacity-75">
          <p>
            <strong>Educational Disclaimer:</strong> This application is developed for educational assistance and self-assessment only. Always verify your final GPA, CGPA, and degree classification against official transcripts issued by the MSEC Controller of Examinations or Anna University Gazette.
          </p>
          <p>© 2026 MSEC GPA & CGPA Calculator. Built with precision and regulation compliance.</p>
        </div>

      </div>
    </footer>
  );
}
