import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { History, Plus, Trash2, Edit2, Save, FileSpreadsheet, Check, Sparkles } from "lucide-react";

export default function SemesterHistory({
  isDarkMode,
  semesterHistory,
  onSaveCurrentSemester,
  onAddManualSemester,
  onRemoveSemester,
  onClearAllHistory
}) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [manualSemNum, setManualSemNum] = useState(1);
  const [manualGPA, setManualGPA] = useState("");
  const [manualCredits, setManualCredits] = useState("");
  const [manualArrears, setManualArrears] = useState("0");

  const handleSubmitManual = (e) => {
    e.preventDefault();
    if (!manualGPA || !manualCredits) return;

    onAddManualSemester({
      semesterNumber: Number(manualSemNum),
      semesterLabel: `Semester ${manualSemNum}`,
      gpa: Number(manualGPA),
      credits: Number(manualCredits),
      failedCount: Number(manualArrears) || 0
    });

    setManualGPA("");
    setManualCredits("");
    setShowAddForm(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 ${
        isDarkMode
          ? "bg-[#0c1322]/80 backdrop-blur-xl border-slate-800/90 shadow-2xl shadow-black/50"
          : "bg-white/90 backdrop-blur-xl border-slate-200/90 shadow-xl shadow-indigo-500/5"
      }`}
    >
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider text-indigo-400">
            <History className="w-4 h-4" />
            <span>Semester History & CGPA Accumulator</span>
          </div>
          <h3 className={`text-xl font-extrabold tracking-tight mt-1 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
            Semester Records & CGPA History
          </h3>
          <p className="text-xs font-medium text-slate-400">
            Cumulative CGPA is calculated by credit-weighting all saved semester records.
          </p>
        </div>

        <div className="flex items-center space-x-2.5 self-stretch sm:self-auto">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onSaveCurrentSemester}
            className="px-4 py-2.5 rounded-2xl text-xs font-extrabold bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition flex items-center space-x-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Save Current Sem</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setShowAddForm(!showAddForm)}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold border transition ${
              isDarkMode 
                ? "bg-slate-800/80 border-slate-700/80 text-slate-200 hover:bg-slate-700/80" 
                : "bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200"
            }`}
          >
            {showAddForm ? "Cancel" : "+ Manual Record"}
          </motion.button>
        </div>
      </div>

      {/* Manual Semester Add Form */}
      <AnimatePresence>
        {showAddForm && (
          <motion.form 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            onSubmit={handleSubmitManual} 
            className={`p-5 rounded-2xl border mb-6 grid grid-cols-1 sm:grid-cols-4 gap-3.5 ${
              isDarkMode ? "bg-slate-900/90 border-slate-700/80" : "bg-slate-50 border-slate-300"
            }`}
          >
            <div>
              <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1.5">Semester</label>
              <select
                value={manualSemNum}
                onChange={(e) => setManualSemNum(e.target.value)}
                className={`w-full p-3 rounded-xl border font-bold text-xs ${
                  isDarkMode ? "bg-slate-800 border-slate-600 text-white" : "bg-white border-slate-300 text-slate-900"
                }`}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>Semester {n}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1.5">Semester GPA</label>
              <input
                type="number"
                step="0.01"
                min="0"
                max="10"
                placeholder="e.g. 8.42"
                required
                value={manualGPA}
                onChange={(e) => setManualGPA(e.target.value)}
                className={`w-full p-3 rounded-xl border font-bold text-xs ${
                  isDarkMode ? "bg-slate-800 border-slate-600 text-white" : "bg-white border-slate-300 text-slate-900"
                }`}
              />
            </div>

            <div>
              <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block mb-1.5">Semester Credits</label>
              <input
                type="number"
                step="0.5"
                min="1"
                max="40"
                placeholder="e.g. 23"
                required
                value={manualCredits}
                onChange={(e) => setManualCredits(e.target.value)}
                className={`w-full p-3 rounded-xl border font-bold text-xs ${
                  isDarkMode ? "bg-slate-800 border-slate-600 text-white" : "bg-white border-slate-300 text-slate-900"
                }`}
              />
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full p-3 rounded-xl bg-emerald-600 text-white font-extrabold text-xs hover:bg-emerald-500 transition shadow-md shadow-emerald-600/20"
              >
                Save Manual Record
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      {/* History Table */}
      {semesterHistory.length === 0 ? (
        <div className={`p-8 text-center rounded-2xl border border-dashed ${
          isDarkMode ? "border-slate-800/80 text-slate-500" : "border-slate-300 text-slate-400"
        }`}>
          <p className="text-sm font-bold">No saved semester history yet.</p>
          <p className="text-xs mt-1 text-slate-400 font-medium">Select grades above and click "Save Semester Result" to build your cumulative CGPA history.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className={`border-b uppercase tracking-wider text-[11px] font-extrabold ${
                isDarkMode ? "border-slate-800/80 text-slate-400 bg-slate-900/60" : "border-slate-200 text-slate-500 bg-slate-50"
              }`}>
                <th className="py-3.5 px-4 rounded-l-xl">Semester</th>
                <th className="py-3.5 px-4 text-center">Semester GPA</th>
                <th className="py-3.5 px-4 text-center">Credits (C)</th>
                <th className="py-3.5 px-4 text-center">Points (GPA × C)</th>
                <th className="py-3.5 px-4 text-center">Arrears</th>
                <th className="py-3.5 px-4 text-right rounded-r-xl">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/40 font-mono">
              {semesterHistory.map((sem, idx) => (
                <tr key={idx} className={`transition-all ${isDarkMode ? "hover:bg-slate-800/30 text-slate-200" : "hover:bg-slate-50/80 text-slate-800"}`}>
                  <td className="py-3.5 px-4 font-sans font-extrabold text-indigo-400">
                    {sem.semesterLabel || `Semester ${sem.semesterNumber}`}
                  </td>
                  <td className="py-3.5 px-4 text-center font-extrabold text-indigo-400 text-sm">
                    {Number(sem.gpa).toFixed(2)}
                  </td>
                  <td className="py-3.5 px-4 text-center font-extrabold">
                    {sem.credits} Cr
                  </td>
                  <td className="py-3.5 px-4 text-center text-slate-400 font-extrabold">
                    {(Number(sem.gpa) * Number(sem.credits)).toFixed(1)}
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    {sem.failedCount > 0 ? (
                      <span className="px-2.5 py-0.5 rounded-lg bg-rose-500/15 text-rose-400 font-extrabold border border-rose-500/30">{sem.failedCount} Arrear(s)</span>
                    ) : (
                      <span className="text-emerald-400 font-extrabold">0</span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => onRemoveSemester(idx)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition"
                      title="Delete Semester Record"
                    >
                      <Trash2 className="w-4 h-4 inline" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {semesterHistory.length > 0 && (
            <div className="mt-4 flex justify-end">
              <button
                onClick={onClearAllHistory}
                className="text-xs text-rose-400 hover:underline flex items-center space-x-1 font-bold"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear All History</span>
              </button>
            </div>
          )}
        </div>
      )}

    </motion.div>
  );
}

