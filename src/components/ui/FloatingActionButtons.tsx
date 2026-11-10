import { Mail } from 'lucide-react'
import { siteConfig, getWhatsAppUrl } from '../../config/siteConfig'

function WhatsAppIcon({ size = 26, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.57 14.39C16.32 14.26 15.1 13.66 14.87 13.58C14.64 13.5 14.48 13.46 14.31 13.71C14.15 13.96 13.68 14.51 13.53 14.68C13.39 14.84 13.24 14.86 12.99 14.74C12.74 14.61 11.94 14.35 10.99 13.5C10.25 12.84 9.75 12.03 9.6 11.78C9.46 11.53 9.59 11.4 9.71 11.28C9.82 11.17 9.96 11 10.08 10.86C10.21 10.72 10.25 10.62 10.33 10.45C10.41 10.29 10.37 10.14 10.31 10.02C10.25 9.9 9.76 8.7 9.56 8.2C9.36 7.72 9.16 7.78 9.01 7.77C8.87 7.76 8.71 7.76 8.54 7.76C8.38 7.76 8.11 7.82 7.88 8.07C7.66 8.32 7.02 8.92 7.02 10.14C7.02 11.36 7.91 12.53 8.03 12.7C8.16 12.86 9.78 15.36 12.26 16.43C12.85 16.69 13.31 16.84 13.67 16.95C14.26 17.14 14.8 17.11 15.22 17.05C15.7 16.98 16.68 16.45 16.89 15.88C17.09 15.31 17.09 14.82 17.03 14.72C16.97 14.61 16.82 14.53 16.57 14.39Z" />
    </svg>
  )
}

function InstagramIcon({ size = 23, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export function FloatingActionButtons() {
  const whatsappUrl = getWhatsAppUrl(
    'Olá! Gostaria de informações sobre agendamento de consulta com a Dra. Jéssica Stacciarini.'
  )

  return (
    <aside
      className="fixed bottom-5 right-4 z-50 flex flex-col gap-2.5 items-end md:hidden pointer-events-auto"
      aria-label="Canais de Contato Rápido"
    >
      {/* 1. TOP: WHATSAPP */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="w-12 h-12 rounded-full flex items-center justify-center text-white bg-gradient-to-br from-[#2fe675] to-[#1ea652] shadow-[0_6px_22px_rgba(37,211,102,0.45)] hover:shadow-[0_10px_28px_rgba(37,211,102,0.65)] active:scale-95 transition-all duration-200"
      >
        <WhatsAppIcon size={25} />
      </a>

      {/* 2. MIDDLE: INSTAGRAM */}
      <a
        href={siteConfig.contact.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Acompanhe no Instagram"
        className="w-12 h-12 rounded-full flex items-center justify-center text-white bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-[0_6px_22px_rgba(220,39,67,0.35)] hover:shadow-[0_10px_28px_rgba(220,39,67,0.6)] active:scale-95 transition-all duration-200"
      >
        <InstagramIcon size={23} />
      </a>

      {/* 3. BOTTOM: EMAIL */}
      <a
        href={`mailto:${siteConfig.contact.email}`}
        aria-label="Enviar E-mail"
        className="w-12 h-12 rounded-full flex items-center justify-center text-[#E8F2FA] bg-gradient-to-br from-[#1A2B3C] to-[#0E1A24] border border-[#2A435C] shadow-[0_6px_20px_rgba(0,0,0,0.45)] hover:border-[#1A4D78] active:scale-95 transition-all duration-200"
      >
        <Mail size={21} strokeWidth={2} />
      </a>
    </aside>
  )
}

