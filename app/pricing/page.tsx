'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Heading from '@/components/ui/Heading'
import PricingCard from '@/components/shared/PricingCard'
import FAQAccordion from '@/components/shared/FAQAccordion'
import CTA from '@/components/sections/CTA'
import { PRICING_TIERS, FAQ_ITEMS } from '@/constants'
import { cn } from '@/lib/utils'
import {
  EASING,
  DURATION,
  STAGGER_DELAY,
  VIEWPORT_CONFIG,
} from '@/lib/animations'

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'businesses' | 'yearly'>('businesses')
  const headerRef = useRef(null)
  const cardsRef = useRef(null)
  const faqRef = useRef(null)
  const isHeaderInView = useInView(headerRef, VIEWPORT_CONFIG)
  const isCardsInView = useInView(cardsRef, VIEWPORT_CONFIG)
  const isFaqInView = useInView(faqRef, VIEWPORT_CONFIG)

  return (
    <>
      {/* Hero Section with Blue Background */}
      <div className="relative">
        <div className="absolute top-0 left-8 right-8 md:left-32 md:right-32 lg:left-64 lg:right-64 h-[200px] md:h-[240px] bg-accent-blue rounded-b-[32px] md:rounded-b-[48px]"></div>

        <div className="relative pt-80 pb-32">
          <Container>
            <motion.div
              ref={headerRef}
              initial={{ opacity: 0, y: 30 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: DURATION.normal, ease: EASING }}
            >
              <Heading as="h1" align="center" className="mb-32">
                Pricing
              </Heading>
            </motion.div>

            {/* Toggle */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: DURATION.normal, delay: 0.2, ease: EASING }}
            >
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
                      ? 'bg-white text-[#0E6EBE] shadow-sm'
                      : 'text-neutral-600 hover:text-neutral-900'
                  )}
                >
                  Yearly
                </button>
              </div>
            </motion.div>
          </Container>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <Section background="white">
        <Container>
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-32 mb-80">
            {PRICING_TIERS.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{
                  duration: DURATION.normal,
                  delay: index * STAGGER_DELAY * 1.5,
                  ease: EASING,
                }}
              >
                <PricingCard tier={tier} />
              </motion.div>
            ))}
          </div>

          {/* FAQ Section */}
          <div ref={faqRef} className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isFaqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: DURATION.normal, ease: EASING }}
            >
              <Heading as="h2" align="center" className="mb-32">
                Frequently Asked Questions
              </Heading>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isFaqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: DURATION.normal, delay: 0.2, ease: EASING }}
            >
              <FAQAccordion items={FAQ_ITEMS} />
            </motion.div>
          </div>
        </Container>
      </Section>

      <CTA />
    </>
  )
}
