"use client";

import { useRouter } from "next/navigation";
import Brand from "./Brand";
import { BackIcon } from "./icons";

export default function AppHeader({
  right,
}: {
  right?: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <header className="flex items-center justify-between px-4 py-3.5">
      <button
        type="button"
        onClick={() => router.back()}
        aria-label="Voltar"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-teal-800 transition-colors hover:bg-black/5"
      >
        <BackIcon className="h-5 w-5" />
      </button>

      <Brand className="h-6" />

      <div className="flex h-9 w-9 shrink-0 items-center justify-end">{right}</div>
    </header>
  );
}
