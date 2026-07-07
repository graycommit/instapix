function WalletIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18" />
      <circle cx="16" cy="14" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function ChatTopBar({
  name,
  balance,
}: {
  name: string;
  balance: number;
}) {
  const formatted = balance.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <header className="flex items-center justify-between border-b border-black/5 bg-white px-4 py-3">
      <span className="text-sm font-medium text-slate-500">{name}</span>
      <span className="flex items-center gap-1.5 rounded-full bg-teal-600 px-3 py-1.5 text-sm font-semibold text-white">
        <WalletIcon className="h-3.5 w-3.5" />
        R$ {formatted}
      </span>
    </header>
  );
}
