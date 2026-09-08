import React from "react";
import { BookOpen, Sparkles, Check, AlertCircle, RefreshCw } from "lucide-react";

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
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "laboratory":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "project":
        return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      case "professional elective":
        return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      case "open elective":
        return "bg-pink-500/10 text-pink-400 border-pink-500/20";
      case "mandatory course":
      case "audit course":
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
      default:
        return "bg-indigo-500/10 text-indigo-400 border-indigo-500/20";
    }
  };

  return (
    <div className={`p-6 rounded-2xl border transition-all ${
      isDarkMode
        ? "bg-[#0d1422] border-slate-800/80 shadow-xl shadow-black/40"
        : "bg-white border-slate-200 shadow-xl shadow-slate-200/50"
    }`}>
      
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-indigo-400">
            <BookOpen className="w-4 h-4" />
            <span>Step 4: Select Your Grades</span>
          </div>
          <h3 className={`text-lg font-bold mt-1 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
            Curriculum Courses & Auto Credits
          </h3>
          <p className="text-xs text-slate-400">
            Credits are automatically locked to official curriculum specs. Select your achieved grade for each subject.
          </p>
        </div>

        {/* Quick Fill Shortcuts */}
        <div className="flex items-center space-x-2 flex-wrap">
          <span className="text-xs font-medium text-slate-400 hidden md:inline">Quick Fill:</span>
          <button
            type="button"
            onClick={() => onQuickFill("O")}
            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 hover:bg-indigo-500/20 transition"
          >
            All O
          </button>
          <button
            type="button"
            onClick={() => onQuickFill("A+")}
            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition"
          >
            All A+
          </button>
          <button
            type="button"
            onClick={() => onQuickFill("A")}
            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 transition"
          >
            All A
          </button>
          <button
            type="button"
            onClick={() => onQuickFill("")}
            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-700/50 text-slate-300 hover:bg-slate-700 transition"
            title="Clear all selected grades"
          >
            <RefreshCw className="w-3 h-3 inline mr-1" />
            Clear
          </button>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className={`border-b text-xs uppercase tracking-wider font-semibold ${
              isDarkMode ? "border-slate-800 text-slate-400 bg-slate-900/50" : "border-slate-200 text-slate-500 bg-slate-50"
            }`}>
              <th className="py-3.5 px-4 rounded-l-xl">Subject Code</th>
              <th className="py-3.5 px-4">Subject Title</th>
              <th className="py-3.5 px-4">Type</th>
              <th className="py-3.5 px-4 text-center">Auto Credits</th>
              <th className="py-3.5 px-4">Achieved Grade</th>
              <th className="py-3.5 px-4 text-right rounded-r-xl">C × GP</th>
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
                  className={`transition-colors ${
                    isDarkMode ? "hover:bg-slate-800/40" : "hover:bg-slate-50"
                  }`}
                >
                  {/* Code */}
                  <td className="py-4 px-4 font-mono text-xs font-semibold text-indigo-400">
                    {course.code || "—"}
                  </td>

                  {/* Name */}
                  <td className={`py-4 px-4 text-sm font-medium ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}>
                    {course.name}
                    {!course.includedInGPA && (
                      <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-gray-500/20 text-gray-400 border border-gray-500/30">
                        Non-GPA / Audit
                      </span>
                    )}
                  </td>

                  {/* Type */}
                  <td className="py-4 px-4">
                    <span className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border ${getTypeStyle(course.type)}`}>
                      {course.type || "Theory"}
                    </span>
                  </td>

                  {/* Auto Credits (READ ONLY) */}
                  <td className="py-4 px-4 text-center">
                    <div className="inline-flex items-center justify-center min-w-[40px] px-2.5 py-1 rounded-lg font-bold text-sm bg-indigo-500/10 text-indigo-300 border border-indigo-500/20" title="Official locked credit value">
                      {course.credits}
                    </div>
                  </td>

                  {/* Grade Dropdown */}
                  <td className="py-4 px-4">
                    <select
                      value={selectedGrade}
                      onChange={(e) => onGradeChange(idx, e.target.value)}
                      className={`w-full max-w-[140px] p-2.5 rounded-lg border font-semibold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                        selectedGrade
                          ? gradeInfo?.pass
                            ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-400"
                            : "bg-rose-500/10 border-rose-500/40 text-rose-400"
                          : isDarkMode
                            ? "bg-slate-900 border-slate-700 text-slate-300"
                            : "bg-slate-50 border-slate-300 text-slate-800"
                      }`}
                    >
                      <option value="">Select Grade</option>
                      {gradeScaleKeys.map((key) => {
                        const info = regulation.gradeScale[key];
                        return (
                          <option key={key} value={key} className={isDarkMode ? "bg-slate-900 text-white" : "bg-white text-slate-900"}>
                            {key} — ({info.point} Pts - {info.label})
                          </option>
                        );
                      })}
                    </select>
                  </td>

                  {/* C x GP Result */}
                  <td className="py-4 px-4 text-right font-mono font-bold text-sm">
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

      {/* Mobile Card List View */}
      <div className="md:hidden space-y-3">
        {courses.map((course, idx) => {
          const selectedGrade = course.grade || "";
          const gradeInfo = regulation.gradeScale[selectedGrade];
          const pointsEarned = gradeInfo ? course.credits * gradeInfo.point : 0;

          return (
            <div
              key={course.code || idx}
              className={`p-4 rounded-xl border space-y-3 ${
                isDarkMode ? "bg-slate-900/60 border-slate-800" : "bg-slate-50 border-slate-200"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-indigo-400">{course.code}</span>
                  <h4 className={`text-sm font-semibold mt-0.5 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                    {course.name}
                  </h4>
                </div>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${getTypeStyle(course.type)}`}>
                  {course.type}
                </span>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-700/30">
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-slate-400">Auto Credits:</span>
                  <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 font-bold text-xs">
                    {course.credits} Cr
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-xs text-slate-400">C × GP:</span>
                  <span className="font-mono font-bold text-sm text-indigo-400">
                    {selectedGrade ? pointsEarned : "—"}
                  </span>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Grade Achieved
                </label>
                <select
                  value={selectedGrade}
                  onChange={(e) => onGradeChange(idx, e.target.value)}
                  className={`w-full p-3 rounded-lg border font-bold text-sm ${
                    selectedGrade
                      ? gradeInfo?.pass
                        ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-400"
                        : "bg-rose-500/10 border-rose-500/40 text-rose-400"
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

    </div>
  );
}
