import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight, Calendar } from 'lucide-react'
import { siteConfig, getPrimaryBookingAction } from '../../config/siteConfig'

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Atendimentos', href: '#atendimentos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Dúvidas', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const bookingAction = getPrimaryBookingAction()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/92 backdrop-blur-md border-b border-[#E2DDD5] py-3.5 shadow-xs'
            : 'bg-transparent pt-4 sm:pt-6 pb-3'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo / Nome da Médica (Sem o JS circular) */}
          <a
            href="#"
            className="flex flex-col group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E4237] rounded-lg py-1"
          >
            <span className="font-serif text-xl sm:text-2xl lg:text-[25px] font-normal tracking-tight text-[#28332C] leading-tight group-hover:text-[#1A2B3C] transition-colors">
              {siteConfig.doctor.name}
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.22em] text-[#66796E] group-hover:text-[#1A2B3C]/80 transition-colors">
              Psiquiatria Clínica
            </span>
          </a>

          {/* Navegação Desktop */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-[0.16em] uppercase text-[#28332C]/80">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#1A2B3C] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#1A2B3C] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden sm:flex items-center">
            <a
              href={bookingAction.href}
              {...(bookingAction.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2E4237] hover:bg-[#1A2B3C] text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02]"
            >
              <Calendar className="w-3.5 h-3.5 text-white" />
              <span>Agendar Consulta</span>
            </a>
          </div>

          {/* Botão Mobile */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className="lg:hidden p-2 text-[#28332C] hover:text-[#1A2B3C] focus:outline-none cursor-pointer rounded-lg"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Drawer Mobile */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#F8F6F2]/98 backdrop-blur-lg px-6 py-8 flex flex-col justify-between lg:hidden animate-in fade-in duration-300">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#E2DDD5]">
              <div className="flex flex-col">
                <span className="font-serif text-2xl text-[#28332C]">{siteConfig.doctor.name}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#66796E]">
                  Psiquiatria Clínica
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Fechar gaveta de navegação"
                className="p-2 text-[#28332C] focus:outline-none"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-5 py-8 text-base tracking-widest uppercase text-[#28332C] font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 border-b border-[#E2DDD5]/60 hover:text-[#1A2B3C] transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#1A2B3C]" />
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#E2DDD5] flex flex-col gap-3">
            <a
              href={bookingAction.href}
              {...(bookingAction.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-4 rounded-xl bg-[#2E4237] hover:bg-[#1A2B3C] text-white text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2 shadow-lg transition-colors"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Agendar Consulta</span>
            </a>
            <div className="text-center text-[11px] text-[#66796E] tracking-wider uppercase font-medium">
              Atendimento Presencial e Online
            </div>
          </div>
        </div>
      )}
    </>
  )
}
