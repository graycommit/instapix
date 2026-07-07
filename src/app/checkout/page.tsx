"use client";

import { useEffect, useState } from "react";
import AppTopBar from "@/components/AppTopBar";
import PrimaryButton from "@/components/PrimaryButton";
import TextField from "@/components/TextField";
import {
  CardIcon,
  CheckIcon,
  LockIcon,
  MailIcon,
  PersonIcon,
  PhoneIcon,
  PixIcon,
  ShieldIcon,
} from "@/components/icons";
import { loadRegistration } from "@/lib/registration";
import { formatPhone } from "@/lib/phone";

function SectionNumber({ n }: { n: number }) {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-semibold text-white">
      {n}
    </span>
  );
}

export default function CheckoutPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [paid, setPaid] = useState(false);

  useEffect(() => {
    const saved = loadRegistration();
    if (!saved) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrates the form from data saved during registration.
    setName(saved.name);
    setPhone(saved.phone);
    setEmail(saved.email);
  }, []);

  const canSubmit =
    name.trim().length > 1 &&
    phone.replace(/\D/g, "").length >= 10 &&
    email.trim().length > 3;

  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <AppTopBar
        left={<h1 className="text-lg font-semibold tracking-tight text-ink">Finalizar</h1>}
        right={
          <span className="flex items-center gap-1.5 text-sm font-medium text-brand">
            <ShieldIcon className="h-4 w-4" />
            Ambiente seguro
          </span>
        }
      />

      <main className="flex-1 px-5 py-6">
        <div className="mx-auto flex w-full max-w-md flex-col gap-5">
          <div className="flex items-center gap-2">
            <SectionNumber n={1} />
            <h2 className="text-base font-semibold text-ink">Cliente</h2>
          </div>

          <div className="flex flex-col gap-4">
            <TextField
              id="name"
              label="Nome completo"
              required
              type="text"
              placeholder="Seu nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              icon={<PersonIcon className="h-5 w-5" />}
            />

            <TextField
              id="phone"
              label="Telefone"
              required
              type="tel"
              inputMode="numeric"
              placeholder="(99) 99999-9999"
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              icon={<PhoneIcon className="h-5 w-5" />}
            />

            <TextField
              id="email"
              label="E-mail"
              required
              type="email"
              inputMode="email"
              placeholder="seuemail@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={<MailIcon className="h-5 w-5" />}
            />
          </div>

          <div className="rounded-lg border border-hairline bg-neutral-50 p-4">
            <p className="flex items-center gap-2 text-sm font-semibold text-ink">
              <LockIcon className="h-4 w-4" />
              Usamos seus dados de forma segura e criptografada:
            </p>
            <ul className="mt-2 flex flex-col gap-1.5">
              <li className="flex items-start gap-2 text-sm text-ink-soft">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                Seus dados ficam protegidos em todo o processo;
              </li>
              <li className="flex items-start gap-2 text-sm text-ink-soft">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                Não compartilhamos suas informações com terceiros;
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <SectionNumber n={2} />
            <h2 className="text-base font-semibold text-ink">Opções de pagamento</h2>
          </div>

          <div className="flex items-center gap-3 rounded-lg border-2 border-brand bg-white px-4 py-3.5">
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-brand">
              <span className="h-2 w-2 rounded-full bg-brand" />
            </span>
            <PixIcon className="h-5 w-5 shrink-0 text-brand" />
            <div>
              <p className="text-sm font-semibold text-ink">Pix</p>
              <p className="text-xs text-neutral-500">Pagamento instantâneo</p>
            </div>
          </div>

          {paid ? (
            <div className="rounded-lg border border-hairline bg-neutral-50 p-4 text-center">
              <p className="text-sm font-semibold text-ink">Pagamento confirmado!</p>
              <p className="mt-1 text-xs text-neutral-500">
                Você vai receber o acesso por e-mail em instantes.
              </p>
            </div>
          ) : (
            <PrimaryButton
              disabled={!canSubmit}
              onClick={() => setPaid(true)}
              icon={<CardIcon className="h-5 w-5" />}
            >
              Pagar com Pix
            </PrimaryButton>
          )}

          <ul className="flex flex-col gap-1.5 text-xs text-neutral-500">
            <li>• Pagamento somente à vista</li>
            <li>• Após a confirmação do Pix, você recebe o acesso na hora, por e-mail</li>
            <li>• Ao gerar o código atente para a data de expiração</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
