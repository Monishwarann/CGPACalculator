import React from "react";
import { REGULATIONS, PROGRAMMES, SEMESTERS } from "../data/regulations";
import { Building2, BookOpen, Calendar, Check } from "lucide-react";

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
    <div className={`p-6 rounded-2xl border transition-all ${
      isDarkMode
        ? "bg-[#0d1422] border-slate-800/80 shadow-xl shadow-black/40"
        : "bg-white border-slate-200 shadow-xl shadow-slate-200/50"
    }`}>
      
      {/* 1. Institution & Regulation Cards */}
      <div className="mb-6">
        <label className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-3">
          <Building2 className="w-4 h-4" />
          <span>Step 1: Select Institution & Regulation</span>
        </label>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {Object.values(REGULATIONS).map((reg) => {
            const isSelected = selectedRegulationId === reg.id;
            return (
              <button
                key={reg.id}
                type="button"
                onClick={() => setSelectedRegulationId(reg.id)}
                className={`relative p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? isDarkMode
                      ? "bg-indigo-600/15 border-indigo-500 ring-2 ring-indigo-500/50 text-white"
                      : "bg-indigo-50 border-indigo-600 ring-2 ring-indigo-600/30 text-indigo-950"
                    : isDarkMode
                      ? "bg-slate-900/50 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/60"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      reg.isAutonomous
                        ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    }`}>
                      {reg.institution}
                    </span>
                    {isSelected && (
                      <div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-white">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-base font-bold tracking-tight mb-1">{reg.regulation}</h3>
                  <p className="text-xs text-slate-400 line-clamp-1">{reg.institutionFullName}</p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-700/30 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Grade Scale: O=10, A+=9</span>
                  <span>{reg.verified ? "Verified" : "Draft"}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Programme & Semester Controls Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Programme Dropdown */}
        <div className="lg:col-span-6">
          <label className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            <BookOpen className="w-4 h-4" />
            <span>Step 2: Select Programme / Branch</span>
          </label>

          <select
            value={selectedProgrammeId}
            onChange={(e) => setSelectedProgrammeId(e.target.value)}
            className={`w-full p-3.5 rounded-xl border font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              isDarkMode
                ? "bg-slate-900 border-slate-700 text-white"
                : "bg-slate-50 border-slate-300 text-slate-900"
            }`}
          >
            {PROGRAMMES.map((prog) => (
              <option key={prog.id} value={prog.id}>
                {prog.name} ({prog.shortName})
              </option>
            ))}
          </select>
        </div>

        {/* Semester Selection */}
        <div className="lg:col-span-6">
          <label className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
            <Calendar className="w-4 h-4" />
            <span>Step 3: Select Semester</span>
          </label>

          <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5">
            {SEMESTERS.map((sem) => {
              const isSelected = selectedSemesterNum === sem.number;
              return (
                <button
                  key={sem.number}
                  type="button"
                  onClick={() => setSelectedSemesterNum(sem.number)}
                  className={`py-2 px-1 rounded-lg text-xs font-bold transition-all ${
                    isSelected
                      ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/20 ring-2 ring-indigo-400"
                      : isDarkMode
                        ? "bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800"
                        : "bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  Sem {sem.roman}
                </button>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}
