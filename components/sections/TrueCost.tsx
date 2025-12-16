'use client'

import { AlertTriangle, Zap, Target, Search, CreditCard, Scale } from 'lucide-react'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Card from '@/components/ui/Card'
import AnimateOnScroll from '@/components/shared/AnimateOnScroll'

export default function TrueCost() {
  const costs = [
    {
      title: 'Missed Red Flags',
      description: 'Identify warning signs before they become problems',
      icon: <AlertTriangle className="w-24 h-24 text-red-500" />,
    },
    {
      title: 'Speed of Breach Discovery',
      description: 'Get instant alerts on potential breaches',
      icon: <Zap className="w-24 h-24 text-red-500" />,
    },
    {
      title: 'False Reassure Process',
      description: 'Eliminate false positives with accurate data',
      icon: <Target className="w-24 h-24 text-red-500" />,
    },
    {
      title: 'Enhanced Due Diligence',
      description: 'Comprehensive background checks and verification',
      icon: <Search className="w-24 h-24 text-red-500" />,
    },
    {
      title: 'Complete Credit Decisions Tools',
      description: 'All-in-one platform for credit decisions',
      icon: <CreditCard className="w-24 h-24 text-red-500" />,
    },
    {
      title: 'In-Depth Legal Stats',
      description: 'Access to comprehensive legal databases',
      icon: <Scale className="w-24 h-24 text-red-500" />,
    },
  ]

  return (
    <Section background="white">
      <Container>
        <AnimateOnScroll animation="fade-up">
          <h2 className="text-3xl md:text-4xl text-center text-secondary mb-48">
            The True Cost of Insufficient Risk Assessment
          </h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
          {costs.map((cost, index) => (
            <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
              <Card variant="pink" className="h-full hover:scale-105 transition-transform duration-300">
                <div className="mb-12 p-6 bg-white/40 w-fit rounded-md">{cost.icon}</div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-8">
                  {cost.title}
                </h3>
                <p className="text-sm text-neutral-600">{cost.description}</p>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  )
}
