import Avatar from "./Avatar";
import { initialsOf } from "@/lib/initials";
import { ImageIcon } from "@/components/icons";

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
        <div className="flex h-36 w-56 items-center justify-center overflow-hidden rounded-lg rounded-bl-sm border border-hairline bg-neutral-100 text-neutral-400">
          <ImageIcon className="h-8 w-8" />
        </div>
        <span className="mt-1 px-1 text-[11px] text-neutral-400">{time}</span>
      </div>
    </div>
  );
}
