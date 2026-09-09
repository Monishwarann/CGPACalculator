import React from "react";
import { motion } from "framer-motion";
import { REGULATIONS, PROGRAMMES, SEMESTERS } from "../data/regulations";
import { Building2, BookOpen, Calendar, Check, Sparkles, ChevronDown } from "lucide-react";

export default function AcademicSelector({
  isDarkMode,
  selectedRegulationId,
  setSelectedRegulationId,
  selectedProgrammeId,
  setSelectedProgrammeId,
  selectedSemesterNum,
  setSelectedSemesterNum
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 ${
        isDarkMode
          ? "bg-[#0c1322]/80 backdrop-blur-xl border-slate-800/90 shadow-2xl shadow-black/50"
          : "bg-white/90 backdrop-blur-xl border-slate-200/90 shadow-xl shadow-indigo-500/5"
      }`}
    >
      
      {/* Step 1: Institution & Regulation Selection Cards */}
      <div className="mb-7">
        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
            <Building2 className="w-4 h-4" />
            <span>Step 1: Select Institution & Regulation</span>
          </label>
          <span className="text-[11px] font-semibold text-slate-400">
            Official Rules Built-In
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {Object.values(REGULATIONS).map((reg) => {
            const isSelected = selectedRegulationId === reg.id;
            return (
              <motion.button
                key={reg.id}
                type="button"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedRegulationId(reg.id)}
                className={`relative p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isSelected
                    ? isDarkMode
                      ? "bg-gradient-to-br from-indigo-950/80 via-indigo-900/40 to-slate-900 border-indigo-500/80 ring-2 ring-indigo-500/40 text-white shadow-lg shadow-indigo-500/15"
                      : "bg-gradient-to-br from-indigo-50/90 via-white to-purple-50/50 border-indigo-500 ring-2 ring-indigo-500/20 text-slate-900 shadow-md"
                    : isDarkMode
                      ? "bg-slate-900/40 border-slate-800/80 text-slate-300 hover:border-slate-700 hover:bg-slate-800/50"
                      : "bg-slate-50/70 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100/70"
                }`}
              >
                {/* Active Glow Accent Background */}
                {isSelected && (
                  <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl pointer-events-none" />
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      reg.isAutonomous
                        ? "bg-amber-500/15 text-amber-400 border border-amber-500/30 shadow-sm"
                        : "bg-blue-500/15 text-blue-400 border border-blue-500/30 shadow-sm"
                    }`}>
                      {reg.institution}
                    </span>
                    {isSelected && (
                      <div className="w-5 h-5 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-md shadow-indigo-500/40">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    )}
                  </div>

                  <h3 className="text-base font-extrabold tracking-tight mb-1">{reg.regulation}</h3>
                  <p className="text-xs text-slate-400 font-medium line-clamp-1">{reg.institutionFullName}</p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-slate-700/20 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                  <span className="flex items-center space-x-1">
                    <Sparkles className="w-3 h-3 text-indigo-400" />
                    <span>Max Point: {reg.maxGradePoint}</span>
                  </span>
                  <span className="text-emerald-400">Verified Specs</span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Step 2 & 3: Controls Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Step 2: Branch Selector */}
        <div className="lg:col-span-6">
          <label className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2.5">
            <BookOpen className="w-4 h-4" />
            <span>Step 2: Select Programme / Branch</span>
          </label>

          <div className="relative">
            <select
              value={selectedProgrammeId}
              onChange={(e) => setSelectedProgrammeId(e.target.value)}
              className={`w-full p-4 pr-10 rounded-2xl border font-bold text-sm transition-all appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500/50 cursor-pointer ${
                isDarkMode
                  ? "bg-slate-900/90 border-slate-700/80 text-white shadow-inner"
                  : "bg-slate-50 border-slate-300 text-slate-900 shadow-sm"
              }`}
            >
              {PROGRAMMES.map((prog) => (
                <option key={prog.id} value={prog.id} className={isDarkMode ? "bg-slate-900 text-white" : "bg-white text-slate-900"}>
                  {prog.name} ({prog.shortName}) — {prog.degree}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Step 3: Semester Selection Pills */}
        <div className="lg:col-span-6">
          <label className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2.5">
            <Calendar className="w-4 h-4" />
            <span>Step 3: Select Semester</span>
          </label>

          <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5">
            {SEMESTERS.map((sem) => {
              const isSelected = selectedSemesterNum === sem.number;
              return (
                <motion.button
                  key={sem.number}
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedSemesterNum(sem.number)}
                  className={`py-3 px-1 rounded-xl text-xs font-extrabold transition-all duration-200 ${
                    isSelected
                      ? "bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30 ring-2 ring-indigo-400/50"
                      : isDarkMode
                        ? "bg-slate-900/80 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white"
                        : "bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  Sem {sem.roman}
                </motion.button>
              );
            })}
          </div>
        </div>

      </div>

    </motion.div>
  );
}

