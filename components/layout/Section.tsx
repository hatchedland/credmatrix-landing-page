import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  background?: 'white' | 'grey' | 'blue' | 'green' | 'pink'
}

export default function Section({ children, className, background = 'white' }: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    grey: 'bg-neutral-50',
    blue: 'bg-accent-blue',
    green: 'bg-accent-green',
    pink: 'bg-accent-pink',
  }

  return (
    <section className={cn('py-48 md:py-80', backgrounds[background], className)}>
      {children}
    </section>
  )
}
