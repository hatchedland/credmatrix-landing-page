'use client'

import { Database, Brain, Activity, BarChart3, ClipboardCheck, FileText } from 'lucide-react'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Heading from '@/components/ui/Heading'
import Card from '@/components/ui/Card'
import AnimateOnScroll from '@/components/shared/AnimateOnScroll'

export default function IntelligentPlatform() {
  const features = [
    {
      title: 'Automated Data Collection',
      description: 'Pull data from multiple verified sources automatically',
      icon: <Database className="w-16 h-16 md:w-24 md:h-24 text-emerald-600" />,
    },
    {
      title: 'Credit Intelligence Engine',
      description: 'AI-powered credit risk analysis and scoring',
      icon: <Brain className="w-16 h-16 md:w-24 md:h-24 text-emerald-600" />,
    },
    {
      title: 'Real-time Monitoring',
      description: 'Get instant alerts on portfolio changes',
      icon: <Activity className="w-16 h-16 md:w-24 md:h-24 text-emerald-600" />,
    },
    {
      title: 'Financial Analysis',
      description: 'Comprehensive financial health assessment',
      icon: <BarChart3 className="w-16 h-16 md:w-24 md:h-24 text-emerald-600" />,
    },
    {
      title: 'Compliance Tracking',
      description: 'Automated regulatory compliance monitoring',
      icon: <ClipboardCheck className="w-16 h-16 md:w-24 md:h-24 text-emerald-600" />,
    },
    {
      title: 'Custom Reports',
      description: 'Generate detailed reports in seconds',
      icon: <FileText className="w-16 h-16 md:w-24 md:h-24 text-emerald-600" />,
    },
  ]

  return (
    <Section background="white">
      <Container>
        <AnimateOnScroll animation="fadeUp">
          <Heading as="h2" align="center" className="mb-32 md:mb-48">
            The Intelligent Platform for Due Diligence
          </Heading>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24">
          {features.map((feature, index) => (
            <AnimateOnScroll key={index} animation="fadeUp" delay={index * 100}>
              <Card variant="green" className="h-full hover:scale-105 transition-transform duration-300">
                <div className="mb-8 md:mb-12 w-fit rounded-md bg-white p-4 md:p-6">{feature.icon}</div>
                <h3 className="text-base sm:text-lg font-semibold text-neutral-900 mb-4 md:mb-8">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600">{feature.description}</p>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  )
}
