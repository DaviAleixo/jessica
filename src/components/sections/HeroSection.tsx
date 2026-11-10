import { MapPin, ShieldCheck, ArrowRight, Calendar, Sparkles } from 'lucide-react'
import { getPrimaryBookingAction } from '../../config/siteConfig'

export const HeroSection = () => {
  const bookingAction = getPrimaryBookingAction()

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#F8F6F2] text-[#28332C] flex flex-col justify-between"
    >
      {/* Imagem de Fundo Oficial (backgroundhero.png) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/backgroundhero.png"
          alt=""
          className="w-full h-full object-cover object-right-bottom sm:object-center"
        />
      </div>

      {/* =========================================================================
          LAYOUT MOBILE EXCLUSIVO (Conforme imagem de referência enviada pelo usuário)
          - Foto da Dra. Jéssica no topo/centro
          - Card branco flutuante arredondado sobreposto
          - Apenas 1 botão (Agendar uma consulta)
          - Indicadores de confiança divididos em 2 colunas
         ========================================================================= */}
      <div className="flex sm:hidden flex-col w-full relative z-10 pt-[76px] pb-6 px-4">
        {/* Foto Superior Centralizada */}
        <div className="w-full flex justify-center items-end pt-2 pb-0 relative z-0">
          <img
            src="/jessicahero.png"
            alt="Dra. Jéssica Stacciarini - Psiquiatra"
            width={480}
            height={620}
            className="w-[260px] max-h-[340px] object-contain object-bottom drop-shadow-md -mb-6"
          />
        </div>

        {/* Card Branco Flutuante com Sombra e Bordas Arredondadas */}
        <div className="relative z-10 bg-white rounded-[28px] p-6 shadow-xl border border-black/5 flex flex-col">
          
          {/* Badge de Especialidade */}
          <div className="self-start inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#28332C]/15 shadow-2xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#2E4237]" />
            <span className="text-[10px] uppercase tracking-wider font-semibold text-[#28332C]">
              Psiquiatria Clínica
            </span>
          </div>

          {/* Título Principal */}
          <h1 className="font-serif text-[26px] leading-[1.18] font-normal text-[#28332C] mb-2 tracking-tight">
            Cuidar da saúde mental é <br />
            olhar para <span className="italic font-light text-[#1A2B3C]">cada história</span> <br />
            com atenção.
          </h1>

          {/* Linha Divisória */}
          <div className="w-10 h-[2px] bg-[#2E4237]/30 my-2.5" />

          {/* Subtítulo */}
          <p className="text-[13px] text-[#4F5A55] leading-relaxed mb-5">
            Atendimento psiquiátrico individualizado, presencial e online, com escuta atenta,
            acolhimento e cuidado baseado em evidências científicas.
          </p>

          {/* Apenas o Botão de Agendamento (Sem o 'Conheça a trajetória') */}
          <div className="w-full mb-5">
            <a
              href={bookingAction.href}
              {...(bookingAction.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="w-full py-3.5 px-5 rounded-full bg-[#2E4237] hover:bg-[#1A2B3C] text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 text-white shrink-0" />
              <span>Agendar uma consulta</span>
              <ArrowRight className="w-4 h-4 text-white shrink-0" />
            </a>
          </div>

          {/* Badges de Confiança em 2 Colunas */}
          <div className="pt-3.5 border-t border-[#E2DDD5]/70 grid grid-cols-2 gap-2 items-center">
            {/* Coluna 1: Presencial e Online */}
            <div className="flex items-center gap-2 pr-2 border-r border-[#E2DDD5]/80">
              <MapPin className="w-4 h-4 text-[#2E4237] shrink-0" />
              <div className="text-[11px] leading-tight text-[#4F5A55]">
                Atendimento <br />
                <strong className="text-[#28332C] font-semibold">Presencial e Online</strong>
              </div>
            </div>

            {/* Coluna 2: 10 anos */}
            <div className="flex items-center gap-2 pl-2">
              <ShieldCheck className="w-4 h-4 text-[#1A2B3C] shrink-0" />
              <div className="text-[11px] leading-tight text-[#4F5A55]">
                10 anos <br />
                <strong className="text-[#28332C] font-semibold">de experiência</strong>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================================
          LAYOUT DESKTOP & TABLET
         ========================================================================= */}
      <div className="hidden sm:flex relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 flex-1 items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Coluna de Texto Desktop */}
          <div className="lg:col-span-7 flex flex-col items-start w-full max-w-2xl pr-0 lg:pr-6">
            
            {/* Tagline / Badge Superior */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 border border-[#1A2B3C]/15 backdrop-blur-xs mb-4 sm:mb-5 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A2B3C]" />
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#1A2B3C]">
                Psiquiatria Clínica & Cuidado Integral
              </span>
            </div>

            {/* Título Principal Editorial */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[56px] xl:text-[60px] font-normal text-[#28332C] leading-[1.12] mb-3 sm:mb-4 tracking-tight">
              Cuidar da saúde mental é <br />
              olhar para <span className="italic font-light text-[#1A2B3C]">cada história</span> com <br />
              atenção.
            </h1>

            {/* Linha Divisória Sutil */}
            <div className="w-12 h-[2px] bg-[#1A2B3C]/30 my-3 sm:my-4" />

            {/* Subtítulo Descritivo */}
            <p className="text-base lg:text-[17px] text-[#4F5A55] font-normal leading-relaxed max-w-lg mb-6 sm:mb-8">
              Atendimento psiquiátrico individualizado, presencial e online, com escuta atenta,
              acolhimento e cuidado baseado em evidências científicas.
            </p>

            {/* Apenas o Botão de Agendar */}
            <div className="mb-6 sm:mb-8">
              <a
                href={bookingAction.href}
                {...(bookingAction.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#2E4237] hover:bg-[#1A2B3C] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#1A2B3C]/20 hover:scale-[1.02] text-center"
              >
                <Calendar className="w-4 h-4 text-white shrink-0" />
                <span>Agendar uma consulta</span>
                <ArrowRight className="w-4 h-4 text-white shrink-0 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Indicadores de Confiança */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-3 border-t border-[#28332C]/10 text-xs text-[#343D39]">
              <div className="flex items-center gap-2 tracking-wider uppercase font-medium">
                <MapPin className="w-4 h-4 text-[#2E4237] shrink-0" />
                <span>
                  Atendimento <strong className="text-[#1A2B3C] font-semibold">Presencial & Online</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 tracking-wider uppercase font-medium">
                <ShieldCheck className="w-4 h-4 text-[#1A2B3C] shrink-0" />
                <span>10 anos de experiência</span>
              </div>
            </div>

          </div>

          {/* Espaço reservado para composição na grade desktop */}
          <div className="hidden lg:block lg:col-span-5" />

        </div>
      </div>

      {/* Fotografia Desktop da Dra. Jéssica */}
      <div className="hidden sm:flex absolute bottom-0 right-[0%] md:right-[2%] lg:right-[4%] xl:right-[6%] z-[2] pointer-events-none flex-col items-end justify-end">
        <img
          src="/jessicahero.png"
          alt="Dra. Jéssica Stacciarini - Médica Psiquiatra"
          decoding="async"
          fetchPriority="high"
          width={850}
          height={1100}
          className="h-[74vh] md:h-[78vh] lg:h-[84vh] xl:h-[88vh] max-h-[780px] w-auto object-contain object-bottom drop-shadow-xl anim-rise-in"
        />
      </div>
    </section>
  )
}
