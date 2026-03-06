"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon, Maximize2, X, Minus } from "lucide-react";

type CommandHistory = {
  command: string;
  output: React.ReactNode;
  isError?: boolean;
};

export default function Terminal() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: "",
      output: (
        <div className="text-slate-300 flex flex-col gap-1">
          <div className="text-emerald-400 font-bold">AnuragOS v.1.0 AI Engine Online</div>
          <div>Welcome to my virtual assistant. Feel free to type anything naturally.</div>
          <div className="mt-2 text-slate-400 text-xs">Try: "What is your tech stack?", "Tell me about your Savor'e project", or type <span className="text-emerald-400">'help'</span> for manual overrides.</div>
        </div>
      )
    }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom of terminal when history changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const cmd = input.trim().toLowerCase();
    const originalInput = input.trim();
    let output: React.ReactNode = "";
    let isError = false;
    let isAICommand = false;

    // First process built-in manual commands
    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1">
            <div className="text-emerald-400 mb-2">SYSTEM COMMANDS:</div>
            <div><span className="text-teal-400">about</span>    - Who is Anurag?</div>
            <div><span className="text-teal-400">skills</span>   - List my technical stack</div>
            <div><span className="text-teal-400">contact</span>  - Get my social links</div>
            <div><span className="text-teal-400">clear</span>    - Clear the terminal logs</div>
            <div><span className="text-teal-400">sudo</span>     - Gain root access</div>
            <div className="mt-3 text-emerald-400">OR JUST TALK NATURALLY TO THE AI!</div>
            <div className="text-slate-500 italic">E.g., "What are your best ML projects?"</div>
          </div>
        );
        break;
      case "about":
        output = "I am an AI & Machine Learning student at Chitkara University. I specialize in building Data pipelines, AI models, and modern web applications!";
        break;
      case "skills":
        output = (
          <div className="flex flex-wrap gap-2 mt-1">
            <span className="text-blue-400">Python</span>
            <span className="text-emerald-400">TensorFlow</span>
            <span className="text-yellow-400">JavaScript</span>
            <span className="text-blue-300">React</span>
            <span className="text-orange-400">SQL</span>
            <span className="text-purple-400">Next.js</span>
            <span className="text-emerald-600">Django</span>
          </div>
        );
        break;
      case "contact":
        output = (
          <div>
            Email: goyalanurag678@gmail.com <br />
            GitHub: AnuragGoyal007 <br />
            LinkedIn: in/anurag-goyal-885264304 <br />
            X (Twitter): x.com/logicalmind0891
          </div>
        );
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "sudo":
      case "sudo su":
        output = "Permission denied. You are not in the sudoers file. This incident will be reported to a very angry generative AI.";
        isError = true;
        break;
      case "rm -rf /":
        output = "Nice try. I deployed this on Vercel anyway.";
        break;
      case "ls":
        output = "index.html  app.js  secrets.txt  models/  anurag_resume.pdf";
        break;
      case "cat secrets.txt":
        output = "Access denied. Are you trying to steal my Gemini API keys?";
        isError = true;
        break;
      default:
        // Use Gemini API for unknown natural language requests
        isAICommand = true;
    }

    setInput("");

    // If it's a built-in command, handle it conventionally right away
    if (!isAICommand) {
      setHistory((prev) => [...prev, { command: originalInput, output, isError }]);
      return;
    }

    // Handle AI request
    setIsLoading(true);
    
    // Create a temporary history entry to show "thinking..."
    setHistory((prev) => [
      ...prev, 
      { 
        command: originalInput, 
        output: <div className="text-yellow-400 animate-pulse flex items-center gap-2"><div className="w-2 h-2 bg-yellow-400 rounded-full"></div> Querying AI core...</div> 
      }
    ]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: originalInput }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.text || "Failed to fetch AI response");
      }

      // Replace the loading state with the actual response using a simple formatting approach
      setHistory((prev) => {
        const newHistory = [...prev];
        // Only modify the last added history element
        newHistory[newHistory.length - 1] = {
          command: originalInput,
          output: <div className="text-slate-300 leading-relaxed max-w-[90%] break-words whitespace-pre-wrap">{data.text}</div>
        };
        return newHistory;
      });
      
    } catch (error) {
      console.error(error);
      setHistory((prev) => {
        const newHistory = [...prev];
        newHistory[newHistory.length - 1] = {
          command: originalInput,
          isError: true,
          output: "System Error [0xAI]: The Gemini API endpoint failed to respond. Have you set GEMINI_API_KEY?"
        };
        return newHistory;
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden border border-slate-700/50 dark:border-white/10 shadow-2xl bg-[#0d1117] font-mono text-sm relative group"
    >
      {/* Mac OS Window Header */}
      <div className="bg-[#161b22] px-4 py-3 flex items-center justify-between border-b border-slate-700/50 dark:border-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors" />
        </div>
        <div className="text-slate-400 text-xs font-medium flex items-center gap-2 select-none">
          <TerminalIcon className="w-3.5 h-3.5" /> root@anurag:~
        </div>
        <div className="flex gap-2 text-slate-500">
          <Minus className="w-3.5 h-3.5 hover:text-white cursor-pointer transition-colors" />
          <Maximize2 className="w-3.5 h-3.5 hover:text-white cursor-pointer transition-colors" />
          <X className="w-3.5 h-3.5 hover:text-rose-400 cursor-pointer transition-colors" />
        </div>
      </div>

      {/* Terminal Body */}
      <div 
        ref={scrollRef}
        className="p-5 h-[420px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent flex flex-col gap-3 scroll-smooth" 
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item, index) => (
          <div key={index} className="flex flex-col gap-1">
            {item.command && (
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-emerald-400">anurag@ubuntu</span>
                <span className="text-slate-500">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-slate-500">$</span>
                <span>{item.command}</span>
              </div>
            )}
            <div className={`pl-2 border-l-2 ${item.isError ? "border-rose-500/50 text-rose-400" : "border-slate-700 text-slate-400"}`}>
              {item.output}
            </div>
          </div>
        ))}
        
        {/* Active Input Line */}
        <form onSubmit={handleCommand} className="flex items-center gap-2 mt-1 w-full shrink-0">
          <span className="text-emerald-400">anurag@ubuntu</span>
          <span className="text-slate-500">:</span>
          <span className="text-blue-400">~</span>
          <span className="text-slate-500">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-slate-200 focus:ring-0 p-0 disabled:opacity-50"
            autoFocus
            disabled={isLoading}
            spellCheck="false"
            autoComplete="off"
            placeholder={isLoading ? "Waiting for AI..." : ""}
          />
        </form>
      </div>
    </motion.div>
  );
}
