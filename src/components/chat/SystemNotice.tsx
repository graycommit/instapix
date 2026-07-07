export default function SystemNotice({ text }: { text: string }) {
  return (
    <div className="flex justify-center">
      <span className="rounded-full bg-black/5 px-3 py-1 text-xs text-slate-500">
        {text}
      </span>
    </div>
  );
}
