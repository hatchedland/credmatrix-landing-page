'use client'

import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import AnimateOnScroll from '@/components/shared/AnimateOnScroll'
import { HOME_STATS } from '@/constants'

export default function Hero() {
  return (
    <div className="relative">
      {/* Blue background - only top portion with side margins */}
      <div className="absolute top-0 left-16 right-16 md:left-32 md:right-32 lg:left-64 lg:right-64 h-[500px] bg-accent-blue rounded-b-[48px]"></div>

      {/* Content */}
      <div className="relative pt-64 pb-80">
        <Container>
          <AnimateOnScroll animation="fade-up" className="max-w-4xl mx-auto text-center mb-48">
            <h1 className="text-4xl md:text-5xl text-secondary mb-32 leading-tight">
              Transforming financial due-diligence intelligence into{' '}
              <span className="italic">accessible</span>,{' '}
              <span className="italic">affordable</span> &{' '}
              <span className="italic">instant</span>{' '}
              resource for every decision - maker
            </h1>
            <div className="flex justify-center gap-16">
              <Button variant="primary" size="lg" className="hover:scale-105 transition-transform">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
                Explore Product
              </Button>
            </div>
          </AnimateOnScroll>

          {/* Product Demo Video */}
          <AnimateOnScroll animation="scale" delay={200} className="max-w-5xl mx-auto mb-80">
            <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-neutral-200">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              >
                <source src="/screen-capture.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </AnimateOnScroll>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 max-w-5xl mx-auto">
            {HOME_STATS.map((stat, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={300 + index * 100}>
                <div className="text-center bg-white border border-neutral-200 rounded-xl py-32 px-24 hover:shadow-lg transition-shadow">
                  <div className="text-3xl md:text-4xl text-secondary mb-8">
                    {stat.value}
                  </div>
                  {stat.label && (
                    <div className="text-sm text-neutral-600">{stat.label}</div>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </div>
    </div>
  )
}
