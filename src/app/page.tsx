"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import CountdownCircle from "@/components/CountdownCircle";

export default function LoadingPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <CountdownCircle seconds={5} onComplete={() => router.push("/entrar")} />
        <h1 className="mt-8 text-xl font-semibold text-zinc-900">
          Só um instante...
        </h1>
        <p className="mt-2 max-w-xs text-sm text-zinc-500">
          Estamos preparando tudo para o seu atendimento.
        </p>
      </main>
    </div>
  );
}
