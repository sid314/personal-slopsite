import { motion } from "framer-motion";
import type { TimelineEvent } from "../data/timeline";

interface StoryPageProps {
  data: TimelineEvent;
  pageIndex: number;
  totalPages: number;
}

export default function StoryPage({
  data,
  pageIndex,
  totalPages,
}: StoryPageProps) {
  return (
    <motion.div
      // CHANGED: Use 'whileInView' so it animates when you scroll to it
      initial={{ opacity: 0, y: 100, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-100px" }} // Triggers when 100px of the card is visible
      transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
      className="w-full max-w-2xl mx-auto bg-white border-4 border-black shadow-[8px_8px_0px_0px_black] p-4 md:p-6 relative z-10"
    >
      {/* 1. Header Strip (Narrator Box) */}
      <div className="flex justify-between items-start mb-4 border-b-2 border-black pb-2 border-dashed">
        <div className="bg-comic-yellow border-2 border-black px-3 py-1 text-xs font-black uppercase shadow-[2px_2px_0px_0px_black] rotate-[-1deg]">
          {data.year}
        </div>
        <div className="text-xs font-mono font-bold text-gray-400">
          PAGE {pageIndex + 1} OF {totalPages}
        </div>
      </div>

      {/* 2. The "Action Shot" (Image) */}
      <div className="relative border-4 border-black h-64 md:h-80 overflow-hidden mb-6 group bg-gray-200">
        {/* Halftone Overlay Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,black_1px,transparent_1px)] bg-[length:4px_4px] opacity-20 pointer-events-none z-10" />

        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
        />

        {/* Title Badge overlaying image */}
        <div
          className={`absolute bottom-0 left-0 ${data.color} text-white px-4 py-2 border-t-4 border-r-4 border-black font-black text-2xl uppercase italic z-20`}
        >
          {data.title}
        </div>
      </div>

      {/* 3. The Story Text */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-1 w-8 bg-black"></div>
          <h3 className="font-black text-xl uppercase">
            {data.role} <span className="text-gray-400">@</span> {data.company}
          </h3>
        </div>

        {/* Comic Narrative Box */}
        <div className="bg-gray-100 border-2 border-black p-4 relative">
          <p className="font-medium font-sans leading-relaxed text-lg">
            "{data.desc}"
          </p>
        </div>
      </div>

      {/* Decorative Corner */}
      <div className="absolute bottom-2 right-2 w-4 h-4 bg-black"></div>
    </motion.div>
  );
}
