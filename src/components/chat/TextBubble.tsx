import Avatar from "./Avatar";
import { initialsOf } from "@/lib/initials";

export default function TextBubble({
  variant,
  name,
  text,
  time,
}: {
  variant: "bot" | "agent";
  name?: string;
  text: string;
  time: string;
}) {
  return (
    <div className="flex items-start gap-2">
      <Avatar
        initials={variant === "bot" ? "PX" : initialsOf(name ?? "")}
        tone={variant === "bot" ? "teal" : "slate"}
      />
      <div className="flex max-w-[78%] flex-col items-start">
        <div
          className={`rounded-2xl rounded-bl-sm px-4 py-3 text-sm leading-relaxed ${
            variant === "bot"
              ? "bg-teal-500 text-white"
              : "bg-white text-slate-800 shadow-sm"
          }`}
        >
          {variant === "agent" && name && (
            <p className="mb-0.5 text-xs font-bold text-teal-700">{name}</p>
          )}
          <p>{text}</p>
        </div>
        <span className="mt-1 px-1 text-[11px] text-slate-400">{time}</span>
      </div>
    </div>
  );
}
