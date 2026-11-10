import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Shield, ArrowUp, X, Phone, Mail } from 'lucide-react'
import { siteConfig } from '../../config/siteConfig'

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

export const Footer = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#08111B] text-[#FAF9F6] border-t border-[#182C3F] pt-16 pb-12 text-sm relative">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Grade Superior do Rodapé */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#182C3F]">
          
          {/* Identificação Médica Principal (5 colunas) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <div className="mb-3">
              <span className="font-serif text-2xl sm:text-3xl text-white font-normal leading-tight block">
                {siteConfig.doctor.name}
              </span>
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#7BA6CC] font-semibold mt-1 block">
                {siteConfig.doctor.title} • {siteConfig.doctor.crm} • {siteConfig.doctor.rqe}
              </span>
            </div>

            <p className="text-xs sm:text-[13px] text-[#A6C4DF]/75 leading-relaxed max-w-md mb-6">
              Atendimento psiquiátrico individualizado com foco no cuidado integral, escuta atenta, ética e condutas baseadas em evidências científicas. Consultas presenciais e por telemedicina em todo o Brasil.
            </p>

            {/* Link Oficial do Instagram e Selo CFM */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#132435] hover:bg-[#1A334B] text-white text-xs font-medium transition-colors border border-[#243F5B]"
              >
                <InstagramIcon className="w-4 h-4 text-[#93BCDE]" />
                <span>{siteConfig.contact.instagramHandle}</span>
              </a>

              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0F1E2E] border border-[#1E3A56] text-xs text-[#93BCDE]">
                <Shield className="w-3.5 h-3.5 text-[#7BA6CC]" />
                <span>RQE 47.296 • Psiquiatria</span>
              </div>
            </div>
          </div>

          {/* Links de Navegação Rápida (3 colunas) */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7BA6CC] mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#A6C4DF]/80">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre a Dra. Jéssica
                </a>
              </li>
              <li>
                <a href="#atendimentos" className="hover:text-white transition-colors">
                  Modalidades de Cuidado
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">
                  Pilares da Atuação
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">
                  Fluxo do Paciente
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Localização e Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato & Atendimento ao Paciente (4 colunas) */}
          <div className="lg:col-span-4 text-left">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7BA6CC] mb-4">
              Atendimento ao Paciente
            </h4>
            <div className="space-y-3 text-xs sm:text-[13px] text-[#A6C4DF]/80">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#7BA6CC] shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors underline underline-offset-2"
                >
                  WhatsApp: {siteConfig.contact.whatsappDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#7BA6CC] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors underline underline-offset-2 break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <InstagramIcon className="w-4 h-4 text-[#7BA6CC] shrink-0" />
                <a
                  href={siteConfig.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors underline underline-offset-2"
                >
                  Instagram: {siteConfig.contact.instagramHandle}
                </a>
              </div>

              <p className="text-xs text-[#7BA6CC]/70 pt-2 border-t border-[#182C3F]">
                Atendimento presencial e online (telemedicina) mediante agendamento prévio.
              </p>
            </div>
          </div>

        </div>

        {/* Aviso de Conformidade com o Conselho Federal de Medicina (CFM) */}
        <div className="py-7 border-b border-[#182C3F] text-[11.5px] text-[#A6C4DF]/60 leading-relaxed text-left space-y-2">
          <p>
            <strong className="text-white/80 font-medium">Informações Éticas e Resolução CFM nº 2.336/2023:</strong> As informações contidas neste website têm caráter unicamente informativo, preventivo e educativo sobre saúde mental, não substituindo o diagnóstico clínico ou a consulta médica individualizada presencial ou por telemedicina regulamentada.
          </p>
          <p>
            Nenhum tratamento ou medicação deve ser iniciado, alterado ou interrompido sem a orientação direta de um médico devidamente registrado. Em situações de urgência médica ou risco imediato, procure o pronto-socorro mais próximo ou contate o SAMU (192) ou o Centro de Valorização da Vida (188).
          </p>
        </div>

        {/* Rodapé Inferior */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A6C4DF]/60">
          <div>
            © {new Date().getFullYear()} {siteConfig.doctor.name}. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setIsPrivacyModalOpen(true)}
              className="hover:text-white transition-colors underline underline-offset-4 cursor-pointer"
            >
              Política de Privacidade e Sigilo
            </button>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={scrollToTop}
              aria-label="Voltar ao topo da página"
              className="p-2.5 rounded-full bg-[#132435] hover:bg-[#1A334B] text-[#93BCDE] hover:text-white border border-[#243F5B] transition-all cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

      </div>

      {/* Modal de Política de Privacidade */}
      <AnimatePresence>
        {isPrivacyModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 text-left"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#0E1B28] text-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-[#243F5B]"
            >
              <button
                type="button"
                onClick={() => setIsPrivacyModalOpen(false)}
                aria-label="Fechar política de privacidade"
                className="absolute top-6 right-6 p-2 rounded-full bg-[#132435] hover:bg-[#1E3A56] text-[#A6C4DF] hover:text-white transition-colors cursor-pointer border border-[#243F5B]"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7BA6CC] block mb-2">
                Privacidade & Proteção de Dados
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-6">
                Política de Privacidade e Sigilo Médico
              </h3>

              <div className="text-xs sm:text-sm text-[#A6C4DF] leading-relaxed space-y-4">
                <p>
                  A privacidade e o sigilo dos dados dos pacientes e visitantes deste site são tratados com o mais elevado padrão de rigor ético e em estrita conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018) e com o Código de Ética Médica do Conselho Federal de Medicina.
                </p>

                <h4 className="font-serif text-base text-white font-semibold pt-2">
                  1. Sigilo Médico e Prontuário
                </h4>
                <p>
                  Todas as informações clínicas compartilhadas em consultas presenciais ou telemedicina são estritamente confidenciais e protegidas pelo sigilo profissional médico. O prontuário do paciente é de acesso exclusivo da médica e do próprio paciente.
                </p>

                <h4 className="font-serif text-base text-white font-semibold pt-2">
                  2. Canais de Contato e Agendamento
                </h4>
                <p>
                  Os dados enviados por meio de canais de contato (como WhatsApp ou e-mail) são utilizados exclusivamente para fins de comunicação sobre disponibilidade de horários, confirmação de consultas e orientações administrativas. Nenhuma informação é compartilhada com terceiros para fins publicitários.
                </p>

                <h4 className="font-serif text-base text-white font-semibold pt-2">
                  3. Cookies e Navegação
                </h4>
                <p>
                  Este site utiliza apenas cookies técnicos essenciais para o correto funcionamento da página e métricas anônimas de desempenho de navegação.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#182C3F] text-right">
                <button
                  type="button"
                  onClick={() => setIsPrivacyModalOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#1E4D7B] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#286095] transition-colors cursor-pointer border border-[#3E74A6]/40"
                >
                  Entendi e fechar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  )
}
