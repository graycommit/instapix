"use client";

import { useRouter } from "next/navigation";
import AccountButton from "@/components/AccountButton";
import AppHeader from "@/components/AppHeader";
import SecondsRing from "@/components/SecondsRing";
import SignalBadge from "@/components/SignalBadge";
import { LockIcon, ShieldIcon } from "@/components/icons";

export default function LoadingPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <AppHeader right={<AccountButton />} />

      <main className="flex flex-1 flex-col items-center px-6 pt-6 text-center">
        <SignalBadge />

        <h1 className="mt-6 text-2xl font-semibold tracking-tight text-ink">Quase lá...</h1>
        <p className="mt-1 text-sm text-neutral-500">Logo você será atendido</p>

        <div className="mt-10">
          <SecondsRing seconds={5} onComplete={() => router.push("/resgatar")} />
        </div>
      </main>

      <footer className="border-t border-hairline bg-white px-6 py-5 text-center">
        <div className="flex items-center justify-center gap-3 text-neutral-400">
          <LockIcon className="h-5 w-5" />
          <ShieldIcon className="h-5 w-5" />
        </div>
        <p className="mt-2 text-sm font-semibold text-ink-soft">
          Ambiente seguro e criptografado
        </p>
        <p className="mt-0.5 text-xs text-neutral-400">
          Seus dados estão protegidos conforme a LGPD
        </p>
      </footer>
    </div>
  );
}
