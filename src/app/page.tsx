"use client";

import { useRouter } from "next/navigation";
import Brand from "@/components/Brand";
import CountdownCircle from "@/components/CountdownCircle";
import FacetedBackground from "@/components/FacetedBackground";
import Sparkle from "@/components/Sparkle";

export default function LoadingPage() {
  const router = useRouter();

  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 py-10 text-center">
      <FacetedBackground />

      <CountdownCircle seconds={5} onComplete={() => router.push("/entrar")} />

      <h1 className="mt-8 text-2xl font-bold text-slate-900">
        Fila de Atendimento Virtual
      </h1>
      <p className="mt-3 max-w-xs text-sm text-slate-500">
        Seu atendimento começará em breve. Por favor, mantenha esta tela
        aberta para garantir o seu lugar.
      </p>

      <div className="mt-16 flex items-center gap-2">
        <Brand />
        <Sparkle className="h-4 w-4 text-slate-300" />
      </div>
    </div>
  );
}
