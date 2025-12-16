'use client'

import { ArrowRight, Sparkles } from 'lucide-react'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Button from '@/components/ui/Button'
import AnimateOnScroll from '@/components/shared/AnimateOnScroll'

export default function CTA() {
  return (
    <Section background="grey">
      <Container>
        <AnimateOnScroll animation="fade-up" className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-16">
            <Sparkles className="w-40 h-40 text-primary animate-pulse-slow" />
          </div>
          <h2 className="text-3xl md:text-4xl text-secondary mb-24">
            Generate your first report for free
          </h2>
          <p className="text-lg text-neutral-600 mb-32">
            We replace guesswork with quantifiable certainty. Our AI-powered platform
            embeds intelligence, precision, and security directly into your assessment
            process.
          </p>
          <Button variant="primary" size="lg" className="hover:scale-105 transition-transform">
            Get Started <ArrowRight className="w-20 h-20 ml-8" />
          </Button>
        </AnimateOnScroll>
      </Container>
    </Section>
  )
}
