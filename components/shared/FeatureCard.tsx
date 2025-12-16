import { FeatureCardProps } from '@/types'
import Card from '@/components/ui/Card'

export default function FeatureCard({
  title,
  description,
  icon,
  variant = 'default',
}: FeatureCardProps) {
  return (
    <Card variant={variant} className="h-full hover:scale-105 transition-transform duration-300 group">
      {icon && <div className="mb-16 group-hover:scale-110 transition-transform duration-300">{icon}</div>}
      <h4 className="text-lg font-semibold text-neutral-900 mb-8">{title}</h4>
      <p className="text-sm text-neutral-600">{description}</p>
    </Card>
  )
}
