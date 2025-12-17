'use client'

import { useState } from 'react'
import { FAQItem } from '@/types'
import { cn } from '@/lib/utils'

interface FAQAccordionProps {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-12 md:space-y-16">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-neutral-200 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-12 md:p-20 text-left hover:bg-neutral-50 transition-colors"
          >
            <span className="flex items-center gap-8 md:gap-12 text-sm sm:text-base font-medium text-neutral-900">
              <span className="text-neutral-400">{index + 1}.</span>
              {item.question}
            </span>
            <svg
              className={cn(
                'w-16 h-16 md:w-20 md:h-20 text-neutral-600 transition-transform duration-200 flex-shrink-0 ml-8',
                openIndex === index && 'transform rotate-180'
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-12 pb-12 md:px-20 md:pb-20">
              <p className="text-xs sm:text-sm text-neutral-600 pl-24 md:pl-32">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
