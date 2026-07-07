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
              ? "rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ink-soft"
              : "rounded-lg border border-hairline bg-white px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-neutral-50"
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
}
