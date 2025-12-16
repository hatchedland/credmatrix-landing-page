import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Button from '@/components/ui/Button'
import { ProductSection } from '@/types'
import { cn } from '@/lib/utils'

interface ProductShowcaseProps {
  section: ProductSection
  index?: number
}

export default function ProductShowcase({ section, index = 0 }: ProductShowcaseProps) {
  const isImageLeft = index % 2 === 1

  return (
    <Section background="white" className="py-48">
      <Container>
        <div className={cn(
          'flex flex-col lg:flex-row items-center gap-48',
          isImageLeft && 'lg:flex-row-reverse'
        )}>
          {/* Content Side */}
          <div className="flex-1 w-full">
            <h2 className="text-2xl md:text-3xl text-secondary mb-12">
              {section.title}
            </h2>
            <p className="text-neutral-600 mb-32">
              {section.description}
            </p>

            {/* Feature Cards - 2x2 Grid */}
            <div className="grid grid-cols-2 gap-16 mb-32">
              {section.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-neutral-200 rounded-lg p-16 hover:shadow-card transition-shadow"
                >
                  <h3 className="text-sm font-semibold text-neutral-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-neutral-500">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-12">
              <Button variant="outline" size="sm">Explore</Button>
              <Button variant="ghost" size="sm" className="text-neutral-600 hover:text-primary">
                Watch Tutorial
              </Button>
            </div>
          </div>

          {/* Image Side - Placeholder */}
          <div className="flex-1 w-full">
            {section.image ? (
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-auto rounded-xl border border-neutral-200"
              />
            ) : (
              <div className="w-full aspect-[4/3] rounded-xl border-2 border-dashed border-neutral-200 bg-neutral-50 flex items-center justify-center">
                <span className="text-neutral-400 text-sm">Product Screenshot</span>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  )
}
