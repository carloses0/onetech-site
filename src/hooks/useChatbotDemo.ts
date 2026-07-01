"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  catalogoDemo,
  faqDemo,
  mensagensBot,
  quickRepliesMenu,
  type CatalogItem,
  type QuickReply,
} from "@/data/chatbot-demo";

export type ChatSender = "bot" | "user";

export interface ChatMessage {
  id: string;
  sender: ChatSender;
  text: string;
  catalog?: CatalogItem[];
}

type DemoStep =
  | "welcome"
  | "menu"
  | "catalog"
  | "order_items"
  | "order_more"
  | "order_name"
  | "order_address"
  | "order_confirm"
  | "done"
  | "human";

interface UseChatbotDemoOptions {
  autoStart?: boolean;
  typingDelayMs?: number;
}

export function useChatbotDemo({
  autoStart = true,
  typingDelayMs = 900,
}: UseChatbotDemoOptions = {}) {
  const baseId = useId();
  const messageCounter = useRef(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [step, setStep] = useState<DemoStep>("welcome");
  const [isTyping, setIsTyping] = useState(false);
  const [quickReplies, setQuickReplies] = useState<QuickReply[]>([]);
  const [awaitingText, setAwaitingText] = useState(false);
  const [textPlaceholder, setTextPlaceholder] = useState("Digite uma mensagem");
  const [orderItems, setOrderItems] = useState<CatalogItem[]>([]);
  const [customerName, setCustomerName] = useState("");
  const [orderNumber] = useState(() => Math.floor(1000 + Math.random() * 9000));

  const nextId = useCallback(() => {
    messageCounter.current += 1;
    return `${baseId}-${messageCounter.current}`;
  }, [baseId]);

  const scrollToBottom = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, []);

  const addMessage = useCallback(
    (sender: ChatSender, text: string, catalog?: CatalogItem[]) => {
      setMessages((prev) => [
        ...prev,
        { id: nextId(), sender, text, catalog },
      ]);
    },
    [nextId],
  );

  const botSay = useCallback(
    async (
      text: string,
      options?: { catalog?: CatalogItem[]; replies?: QuickReply[]; awaitText?: string },
    ) => {
      setIsTyping(true);
      setQuickReplies([]);
      await new Promise((resolve) => setTimeout(resolve, typingDelayMs));
      setIsTyping(false);
      addMessage("bot", text, options?.catalog);
      if (options?.replies) setQuickReplies(options.replies);
      if (options?.awaitText) {
        setAwaitingText(true);
        setTextPlaceholder(options.awaitText);
      } else {
        setAwaitingText(false);
      }
      requestAnimationFrame(scrollToBottom);
    },
    [addMessage, scrollToBottom, typingDelayMs],
  );

  const userSay = useCallback(
    (text: string) => {
      addMessage("user", text);
      requestAnimationFrame(scrollToBottom);
    },
    [addMessage, scrollToBottom],
  );

  const orderTotal = orderItems.reduce((sum, item) => sum + item.preco, 0);

  const catalogReplies: QuickReply[] = catalogoDemo.map((item) => ({
    id: item.id,
    label: item.nome,
  }));

  const startConversation = useCallback(async () => {
    setStep("welcome");
    setOrderItems([]);
    setCustomerName("");
    setAwaitingText(false);
    setQuickReplies([]);
    await botSay(mensagensBot.boasVindas);
    setStep("menu");
    await botSay(mensagensBot.menu, { replies: quickRepliesMenu });
  }, [botSay]);

  useEffect(() => {
    if (!autoStart || started.current) return;
    started.current = true;
    void startConversation();
  }, [autoStart, startConversation]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  const handleQuickReply = useCallback(
    async (reply: QuickReply) => {
      userSay(reply.label);
      setQuickReplies([]);

      if (reply.id === "reiniciar") {
        setMessages([]);
        messageCounter.current = 0;
        await startConversation();
        return;
      }

      if (reply.id === "catalogo") {
        setStep("catalog");
        await botSay(mensagensBot.catalogoIntro, {
          catalog: catalogoDemo,
          replies: [
            { id: "pedido", label: "Fazer pedido" },
            { id: "atendente", label: "Falar com atendente" },
          ],
        });
        return;
      }

      if (reply.id === "pedido") {
        setStep("order_items");
        setOrderItems([]);
        await botSay(mensagensBot.pedidoInicio, { replies: catalogReplies });
        return;
      }

      if (reply.id === "horario") {
        const faq = faqDemo[0];
        await botSay(faq.resposta, {
          replies: [
            { id: "catalogo", label: "Ver cardápio" },
            { id: "pedido", label: "Fazer pedido" },
          ],
        });
        return;
      }

      if (reply.id === "pagamento") {
        const faq = faqDemo[2];
        await botSay(faq.resposta, {
          replies: [
            { id: "pedido", label: "Fazer pedido" },
            { id: "catalogo", label: "Ver cardápio" },
          ],
        });
        return;
      }

      if (reply.id === "atendente") {
        setStep("human");
        await botSay(mensagensBot.atendente, {
          replies: [{ id: "reiniciar", label: "Reiniciar demonstração" }],
        });
        return;
      }

      if (reply.id === "mais-itens") {
        setStep("order_items");
        await botSay("Escolha mais um item:", { replies: catalogReplies });
        return;
      }

      if (reply.id === "finalizar") {
        if (orderItems.length === 0) {
          await botSay("Seu pedido está vazio. Escolha pelo menos um item.", {
            replies: catalogReplies,
          });
          return;
        }
        setStep("order_name");
        await botSay(mensagensBot.pedidoNome, { awaitText: "Seu nome" });
        return;
      }

      if (reply.id === "confirmar") {
        setStep("done");
        await botSay(mensagensBot.pedidoConfirmado(orderNumber), {
          replies: [{ id: "reiniciar", label: "Reiniciar demonstração" }],
        });
        return;
      }

      const catalogItem = catalogoDemo.find((item) => item.id === reply.id);
      if (catalogItem) {
        const updatedItems = [...orderItems, catalogItem];
        setOrderItems(updatedItems);
        setStep("order_more");
        await botSay(mensagensBot.pedidoItemAdicionado(catalogItem.nome), {
          replies: [
            { id: "mais-itens", label: "Adicionar item" },
            { id: "finalizar", label: "Finalizar pedido" },
          ],
        });
      }
    },
    [botSay, catalogReplies, orderItems, orderNumber, startConversation, userSay],
  );

  const handleTextSubmit = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed) return;

      userSay(trimmed);
      setAwaitingText(false);

      if (step === "order_name") {
        setCustomerName(trimmed);
        setStep("order_address");
        await botSay(mensagensBot.pedidoEndereco, { awaitText: "Rua, número e bairro" });
        return;
      }

      if (step === "order_address") {
        setStep("order_confirm");
        const itens = orderItems.map(
          (item) => `${item.nome} — R$ ${item.preco.toFixed(2).replace(".", ",")}`,
        );
        await botSay(mensagensBot.pedidoResumo(customerName, trimmed, itens, orderTotal), {
          replies: [
            { id: "confirmar", label: "Confirmar pedido" },
            { id: "reiniciar", label: "Cancelar" },
          ],
        });
      }
    },
    [botSay, customerName, orderItems, orderTotal, step, userSay],
  );

  return {
    messages,
    isTyping,
    quickReplies,
    awaitingText,
    textPlaceholder,
    scrollRef,
    handleQuickReply,
    handleTextSubmit,
    restart: startConversation,
  };
}
