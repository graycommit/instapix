"use client";

import { usePathname, useRouter } from "next/navigation";

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v9a1 1 0 001 1h10a1 1 0 001-1v-9" />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M4 5h16v11H8l-4 4V5z" />
    </svg>
  );
}

function TicketIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M4 8a2 2 0 012-2h12a2 2 0 012 2v2a1.5 1.5 0 000 3v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2a1.5 1.5 0 000-3V8z" />
      <path d="M10 6v12" strokeDasharray="2.5 2.5" />
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="10" r="3" />
      <path d="M6.5 18.2a6 6 0 0111 0" />
    </svg>
  );
}

const items = [
  { href: "/", label: "Início", Icon: HomeIcon },
  { href: "/chat", label: "Chat", Icon: ChatIcon },
  { href: "/resgatar", label: "Resgatar", Icon: TicketIcon },
  { href: "/perfil", label: "Perfil", Icon: UserIcon },
];

export default function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="flex items-center justify-around border-t border-slate-100 bg-white px-2 py-2">
      {items.map(({ href, label, Icon }) => {
        const active = pathname === href;
        return (
          <button
            key={href}
            type="button"
            onClick={() => router.push(href)}
            className={`flex flex-col items-center gap-1 rounded-2xl px-4 py-2 text-xs font-medium transition-colors ${
              active ? "bg-teal-100 text-teal-700" : "text-slate-400"
            }`}
          >
            <Icon className="h-5 w-5" />
            {label}
          </button>
        );
      })}
    </nav>
  );
}
