import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, ChevronDown, ChevronUp, Sparkles, CheckCircle2 } from "lucide-react";

export default function CalculationBreakdown({ isDarkMode, gpaResult, regulation }) {
  const [isOpen, setIsOpen] = useState(true);

  if (!gpaResult || !gpaResult.breakdown) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.35 }}
      className={`rounded-3xl border overflow-hidden transition-all duration-300 ${
        isDarkMode 
          ? "bg-[#0c1322]/80 backdrop-blur-xl border-slate-800/90 shadow-2xl shadow-black/50" 
          : "bg-white/90 backdrop-blur-xl border-slate-200/90 shadow-xl shadow-slate-200/30"
      }`}
    >
      
      {/* Accordion Toggle Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-5 sm:px-7 flex items-center justify-between transition-colors ${
          isDarkMode ? "hover:bg-slate-800/40 text-white" : "hover:bg-slate-50/80 text-slate-900"
        }`}
      >
        <div className="flex items-center space-x-3.5">
          <div className="w-10 h-10 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 flex items-center justify-center shadow-inner">
            <Calculator className="w-5 h-5" />
          </div>
          <div className="text-left">
            <h4 className="text-base font-extrabold tracking-tight">Calculation Audit Breakdown</h4>
            <p className="text-xs font-medium text-slate-400">Step-by-step credit weightage formula log</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <span className="hidden sm:inline-flex text-xs font-mono font-extrabold text-indigo-300 bg-indigo-500/15 px-3 py-1.5 rounded-xl border border-indigo-500/30 shadow-sm">
            {gpaResult.totalGradePoints} Pts / {gpaResult.totalCreditsRegistered} Cr = {gpaResult.gpaFormatted}
          </span>
          <div className="p-2 rounded-xl bg-slate-800/50 text-slate-400 border border-slate-700/50">
            {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </div>
        </div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-7 pt-2 border-t border-slate-800/30 space-y-5"
          >
            
            {/* Detailed Step-by-Step Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className={`border-b text-[11px] font-extrabold uppercase tracking-wider ${
                    isDarkMode ? "border-slate-800/80 text-slate-400 bg-slate-900/60" : "border-slate-200 text-slate-500 bg-slate-50"
                  }`}>
                    <th className="py-3 px-4 rounded-l-xl">Course Code & Title</th>
                    <th className="py-3 px-4 text-center">Credit (C)</th>
                    <th className="py-3 px-4 text-center">Grade</th>
                    <th className="py-3 px-4 text-center">Grade Point (GP)</th>
                    <th className="py-3 px-4 text-right rounded-r-xl">Points (C × GP)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/30 font-mono">
                  {gpaResult.breakdown.map((item, idx) => (
                    <tr key={idx} className={isDarkMode ? "hover:bg-slate-800/30" : "hover:bg-slate-50/80"}>
                      <td className="py-3 px-4 font-sans font-medium">
                        <span className="font-mono font-extrabold text-indigo-400 mr-2">{item.code}</span>
                        <span className={isDarkMode ? "text-slate-200 font-bold" : "text-slate-800 font-bold"}>{item.name}</span>
                      </td>
                      <td className="py-3 px-4 text-center font-extrabold">{item.credits}</td>
                      <td className="py-3 px-4 text-center">
                        <span className={`px-2.5 py-0.5 rounded-lg font-extrabold ${
                          item.gradePoint !== null && item.gradePoint >= 5
                            ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                            : "bg-rose-500/15 text-rose-400 border border-rose-500/30"
                        }`}>
                          {item.grade || "—"}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center text-slate-400 font-extrabold">{item.gradePoint !== null ? item.gradePoint : "—"}</td>
                      <td className="py-3 px-4 text-right font-extrabold text-indigo-400 text-sm">{item.pointsEarned}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className={`border-t-2 font-extrabold text-sm ${
                    isDarkMode ? "border-slate-700/80 text-white bg-slate-900/80" : "border-slate-300 text-slate-900 bg-slate-100"
                  }`}>
                    <td className="py-3.5 px-4 rounded-l-xl">Total Audit Sums</td>
                    <td className="py-3.5 px-4 text-center text-indigo-400 font-mono">{gpaResult.totalCreditsRegistered} Cr</td>
                    <td className="py-3.5 px-4"></td>
                    <td className="py-3.5 px-4"></td>
                    <td className="py-3.5 px-4 text-right text-indigo-400 font-mono text-base rounded-r-xl">{gpaResult.totalGradePoints} Pts</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Mathematical Formula Box */}
            <div className={`p-5 rounded-2xl border font-mono text-xs ${
              isDarkMode ? "bg-slate-900/90 border-slate-800/90 text-slate-300 shadow-inner" : "bg-slate-50 border-slate-200 text-slate-800 shadow-sm"
            }`}>
              <div className="font-extrabold text-indigo-400 uppercase tracking-wider mb-2 font-sans text-xs flex items-center space-x-1.5">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>Exact Mathematical Formula Execution</span>
              </div>
              <div className="space-y-1.5">
                <p className="text-slate-400 font-sans">GPA = Total Grade Points (Σ C × GP) ÷ Total Registered Credits (Σ C)</p>
                <p className="text-base font-extrabold text-indigo-300">
                  GPA = {gpaResult.totalGradePoints} ÷ {gpaResult.totalCreditsRegistered} = {gpaResult.gpa}
                </p>
                <p className="text-slate-400 text-[11px] font-sans">
                  Rounded for display to 2 decimal places: <strong className="text-white font-bold">{gpaResult.gpaFormatted}</strong> (full floating point precision retained in CGPA memory).
                </p>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}

