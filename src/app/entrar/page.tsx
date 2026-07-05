"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Toggle from "@/components/Toggle";
import { formatPhone } from "@/lib/phone";

export default function EntrarPage() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [remember, setRemember] = useState(false);

  const canSubmit = email.trim().length > 3 && phone.replace(/\D/g, "").length >= 10;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex flex-1 justify-center px-6 pt-20">
        <div className="w-full max-w-md">
          <h1 className="text-xl font-bold text-zinc-900">
            Digite seu e-mail e telefone
          </h1>

          <div className="mt-6 flex flex-col gap-4">
            <div>
              <label className="mb-1 block text-sm text-zinc-500" htmlFor="email">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                inputMode="email"
                placeholder="seuemail@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-zinc-200 px-4 py-3.5 text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm text-zinc-500" htmlFor="phone">
                Telefone
              </label>
              <input
                id="phone"
                type="tel"
                inputMode="numeric"
                placeholder="(00) 00000-0000"
                value={phone}
                onChange={(e) => setPhone(formatPhone(e.target.value))}
                className="w-full rounded-xl border border-zinc-200 px-4 py-3.5 text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
              />
            </div>
          </div>

          <div className="mt-5">
            <Toggle
              checked={remember}
              onChange={setRemember}
              label="Lembrar meus dados para o próximo acesso"
            />
          </div>

          <button
            type="button"
            disabled={!canSubmit}
            className="mt-6 w-full rounded-xl bg-teal-400 py-4 font-semibold text-white transition-colors hover:bg-teal-500 disabled:cursor-not-allowed disabled:bg-teal-200"
          >
            Continuar
          </button>

          <div className="mt-8 text-center text-sm">
            <p className="text-zinc-500">
              <a href="#" className="text-teal-500 hover:underline">
                Veja aqui
              </a>{" "}
              soluções para a sua empresa.
            </p>
            <p className="mt-2 text-zinc-400">
              Termos de Uso e Política de Privacidade
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
