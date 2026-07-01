"use client";

import { FormEvent, useState, type ReactNode } from "react";
import { MessageCircle, MoreVertical, Paperclip, Phone, Send, Smile } from "lucide-react";
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
    scrollRef,
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

  return (
    <div
      className={cn(
        "mx-auto w-full overflow-hidden rounded-[2rem] border-[6px] border-slate-800 bg-slate-800 shadow-card",
        isCompact ? "max-w-[300px]" : "max-w-sm",
        className,
      )}
      aria-label={`Demonstração do chatbot WhatsApp da ${demoStore.nome}`}
    >
      <header className="flex items-center gap-3 bg-slate-900 px-4 py-3 text-white">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-whatsapp text-white">
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate font-semibold leading-tight">{demoStore.nome}</p>
          <p className="truncate text-xs text-slate-300">
            {isTyping ? "digitando…" : demoStore.subtitulo}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3 text-slate-300">
          <Phone className="h-5 w-5" aria-hidden="true" />
          <MoreVertical className="h-5 w-5" aria-hidden="true" />
        </div>
      </header>

      <div
        ref={scrollRef}
        className={cn(
          "overflow-y-auto bg-bg-soft px-3 py-4",
          isCompact ? "h-[320px]" : "h-[420px] md:h-[480px]",
        )}
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
                  "max-w-[85%] rounded-2xl px-3 py-2 text-[15px] leading-snug shadow-soft",
                  message.sender === "user"
                    ? "rounded-br-sm bg-whatsapp text-white"
                    : "rounded-bl-sm bg-white text-slate-800",
                )}
              >
                <p className="whitespace-pre-line">{formatBold(message.text)}</p>
                {message.catalog && message.catalog.length > 0 && (
                  <ul className="mt-3 space-y-2 border-t border-slate-100 pt-3" role="list">
                    {message.catalog.map((item) => (
                      <li
                        key={item.id}
                        className="rounded-xl bg-bg-soft p-2.5 text-sm text-slate-700"
                      >
                        <p className="font-semibold text-slate-800">{item.nome}</p>
                        <p className="mt-0.5 text-xs text-slate-500">{item.descricao}</p>
                        <p className="mt-1 font-semibold text-brand">{formatPreco(item.preco)}</p>
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
        <div className="border-t border-slate-700 bg-slate-800 px-3 py-2">
          <div
            className="flex gap-2 overflow-x-auto pb-1"
            role="group"
            aria-label="Respostas rápidas"
          >
            {quickReplies.map((reply) => (
              <button
                key={reply.id}
                type="button"
                onClick={() => void handleQuickReply(reply)}
                className="shrink-0 rounded-full border border-whatsapp/40 bg-slate-900 px-3 py-1.5 text-sm font-medium text-whatsapp transition-colors hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp"
              >
                {reply.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <form
        onSubmit={onSubmit}
        className="flex items-center gap-2 border-t border-slate-700 bg-slate-800 px-3 py-2.5"
      >
        <Smile className="h-5 w-5 shrink-0 text-slate-400" aria-hidden="true" />
        <Paperclip className="h-5 w-5 shrink-0 text-slate-400" aria-hidden="true" />
        <label htmlFor="chat-demo-input" className="sr-only">
          Mensagem para o chatbot
        </label>
        <input
          id="chat-demo-input"
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder={awaitingText ? textPlaceholder : "Demonstração interativa"}
          disabled={!awaitingText}
          className="min-w-0 flex-1 rounded-full bg-slate-900 px-4 py-2 text-sm text-white placeholder:text-slate-500 disabled:cursor-default disabled:opacity-70"
        />
        <button
          type="submit"
          disabled={!awaitingText || !input.trim()}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-whatsapp text-white transition-colors hover:bg-whatsapp-hover disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp"
          aria-label="Enviar mensagem"
        >
          <Send className="h-4 w-4" aria-hidden="true" />
        </button>
      </form>
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
