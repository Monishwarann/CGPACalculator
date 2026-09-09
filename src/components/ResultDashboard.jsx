import React from "react";
import { motion } from "framer-motion";
import { Award, TrendingUp, Percent, CheckCircle, AlertCircle, Share2, FileText, Download, BookmarkPlus } from "lucide-react";

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
        return "bg-emerald-500/15 text-emerald-400 border-emerald-500/40 shadow-sm shadow-emerald-500/10";
      case "blue":
        return "bg-blue-500/15 text-blue-400 border-blue-500/40 shadow-sm shadow-blue-500/10";
      case "amber":
        return "bg-amber-500/15 text-amber-400 border-amber-500/40 shadow-sm shadow-amber-500/10";
      case "rose":
        return "bg-rose-500/15 text-rose-400 border-rose-500/40 shadow-sm shadow-rose-500/10";
      default:
        return "bg-indigo-500/15 text-indigo-400 border-indigo-500/40 shadow-sm shadow-indigo-500/10";
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="space-y-6"
    >
      
      {/* 4 Premium KPI Stat Glass Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: Semester GPA */}
        <motion.div 
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ duration: 0.2 }}
          className={`p-6 rounded-3xl border transition-all duration-300 relative overflow-hidden ${
            isDarkMode
              ? "bg-gradient-to-br from-indigo-950/60 via-[#0d1422] to-[#060912] border-indigo-500/40 shadow-xl shadow-indigo-950/30"
              : "bg-gradient-to-br from-indigo-50/90 via-white to-indigo-50/30 border-indigo-200 shadow-lg shadow-indigo-500/5"
          }`}
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/15 rounded-full blur-xl pointer-events-none" />
          <div className="flex items-center justify-between text-indigo-400 mb-3">
            <span className="text-xs font-extrabold uppercase tracking-wider">Semester GPA</span>
            <div className="p-2 rounded-xl bg-indigo-500/15 border border-indigo-500/30">
              <Award className="w-5 h-5" />
            </div>
          </div>
          <div className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-indigo-400 my-1">
            {gpaResult.gpaFormatted}
          </div>
          <div className="text-[11px] font-bold text-slate-400 mt-3 flex items-center justify-between pt-2 border-t border-indigo-500/15">
            <span>Range: 0.00 – 10.00</span>
            <span className="text-indigo-300">{gpaResult.passedCoursesCount} Passed</span>
          </div>
        </motion.div>

        {/* Card 2: Cumulative CGPA */}
        <motion.div 
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ duration: 0.2 }}
          className={`p-6 rounded-3xl border transition-all duration-300 relative overflow-hidden ${
            isDarkMode
              ? "bg-gradient-to-br from-violet-950/60 via-[#0d1422] to-[#060912] border-violet-500/40 shadow-xl shadow-violet-950/30"
              : "bg-gradient-to-br from-violet-50/90 via-white to-violet-50/30 border-violet-200 shadow-lg shadow-violet-500/5"
          }`}
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/15 rounded-full blur-xl pointer-events-none" />
          <div className="flex items-center justify-between text-violet-400 mb-3">
            <span className="text-xs font-extrabold uppercase tracking-wider">Cumulative CGPA</span>
            <div className="p-2 rounded-xl bg-violet-500/15 border border-violet-500/30">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
          <div className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-violet-400 my-1">
            {cgpaResult.cgpaFormatted}
          </div>
          <div className="text-[11px] font-bold text-slate-400 mt-3 flex items-center justify-between pt-2 border-t border-violet-500/15">
            <span>Credit Weighted</span>
            <span className="text-violet-300">{cgpaResult.totalCumulativeCredits} Cum. Cr</span>
          </div>
        </motion.div>

        {/* Card 3: Marks Percentage */}
        <motion.div 
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ duration: 0.2 }}
          className={`p-6 rounded-3xl border transition-all duration-300 relative overflow-hidden ${
            isDarkMode
              ? "bg-gradient-to-br from-purple-950/60 via-[#0d1422] to-[#060912] border-purple-500/40 shadow-xl shadow-purple-950/30"
              : "bg-gradient-to-br from-purple-50/90 via-white to-purple-50/30 border-purple-200 shadow-lg shadow-purple-500/5"
          }`}
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/15 rounded-full blur-xl pointer-events-none" />
          <div className="flex items-center justify-between text-purple-400 mb-3">
            <span className="text-xs font-extrabold uppercase tracking-wider">Percentage</span>
            <div className="p-2 rounded-xl bg-purple-500/15 border border-purple-500/30">
              <Percent className="w-5 h-5" />
            </div>
          </div>
          <div className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-purple-400 my-1">
            {percentageResult.percentageFormatted}
          </div>
          <div className="text-[11px] font-bold text-slate-400 mt-3 truncate pt-2 border-t border-purple-500/15">
            {percentageResult.formulaText}
          </div>
        </motion.div>

        {/* Card 4: Credits Earned */}
        <motion.div 
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ duration: 0.2 }}
          className={`p-6 rounded-3xl border transition-all duration-300 relative overflow-hidden ${
            isDarkMode
              ? "bg-gradient-to-br from-emerald-950/60 via-[#0d1422] to-[#060912] border-emerald-500/40 shadow-xl shadow-emerald-950/30"
              : "bg-gradient-to-br from-emerald-50/90 via-white to-emerald-50/30 border-emerald-200 shadow-lg shadow-emerald-500/5"
          }`}
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/15 rounded-full blur-xl pointer-events-none" />
          <div className="flex items-center justify-between text-emerald-400 mb-3">
            <span className="text-xs font-extrabold uppercase tracking-wider">Credits Earned</span>
            <div className="p-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30">
              <CheckCircle className="w-5 h-5" />
            </div>
          </div>
          <div className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-emerald-400 my-1">
            {gpaResult.totalCreditsEarned} <span className="text-base font-bold text-slate-400">/ {gpaResult.totalCreditsRegistered}</span>
          </div>
          <div className="text-[11px] font-bold text-slate-400 mt-3 flex items-center justify-between pt-2 border-t border-emerald-500/15">
            <span>Reg: {gpaResult.totalCreditsRegistered} Cr</span>
            {gpaResult.failedCoursesCount > 0 ? (
              <span className="text-rose-400 font-extrabold">{gpaResult.failedCoursesCount} Arrear(s)</span>
            ) : (
              <span className="text-emerald-400 font-bold">0 Arrears</span>
            )}
          </div>
        </motion.div>

      </div>

      {/* Academic Performance & Classification Banner */}
      <div className={`p-6 sm:p-7 rounded-3xl border flex flex-col md:flex-row items-start md:items-center justify-between gap-5 transition-all duration-300 ${
        isDarkMode 
          ? "bg-[#0c1322]/80 backdrop-blur-xl border-slate-800/90 shadow-2xl shadow-black/50" 
          : "bg-white/90 backdrop-blur-xl border-slate-200/90 shadow-xl shadow-slate-200/30"
      }`}>
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
              Academic Performance Classification
            </span>
            <span className={`px-3.5 py-1 rounded-full text-xs font-black border ${getClassificationBadgeColor(classificationResult.color)}`}>
              {classificationResult.label}
            </span>
          </div>
          <p className={`text-sm font-semibold ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}>
            {classificationResult.description}
          </p>
          <p className="text-[11px] text-slate-400 font-medium italic max-w-2xl">
            {classificationResult.disclaimer}
          </p>
        </div>

        {/* Action Buttons Toolbar */}
        <div className="flex items-center space-x-2.5 flex-wrap gap-y-2 w-full md:w-auto shrink-0">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onSaveSemester}
            className="flex-1 md:flex-none px-5 py-3 rounded-2xl font-extrabold text-xs bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition flex items-center justify-center space-x-1.5"
          >
            <BookmarkPlus className="w-4 h-4" />
            <span>Save Semester Result</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onExportPDF}
            className="p-3 rounded-2xl font-bold text-xs bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700 transition shadow-sm"
            title="Download PDF Report"
          >
            <FileText className="w-4 h-4" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onExportCSV}
            className="p-3 rounded-2xl font-bold text-xs bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700 transition shadow-sm"
            title="Download CSV Spreadsheet"
          >
            <Download className="w-4 h-4" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onShareText}
            className="p-3 rounded-2xl font-bold text-xs bg-slate-800/80 hover:bg-slate-700/80 text-indigo-400 border border-slate-700 transition shadow-sm"
            title="Copy Text Summary to Clipboard"
          >
            <Share2 className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

    </motion.div>
  );
}

