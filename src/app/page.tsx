"use client";

import { useRouter } from "next/navigation";
import Brand from "@/components/Brand";
import CountdownCircle from "@/components/CountdownCircle";

export default function LoadingPage() {
  const router = useRouter();

  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden bg-slate-50">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-teal-200/25 blur-3xl"
      />

      <header className="relative flex justify-center px-6 pb-4 pt-10">
        <Brand className="h-7" />
      </header>

      <main className="relative flex flex-1 flex-col items-center justify-center px-6 pb-16">
        <div className="w-full max-w-sm rounded-3xl border border-slate-200/70 bg-white p-10 text-center shadow-[0_20px_50px_-15px_rgba(15,23,42,0.15)]">
          <div className="flex justify-center">
            <CountdownCircle seconds={5} onComplete={() => router.push("/entrar")} />
          </div>

          <h1 className="mt-8 text-xl font-semibold tracking-tight text-slate-900">
            Fila de Atendimento Virtual
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            Seu atendimento começará em breve. Mantenha esta tela aberta
            para garantir o seu lugar.
          </p>

          <div className="mt-8 flex items-center justify-center gap-2 border-t border-slate-100 pt-6 text-xs font-medium text-slate-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Conexão segura e verificada
          </div>
        </div>
      </main>
    </div>
  );
}
