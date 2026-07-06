"use client";

import { useEffect, useState } from "react";

export default function CountdownCircle({
  seconds,
  onComplete,
}: {
  seconds: number;
  onComplete: () => void;
}) {
  const [remaining, setRemaining] = useState(seconds);
  const [filled, setFilled] = useState(false);
  const radius = 52;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    // Defer to the next frame so the browser paints the empty ring first,
    // then transitions it to full over `seconds` via CSS.
    const raf = requestAnimationFrame(() => setFilled(true));

    const tickId = setInterval(() => {
      setRemaining((value) => (value > 1 ? value - 1 : 1));
    }, 1000);

    const completeId = setTimeout(onComplete, seconds * 1000);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(tickId);
      clearTimeout(completeId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  return (
    <div className="relative flex h-36 w-36 items-center justify-center drop-shadow-md">
      <svg viewBox="0 0 120 120" className="h-36 w-36 -rotate-90">
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#122A4D"
          strokeWidth="12"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#2DD4BF"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={filled ? 0 : circumference}
          style={{ transition: `stroke-dashoffset ${seconds}s linear` }}
        />
        <circle cx="60" cy="60" r="44" fill="white" />
      </svg>
      <span className="absolute text-4xl font-bold text-slate-900">
        {remaining}
      </span>
    </div>
  );
}
