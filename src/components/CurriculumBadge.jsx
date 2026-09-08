import React from "react";
import { CheckCircle2, AlertTriangle, Info, Database } from "lucide-react";

export default function CurriculumBadge({ isDarkMode, regulation, programme, semesterNum, curriculum }) {
  const isVerified = curriculum && curriculum.verified;
  const totalCourses = curriculum?.courses?.length || 0;
  const totalCredits = curriculum?.courses?.reduce((acc, c) => acc + (Number(c.credits) || 0), 0) || 0;

  return (
    <div className={`p-4 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs ${
      isVerified
        ? isDarkMode
          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
          : "bg-emerald-50 border-emerald-200 text-emerald-900"
        : isDarkMode
          ? "bg-amber-500/10 border-amber-500/30 text-amber-300"
          : "bg-amber-50 border-amber-200 text-amber-900"
    }`}>
      <div className="flex items-center space-x-2.5">
        {isVerified ? (
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
        ) : (
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
        )}
        <div>
          <div className="flex items-center space-x-2">
            <span className="font-bold">
              {isVerified ? "Verified Official Dataset" : "Dataset Not Verified (Demo Mode)"}
            </span>
            <span className="opacity-75">•</span>
            <span>{regulation.institution} {regulation.regulation}</span>
          </div>
          <p className="opacity-80 mt-0.5">
            {programme.name} — Semester {semesterNum} ({totalCourses} Subjects, {totalCredits} Total Credits)
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-2 self-end sm:self-auto shrink-0 font-medium">
        <Database className="w-3.5 h-3.5 opacity-70" />
        <span>Source: {regulation.source || "Academic Regulation Dataset"}</span>
      </div>
    </div>
  );
}
