# CredMatrix Landing Page

A modern, responsive landing page for CredMatrix - a financial due-diligence intelligence platform built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** with custom design system
- **Responsive Design** - Mobile-first approach
- **3 Main Pages**: Home, Products, Pricing
- **Reusable Components** - Modular and maintainable code
- **Custom Design System** - Colors, typography, and spacing extracted from Figma designs

## Project Structure

```
/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Home page
│   ├── products/          # Products page
│   ├── pricing/           # Pricing page
│   ├── about/             # About page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Base UI components (Button, Card, Input)
│   ├── layout/           # Layout components (Header, Footer, Container)
│   ├── sections/         # Page sections (Hero, CTA, etc.)
│   └── shared/           # Shared components (FeatureCard, PricingCard)
├── lib/                  # Utility functions
├── types/                # TypeScript type definitions
├── constants/            # App constants and data
└── tailwind.config.ts    # Tailwind configuration with custom design system

## Design System

### Colors

- **Primary**: #0066FF (Blue)
- **Secondary**: #1A2B4A (Dark Navy)
- **Accent Colors**:
  - Blue: #D4E9FF
  - Green: #D4F5D4
  - Pink: #FFE5E5
- **Neutral Grays**: 50-900 scale

### Spacing

Based on 4px/8px grid system:
- 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128px

### Typography

- Font Family: Inter
- Responsive font sizes with proper line heights
- Clear hierarchy for headings and body text

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Pages

### Home Page (`/`)
- Hero section with tagline
- Stats showcase
- How We Transform section
- True Cost section
- Intelligent Platform features
- Testimonials
- CTA section

### Products Page (`/products`)
- Risk Assessment
- Cred Grawler
- Portfolio Monitoring
- Risk Consultancy

### Pricing Page (`/pricing`)
- Three pricing tiers (Single, Bulk, Enterprise)
- Toggle for billing cycle
- FAQ accordion
- Feature comparison

### About Page (`/about`)
- Company mission and vision
- Why choose CredMatrix

## Components

### UI Components
- `Button` - Multiple variants (primary, secondary, outline, ghost)
- `Card` - Variant-based card component
- `Input` - Form input with label and error states

### Layout Components
- `Header` - Sticky navigation with logo and CTA buttons
- `Footer` - Multi-column footer with contact form
- `Container` - Max-width container for content
- `Section` - Page section with background variants

### Shared Components
- `FeatureCard` - Feature showcase card
- `PricingCard` - Pricing tier card with features
- `FAQAccordion` - Expandable FAQ component

## Customization

### Colors
Edit `tailwind.config.ts` to modify the color palette:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#0066FF',
        // ... more colors
      }
    }
  }
}
```

### Content
Update constants in `constants/index.ts` to modify:
- Navigation links
- Pricing tiers
- FAQ items
- Product sections

## License

MIT
