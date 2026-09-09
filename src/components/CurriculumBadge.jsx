import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, AlertTriangle, Database, Layers } from "lucide-react";

export default function CurriculumBadge({ isDarkMode, regulation, programme, semesterNum, curriculum }) {
  const isVerified = curriculum && curriculum.verified;
  const totalCourses = curriculum?.courses?.length || 0;
  const totalCredits = curriculum?.courses?.reduce((acc, c) => acc + (Number(c.credits) || 0), 0) || 0;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs transition-all duration-300 ${
        isVerified
          ? isDarkMode
            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300 backdrop-blur-md shadow-lg shadow-emerald-500/5"
            : "bg-emerald-50/90 border-emerald-200 text-emerald-950 shadow-sm"
          : isDarkMode
            ? "bg-amber-500/10 border-amber-500/30 text-amber-300 backdrop-blur-md shadow-lg shadow-amber-500/5"
            : "bg-amber-50/90 border-amber-200 text-amber-950 shadow-sm"
      }`}
    >
      <div className="flex items-center space-x-3">
        {/* Pulsing indicator dot */}
        <div className="relative flex items-center justify-center shrink-0">
          <span className={`animate-ping absolute inline-flex h-3 w-3 rounded-full opacity-75 ${
            isVerified ? "bg-emerald-400" : "bg-amber-400"
          }`}></span>
          {isVerified ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 relative z-10" />
          ) : (
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 relative z-10" />
          )}
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-extrabold tracking-tight">
              {isVerified ? "Verified Curriculum Spec" : "Dataset Draft Specification"}
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-white/10 border border-current opacity-80">
              {regulation.institution} • {regulation.regulation}
            </span>
          </div>
          <p className="opacity-80 mt-1 font-medium flex items-center space-x-2">
            <span>{programme.name} — Semester {semesterNum}</span>
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-3 self-end sm:self-auto shrink-0 font-bold">
        <div className="flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-slate-900/40 border border-white/10 text-indigo-300">
          <Layers className="w-3.5 h-3.5" />
          <span>{totalCourses} Subjects ({totalCredits} Cr)</span>
        </div>
        <div className="hidden lg:flex items-center space-x-1.5 opacity-70">
          <Database className="w-3.5 h-3.5" />
          <span className="truncate max-w-[180px]">{regulation.source || "Academic Regulation Dataset"}</span>
        </div>
      </div>
    </motion.div>
  );
}

