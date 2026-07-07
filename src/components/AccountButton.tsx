import { PersonIcon } from "./icons";

export default function AccountButton() {
  return (
    <button
      type="button"
      aria-label="Conta"
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-hairline bg-white text-ink-soft"
    >
      <PersonIcon className="h-4 w-4" />
    </button>
  );
}
