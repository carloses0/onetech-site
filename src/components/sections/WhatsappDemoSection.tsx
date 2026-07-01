import { Section } from "@/components/ui/Section";
import { WhatsappButton } from "@/components/WhatsappButton";
import { WhatsappChatDemo } from "@/components/WhatsappChatDemo";
import { demoStore } from "@/data/chatbot-demo";
import { whatsappMessages } from "@/lib/whatsapp";

export function WhatsappDemoSection() {
  return (
    <Section ariaLabelledby="demo-whatsapp-title" soft>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="text-overline">Demonstração interativa</p>
          <h2
            id="demo-whatsapp-title"
            className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl"
          >
            Veja como o chatbot funciona na prática
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-500">
            Esta simulação mostra como seus clientes interagem com a loja pelo
            WhatsApp: consultam o cardápio, tiram dúvidas e fecham pedidos com
            nome e endereço — tudo sem você precisar responder na hora.
          </p>
          <ul className="mt-6 space-y-3 text-[15px] text-slate-600" role="list">
            <li className="flex items-start gap-2.5">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-whatsapp" aria-hidden="true" />
              Respostas automáticas para dúvidas frequentes
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-whatsapp" aria-hidden="true" />
              Envio do catálogo sob demanda
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-whatsapp" aria-hidden="true" />
              Captura de pedido com nome, itens e endereço
            </li>
          </ul>
          <p className="mt-6 text-sm text-slate-500">
            Exemplo com a loja fictícia <strong className="text-slate-700">{demoStore.nome}</strong>.
            No seu comércio, o chatbot usa o seu cardápio e as suas regras de atendimento.
          </p>
          <div className="mt-8">
            <WhatsappButton
              message={whatsappMessages.demo}
              label="Quero isso na minha loja"
              size="lg"
            />
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <WhatsappChatDemo variant="full" />
        </div>
      </div>
    </Section>
  );
}
