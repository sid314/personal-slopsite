import { motion } from "framer-motion";
import {
  Terminal,
  Cpu,
  Zap,
  Github,
  Linkedin,
  Mail,
  ShoppingCart,
  Star,
  Box,
  Ghost,
} from "lucide-react";

// --- Data: The Inventory ---
const INVENTORY = [
  {
    issue: "#001",
    title: "NUCLEO ORIGINS",
    subtitle: "The Bare Metal Saga",
    price: "OPEN SRC",
    desc: "Direct register manipulation on STM32F446RE. No HAL attached.",
    color: "bg-comic-blue",
    icon: Zap,
  },
  {
    issue: "#002",
    title: "SEATHRU VISION",
    subtitle: "Underwater NeRFs",
    price: "W.I.P.",
    desc: "Physics-informed AI seeing through the murky depths of robotics.",
    color: "bg-comic-green",
    icon: Ghost,
  },
  {
    issue: "#003",
    title: "LAZYVIM CONFIG",
    subtitle: "The Tools of War",
    price: "FREE",
    desc: "A custom Lua-powered environment for embedded warriors.",
    color: "bg-comic-red",
    icon: Terminal,
  },
];

// --- Components ---

const Barcode = () => (
  <div className="barcode opacity-80">
    {[...Array(15)].map((_, i) => (
      <span key={i} style={{ height: Math.random() * 20 + 10 + "px" }}></span>
    ))}
  </div>
);

