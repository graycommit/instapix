import AssistantAvatar from "./AssistantAvatar";

export default function MessageBubble({
  text,
  side,
}: {
  text: string;
  side: "bot" | "user";
}) {
  if (side === "user") {
    return (
      <div className="flex justify-end">
        <div className="max-w-[75%] rounded-2xl rounded-br-sm bg-teal-500 px-4 py-3 text-sm text-white">
          {text}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-end gap-2">
      <AssistantAvatar />
      <div className="max-w-[75%] rounded-2xl rounded-bl-sm bg-white px-4 py-3 text-sm text-zinc-800 shadow-sm">
        {text}
      </div>
    </div>
  );
}
