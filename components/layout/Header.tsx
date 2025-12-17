'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Calendar, ArrowRight } from 'lucide-react'
import Container from './Container'
import Button from '@/components/ui/Button'
import { NAV_LINKS } from '@/constants'
import { cn } from '@/lib/utils'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <Container>
        <div className="flex items-center justify-between h-48 md:h-64">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 md:gap-8">
            <div className="flex items-center gap-4 md:gap-8">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-primary rounded flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:w-20 md:h-20"
                >
                  <path
                    d="M10 2L3 7V13L10 18L17 13V7L10 2Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span className="text-base md:text-xl font-bold text-secondary">
                CredMatrix
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-32">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-base font-medium transition-colors',
                  pathname === link.href
                    ? 'text-primary'
                    : 'text-neutral-600 hover:text-primary'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-8 md:gap-16">
            <Button variant="outline" size="sm" className="hidden md:inline-flex">
              <Calendar className="w-16 h-16 mr-8" />
              Schedule a Demo
            </Button>
            <Button variant="primary" size="sm">
              Get Started
              <ArrowRight className="w-12 h-12 md:w-16 md:h-16 ml-4 md:ml-8" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
