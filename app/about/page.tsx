'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Heading from '@/components/ui/Heading'
import CTA from '@/components/sections/CTA'
import Image from 'next/image'
import {
  EASING,
  DURATION,
  VIEWPORT_CONFIG,
  createSlideVariant,
} from '@/lib/animations'

function FoundersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, VIEWPORT_CONFIG)

  const imageVariants = createSlideVariant('left')
  const contentVariants = createSlideVariant('right')

  return (
    <div ref={ref} className="flex flex-col items-center text-center max-w-full md:max-w-2xl mx-auto px-4 md:px-0">
      <motion.div
        className="relative w-full aspect-[4/3] sm:aspect-[3/2] md:h-[450px] md:aspect-auto mb-16 md:mb-24 rounded-2xl md:rounded-3xl overflow-hidden"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={imageVariants}
        transition={{ duration: DURATION.slow, ease: EASING }}
      >
        <Image
          src="/team/raman_uday.png"
          alt="Uday and Raman - Co-founders of CredMatrix"
          fill
          className="object-cover object-center"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={contentVariants}
        transition={{ duration: DURATION.slow, delay: 0.2, ease: EASING }}
      >
        <Heading as="h3" size="md" className="text-center mb-4">
          Uday Gatty & Raman Kirdolia
        </Heading>
        <p className="text-xs sm:text-sm text-neutral-500 mb-12 md:mb-16">Co-founders</p>
        <p className="text-neutral-600 leading-relaxed text-xs sm:text-sm md:text-base">
          As Chartered Accountants, Uday and Raman offer a high-level perspective rooted in the experience of analyzing over 1,000 companies. Their expertise goes beyond basic finance; they possess a deep-dive understanding of the internal mechanics that drive business health and creditworthiness. This extensive background allows them to spot patterns and risks that others miss, bringing a level of professional discipline and strategic insight that simplifies even the most complex financial challenges.
        </p>
      </motion.div>
    </div>
  )
}

export default function AboutPage() {
  const headerRef = useRef(null)
  const teamHeaderRef = useRef(null)
  const isHeaderInView = useInView(headerRef, VIEWPORT_CONFIG)
  const isTeamHeaderInView = useInView(teamHeaderRef, VIEWPORT_CONFIG)

  return (
    <>
      <div className="relative">
        {/* Blue background */}
        <div className="absolute top-0 left-8 right-8 md:left-32 md:right-32 lg:left-64 lg:right-64 h-[420px] md:h-[320px] bg-accent-blue rounded-b-[32px] md:rounded-b-[48px]"></div>

        <Section background="white" className="pt-80 pb-16 relative bg-transparent">
          <Container>
            <motion.div
              ref={headerRef}
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: DURATION.normal, ease: EASING }}
            >
              <Heading as="h1" align="center" className="mb-24">
                About CredMatrix
              </Heading>
            </motion.div>
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: DURATION.normal, delay: 0.2, ease: EASING }}
            >
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                Money matters are complicated. Whether it&apos;s sending money abroad, balancing your family&apos;s budget, or
                scaling your business — we&apos;ve all experienced how fractured and frustrating finances can be. That&apos;s why
                we&apos;re here. CredMatrix exists to remove the friction that stands in the way of your money goals becoming your
                new reality.
              </p>
            </motion.div>
          </Container>
        </Section>
      </div>

      <Section background="white" size="sm" className="overflow-hidden pt-0">
        <Container>
          <motion.div
            ref={teamHeaderRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isTeamHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: DURATION.normal, ease: EASING }}
          >
            <Heading as="h2" align="center" className="mb-24 md:mb-32">
              The visionaries who made this possible
            </Heading>
          </motion.div>
          <FoundersSection />
        </Container>
      </Section>

      <CTA />
    </>
  )
}
