import { CalendarDays, MessageSquareCheck, Stethoscope, Heart, ArrowRight } from 'lucide-react'
import { getPrimaryBookingAction } from '../../config/siteConfig'

const steps = [
  {
    step: '01',
    title: 'Agendamento Inicial',
    icon: CalendarDays,
    description: 'Solicitação rápida e prática de consulta via canal oficial de WhatsApp ou agendamento online.',
    detailLine1: 'PROCESSO ÁGIL',
    detailLine2: 'E RESERVADO',
  },
  {
    step: '02',
    title: 'Confirmação e Orientações',
    icon: MessageSquareCheck,
    description: 'Verificação da disponibilidade de horários, modalidade (presencial ou online) e instruções prévias.',
    detailLine1: 'ALINHAMENTO',
    detailLine2: 'CLARO E TRANSPARENTE',
  },
  {
    step: '03',
    title: 'Consulta Psiquiátrica',
    icon: Stethoscope,
    description: 'Avaliação médica completa e individualizada, com escuta aprofundada da história e definição de conduta.',
    detailLine1: 'TEMPO DEDICADO E',
    detailLine2: 'DIAGNÓSTICO SEGURO',
  },
  {
    step: '04',
    title: 'Acompanhamento Contínuo',
    icon: Heart,
    description: 'Continuidade responsável com retornos periódicos para avaliar evolução e promover qualidade de vida.',
    detailLine1: 'SUPORTE MÉDICO',
    detailLine2: 'LONGITUDINAL',
  },
]

export const HowItWorksSection = () => {
  const bookingAction = getPrimaryBookingAction()

  return (
    <section
      id="como-funciona"
      className="relative w-full min-h-[100svh] flex flex-col justify-center bg-[#FAF9F6] text-[#28332C] border-t border-[#E8E4DC] py-16 sm:py-20 lg:py-24"
    >
      {/* Background oficial do Fluxo do Paciente */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <img
          src="/backgroundfluxo.png"
          alt=""
          className="w-full h-full object-fill lg:object-cover xl:object-fill"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 h-full flex flex-col justify-center">
        
        {/* Grade de 2 Colunas: Título à Esquerda + Linha do Tempo à Direita */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Coluna Esquerda: Cabeçalho Editorial */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#4D6443]" />
              <span className="text-[10.5px] sm:text-xs uppercase tracking-[0.25em] text-[#4D6443] font-semibold">
                FLUXO DO PACIENTE
              </span>
              <span className="w-8 h-[1px] bg-[#4D6443]" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#28332C] leading-[1.15] tracking-tight mb-4">
              Como funciona a <br />
              sua <em className="italic font-normal">jornada de</em> <br />
              <em className="italic font-normal">cuidado.</em>
            </h2>

            <p className="text-xs sm:text-[13.5px] text-[#55605A] leading-relaxed max-w-sm">
              Um fluxo transparente e organizado desde o primeiro contato até a consolidação do acompanhamento.
            </p>
          </div>

          {/* Coluna Direita: Timeline Vertical com Cards Horizontais */}
          <div className="lg:col-span-7 flex flex-col">
            {steps.map((item, idx) => {
              const Icon = item.icon
              const isLast = idx === steps.length - 1
              return (
                <div key={item.step} className="flex items-stretch gap-4 sm:gap-5">
                  
                  {/* Coluna da Linha do Tempo: Ícone Azul Marinho + Conector */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-[#142D42] text-white flex items-center justify-center shadow-md relative z-10">
                      <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[1.6]" />
                    </div>
                    
                    {!isLast && (
                      <div className="w-[1px] flex-1 bg-[#D8DFD7] my-1 relative flex items-center justify-center min-h-[18px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8E9F8E] shrink-0" />
                      </div>
                    )}
                  </div>

                  {/* Card Horizontal */}
                  <div className={`flex-1 rounded-2xl bg-white/75 backdrop-blur-xs border border-[#E5DFD5] px-4 py-3 sm:px-5 sm:py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-2xs hover:shadow-xs transition-all ${!isLast ? 'mb-2.5 sm:mb-3' : ''}`}>
                    
                    {/* Conteúdo textual do Passo */}
                    <div className="flex-1 text-left">
                      <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-[#55605A] mb-0.5">
                        <span>{item.step}</span>
                        <span className="w-4 h-[1px] bg-[#55605A]" />
                      </div>

                      <h3 className="font-serif text-base sm:text-lg text-[#28332C] font-normal leading-snug mb-0.5">
                        {item.title}
                      </h3>

                      <p className="text-[11.5px] sm:text-[12px] text-[#55605A] leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Divisor vertical e Badge lateral (Desktop) */}
                    <div className="hidden md:flex flex-col justify-center items-center border-l border-[#EAE4DC] pl-5 min-w-[160px] text-center self-stretch shrink-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#3D4741] leading-tight">
                        {item.detailLine1} <br />
                        {item.detailLine2}
                      </span>
                    </div>

                  </div>

                </div>
              )
            })}
          </div>

        </div>

        {/* Botão de Agendamento Centralizado */}
        <div className="flex justify-center mt-7 lg:mt-9">
          <a
            href={bookingAction.href}
            {...(bookingAction.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="inline-flex items-center gap-2.5 px-8 py-3 rounded-full bg-[#3D502C] hover:bg-[#324224] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-xs transition-all hover:shadow-md"
          >
            <span>Iniciar agendamento de consulta</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  )
}
