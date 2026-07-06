export default function ChatHeader({ balance }: { balance: number }) {
  const formatted = balance.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <header className="flex items-center justify-between gap-3 bg-slate-900 px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="relative shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-teal-600 text-sm font-semibold text-white">
            PS
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-slate-900 bg-emerald-400" />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Paula Silva</p>
          <p className="text-xs text-teal-300">Gerente de Relacionamento e Cashback</p>
        </div>
      </div>

      <div className="text-right">
        <p className="text-[10px] uppercase tracking-wide text-slate-400">Saldo</p>
        <p className="text-sm font-semibold text-emerald-400 tabular-nums transition-all">
          R$ {formatted}
        </p>
      </div>
    </header>
  );
}
