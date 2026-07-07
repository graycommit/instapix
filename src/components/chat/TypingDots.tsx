import Avatar from "./Avatar";

export default function TypingDots() {
  return (
    <div className="flex items-start gap-2">
      <Avatar initials="PX" tone="teal" />
      <div className="flex items-center gap-1 rounded-lg rounded-bl-sm border border-hairline bg-white px-4 py-3.5">
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400 [animation-delay:-0.3s]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400 [animation-delay:-0.15s]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400" />
      </div>
    </div>
  );
}
