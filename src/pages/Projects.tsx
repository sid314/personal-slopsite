import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ComicCover from "../components/ComicCover";
import { PROJECTS } from "../data/projects";

export default function Projects() {
  return (
    <main className="min-h-screen max-w-6xl mx-auto font-sans text-ink pb-20 border-x-2 border-black/5 bg-paper shadow-2xl">
      {/* TOP BAR */}
      <nav className="p-6 border-b-4 border-black bg-white sticky top-0 z-50 flex justify-between items-center shadow-md">
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
        <div className="bg-black text-white px-3 py-1 text-xs font-bold -rotate-1 shadow-[2px_2px_0px_white]">
          ALL ISSUES - {PROJECTS.length} RELEASES
        </div>
      </nav>

      {/* HEADER */}
      <header className="p-8 md:p-16 bg-comic-blue text-white border-b-4 border-black text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:10px_10px]" />
        
        <div className="relative z-10">
          <h1 className="text-6xl md:text-8xl font-black uppercase italic leading-[0.85] text-white drop-shadow-[3px_3px_0px_black]">
            Back <br /> Issues
          </h1>
          <p className="text-xl font-bold mt-4 text-white/80">
            Previous Missions & Adventures
          </p>
        </div>
      </header>

      {/* PROJECTS GRID */}
      <section className="px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <ComicCover key={i} item={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
