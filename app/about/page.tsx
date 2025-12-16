import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import CTA from '@/components/sections/CTA'

export default function AboutPage() {
  return (
    <>
      <Section background="blue" className="pt-80">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-24">
              About CredMatrix
            </h1>
            <p className="text-lg text-neutral-600">
              Transforming financial due-diligence intelligence into accessible, affortable & instant resource for every decision - maker
            </p>
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto space-y-32">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-16">
                Our Mission
              </h2>
              <p className="text-lg text-neutral-600">
                To empower businesses with AI-powered credit risk assessment tools
                that are accessible, accurate, and actionable.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-secondary mb-16">
                Our Vision
              </h2>
              <p className="text-lg text-neutral-600">
                To become the leading platform for financial due diligence and
                credit risk management across all industries.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-secondary mb-16">
                Why Choose Us
              </h2>
              <ul className="space-y-12 text-lg text-neutral-600">
                <li className="flex items-start gap-12">
                  <span className="text-primary font-bold">•</span>
                  <span>AI-powered intelligence for accurate risk assessment</span>
                </li>
                <li className="flex items-start gap-12">
                  <span className="text-primary font-bold">•</span>
                  <span>Real-time monitoring and instant alerts</span>
                </li>
                <li className="flex items-start gap-12">
                  <span className="text-primary font-bold">•</span>
                  <span>Comprehensive data from verified sources</span>
                </li>
                <li className="flex items-start gap-12">
                  <span className="text-primary font-bold">•</span>
                  <span>Affordable pricing for businesses of all sizes</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <CTA />
    </>
  )
}
