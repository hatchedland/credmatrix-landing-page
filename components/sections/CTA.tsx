'use client'

import { ArrowRight, Sparkles } from 'lucide-react'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Heading from '@/components/ui/Heading'
import Button from '@/components/ui/Button'
import AnimateOnScroll from '@/components/shared/AnimateOnScroll'

export default function CTA() {
  return (
    <Section background="grey">
      <Container>
        <AnimateOnScroll animation="fadeUp" className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-12 md:mb-16">
            <Sparkles className="w-32 h-32 md:w-40 md:h-40 text-primary animate-pulse-slow" />
          </div>
          <Heading as="h2" align="center" className="mb-16 md:mb-24">
            Generate your first report for free
          </Heading>
          <p className="text-sm sm:text-base md:text-lg text-neutral-600 mb-24 md:mb-32">
            We replace guesswork with quantifiable certainty. Our AI-powered platform
            embeds intelligence, precision, and security directly into your assessment
            process.
          </p>
          <Button variant="primary" size="lg" className="hover:scale-105 transition-transform">
            Get Started <ArrowRight className="w-16 h-16 md:w-20 md:h-20 ml-4 md:ml-8" />
          </Button>
        </AnimateOnScroll>
      </Container>
    </Section>
  )
}
