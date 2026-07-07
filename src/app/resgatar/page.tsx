"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AppTopBar from "@/components/AppTopBar";
import BottomNav from "@/components/BottomNav";
import Confetti from "@/components/Confetti";
import ScratchCard from "@/components/ScratchCard";

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2c.6 3.4 2 4.8 5.4 5.4-3.4.6-4.8 2-5.4 5.4-.6-3.4-2-4.8-5.4-5.4C10 6.8 11.4 5.4 12 2z" />
      <path d="M19 14c.3 1.7 1 2.4 2.7 2.7-1.7.3-2.4 1-2.7 2.7-.3-1.7-1-2.4-2.7-2.7 1.7-.3 2.4-1 2.7-2.7z" />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 018 0v4" />
    </svg>
  );
}

export default function ResgatarPage() {
  const router = useRouter();
  const [percent, setPercent] = useState(0);
  const [prizeAmount, setPrizeAmount] = useState(71.27);
  const revealed = percent >= 100;
  const handleProgress = useCallback((value: number) => setPercent(value), []);

  useEffect(() => {
    const amount = Math.round((35 + Math.random() * 85) * 100) / 100;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- randomizes client-side only, after the deterministic SSR value, to avoid a hydration mismatch.
    setPrizeAmount(amount);
  }, []);

  const formattedPrize = prizeAmount.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="flex min-h-dvh flex-col bg-teal-50/40">
      <AppTopBar balance={revealed ? prizeAmount : 0} />

      <main className="relative flex-1 select-none px-5 pb-6 text-center">
        {revealed && <Confetti />}

        <h1 className="relative text-xl font-bold text-teal-950">
          {revealed ? "Parabéns!" : "Parabéns! Você foi selecionado"}
        </h1>
        <p className="relative mt-1 text-sm text-slate-500">
          {revealed ? "Você foi selecionado" : "Raspe abaixo e descubra seu prêmio"}
        </p>

        {revealed ? (
          <div className="relative mt-6 rounded-3xl bg-white p-8 shadow-sm">
            <div className="absolute -left-2 -top-2 flex h-9 w-9 items-center justify-center rounded-full bg-white text-teal-500 shadow-md">
              <SparkleIcon className="h-4 w-4" />
            </div>
            <p className="text-xs font-bold tracking-widest text-slate-700">
              VOCÊ GANHOU!
            </p>
            <p className="mt-2 text-4xl font-extrabold text-teal-600">
              R$ {formattedPrize}
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-teal-50 px-4 py-3 text-xs leading-snug text-teal-700">
              <LockIcon className="h-3.5 w-3.5 shrink-0" />
              <span>
                Este valor será creditado em sua conta após o cadastro
              </span>
            </div>
          </div>
        ) : (
          <>
            <div className="relative mt-6">
              <ScratchCard prizeLabel={`R$ ${formattedPrize}`} onProgress={handleProgress} />
              <div className="absolute -right-2 -top-2 flex h-9 w-9 items-center justify-center rounded-full bg-white text-teal-500 shadow-md">
                <SparkleIcon className="h-4 w-4" />
              </div>
            </div>

            <p className="mt-5 text-sm text-slate-500">
              Continue raspando para revelar 100% do seu prêmio
            </p>

            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-teal-600 transition-all duration-300"
                style={{ width: `${percent}%` }}
              />
            </div>
            <p className="mt-2 text-sm font-bold tracking-wide text-teal-700">
              {percent}% REVELADO
            </p>
          </>
        )}

        <button
          type="button"
          disabled={!revealed}
          onClick={() => router.push("/entrar")}
          className="relative mt-6 flex w-full items-center justify-center gap-2 rounded-2xl py-4 font-semibold text-white transition-colors disabled:cursor-not-allowed disabled:bg-teal-300/60 enabled:bg-teal-900 enabled:hover:bg-teal-950"
        >
          Quero resgatar
          {!revealed && <LockIcon className="h-4 w-4" />}
        </button>

        <p className="relative mt-2 text-xs text-slate-400">
          {revealed ? "Complete seu cadastro para receber" : "Leva menos de 1 minuto"}
        </p>
      </main>

      <BottomNav />
    </div>
  );
}
