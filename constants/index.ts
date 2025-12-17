import { NavLink, PricingTier, FAQItem, StatItem, ProductSection } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Products', href: '/products' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
]

export const FOOTER_LINKS = {
  quickLinks: [
    { label: 'Home', href: '#' },
    { label: 'Products', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'About us', href: '#' }
  ],
}

export const HOME_STATS: StatItem[] = [
  { value: '1000+', label: 'Companies Analysed' },
  { value: '₹ 600 Cr. +', label: 'Limit Recommended' },
  { value: '30+', label: 'Risk Parameters' },
]

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Single',
    price: '₹199',
    description: 'Perfect for small tasks and one-time credit checks',
    features: [
      'Self Search',
      'Early Warning System (Limited)',
    ],
    variant: 'grey',
    ctaText: 'Get Started',
    icon: 'user',
  },
  {
    name: 'Bulk',
    price: '₹50,000',
    description: 'Ideal for teams needing regular credit assessments',
    features: [
      'Self Search',
      'Web Search',
      'Early Warning System (Limited)',
      'Monthly update of all data points',
    ],
    highlighted: true,
    variant: 'blue',
    ctaText: 'Get Started',
    icon: 'users',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Full-featured solution for large organizations',
    features: [
      'Self Search',
      'Web Search',
      'Early Warning System',
      'Monthly update of all data points',
      'Real Export Consultancy',
    ],
    variant: 'pink',
    ctaText: 'Contact Sales',
    icon: 'building',
  },
]

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How secure is my data?',
    answer: 'Your data is encrypted and stored securely using industry-standard protocols.',
  },
  {
    question: 'How secure is my data?',
    answer: 'Your data is encrypted and stored securely using industry-standard protocols.',
  },
  {
    question: 'How secure is my data?',
    answer: 'Your data is encrypted and stored securely using industry-standard protocols.',
  },
  {
    question: 'How secure is my data?',
    answer: 'Your data is encrypted and stored securely using industry-standard protocols.',
  },
  {
    question: 'How secure is my data?',
    answer: 'Your data is encrypted and stored securely using industry-standard protocols.',
  },
  {
    question: 'How secure is my data?',
    answer: 'Your data is encrypted and stored securely using industry-standard protocols.',
  },
]

export const PRODUCT_SECTIONS: ProductSection[] = [
  {
    id: 'risk-assessment',
    title: 'Risk Assessment',
    description: 'Evaluate credit worthiness with automated data collection, fast response and intelligence',
    features: [
      { title: 'Self Data Collection', description: 'Compile information from verified databases quickly', icon: 'database' },
      { title: 'Credit Intelligence', description: 'AI driven insights on credit', icon: 'brain' },
      { title: 'Speed', description: 'Get report within seconds', icon: 'zap' },
      { title: 'Cost', description: 'Affordable pricing structure', icon: 'wallet' },
    ],
  },
  {
    id: 'cred-grawler',
    title: 'Cred Grawler',
    description: 'Deep scan scoring for better credit decisioning for both SME and retail',
    features: [
      { title: 'Deep Scan', description: 'Comprehensive data scan', icon: 'scan-search' },
      { title: 'Speed', description: 'Ultra fast processing', icon: 'zap' },
      { title: 'Toxicity Flags', description: 'Identify potential red flags', icon: 'alert-triangle' },
      { title: 'EWCS', description: 'Early warning credit system', icon: 'bell-ring' },
    ],
  },
  {
    id: 'portfolio-monitoring',
    title: 'Portfolio Monitoring',
    description: 'Real time monitoring of your current portfolio for any flags',
    features: [
      { title: 'MCA Updates', description: 'Ministry of corporate affairs monitoring', icon: 'building' },
      { title: 'Compliance', description: 'Track regulatory compliance', icon: 'shield-check' },
      { title: 'Analytics', description: 'Portfolio performance insights', icon: 'bar-chart-3' },
      { title: 'Deep Search', description: 'Comprehensive portfolio analysis', icon: 'search' },
    ],
  },
  {
    id: 'risk-consultancy',
    title: 'Risk Consultancy',
    description: 'Setup complete credit policy frameworks in-house with ease',
    features: [
      { title: 'Policies & SOPs', description: 'Customized credit policies', icon: 'clipboard-list' },
      { title: 'Scoring Models', description: 'Build credit scoring framework', icon: 'calculator' },
      { title: 'Portfolio Review', description: 'Expert portfolio assessment', icon: 'folder-search' },
      { title: 'Industry Guidance', description: 'Sector specific expertise', icon: 'compass' },
    ],
  },
]
