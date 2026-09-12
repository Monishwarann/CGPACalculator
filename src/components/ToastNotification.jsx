import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Info, AlertTriangle, X } from "lucide-react";

/**
 * ToastNotification Component
 * Displays animated glassmorphism floating toasts with Framer Motion AnimatePresence.
 */
export default function ToastNotification({ notification, onClose, isDarkMode }) {
  const getIcon = () => {
    if (notification?.type === "warning" || notification?.message?.toLowerCase().includes("please")) {
      return <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />;
    }
    if (notification?.type === "info") {
      return <Info className="w-5 h-5 text-blue-400 shrink-0" />;
    }
    return <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />;
  };

  const messageText = typeof notification === "string" ? notification : notification?.message;

  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="fixed bottom-6 right-6 z-50 max-w-md w-full sm:w-auto"
        >
          <div
            className={`flex items-center space-x-3.5 px-5 py-4 rounded-2xl border shadow-2xl backdrop-blur-2xl transition-all ${
              isDarkMode
                ? "bg-[#0d1527]/90 border-indigo-500/30 text-white shadow-indigo-950/50"
                : "bg-white/95 border-indigo-200 text-slate-900 shadow-indigo-500/20"
            }`}
          >
            <div className="p-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
              {getIcon()}
            </div>

            <p className="text-xs font-bold tracking-tight pr-2 flex-1">
              {messageText}
            </p>

            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
