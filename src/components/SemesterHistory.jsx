import React, { useState } from "react";
import { History, Plus, Trash2, Edit2, Save, FileSpreadsheet, Check } from "lucide-react";

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
    <div className={`p-6 rounded-2xl border transition-all ${
      isDarkMode
        ? "bg-[#0d1422] border-slate-800/80 shadow-xl shadow-black/40"
        : "bg-white border-slate-200 shadow-xl shadow-slate-200/50"
    }`}>
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-indigo-400">
            <History className="w-4 h-4" />
            <span>Semester History & CGPA Accumulator</span>
          </div>
          <h3 className={`text-lg font-bold mt-1 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
            Semester Records & Credit History
          </h3>
          <p className="text-xs text-slate-400">
            CGPA is computed by credit-weighting all saved semesters. Save current or add past semesters.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={onSaveCurrentSemester}
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-500 transition shadow-md shadow-indigo-600/20"
          >
            + Save Current Semester
          </button>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition ${
              isDarkMode ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700" : "bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200"
            }`}
          >
            {showAddForm ? "Cancel" : "+ Add Past Semester"}
          </button>
        </div>
      </div>

      {/* Manual Semester Add Form */}
      {showAddForm && (
        <form onSubmit={handleSubmitManual} className={`p-4 rounded-xl border mb-6 grid grid-cols-1 sm:grid-cols-4 gap-3 ${
          isDarkMode ? "bg-slate-900/80 border-slate-700" : "bg-slate-50 border-slate-300"
        }`}>
          <div>
            <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">Semester</label>
            <select
              value={manualSemNum}
              onChange={(e) => setManualSemNum(e.target.value)}
              className={`w-full p-2.5 rounded-lg border font-semibold text-xs ${
                isDarkMode ? "bg-slate-800 border-slate-600 text-white" : "bg-white border-slate-300 text-slate-900"
              }`}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>Semester {n}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">Semester GPA</label>
            <input
              type="number"
              step="0.01"
              min="0"
              max="10"
              placeholder="e.g. 8.42"
              required
              value={manualGPA}
              onChange={(e) => setManualGPA(e.target.value)}
              className={`w-full p-2.5 rounded-lg border font-semibold text-xs ${
                isDarkMode ? "bg-slate-800 border-slate-600 text-white" : "bg-white border-slate-300 text-slate-900"
              }`}
            />
          </div>

          <div>
            <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">Semester Credits</label>
            <input
              type="number"
              step="0.5"
              min="1"
              max="40"
              placeholder="e.g. 23"
              required
              value={manualCredits}
              onChange={(e) => setManualCredits(e.target.value)}
              className={`w-full p-2.5 rounded-lg border font-semibold text-xs ${
                isDarkMode ? "bg-slate-800 border-slate-600 text-white" : "bg-white border-slate-300 text-slate-900"
              }`}
            />
          </div>

          <div className="flex items-end">
            <button
              type="submit"
              className="w-full p-2.5 rounded-lg bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500 transition"
            >
              Add Record
            </button>
          </div>
        </form>
      )}

      {/* History Table */}
      {semesterHistory.length === 0 ? (
        <div className={`p-8 text-center rounded-xl border border-dashed ${
          isDarkMode ? "border-slate-800 text-slate-500" : "border-slate-300 text-slate-400"
        }`}>
          <p className="text-sm font-medium">No saved semester history yet.</p>
          <p className="text-xs mt-1">Select grades above and click "Save Semester Result" to start tracking CGPA across semesters.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className={`border-b uppercase tracking-wider font-semibold ${
                isDarkMode ? "border-slate-800 text-slate-400" : "border-slate-200 text-slate-500"
              }`}>
                <th className="py-3 px-3">Semester</th>
                <th className="py-3 px-3 text-center">GPA</th>
                <th className="py-3 px-3 text-center">Included Credits</th>
                <th className="py-3 px-3 text-center">Points (GPA × Credits)</th>
                <th className="py-3 px-3 text-center">Arrears</th>
                <th className="py-3 px-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/40 font-mono">
              {semesterHistory.map((sem, idx) => (
                <tr key={idx} className={isDarkMode ? "hover:bg-slate-800/30 text-slate-200" : "hover:bg-slate-50 text-slate-800"}>
                  <td className="py-3 px-3 font-sans font-bold text-indigo-400">
                    {sem.semesterLabel || `Semester ${sem.semesterNumber}`}
                  </td>
                  <td className="py-3 px-3 text-center font-bold text-indigo-400">
                    {Number(sem.gpa).toFixed(2)}
                  </td>
                  <td className="py-3 px-3 text-center font-bold">
                    {sem.credits} Cr
                  </td>
                  <td className="py-3 px-3 text-center text-slate-400">
                    {(Number(sem.gpa) * Number(sem.credits)).toFixed(1)}
                  </td>
                  <td className="py-3 px-3 text-center">
                    {sem.failedCount > 0 ? (
                      <span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 font-bold">{sem.failedCount} Arrears</span>
                    ) : (
                      <span className="text-emerald-400 font-bold">0</span>
                    )}
                  </td>
                  <td className="py-3 px-3 text-right">
                    <button
                      onClick={() => onRemoveSemester(idx)}
                      className="p-1 text-slate-400 hover:text-rose-400 transition"
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
                className="text-xs text-rose-400 hover:underline flex items-center space-x-1"
              >
                <Trash2 className="w-3 h-3" />
                <span>Clear All Saved History</span>
              </button>
            </div>
          )}
        </div>
      )}

    </div>
  );
}
