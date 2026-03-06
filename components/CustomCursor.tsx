"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring settings for the trailing circle
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(mouseX, springConfig);
  const cursorYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMounted(true);
    
    // Check if it's a touch device
    if (("ontouchstart" in window) || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const setMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", setMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Magnetic / Hover effect listener
    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    // Attach hover listeners to interactable elements dynamically
    const attachListeners = () => {
      const interactives = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", handleHoverStart);
        el.addEventListener("mouseleave", handleHoverEnd);
      });
    };
    
    // Give Next.js time to mount child components before listening
    const timer = setTimeout(attachListeners, 1000);

    // Force hide native cursors globally via an injected stylesheet, except for inputs
    const style = document.createElement("style");
    style.innerHTML = `
      * { cursor: none !important; }
      input, textarea { cursor: text !important; }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener("mousemove", setMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      clearTimeout(timer);
      
      const interactives = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
      
      if (document.head.contains(style)) document.head.removeChild(style);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isMounted || isTouchDevice) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-emerald-500 rounded-full pointer-events-none z-[9999] mix-blend-exclusion dark:mix-blend-difference hidden md:block"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%", opacity: isVisible ? 1 : 0 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9998] mix-blend-exclusion dark:mix-blend-difference hidden md:flex items-center justify-center border border-slate-600 dark:border-white/50"
        style={{ x: cursorXSpring, y: cursorYSpring, translateX: "-50%", translateY: "-50%", opacity: isVisible ? 1 : 0 }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
          borderWidth: isHovering ? "0px" : "1px",
        }}
        transition={{ scale: { duration: 0.2 }, backgroundColor: { duration: 0.2 }, borderWidth: { duration: 0.2 } }}
      />
    </>
  );
}
