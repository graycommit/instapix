"use client";

import { useEffect, useState } from "react";

export default function SecondsRing({
  seconds,
  onComplete,
}: {
  seconds: number;
  onComplete: () => void;
}) {
  const [remaining, setRemaining] = useState(seconds);
  const [depleted, setDepleted] = useState(false);
  const radius = 84;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    // Defer to the next frame so the browser paints the full ring first,
    // then transitions it to empty over `seconds` via CSS.
    const raf = requestAnimationFrame(() => setDepleted(true));

    const tickId = setInterval(() => {
      setRemaining((value) => (value > 0 ? value - 1 : 0));
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
    <div className="relative flex h-48 w-48 items-center justify-center">
      <svg viewBox="0 0 200 200" className="h-48 w-48 -rotate-90">
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="#E2E8F0"
          strokeWidth="6"
        />
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="#14B8A6"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={depleted ? circumference : 0}
          style={{ transition: `stroke-dashoffset ${seconds}s linear` }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-5xl font-bold text-teal-900">{remaining}</span>
        <span className="mt-1 text-xs font-semibold tracking-widest text-slate-400">
          SEGUNDOS
        </span>
      </div>
    </div>
  );
}
