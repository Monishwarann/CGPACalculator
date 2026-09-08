import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";
import { TrendingUp } from "lucide-react";

export default function PerformanceChart({ isDarkMode, semesterHistory, currentSemesterResult, currentSemesterNum }) {
  // Combine history and current semester for chart
  const chartData = [];

  if (semesterHistory && semesterHistory.length > 0) {
    let cumPoints = 0;
    let cumCredits = 0;

    semesterHistory.forEach((sem) => {
      const gpa = Number(sem.gpa) || 0;
      const credits = Number(sem.credits) || 0;
      cumPoints += gpa * credits;
      cumCredits += credits;
      const cgpa = cumCredits > 0 ? cumPoints / cumCredits : 0;

      chartData.push({
        name: sem.semesterLabel || `Sem ${sem.semesterNumber}`,
        GPA: Number(gpa.toFixed(2)),
        CGPA: Number(cgpa.toFixed(2)),
        Credits: credits
      });
    });
  } else if (currentSemesterResult && currentSemesterResult.gpa > 0) {
    chartData.push({
      name: `Sem ${currentSemesterNum}`,
      GPA: Number(currentSemesterResult.gpa.toFixed(2)),
      CGPA: Number(currentSemesterResult.gpa.toFixed(2)),
      Credits: currentSemesterResult.totalCreditsRegistered
    });
  }

  if (chartData.length === 0) return null;

  return (
    <div className={`p-6 rounded-2xl border transition-all ${
      isDarkMode
        ? "bg-[#0d1422] border-slate-800/80 shadow-xl shadow-black/40"
        : "bg-white border-slate-200 shadow-xl shadow-slate-200/50"
    }`}>
      <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-1">
        <TrendingUp className="w-4 h-4" />
        <span>Academic Trajectory Chart</span>
      </div>
      <h3 className={`text-lg font-bold mb-4 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
        Semester GPA & CGPA Performance Trend
      </h3>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? "#1e293b" : "#e2e8f0"} />
            <XAxis dataKey="name" stroke={isDarkMode ? "#94a3b8" : "#64748b"} fontSize={12} />
            <YAxis domain={[0, 10]} ticks={[0, 2, 4, 6, 8, 10]} stroke={isDarkMode ? "#94a3b8" : "#64748b"} fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: isDarkMode ? "#0f172a" : "#ffffff",
                borderColor: isDarkMode ? "#334155" : "#cbd5e1",
                borderRadius: "0.75rem",
                color: isDarkMode ? "#f8fafc" : "#0f172a"
              }}
            />
            <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "10px" }} />
            <Line type="monotone" dataKey="GPA" stroke="#818cf8" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 7 }} />
            <Line type="monotone" dataKey="CGPA" stroke="#a78bfa" strokeWidth={3} strokeDasharray="5 5" dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
