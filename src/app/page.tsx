"use client";

import { useRouter } from "next/navigation";
import AppHeader from "@/components/AppHeader";
import SecondsRing from "@/components/SecondsRing";
import SignalBadge from "@/components/SignalBadge";

export default function LoadingPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-dvh flex-col bg-gradient-to-br from-white via-teal-50 to-emerald-100/60">
      <AppHeader title="Fast Pay" />

      <main className="flex flex-1 flex-col items-center px-6 pt-6 text-center">
        <SignalBadge />

        <h1 className="mt-6 text-2xl font-bold text-teal-950">Quase lá...</h1>
        <p className="mt-1 text-sm text-slate-500">Logo você será atendido</p>

        <div className="mt-10">
          <SecondsRing seconds={5} onComplete={() => router.push("/entrar")} />
        </div>
      </main>

      <footer className="border-t border-black/5 bg-white/50 px-6 py-5 text-center backdrop-blur-sm">
        <div className="flex items-center justify-center gap-3 text-slate-400">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-5 w-5"
          >
            <rect x="5" y="11" width="14" height="9" rx="2" />
            <path d="M8 11V7a4 4 0 018 0v4" />
          </svg>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-5 w-5"
          >
            <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
          </svg>
        </div>
        <p className="mt-2 text-sm font-semibold text-slate-600">
          Ambiente seguro e criptografado
        </p>
        <p className="mt-0.5 text-xs text-slate-400">
          Seus dados estão protegidos conforme a LGPD
        </p>
      </footer>
    </div>
  );
}
