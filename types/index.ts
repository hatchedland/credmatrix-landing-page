export interface NavLink {
  label: string
  href: string
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export interface CardProps {
  title?: string
  description?: string
  children?: React.ReactNode
  variant?: 'default' | 'blue' | 'green' | 'pink' | 'grey'
  className?: string
}

export interface FeatureCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  variant?: 'default' | 'blue' | 'green' | 'pink'
}

export interface PricingTier {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  highlighted?: boolean
  variant: 'grey' | 'blue' | 'pink'
  ctaText: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface StatItem {
  value: string
  label: string
}

export interface ProductFeature {
  title: string
  description: string
}

export interface ProductSection {
  title: string
  description: string
  features: ProductFeature[]
  image?: string
}
