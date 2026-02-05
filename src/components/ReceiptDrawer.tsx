import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ReceiptDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-70 shadow-[-10px_0px_30px_rgba(0,0,0,0.5)] flex flex-col font-mono text-sm"
          >
            {/* Header */}
            <div className="bg-zinc-100 p-6 border-b-2 border-dashed border-gray-300 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
              <div className="text-center space-y-1">
                <h2 className="text-2xl font-black uppercase tracking-tighter">
                  BARE METAL SHOP
                </h2>
                <p className="text-xs text-gray-500">127.0.0.1 - LOCALHOST</p>
              </div>
            </div>

            {/* Body */}
            <div className="grow p-6 overflow-y-auto space-y-6 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]">
              <div className="space-y-4">
                <div className="flex justify-between font-bold border-b-2 border-black pb-1">
                  <span>QTY ITEM</span>
                  <span>AMT</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold">1x EMBEDDED ENGINEER</p>
                      <p className="text-xs text-gray-500">SKU: STM32-EXP</p>
                    </div>
                    <span className="font-bold">HIRE</span>
                  </div>
                </div>
              </div>
              <div className="border-t-2 border-dashed border-gray-300 my-4"></div>
              <div className="flex justify-between font-black text-xl mt-2">
                <span>TOTAL</span>
                <span>OFFER?</span>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 bg-zinc-100 border-t-2 border-black">
              <a
                href="mailto:your@email.com"
                className="block w-full bg-black text-white text-center py-4 font-black text-lg hover:bg-comic-blue transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:-translate-y-1"
              >
                PROCEED TO CHECKOUT
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
