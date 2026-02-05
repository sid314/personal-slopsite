import { useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import StoryPage from "./StoryPage";
import { TIMELINE } from "../data/timeline";

export default function StoryReader() {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < TIMELINE.length - 1) setCurrentPage((c) => c + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage((c) => c - 1);
  };

  return (
    <section className="py-12 px-4 md:px-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')]">
      {/* Reader Controls Top */}
      <div className="max-w-2xl mx-auto flex justify-between items-center mb-8">
        <h2 className="text-3xl font-black uppercase italic flex items-center gap-2">
          <BookOpen className="text-comic-red" /> Origin Stories
        </h2>
        <div className="flex gap-2">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="p-2 border-2 border-black bg-white hover:bg-comic-yellow disabled:opacity-50 disabled:bg-gray-200 transition-colors shadow-[4px_4px_0px_0px_black] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_black]"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage === TIMELINE.length - 1}
            className="p-2 border-2 border-black bg-white hover:bg-comic-yellow disabled:opacity-50 disabled:bg-gray-200 transition-colors shadow-[4px_4px_0px_0px_black] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_black]"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      {/* The Page Display */}
      <div className="min-h-[600px] flex items-center justify-center">
        {/* We pass a key to force re-render animation when page changes */}
        <StoryPage
          key={currentPage}
          data={TIMELINE[currentPage]}
          pageIndex={currentPage}
          totalPages={TIMELINE.length}
        />
      </div>

      {/* Progress Bar */}
      <div className="max-w-xs mx-auto mt-8 flex gap-1 justify-center">
        {TIMELINE.map((_, i) => (
          <div
            key={i}
            className={`h-2 flex-1 border border-black ${i === currentPage ? "bg-comic-red" : "bg-white"}`}
          />
        ))}
      </div>
    </section>
  );
}
