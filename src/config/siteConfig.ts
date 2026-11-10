/**
 * CONFIGURAÇÃO CENTRALIZADA — DRA. JÉSSICA STACCIARINI
 * 
 * Todas as informações de contato, links de agendamento, dados de registro
 * e textos do consultório podem ser atualizados diretamente neste arquivo.
 * 
 * Conforme Resolução CFM nº 2.336/2023:
 * Dados de CRM e RQE devidamente registrados e validados.
 */

export interface SiteConfig {
  doctor: {
    name: string
    title: string
    specialty: string
    experience: string
    crm: string
    rqe: string
    isPendingRegistration: boolean
    bioSummary: string
  }
  contact: {
    whatsappNumber: string // Formato: 55DDDNÚMERO (sem espaços ou traços)
    whatsappDisplay: string
    whatsappDefaultMessage: string
    phoneDisplay: string
    phoneNumber: string
    email: string
    instagramHandle: string
    instagramUrl: string
    bookingPlatformName: string
    bookingUrl: string // Ex: Link da Doctoralia ou sistema da clínica
    isBookingUrlConfigured: boolean
  }
  location: {
    addressTitle: string
    street: string
    complement: string
    neighborhood: string
    cityState: string
    postalCode: string
    reference: string
    isAddressPending: boolean
    googleMapsSearchUrl: string
    workingHours: string
  }
  seo: {
    siteTitle: string
    siteDescription: string
    canonicalUrl: string
    author: string
  }
}

export const siteConfig: SiteConfig = {
  doctor: {
    name: 'Dra. Jéssica Stacciarini',
    title: 'Médica Psiquiatra',
    specialty: 'Psiquiatria Clínica e Atendimento Humanizado',
    experience: '10 anos de experiência clínica',
    crm: 'CRMMG 70.188',
    rqe: 'RQE 47.296',
    isPendingRegistration: false,
    bioSummary:
      'Médica psiquiatra (CRMMG 70.188 | RQE 47.296) com 10 anos de experiência clínica e dedicação à saúde mental, combinando sólida vivência em serviços de urgência e assistência pública com a prática ambulatorial baseada em acolhimento e evidências científicas.'
  },
  contact: {
    whatsappNumber: '5534991947868',
    whatsappDisplay: '(34) 99194-7868',
    whatsappDefaultMessage:
      'Olá, Dra. Jéssica! Gostaria de informações sobre o agendamento de consulta psiquiátrica.',
    phoneDisplay: '(34) 99194-7868',
    phoneNumber: '+5534991947868',
    email: 'drajessicastacciarini@gmail.com',
    instagramHandle: '@jessicastacciarini',
    instagramUrl: 'https://www.instagram.com/jessicastacciarini?utm_source=ig_web_button_share_sheet&srtk=ZDNlZDc0MzIxNw==',
    bookingPlatformName: 'Agendamento Online',
    // Plataforma externa opcional (ex: Doctoralia); enquanto não configurada, o CTA direciona diretamente para o WhatsApp oficial
    bookingUrl: '',
    isBookingUrlConfigured: false
  },
  location: {
    addressTitle: 'Consultório Psiquiátrico',
    street: 'Atendimento Presencial em confirmação de consultório',
    complement: 'Sala e detalhes no agendamento',
    neighborhood: 'Centro / Setor Médico',
    cityState: 'Minas Gerais — MG',
    postalCode: '38000-000',
    reference: 'Consultas presenciais e atendimento por telemedicina para todo o Brasil.',
    isAddressPending: true,
    googleMapsSearchUrl: 'https://maps.google.com',
    workingHours: 'Segunda a Sexta, mediante agendamento prévio'
  },
  seo: {
    siteTitle: 'Dra. Jéssica Stacciarini | Psiquiatra (CRMMG 70.188 • RQE 47.296) — Presencial e Online',
    siteDescription:
      'Dra. Jéssica Stacciarini, Médica Psiquiatra (CRMMG 70.188 | RQE 47.296). Atendimento psiquiátrico individualizado, presencial e online, com escuta atenta, acolhimento e base científica.',
    canonicalUrl: 'https://www.drajessicastacciarini.com.br/',
    author: 'Dra. Jéssica Stacciarini'
  }
}

/**
 * Retorna o link de ação para WhatsApp devidamente formatado e codificado.
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || siteConfig.contact.whatsappDefaultMessage
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`
}

/**
 * Retorna o destino prioritário para o CTA de agendamento:
 * Se houver uma plataforma externa (ex: Doctoralia) configurada, aponta para ela;
 * caso contrário, direciona diretamente para o WhatsApp oficial da médica.
 */
export function getPrimaryBookingAction(): { href: string; isExternal: boolean; label: string } {
  if (siteConfig.contact.isBookingUrlConfigured && siteConfig.contact.bookingUrl.trim() !== '') {
    return {
      href: siteConfig.contact.bookingUrl,
      isExternal: true,
      label: 'Agendar Consulta Online'
    }
  }

  return {
    href: getWhatsAppUrl(),
    isExternal: true,
    label: 'Agendar uma consulta'
  }
}
