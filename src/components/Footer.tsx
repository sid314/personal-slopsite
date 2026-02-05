export default function Footer() {
  return (
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
  );
}
