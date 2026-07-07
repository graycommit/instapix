"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AccountButton from "@/components/AccountButton";
import AppTopBar from "@/components/AppTopBar";
import BalancePill from "@/components/BalancePill";
import BottomNav from "@/components/BottomNav";
import Brand from "@/components/Brand";
import PrimaryButton from "@/components/PrimaryButton";
import ScratchCard from "@/components/ScratchCard";
import { CheckBadgeIcon, LockIcon } from "@/components/icons";

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
      <AppTopBar
        left={
          <>
            <AccountButton />
            <Brand className="h-6" />
          </>
        }
        right={<BalancePill balance={revealed ? prizeAmount : 0} />}
      />

      <main className="relative flex-1 select-none px-5 pb-6 pt-6 text-center">
        <h1 className="relative text-xl font-bold text-slate-900">
          {revealed ? "Parabéns" : "Parabéns! Você foi selecionado"}
        </h1>
        <p className="relative mt-1 text-sm text-slate-500">
          {revealed ? "Você foi selecionado" : "Raspe abaixo e descubra seu prêmio"}
        </p>

        {revealed ? (
          <div className="animate-fade-up relative mt-6 rounded-3xl bg-white p-8 shadow-sm">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-teal-50">
              <CheckBadgeIcon className="h-5 w-5 text-teal-600" />
            </div>
            <p className="mt-3 text-sm font-bold tracking-wide text-slate-700">
              VOCÊ GANHOU
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

        <div className={`mt-6 ${revealed ? "animate-fade-up" : ""}`}>
          <PrimaryButton
            disabled={!revealed}
            onClick={() => router.push("/entrar")}
            icon={!revealed && <LockIcon className="h-4 w-4" />}
          >
            Quero resgatar
          </PrimaryButton>
        </div>

        <p className="relative mt-2 text-xs text-slate-400">
          {revealed ? "Complete seu cadastro para receber" : "Leva menos de 1 minuto"}
        </p>
      </main>

      <BottomNav />
    </div>
  );
}
