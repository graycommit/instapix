export default function AppTopBar({ balance }: { balance: number }) {
  const formatted = balance.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <header className="flex items-center justify-between px-4 py-4">
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Conta"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-500 shadow-sm"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-4 w-4"
          >
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="10" r="3" />
            <path d="M6.5 18.2a6 6 0 0111 0" />
          </svg>
        </button>
        <span className="text-lg font-bold text-teal-900">FastPay</span>
      </div>

      <span className="rounded-full border border-teal-100 bg-white px-3 py-1.5 text-sm font-semibold text-teal-700 shadow-sm">
        R$ {formatted}
      </span>
    </header>
  );
}
