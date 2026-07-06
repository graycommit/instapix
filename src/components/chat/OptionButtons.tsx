export default function OptionButtons({
  options,
  onSelect,
}: {
  options: string[];
  onSelect: (option: string) => void;
}) {
  return (
    <div className="ml-9 flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onSelect(option)}
          className="rounded-full border border-teal-400 px-4 py-2 text-sm font-medium text-teal-600 transition-colors hover:bg-teal-50"
        >
          {option}
        </button>
      ))}
    </div>
  );
}
