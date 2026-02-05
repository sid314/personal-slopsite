import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-white border-t-4 border-black mt-24 pt-16 pb-8 px-6 overflow-hidden">
      {/* 1. DECORATIVE TOP STRIPS (Printer's Color Bars) */}
      <div className="absolute top-0 left-0 w-full h-2 bg-comic-blue"></div>
      <div className="absolute top-2 left-0 w-full h-2 bg-comic-red"></div>
      <div className="absolute top-4 left-0 w-full h-2 bg-comic-yellow"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 relative z-10">
        {/* COL 1: THE "MAILBAG" (Contact Section) - Span 4 */}
        <div className="md:col-span-4 space-y-6">
          <div className="relative">
            <h4 className="font-black text-3xl uppercase italic transform -skew-x-6 inline-block bg-black text-white px-2 py-1 shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">
              The Mailbag
            </h4>
            <div className="absolute -right-6 -top-4 rotate-12 bg-comic-yellow text-black border-2 border-black text-[10px] font-bold px-2 py-1 rounded-full">
              WRITE IN!
            </div>
          </div>

          <div className="bg-gray-100 border-2 border-black p-4 relative">
            {/* Speech Bubble Tail */}
            <div className="absolute -top-3 left-8 w-4 h-4 bg-gray-100 border-t-2 border-l-2 border-black transform rotate-45"></div>

            <p className="font-medium text-sm leading-relaxed">
              "Dear Editor, <br />
              <br />
              I'm looking for an engineer who can debug race conditions without
              losing their mind. Do you know anyone?"
              <br />
              <span className="font-bold block mt-2 text-right">
                — A. Recruiter
              </span>
            </p>
          </div>

          <a
            href="mailto:your@email.com"
            className="group flex items-center justify-between border-2 border-black bg-white p-3 hover:bg-black hover:text-white transition-colors cursor-pointer shadow-[4px_4px_0px_black] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_black]"
          >
            <span className="font-black uppercase">Send a Letter</span>
            <Mail
              size={20}
              className="group-hover:rotate-12 transition-transform"
            />
          </a>
        </div>

        {/* COL 2: THE "INDICIA" (Tech Stack & Legal) - Span 8 */}
        <div className="md:col-span-8 flex flex-col justify-between">
          {/* The "Legal" Text Block */}
          <div className="bg-paper border-2 border-black p-6 text-xs font-mono relative h-full">
            {/* "Approved" Stamp */}
            <div className="absolute -top-4 -right-4 bg-comic-green text-white border-2 border-black w-16 h-16 rounded-full flex items-center justify-center font-black text-[10px] uppercase rotate-12 shadow-sm text-center leading-none">
              Bug
              <br />
              Free
            </div>

            <h5 className="font-black text-lg uppercase mb-2 border-b-2 border-black inline-block">
              BARE METAL COMICS VOL. 1
            </h5>

            <p className="leading-relaxed opacity-80 mb-4 columns-1 md:columns-2 gap-8">
              <strong>PUBLISHED BY:</strong> Abdullah Engineering Ltd. <br />
              <strong>INKER:</strong> Tailwind CSS v4. <br />
              <strong>PENCILLER:</strong> React & Vite. <br />
              <strong>LETTERER:</strong> Framer Motion. <br />
              <br />
              This portfolio is a work of non-fiction. Any resemblance to actual
              spaghetti code is purely coincidental. No `hal_delay(1000)` was
              used in the making of this website. Optimization level -O3 applied
              where applicable.
              <br />
              <br />
              <strong>CAUTION:</strong> May contain traces of C pointers and
              manual memory management. Keep away from direct sunlight and Java
              developers.
            </p>

            <div className="border-t-2 border-black pt-4 flex flex-wrap gap-4 font-bold text-[10px] uppercase tracking-widest text-gray-500">
              <span>© 2026 Abdullah</span>
              <span>•</span>
              <span>Printed in Vercel</span>
              <span>•</span>
              <span>Est. 199X</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM STRIP: Socials & Barcode */}
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t-4 border-black flex flex-col md:flex-row justify-between items-end gap-6">
        {/* Social Icons */}
        <div className="flex gap-4">
          {[
            { icon: "devicon-github-original", href: "https://github.com" },
            { icon: "devicon-linkedin-plain", href: "https://linkedin.com" },
            { icon: "devicon-twitter-original", href: "#" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              className="text-2xl hover:scale-125 transition-transform text-black"
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>

        {/* The Price & Barcode */}
        <div className="flex items-end gap-4">
          <div className="text-right">
            <span className="block text-[10px] font-black uppercase">
              Direct Edition
            </span>
            <span className="font-black text-xl">$ PRICELESS</span>
          </div>

          {/* CSS Barcode */}
          <div className="h-10 flex items-end gap-[2px]">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="bg-black"
                style={{
                  width: i % 3 === 0 ? "3px" : "1px",
                  height: i % 2 === 0 ? "100%" : "80%",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
