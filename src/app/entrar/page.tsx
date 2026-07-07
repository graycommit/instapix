"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AppHeader from "@/components/AppHeader";
import PrimaryButton from "@/components/PrimaryButton";
import TextField from "@/components/TextField";
import { EyeIcon, LockIcon, MailIcon, PhoneIcon } from "@/components/icons";
import { formatPhone } from "@/lib/phone";
import { saveRegistration } from "@/lib/registration";

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
      <AppHeader />

      <main className="flex-1 px-6 pb-10">
        <div className="mx-auto w-full max-w-md">
          <h1 className="text-2xl font-bold text-slate-900">Crie sua conta</h1>
          <p className="mt-1 text-sm leading-relaxed text-slate-500">
            Ganhe dinheiro real jogando, assistindo vídeos, respondendo
            pesquisas e muito mais
          </p>

          <div className="mt-6 flex flex-col gap-4">
            <TextField
              id="name"
              label="Nome"
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              id="email"
              label="E-mail"
              type="email"
              inputMode="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={<MailIcon className="h-5 w-5" />}
            />

            <TextField
              id="phone"
              label="Celular"
              type="tel"
              inputMode="numeric"
              placeholder="(00) 00000-0000"
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              icon={<PhoneIcon className="h-5 w-5" />}
              before={
                <>
                  <span className="shrink-0 text-slate-500">+55</span>
                  <span className="h-4 w-px shrink-0 bg-slate-300" />
                </>
              }
            />

            <TextField
              id="password"
              label="Senha"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={<LockIcon className="h-5 w-5" />}
              after={
                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                  className="shrink-0 text-slate-400"
                >
                  <EyeIcon className="h-5 w-5" off={showPassword} />
                </button>
              }
            />
          </div>

          <div className="mt-7">
            <PrimaryButton
              disabled={!canSubmit}
              onClick={() => {
                saveRegistration({ name, email, phone });
                router.push("/chat");
              }}
            >
              Continuar
            </PrimaryButton>
          </div>

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
