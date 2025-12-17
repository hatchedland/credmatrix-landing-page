'use client'

import { AlertTriangle, Zap, Target, Search, CreditCard, Scale } from 'lucide-react'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Heading from '@/components/ui/Heading'
import Card from '@/components/ui/Card'
import AnimateOnScroll from '@/components/shared/AnimateOnScroll'

export default function TrueCost() {
  const costs = [
    {
      title: 'Missed Red Flags',
      description: 'Identify warning signs before they become problems',
      icon: <AlertTriangle className="w-16 h-16 md:w-24 md:h-24 text-red-500" />,
    },
    {
      title: 'Speed of Breach Discovery',
      description: 'Get instant alerts on potential breaches',
      icon: <Zap className="w-16 h-16 md:w-24 md:h-24 text-red-500" />,
    },
    {
      title: 'False Reassure Process',
      description: 'Eliminate false positives with accurate data',
      icon: <Target className="w-16 h-16 md:w-24 md:h-24 text-red-500" />,
    },
    {
      title: 'Enhanced Due Diligence',
      description: 'Comprehensive background checks and verification',
      icon: <Search className="w-16 h-16 md:w-24 md:h-24 text-red-500" />,
    },
    {
      title: 'Complete Credit Decisions Tools',
      description: 'All-in-one platform for credit decisions',
      icon: <CreditCard className="w-16 h-16 md:w-24 md:h-24 text-red-500" />,
    },
    {
      title: 'In-Depth Legal Stats',
      description: 'Access to comprehensive legal databases',
      icon: <Scale className="w-16 h-16 md:w-24 md:h-24 text-red-500" />,
    },
  ]

  return (
    <Section background="white">
      <Container>
        <AnimateOnScroll animation="fadeUp">
          <Heading as="h2" align="center" className="mb-32 md:mb-48">
            The True Cost of Insufficient Risk Assessment
          </Heading>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24">
          {costs.map((cost, index) => (
            <AnimateOnScroll key={index} animation="fadeUp" delay={index * 100}>
              <Card variant="pink" className="h-full hover:scale-105 transition-transform duration-300">
                <div className="mb-8 md:mb-12 p-4 md:p-6 bg-white w-fit rounded-md">{cost.icon}</div>
                <h3 className="text-base sm:text-lg font-semibold text-neutral-900 mb-4 md:mb-8">
                  {cost.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600">{cost.description}</p>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  )
}