export default function App() {
  return (
    <main className="min-h-screen max-w-6xl mx-auto font-sans text-ink pb-20 border-x-2 border-black/5 bg-paper shadow-2xl">
      {/* 1. STORE MARQUEE */}
      <div className="bg-black text-white px-4 py-2 text-center text-xs font-black tracking-widest uppercase border-b-2 border-white">
        ★ GRAND OPENING ★ FREE SHIPPING ON ALL COMMITS ★
      </div>

      <nav className="p-6 border-b-4 border-black flex flex-col md:flex-row justify-between items-center gap-6 bg-white sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="bg-comic-red p-2 border-2 border-black shadow-[3px_3px_0px_0px_black] rotate-2">
            <Box size={24} strokeWidth={3} className="text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-black tracking-tighter leading-none italic transform -skew-x-6">
              BARE METAL
            </h1>
            <h2 className="text-sm font-bold tracking-widest bg-comic-yellow inline-block px-1 border border-black">
              COMICS & CODE
            </h2>
          </div>
        </div>

        <div className="flex gap-6 font-black text-sm uppercase tracking-wide">
          <a
            href="#"
            className="hover:text-comic-red hover:underline decoration-4 underline-offset-4"
          >
            New Arrivals
          </a>
          <a
            href="#"
            className="hover:text-comic-blue hover:underline decoration-4 underline-offset-4"
          >
            Back Issues
          </a>
          <a
            href="#"
            className="hover:text-comic-green hover:underline decoration-4 underline-offset-4"
          >
            Creator
          </a>
        </div>

        <button className="flex items-center gap-2 bg-black text-white px-5 py-2 font-bold border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
          <ShoppingCart size={18} /> <span>CART (0)</span>
        </button>
      </nav>

      {/* 2. STAFF PICK (Hero Section) */}
      <section className="p-8 md:p-16 grid md:grid-cols-2 gap-12 items-center bg-white border-b-4 border-black">
        {/* The "Ad Copy" */}
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
            <button className="bg-comic-red text-white border-2 border-black px-8 py-3 font-black text-xl uppercase italic shadow-[4px_4px_0px_0px_black] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_black] transition-all">
              Read Bio
            </button>
            <div className="flex gap-2">
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-3 border-2 border-black bg-white text-black hover:bg-comic-yellow transition-colors"
                >
                  <Icon size={20} strokeWidth={2.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* The "Big Cover" Display */}
        <div className="relative rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
          <div className="comic-cover bg-white aspect-[3/4] flex flex-col border-[4px]">
            {/* Comic Header */}
            <div className="bg-comic-yellow text-black p-2 flex justify-between items-center text-xs font-black border-b-2 border-black uppercase">
              <span>Mar 2026</span>
              <span>Vol. 1</span>
              <span>$0.00</span>
            </div>

            {/* Cover Art Area */}
            <div className="flex-grow bg-comic-blue relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:10px_10px] opacity-20" />
              <Cpu
                size={140}
                strokeWidth={1.5}
                className="text-white drop-shadow-[4px_4px_0px_black]"
              />

              {/* Speech Bubble on Cover */}
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

            {/* Comic Footer */}
            <div className="p-4 border-t-2 border-black bg-white">
              <h3 className="font-black text-3xl leading-none text-black italic">
                THE ARCHITECT
              </h3>
              <div className="flex justify-between items-end mt-2 text-black">
                <span className="text-xs font-mono font-bold bg-black text-white px-1">
                  STM32 / RTOS / C++
                </span>
                <Barcode />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEW ARRIVALS (The Inventory Rack) */}
      <section className="px-6 md:px-12 mt-16">
        <div className="flex items-end justify-between mb-2">
          <h3 className="text-3xl font-black italic tracking-tight flex items-center gap-2 text-black transform -skew-x-6">
            <Star className="fill-comic-yellow text-black" size={28} /> FRESH
            OFF THE PRESS
          </h3>
          <a
            href="#"
            className="text-sm font-bold bg-black text-white px-2 py-1 rotate-1 hover:-rotate-1 transition-transform"
          >
            VIEW ALL ISSUES
          </a>
        </div>

        {/* The Shelf Visual */}
        <div className="shelf w-full mb-12 relative">
          <div className="absolute -top-3 right-10 bg-white border border-black px-2 text-[10px] font-bold rotate-3">
            STAFF RECOMMENDED
          </div>
        </div>

        {/* The Comic Rack */}
        <div className="grid md:grid-cols-3 gap-8 px-4">
          {INVENTORY.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              {/* The Issue Cover */}
              <div className="comic-cover aspect-[2/3] flex flex-col mb-4">
                {/* Top Strip */}
                <div className="bg-black text-white px-3 py-1 text-[10px] font-bold flex justify-between uppercase">
                  <span>{item.issue}</span>
                  <span className="text-comic-yellow">Approved Code</span>
                </div>

                {/* Cover Art */}
                <div
                  className={`flex-grow ${item.color} relative flex flex-col p-6 text-white border-b-2 border-black`}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:10px_10px]" />
                  <item.icon
                    size={64}
                    className="mb-auto opacity-100 drop-shadow-[3px_3px_0px_black]"
                    strokeWidth={2}
                  />
                  <h4 className="text-4xl font-black leading-none uppercase drop-shadow-[2px_2px_0px_black] italic">
                    {item.title}
                  </h4>
                  <p className="font-bold text-black bg-white inline-block px-1 text-xs mt-2 border border-black transform -skew-x-6">
                    {item.subtitle}
                  </p>
                </div>

                {/* Bottom Strip */}
                <div className="bg-white p-3 relative">
                  <p className="text-xs text-black font-bold leading-tight line-clamp-2 border-l-2 border-gray-300 pl-2">
                    {item.desc}
                  </p>
                  <div className="mt-3 flex justify-between items-center">
                    <Barcode />
                    <div className="price-tag text-xs">{item.price}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. FOOTER (Store Hours) */}
      <footer className="mt-24 border-t-4 border-black bg-white p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-comic-red"></div>
        <div className="absolute top-2 left-0 w-full h-2 bg-comic-blue"></div>
        <div className="absolute top-4 left-0 w-full h-2 bg-comic-yellow"></div>

        <h4 className="font-black text-3xl mb-4 text-black uppercase mt-6">
          Visit The Shop
        </h4>
        <div className="font-mono text-sm space-y-2 text-black font-bold">
          <p>OPEN 24/7 @ GITHUB.COM</p>
          <p>SUPPORT: CONTACT@EMAIL.COM</p>
        </div>
        <div className="mt-8 text-xs font-black opacity-50 text-black">
          © 2026 BARE METAL COMICS • NO REFUNDS ON BROKEN BUILDS
        </div>
      </footer>
    </main>
  );
}
