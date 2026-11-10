import { MapPin, Phone, Mail, Clock, ArrowRight, Shield, CalendarDays, Laptop } from 'lucide-react'
import { siteConfig, getPrimaryBookingAction, getWhatsAppUrl } from '../../config/siteConfig'

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

export const ContactSection = () => {
  const bookingAction = getPrimaryBookingAction()

  return (
    <section
      id="contato"
      className="relative w-full text-[#102436] border-t border-[#DDE7F0] overflow-hidden"
    >
      {/* ============================================================== */}
      {/* MOBILE LAYOUT (lg:hidden) - EXACT REPLICA OF REFERENCE PHOTO    */}
      {/* ============================================================== */}
      <div className="block lg:hidden relative w-full pt-14 pb-16 px-4">
        {/* Background Mobile Específico */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <img
            src="/backgroundlocalizacaomobile.png"
            alt=""
            className="w-full h-full object-fill"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="relative z-10 max-w-md mx-auto text-center">
          {/* Header Mobile */}
          <div className="flex items-center justify-center gap-2.5 mb-2">
            <span className="w-8 h-[1.5px] bg-[#1A4D78]" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#1A4D78] font-bold">
              LOCALIZAÇÃO & ATENDIMENTO
            </span>
            <span className="w-8 h-[1.5px] bg-[#1A4D78]" />
          </div>

          <h2 className="font-serif text-3xl font-normal text-[#0C1E2F] leading-[1.25] tracking-tight mb-2.5">
            Ambiente acolhedor e <br />
            <em className="italic font-normal text-[#1A4D78]">atendimento dedicado.</em>
          </h2>

          <p className="text-[12.5px] text-[#455D75] leading-relaxed max-w-sm mx-auto mb-6">
            Consultas psiquiátricas presenciais em consultório privado, além de telemedicina estruturada com segurança e sigilo para pacientes em todo o Brasil.
          </p>

          {/* Card Branco Centralizado */}
          <div className="bg-white rounded-3xl border border-[#D5E2EE] p-5 shadow-sm text-left">
            {/* Topo do Card */}
            <div className="flex items-center justify-between pb-3.5 mb-3.5">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#1A4D78] font-bold block mb-0.5">
                  MODALIDADES DE ATENDIMENTO
                </span>
                <h3 className="font-serif text-[22px] text-[#0C1E2F] font-normal leading-tight">
                  Presencial e Telemedicina
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#EBF3FB] text-[#1A4D78] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 stroke-[1.8]" />
              </div>
            </div>

            {/* Atendimento Presencial */}
            <div className="p-3.5 rounded-2xl bg-[#EBF3FB] flex items-start gap-3.5 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#D6E6F5] text-[#1A4D78] flex items-center justify-center shrink-0 mt-0.5">
                <CalendarDays className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#1A4D78] block mb-0.5">
                  ATENDIMENTO PRESENCIAL
                </span>
                <p className="text-[12px] text-[#455D75] leading-relaxed">
                  Consultório planejado com conforto térmico, isolamento acústico e ambiente privativo para total sigilo e tranquilidade.
                </p>
              </div>
            </div>

            {/* Atendimento Online */}
            <div className="p-3.5 rounded-2xl bg-[#EBF3FB] flex items-start gap-3.5 mb-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#D6E6F5] text-[#1A4D78] flex items-center justify-center shrink-0 mt-0.5">
                <Laptop className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#1A4D78] block mb-0.5">
                  ATENDIMENTO ONLINE
                </span>
                <p className="text-[12px] text-[#455D75] leading-relaxed">
                  Telemedicina regulamentada pelo CFM para todo o Brasil, com emissão de receitas digitais (ICP-Brasil) e laudos seguros.
                </p>
              </div>
            </div>

            {/* Mapa Estilizado Box */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-[#DCE8F2] bg-[#EEF5FB] p-4 flex items-center justify-center mb-4">
              <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#1A4D78_1px,transparent_1px)] [background-size:14px_14px]" />
              <div className="relative z-10 w-full max-w-[275px] bg-white rounded-2xl border border-[#D5E2EE] px-4 py-3.5 text-center shadow-xs flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#0D3B66] text-white flex items-center justify-center shadow-xs mb-2">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-serif text-[15px] text-[#0C1E2F] font-bold leading-snug">
                  Dra. Jéssica Stacciarini
                </span>
                <span className="text-[11px] text-[#455D75] mt-1 leading-snug">
                  Consultório com localização privilegiada e acesso reservado
                </span>
                <span className="text-[10px] text-[#1A4D78] font-bold mt-1.5 leading-snug">
                  Instruções de acesso e endereço enviados na confirmação
                </span>
              </div>
            </div>

            {/* Rodapé do Card com Botão de Ação */}
            <div className="pt-3.5 border-t border-[#E3EDF6] flex items-center justify-between gap-2.5">
              <div className="text-left">
                <span className="text-[9.5px] uppercase tracking-wider text-[#1A4D78] font-bold block">
                  PRONTO PARA DAR O PRIMEIRO PASSO?
                </span>
                <span className="text-[11.5px] text-[#455D75] font-medium leading-tight block">
                  Horários flexíveis presenciais e online
                </span>
              </div>

              <a
                href={bookingAction.href}
                {...(bookingAction.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-2xl bg-[#0D3B66] hover:bg-[#0A2E50] text-white text-[10.5px] font-bold tracking-wider uppercase shadow-xs transition-all shrink-0 active:scale-95"
              >
                <CalendarDays className="w-4 h-4 shrink-0" />
                <span className="leading-tight text-left">
                  AGENDAR UMA<br />CONSULTA
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* DESKTOP LAYOUT (hidden lg:block) - 2-COLUMN PREMIUM EXPERIENCE */}
      {/* ============================================================== */}
      <div className="hidden lg:block relative w-full py-20 lg:py-24 bg-[#F5F8FC]">
        {/* Background Desktop */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <img
            src="/backgroundlocalizacao.png"
            alt=""
            className="w-full h-full object-cover xl:object-fill"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="w-full max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
          {/* Cabeçalho Centralizado em Azul Escuro */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-2.5">
              <span className="w-10 h-[1.5px] bg-[#1A4D78]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#1A4D78] font-semibold">
                LOCALIZAÇÃO & ATENDIMENTO
              </span>
              <span className="w-10 h-[1.5px] bg-[#1A4D78]" />
            </div>

            <h2 className="font-serif text-4xl lg:text-[40px] font-normal text-[#0C1E2F] leading-snug tracking-tight mb-2.5">
              Ambiente acolhedor e <em className="italic font-normal text-[#1A4D78]">atendimento dedicado.</em>
            </h2>

            <p className="text-[14px] text-[#455D75] leading-relaxed max-w-2xl mx-auto">
              Consultas psiquiátricas presenciais em consultório privativo, além de telemedicina estruturada com segurança e sigilo para pacientes em todo o Brasil.
            </p>
          </div>

          {/* Grade de 2 Colunas */}
          <div className="grid grid-cols-12 gap-8 items-stretch">
            {/* Coluna 1: Canais Diretos & Redes Sociais */}
            <div className="col-span-5 flex flex-col justify-between p-8 rounded-3xl bg-white/90 border border-[#D5E2EE] backdrop-blur-md shadow-xs text-left">
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E3EDF6]">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#5A7C9D] font-semibold block">
                      Comunicação Direta
                    </span>
                    <h3 className="font-serif text-2xl text-[#0C1E2F] font-normal">
                      Canais Oficiais
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-[#E8F2FA] text-[#1A4D78] flex items-center justify-center">
                    <Phone className="w-5 h-5 stroke-[1.8]" />
                  </div>
                </div>

                <div className="space-y-3.5">
                  {/* WhatsApp */}
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3.5 p-3 rounded-2xl bg-[#F4F8FC] border border-[#DFEBF5] hover:border-[#1A4D78]/50 hover:bg-white transition-all shadow-2xs"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#1A4D78] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="flex-1 text-left">
                      <span className="text-[10px] uppercase tracking-wider text-[#5A7C9D] font-semibold block">
                        WhatsApp para Agendamentos
                      </span>
                      <span className="font-semibold text-sm text-[#0C1E2F] group-hover:text-[#1A4D78] transition-colors">
                        {siteConfig.contact.whatsappDisplay}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#5A7C9D] group-hover:translate-x-1 group-hover:text-[#1A4D78] transition-all shrink-0" />
                  </a>

                  {/* Instagram Oficial */}
                  <a
                    href={siteConfig.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3.5 p-3 rounded-2xl bg-[#F4F8FC] border border-[#DFEBF5] hover:border-[#1A4D78]/50 hover:bg-white transition-all shadow-2xs"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#0D2438] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                      <InstagramIcon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 text-left">
                      <span className="text-[10px] uppercase tracking-wider text-[#5A7C9D] font-semibold block">
                        Instagram Profissional
                      </span>
                      <span className="font-semibold text-sm text-[#0C1E2F] group-hover:text-[#1A4D78] transition-colors">
                        {siteConfig.contact.instagramHandle}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#5A7C9D] group-hover:translate-x-1 group-hover:text-[#1A4D78] transition-all shrink-0" />
                  </a>

                  {/* E-mail */}
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="group flex items-center gap-3.5 p-3 rounded-2xl bg-[#F4F8FC] border border-[#DFEBF5] hover:border-[#1A4D78]/50 hover:bg-white transition-all shadow-2xs"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#E8F2FA] text-[#1A4D78] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="flex-1 text-left overflow-hidden">
                      <span className="text-[10px] uppercase tracking-wider text-[#5A7C9D] font-semibold block">
                        E-mail Institucional
                      </span>
                      <span className="font-medium text-sm text-[#0C1E2F] truncate block">
                        {siteConfig.contact.email}
                      </span>
                    </div>
                  </a>

                  {/* Horários */}
                  <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-[#F4F8FC] border border-[#DFEBF5] text-left">
                    <div className="w-10 h-10 rounded-xl bg-[#E8F2FA] text-[#1A4D78] flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#5A7C9D] font-semibold block">
                        Disponibilidade
                      </span>
                      <span className="text-[13px] text-[#455D75] font-medium">
                        {siteConfig.location.workingHours}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Selo CFM / RQE */}
              <div className="mt-6 pt-4 border-t border-[#E3EDF6] flex items-center justify-between text-xs text-[#5A7C9D]">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#1A4D78] shrink-0" />
                  <span className="font-semibold text-[#0C1E2F]">{siteConfig.doctor.crm} • {siteConfig.doctor.rqe}</span>
                </div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#1A4D78] bg-[#E8F2FA] px-2.5 py-0.5 rounded-full border border-[#D5E2EE]">
                  Psiquiatria Clínica
                </span>
              </div>
            </div>

            {/* Coluna 2: Modalidades & Mapa Estilizado */}
            <div className="col-span-7 flex flex-col justify-between p-8 rounded-3xl bg-white/90 border border-[#D5E2EE] backdrop-blur-md shadow-xs text-left">
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E3EDF6]">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#5A7C9D] font-semibold block">
                      Modalidades de Atendimento
                    </span>
                    <h3 className="font-serif text-2xl text-[#0C1E2F] font-normal">
                      Presencial e Telemedicina
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-[#E8F2FA] text-[#1A4D78] flex items-center justify-center">
                    <MapPin className="w-5 h-5 stroke-[1.8]" />
                  </div>
                </div>

                {/* Card descritivo dos espaços */}
                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div className="p-4 rounded-2xl bg-[#F4F8FC] border border-[#DFEBF5] text-left">
                    <span className="text-[10.5px] uppercase tracking-wider font-semibold text-[#1A4D78] block mb-1">
                      Atendimento Presencial
                    </span>
                    <p className="text-xs text-[#455D75] leading-relaxed">
                      Consultório planejado com conforto térmico, isolamento acústico e ambiente privativo para total sigilo e tranquilidade.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F4F8FC] border border-[#DFEBF5] text-left">
                    <span className="text-[10.5px] uppercase tracking-wider font-semibold text-[#1A4D78] block mb-1">
                      Atendimento Online
                    </span>
                    <p className="text-xs text-[#455D75] leading-relaxed">
                      Telemedicina regulamentada pelo CFM para todo o Brasil, com emissão de receitas digitais (ICP-Brasil) e laudos seguros.
                    </p>
                  </div>
                </div>

                {/* Mapa Estilizado Elegante */}
                <div className="relative w-full h-52 rounded-2xl overflow-hidden border border-[#D5E2EE] bg-[#EEF5FB] flex items-center justify-center mb-5">
                  <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#1A4D78_1px,transparent_1px)] [background-size:16px_16px]" />
                  <svg className="absolute inset-0 w-full h-full stroke-[#D5E4F2] opacity-70" fill="none">
                    <line x1="0" y1="30%" x2="100%" y2="30%" strokeWidth="1.5" />
                    <line x1="0" y1="70%" x2="100%" y2="70%" strokeWidth="1.5" />
                    <line x1="35%" y1="0" x2="35%" y2="100%" strokeWidth="1.5" />
                    <line x1="75%" y1="0" x2="75%" y2="100%" strokeWidth="1.5" />
                  </svg>

                  <div className="relative z-10 flex flex-col items-center text-center p-4 bg-white/95 backdrop-blur-xs rounded-2xl border border-[#D5E2EE] shadow-sm max-w-sm">
                    <div className="w-10 h-10 rounded-full bg-[#1A4D78] text-white flex items-center justify-center shadow-sm mb-2">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="font-serif text-base text-[#0C1E2F] font-medium leading-snug">
                      Dra. Jéssica Stacciarini
                    </span>
                    <span className="text-[11.5px] text-[#455D75] mt-0.5">
                      Consultório com localização privilegiada e acesso reservado
                    </span>
                    <span className="text-[10px] text-[#1A4D78] font-semibold mt-1">
                      Instruções de acesso e endereço enviados na confirmação
                    </span>
                  </div>
                </div>
              </div>

              {/* Ação de Agendamento */}
              <div className="pt-4 border-t border-[#E3EDF6] flex items-center justify-between gap-4">
                <div className="text-left">
                  <span className="text-[10px] uppercase tracking-wider text-[#5A7C9D] font-semibold block">
                    Pronto para dar o primeiro passo?
                  </span>
                  <span className="font-serif text-base text-[#0C1E2F]">
                    Horários flexíveis presenciais e online
                  </span>
                </div>

                <a
                  href={bookingAction.href}
                  {...(bookingAction.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-[#1A4D78] hover:bg-[#123859] text-white text-xs font-semibold tracking-wider uppercase shadow-xs transition-all hover:shadow-md shrink-0"
                >
                  <CalendarDays className="w-4 h-4" />
                  <span>Agendar uma consulta</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
