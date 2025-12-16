import { PricingTier } from '@/types'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface PricingCardProps {
  tier: PricingTier
}

export default function PricingCard({ tier }: PricingCardProps) {
  const variants = {
    grey: 'bg-neutral-100 border-neutral-300',
    blue: 'bg-accent-blue border-blue-300 ring-2 ring-primary',
    pink: 'bg-accent-pink border-red-300',
  }

  return (
    <div
      className={cn(
        'rounded-xl border-2 p-32 transition-all duration-200',
        variants[tier.variant],
        tier.highlighted && 'transform scale-105'
      )}
    >
      <div className="text-center mb-32">
        <h3 className="text-2xl font-bold text-neutral-900 mb-8">
          {tier.name}
        </h3>
        <p className="text-sm text-neutral-600 mb-24">{tier.description}</p>
        <div className="mb-24">
          <span className="text-4xl font-bold text-neutral-900">
            {tier.price}
          </span>
          {tier.period && (
            <span className="text-sm text-neutral-600 ml-8">/{tier.period}</span>
          )}
        </div>
        <Button variant="primary" className="w-full">
          {tier.ctaText}
        </Button>
      </div>

      <div className="space-y-16">
        <h4 className="font-semibold text-neutral-900">What&apos;s Included</h4>
        <ul className="space-y-12">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-8">
              <svg
                className="w-20 h-20 text-green-600 flex-shrink-0 mt-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm text-neutral-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
