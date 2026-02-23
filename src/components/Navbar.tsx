import { Link, useLocation, useNavigate } from "react-router-dom"; // Import these hooks
import { Box, ShoppingCart } from "lucide-react";

interface NavbarProps {
  onOpenCart: () => void;
  cartCount: number;
}

export default function Navbar({ onOpenCart, cartCount }: NavbarProps) {
  const location = useLocation();
  const navigate = useNavigate();

  // THE FIX: Custom Scroll Handler
  const handleScrollToNew = (e: React.MouseEvent) => {
    e.preventDefault(); // 1. Stop React Router from changing the URL

    // 2. Check if we are on the Home page ("/")
    if (location.pathname !== "/") {
      // If we are on "/about", go to Home first, then scroll
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById("new");
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 100); // Small delay to let the page load
    } else {
      // If we are already on Home, just scroll
      const section = document.getElementById("new");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
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
          {/* UPDATED LINK */}
          <a
            href="#new"
            onClick={handleScrollToNew}
            className="hover:text-comic-red hover:underline decoration-4 underline-offset-4 cursor-pointer"
          >
            New Arrivals
          </a>

          <Link
            to="/back-issues"
            className="hover:text-comic-blue hover:underline decoration-4 underline-offset-4"
          >
            Back Issues
          </Link>

          <Link
            to="/about"
            className="hover:text-comic-green hover:underline decoration-4 underline-offset-4"
          >
            Creator
          </Link>
        </div>

        <button
          onClick={onOpenCart}
          className="flex items-center gap-2 bg-black text-white px-5 py-2 font-bold border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
        >
          <ShoppingCart size={18} /> <span>CART ({cartCount})</span>
        </button>
      </nav>
    </>
  );
}
