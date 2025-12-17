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

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Martin Gilbert',
    role: 'Chair',
    bio: 'Martin Gilbert co-founded Aberdeen Asset Management in 1983, leading the company for 34 years and overseeing its 2017 merger with Standard Life. Until November 2019, he was chairman of the UK\'s Prudential Regulation Authority\'s Practitioner Panel and was Deputy Chairman of the Board of Sky plc until 2018. Before this, he was the Chairman of FirstGroup. In 2015, he was ranked no. 22 on the Harvard Business Review\'s 100 best-performing CEOs in the world. Martin holds an LLB from the University of Aberdeen and an MA in Accountancy. He qualified as a chartered accountant with Deloitte.',
    image: '/team/uday.jpeg',
  },
  {
    name: 'Nik Storonsky',
    role: 'Co-founder & CEO',
    bio: 'Nik Storonsky launched Revolut in 2015 to transform the way we spend and transfer money abroad. Since then, he\'s put Revolut on the path to becoming the world\'s first truly global bank, changing the way we do all things money. Previously an Emerging Markets Equity Derivatives Trader at Credit Suisse and Lehman Brothers, he traded over $2 billion across various options, swaps, and FX instruments. Nik holds an M.S. in Applied Physics and Mathematics from the Moscow Institute of Physics and Technology and an MA in Economics from the New Economic School, Moscow. He is a keen kite surfer, mountaineer, and championship swimmer.',
    image: '/team/raman.jpeg',
  },
]

function TeamMemberCard({
  member,
  imagePosition,
}: {
  member: TeamMember
  imagePosition: 'left' | 'right'
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, VIEWPORT_CONFIG)

  const imageVariants = createSlideVariant(imagePosition === 'left' ? 'left' : 'right')
  const contentVariants = createSlideVariant(imagePosition === 'left' ? 'right' : 'left')

  const imageSection = (
    <motion.div
      className="relative w-full md:w-1/2 h-72 sm:h-96 md:h-auto min-h-[300px] sm:min-h-[400px] flex items-end justify-center overflow-hidden"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={imageVariants}
      transition={{ duration: DURATION.slow, ease: EASING }}
    >
      <div className="relative w-full h-full">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-contain object-center"
        />
      </div>
    </motion.div>
  )

  const contentSection = (
    <motion.div
      className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={contentVariants}
      transition={{ duration: DURATION.slow, delay: 0.2, ease: EASING }}
    >
      <p className="text-xs sm:text-sm text-neutral-500 mb-2">{member.role}</p>
      <Heading as="h3" size="md" className="mb-4 md:mb-6">
        {member.name}
      </Heading>
      <p className="text-neutral-600 leading-relaxed text-xs sm:text-sm md:text-base">
        {member.bio}
      </p>
    </motion.div>
  )

  return (
    <div ref={ref} className="flex flex-col md:flex-row overflow-hidden">
      {imagePosition === 'left' ? (
        <>
          {imageSection}
          {contentSection}
        </>
      ) : (
        <>
          {contentSection}
          {imageSection}
        </>
      )}
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
        <div className="absolute top-0 left-8 right-8 md:left-32 md:right-32 lg:left-64 lg:right-64 h-[280px] md:h-[320px] bg-accent-blue rounded-b-[32px] md:rounded-b-[48px]"></div>

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

      <Section background="white" size="sm" className="overflow-hidden">
        <Container>
          <motion.div
            ref={teamHeaderRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isTeamHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: DURATION.normal, ease: EASING }}
          >
            <Heading as="h2" align="center" className="mb-16">
              Meet the team who made this possible
            </Heading>
          </motion.div>
          <div className="space-y-24">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={member.name}
                member={member}
                imagePosition={index % 2 === 0 ? 'left' : 'right'}
              />
            ))}
          </div>
        </Container>
      </Section>

      <CTA />
    </>
  )
}
