import React from "react";
import { Award, TrendingUp, Percent, CheckCircle, AlertCircle, Share2, FileText, Download } from "lucide-react";

export default function ResultDashboard({
  isDarkMode,
  gpaResult,
  cgpaResult,
  percentageResult,
  classificationResult,
  onSaveSemester,
  onExportPDF,
  onExportCSV,
  onShareText
}) {
  const getClassificationBadgeColor = (color) => {
    switch (color) {
      case "emerald":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
      case "blue":
        return "bg-blue-500/10 text-blue-400 border-blue-500/30";
      case "amber":
        return "bg-amber-500/10 text-amber-400 border-amber-500/30";
      case "rose":
        return "bg-rose-500/10 text-rose-400 border-rose-500/30";
      default:
        return "bg-indigo-500/10 text-indigo-400 border-indigo-500/30";
    }
  };

  return (
    <div className="space-y-6">
      
      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Semester GPA */}
        <div className={`p-5 rounded-2xl border transition-all ${
          isDarkMode
            ? "bg-gradient-to-br from-indigo-900/30 to-[#0d1422] border-indigo-500/30 shadow-lg shadow-indigo-950/40"
            : "bg-gradient-to-br from-indigo-50 to-white border-indigo-200 shadow-md shadow-indigo-100"
        }`}>
          <div className="flex items-center justify-between text-indigo-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Semester GPA</span>
            <Award className="w-5 h-5" />
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-indigo-400">
            {gpaResult.gpaFormatted}
          </div>
          <div className="text-[11px] text-slate-400 mt-2 flex items-center justify-between">
            <span>Range: 0.00 – 10.00</span>
            <span>{gpaResult.passedCoursesCount} Passed</span>
          </div>
        </div>

        {/* CGPA */}
        <div className={`p-5 rounded-2xl border transition-all ${
          isDarkMode
            ? "bg-gradient-to-br from-violet-900/30 to-[#0d1422] border-violet-500/30 shadow-lg shadow-violet-950/40"
            : "bg-gradient-to-br from-violet-50 to-white border-violet-200 shadow-md shadow-violet-100"
        }`}>
          <div className="flex items-center justify-between text-violet-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Cumulative CGPA</span>
            <TrendingUp className="w-5 h-5" />
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-violet-400">
            {cgpaResult.cgpaFormatted}
          </div>
          <div className="text-[11px] text-slate-400 mt-2 flex items-center justify-between">
            <span>Credit Weighted</span>
            <span>{cgpaResult.totalCumulativeCredits} Cum. Credits</span>
          </div>
        </div>

        {/* Percentage */}
        <div className={`p-5 rounded-2xl border transition-all ${
          isDarkMode
            ? "bg-gradient-to-br from-purple-900/30 to-[#0d1422] border-purple-500/30 shadow-lg shadow-purple-950/40"
            : "bg-gradient-to-br from-purple-50 to-white border-purple-200 shadow-md shadow-purple-100"
        }`}>
          <div className="flex items-center justify-between text-purple-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Percentage</span>
            <Percent className="w-5 h-5" />
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-purple-400">
            {percentageResult.percentageFormatted}
          </div>
          <div className="text-[11px] text-slate-400 mt-2 truncate">
            {percentageResult.formulaText}
          </div>
        </div>

        {/* Total Earned Credits */}
        <div className={`p-5 rounded-2xl border transition-all ${
          isDarkMode
            ? "bg-gradient-to-br from-emerald-900/30 to-[#0d1422] border-emerald-500/30 shadow-lg shadow-emerald-950/40"
            : "bg-gradient-to-br from-emerald-50 to-white border-emerald-200 shadow-md shadow-emerald-100"
        }`}>
          <div className="flex items-center justify-between text-emerald-400 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider">Credits Earned</span>
            <CheckCircle className="w-5 h-5" />
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-emerald-400">
            {gpaResult.totalCreditsEarned} <span className="text-sm font-normal text-slate-400">/ {gpaResult.totalCreditsRegistered}</span>
          </div>
          <div className="text-[11px] text-slate-400 mt-2 flex items-center justify-between">
            <span>Registered: {gpaResult.totalCreditsRegistered} Cr</span>
            {gpaResult.failedCoursesCount > 0 ? (
              <span className="text-rose-400 font-bold">{gpaResult.failedCoursesCount} Arrear(s)</span>
            ) : (
              <span className="text-emerald-400">0 Arrears</span>
            )}
          </div>
        </div>

      </div>

      {/* Academic Performance & Classification Banner */}
      <div className={`p-6 rounded-2xl border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
        isDarkMode ? "bg-[#0d1422] border-slate-800" : "bg-white border-slate-200 shadow-lg shadow-slate-100"
      }`}>
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Academic Performance Classification</span>
            <span className={`px-3 py-1 rounded-full text-xs font-extrabold border ${getClassificationBadgeColor(classificationResult.color)}`}>
              {classificationResult.label}
            </span>
          </div>
          <p className={`text-sm ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
            {classificationResult.description}
          </p>
          <p className="text-[11px] text-slate-400 italic pt-1 max-w-2xl">
            {classificationResult.disclaimer}
          </p>
        </div>

        {/* Action Buttons Toolbar */}
        <div className="flex items-center space-x-2 flex-wrap gap-y-2 w-full md:w-auto shrink-0">
          <button
            onClick={onSaveSemester}
            className="flex-1 md:flex-none px-4 py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/25 hover:from-indigo-500 hover:to-violet-500 transition"
          >
            Save Semester Result
          </button>

          <button
            onClick={onExportPDF}
            className="p-2.5 rounded-xl font-semibold text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
            title="Download PDF Report"
          >
            <FileText className="w-4 h-4" />
          </button>

          <button
            onClick={onExportCSV}
            className="p-2.5 rounded-xl font-semibold text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
            title="Download CSV Spreadsheet"
          >
            <Download className="w-4 h-4" />
          </button>

          <button
            onClick={onShareText}
            className="p-2.5 rounded-xl font-semibold text-xs bg-slate-800 hover:bg-slate-700 text-indigo-400 border border-slate-700 transition"
            title="Copy Text Summary"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
}
