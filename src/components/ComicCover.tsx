import { motion } from "framer-motion";
import Barcode from "./Barcode";
import type { InventoryItem } from "../data/inventory";

export default function ComicCover({ item }: { item: InventoryItem }) {
  return (
    <motion.div whileHover={{ y: -10 }} className="group cursor-pointer h-full">
      <div className="comic-cover aspect-2/3 flex flex-col mb-4 h-full">
        {/* Top Strip */}
        <div className="bg-black text-white px-3 py-1 text-[10px] font-bold flex justify-between uppercase">
          <span>{item.issue}</span>
          <span className="text-comic-yellow">Approved Code</span>
        </div>

        {/* Art */}
        <div
          className={`grow ${item.color} relative flex flex-col p-6 text-white border-b-2 border-black`}
        >
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-size-[10px_10px]" />
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
          <p className="text-xs text-black font-bold leading-tight line-clamp-2 border-l-2 border-gray-300 pl-2 mb-3">
            {item.desc}
          </p>
          <div className="mt-auto flex justify-between items-center">
            <Barcode className="opacity-80" />
            <div className="price-tag text-xs">{item.price}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
