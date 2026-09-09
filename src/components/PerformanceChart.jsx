import React from "react";
import { motion } from "framer-motion";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";
import { TrendingUp, Sparkles } from "lucide-react";

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
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.45 }}
      className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 ${
        isDarkMode
          ? "bg-[#0c1322]/80 backdrop-blur-xl border-slate-800/90 shadow-2xl shadow-black/50"
          : "bg-white/90 backdrop-blur-xl border-slate-200/90 shadow-xl shadow-indigo-500/5"
      }`}
    >
      <div className="flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider text-indigo-400 mb-1">
        <TrendingUp className="w-4 h-4" />
        <span>Academic Trajectory Analytics</span>
      </div>
      <h3 className={`text-xl font-extrabold tracking-tight mb-5 ${isDarkMode ? "text-white" : "text-slate-900"}`}>
        Semester GPA & Cumulative CGPA Trend
      </h3>

      <div className="h-72 w-full pt-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? "rgba(51, 65, 85, 0.4)" : "#e2e8f0"} />
            <XAxis dataKey="name" stroke={isDarkMode ? "#94a3b8" : "#64748b"} fontSize={12} fontWeight={600} />
            <YAxis domain={[0, 10]} ticks={[0, 2, 4, 6, 8, 10]} stroke={isDarkMode ? "#94a3b8" : "#64748b"} fontSize={12} fontWeight={600} />
            <Tooltip
              contentStyle={{
                backgroundColor: isDarkMode ? "#0f172a" : "#ffffff",
                borderColor: isDarkMode ? "#334155" : "#cbd5e1",
                borderRadius: "1rem",
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
                color: isDarkMode ? "#f8fafc" : "#0f172a",
                fontWeight: 700
              }}
            />
            <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "12px", fontWeight: 700 }} />
            <Line type="monotone" dataKey="GPA" stroke="#818cf8" strokeWidth={3.5} dot={{ r: 6, fill: "#818cf8", strokeWidth: 2, stroke: "#ffffff" }} activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="CGPA" stroke="#c084fc" strokeWidth={3.5} strokeDasharray="6 6" dot={{ r: 5, fill: "#c084fc", strokeWidth: 2, stroke: "#ffffff" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

