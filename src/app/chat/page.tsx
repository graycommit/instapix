"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import AppTopBar from "@/components/AppTopBar";
import BalancePill from "@/components/BalancePill";
import BottomNav from "@/components/BottomNav";
import AttachmentButton from "@/components/chat/AttachmentButton";
import ImageMessageBubble from "@/components/chat/ImageMessageBubble";
import QuickReplyRow from "@/components/chat/QuickReplyRow";
import SystemNotice from "@/components/chat/SystemNotice";
import TextBubble from "@/components/chat/TextBubble";
import TypingDots from "@/components/chat/TypingDots";
import VoiceMessageBubble from "@/components/chat/VoiceMessageBubble";
import { chatScript } from "@/lib/chatScript";

type TimelineItem =
  | { id: string; kind: "system"; text: string }
  | { id: string; kind: "bot"; text: string; time: string }
  | { id: string; kind: "agent"; name: string; text: string; time: string }
  | { id: string; kind: "voice"; name: string; duration: string; time: string }
  | { id: string; kind: "image"; name: string; time: string }
  | { id: string; kind: "user"; text: string; time: string };

function now() {
  return new Date().toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function ChatPage() {
  const router = useRouter();
  const [items, setItems] = useState<TimelineItem[]>([]);
  const [stepIndex, setStepIndex] = useState(0);
  const [typing, setTyping] = useState(false);
  const [awaitingOptions, setAwaitingOptions] = useState<string[] | null>(null);
  const scrollAnchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (stepIndex >= chatScript.length) return;

    const step = chatScript[stepIndex];

    if (step.kind === "system") {
      const joinTimer = setTimeout(() => {
        setItems((prev) => [...prev, { id: `step-${stepIndex}`, kind: "system", text: step.text }]);
        setStepIndex((i) => i + 1);
      }, 300);
      return () => clearTimeout(joinTimer);
    }

    let advanceTimer: ReturnType<typeof setTimeout> | undefined;

    // eslint-disable-next-line react-hooks/set-state-in-effect -- harmless if StrictMode double-invokes; the actual message reveal below is timer-gated and cancelable.
    setTyping(true);
    const revealTimer = setTimeout(() => {
      setTyping(false);

      if (step.kind === "choice") {
        setAwaitingOptions(step.options);
        return;
      }

      const time = now();
      setItems((prev) => [
        ...prev,
        step.kind === "bot"
          ? { id: `step-${stepIndex}`, kind: "bot", text: step.text, time }
          : step.kind === "agent"
            ? { id: `step-${stepIndex}`, kind: "agent", name: step.name, text: step.text, time }
            : step.kind === "voice"
              ? { id: `step-${stepIndex}`, kind: "voice", name: step.name, duration: step.duration, time }
              : { id: `step-${stepIndex}`, kind: "image", name: step.name, time },
      ]);

      advanceTimer = setTimeout(() => setStepIndex((i) => i + 1), 900);
    }, 1100);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(advanceTimer);
    };
  }, [stepIndex]);

  useEffect(() => {
    scrollAnchorRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [items, typing, awaitingOptions]);

  function handleSelect(option: string) {
    setAwaitingOptions(null);
    setItems((prev) => [
      ...prev,
      { id: `user-${stepIndex}`, kind: "user", text: option, time: now() },
    ]);

    if (option === "Perfeito, obrigado!") {
      setTimeout(() => router.push("/checkout"), 900);
      return;
    }

    setStepIndex((i) => i + 1);
  }

  return (
    <div className="flex h-dvh flex-col bg-teal-50/40">
      <AppTopBar
        left={<span className="text-sm font-medium text-slate-500">Seu Nome</span>}
        right={<BalancePill balance={149.52} />}
      />

      <main className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
        {items.map((item) => {
          switch (item.kind) {
            case "system":
              return <SystemNotice key={item.id} text={item.text} />;
            case "bot":
              return (
                <TextBubble key={item.id} variant="bot" text={item.text} time={item.time} />
              );
            case "agent":
              return (
                <TextBubble
                  key={item.id}
                  variant="agent"
                  name={item.name}
                  text={item.text}
                  time={item.time}
                />
              );
            case "voice":
              return (
                <VoiceMessageBubble
                  key={item.id}
                  name={item.name}
                  duration={item.duration}
                  time={item.time}
                />
              );
            case "image":
              return <ImageMessageBubble key={item.id} name={item.name} time={item.time} />;
            case "user":
              return (
                <div key={item.id} className="flex flex-col items-end">
                  <div className="max-w-[78%] rounded-2xl rounded-br-sm bg-teal-600 px-4 py-3 text-sm text-white">
                    {item.text}
                  </div>
                  <span className="mt-1 px-1 text-[11px] text-slate-400">{item.time}</span>
                </div>
              );
            default:
              return null;
          }
        })}

        {typing && <TypingDots />}

        {awaitingOptions && (
          <div className="flex flex-col items-center gap-3 pt-1">
            <QuickReplyRow options={awaitingOptions} onSelect={handleSelect} />
            <AttachmentButton label="Enviar imagem" />
          </div>
        )}

        <div ref={scrollAnchorRef} />
      </main>

      <BottomNav />
    </div>
  );
}
