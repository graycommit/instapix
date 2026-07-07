const PIECES = [
  { top: "4%", left: "8%", size: 8, color: "#5eead4", rotate: 15 },
  { top: "10%", left: "85%", size: 10, color: "#f472b6", rotate: -20 },
  { top: "18%", left: "4%", size: 6, color: "#fb923c", rotate: 35 },
  { top: "2%", left: "45%", size: 7, color: "#2dd4bf", rotate: -10 },
  { top: "26%", left: "90%", size: 9, color: "#5eead4", rotate: 25 },
  { top: "34%", left: "3%", size: 8, color: "#f472b6", rotate: -15 },
  { top: "8%", left: "65%", size: 6, color: "#fb923c", rotate: 40 },
  { top: "42%", left: "94%", size: 7, color: "#2dd4bf", rotate: 5 },
  { top: "48%", left: "12%", size: 6, color: "#f472b6", rotate: 30 },
  { top: "0%", left: "25%", size: 5, color: "#fb923c", rotate: -25 },
  { top: "38%", left: "70%", size: 6, color: "#5eead4", rotate: 12 },
  { top: "16%", left: "55%", size: 5, color: "#2dd4bf", rotate: -30 },
];

export default function Confetti() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {PIECES.map((piece, index) => (
        <span
          key={index}
          className="absolute rounded-sm"
          style={{
            top: piece.top,
            left: piece.left,
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
}
