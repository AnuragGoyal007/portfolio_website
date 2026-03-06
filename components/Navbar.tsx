"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Moon, Sun, Twitter } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-white/80 dark:bg-[#0a0f1c]/80 backdrop-blur-md border-b border-slate-200 dark:border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-600 dark:from-blue-400 to-emerald-400">
          AG.
        </a>
        
        <div className="hidden lg:flex items-center gap-5 xl:gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a href="#about" className="hover:text-slate-900 dark:hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-slate-900 dark:hover:text-white transition-colors">Experience</a>
          <a href="#skills" className="hover:text-slate-900 dark:hover:text-white transition-colors">Skills</a>
          <a href="#certifications" className="hover:text-slate-900 dark:hover:text-white transition-colors">Certifications</a>
          <a href="#github" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">GitHub</a>
          <a href="#education" className="hover:text-slate-900 dark:hover:text-white transition-colors">Education</a>
          <a href="#contact" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/AnuragGoyal007" target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/anurag-goyal-885264304" target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:goyalanurag678@gmail.com" className="text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <a href="https://x.com/logicalmind0891" target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="ml-2 p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700/50 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full transition-colors flex items-center justify-center"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
