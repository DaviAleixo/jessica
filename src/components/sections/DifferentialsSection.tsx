import { BriefcaseMedical, Users, FlaskConical, Heart, ShieldCheck } from 'lucide-react'

const pillars = [
  {
    number: '01',
    desktopTag: '01 • 10 ANOS DE EXPERIÊNCIA',
    mobileTag: '01 • DIAGNÓSTICO PRECISO',
    title: 'Experiência Clínica',
    icon: BriefcaseMedical,
    desktopDesc:
      'Trajetória sólida com vivência clínica ampla, desde o consultório continuado até cenários de urgência na saúde pública.',
    mobileDesc:
      'Trajetória sólida e conhecimento clínico amplo, aliando ciência e escuta ativa para construir um cuidado em saúde mental eficaz.',
  },
  {
    number: '02',
    desktopTag: '02 • RELAÇÃO HUMANIZADA',
    mobileTag: '02 • RELAÇÃO HUMANIZADA',
    title: 'Escuta e Acolhimento',
    icon: Users,
    desktopDesc:
      'Um espaço confidencial e seguro, onde cada queixa é compreendida com empatia, respeito e sem julgamentos prévios.',
    mobileDesc:
      'Um espaço de confiança e segurança, onde cada queixa é compreendida com atenção, respeito e sem julgamentos prévios.',
  },
  {
    number: '03',
    desktopTag: '03 • BASEADA EM EVIDÊNCIAS',
    mobileTag: '03 • BASEADA EM EVIDÊNCIAS',
    title: 'Ciência e Ética',
    icon: FlaskConical,
    desktopDesc:
      'Diagnósticos criteriosos e decisões terapêuticas amparadas nas diretrizes científicas mais consolidadas e seguras da psiquiatria.',
    mobileDesc:
      'Diagnósticos e condutas sustentados em evidências científicas, sempre atualizados e alinhados às melhores práticas da psiquiatria.',
  },
  {
    number: '04',
    desktopTag: '04 • ATENÇÃO À INDIVIDUALIDADE',
    mobileTag: '04 • ATENÇÃO À INDIVIDUALIDADE',
    title: 'Cuidado Singular',
    icon: Heart,
    desktopDesc:
      'Planos terapêuticos personalizados que respeitam a rotina, o histórico de vida, as preferências e os objetivos de cada paciente.',
    mobileDesc:
      'Planos terapêuticos personalizados, que respeitam sua história, seu momento e seus objetivos de vida, com foco em bem-estar e qualidade de vida.',
  },
]

