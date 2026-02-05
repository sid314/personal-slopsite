import { BookOpen, ArrowDown, Scissors } from "lucide-react";
import StoryPage from "./StoryPage";
import { TIMELINE } from "../data/timeline";

export default function StoryReader() {
  return (
    <section className="py-20 px-4 md:px-0 relative bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')]">
      {/* HEADER */}
      <div className="max-w-2xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-4xl font-black uppercase italic flex items-center justify-center gap-3">
          <BookOpen className="text-comic-red" size={40} /> Origin Stories
        </h2>
        <p className="font-bold text-gray-500 mt-2 flex items-center justify-center gap-2">
          SCROLL TO READ <ArrowDown size={16} className="animate-bounce" />
        </p>
      </div>

      {/* THE TIMELINE STACK */}
      <div className="max-w-3xl mx-auto relative">
        {/* The Spine Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-black -translate-x-1/2 z-0 opacity-20"></div>

        <div className="space-y-24 pb-12">
          {TIMELINE.map((event, i) => (
            <StoryPage
              key={i}
              data={event}
              pageIndex={i}
              totalPages={TIMELINE.length}
            />
          ))}
        </div>

        {/* --- THE ENDING: BLUEPRINT MODE --- */}
        <div className="relative z-10 flex flex-col items-center">
          {/* 1. Spine Terminator (CMYK Registration Marks) */}
          <div className="bg-white border-2 border-black p-2 mb-8 rotate-45 shadow-[4px_4px_0px_black] z-20">
            <div className="grid grid-cols-2 gap-1">
              <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
              <div className="w-3 h-3 bg-magenta-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-black rounded-full"></div>
            </div>
          </div>

          {/* 2. The "Future" Blueprint Card */}
          <div className="w-full max-w-xl mx-auto bg-[#005bb5] border-4 border-white shadow-[8px_8px_0px_black] p-8 text-white relative overflow-hidden group cursor-pointer hover:scale-[1.02] transition-transform">
            {/* Blueprint Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>

            {/* Decorative "Draft" Stamp */}
            <div className="absolute top-4 right-4 border-2 border-white/30 px-2 text-[10px] font-mono tracking-widest opacity-50 rotate-12">
              DRAFT_V2.0
            </div>

            <div className="relative z-10 text-center space-y-4">
              <h3 className="font-black text-3xl uppercase italic tracking-widest border-b-2 border-white/20 pb-4 inline-block">
                Phase 3: <br /> The Next Arc
              </h3>

              <p className="font-mono text-sm md:text-base text-blue-100 max-w-sm mx-auto">
                // TODO: Initialize new role.
                <br />
                // WAITING FOR INPUT...
              </p>

              {/* Dotted "Cut Here" Coupon Line */}
              <div className="border-t-2 border-dashed border-white/40 mt-6 pt-6 flex items-center justify-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                <Scissors size={18} />
                <span className="text-xs font-bold tracking-widest uppercase">
                  Click to Initialize Interview
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
