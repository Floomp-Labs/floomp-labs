import { SectionCta } from './SectionCta'

const pillars = [
  {
    title: 'Google finds you',
    body: 'We structure your site so search engines can crawl it, understand it, and rank the pages that matter for your customers.',
  },
  {
    title: 'AI understands you',
    body: 'We add clear answers, schema, and facts so ChatGPT, Perplexity, and AI Overviews can cite your business accurately.',
  },
  {
    title: 'Customers find you',
    body: 'Visibility only matters if it turns into calls and bookings. We build contact paths that convert the traffic you earn.',
  },
]

const actions = [
  'Keyword-informed page structure for your market',
  'Titles, headings, and copy shaped around real searches',
  'Fast loads and mobile-ready performance',
  'Schema + FAQ so AI tools can quote you correctly',
  'Local clarity for Google Business–aligned businesses',
  'Optional monthly SEO + AEO growth retainers',
]

export function Seo() {
  return (
    <section className="section seo" id="seo" aria-labelledby="seo-title">
      <div className="section__inner">
        <div className="seo__intro">
          <p className="section__label">LAB // SEO + AEO</p>
          <h2 className="section__title" id="seo-title">
            Google finds you. AI understands you. Customers find you.
          </h2>
          <p className="section__lede">
            This is how Floomp is different from a typical web designer: every
            Growth and Pro build is set up to get found — on Google and in AI
            answers — then turn that attention into customers.
          </p>
        </div>

        <div className="seo__pillars">
          {pillars.map((item) => (
            <article key={item.title} className="seo__pillar">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>

        <div className="seo__panel">
          <div className="seo__panel-head">
            <span>What we actually do</span>
            <span>No jargon maze</span>
          </div>
          <ul className="seo__checklist">
            {actions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a className="btn btn--ghost" href="#consult">
            Get a Free Quote
          </a>
        </div>

        <SectionCta
          title="Want to show up where customers are searching?"
          lede="Ask about Growth, Pro, or a monthly SEO + AEO retainer."
        />
      </div>
    </section>
  )
}
