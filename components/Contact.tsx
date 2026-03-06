"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Connect directly to FormSubmit via AJAX to keep the user on the page natively
      const response = await fetch("https://formsubmit.co/ajax/goyalanurag678@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _subject: `Portfolio Contact: Message from ${data.name}!`,
          _template: "table" // Beautiful email template out of the box
        })
      });

      if (!response.ok) throw new Error("Failed to send message via FormSubmit.");
      
      toast.success("Message sent successfully! I'll get back to you soon.", {
        style: {
          background: '#0a0f1c',
          color: '#fff',
          border: '1px solid rgba(52, 211, 153, 0.3)',
        },
        iconTheme: {
          primary: '#34d399',
          secondary: '#0a0f1c',
        },
      });
      
      reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section 
      id="contact" 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-16 border-t border-slate-200 dark:border-white/5 relative"
    >
      <Toaster position="bottom-right" />
      
      <div className="absolute top-0 right-0 -mt-24 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="flex items-center gap-3 mb-12">
        <div className="h-px w-12 bg-blue-500/50"></div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
          <Send className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          Get in Touch
        </h2>
      </div>

      <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
        
        {/* Contact Info Column */}
        <div className="lg:col-span-2 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Let's talk about everything!</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              I'm constantly looking to collaborate on new and exciting AI projects, discuss recent tech updates, or just have a chat. Feel free to reach out via the form or my social links.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-emerald-600 dark:text-emerald-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-slate-800 dark:text-slate-200">Email</p>
                  <a href="mailto:goyalanurag678@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:text-emerald-400 transition-colors text-sm">
                    goyalanurag678@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-blue-600 dark:text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-slate-800 dark:text-slate-200">Location</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Rajpura, Punjab, India</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-teal-600 dark:text-teal-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-slate-800 dark:text-slate-200">Phone</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">+91 8941907069</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Form Column */}
        <div className="lg:col-span-3">
          <div className="bg-slate-50 dark:bg-[#0a0f1c] border border-slate-200 dark:border-white/10 p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px]" />
            
            <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    disabled={isSubmitting}
                    className={`w-full bg-slate-100 dark:bg-white/5 border ${errors.name ? 'border-red-500/50' : 'border-slate-200 dark:border-white/10 focus:border-blue-500/50'} rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-500 outline-none transition-colors disabled:opacity-50`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    disabled={isSubmitting}
                    className={`w-full bg-slate-100 dark:bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-slate-200 dark:border-white/10 focus:border-blue-500/50'} rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-500 outline-none transition-colors disabled:opacity-50`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email.message}</p>}
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message", { required: "Message is required", minLength: { value: 10, message: "Message must be at least 10 characters" } })}
                  disabled={isSubmitting}
                  className={`w-full bg-slate-100 dark:bg-white/5 border ${errors.message ? 'border-red-500/50' : 'border-slate-200 dark:border-white/10 focus:border-emerald-500/50'} rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-500 outline-none transition-colors resize-none disabled:opacity-50`}
                  placeholder="Hello Anurag, I'd like to discuss..."
                />
                {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message.message}</p>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white dark:bg-white text-slate-900 font-semibold py-4 rounded-xl hover:bg-slate-200 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>Sending <Loader2 className="w-5 h-5 animate-spin" /></>
                ) : (
                  <>Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
