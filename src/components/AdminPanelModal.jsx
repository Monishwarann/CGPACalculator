import React, { useState } from "react";
import { X, Code, Upload, Download, CheckCircle2, AlertCircle, Database } from "lucide-react";

export default function AdminPanelModal({ isDarkMode, isOpen, onClose, currentCurriculum, activeRegulation, activeProgramme, activeSemesterNum, onImportCustomCurriculum }) {
  const [jsonText, setJsonText] = useState("");
  const [importStatus, setImportStatus] = useState(null);

  if (!isOpen) return null;

  const currentJSON = JSON.stringify(currentCurriculum, null, 2);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        setJsonText(JSON.stringify(parsed, null, 2));
        setImportStatus({ success: true, message: "Valid Curriculum JSON parsed successfully!" });
      } catch (err) {
        setImportStatus({ success: false, message: "Invalid JSON format in file." });
      }
    };
    reader.readAsText(file);
  };

  const handleApplyCustom = () => {
    try {
      const parsed = JSON.parse(jsonText || currentJSON);
      if (!parsed.courses || !Array.isArray(parsed.courses)) {
        setImportStatus({ success: false, message: "JSON must contain a 'courses' array." });
        return;
      }
      onImportCustomCurriculum(parsed);
      setImportStatus({ success: true, message: "Custom curriculum dataset applied to current semester!" });
    } catch (err) {
      setImportStatus({ success: false, message: "JSON syntax error." });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className={`w-full max-w-3xl rounded-2xl border shadow-2xl overflow-hidden flex flex-col max-h-[90vh] ${
        isDarkMode ? "bg-[#0d1422] border-slate-800 text-white" : "bg-white border-slate-200 text-slate-900"
      }`}>
        
        {/* Modal Header */}
        <div className={`p-5 border-b flex items-center justify-between ${
          isDarkMode ? "border-slate-800 bg-slate-900/60" : "border-slate-200 bg-slate-50"
        }`}>
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold">Curriculum Dataset Manager & Admin Utility</h3>
              <p className="text-xs text-slate-400">Inspect official dataset schema or import custom regulation JSON</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Active Context */}
          <div className={`p-4 rounded-xl border text-xs grid grid-cols-2 sm:grid-cols-4 gap-3 ${
            isDarkMode ? "bg-slate-900/80 border-slate-800" : "bg-slate-50 border-slate-200"
          }`}>
            <div>
              <span className="text-slate-400 block font-semibold">Regulation</span>
              <span className="font-bold text-indigo-400">{activeRegulation.regulation} ({activeRegulation.institution})</span>
            </div>
            <div>
              <span className="text-slate-400 block font-semibold">Programme</span>
              <span className="font-bold text-indigo-400">{activeProgramme.shortName}</span>
            </div>
            <div>
              <span className="text-slate-400 block font-semibold">Semester</span>
              <span className="font-bold text-indigo-400">Semester {activeSemesterNum}</span>
            </div>
            <div>
              <span className="text-slate-400 block font-semibold">Verified Status</span>
              <span className={`font-bold ${currentCurriculum?.verified ? "text-emerald-400" : "text-amber-400"}`}>
                {currentCurriculum?.verified ? "Verified Official" : "Unverified / Demo"}
              </span>
            </div>
          </div>

          {/* Upload & Action Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <label className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 hover:bg-indigo-500/20 cursor-pointer flex items-center justify-center space-x-2 transition">
              <Upload className="w-4 h-4" />
              <span>Upload Custom JSON File</span>
              <input type="file" accept=".json" onChange={handleFileUpload} className="hidden" />
            </label>

            <button
              onClick={() => {
                const blob = new Blob([currentJSON], { type: "application/json" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = `curriculum_${activeRegulation.id}_${activeProgramme.shortName}_Sem${activeSemesterNum}.json`;
                a.click();
              }}
              className={`w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-semibold border flex items-center justify-center space-x-2 transition ${
                isDarkMode ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700" : "bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200"
              }`}
            >
              <Download className="w-4 h-4" />
              <span>Export Current JSON</span>
            </button>
          </div>

          {/* Status Message */}
          {importStatus && (
            <div className={`p-3 rounded-xl border text-xs flex items-center space-x-2 ${
              importStatus.success ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" : "bg-rose-500/10 border-rose-500/30 text-rose-400"
            }`}>
              {importStatus.success ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
              <span>{importStatus.message}</span>
            </div>
          )}

          {/* Editor */}
          <div>
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
              Curriculum Data JSON Editor
            </label>
            <textarea
              rows={12}
              value={jsonText || currentJSON}
              onChange={(e) => setJsonText(e.target.value)}
              className={`w-full p-4 rounded-xl border font-mono text-xs leading-relaxed transition focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                isDarkMode ? "bg-slate-950 border-slate-800 text-indigo-300" : "bg-slate-900 border-slate-700 text-indigo-200"
              }`}
            />
          </div>

        </div>

        {/* Modal Footer */}
        <div className={`p-4 px-6 border-t flex items-center justify-end space-x-3 ${
          isDarkMode ? "border-slate-800 bg-slate-900/60" : "border-slate-200 bg-slate-50"
        }`}>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition"
          >
            Cancel
          </button>
          <button
            onClick={handleApplyCustom}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-500 transition shadow-md shadow-indigo-600/20"
          >
            Apply Dataset Changes
          </button>
        </div>

      </div>
    </div>
  );
}
