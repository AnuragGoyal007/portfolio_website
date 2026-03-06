"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { Sparkles } from "lucide-react";

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000); // slightly longer for premium feel
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.6, duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-50 dark:bg-[#0a0f1c]"
    >
      <div className="flex flex-col items-center gap-8 relative">
        {/* Glowing background blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/20 rounded-full blur-[60px]" />
        
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-emerald-500/30 blur-2xl rounded-full opacity-50 animate-pulse" />
          <div className="text-6xl md:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40 flex items-center gap-3">
            AG<span className="text-emerald-400">.</span>
          </div>
          <motion.div
            initial={{ rotate: -45, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
            className="absolute -top-6 -right-8 text-emerald-400"
          >
            <Sparkles className="w-8 h-8" />
          </motion.div>
        </motion.div>
        
        <div className="w-56 h-1 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
            className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-blue-500 via-emerald-400 to-teal-400"
          >
            {/* Shimmer effect inside progress bar */}
            <div className="absolute inset-0 bg-white/20 w-1/2 -skew-x-12 translate-x-[200%] animate-shimmer" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}