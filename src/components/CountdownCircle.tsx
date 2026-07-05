"use client";

import { useEffect, useState } from "react";

export default function CountdownCircle({
  seconds,
  onComplete,
}: {
  seconds: number;
  onComplete: () => void;
}) {
  const [elapsed, setElapsed] = useState(0);
  const radius = 54;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const start = Date.now();
    const frame = requestAnimationFrame(function tick() {
      const value = Math.min((Date.now() - start) / (seconds * 1000), 1);
      setElapsed(value);
      if (value < 1) {
        requestAnimationFrame(tick);
      } else {
        onComplete();
      }
    });
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  const offset = circumference * (1 - elapsed);
  const remaining = Math.max(0, Math.ceil(seconds - elapsed * seconds));

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
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 100ms linear" }}
        />
      </svg>
      <span className="absolute text-2xl font-semibold text-zinc-900">
        {remaining}
      </span>
    </div>
  );
}
