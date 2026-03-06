import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AnimatedBackground from "@/components/AnimatedBackground";
import { ThemeProvider } from "@/components/ThemeProvider";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anurag Goyal | AI Student & Developer",
  description: "Portfolio of Anurag Goyal, CSE AI Student at Chitkara University.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} text-slate-800 dark:text-slate-200 bg-white dark:bg-[#0a0f1c] antialiased transition-colors duration-500`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <CustomCursor />
          <AnimatedBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}