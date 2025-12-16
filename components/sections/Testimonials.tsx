'use client'

import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Card from '@/components/ui/Card'
import AnimateOnScroll from '@/components/shared/AnimateOnScroll'

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        'CredMatrix has transformed how we assess credit risk. The platform is intuitive and the insights are actionable.',
      author: 'John Doe',
      position: 'CFO, Tech Corp',
    },
    {
      quote:
        'The speed and accuracy of the reports have helped us make better lending decisions and reduce defaults.',
      author: 'Jane Smith',
      position: 'Risk Manager, Finance Co',
    },
  ]

  return (
    <Section background="white">
      <Container>
        <AnimateOnScroll animation="fade-up">
          <h2 className="text-3xl md:text-4xl text-center text-secondary mb-48">
            Voices from the customers
          </h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll key={index} animation={index === 0 ? 'fade-left' : 'fade-right'} delay={index * 150}>
              <Card variant="default" className="h-full hover:shadow-lg transition-shadow duration-300">
                <p className="text-base text-neutral-700 mb-24 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <p className="font-semibold text-neutral-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-neutral-600">{testimonial.position}</p>
                </div>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  )
}
