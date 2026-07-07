const PIECES = [
  { left: "6%", size: 8, color: "#5eead4", delay: 0, duration: 2.4 },
  { left: "16%", size: 6, color: "#fb923c", delay: 0.5, duration: 2.8 },
  { left: "26%", size: 7, color: "#f472b6", delay: 1.1, duration: 2.2 },
  { left: "36%", size: 6, color: "#2dd4bf", delay: 0.2, duration: 3.0 },
  { left: "46%", size: 9, color: "#fb923c", delay: 0.8, duration: 2.5 },
  { left: "56%", size: 6, color: "#5eead4", delay: 1.4, duration: 2.7 },
  { left: "64%", size: 7, color: "#f472b6", delay: 0.3, duration: 2.3 },
  { left: "72%", size: 6, color: "#2dd4bf", delay: 1.7, duration: 2.9 },
  { left: "80%", size: 8, color: "#fb923c", delay: 0.6, duration: 2.6 },
  { left: "88%", size: 5, color: "#5eead4", delay: 1.0, duration: 2.4 },
  { left: "94%", size: 6, color: "#f472b6", delay: 0.1, duration: 3.1 },
  { left: "10%", size: 5, color: "#2dd4bf", delay: 1.9, duration: 2.5 },
];

export default function Confetti() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {PIECES.map((piece, index) => (
        <span
          key={index}
          className="animate-confetti-fall absolute top-0 rounded-sm"
          style={{
            left: piece.left,
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
