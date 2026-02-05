import { motion } from "framer-motion";
import { ArrowLeft, Cpu, Zap, Code, Shield, Brain } from "lucide-react";
import { Link } from "react-router-dom";

// --- Components ---
const StatBar = ({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) => (
  <div className="mb-3">
    <div className="flex justify-between text-xs font-black uppercase mb-1">
      <span>{label}</span>
      <span>{value}/100</span>
    </div>
    <div className="h-4 border-2 border-black bg-white p-0.5">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1, delay: 0.5 }}
        className={`h-full ${color}`}
      />
    </div>
  </div>
);

export default function About() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto font-sans text-ink pb-20 border-x-2 border-black/5 bg-paper shadow-2xl">
      {/* 1. TOP BAR */}
      <nav className="p-6 border-b-4 border-black bg-white sticky top-0 z-50 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 font-black uppercase hover:text-comic-blue transition-colors group"
        >
          <ArrowLeft
            size={24}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span>Back to Shop</span>
        </Link>
        <div className="bg-black text-white px-3 py-1 text-xs font-bold -rotate-1">
          CLASSIFIED FILE #892
        </div>
      </nav>

      {/* 2. HEADER */}
      <header className="p-8 md:p-12 bg-comic-yellow border-b-4 border-black text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_black_1px,_transparent_1px)] bg-[length:10px_10px]" />

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative z-10"
        >
          <div className="inline-block bg-white border-2 border-black px-4 py-1 text-xs font-black mb-4 shadow-[4px_4px_0px_0px_black] rotate-2">
            SECRET ORIGIN STORY
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase italic leading-[0.85] text-black drop-shadow-[3px_3px_0px_white]">
            The <br /> Engineer
          </h1>
        </motion.div>
      </header>

      {/* 3. PROFILE CONTENT */}
      <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12">
        {/* LEFT COL: Stats & Image */}
        <div>
          {/* "Mugshot" Frame */}
          <div className="comic-cover bg-white p-4 mb-8 rotate-[-1deg]">
            <div className="aspect-square bg-comic-blue border-2 border-black flex items-center justify-center mb-4 relative overflow-hidden">
              <Cpu
                size={80}
                className="text-white relative z-10"
                strokeWidth={1.5}
              />
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,black_25%,transparent_25%,transparent_50%,black_50%,black_75%,transparent_75%,transparent)] bg-[length:20px_20px]" />
            </div>
            <div className="text-center">
              <h2 className="font-black text-2xl uppercase">Abdullah</h2>
              <p className="font-mono text-xs font-bold bg-black text-white inline-block px-2">
                LVL 24 TECHNOMANCER
              </p>
            </div>
          </div>

          {/* Power Stats */}
          <div className="bg-white border-2 border-black p-6 shadow-[6px_6px_0px_0px_black]">
            <h3 className="font-black text-xl mb-4 border-b-2 border-black pb-2 flex items-center gap-2">
              <Zap size={20} className="fill-comic-yellow" /> POWER LEVELS
            </h3>
            <StatBar label="Embedded C" value={95} color="bg-comic-red" />
            <StatBar label="RTOS Arch" value={88} color="bg-comic-blue" />
            <StatBar label="Debugging" value={92} color="bg-comic-green" />
            <StatBar label="Caffeine" value={100} color="bg-comic-purple" />
          </div>
        </div>

        {/* RIGHT COL: The Story */}
        <div className="space-y-8">
          {/* Narration Box 1 */}
          <div className="bg-white border-2 border-black p-6 relative">
            <div className="absolute -top-3 left-6 bg-comic-yellow px-2 font-black text-xs border-2 border-black">
              PANEL 1: THE BEGINNING
            </div>
            <p className="font-medium text-lg leading-relaxed">
              "It started with a single blinking LED. While others played with
              high-level abstractions, I was drawn to the{" "}
              <span className="font-black bg-comic-yellow px-1">metal</span>. I
              wanted to know what happened in the registers. I wanted to control
              the electrons myself."
            </p>
          </div>

          {/* Narration Box 2 */}
          <div className="bg-comic-blue text-white border-2 border-black p-6 shadow-[6px_6px_0px_0px_black] transform rotate-1">
            <div className="flex gap-4 items-start">
              <Brain size={32} className="shrink-0" />
              <p className="font-bold text-lg leading-tight italic">
                "My mission? To build systems so efficient, so optimized, that
                they run on sheer willpower and a watch battery."
              </p>
            </div>
          </div>

          {/* "Gadgets" / Skills List */}
          <div>
            <h3 className="font-black text-2xl uppercase mb-4 flex items-center gap-2">
              <Shield className="fill-black text-white" /> KNOWN GADGETS
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                "STM32F4",
                "FreeRTOS",
                "Neovim",
                "Oscilloscopes",
                "Logic Analyzers",
                "Git",
              ].map((tech) => (
                <div
                  key={tech}
                  className="border-2 border-black bg-white px-3 py-2 font-bold text-sm hover:bg-black hover:text-white transition-colors cursor-default"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
