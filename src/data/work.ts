export type WorkItem = {
  id: string
  index: string
  title: string
  tag: string
  description: string
  need: string
  built: string
  features: string[]
  results?: string
  image: string
  imageMobile?: string
  link: string
  stack: string
}

export const work: WorkItem[] = [
  {
    id: 'endless18',
    index: '01',
    title: 'Endless 18',
    tag: 'SMB · Service',
    description:
      'Indoor golf simulator site for Lawrenceville, NJ — booking paths, pricing, and memberships.',
    need: 'A local golf simulator needed a site that explains the experience, shows pricing, and drives bookings — not just a brochure page.',
    built: 'A fast, mobile-ready marketing site with clear service pages, membership options, and conversion-focused contact paths.',
    features: [
      'Booking-oriented page flow',
      'Pricing & membership clarity',
      'Local SEO foundations',
      'Mobile-first layout',
    ],
    results: 'Live site ready for local search and direct booking inquiries.',
    image: '/work/endless18.png',
    link: 'https://endless18.vercel.app/',
    stack: 'Custom web · Local SEO · Conversion',
  },
  {
    id: 'viking-equestrian',
    index: '02',
    title: 'The Viking Equestrian',
    tag: 'SMB · Service',
    description:
      'High-end equestrian training site with programs, horse sales, and a conversion-first booking path.',
    need: 'A premium equestrian brand needed a polished site that sells training programs and horse sales with an easy way to inquire.',
    built: 'A custom brand site with program storytelling, sales pathways, and a conversion-first contact/booking flow.',
    features: [
      'Custom brand system',
      'Program & sales pages',
      'Inquiry conversion paths',
      'Performance-tuned build',
    ],
    results: 'Positioned as a high-end service brand with clear next steps for clients.',
    image: '/work/viking.png',
    link: 'https://thevikingequestrian.com/',
    stack: 'Custom web · Brand · Conversion',
  },
  {
    id: 'jobfinderz',
    index: '03',
    title: 'JobFinderz',
    tag: 'SMB · Platform',
    description:
      'Career services platform for interview prep, resume rewriting, and job-search strategy.',
    need: 'A career services business needed a product-style site that explains offerings and captures qualified leads.',
    built: 'A React marketing + product UI that showcases interview prep, resume rewriting, and strategy services with lead gen.',
    features: [
      'Service packaging clarity',
      'Lead-gen oriented CTAs',
      'Product-style UI',
      'SEO-ready structure',
    ],
    results: 'Clear offer hierarchy that turns visitors into consultation requests.',
    image: '/work/jobfinderz.png',
    link: 'https://jobfinderz.com/',
    stack: 'React · Product UI · Lead gen',
  },
  {
    id: 'agentify',
    index: '04',
    title: 'Agentify',
    tag: 'B2B · Agents',
    description:
      'Agent infrastructure for small businesses — support, scheduling, invoicing, and lead follow-up under a retainer model.',
    need: 'A B2B agent platform needed a marketing site that explains retainers, use cases, pricing, and trust without jargon overload.',
    built: 'A conversion-focused product marketing site with modules, pricing tiers, FAQ, and clear partnership CTAs.',
    features: [
      'Use-case modules',
      'Enterprise pricing clarity',
      'FAQ for sales objections',
      'Retainer-focused CTAs',
    ],
    results: 'Prospects can self-qualify and request a retainer conversation quickly.',
    image: '/work/agentify.png',
    link: 'https://agentify-six.vercel.app/',
    stack: 'Product marketing · SaaS · Conversion',
  },
  {
    id: 'floompworld',
    index: '05',
    title: "Floomp's World",
    tag: 'Interactive · IP',
    description:
      'Kawaii story world with character systems, comics, and an open-world play layer.',
    need: 'An IP brand needed an immersive web experience that feels like a world — not a static landing page.',
    built: 'An interactive Next.js experience with character systems, comics, and exploratory play layers.',
    features: [
      'Interactive world UX',
      'Character systems',
      'Narrative content layers',
      '3D / motion presence',
    ],
    image: '/work/floompworld.png',
    link: 'https://floompworld.vercel.app/',
    stack: 'Next · 3D · Narrative UX',
  },
  {
    id: 'floompy',
    index: '06',
    title: 'Floompy',
    tag: 'Brand · Character',
    description:
      'Edgy kawaii brand site for a Tokyo night mascot — sharp motion, personality, and link-ups.',
    need: 'A character brand needed a site with personality, motion, and clear link destinations for fans and partners.',
    built: 'A motion-forward brand site that locks the mascot identity and routes traffic to the right destinations.',
    features: [
      'Strong brand lock',
      'Motion & personality',
      'Link hub structure',
      'Mobile-ready presence',
    ],
    image: '/work/floompy.png',
    link: 'https://floompy.vercel.app/',
    stack: 'Brand system · Motion · Web',
  },
  {
    id: 'mana',
    index: '07',
    title: '$MANA',
    tag: 'Brand · Web3',
    description:
      'Immersive occult brand experience — card readings, seal crafting, vault entry, and merch.',
    need: 'A Web3 brand needed an immersive site that feels like a ritual — readings, seals, vault, and merch in one world.',
    built: 'A full immersive brand experience with interactive ritual flows and commerce touchpoints.',
    features: [
      'Immersive brand world',
      'Interactive ritual flows',
      'Commerce pathways',
      'High-impact visual system',
    ],
    image: '/work/mana.png',
    link: 'https://www.mana-rh.site/',
    stack: 'Immersive UI · Brand · Commerce',
  },
]
