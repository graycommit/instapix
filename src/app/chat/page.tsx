"use client";

import { useEffect, useRef, useState } from "react";
import ChatHeader from "@/components/chat/ChatHeader";
import MessageBubble from "@/components/chat/MessageBubble";
import OptionButtons from "@/components/chat/OptionButtons";
import TypingDots from "@/components/chat/TypingDots";
import { chatScript } from "@/lib/chatScript";

type Message = {
  id: string;
  side: "bot" | "user";
  text: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [stepIndex, setStepIndex] = useState(0);
  const [typing, setTyping] = useState(false);
  const [awaitingOptions, setAwaitingOptions] = useState<string[] | null>(null);
  const [balance, setBalance] = useState(0);
  const scrollAnchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (stepIndex >= chatScript.length) return;

    let advanceTimer: ReturnType<typeof setTimeout> | undefined;
    let balanceTimer: ReturnType<typeof setTimeout> | undefined;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTyping(true);
    const revealTimer = setTimeout(() => {
      const step = chatScript[stepIndex];
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: `bot-${stepIndex}`, side: "bot", text: step.text },
      ]);

      if (step.kind === "bot" && step.balanceAfter !== undefined) {
        const nextBalance = step.balanceAfter;
        balanceTimer = setTimeout(() => setBalance(nextBalance), 500);
      }

      if (step.kind === "choice") {
        setAwaitingOptions(step.options);
      } else {
        advanceTimer = setTimeout(() => setStepIndex((i) => i + 1), 900);
      }
    }, 1000);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(advanceTimer);
      clearTimeout(balanceTimer);
    };
  }, [stepIndex]);

  useEffect(() => {
    scrollAnchorRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing, awaitingOptions]);

  function handleSelect(option: string) {
    setAwaitingOptions(null);
    setMessages((prev) => [
      ...prev,
      { id: `user-${stepIndex}`, side: "user", text: option },
    ]);
    setStepIndex((i) => i + 1);
  }

  return (
    <div className="flex h-screen flex-col bg-zinc-100">
      <ChatHeader balance={balance} />

      <main className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
        {messages.map((message) => (
          <MessageBubble key={message.id} side={message.side} text={message.text} />
        ))}

        {typing && <TypingDots />}

        {awaitingOptions && (
          <OptionButtons options={awaitingOptions} onSelect={handleSelect} />
        )}

        <div ref={scrollAnchorRef} />
      </main>
    </div>
  );
}
