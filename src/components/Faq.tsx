const faqs = [
  {
    q: 'How much does a Floomp Labs website cost?',
    a: 'Starter websites begin at $499. Growth is $1,499. Pro starts at $2,499+. SEO + AEO growth retainers run $999–$1,999/mo. Free quotes recommend the right package.',
  },
  {
    q: 'What is AEO, and do you include it?',
    a: 'AEO is Answer Engine Optimization — structuring your site so AI tools (ChatGPT, Perplexity, Google AI Overviews) can cite clear facts about your business. Growth includes SEO foundations; Pro adds full AEO alongside classic SEO.',
  },
  {
    q: 'Where is Floomp Labs based?',
    a: 'Philadelphia, Pennsylvania. We work with clients nationwide remotely. Reach us at cc.floomp.meme@gmail.com or 609-227-3903.',
  },
  {
    q: 'Who do you build websites for?',
    a: 'Small and mid-sized businesses — local service brands, growing companies, and digital products. Recent work includes Endless 18, The Viking Equestrian, JobFinderz, and Agentify.',
  },
  {
    q: 'How do I get a free quote?',
    a: 'Use the quote form on this site, email cc.floomp.meme@gmail.com, or call 609-227-3903. Quotes are free and replies usually arrive within 24 hours.',
  },
]

const aeoHide = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
  pointerEvents: 'none',
} as const

/** Visually hidden — kept in the DOM for SEO/AEO parsers and schema alignment. */
export function Faq() {
  return (
    <section
      className="faq faq--aeo"
      id="faq"
      aria-labelledby="faq-title"
      style={aeoHide}
    >
      <h2 id="faq-title">Floomp Labs FAQ</h2>
      <div className="faq__list">
        {faqs.map((item) => (
          <article key={item.q} className="faq__item">
            <h3 className="faq__question">{item.q}</h3>
            <p className="faq__answer">{item.a}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
