export default function Barcode({ className = "" }: { className?: string }) {
  return (
    <div className={`barcode flex items-end gap-[2px] h-[30px] ${className}`}>
      {[...Array(15)].map((_, i) => (
        <span
          key={i}
          className="bg-current block"
          style={{
            height: Math.random() * 20 + 10 + "px",
            width: i % 2 === 0 ? "4px" : i % 3 === 0 ? "1px" : "2px",
          }}
        ></span>
      ))}
    </div>
  );
}
