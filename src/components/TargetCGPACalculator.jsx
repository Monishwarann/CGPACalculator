import React, { useState } from "react";
import { motion } from "framer-motion";
import { Target, CheckCircle2, AlertTriangle, XCircle, ArrowUpRight } from "lucide-react";
import { calculateTargetGPA } from "../engine/validation";

export default function TargetCGPACalculator({ isDarkMode, currentCGPAVal, currentCompletedCreditsVal, maxGradePoint = 10 }) {
  const [targetCGPAInput, setTargetCGPAInput] = useState("8.50");
  const [completedCreditsInput, setCompletedCreditsInput] = useState(currentCompletedCreditsVal || "70");
  const [remainingCreditsInput, setRemainingCreditsInput] = useState("45");
  const [currentCGPAInput, setCurrentCGPAInput] = useState(currentCGPAVal || "8.10");

  const targetResult = calculateTargetGPA({
    currentCGPA: currentCGPAInput,
    completedCredits: completedCreditsInput,
    remainingCredits: remainingCreditsInput,
    targetCGPA: targetCGPAInput,
    maxGradePoint
  });

  const getFeasibilityBadge = (feasibility) => {
    switch (feasibility) {
      case "Achievable":
      case "Easily Achievable":
        return { color: "bg-emerald-500/15 text-emerald-400 border-emerald-500/40 shadow-sm shadow-emerald-500/10", icon: CheckCircle2 };
      case "Very Difficult":
        return { color: "bg-amber-500/15 text-amber-400 border-amber-500/40 shadow-sm shadow-amber-500/10", icon: AlertTriangle };
      case "Mathematically Impossible":
        return { color: "bg-rose-500/15 text-rose-400 border-rose-500/40 shadow-sm shadow-rose-500/10", icon: XCircle };
      default:
        return { color: "bg-blue-500/15 text-blue-400 border-blue-500/40 shadow-sm shadow-blue-500/10", icon: Target };
    }
  };

  const badgeInfo = getFeasibilityBadge(targetResult.feasibility);
  const BadgeIcon = badgeInfo.icon;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.55 }}
      className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 ${
        isDarkMode
          ? "bg-[#0c1322]/80 backdrop-blur-xl border-slate-800/90 shadow-2xl shadow-black/50"
          : "bg-white/90 backdrop-blur-xl border-slate-200/90 shadow-xl shadow-indigo-500/5"
      }`}
    >
      <div className="flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider text-indigo-400 mb-1">
        <Target className="w-4 h-4" />
        <span>Target CGPA Strategy Planner</span>
      </div>
      <h3 className={`text-xl font-extrabold tracking-tight mb-2 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
        Target CGPA & Required Future GPA Planner
      </h3>
      <p className="text-xs font-medium text-slate-400 mb-6">
        Calculate the exact minimum average GPA required in upcoming semesters to achieve your target graduation CGPA.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Input Fields Form */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1.5">
              Current CGPA
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              max="10"
              value={currentCGPAInput}
              onChange={(e) => setCurrentCGPAInput(e.target.value)}
              className={`w-full p-3.5 rounded-2xl border font-mono font-bold text-sm ${
                isDarkMode ? "bg-slate-900/90 border-slate-700/80 text-white" : "bg-slate-50 border-slate-300 text-slate-900"
              }`}
            />
          </div>

          <div>
            <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1.5">
              Target CGPA Goal
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              max="10"
              value={targetCGPAInput}
              onChange={(e) => setTargetCGPAInput(e.target.value)}
              className={`w-full p-3.5 rounded-2xl border font-mono font-extrabold text-sm text-indigo-400 ${
                isDarkMode ? "bg-slate-900/90 border-indigo-500/60 shadow-sm shadow-indigo-500/10" : "bg-slate-50 border-indigo-300"
              }`}
            />
          </div>

          <div>
            <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1.5">
              Completed Credits
            </label>
            <input
              type="number"
              step="1"
              min="1"
              value={completedCreditsInput}
              onChange={(e) => setCompletedCreditsInput(e.target.value)}
              className={`w-full p-3.5 rounded-2xl border font-mono font-bold text-sm ${
                isDarkMode ? "bg-slate-900/90 border-slate-700/80 text-white" : "bg-slate-50 border-slate-300 text-slate-900"
              }`}
            />
          </div>

          <div>
            <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1.5">
              Remaining Credits
            </label>
            <input
              type="number"
              step="1"
              min="1"
              value={remainingCreditsInput}
              onChange={(e) => setRemainingCreditsInput(e.target.value)}
              className={`w-full p-3.5 rounded-2xl border font-mono font-bold text-sm ${
                isDarkMode ? "bg-slate-900/90 border-slate-700/80 text-white" : "bg-slate-50 border-slate-300 text-slate-900"
              }`}
            />
          </div>
        </div>

        {/* Output & Feasibility Card */}
        <div className="lg:col-span-5">
          <div className={`p-6 rounded-3xl border text-center space-y-4 relative overflow-hidden ${
            isDarkMode
              ? "bg-gradient-to-br from-indigo-950/60 via-slate-900 to-[#0c1322] border-indigo-500/40 shadow-xl"
              : "bg-gradient-to-br from-indigo-50 via-white to-purple-50/50 border-indigo-200 shadow-md"
          }`}>
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl pointer-events-none" />

            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
              Required Future Average GPA
            </span>

            <div className="text-4xl sm:text-5xl font-black font-mono text-indigo-400 my-1">
              {targetResult.requiredGPAFormatted}
            </div>

            <div className="flex items-center justify-center space-x-2 pt-1">
              <div className={`inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold border ${badgeInfo.color}`}>
                <BadgeIcon className="w-4 h-4" />
                <span>{targetResult.feasibility}</span>
              </div>
            </div>

            <p className="text-xs font-semibold text-slate-400 max-w-xs mx-auto leading-relaxed pt-1">
              {targetResult.message}
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

