const signals = [
  {
    code: 'TECH',
    title: 'Technical SEO',
    body: 'Clean structure, fast loads, mobile readiness, sitemap + robots, and crawl-friendly markup Google can actually index.',
  },
  {
    code: 'ONPAGE',
    title: 'On-page signal',
    body: 'Title tags, meta descriptions, heading hierarchy, internal links, and copy shaped around what your customers search.',
  },
  {
    code: 'AEO',
    title: 'Answer engines',
    body: 'Schema, FAQ blocks, and speakable facts so ChatGPT, Perplexity, and AI Overviews can cite your business accurately.',
  },
  {
    code: 'LOCAL',
    title: 'Local & rankings',
    body: 'Google Business alignment, location clarity, and conversion paths built so visibility turns into calls and bookings.',
  },
]

export function Seo() {
  return (
    <section className="section seo" id="seo" aria-labelledby="seo-title">
      <div className="section__inner">
        <div className="seo__intro">
          <p className="section__label">LAB // Search + answer systems</p>
          <h2 className="section__title" id="seo-title">
            SEO for Google. AEO for AI.
          </h2>
          <p className="section__lede">
            Rank where people search — and show up where they ask. Every Floomp
            Labs build ships with SEO and answer-engine optimization so you get
            found on Google and AI tools.
          </p>
        </div>

        <div className="seo__grid">
          {signals.map((item) => (
            <article key={item.code} className="seo__card">
              <div className="seo__meta">
                <span>MOD/{item.code}</span>
                <span>ACTIVE</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>

        <div className="seo__panel">
          <div className="seo__panel-head">
            <span>RANK.PROTOCOL</span>
            <span>GOOGLE · AI · GROW</span>
          </div>
          <ul className="seo__checklist">
            <li>Keyword-informed page architecture for your market</li>
            <li>Schema + FAQ markup AI engines can parse</li>
            <li>Core Web Vitals–minded performance budgets</li>
            <li>llms.txt + crawl rules for modern answer bots</li>
            <li>Optional ongoing ranking and citation reviews</li>
          </ul>
          <a className="btn btn--ghost" href="#consult">
            <span className="btn__glyph" aria-hidden="true" />
            Ask about SEO &amp; AEO
          </a>
        </div>
      </div>
    </section>
  )
}
