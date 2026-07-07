import Avatar from "./Avatar";

export default function TypingDots() {
  return (
    <div className="flex items-start gap-2">
      <Avatar initials="PX" tone="teal" />
      <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-white px-4 py-3.5 shadow-sm">
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:-0.3s]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400 [animation-delay:-0.15s]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-zinc-400" />
      </div>
    </div>
  );
}
