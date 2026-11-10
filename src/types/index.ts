export interface NavItem {
  label: string
  href: string
}

export interface ServiceCardItem {
  id: string
  number: string
  title: string
  tagline: string
  description: string
  modality: string
  details: string[]
}

export interface DifferentialItem {
  number: string
  title: string
  description: string
  highlight: string
}

export interface StepItem {
  step: string
  title: string
  description: string
  detail: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
  tag?: string
  isPendingNote?: string
}

