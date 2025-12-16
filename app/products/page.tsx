import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import ProductShowcase from '@/components/sections/ProductShowcase'
import CTA from '@/components/sections/CTA'
import { PRODUCT_SECTIONS } from '@/constants'

export default function ProductsPage() {
  return (
    <>
      <Section background="white" className="pt-80">
        <Container>
          <div className="text-center mb-64">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-24">
              Meet the Definitive Risk Assessment Platform
            </h1>
          </div>
        </Container>
      </Section>

      {PRODUCT_SECTIONS.map((section, index) => (
        <ProductShowcase key={index} section={section} index={index} />
      ))}

      <CTA />
    </>
  )
}
