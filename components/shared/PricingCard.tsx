'use client'

import { motion } from 'framer-motion'
import { User, Users, Building2, Check, Sparkles } from 'lucide-react'
import { PricingTier } from '@/types'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface PricingCardProps {
  tier: PricingTier
}

const iconMap: Record<string, React.ElementType> = {
  user: User,
  users: Users,
  building: Building2,
}

export default function PricingCard({ tier }: PricingCardProps) {
  const Icon = iconMap[tier.icon] || User

  const variants = {
    grey: {
      card: 'bg-gradient-to-br from-neutral-50 via-slate-50 to-neutral-100 border-neutral-200',
      icon: 'bg-neutral-200 text-neutral-600',
      price: 'text-neutral-900',
      button: 'primary' as const,
    },
    blue: {
      card: 'bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 border-primary/30 shadow-lg shadow-primary/10',
      icon: 'bg-primary text-white',
      price: 'text-primary',
      button: 'primary' as const,
    },
    pink: {
      card: 'bg-gradient-to-br from-rose-50 via-pink-50 to-red-100 border-rose-200',
      icon: 'bg-rose-500 text-white',
      price: 'text-rose-600',
      button: 'primary' as const,
    },
  }

  const style = variants[tier.variant]

  return (
    <motion.div
      className={cn(
        'relative rounded-2xl border-2 p-6 md:p-8 transition-all duration-300 h-full flex flex-col',
        style.card,
        tier.highlighted && 'ring-2 ring-primary ring-offset-2'
      )}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Popular Badge */}
      {tier.highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
            <Sparkles className="w-3 h-3" />
            Most Popular
          </span>
        </div>
      )}

      {/* Icon */}
      <div className="mb-4 md:mb-6">
        <div className={cn('w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center', style.icon)}>
          <Icon className="w-6 h-6 md:w-7 md:h-7" />
        </div>
      </div>

      {/* Header */}
      <div className="mb-4 md:mb-6">
        <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-1 md:mb-2">
          {tier.name}
        </h3>
        <p className="text-xs md:text-sm text-neutral-500">{tier.description}</p>
      </div>

      {/* Price */}
      <div className="mb-6 md:mb-8">
        <span className={cn('text-3xl md:text-4xl font-bold', style.price)}>
          {tier.price}
        </span>
        {tier.period && (
          <span className="text-xs md:text-sm text-neutral-500 ml-1">/{tier.period}</span>
        )}
      </div>

      {/* Features */}
      <div className="flex-1 mb-6 md:mb-8">
        <p className="text-xs md:text-sm font-semibold text-neutral-700 mb-3 md:mb-4">What&apos;s included:</p>
        <ul className="space-y-2 md:space-y-3">
          {tier.features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-2 md:gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-green-600" />
              </div>
              <span className="text-xs md:text-sm text-neutral-600">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <Button
        variant={style.button}
        className={cn(
          'w-full',
          tier.highlighted && 'shadow-lg shadow-primary/25'
        )}
      >
        {tier.ctaText}
      </Button>
    </motion.div>
  )
}
