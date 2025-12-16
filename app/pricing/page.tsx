'use client'

import { useState } from 'react'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import PricingCard from '@/components/shared/PricingCard'
import FAQAccordion from '@/components/shared/FAQAccordion'
import CTA from '@/components/sections/CTA'
import { PRICING_TIERS, FAQ_ITEMS } from '@/constants'
import { cn } from '@/lib/utils'

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'businesses' | 'yearly'>('businesses')

  return (
    <>
      <Section background="white" className="pt-80">
        <Container>
          {/* Toggle */}
          <div className="flex justify-center mb-64">
            <div className="inline-flex items-center bg-neutral-100 rounded-lg p-4">
              <button
                onClick={() => setBillingCycle('businesses')}
                className={cn(
                  'px-24 py-8 rounded-md text-sm font-medium transition-all',
                  billingCycle === 'businesses'
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900'
                )}
              >
                For Businesses
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={cn(
                  'px-24 py-8 rounded-md text-sm font-medium transition-all',
                  billingCycle === 'yearly'
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900'
                )}
              >
                Yearly
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-32 mb-80">
            {PRICING_TIERS.map((tier, index) => (
              <PricingCard key={index} tier={tier} />
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-secondary mb-32">
              Frequently Asked Questions
            </h2>
            <FAQAccordion items={FAQ_ITEMS} />
          </div>
        </Container>
      </Section>

      <CTA />
    </>
  )
}
