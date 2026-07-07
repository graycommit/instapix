export default function QuickReplyRow({
  options,
  onSelect,
}: {
  options: string[];
  onSelect: (option: string) => void;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {options.map((option, index) => (
        <button
          key={option}
          type="button"
          onClick={() => onSelect(option)}
          className={
            index === 0
              ? "rounded-full bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
              : "rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
}
