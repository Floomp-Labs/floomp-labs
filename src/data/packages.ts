export type Package = {
  id: string
  name: string
  price: string
  priceNote?: string
  blurb: string
  includes: string[]
  featured?: boolean
}

export const packages: Package[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$499',
    blurb: 'Simple business website — a sharp, fast presence that gets you online and easy to contact.',
    includes: [
      'Custom 3–5 page site',
      'Mobile-ready layout',
      'Contact / inquiry path',
      'Basic SEO setup',
      'Launch & handoff',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '$1,499',
    featured: true,
    blurb: 'Custom website + SEO foundation — built to look sharp and start ranking.',
    includes: [
      'Everything in Starter',
      'Custom visual system',
      'SEO page architecture',
      'On-page SEO + schema',
      'Performance tuning',
      'Booking or lead paths',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$2,499+',
    blurb: 'Advanced website + SEO + AEO — for businesses that want to win search and AI answers.',
    includes: [
      'Everything in Growth',
      'AEO for AI answer engines',
      'FAQ / speakable content',
      'Local SEO alignment',
      'Conversion-focused copy',
      'Priority build timeline',
    ],
  },
]

export const retainers = [
  {
    id: 'seo-aeo',
    name: 'SEO + AEO Growth',
    price: '$999–$1,999/mo',
    blurb:
      'Ongoing optimization so Google finds you, AI understands you, and customers keep finding you.',
    includes: [
      'Keyword & content updates',
      'Technical SEO monitoring',
      'AI / answer-engine tuning',
      'Monthly performance report',
    ],
  },
]
