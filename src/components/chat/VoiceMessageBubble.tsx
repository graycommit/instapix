"use client";

import { useState } from "react";
import Avatar from "./Avatar";
import { initialsOf } from "@/lib/initials";

const BAR_HEIGHTS = [4, 8, 14, 10, 16, 7, 12, 5, 9, 13, 6, 11, 8, 4];

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M7 5.5v13l11-6.5z" />
    </svg>
  );
}

function PauseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <rect x="6" y="5" width="4" height="14" rx="1" />
      <rect x="14" y="5" width="4" height="14" rx="1" />
    </svg>
  );
}

export default function VoiceMessageBubble({
  name,
  duration,
  time,
}: {
  name: string;
  duration: string;
  time: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="flex items-start gap-2">
      <Avatar initials={initialsOf(name)} tone="slate" />
      <div className="flex max-w-[78%] flex-col items-start">
        <div className="rounded-lg rounded-bl-sm border border-hairline bg-white px-4 py-3">
          <p className="mb-1.5 text-xs font-semibold text-brand">Mensagem de voz</p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPlaying((value) => !value)}
              aria-label={playing ? "Pausar" : "Reproduzir"}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-white"
            >
              {playing ? (
                <PauseIcon className="h-3.5 w-3.5" />
              ) : (
                <PlayIcon className="h-3.5 w-3.5 translate-x-0.5" />
              )}
            </button>
            <div className="flex h-4 items-center gap-0.5">
              {BAR_HEIGHTS.map((height, index) => (
                <span
                  key={index}
                  className={`w-0.5 rounded-full bg-brand-light ${playing ? "animate-pulse" : ""}`}
                  style={{ height, animationDelay: `${index * 60}ms` }}
                />
              ))}
            </div>
            <span className="text-xs tabular-nums text-neutral-400">{duration}</span>
          </div>
        </div>
        <span className="mt-1 px-1 text-[11px] text-neutral-400">{time}</span>
      </div>
    </div>
  );
}
