import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Sparkles, Check, AlertCircle, RefreshCw, Zap } from "lucide-react";

export default function CourseTable({
  isDarkMode,
  courses,
  regulation,
  onGradeChange,
  onQuickFill
}) {
  const gradeScaleKeys = Object.keys(regulation.gradeScale);

  const getTypeStyle = (type) => {
    switch (type?.toLowerCase()) {
      case "theory":
        return "bg-blue-500/15 text-blue-400 border-blue-500/30 shadow-sm shadow-blue-500/5";
      case "laboratory":
      case "lab":
        return "bg-emerald-500/15 text-emerald-400 border-emerald-500/30 shadow-sm shadow-emerald-500/5";
      case "project":
        return "bg-purple-500/15 text-purple-400 border-purple-500/30 shadow-sm shadow-purple-500/5";
      case "professional elective":
        return "bg-amber-500/15 text-amber-400 border-amber-500/30 shadow-sm shadow-amber-500/5";
      case "open elective":
        return "bg-pink-500/15 text-pink-400 border-pink-500/30 shadow-sm shadow-pink-500/5";
      case "mandatory course":
      case "audit course":
        return "bg-gray-500/15 text-gray-400 border-gray-500/30";
      default:
        return "bg-indigo-500/15 text-indigo-400 border-indigo-500/30";
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 ${
        isDarkMode
          ? "bg-[#0c1322]/80 backdrop-blur-xl border-slate-800/90 shadow-2xl shadow-black/50"
          : "bg-white/90 backdrop-blur-xl border-slate-200/90 shadow-xl shadow-indigo-500/5"
      }`}
    >
      
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
            <BookOpen className="w-4 h-4" />
            <span>Step 4: Select Your Achieved Grades</span>
          </div>
          <h3 className={`text-xl font-extrabold tracking-tight mt-1 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
            Curriculum Courses & Locked Credits
          </h3>
          <p className="text-xs font-medium text-slate-400">
            Official credit values are locked to regulation specs. Select your achieved letter grade for each course.
          </p>
        </div>

        {/* Quick Fill Shortcuts Toolbar */}
        <div className="flex items-center space-x-2 flex-wrap gap-y-1.5 self-stretch sm:self-auto">
          <span className="text-xs font-bold text-slate-400 hidden md:inline flex items-center mr-1">
            <Zap className="w-3.5 h-3.5 text-amber-400 mr-1" /> Quick Fill:
          </span>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={() => onQuickFill("O")}
            className="px-3 py-1.5 text-xs font-extrabold rounded-xl bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/30 transition shadow-sm"
          >
            All O (10 Pts)
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={() => onQuickFill("A+")}
            className="px-3 py-1.5 text-xs font-extrabold rounded-xl bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30 transition shadow-sm"
          >
            All A+ (9 Pts)
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={() => onQuickFill("A")}
            className="px-3 py-1.5 text-xs font-extrabold rounded-xl bg-blue-500/15 text-blue-300 border border-blue-500/30 hover:bg-blue-500/30 transition shadow-sm"
          >
            All A (8 Pts)
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={() => onQuickFill("")}
            className="px-3 py-1.5 text-xs font-extrabold rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 transition border border-slate-700 shadow-sm"
            title="Clear all selected grades"
          >
            <RefreshCw className="w-3 h-3 inline mr-1" />
            Clear All
          </motion.button>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className={`border-b text-[11px] uppercase tracking-wider font-extrabold ${
              isDarkMode ? "border-slate-800/80 text-slate-400 bg-slate-900/60" : "border-slate-200 text-slate-500 bg-slate-50"
            }`}>
              <th className="py-4 px-4 rounded-l-2xl">Subject Code</th>
              <th className="py-4 px-4">Subject Title</th>
              <th className="py-4 px-4">Course Type</th>
              <th className="py-4 px-4 text-center">Auto Credits</th>
              <th className="py-4 px-4">Achieved Grade</th>
              <th className="py-4 px-4 text-right rounded-r-2xl">Points (C × GP)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/40">
            {courses.map((course, idx) => {
              const selectedGrade = course.grade || "";
              const gradeInfo = regulation.gradeScale[selectedGrade];
              const pointsEarned = gradeInfo ? course.credits * gradeInfo.point : 0;

              return (
                <tr
                  key={course.code || idx}
                  className={`transition-all duration-200 ${
                    isDarkMode ? "hover:bg-slate-800/40" : "hover:bg-slate-50/80"
                  }`}
                >
                  {/* Subject Code */}
                  <td className="py-4 px-4 font-mono text-xs font-bold text-indigo-400">
                    {course.code || "—"}
                  </td>

                  {/* Subject Name */}
                  <td className={`py-4 px-4 text-sm font-bold ${isDarkMode ? "text-slate-100" : "text-slate-800"}`}>
                    {course.name}
                    {!course.includedInGPA && (
                      <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-gray-500/20 text-gray-400 border border-gray-500/30 font-semibold">
                        Non-GPA / Audit
                      </span>
                    )}
                  </td>

                  {/* Course Type Badge */}
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-xl text-[11px] font-extrabold border ${getTypeStyle(course.type)}`}>
                      {course.type || "Theory"}
                    </span>
                  </td>

                  {/* Locked Auto Credits */}
                  <td className="py-4 px-4 text-center">
                    <div className="inline-flex items-center justify-center min-w-[42px] px-3 py-1 rounded-xl font-mono font-extrabold text-sm bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 shadow-sm" title="Official locked credit value">
                      {course.credits}
                    </div>
                  </td>

                  {/* Grade Dropdown Selector */}
                  <td className="py-4 px-4">
                    <select
                      value={selectedGrade}
                      onChange={(e) => onGradeChange(idx, e.target.value)}
                      className={`w-full max-w-[150px] p-2.5 rounded-xl border font-extrabold text-sm transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ${
                        selectedGrade
                          ? gradeInfo?.pass
                            ? "bg-emerald-500/15 border-emerald-500/50 text-emerald-400 ring-1 ring-emerald-500/30 shadow-sm shadow-emerald-500/10"
                            : "bg-rose-500/15 border-rose-500/50 text-rose-400 ring-1 ring-rose-500/30 shadow-sm shadow-rose-500/10"
                          : isDarkMode
                            ? "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-600"
                            : "bg-slate-50 border-slate-300 text-slate-800 hover:border-slate-400"
                      }`}
                    >
                      <option value="">Select Grade</option>
                      {gradeScaleKeys.map((key) => {
                        const info = regulation.gradeScale[key];
                        return (
                          <option key={key} value={key} className={isDarkMode ? "bg-slate-900 text-white" : "bg-white text-slate-900"}>
                            {key} — ({info.point} Pts • {info.label})
                          </option>
                        );
                      })}
                    </select>
                  </td>

                  {/* C x GP Calculation Result */}
                  <td className="py-4 px-4 text-right font-mono font-extrabold text-base">
                    {selectedGrade ? (
                      <span className={gradeInfo?.pass ? "text-emerald-400" : "text-rose-400"}>
                        {pointsEarned}
                      </span>
                    ) : (
                      <span className="text-slate-500 text-xs">—</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Responsive Cards */}
      <div className="md:hidden space-y-3.5">
        {courses.map((course, idx) => {
          const selectedGrade = course.grade || "";
          const gradeInfo = regulation.gradeScale[selectedGrade];
          const pointsEarned = gradeInfo ? course.credits * gradeInfo.point : 0;

          return (
            <div
              key={course.code || idx}
              className={`p-4 rounded-2xl border space-y-3 transition-all ${
                isDarkMode ? "bg-slate-900/60 border-slate-800/80" : "bg-slate-50 border-slate-200"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="font-mono text-xs font-extrabold text-indigo-400">{course.code}</span>
                  <h4 className={`text-sm font-bold mt-0.5 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                    {course.name}
                  </h4>
                </div>
                <span className={`px-2.5 py-1 rounded-xl text-[10px] font-extrabold border shrink-0 ${getTypeStyle(course.type)}`}>
                  {course.type}
                </span>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-700/20">
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-slate-400 font-semibold">Credits:</span>
                  <span className="px-2.5 py-0.5 rounded-lg bg-indigo-500/15 text-indigo-300 font-mono font-extrabold text-xs">
                    {course.credits} Cr
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-xs text-slate-400 font-semibold">C × GP:</span>
                  <span className="font-mono font-extrabold text-base text-indigo-400">
                    {selectedGrade ? pointsEarned : "—"}
                  </span>
                </div>
              </div>

              <div>
                <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1.5">
                  Achieved Grade
                </label>
                <select
                  value={selectedGrade}
                  onChange={(e) => onGradeChange(idx, e.target.value)}
                  className={`w-full p-3 rounded-xl border font-extrabold text-sm ${
                    selectedGrade
                      ? gradeInfo?.pass
                        ? "bg-emerald-500/15 border-emerald-500/50 text-emerald-400"
                        : "bg-rose-500/15 border-rose-500/50 text-rose-400"
                      : isDarkMode
                        ? "bg-slate-900 border-slate-700 text-slate-300"
                        : "bg-white border-slate-300 text-slate-800"
                  }`}
                >
                  <option value="">Select Grade</option>
                  {gradeScaleKeys.map((key) => (
                    <option key={key} value={key}>
                      {key} ({regulation.gradeScale[key].point} Pts)
                    </option>
                  ))}
                </select>
              </div>
            </div>
          );
        })}
      </div>

    </motion.div>
  );
}

