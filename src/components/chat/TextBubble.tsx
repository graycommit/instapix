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
          className={`rounded-lg rounded-bl-sm px-4 py-3 text-sm leading-relaxed ${
            variant === "bot"
              ? "bg-brand text-white"
              : "border border-hairline bg-white text-ink"
          }`}
        >
          {variant === "agent" && name && (
            <p className="mb-0.5 text-xs font-semibold text-brand">{name}</p>
          )}
          <p>{text}</p>
        </div>
        <span className="mt-1 px-1 text-[11px] text-neutral-400">{time}</span>
      </div>
    </div>
  );
}
