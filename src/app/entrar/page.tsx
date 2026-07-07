"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AppHeader from "@/components/AppHeader";
import { formatPhone } from "@/lib/phone";

function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
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

function EyeIcon({ className, off }: { className?: string; off?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="3" />
      {off && <path d="M4 4l16 16" />}
    </svg>
  );
}

export default function EntrarPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const canSubmit =
    name.trim().length > 1 &&
    email.trim().length > 3 &&
    phone.replace(/\D/g, "").length >= 10 &&
    password.length >= 6;

  return (
    <div className="flex min-h-dvh flex-col bg-gradient-to-br from-white via-teal-50 to-emerald-100/60">
      <AppHeader title="FastPay" showAccount={false} />

      <main className="flex-1 px-6 pb-10">
        <div className="mx-auto w-full max-w-md">
          <h1 className="text-2xl font-bold text-teal-950">Crie sua conta</h1>
          <p className="mt-1 text-sm leading-relaxed text-slate-500">
            Ganhe dinheiro real jogando, assistindo vídeos, respondendo
            pesquisas e muito mais
          </p>

          <div className="mt-6 flex flex-col gap-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-600" htmlFor="name">
                Nome
              </label>
              <input
                id="name"
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-2xl bg-black/5 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-600" htmlFor="email">
                E-mail
              </label>
              <div className="flex items-center gap-2 rounded-2xl bg-black/5 px-4 py-3.5 focus-within:ring-2 focus-within:ring-teal-300">
                <MailIcon className="h-5 w-5 shrink-0 text-slate-400" />
                <input
                  id="email"
                  type="email"
                  inputMode="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-600" htmlFor="phone">
                Celular
              </label>
              <div className="flex items-center gap-2 rounded-2xl bg-black/5 px-4 py-3.5 focus-within:ring-2 focus-within:ring-teal-300">
                <PhoneIcon className="h-5 w-5 shrink-0 text-slate-400" />
                <span className="text-slate-500">+55</span>
                <span className="h-4 w-px bg-slate-300" />
                <input
                  id="phone"
                  type="tel"
                  inputMode="numeric"
                  placeholder="(00) 00000-0000"
                  value={phone}
                  onChange={(e) => setPhone(formatPhone(e.target.value))}
                  className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-600" htmlFor="password">
                Senha
              </label>
              <div className="flex items-center gap-2 rounded-2xl bg-black/5 px-4 py-3.5 focus-within:ring-2 focus-within:ring-teal-300">
                <LockIcon className="h-5 w-5 shrink-0 text-slate-400" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                  className="shrink-0 text-slate-400"
                >
                  <EyeIcon className="h-5 w-5" off={showPassword} />
                </button>
              </div>
            </div>
          </div>

          <button
            type="button"
            disabled={!canSubmit}
            onClick={() => router.push("/checkout")}
            className="mt-7 w-full rounded-full bg-gradient-to-r from-teal-500 to-teal-700 py-4 font-semibold text-white shadow-md transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
          >
            Continuar
          </button>

          <p className="mt-4 text-center text-xs leading-relaxed text-slate-500">
            Ao continuar, você concorda com nossos{" "}
            <a href="#" className="font-medium text-teal-700 hover:underline">
              Termos de Uso
            </a>{" "}
            e{" "}
            <a href="#" className="font-medium text-teal-700 hover:underline">
              Política de Privacidade
            </a>
            .
          </p>

          <p className="mt-5 text-center text-sm text-slate-500">
            Já tenho uma conta?{" "}
            <a href="#" className="font-semibold text-teal-700 hover:underline">
              Entrar
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
