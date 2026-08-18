const faqs = [
  {
    q: 'How much does a Floomp Labs website cost?',
    a: 'Websites start at $499. That covers custom design, a mobile-ready build, conversion paths, and SEO foundations. Larger apps and custom products are quoted after a free consult.',
  },
  {
    q: 'What is AEO, and do you include it?',
    a: 'AEO is Answer Engine Optimization — structuring your site so AI tools (ChatGPT, Perplexity, Google AI Overviews) can cite clear facts about your business. We ship AEO with schema, FAQ content, and speakable summaries alongside classic SEO.',
  },
  {
    q: 'Where is Floomp Labs based?',
    a: 'Philadelphia, Pennsylvania. We work with clients nationwide remotely. Reach us at cc.floomp.meme@gmail.com or 609-227-3903.',
  },
  {
    q: 'Who do you build websites for?',
    a: 'Small and mid-sized businesses — local service brands, growing companies, and digital products. Recent work includes Endless 18, The Viking Equestrian, and JobFinderz.',
  },
  {
    q: 'How do I book a consultation?',
    a: 'Use the consult form on this site, email cc.floomp.meme@gmail.com, or call 609-227-3903. Consultations are free and replies usually arrive within 24 hours.',
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
