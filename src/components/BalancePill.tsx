import { WalletIcon } from "./icons";

export default function BalancePill({ balance }: { balance: number }) {
  const formatted = balance.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <span className="flex items-center gap-1.5 rounded-lg bg-brand px-3 py-1.5 text-sm font-semibold tabular-nums text-white">
      <WalletIcon className="h-3.5 w-3.5" />
      R$ {formatted}
    </span>
  );
}
