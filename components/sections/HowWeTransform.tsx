'use client'

import { Shield, TrendingUp, CheckCircle, PieChart } from 'lucide-react'
import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import FeatureCard from '@/components/shared/FeatureCard'
import AnimateOnScroll from '@/components/shared/AnimateOnScroll'

export default function HowWeTransform() {
  const features = [
    {
      title: 'Risk Screening',
      description: 'Screen your potential customers for comprehensive risk assessment',
      icon: <Shield className="w-32 h-32 text-gray-500" />,
    },
    {
      title: 'Credit Analysis',
      description: 'Evaluate credit worthiness with our advanced AI analytics',
      icon: <TrendingUp className="w-32 h-32 text-gray-500" />,
    },
    {
      title: 'Compliance',
      description: 'Stay compliant with automated regulatory checks',
      icon: <CheckCircle className="w-32 h-32 text-gray-500" />,
    },
    {
      title: 'Portfolio',
      description: 'Monitor your entire portfolio in real-time',
      icon: <PieChart className="w-32 h-32 text-gray-500" />,
    },
  ]

  return (
    <Section background="blue">
      <Container>
        <AnimateOnScroll animation="fade-up">
          <h2 className="text-3xl md:text-4xl text-center text-secondary mb-48">
            See How We Transform Credit Risk
          </h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24">
          {features.map((feature, index) => (
            <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                variant="default"
              />
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  )
}
