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
    code: 'LOCAL',
    title: 'Local & rankings',
    body: 'Google Business alignment, location pages, and conversion paths built so visibility turns into calls and bookings.',
  },
  {
    code: 'TRACK',
    title: 'Measure & iterate',
    body: 'Search Console setup guidance, ranking checkpoints, and a clear plan to improve what the lab ships next.',
  },
]

export function Seo() {
  return (
    <section className="section seo" id="seo" aria-labelledby="seo-title">
      <div className="section__inner">
        <div className="seo__intro">
          <p className="section__label">LAB // Search systems</p>
          <h2 className="section__title" id="seo-title">
            Built to rank. Tuned to convert.
          </h2>
          <p className="section__lede">
            A beautiful site that nobody finds is unfinished. Every Floomp Labs
            build ships with SEO foundations aimed at Google visibility — not
            vanity scores, real discovery.
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
            <span>GOOGLE · INDEX · GROW</span>
          </div>
          <ul className="seo__checklist">
            <li>Keyword-informed page architecture for your market</li>
            <li>Schema-ready business markup where it matters</li>
            <li>Core Web Vitals–minded performance budgets</li>
            <li>Indexation checklist before and after launch</li>
            <li>Optional ongoing ranking reviews after deploy</li>
          </ul>
          <a className="btn btn--ghost" href="#consult">
            <span className="btn__glyph" aria-hidden="true" />
            Ask about SEO in consult
          </a>
        </div>
      </div>
    </section>
  )
}
