import { Building2, Laptop, RotateCcw, ArrowRight, Check } from 'lucide-react'
import { getPrimaryBookingAction } from '../../config/siteConfig'

const services = [
  {
    id: 'presencial',
    titleLine1: 'Consulta Psiquiátrica',
    titleLine2: 'Presencial',
    icon: Building2,
    description:
      'Atendimento médico individualizado realizado em consultório acolhedor, com escuta atenta, avaliação clínica minuciosa e definição de plano singular.',
    features: [
      'Ambiente privativo e acolhedor',
      'Escuta atenta e sem pressa',
      'Avaliação diagnóstica detalhada',
      'Esclarecimento transparente de dúvidas',
    ],
  },
  {
    id: 'online',
    titleLine1: 'Consulta Psiquiátrica',
    titleLine2: 'Online',
    icon: Laptop,
    description:
      'Atendimento psiquiátrico à distância com a mesma profundidade, segurança e sigilo, em total conformidade com as diretrizes do CFM para telemedicina.',
    features: [
      'Flexibilidade de atendimento',
      'Plataforma segura e sigilosa',
      'Receitas digitais (CIP-Brasil)',
      'Continuidade e pontualidade no cuidado',
    ],
  },
  {
    id: 'acompanhamento',
    titleLine1: 'Acompanhamento',
    titleLine2: 'Contínuo',
    icon: RotateCcw,
    description:
      'Acompanhamento clínico individualizado e periódico, com reavaliação da evolução, monitoramento de respostas e ajustes ao longo do cuidado.',
    features: [
      'Monitoramento atento da evolução',
      'Ajustes de dosagens e conduta terapêutica',
      'Suporte médico contínuo e relação de confiança',
      'Foco na estabilidade e qualidade de vida',
    ],
  },
]

export const ServicesSection = () => {
  const bookingAction = getPrimaryBookingAction()

  return (
    <section
      id="atendimentos"
      className="relative w-full min-h-[100svh] lg:h-[100svh] flex flex-col justify-center bg-[#FAF9F6] text-[#28332C] overflow-hidden border-t border-[#E8E4DC] py-14 lg:py-0"
    >
      {/* Background oficial das Modalidades visível 100% de ponta a ponta sem cortes */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <img
          src="/backgroundmodalidade.png"
          alt=""
          className="w-full h-full object-fill lg:object-cover xl:object-fill"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 h-full flex flex-col justify-center">
        
        {/* Cabeçalho Centralizado Compacto e Elegante */}
        <div className="text-center max-w-3xl mx-auto mb-6 lg:mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-8 sm:w-10 h-[1px] bg-[#4D6443]" />
            <span className="text-[10.5px] sm:text-xs uppercase tracking-[0.25em] text-[#4D6443] font-semibold">
              MODALIDADES DE CUIDADO
            </span>
            <span className="w-8 sm:w-10 h-[1px] bg-[#4D6443]" />
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[36px] font-normal text-[#28332C] leading-snug tracking-tight mb-2">
            Atendimentos psiquiátricos pautados na <em className="italic font-normal">individualidade.</em>
          </h2>

          <p className="text-xs sm:text-[13.5px] text-[#4F5A55] leading-relaxed max-w-2xl mx-auto">
            Cada consulta é um momento dedicado a compreender a sua realidade com rigor científico, discrição e respeito absoluto.
          </p>
        </div>

        {/* Grade de 3 Colunas com Divisores Verticais */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E5DFD5] items-start">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="flex flex-col px-4 sm:px-6 lg:px-8 py-5 md:py-1 text-left"
              >
                {/* Cabeçalho do Card: Ícone + Título */}
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#E8EDE6] flex items-center justify-center shrink-0 text-[#4D6443]">
                    <Icon className="w-5 h-5 stroke-[1.6]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl text-[#28332C] font-normal leading-tight">
                      {service.titleLine1}
                    </h3>
                    <span className="font-serif text-lg sm:text-xl text-[#28332C] font-normal leading-tight block">
                      {service.titleLine2}
                    </span>
                  </div>
                </div>

                {/* Parágrafo de Descrição */}
                <p className="text-[12px] sm:text-[13px] text-[#55605A] leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Lista com Checkmarks Verdes */}
                <ul className="space-y-2">
                  {service.features.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[12px] sm:text-[13px] text-[#28332C]">
                      <Check className="w-3.5 h-3.5 text-[#4D6443] shrink-0 mt-0.5 stroke-[2.2]" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Botão de Agendamento Centralizado */}
        <div className="flex justify-center mt-7 lg:mt-9">
          <a
            href={bookingAction.href}
            {...(bookingAction.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="inline-flex items-center gap-2.5 px-8 py-3 rounded-full bg-[#485E35] hover:bg-[#3D502C] text-white text-xs sm:text-sm font-medium tracking-wide shadow-xs transition-all hover:shadow-md"
          >
            <span>Solicitar agendamento</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  )
}
