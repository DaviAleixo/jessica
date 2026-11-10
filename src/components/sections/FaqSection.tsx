import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  Stethoscope,
  Laptop,
  CalendarDays,
  Heart,
  MapPin,
  Handshake,
  ChevronDown,
  ChevronUp,
  MessageSquare,
} from 'lucide-react'
import { getWhatsAppUrl } from '../../config/siteConfig'

const faqItems = [
  {
    id: 'faq-1',
    question: 'Como funciona uma consulta psiquiátrica inicial?',
    icon: Stethoscope,
    answer:
      'A consulta psiquiátrica é um atendimento médico individualizado e confidencial. Durante a sessão, é realizada uma investigação clínica minuciosa da história de vida, rotina, queixas e saúde geral para estabelecer um diagnóstico criterioso e definir um plano terapêutico singular.',
  },
  {
    id: 'faq-2',
    question: 'É possível realizar consultas online com segurança e validade?',
    icon: Laptop,
    answer:
      'Sim. O atendimento online é realizado por telemedicina conforme a Resolução do CFM. Receitas de controle especial e laudos médicos são emitidos digitalmente com assinatura qualificada ICP-Brasil, válidos em farmácias em todo o território nacional.',
  },
  {
    id: 'faq-3',
    question: 'Como posso agendar uma consulta?',
    icon: CalendarDays,
    answer:
      'O agendamento é feito de forma rápida através do canal oficial de WhatsApp ou agendamento online. Nossa equipe verificará datas disponíveis, orientará sobre as modalidades (presencial ou online) e fornecerá instruções prévias.',
  },
  {
    id: 'faq-4',
    question: 'Como funciona o acompanhamento psiquiátrico longitudinal?',
    icon: Heart,
    answer:
      'O cuidado em saúde mental é contínuo. As consultas de acompanhamento avaliam a evolução clínica, monitoram respostas a intervenções e realizam os ajustes terapêuticos necessários com foco na estabilidade e qualidade de vida a longo prazo.',
  },
  {
    id: 'faq-5',
    question: 'Onde acontecem as consultas presenciais?',
    icon: MapPin,
    answer:
      'Os atendimentos presenciais acontecem em consultório planejado para garantir total privacidade, conforto, isolamento acústico e acolhimento.',
  },
  {
    id: 'faq-6',
    question: 'A Dra. Jéssica atende por convênios médicos?',
    icon: Handshake,
    answer:
      'Os atendimentos são particulares para garantir tempo dedicado e sem pressa para cada paciente. Emitimos recibo médico completo com CRM e RQE para que você solicite o reembolso junto ao seu plano de saúde.',
  },
]

export const FaqSection = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1')

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  const wppUrl = getWhatsAppUrl('Olá, Dra. Jéssica! Ainda tenho uma dúvida sobre a consulta psiquiátrica.')

  return (
    <section
      id="faq"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#FAF9F6] text-[#28332C] border-t border-[#E8E4DC]"
    >
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-8 lg:px-10">
        
        {/* Cabeçalho Centralizado Sem Coluna Esquerda */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-8 sm:w-10 h-[1px] bg-[#4D6443]" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#4D6443] font-semibold">
              DÚVIDAS FREQUENTES
            </span>
            <span className="w-8 sm:w-10 h-[1px] bg-[#4D6443]" />
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[36px] font-normal text-[#28332C] leading-snug tracking-tight mb-2">
            Respostas para as dúvidas mais comuns.
          </h2>

          <p className="text-xs sm:text-[13.5px] text-[#4F5A55] leading-relaxed">
            Informações claras sobre formato das consultas, telemedicina, receitas digitais e agendamento.
          </p>
        </div>

        {/* Lista de Cards de FAQ Estilo Editorial (100% Responsiva e sem coluna esquerda) */}
        <div className="space-y-2.5 sm:space-y-3">
          {faqItems.map((item) => {
            const isOpen = openId === item.id
            const Icon = item.icon

            return (
              <div key={item.id} className="transition-all duration-200">
                {isOpen ? (
                  /* Item ABERTO: Cabeçalho Azul Marinho + Corpo Branco */
                  <div className="rounded-2xl overflow-hidden shadow-xs border border-[#142D42]/30">
                    <button
                      type="button"
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full flex items-center justify-between px-3.5 sm:px-6 py-3 sm:py-4 bg-[#0C2438] text-white cursor-pointer transition-colors"
                      aria-expanded="true"
                    >
                      <div className="flex items-center gap-2.5 sm:gap-3.5 text-left flex-1 pr-2">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-white">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8]" />
                        </div>
                        <div className="w-[1px] h-4 sm:h-5 bg-white/20 shrink-0" />
                        <h3 className="font-serif text-sm sm:text-base lg:text-lg text-white font-normal leading-snug">
                          {item.question}
                        </h3>
                      </div>
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#485E35] flex items-center justify-center shrink-0 text-white shadow-2xs">
                        <ChevronUp className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: 'easeInOut' }}
                      >
                        <div className="bg-white p-4 sm:p-6 text-xs sm:text-[13.5px] text-[#4F5A55] leading-relaxed text-left border-t border-[#E5DFD5]">
                          <p>{item.answer}</p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                ) : (
                  /* Item FECHADO: Card Branco com Ícone Verde e Chevron Suave */
                  <button
                    type="button"
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full flex items-center justify-between px-3.5 sm:px-6 py-2.5 sm:py-3.5 bg-white hover:bg-[#FAF9F6] border border-[#E5DFD5] rounded-2xl cursor-pointer transition-all shadow-2xs hover:shadow-xs group"
                    aria-expanded="false"
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3.5 text-left flex-1 pr-2">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#E8EDE6] flex items-center justify-center shrink-0 text-[#4D6443]">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8]" />
                      </div>
                      <div className="w-[1px] h-4 bg-[#D8DFD7] shrink-0" />
                      <h3 className="font-serif text-sm sm:text-base lg:text-lg text-[#28332C] font-normal leading-snug group-hover:text-[#142D42] transition-colors">
                        {item.question}
                      </h3>
                    </div>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#F4F2EC] flex items-center justify-center shrink-0 text-[#55605A] group-hover:bg-[#EAE6DE] transition-colors">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                )}
              </div>
            )
          })}
        </div>

        {/* Suporte Direto pelo WhatsApp no Rodapé */}
        <div className="mt-5 sm:mt-6 lg:mt-8 flex justify-center">
          <a
            href={wppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-white border border-[#E0D9CE] hover:border-[#2E4237]/40 text-[#48544E] hover:text-[#28332C] text-xs font-medium transition-all shadow-2xs text-center"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#4D6443] shrink-0" />
            <span>Ainda tem dúvidas? Fale diretamente pelo WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  )
}
