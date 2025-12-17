'use client'

import { ArrowRight, Compass } from 'lucide-react'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import AnimateOnScroll from '@/components/shared/AnimateOnScroll'
import RotatingText from '@/components/shared/RotatingText'
import { HOME_STATS } from '@/constants'

const rotatingWords = ['accessible', 'affordable', 'instant']

export default function Hero() {
  return (
    <div className="relative">
      {/* Blue background - only top portion with side margins */}
      <div className="absolute top-0 left-8 right-8 md:left-32 md:right-32 lg:left-64 lg:right-64 h-[500px] bg-accent-blue rounded-b-[32px] md:rounded-b-[48px]"></div>

      {/* Content */}
      <div className="relative pt-64 pb-80">
        <Container>
          <AnimateOnScroll animation="fadeUp" className="max-w-5xl mx-auto text-left md:text-center mb-48">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-32 leading-tight">
              Transforming financial due-diligence intelligence into{' '}
              <RotatingText words={rotatingWords} interval={2500} />{' '}
              resource for every decision - maker
            </h1>
            <div className="flex flex-col sm:flex-row justify-start md:justify-center gap-12 sm:gap-16">
              <Button variant="primary" size="lg" className="hover:scale-105 transition-transform">
                Get Started
                <ArrowRight className="w-12 h-12 md:w-16 md:h-16 ml-4 md:ml-8" />
              </Button>
              <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
                <Compass className="w-12 h-12 md:w-16 md:h-16 mr-4 md:mr-8" />
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
              <AnimateOnScroll key={index} animation="fadeUp" delay={300 + index * 100}>
                <div className="text-center bg-white border border-neutral-200 rounded-xl py-24 md:py-32 px-16 md:px-24 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl text-secondary mb-4 md:mb-8">
                    {stat.value}
                  </h3>
                  {stat.label && (
                    <div className="text-xs sm:text-sm text-neutral-600">{stat.label}</div>
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
