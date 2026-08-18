export type WorkItem = {
  id: string
  index: string
  title: string
  tag: string
  description: string
  image: string
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
    image: '/work/jobfinderz.png',
    link: 'https://jobfinderz.com/',
    stack: 'React · Product UI · Lead gen',
  },
  {
    id: 'floompworld',
    index: '04',
    title: "Floomp's World",
    tag: 'Interactive · IP',
    description:
      'Kawaii story world with character systems, comics, and an open-world play layer.',
    image: '/work/floompworld.png',
    link: 'https://floompworld.vercel.app/',
    stack: 'Next · 3D · Narrative UX',
  },
  {
    id: 'floompy',
    index: '05',
    title: 'Floompy',
    tag: 'Brand · Character',
    description:
      'Edgy kawaii brand site for a Tokyo night mascot — sharp motion, personality, and link-ups.',
    image: '/work/floompy.png',
    link: 'https://floompy.vercel.app/',
    stack: 'Brand system · Motion · Web',
  },
  {
    id: 'mana',
    index: '06',
    title: '$MANA',
    tag: 'Brand · Web3',
    description:
      'Immersive occult brand experience — card readings, seal crafting, vault entry, and merch.',
    image: '/work/mana.png',
    link: 'https://mana-brown.vercel.app/',
    stack: 'Immersive UI · Brand · Commerce',
  },
]
