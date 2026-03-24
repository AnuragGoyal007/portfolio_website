"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import SplashScreen from "@/components/SplashScreen";
import TerminalComponent from "@/components/Terminal";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { ChevronDown, Download, ExternalLink, MapPin, Mail, Phone, ChevronRight, Sparkles, Building2, Code2, GraduationCap, FolderGit2, Terminal, Layers, BarChart, Server, Brain, Award, Github } from "lucide-react";

import { ALL_CERTIFICATES } from "@/data/certificates";
import { PROJECTS } from "@/data/projects";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [selectedIssuer, setSelectedIssuer] = useState<string>("All");
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [expandEduSkills, setExpandEduSkills] = useState(false);

  if (loading) return <SplashScreen onComplete={() => setLoading(false)} />;

  const staggerContainer: Variants = {
    hidden: { opacity: 0 }, 
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen w-full overflow-hidden px-6 md:px-12 lg:px-24 pb-20 max-w-7xl mx-auto">
        
        {/* HERO SECTION */}
        <section className="relative flex items-center min-h-[100svh] pt-32 lg:pt-40 pb-20">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10 w-full">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter mb-6 mt-4">
                Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 dark:from-blue-400 via-emerald-600 dark:via-emerald-400 to-teal-600 dark:to-teal-400">Anurag</span> Goyal
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-2xl font-light">
                Passionate about <span className="text-slate-800 dark:text-slate-200 font-medium">Artificial Intelligence</span> & <span className="text-slate-800 dark:text-slate-200 font-medium">Machine Learning</span>. Building a strong foundation in DSA while learning in public.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-5 items-center">
                <a href="#projects" className="px-8 py-3.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:bg-emerald-600 dark:hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(52,211,153,0.3)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                  Explore Projects <ChevronDown className="w-4 h-4" />
                </a>
                <a href="/anurag_resume.pdf" download="Anurag_Goyal_Resume.pdf" className="px-8 py-3.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 font-semibold hover:bg-slate-200 dark:hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group backdrop-blur-sm cursor-pointer border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.05)]">
                  Download Resume <Download className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors" />
                </a>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-8 mt-16 text-sm text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-white/5 pt-8">
                <span className="flex items-center gap-2.5 hover:text-slate-900 dark:text-white transition-colors cursor-default"><MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400"/> Rajpura, Punjab, India</span>
                <a href="mailto:goyalanurag678@gmail.com" className="flex items-center gap-2.5 hover:text-slate-900 dark:text-white transition-colors"><Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400"/> goyalanurag678@gmail.com</a>
                <span className="flex items-center gap-2.5 hover:text-slate-900 dark:text-white transition-colors cursor-default"><Phone className="w-4 h-4 text-teal-600 dark:text-teal-400"/> +91 8941907069</span>
                <a href="https://www.linkedin.com/in/anurag-goyal-885264304" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 hover:text-blue-700 dark:hover:text-blue-600 dark:text-blue-400 transition-colors group">
                  <ExternalLink className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"/> LinkedIn
                </a>
                <a href="https://x.com/logicalmind0891" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 hover:text-slate-900 dark:text-white transition-colors group">
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"/> X (Twitter)
                </a>
              </motion.div>
            </motion.div>

            {/* Terminal Column */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              className="relative hidden lg:flex justify-center items-center w-full -mt-24"
            >
              {/* Decorative background glows */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 shadow-2xl shadow-blue-500/10 rounded-3xl blur-2xl dark:blur-3xl" />
              <div className="relative z-10 w-full hover:-translate-y-2 transition-transform duration-500">
                <TerminalComponent />
              </div>
            </motion.div>
          </div>
        </section>

        {/* INFINITE TECH MARQUEE */}
        <section className="py-10 border-y border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#050a15]/30 overflow-hidden flex relative">
          {/* Fading gradient edges for smooth entry/exit */}
          <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-slate-50 dark:from-[#030712] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-slate-50 dark:from-[#030712] to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex w-max animate-marquee">
            {/* Duplicated block for seamless loop translating to -50% */}
            {[...Array(2)].map((_, loopIdx) => (
              <div key={loopIdx} className="flex shrink-0 items-center gap-12 sm:gap-24 px-6 sm:px-12">
                {["PYTHON", "TENSORFLOW", "REACT", "NEXT.JS", "DJANGO", "JAVASCRIPT", "C++", "HTML/CSS", "FLASK", "SQL", "PANDAS"].map((tech, idx) => (
                  <div key={idx} className="flex items-center gap-12 sm:gap-24">
                    <span className="text-2xl sm:text-4xl font-black tracking-widest text-slate-400 dark:text-slate-800 hover:text-emerald-500 dark:hover:text-emerald-400 hover:scale-110 transition-all duration-300 cursor-default">
                      {tech}
                    </span>
                    <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-slate-400/80 dark:text-slate-800/80" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT SECTION */}
        <motion.section 
          id="about"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
          className="py-16"
        >
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-blue-500/50"></div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">About Me</h2>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium border rounded-xl border-blue-500/20 bg-blue-500/10 text-blue-700 dark:text-blue-300">
                  <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  CSE AI @ Chitkara University
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium border rounded-xl border-emerald-500/20 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.05)]">
                  <Sparkles className="w-4 h-4" />
                  Available for Internships
                </div>
              </div>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-light text-lg">
                Hi! I&apos;m a 2nd-year Computer Science Engineering (AI specialization) student at Chitkara University, Punjab. I strongly believe in learning by doing — that&apos;s why I actively build projects, participate in coding challenges, explore new AI tools, and share my journey publicly to stay consistent and connect with like-minded people.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-light text-lg">
                Currently leaning into <span className="text-slate-800 dark:text-slate-200 font-medium">MLOps</span> & building a solid foundation in <span className="text-slate-800 dark:text-slate-200 font-medium">DSA</span>. Always open to connecting over AI, interesting projects, or just talking tech!
              </p>
              <div className="flex flex-wrap gap-2.5">
                {["#LearningInPublic", "#AI", "#ML", "#CSEStudent", "#OpenToWork"].map((tag) => (
                  <span key={tag} className="text-xs px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-700 dark:text-blue-300 font-medium hover:bg-blue-500/20 transition-colors cursor-default">{tag}</span>
                ))}
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex flex-col gap-8">
              {/* Restored Profile Image */}
              <div className="relative w-full aspect-square max-w-[280px] mx-auto rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl shadow-blue-500/5 group">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 dark:from-[#0a0f1c]/80 via-transparent to-transparent z-10 opacity-60 pointer-events-none" />
                <Image
                  src="/profile.jpg"
                  alt="Anurag Goyal"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="relative p-1 rounded-2xl bg-gradient-to-b from-blue-500/20 via-emerald-500/10 to-transparent">
                <div className="bg-slate-50 dark:bg-[#0a0f1c] rounded-xl p-8 h-full border border-slate-200 dark:border-white/5 relative z-10">
                  <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
                    <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    Looking forward to:
                  </h3>
                  <ul className="space-y-4 text-slate-600 dark:text-slate-400">
                    {[
                      "Internships in AI/ML/Data Science",
                      "Collaborating on exciting AI projects",
                      "Networking with industry professionals",
                      "Continuous growth & hands-on learning"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 group">
                        <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 group-hover:translate-x-1 transition-transform" /> 
                        <span className="group-hover:text-slate-800 dark:text-slate-200 transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* PROJECTS SECTION */}
        <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="py-16">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px w-12 bg-teal-500/50"></div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
              <FolderGit2 className="w-7 h-7 text-teal-600 dark:text-teal-400" />
              Featured Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
              <div key={index} className={`group relative bg-slate-50 dark:bg-[#0a0f1c] border border-slate-200 dark:border-white/10 rounded-3xl p-8 hover:bg-slate-100 dark:hover:bg-white/[0.03] transition-all duration-500 hover:-translate-y-1 flex flex-col h-full ${project.theme.hoverBorder} ${project.colSpan || ''}`}>
                <div className={`absolute inset-0 bg-gradient-to-br to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${project.theme.gradient}`} />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`flex text-xs px-3 py-1 font-mono rounded-full border ${project.theme.badge}`}>{project.date}</div>
                    <div className="flex gap-3 items-center">
                      <a href={project.demoLink} target="_blank" rel="noreferrer" className={`transition-colors flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded-md border text-slate-600 dark:text-slate-400 ${project.theme.demoBtn}`}>
                        <ExternalLink className="w-3.5 h-3.5"/> Live Demo
                      </a>
                      <a href={project.codeLink} target="_blank" rel="noreferrer" className={`text-slate-600 dark:text-slate-400 transition-colors flex items-center gap-1.5 text-xs font-medium bg-slate-100 dark:bg-white/5 px-2 py-1 rounded-md border border-slate-200 dark:border-white/10 ${project.theme.codeBtnHover}`}>
                        <Github className="w-3.5 h-3.5"/> Code
                      </a>
                    </div>
                  </div>
                  <h3 className={`text-2xl font-bold text-slate-900 dark:text-white mb-3 transition-colors ${project.theme.titleHover}`}>{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs font-medium px-2.5 py-1 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-md text-slate-700 dark:text-slate-300">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* EXPERIENCE */}
        <motion.section id="experience" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="py-16">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px w-12 bg-emerald-500/50"></div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
              <Building2 className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
              Experience
            </h2>
          </div>
          
          <div className="relative border-l-2 border-slate-800 ml-4 pl-10 pb-4">
            <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-1.5 ring-4 ring-[#0a0f1c] shadow-[0_0_15px_rgba(52,211,153,0.8)]" />
            <div className="mb-2 text-sm font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-400/10 inline-block px-3 py-1 rounded-full">Feb 2026 - Present</div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-3">Media Team Member</h3>
            <div className="text-slate-600 dark:text-slate-400 font-medium mb-4 flex items-center gap-2 mt-1">
              Red Hat · Chitkara University
            </div>
            <p className="text-slate-500 font-light max-w-2xl">
              Contributing to the university's technical community by managing media outreach, creating engaging content, and facilitating technical events and workshops.
            </p>
          </div>
        </motion.section>

        {/* SKILLS */}
        <motion.section id="skills" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="py-16">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px w-12 bg-blue-500/50"></div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
              <Code2 className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              Tech Arsenal
            </h2>
          </div>

          <div className="space-y-24">
            {/* -- SKILLS GRID -- */}
            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Category 1 */}
              <div className="bg-slate-50 dark:bg-[#0a0f1c]/80 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-3xl p-8 hover:border-blue-500/50 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none transition-all group-hover:bg-blue-500/20" />
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                    <Terminal className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Languages & Core</h3>
                </div>
                <div className="space-y-6 relative z-10">
                  {[
                    { name: 'Python', level: 'Advanced', percent: 90 },
                    { name: 'C / C++', level: 'Intermediate', percent: 75 },
                    { name: 'SQL & MySQL', level: 'Advanced', percent: 85 },
                    { name: 'HTML / CSS', level: 'Advanced', percent: 85 },
                  ].map(skill => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-slate-800 dark:text-slate-200 tracking-wide">{skill.name}</span>
                          <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-medium border border-blue-500/20 hidden sm:block">{skill.level}</span>
                        </div>
                        <span className="text-slate-600 dark:text-slate-400 text-sm font-mono">{skill.percent}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-200 dark:border-white/5">
                        <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full transition-all duration-1000 ease-out" style={{ width: `${skill.percent}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category 2 */}
              <div className="bg-slate-50 dark:bg-[#0a0f1c]/80 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-3xl p-8 hover:border-emerald-500/50 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none transition-all group-hover:bg-emerald-500/20" />
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(52,211,153,0.1)]">
                    <Layers className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Frameworks</h3>
                </div>
                <div className="space-y-6 relative z-10">
                  {[
                    { name: 'React.js & Next.js', level: 'Intermediate', percent: 70 },
                    { name: 'Django', level: 'Advanced', percent: 85 },
                    { name: 'Pandas & NumPy', level: 'Advanced', percent: 85 },
                    { name: 'Tailwind CSS', level: 'Advanced', percent: 90 },
                  ].map(skill => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-slate-800 dark:text-slate-200 tracking-wide">{skill.name}</span>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium border border-emerald-500/20 hidden sm:block">{skill.level}</span>
                        </div>
                        <span className="text-slate-600 dark:text-slate-400 text-sm font-mono">{skill.percent}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-200 dark:border-white/5">
                        <div className="h-full bg-gradient-to-r from-emerald-600 to-teal-600 dark:to-teal-400 rounded-full transition-all duration-1000 ease-out" style={{ width: `${skill.percent}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category 3 */}
              <div className="bg-slate-50 dark:bg-[#0a0f1c]/80 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-3xl p-8 hover:border-purple-500/50 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none transition-all group-hover:bg-purple-500/20" />
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                    <Brain className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">AI & Machine Learning</h3>
                </div>
                <div className="space-y-6 relative z-10">
                  {[
                    { name: 'Machine Learning Algorithms', level: 'Advanced', percent: 85 },
                    { name: 'Deep Learning (NN, NLP)', level: 'Intermediate', percent: 70 },
                    { name: 'HuggingFace & OpenAI', level: 'Intermediate', percent: 75 },
                    { name: 'Scikit-Learn', level: 'Intermediate', percent: 75 },
                  ].map(skill => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-slate-800 dark:text-slate-200 tracking-wide">{skill.name}</span>
                          <span className="px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-medium border border-purple-500/20 hidden sm:block">{skill.level}</span>
                        </div>
                        <span className="text-slate-600 dark:text-slate-400 text-sm font-mono">{skill.percent}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-200 dark:border-white/5">
                        <div className="h-full bg-gradient-to-r from-purple-600 to-pink-500 rounded-full transition-all duration-1000 ease-out" style={{ width: `${skill.percent}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Category 4 */}
              <div className="bg-slate-50 dark:bg-[#0a0f1c]/80 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-3xl p-8 hover:border-amber-500/50 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none transition-all group-hover:bg-amber-500/20" />
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                    <BarChart className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Data Analytics</h3>
                </div>
                <div className="space-y-6 relative z-10">
                  {[
                    { name: 'Microsoft Power BI', level: 'Advanced', percent: 85 },
                    { name: 'Data Analysis', level: 'Advanced', percent: 85 },
                    { name: 'Statistical Analysis', level: 'Intermediate', percent: 75 },
                    { name: 'Data Structures', level: 'Advanced', percent: 80 },
                  ].map(skill => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-slate-800 dark:text-slate-200 tracking-wide">{skill.name}</span>
                          <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-medium border border-amber-500/20 hidden sm:block">{skill.level}</span>
                        </div>
                        <span className="text-slate-600 dark:text-slate-400 text-sm font-mono">{skill.percent}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-200 dark:border-white/5">
                        <div className="h-full bg-gradient-to-r from-amber-500 to-orange-400 rounded-full transition-all duration-1000 ease-out" style={{ width: `${skill.percent}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* -- CERTIFICATIONS GRID -- */}
            <div id="certifications" className="scroll-mt-32">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6 border-b border-slate-200 dark:border-white/5 pb-8">
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3 mb-4">
                    <Award className="w-7 h-7 text-teal-600 dark:text-teal-400" />
                    Industry Certifications
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-1.5 bg-slate-800/50 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-700">{ALL_CERTIFICATES.length} Total Certifications</span>
                    <span className="px-4 py-1.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 rounded-full text-sm font-medium">{ALL_CERTIFICATES.filter(c => c.issuer === 'Microsoft').length} Microsoft Exams</span>
                    <span className="px-4 py-1.5 bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 rounded-full text-sm font-medium">{ALL_CERTIFICATES.filter(c => c.issuer === 'CalArts').length} CalArts Specifications</span>
                  </div>
                </div>
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-2.5 mb-10">
                {(() => {
                  const issuers = ["All", ...Array.from(new Set(ALL_CERTIFICATES.map(c => c.issuer)))];

                  return (
                    <>
                      {issuers.map((issuer) => (
                        <button
                          key={issuer}
                          onClick={() => setSelectedIssuer(issuer)}
                          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            selectedIssuer === issuer 
                            ? 'bg-teal-500 text-slate-900 shadow-[0_0_15px_rgba(20,184,166,0.4)]' 
                            : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:bg-white/10 hover:text-slate-900 dark:text-white border border-slate-200 dark:border-white/5'
                          }`}
                        >
                          {issuer}
                        </button>
                      ))}
                    </>
                  );
                })()}
              </div>
              
              <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                {(() => {
                  let filteredCerts = selectedIssuer === "All" ? ALL_CERTIFICATES : ALL_CERTIFICATES.filter(c => c.issuer === selectedIssuer);
                  if (!showAllCerts) {
                    filteredCerts = filteredCerts.slice(0, 6);
                  }

                  return filteredCerts.map((cert, idx) => (
                    <motion.div layout initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} exit={{opacity:0, scale:0.9}} transition={{duration:0.3}} key={`${cert.name}-${idx}`} className="group relative bg-slate-50 dark:bg-[#0a0f1c]/50 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden hover:border-slate-300 dark:border-white/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl flex flex-col h-full">
                    {/* Top Accent Line */}
                    <div className={`h-1.5 w-full ${cert.st.line} transition-colors`} />
                    
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-6">
                        <div className={`relative p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 ${cert.st.bg} transition-colors flex items-center justify-center`}>
                          {cert.logo ? (
                            <>
                              <img 
                                src={cert.logo} 
                                alt={cert.issuer} 
                                className="w-6 h-6 object-contain filter drop-shadow-md rounded-sm bg-white dark:bg-white" 
                                onError={(e) => { 
                                  // Hide the broken image safely
                                  e.currentTarget.style.display = 'none'; 
                                  // Show the fallback SVG sitting next to it
                                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }} 
                              />
                              <Building2 className={`hidden w-6 h-6 text-slate-600 dark:text-slate-400 ${cert.st.txt} transition-colors`} />
                            </>
                          ) : (
                            <Building2 className={`w-6 h-6 text-slate-600 dark:text-slate-400 ${cert.st.txt} transition-colors`} />
                          )}
                        </div>
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${cert.st.badge}`}>
                          {cert.role}
                        </span>
                      </div>
                      
                      <h4 className={`text-lg font-bold text-slate-900 dark:text-slate-100 mb-3 leading-tight ${cert.st.txt} transition-colors`}>
                        {cert.name}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-8 flex-grow tracking-wide uppercase">{cert.issuer}</p>
                      
                      <div className="flex justify-between items-center pt-5 border-t border-slate-200 dark:border-white/5 mt-auto">
                        <span className={`text-xs font-mono font-bold ${cert.st.txt}`}>VERIFIED</span>
                        <span className="text-sm font-medium text-slate-500 group-hover:text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-1">
                          Preview <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                  ));
                })()}
                </AnimatePresence>
              </motion.div>
              
              {/* Load More Button */}
              {(() => {
                const totalCerts = selectedIssuer === "All" ? ALL_CERTIFICATES.length : ALL_CERTIFICATES.filter(c => c.issuer === selectedIssuer).length;
                if (totalCerts > 6) {
                  return (
                    <div className="mt-12 flex justify-center">
                      <button 
                        onClick={() => setShowAllCerts(!showAllCerts)}
                        className="group relative px-8 py-3 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:bg-white/10 border border-slate-200 dark:border-white/10 rounded-full font-semibold text-slate-700 dark:text-slate-300 transition-all overflow-hidden flex items-center gap-2"
                      >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="relative z-10">{showAllCerts ? 'Show Less' : `View All ${totalCerts} Certifications`}</span>
                        <ChevronRight className={`w-4 h-4 relative z-10 transition-transform ${showAllCerts ? '-rotate-90' : 'rotate-90 group-hover:translate-y-1'}`} />
                      </button>
                    </div>
                  );
                }
                return null;
              })()}
              
            </div>
          </div>
        </motion.section>

        {/* GITHUB STATS */}
        <motion.section id="github" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="py-16 border-t border-slate-200 dark:border-white/5">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px w-12 bg-white/20"></div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
              <Github className="w-7 h-7 text-slate-700 dark:text-slate-300" />
              GitHub Activity
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Main Stats Card */}
            <div className="bg-slate-50 dark:bg-[#0a0f1c] border border-slate-200 dark:border-white/10 rounded-3xl p-8 hover:bg-slate-100 dark:hover:bg-white/[0.03] transition-all duration-300 shadow-sm flex flex-col items-center justify-center group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-full relative z-10 flex flex-col">
                <div className="flex items-center gap-2 mb-4 self-start">
                  <BarChart className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">GitHub Stats</h3>
                </div>
                <div className="flex justify-center flex-grow py-4">
                  {/* Light Mode Variant */}
                  <img 
                    src="https://github-readme-stats-eight-theta.vercel.app/api?username=AnuragGoyal007&show_icons=true&bg_color=00000000&hide_border=true&hide_title=true&text_color=475569&icon_color=2563eb&text_bold=false&rank_icon=github" 
                    alt="Anurag's GitHub Stats" 
                    className="w-full max-w-[400px] object-contain block dark:hidden" 
                  />
                  {/* Dark Mode Variant */}
                  <img 
                    src="https://github-readme-stats-eight-theta.vercel.app/api?username=AnuragGoyal007&show_icons=true&bg_color=00000000&hide_border=true&hide_title=true&text_color=94a3b8&icon_color=60a5fa&text_bold=false&rank_icon=github" 
                    alt="Anurag's GitHub Stats" 
                    className="w-full max-w-[400px] object-contain hidden dark:block" 
                  />
                </div>
              </div>
            </div>
            
            {/* Top Languages Card */}
            <div className="bg-slate-50 dark:bg-[#0a0f1c] border border-slate-200 dark:border-white/10 rounded-3xl p-8 hover:bg-slate-100 dark:hover:bg-white/[0.03] transition-all duration-300 shadow-sm flex flex-col items-center justify-center group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-full relative z-10 flex flex-col">
                <div className="flex items-center gap-2 mb-4 self-start">
                  <Code2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">Top Languages</h3>
                </div>
                <div className="flex justify-center flex-grow py-4">
                  {/* Light Mode Variant */}
                  <img 
                    src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=AnuragGoyal007&layout=compact&bg_color=00000000&hide_border=true&hide_title=true&text_color=475569" 
                    alt="Top Languages" 
                    className="w-full max-w-[350px] object-contain block dark:hidden" 
                  />
                  {/* Dark Mode Variant */}
                  <img 
                    src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=AnuragGoyal007&layout=compact&bg_color=00000000&hide_border=true&hide_title=true&text_color=94a3b8" 
                    alt="Top Languages" 
                    className="w-full max-w-[350px] object-contain hidden dark:block" 
                  />
                </div>
              </div>
            </div>
            
            {/* GitHub Contributions Chart */}
            <div className="md:col-span-2 bg-slate-50 dark:bg-[#0a0f1c] border border-slate-200 dark:border-white/10 rounded-3xl p-8 hover:bg-slate-100 dark:hover:bg-white/[0.03] transition-all duration-300 shadow-sm flex flex-col items-center justify-center group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-full relative z-10 flex flex-col">
                <div className="flex items-center gap-2 mb-8 self-start">
                  <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">Contribution Graph</h3>
                </div>
                <div className="w-full overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700 scrollbar-track-transparent">
                  <div className="min-w-[750px] flex justify-center py-2 px-4">
                    {/* Light Mode Variant */}
                    <img 
                      src="https://ghchart.rshah.org/10b981/AnuragGoyal007" 
                      alt="GitHub Contributions" 
                      className="w-full object-contain block dark:hidden" 
                    />
                    {/* Dark Mode Variant */}
                    <img 
                      src="https://ghchart.rshah.org/34d399/AnuragGoyal007" 
                      alt="GitHub Contributions" 
                      className="w-full object-contain hidden dark:block drop-shadow-[0_0_12px_rgba(52,211,153,0.15)]" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* EDUCATION */}
        <motion.section id="education" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="py-16 border-t border-slate-200 dark:border-white/5">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-px w-12 bg-white/20"></div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
              <GraduationCap className="w-7 h-7 text-slate-700 dark:text-slate-300" />
              Education
            </h2>
          </div>
          
          <div className="flex flex-col gap-6">
            {/* Chitkara University */}
            <div className="group relative bg-slate-50 dark:bg-[#0a0f1c] border border-slate-200 dark:border-white/10 rounded-3xl p-8 hover:bg-slate-100 dark:hover:bg-white/[0.03] hover:border-blue-500/30 transition-all duration-500 flex flex-col md:flex-row gap-6 md:items-start overflow-hidden shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 dark:from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-white border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-2">
                <img src="https://www.google.com/s2/favicons?domain=chitkara.edu.in&sz=128" alt="Chitkara University" className="w-full h-full object-contain" />
              </div>
              
              <div className="relative z-10 flex-grow text-left">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Chitkara University</h3>
                  <div className="text-sm font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-white/5 inline-block px-3 py-1 rounded-lg border border-slate-200 dark:border-white/5 mt-2 md:mt-0 w-max shrink-0">Aug 2024 – Jul 2028</div>
                </div>
                
                <h4 className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-3">Bachelor of Engineering - BE, CSE (AI)</h4>
                
                <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 text-sm font-medium border rounded-lg border-emerald-500/20 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300">
                  Grade: 8.27 CGPA (Till 3rd SEM)
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 max-w-3xl">
                  2nd Year student at Chitkara University pursuing Bachelor of Engineering in Computer Science and Engineering, specializing in the field of AI/ML.
                </p>
                
                <div className="mb-6 p-4 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Activities and societies:</span> Smart India Hackathon 2025 Participant (Team selected in Round 1)
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium px-2.5 py-1.5 bg-slate-200 dark:bg-white/10 border border-slate-300 dark:border-white/10 rounded-md text-slate-700 dark:text-slate-300">Django/Flask</span>
                  <span className="text-xs font-medium px-2.5 py-1.5 bg-slate-200 dark:bg-white/10 border border-slate-300 dark:border-white/10 rounded-md text-slate-700 dark:text-slate-300">Data Analytics</span>
                  
                  {!expandEduSkills ? (
                    <button 
                      onClick={() => setExpandEduSkills(true)}
                      className="text-xs font-medium px-2.5 py-1.5 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-md text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-colors cursor-pointer"
                    >
                      +12 skills
                    </button>
                  ) : (
                    ["Machine Learning", "Deep Learning", "Python", "C++", "SQL", "Pandas", "NumPy", "TensorFlow", "React", "Next.js", "JavaScript", "HTML/CSS"].map((skill) => (
                      <motion.span 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        key={skill} 
                        className="text-xs font-medium px-2.5 py-1.5 bg-slate-200 dark:bg-white/10 border border-slate-300 dark:border-white/10 rounded-md text-slate-700 dark:text-slate-300"
                      >
                        {skill}
                      </motion.span>
                    ))
                  )}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* SRM */}
              <div className="group relative bg-slate-50 dark:bg-[#0a0f1c] border border-slate-200 dark:border-white/10 rounded-3xl p-8 hover:bg-slate-100 dark:hover:bg-white/[0.03] hover:border-emerald-500/30 transition-all duration-500 flex flex-col h-full overflow-hidden shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 dark:from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex flex-wrap lg:flex-nowrap justify-between items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 shadow-sm p-2">
                       <GraduationCap className="w-6 h-6 text-slate-400" />
                    </div>
                    <div className="text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/5 shrink-0 w-max">Jun 2022 – Mar 2024</div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">SRM International School</h3>
                  <h4 className="text-md font-medium text-slate-700 dark:text-slate-300 mb-4">Class 11th to Class 12th</h4>
                  
                  <div className="mt-auto pt-4 flex">
                    <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium border rounded-lg border-emerald-500/20 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300">
                      Grade: 79.2 %
                    </div>
                  </div>
                </div>
              </div>

              {/* G.S. Convent */}
              <div className="group relative bg-slate-50 dark:bg-[#0a0f1c] border border-slate-200 dark:border-white/10 rounded-3xl p-8 hover:bg-slate-100 dark:hover:bg-white/[0.03] hover:border-purple-500/30 transition-all duration-500 flex flex-col h-full overflow-hidden shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 dark:from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex flex-wrap lg:flex-nowrap justify-between items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0 shadow-sm p-2">
                       <GraduationCap className="w-6 h-6 text-slate-400" />
                    </div>
                    <div className="text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/5 shrink-0 w-max">Apr 2009 – May 2022</div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">G.S. Convent School</h3>
                  <h4 className="text-md font-medium text-slate-700 dark:text-slate-300 mb-4">Nursery to Class 10th</h4>
                  
                  <div className="mt-auto pt-4 flex">
                    <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium border rounded-lg border-purple-500/20 bg-purple-500/10 text-purple-800 dark:text-purple-300">
                      Grade: 95.6 %
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CONTACT SECTION */}
        <Contact />

      </main>
      
      {/* FOOTER */}
      <footer className="border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#0a0f1c]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Anurag Goyal. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="https://github.com/AnuragGoyal007" target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/anurag-goyal-885264304" target="_blank" rel="noreferrer" className="hover:text-blue-700 dark:hover:text-blue-600 dark:text-blue-400 transition-colors">LinkedIn</a>
            <a href="https://x.com/logicalmind0891" target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:text-white transition-colors">X (Twitter)</a>
            <a href="mailto:goyalanurag678@gmail.com" className="hover:text-emerald-700 dark:hover:text-emerald-600 dark:text-emerald-400 transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </>
  );
}