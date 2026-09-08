import React, { useState } from "react";
import { Calculator, ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";

export default function CalculationBreakdown({ isDarkMode, gpaResult, regulation }) {
  const [isOpen, setIsOpen] = useState(true);

  if (!gpaResult || !gpaResult.breakdown) return null;

  return (
    <div className={`rounded-2xl border overflow-hidden transition-all ${
      isDarkMode ? "bg-[#0d1422] border-slate-800" : "bg-white border-slate-200 shadow-md"
    }`}>
      
      {/* Accordion Toggle Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-4 px-6 flex items-center justify-between transition-colors ${
          isDarkMode ? "hover:bg-slate-800/50 text-white" : "hover:bg-slate-50 text-slate-900"
        }`}
      >
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
            <Calculator className="w-4 h-4" />
          </div>
          <div className="text-left">
            <h4 className="text-sm font-bold">Calculation Breakdown & Formula Transparency</h4>
            <p className="text-xs text-slate-400">Step-by-step credit weighting audit log</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-lg border border-indigo-500/20">
            {gpaResult.totalGradePoints} / {gpaResult.totalCreditsRegistered} Cr = {gpaResult.gpaFormatted}
          </span>
          {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
        </div>
      </button>

      {/* Expanded Content */}
      {isOpen && (
        <div className="p-6 pt-0 border-t border-slate-800/40 space-y-4">
          
          {/* Detailed Step-by-Step Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className={`border-b font-semibold uppercase tracking-wider ${
                  isDarkMode ? "border-slate-800 text-slate-400" : "border-slate-200 text-slate-500"
                }`}>
                  <th className="py-2.5 px-3">Course Code & Name</th>
                  <th className="py-2.5 px-3 text-center">Credit (C)</th>
                  <th className="py-2.5 px-3 text-center">Grade</th>
                  <th className="py-2.5 px-3 text-center">Grade Point (GP)</th>
                  <th className="py-2.5 px-3 text-right">Points (C × GP)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/30 font-mono">
                {gpaResult.breakdown.map((item, idx) => (
                  <tr key={idx} className={isDarkMode ? "hover:bg-slate-800/30" : "hover:bg-slate-50"}>
                    <td className="py-2.5 px-3 font-sans">
                      <span className="font-bold text-indigo-400 mr-2">{item.code}</span>
                      <span className={isDarkMode ? "text-slate-300" : "text-slate-700"}>{item.name}</span>
                    </td>
                    <td className="py-2.5 px-3 text-center font-bold">{item.credits}</td>
                    <td className="py-2.5 px-3 text-center">
                      <span className={`px-2 py-0.5 rounded font-bold ${
                        item.gradePoint !== null && item.gradePoint >= 5
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-rose-500/10 text-rose-400"
                      }`}>
                        {item.grade || "—"}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-center text-slate-400">{item.gradePoint !== null ? item.gradePoint : "—"}</td>
                    <td className="py-2.5 px-3 text-right font-bold text-indigo-400">{item.pointsEarned}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className={`border-t-2 font-bold text-sm ${
                  isDarkMode ? "border-slate-700 text-white bg-slate-900/60" : "border-slate-300 text-slate-900 bg-slate-100"
                }`}>
                  <td className="py-3 px-3">Total Sums</td>
                  <td className="py-3 px-3 text-center text-indigo-400 font-mono">{gpaResult.totalCreditsRegistered} Cr</td>
                  <td className="py-3 px-3"></td>
                  <td className="py-3 px-3"></td>
                  <td className="py-3 px-3 text-right text-indigo-400 font-mono">{gpaResult.totalGradePoints} Pts</td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Mathematical Formula Box */}
          <div className={`p-4 rounded-xl border font-mono text-xs ${
            isDarkMode ? "bg-slate-900/80 border-slate-800 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-800"
          }`}>
            <div className="font-bold text-indigo-400 uppercase tracking-wider mb-1 font-sans text-[11px]">
              Exact Mathematical Execution Formula
            </div>
            <div className="space-y-1">
              <p>GPA = Total Grade Points (Σ C × GP) ÷ Total Registered Credits (Σ C)</p>
              <p className="text-sm font-bold text-indigo-300">
                GPA = {gpaResult.totalGradePoints} ÷ {gpaResult.totalCreditsRegistered} = {gpaResult.gpa}
              </p>
              <p className="text-slate-400 text-[11px] font-sans">
                Displayed rounded to 2 decimal places: <strong className="text-white">{gpaResult.gpaFormatted}</strong> (full precision retained for CGPA accumulator).
              </p>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
