"use client";

import { FormEvent, useState, type ReactNode } from "react";
import {
  ArrowLeft,
  MoreVertical,
  Plus,
  SignalHigh,
  Video,
  Wifi,
  BatteryFull,
  Send,
  Smile,
} from "lucide-react";
import { demoStore, formatPreco } from "@/data/chatbot-demo";
import { useChatbotDemo } from "@/hooks/useChatbotDemo";
import { cn } from "@/lib/cn";

interface WhatsappChatDemoProps {
  variant?: "full" | "compact";
  className?: string;
  autoStart?: boolean;
}

export function WhatsappChatDemo({
  variant = "full",
  className,
  autoStart = true,
}: WhatsappChatDemoProps) {
  const [input, setInput] = useState("");
  const {
    messages,
    isTyping,
    quickReplies,
    awaitingText,
    textPlaceholder,
    handleQuickReply,
    handleTextSubmit,
  } = useChatbotDemo({
    autoStart,
    typingDelayMs: variant === "compact" ? 600 : 900,
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!awaitingText || !input.trim()) return;
    void handleTextSubmit(input);
    setInput("");
  };

  const isCompact = variant === "compact";
  const initial = demoStore.nome.charAt(0).toUpperCase();

  return (
    <div
      className={cn(
        "relative mx-auto w-full rounded-[2.75rem] bg-slate-900 p-2.5 shadow-card ring-1 ring-slate-900/10",
        isCompact ? "max-w-[300px]" : "max-w-[340px]",
        className,
      )}
      aria-label={`Demonstração do chatbot WhatsApp da ${demoStore.nome}`}
    >
      <div className="relative overflow-hidden rounded-[2.25rem] bg-bg-soft">
        {/* Dynamic island */}
        <div className="pointer-events-none absolute left-1/2 top-2 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-slate-950" />

        {/* Status bar */}
        <div className="flex items-center justify-between bg-[#075E54] px-5 pb-1 pt-2.5 text-[11px] font-semibold leading-none text-white/90">
          <span className="leading-none">9:41</span>
          <span className="flex items-center gap-1">
            <SignalHigh className="h-3.5 w-3.5" aria-hidden="true" />
            <Wifi className="h-3.5 w-3.5" aria-hidden="true" />
            <BatteryFull className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
        </div>

        {/* WhatsApp header */}
        <header className="flex items-center gap-2.5 bg-[#075E54] px-3 py-2.5 text-white">
          <ArrowLeft className="h-5 w-5 shrink-0 text-white/80" aria-hidden="true" />
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
            {initial}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold leading-tight">
              {demoStore.nome}
            </p>
            <p className="truncate text-[11px] leading-tight text-white/70">
              {isTyping ? "digitando…" : "online"}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-4 text-white/80">
            <Video className="h-[18px] w-[18px]" aria-hidden="true" />
            <MoreVertical className="h-[18px] w-[18px]" aria-hidden="true" />
          </div>
        </header>

        {/* Messages — fluem naturalmente, sem scroll interno */}
        <div
          className="bg-[#ECE5DD] bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%3E%3Cpath%20d%3D%22M0%2020h40M20%200v40%22%20stroke%3D%22%23000%22%20stroke-opacity%3D%220.02%22%2F%3E%3C%2Fsvg%3E')] px-3 py-4"
          role="log"
          aria-live="polite"
          aria-relevant="additions"
        >
          <ul className="flex flex-col gap-2" role="list">
            {messages.map((message) => (
              <li
                key={message.id}
                className={cn(
                  "flex animate-fade-up",
                  message.sender === "user" ? "justify-end" : "justify-start",
                )}
              >
                <div
                  className={cn(
                    "max-w-[85%] rounded-2xl px-3 py-2 text-[14px] leading-snug shadow-soft",
                    message.sender === "user"
                      ? "rounded-br-sm bg-[#DCF8C6] text-slate-800"
                      : "rounded-bl-sm bg-white text-slate-800",
                  )}
                >
                  <p className="whitespace-pre-line">{formatBold(message.text)}</p>
                  {message.catalog && message.catalog.length > 0 && (
                    <ul
                      className="mt-3 space-y-2 border-t border-slate-100 pt-3"
                      role="list"
                    >
                      {message.catalog.map((item) => (
                        <li
                          key={item.id}
                          className="rounded-xl bg-bg-soft p-2.5 text-sm text-slate-700"
                        >
                          <p className="font-semibold text-slate-800">{item.nome}</p>
                          <p className="mt-0.5 text-xs text-slate-500">
                            {item.descricao}
                          </p>
                          <p className="mt-1 font-semibold text-brand">
                            {formatPreco(item.preco)}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}

            {isTyping && (
              <li className="flex justify-start" aria-label="Assistente digitando">
                <div className="rounded-2xl rounded-bl-sm bg-white px-4 py-3 shadow-soft">
                  <span className="flex gap-1">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-slate-300 [animation-delay:0ms]" />
                    <span className="h-2 w-2 animate-pulse rounded-full bg-slate-300 [animation-delay:150ms]" />
                    <span className="h-2 w-2 animate-pulse rounded-full bg-slate-300 [animation-delay:300ms]" />
                  </span>
                </div>
              </li>
            )}
          </ul>
        </div>

        {quickReplies.length > 0 && (
          <div className="border-t border-slate-200 bg-[#ECE5DD] px-3 py-2">
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Respostas rápidas"
            >
              {quickReplies.map((reply) => (
                <button
                  key={reply.id}
                  type="button"
                  onClick={() => void handleQuickReply(reply)}
                  className="rounded-full border border-[#075E54]/30 bg-white px-3 py-1.5 text-[13px] font-medium text-[#075E54] shadow-soft transition-colors hover:bg-[#075E54] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#075E54]"
                >
                  {reply.label}
                </button>
              ))}
            </div>
          </div>
        )}

        <form
          onSubmit={onSubmit}
          className="flex items-center gap-2 bg-[#ECE5DD] px-3 pb-3 pt-2"
        >
          <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-soft">
            <Smile className="h-5 w-5 shrink-0 text-slate-400" aria-hidden="true" />
            <label htmlFor="chat-demo-input" className="sr-only">
              Mensagem para o chatbot
            </label>
            <input
              id="chat-demo-input"
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={awaitingText ? textPlaceholder : "Mensagem"}
              disabled={!awaitingText}
              className="min-w-0 flex-1 bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none disabled:cursor-default"
            />
            <Plus className="h-5 w-5 shrink-0 text-slate-400" aria-hidden="true" />
          </div>
          <button
            type="submit"
            disabled={!awaitingText || !input.trim()}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#075E54] text-white transition-colors hover:bg-[#064c44] disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#075E54]"
            aria-label="Enviar mensagem"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>

        {/* Home indicator */}
        <div className="flex justify-center bg-[#ECE5DD] pb-2">
          <span className="h-1 w-28 rounded-full bg-slate-900/30" />
        </div>
      </div>
    </div>
  );
}

function formatBold(text: string): ReactNode {
  const parts = text.split(/(\*[^*]+\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <strong key={index} className="font-semibold">
          {part.slice(1, -1)}
        </strong>
      );
    }
    return part;
  });
}
