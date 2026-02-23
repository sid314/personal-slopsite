import { useState } from "react";
import { Cpu, Mail, Star } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReceiptDrawer from "../components/ReceiptDrawer";
import ComicCover from "../components/ComicCover";
import Barcode from "../components/Barcode";
import { PROJECTS } from "../data/projects";

// --- GLOBAL CONFIG ---
const SOCIAL_LINKS = [
  {
    type: "devicon",
    iconClass: "devicon-github-original text-black",
    href: "https://github.com",
  },
  {
    type: "devicon",
    iconClass: "devicon-linkedin-plain text-black",
    href: "https://linkedin.com",
  },
  {
    type: "lucide",
    icon: Mail,
    href: "mailto:you@example.com",
  },
];

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <main className="min-h-screen max-w-6xl mx-auto font-sans text-ink pb-20 border-x-2 border-black/5 bg-paper shadow-2xl relative">
      {/* CART DRAWER */}
      <ReceiptDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* NAVBAR */}
      <Navbar onOpenCart={() => setIsCartOpen(true)} cartCount={1} />

      {/* STAFF PICK (HERO SECTION) */}
      <section className="p-8 md:p-16 grid md:grid-cols-2 gap-12 items-center bg-white border-b-4 border-black">
        {/* Left Column: Text & Socials */}
        <div>
          <div className="inline-block border-2 border-black px-3 py-1 text-xs font-black mb-4 bg-comic-purple text-white rotate-2 shadow-[3px_3px_0px_0px_black]">
            STAFF PICK OF THE MONTH
          </div>

          <h2 className="text-6xl md:text-8xl font-black mb-6 leading-[0.9] drop-shadow-sm text-black uppercase transform -skew-x-3">
            Man Vs <br />{" "}
            <span
              className="text-comic-blue text-stroke-2"
              style={{ WebkitTextStroke: "2px black" }}
            >
              Machine!
            </span>
          </h2>

          <p className="text-xl font-bold text-gray-700 mb-8 max-w-md border-l-8 border-comic-yellow pl-4">
            "He writes code that hits harder than a freight train!" <br />
            <span className="text-sm text-gray-400 font-medium">
              — The Daily Planet
            </span>
          </p>

          <div className="flex gap-4">
            <button className="bg-comic-red text-white border-2 border-black px-8 py-3 font-black text-xl uppercase italic shadow-[4px_4px_0px_0px_black] hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_black] transition-all">
              Read Bio
            </button>

            {/* Social Icons */}
            <div className="flex gap-2">
              {SOCIAL_LINKS.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="p-3 border-2 border-black bg-white text-black hover:bg-comic-yellow transition-colors flex items-center justify-center min-w-12.5"
                >
                  {link.type === "devicon" ? (
                    <i className={`${link.iconClass} text-2xl`}></i>
                  ) : (
                    // @ts-expect-error - lucide-react icon component typing
                    <link.icon size={24} strokeWidth={2.5} />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: The "Big Cover" */}
        <div className="relative -rotate-2 hover:rotate-0 transition-transform duration-300">
          <div className="comic-cover bg-white aspect-3/4 flex flex-col border-4">
            <div className="bg-comic-yellow text-black p-2 flex justify-between items-center text-xs font-black border-b-2 border-black uppercase">
              <span>Mar 2026</span>
              <span>Vol. 1</span>
              <span>$0.00</span>
            </div>

            <div className="grow bg-comic-blue relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-size-[10px_10px] opacity-20" />
              <Cpu
                size={140}
                strokeWidth={1.5}
                className="text-white drop-shadow-[4px_4px_0px_black]"
              />
              <div className="absolute top-8 left-8 bg-white border-2 border-black px-4 py-2 rounded-[50%] rounded-bl-none shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                <p className="text-xs font-black leading-tight text-center">
                  NO <br />
                  HAL!
                </p>
              </div>
              <div className="absolute bottom-4 right-4 bg-comic-red text-white px-3 py-1 font-black text-2xl border-2 border-black -rotate-6 shadow-[3px_3px_0px_0px_black]">
                POW!
              </div>
            </div>

            <div className="p-4 border-t-2 border-black bg-white">
              <h3 className="font-black text-3xl leading-none text-black italic">
                THE ARCHITECT
              </h3>
              <div className="flex justify-between items-end mt-2 text-black">
                <span className="text-xs font-mono font-bold bg-black text-white px-1">
                  STM32 / RTOS / C++
                </span>
                <Barcode className="opacity-100" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS (CLEAN VERSION) */}
      <section
        id="new"
        className="px-6 md:px-12 py-16 scroll-mt-20 bg-transparent"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <h3 className="text-3xl md:text-5xl font-black italic tracking-tight flex items-center gap-3 text-black transform -skew-x-6">
            <div className="bg-comic-yellow border-2 border-black p-1 shadow-[2px_2px_0px_black]">
              <Star className="text-black" size={24} fill="currentColor" />
            </div>
            FRESH OFF THE PRESS
          </h3>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-gray-500 uppercase tracking-widest hidden md:block">
              // UPDATED: {new Date().toLocaleDateString()}
            </span>
            <div className="h-1 w-12 bg-black md:hidden"></div>
          </div>
        </div>

        {/* The Grid of Comics */}
        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS.slice(0, 3).map((item, i) => (
            <ComicCover key={i} item={item} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
