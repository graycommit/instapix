const TONES = {
  teal: "bg-teal-500",
  slate: "bg-slate-400",
} as const;

export default function Avatar({
  initials,
  tone = "slate",
}: {
  initials: string;
  tone?: keyof typeof TONES;
}) {
  return (
    <div
      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white ${TONES[tone]}`}
    >
      {initials}
    </div>
  );
}
