import React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../lib/utils'

export interface AccordionProps {
  id: string
  question: string
  answer: React.ReactNode
  tag?: string
  isOpen: boolean
  onToggle: () => void
  isPendingNote?: string
}

export const AccordionItem: React.FC<AccordionProps> = ({
  question,
  answer,
  tag,
  isOpen,
  onToggle,
  isPendingNote,
}) => {
  return (
    <div
      className={cn(
        'group border rounded-2xl transition-all duration-200 overflow-hidden bg-white',
        isOpen ? 'border-[#2E4237]/50 shadow-xs' : 'border-[#E3DDD3] hover:border-[#C8B9A8]'
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between text-left py-3.5 px-5 gap-3 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E4237]"
      >
        <div className="flex-1 pr-2">
          {tag && (
            <span className="inline-block text-[9px] font-semibold uppercase tracking-[0.18em] text-[#66796E] mb-0.5">
              {tag}
            </span>
          )}
          <h3
            className={cn(
              'font-serif text-base sm:text-lg font-normal leading-snug transition-colors duration-200 text-[#28332C]',
              isOpen && 'text-[#1A2B3C] font-medium'
            )}
          >
            {question}
          </h3>
        </div>

        <div
          className={cn(
            'w-7 h-7 rounded-xl flex items-center justify-center border transition-all duration-300 shrink-0',
            isOpen
              ? 'bg-[#2E4237] text-white border-[#2E4237] rotate-180'
              : 'bg-[#F9F7F3] text-[#2E4237] border-[#E3DDD3] group-hover:border-[#2E4237]/40'
          )}
          aria-hidden="true"
        >
          <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300" />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="px-5 pb-4 pt-1 text-[#48544E] text-xs sm:text-[13px] leading-relaxed border-t border-[#F0ECE4]">
              {answer}

              {isPendingNote && (
                <div className="mt-2.5 pt-2 border-t border-[#EAE4DC] flex items-center gap-2 text-[11px] text-[#8B7D6B] italic">
                  <span className="inline-block w-1 h-1 rounded-full bg-[#C8B9A8]" />
                  <span>{isPendingNote}</span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
