import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, HelpCircle, ArrowRight, Zap } from "lucide-react";
import { calculateGPA } from "../engine/gpaCalculator";
import { calculateCGPA } from "../engine/cgpaCalculator";

export default function WhatIfCalculator({ isDarkMode, currentCourses, regulation, semesterHistory, currentSemNum }) {
  const [scenarioGrades, setScenarioGrades] = useState({});

  if (!currentCourses || currentCourses.length === 0) return null;

  const handleScenarioGradeChange = (idx, grade) => {
    setScenarioGrades((prev) => ({
      ...prev,
      [idx]: grade
    }));
  };

  const simulatedCourses = currentCourses.map((c, idx) => ({
    ...c,
    grade: scenarioGrades[idx] !== undefined ? scenarioGrades[idx] : c.grade
  }));

  const simulatedGPA = calculateGPA(simulatedCourses, regulation);

  // Compute simulated CGPA
  const simHistory = semesterHistory.filter(s => s.semesterNumber !== currentSemNum).concat([
    {
      semesterNumber: currentSemNum,
      gpa: simulatedGPA.gpa,
      credits: simulatedGPA.totalCreditsRegistered,
      failedCount: simulatedGPA.failedCoursesCount
    }
  ]);
  const simulatedCGPA = calculateCGPA(simHistory, regulation);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 ${
        isDarkMode
          ? "bg-[#0c1322]/80 backdrop-blur-xl border-slate-800/90 shadow-2xl shadow-black/50"
          : "bg-white/90 backdrop-blur-xl border-slate-200/90 shadow-xl shadow-indigo-500/5"
      }`}
    >
      <div className="flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider text-indigo-400 mb-1">
        <Sparkles className="w-4 h-4" />
        <span>Interactive Grade Simulator</span>
      </div>
      <h3 className={`text-xl font-extrabold tracking-tight mb-2 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
        "What If I Get..." Grade Scenario Simulator
      </h3>
      <p className="text-xs font-medium text-slate-400 mb-6">
        Test hypothetical grade outcomes to see how your GPA and CGPA immediately react before official results arrive.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Course Grade Simulator Rows */}
        <div className="lg:col-span-8 space-y-3">
          {currentCourses.map((course, idx) => {
            const currentGrade = scenarioGrades[idx] !== undefined ? scenarioGrades[idx] : (course.grade || "");

            return (
              <div
                key={course.code || idx}
                className={`p-3.5 rounded-2xl border flex items-center justify-between gap-3 text-xs transition-all ${
                  isDarkMode ? "bg-slate-900/60 border-slate-800/80 hover:border-slate-700" : "bg-slate-50 border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="truncate flex items-center space-x-2">
                  <span className="font-mono font-extrabold text-indigo-400">{course.code}</span>
                  <span className={`font-bold truncate ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}>
                    {course.name}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 px-2 py-0.5 rounded-full bg-slate-800/40">
                    {course.credits} Cr
                  </span>
                </div>

                <select
                  value={currentGrade}
                  onChange={(e) => handleScenarioGradeChange(idx, e.target.value)}
                  className={`p-2.5 rounded-xl border font-extrabold text-xs shrink-0 cursor-pointer ${
                    isDarkMode ? "bg-slate-800 border-slate-700 text-white" : "bg-white border-slate-300 text-slate-900"
                  }`}
                >
                  <option value="">Grade</option>
                  {Object.keys(regulation.gradeScale).map((k) => (
                    <option key={k} value={k}>{k} ({regulation.gradeScale[k].point} Pts)</option>
                  ))}
                </select>
              </div>
            );
          })}
        </div>

        {/* Real-Time Impact Metric Card */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div className={`p-6 rounded-3xl border text-center space-y-5 relative overflow-hidden ${
            isDarkMode
              ? "bg-gradient-to-b from-indigo-950/50 via-slate-900 to-[#0c1322] border-indigo-500/40 shadow-xl"
              : "bg-gradient-to-b from-indigo-50 via-white to-purple-50/50 border-indigo-200 shadow-md"
          }`}>
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl pointer-events-none" />

            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-400">Projected GPA</span>
              <div className="text-4xl sm:text-5xl font-black font-mono text-indigo-400 mt-1">
                {simulatedGPA.gpaFormatted}
              </div>
            </div>

            <div className="pt-4 border-t border-indigo-500/20">
              <span className="text-xs font-extrabold uppercase tracking-wider text-violet-400">Projected CGPA</span>
              <div className="text-3xl sm:text-4xl font-black font-mono text-violet-400 mt-1">
                {simulatedCGPA.cgpaFormatted}
              </div>
            </div>

            <div className="text-[11px] font-bold text-slate-400 pt-2">
              {simulatedGPA.passedCoursesCount} passed & {simulatedGPA.failedCoursesCount} backlog(s) simulated.
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

