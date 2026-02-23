export default function Barcode({ className = "" }: { className?: string }) {
  const heights = [25, 18, 30, 22, 28, 15, 20, 26, 19, 24, 17, 22, 28, 20, 16];
  
  return (
    <div className={`barcode flex items-end gap-[2px] h-[30px] ${className}`}>
      {heights.map((height, i) => (
        <span
          key={i}
          className="bg-current block"
          style={{
            height: height + "px",
            width: i % 2 === 0 ? "4px" : i % 3 === 0 ? "1px" : "2px",
          }}
        ></span>
      ))}
    </div>
  );
}
