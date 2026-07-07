import Avatar from "./Avatar";
import { initialsOf } from "@/lib/initials";

function ImageIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.5" fill="currentColor" stroke="none" />
      <path d="M21 16l-5.5-5.5a2 2 0 00-2.8 0L4 19" />
    </svg>
  );
}

export default function ImageMessageBubble({
  name,
  time,
}: {
  name: string;
  time: string;
}) {
  return (
    <div className="flex items-start gap-2">
      <Avatar initials={initialsOf(name)} tone="slate" />
      <div className="flex max-w-[78%] flex-col items-start">
        <div className="flex h-36 w-56 items-center justify-center overflow-hidden rounded-2xl rounded-bl-sm bg-gradient-to-br from-slate-200 to-slate-300 text-slate-400 shadow-sm">
          <ImageIcon className="h-8 w-8" />
        </div>
        <span className="mt-1 px-1 text-[11px] text-slate-400">{time}</span>
      </div>
    </div>
  );
}
