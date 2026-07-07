"use client";

import { useRouter } from "next/navigation";

export default function AppHeader({
  title,
  showAccount = true,
}: {
  title: string;
  showAccount?: boolean;
}) {
  const router = useRouter();

  return (
    <header className="flex items-center justify-between px-4 py-4">
      <button
        type="button"
        onClick={() => router.back()}
        aria-label="Voltar"
        className="flex h-9 w-9 items-center justify-center rounded-full text-teal-800 transition-colors hover:bg-black/5"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <h1 className="text-lg font-bold text-teal-900">{title}</h1>

      {showAccount ? (
        <button
          type="button"
          aria-label="Conta"
          className="flex h-9 w-9 items-center justify-center rounded-full text-teal-800 transition-colors hover:bg-black/5"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-6 w-6"
          >
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="10" r="3" />
            <path d="M6.5 18.2a6 6 0 0111 0" />
          </svg>
        </button>
      ) : (
        <div className="h-9 w-9" aria-hidden />
      )}
    </header>
  );
}
