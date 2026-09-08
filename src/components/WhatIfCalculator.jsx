import React, { useState } from "react";
import { Sparkles, HelpCircle, ArrowRight } from "lucide-react";
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
    <div className={`p-6 rounded-2xl border transition-all ${
      isDarkMode
        ? "bg-[#0d1422] border-slate-800/80 shadow-xl shadow-black/40"
        : "bg-white border-slate-200 shadow-xl shadow-slate-200/50"
    }`}>
      <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-1">
        <Sparkles className="w-4 h-4" />
        <span>Scenario Simulator</span>
      </div>
      <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
        "What If I Get..." Grade Simulator
      </h3>
      <p className="text-xs text-slate-400 mb-6">
        Test different grade combinations to see how your GPA & CGPA immediately change before final marks are published.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Course Grade Simulator Controls */}
        <div className="lg:col-span-8 space-y-3">
          {currentCourses.map((course, idx) => {
            const currentGrade = scenarioGrades[idx] !== undefined ? scenarioGrades[idx] : (course.grade || "");

            return (
              <div
                key={course.code || idx}
                className={`p-3 rounded-xl border flex items-center justify-between gap-3 text-xs ${
                  isDarkMode ? "bg-slate-900/60 border-slate-800" : "bg-slate-50 border-slate-200"
                }`}
              >
                <div className="truncate">
                  <span className="font-mono font-bold text-indigo-400 mr-2">{course.code}</span>
                  <span className={isDarkMode ? "text-slate-200 font-medium" : "text-slate-800 font-medium"}>
                    {course.name}
                  </span>
                  <span className="ml-2 text-[10px] text-slate-400">({course.credits} Cr)</span>
                </div>

                <select
                  value={currentGrade}
                  onChange={(e) => handleScenarioGradeChange(idx, e.target.value)}
                  className={`p-2 rounded-lg border font-bold text-xs shrink-0 ${
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
          <div className={`p-5 rounded-2xl border text-center space-y-4 ${
            isDarkMode
              ? "bg-gradient-to-b from-indigo-950/40 to-slate-900 border-indigo-500/30"
              : "bg-gradient-to-b from-indigo-50 to-white border-indigo-200 shadow-md"
          }`}>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Projected GPA</span>
              <div className="text-4xl font-extrabold font-mono text-indigo-400 mt-1">
                {simulatedGPA.gpaFormatted}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-700/30">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-400">Projected CGPA</span>
              <div className="text-3xl font-extrabold font-mono text-violet-400 mt-1">
                {simulatedCGPA.cgpaFormatted}
              </div>
            </div>

            <div className="text-[11px] text-slate-400 pt-2">
              Tested with {simulatedGPA.passedCoursesCount} passed & {simulatedGPA.failedCoursesCount} backlog(s).
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
