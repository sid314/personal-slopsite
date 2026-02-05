import { Megaphone, Star } from "lucide-react";

export default function ComicAuthorFooter() {
  return (
    // REMOVED: 'border-t-4 border-black' and the dots <div>
    <footer className="mt-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 py-24 relative z-10 text-center">
        {/* HEADER */}
        <div className="inline-block bg-comic-yellow border-4 border-black px-6 py-2 transform -rotate-2 mb-8 shadow-[8px_8px_0px_black]">
          <h3 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter">
            Will Our Hero Find A Team?
          </h3>
        </div>

        <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[12px_12px_0px_rgba(0,0,0,0.4)] relative">
          {/* "Meanwhile" Box */}
          <div className="absolute -top-5 -left-4 bg-comic-red text-white border-2 border-black px-4 py-1 font-black uppercase text-sm rotate-[-5deg]">
            Meanwhile, at your office...
          </div>

          <p className="font-bold text-lg md:text-2xl mb-12 leading-tight">
            "The code is written. The registers are set. <br /> All that's
            missing is the{" "}
            <span className="text-comic-red underline decoration-4 underline-offset-4">
              green light
            </span>{" "}
            from Headquarters!"
          </p>

          {/* THE ACTION BURST BUTTON */}
          <div className="relative inline-block group py-4">
            {/* Rotated Diamond Box Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full min-w-[200px] min-h-[100px] bg-comic-yellow border-4 border-black rotate-3 group-hover:rotate-12 transition-transform duration-300 shadow-[6px_6px_0px_black]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full min-w-[200px] min-h-[100px] bg-white border-4 border-black -rotate-3 group-hover:-rotate-6 transition-transform duration-300 z-0"></div>

            {/* The Button Itself */}
            <a
              href="mailto:your@email.com"
              className="relative z-10 block bg-comic-red text-white border-4 border-black px-8 py-4 font-black text-2xl uppercase italic transform -skew-x-6 hover:translate-y-[-4px] active:translate-y-[2px] transition-all"
            >
              <span className="flex items-center gap-3 drop-shadow-md">
                <Megaphone size={32} className="rotate-[-15deg]" />
                Hire Me Now!
              </span>
            </a>
          </div>

          <p className="mt-12 font-mono text-xs font-bold text-gray-500 uppercase tracking-widest">
            * Batteries not included. Coffee required for operation.
          </p>
        </div>

        {/* "NEXT ISSUE" TEASER STRIP */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center bg-black text-white p-4 border-4 border-white transform rotate-1 shadow-[8px_8px_0px_rgba(0,0,0,0.2)]">
          <div className="flex items-center gap-2">
            <Star className="fill-comic-yellow text-comic-yellow animate-pulse" />
            <span className="font-black uppercase text-xl italic">
              Next Issue:
            </span>
          </div>
          <span className="font-mono text-sm md:text-lg text-comic-yellow">
            "THE TECHNICAL INTERVIEW!"
          </span>
          <span className="text-xs font-bold bg-white text-black px-2 py-1 rounded">
            ON STANDS SOON
          </span>
        </div>
      </div>
    </footer>
  );
}
