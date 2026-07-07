"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { formatPhone } from "@/lib/phone";
import { loadRegistration } from "@/lib/registration";

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
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

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 12l5 5L20 6" />
    </svg>
  );
}

function PixIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
    </svg>
  );
}

function CardIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function SectionNumber({ n }: { n: number }) {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500 text-xs font-bold text-white">
      {n}
    </span>
  );
}

export default function CheckoutPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const saved = loadRegistration();
    if (!saved) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrates the form from data saved during registration.
    setName(saved.name);
    setPhone(saved.phone);
    setEmail(saved.email);
  }, []);

  const canSubmit = name.trim().length > 1;

  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <header className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
        <h1 className="text-lg font-bold text-slate-900">Finalizar</h1>
        <span className="flex items-center gap-1.5 text-sm font-medium text-teal-600">
          <ShieldIcon className="h-4 w-4" />
          Ambiente seguro
        </span>
      </header>

      <main className="flex-1 px-5 py-6">
        <div className="mx-auto flex w-full max-w-md flex-col gap-5">
          <div className="flex items-center gap-2">
            <SectionNumber n={1} />
            <h2 className="text-base font-bold text-slate-900">Cliente</h2>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-600" htmlFor="name">
                Nome completo <span className="text-teal-600">*</span>
              </label>
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  placeholder="Seu Nome Completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3.5 pr-11 text-slate-900 placeholder:text-slate-400 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                />
                <LockIcon className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-300" />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-600" htmlFor="phone">
                Telefone <span className="text-slate-400">(opcional)</span>
              </label>
              <input
                id="phone"
                type="tel"
                inputMode="numeric"
                placeholder="(99) 99999-9999"
                value={phone}
                onChange={(e) => setPhone(formatPhone(e.target.value))}
                className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-600" htmlFor="email">
                E-mail <span className="text-slate-400">(opcional)</span>
              </label>
              <input
                id="email"
                type="email"
                inputMode="email"
                placeholder="seuemail@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-teal-100 bg-teal-50 p-4">
            <p className="flex items-center gap-2 text-sm font-semibold text-teal-800">
              <LockIcon className="h-4 w-4" />
              Usamos seus dados de forma segura e criptografada:
            </p>
            <ul className="mt-2 flex flex-col gap-1.5">
              <li className="flex items-start gap-2 text-sm text-teal-700">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0" />
                Seus dados ficam protegidos em todo o processo;
              </li>
              <li className="flex items-start gap-2 text-sm text-teal-700">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0" />
                Não compartilhamos suas informações com terceiros;
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <SectionNumber n={2} />
            <h2 className="text-base font-bold text-slate-900">Opções de pagamento</h2>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border-2 border-teal-500 bg-white px-4 py-3.5">
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-teal-500">
              <span className="h-2 w-2 rounded-full bg-teal-500" />
            </span>
            <PixIcon className="h-5 w-5 shrink-0 text-teal-600" />
            <div>
              <p className="text-sm font-bold text-slate-900">Pix</p>
              <p className="text-xs text-slate-500">Pagamento instantâneo</p>
            </div>
          </div>

          <button
            type="button"
            disabled={!canSubmit}
            onClick={() => router.push("/chat")}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-teal-500 to-teal-700 py-4 font-bold uppercase tracking-wide text-white shadow-md transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
          >
            <CardIcon className="h-5 w-5" />
            Pagar com Pix
          </button>

          <ul className="flex flex-col gap-1.5 text-xs text-slate-500">
            <li>• Pagamento somente à vista</li>
            <li>• Após a confirmação do Pix, você recebe o acesso na hora, por e-mail</li>
            <li>• Ao gerar o código atente para a data de expiração</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
