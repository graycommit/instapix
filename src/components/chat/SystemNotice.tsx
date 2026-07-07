export default function SystemNotice({ text }: { text: string }) {
  return (
    <div className="flex justify-center">
      <span className="rounded-lg bg-neutral-100 px-3 py-1 text-xs text-neutral-500">
        {text}
      </span>
    </div>
  );
}
