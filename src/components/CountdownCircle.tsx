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
  const radius = 54;
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
    <div className="relative flex h-32 w-32 items-center justify-center">
      <svg viewBox="0 0 120 120" className="h-32 w-32 -rotate-90">
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="8"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#2DD4BF"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={filled ? 0 : circumference}
          style={{ transition: `stroke-dashoffset ${seconds}s linear` }}
        />
      </svg>
      <span className="absolute text-2xl font-semibold text-zinc-900">
        {remaining}
      </span>
    </div>
  );
}
