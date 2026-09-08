import React, { useState } from "react";
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
        return { color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30", icon: CheckCircle2 };
      case "Very Difficult":
        return { color: "bg-amber-500/10 text-amber-400 border-amber-500/30", icon: AlertTriangle };
      case "Mathematically Impossible":
        return { color: "bg-rose-500/10 text-rose-400 border-rose-500/30", icon: XCircle };
      default:
        return { color: "bg-blue-500/10 text-blue-400 border-blue-500/30", icon: Target };
    }
  };

  const badgeInfo = getFeasibilityBadge(targetResult.feasibility);
  const BadgeIcon = badgeInfo.icon;

  return (
    <div className={`p-6 rounded-2xl border transition-all ${
      isDarkMode
        ? "bg-[#0d1422] border-slate-800/80 shadow-xl shadow-black/40"
        : "bg-white border-slate-200 shadow-xl shadow-slate-200/50"
    }`}>
      <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-1">
        <Target className="w-4 h-4" />
        <span>Target CGPA Planner</span>
      </div>
      <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
        🎯 Target CGPA & Required Future GPA Planner
      </h3>
      <p className="text-xs text-slate-400 mb-6">
        Calculate the exact minimum average GPA you must achieve in remaining semesters to graduate with your dream CGPA.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Input Fields Form */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-4">
          <div>
            <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              Current CGPA
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              max="10"
              value={currentCGPAInput}
              onChange={(e) => setCurrentCGPAInput(e.target.value)}
              className={`w-full p-3 rounded-xl border font-bold text-sm ${
                isDarkMode ? "bg-slate-900 border-slate-700 text-white" : "bg-slate-50 border-slate-300 text-slate-900"
              }`}
            />
          </div>

          <div>
            <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              Target CGPA Goal
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              max="10"
              value={targetCGPAInput}
              onChange={(e) => setTargetCGPAInput(e.target.value)}
              className={`w-full p-3 rounded-xl border font-bold text-sm text-indigo-400 ${
                isDarkMode ? "bg-slate-900 border-indigo-500/50" : "bg-slate-50 border-indigo-300"
              }`}
            />
          </div>

          <div>
            <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              Completed Credits
            </label>
            <input
              type="number"
              step="1"
              min="1"
              value={completedCreditsInput}
              onChange={(e) => setCompletedCreditsInput(e.target.value)}
              className={`w-full p-3 rounded-xl border font-bold text-sm ${
                isDarkMode ? "bg-slate-900 border-slate-700 text-white" : "bg-slate-50 border-slate-300 text-slate-900"
              }`}
            />
          </div>

          <div>
            <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
              Remaining Credits
            </label>
            <input
              type="number"
              step="1"
              min="1"
              value={remainingCreditsInput}
              onChange={(e) => setRemainingCreditsInput(e.target.value)}
              className={`w-full p-3 rounded-xl border font-bold text-sm ${
                isDarkMode ? "bg-slate-900 border-slate-700 text-white" : "bg-slate-50 border-slate-300 text-slate-900"
              }`}
            />
          </div>
        </div>

        {/* Output & Feasibility Card */}
        <div className="lg:col-span-5">
          <div className={`p-6 rounded-2xl border text-center space-y-3 ${
            isDarkMode
              ? "bg-gradient-to-br from-indigo-950/50 via-slate-900 to-[#0d1422] border-indigo-500/30 shadow-lg"
              : "bg-gradient-to-br from-indigo-50 to-white border-indigo-200 shadow-md"
          }`}>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Required Average Future GPA
            </span>

            <div className="text-4xl sm:text-5xl font-extrabold font-mono text-indigo-400">
              {targetResult.requiredGPAFormatted}
            </div>

            <div className="flex items-center justify-center space-x-2 pt-2">
              <div className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold border ${badgeInfo.color}`}>
                <BadgeIcon className="w-3.5 h-3.5" />
                <span>{targetResult.feasibility}</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed pt-1">
              {targetResult.message}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