export const DifferentialsSection = () => {
  return (
    <section
      id="diferenciais"
      className="relative w-full min-h-[100svh] lg:h-[100svh] flex flex-col justify-center bg-[#FAF9F6] text-[#28332C] overflow-hidden border-t border-[#E8E4DC] py-14 lg:py-0"
    >
      {/* Background oficial para Desktop */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none select-none z-0">
        <img
          src="/backgroundatuacaomedica.png"
          alt=""
          className="w-full h-full object-fill lg:object-cover xl:object-fill"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Background oficial para Mobile */}
      <div className="block lg:hidden absolute inset-0 pointer-events-none select-none z-0">
        <img
          src="/backgroundatuacaomedicamobile.png"
          alt=""
          className="w-full h-full object-fill"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* =========================================================================
          VERSÃO MOBILE (Visível apenas em telas menores que lg)
         ========================================================================= */}
      <div className="block lg:hidden w-full max-w-md mx-auto px-5 relative z-10 py-6">
        
        {/* Cabeçalho Mobile */}
        <div className="text-center mb-7">
          <span className="text-[10.5px] uppercase tracking-[0.25em] text-[#4D6443] font-semibold mb-2 block">
            PILARES DA ATUAÇÃO MÉDICA
          </span>

          <h2 className="font-serif text-[26px] sm:text-3xl text-[#28332C] font-normal leading-[1.2] mb-2.5">
            O que orienta cada <br />
            <em className="italic font-normal">conduta médica</em> e cada <br />
            <em className="italic font-normal">atendimento.</em>
          </h2>

          <p className="text-xs text-[#55605A] leading-relaxed max-w-xs mx-auto">
            Acolhimento com rigor científico, avaliação constante e profunda sensibilidade humana.
          </p>
        </div>

        {/* Linha do Tempo Vertical Mobile com Dots Verdes e Ícones */}
        <div className="space-y-4">
          {pillars.map((item, idx) => {
            const Icon = item.icon
            const isLast = idx === pillars.length - 1
            return (
              <div key={item.number} className="flex items-start gap-3 relative">
                
                {/* Dot verde e Linha vertical conectora */}
                <div className="flex flex-col items-center shrink-0 self-stretch relative w-3.5 pt-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4D6443] shrink-0 z-10 shadow-2xs" />
                  {!isLast && (
                    <div className="w-[1px] flex-1 bg-[#C8D6C6] my-1" />
                  )}
                </div>

                {/* Caixa do Ícone */}
                <div className="w-12 h-12 rounded-2xl bg-[#E8EDE6] flex items-center justify-center shrink-0 text-[#4D6443] shadow-2xs">
                  <Icon className="w-5.5 h-5.5 stroke-[1.6]" />
                </div>

                {/* Bloco de Textos */}
                <div className="flex-1 text-left pt-0.5">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#4D6443] mb-0.5 block">
                    {item.mobileTag}
                  </span>

                  <h3 className="font-serif text-lg text-[#28332C] font-normal leading-snug mb-1">
                    {item.title}
                  </h3>

                  <p className="text-[11.5px] text-[#55605A] leading-relaxed">
                    {item.mobileDesc}
                  </p>
                </div>

              </div>
            )
          })}
        </div>

        {/* Faixa Ética e Bioética Inferior Mobile */}
        <div className="mt-7 rounded-2xl bg-[#EAF0E6] p-3.5 flex items-center gap-3 border border-[#D8E2D6] shadow-2xs">
          <div className="w-8 h-8 rounded-xl border border-[#4D6443]/30 flex items-center justify-center shrink-0 text-[#4D6443]">
            <ShieldCheck className="w-4.5 h-4.5 stroke-[2]" />
          </div>
          <div className="w-[1px] h-9 bg-[#C8D6C6] shrink-0" />
          <p className="text-[11px] text-[#4F5A55] leading-snug italic text-left">
            Cada consulta é um passo no seu processo de cuidado, com <strong className="font-semibold text-[#28332C] not-italic">acompanhamento constante</strong> e orientação clara.
          </p>
        </div>

      </div>

      {/* =========================================================================
          VERSÃO DESKTOP (Visível em lg e acima)
         ========================================================================= */}
      <div className="hidden lg:flex w-full max-w-7xl mx-auto px-8 lg:px-12 relative z-10 h-full flex-col justify-center">
        
        {/* Cabeçalho Desktop */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-12">
          <div className="flex items-center justify-center gap-3 mb-2.5">
            <span className="w-8 sm:w-10 h-[1px] bg-[#4D6443]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#4D6443] font-semibold">
              PILARES DA ATUAÇÃO MÉDICA
            </span>
            <span className="w-8 sm:w-10 h-[1px] bg-[#4D6443]" />
          </div>

          <h2 className="font-serif text-3xl lg:text-[38px] font-normal text-[#28332C] leading-snug tracking-tight mb-2">
            O que orienta cada <em className="italic font-normal">conduta médica</em> e cada <em className="italic font-normal">atendimento.</em>
          </h2>

          <p className="text-xs sm:text-[13.5px] text-[#4F5A55] leading-relaxed max-w-2xl mx-auto">
            A união harmoniosa entre rigor científico, atualização constante e profunda sensibilidade humana.
          </p>
        </div>

        {/* Grade de 4 Pilares Conectados por Linha e Pontos Verdes */}
        <div className="relative">
          {/* Linha horizontal conectora */}
          <div className="absolute top-7 left-12 right-12 h-[1px] bg-[#D8DFD7] z-0" />
          
          {/* 3 Pontos Verdes intermediários na linha */}
          <div className="absolute top-[25px] left-[25%] -translate-x-1/2 w-2 h-2 rounded-full bg-[#4D6443] z-1" />
          <div className="absolute top-[25px] left-[50%] -translate-x-1/2 w-2 h-2 rounded-full bg-[#4D6443] z-1" />
          <div className="absolute top-[25px] left-[75%] -translate-x-1/2 w-2 h-2 rounded-full bg-[#4D6443] z-1" />

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {pillars.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.number} className="flex flex-col text-left">
                  <div className="w-14 h-14 rounded-2xl bg-[#E8EDE6] flex items-center justify-center shrink-0 text-[#4D6443] shadow-2xs mb-4">
                    <Icon className="w-6 h-6 stroke-[1.6]" />
                  </div>

                  <span className="text-[10.5px] uppercase tracking-wider font-semibold text-[#55605A] mb-1 block">
                    {item.desktopTag}
                  </span>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#28332C] font-normal leading-snug mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#55605A] leading-relaxed">
                    {item.desktopDesc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Faixa Ética e Bioética Flutuante Desktop */}
        <div className="mt-10 lg:mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3.5 px-6 py-3 rounded-full bg-[#F5F2EB]/90 border border-[#E2DDD5] shadow-2xs max-w-3xl">
            <div className="w-7 h-7 rounded-lg bg-[#E8EDE6] flex items-center justify-center shrink-0 text-[#4D6443]">
              <ShieldCheck className="w-4 h-4 stroke-[2]" />
            </div>
            <div className="w-[1px] h-5 bg-[#D8DFD7] shrink-0" />
            <p className="text-xs sm:text-[13px] text-[#4F5A55] leading-snug text-left">
              Cada consulta respeita integralmente o sigilo profissional, a autonomia do paciente e os princípios bioéticos médicos.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
