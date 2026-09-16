import { packages, retainers } from '../data/packages'
import { work } from '../data/work'
import { Consult } from '../components/Consult'
import { Footer } from '../components/Footer'
import { Nav } from '../components/Nav'
import { SectionCta } from '../components/SectionCta'

const landingLinks = [
  { href: '#examples', label: 'Examples' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#benefits', label: 'Benefits' },
  { href: '#faq', label: 'FAQ' },
  { href: '#consult', label: 'Get a Quote', cta: true },
]

const benefits = [
  {
    title: 'Look professional in seconds',
    body: 'A modern site that matches how serious customers expect a business to show up online.',
  },
  {
    title: 'Get found on Google & AI',
    body: 'SEO and AEO foundations so people searching — or asking ChatGPT — can discover you.',
  },
  {
    title: 'Turn visits into calls',
    body: 'Clear contact and booking paths so the site works as a sales tool, not a digital brochure.',
  },
  {
    title: 'Packages you can understand',
    body: 'Starter from $499, Growth and Pro when you need more SEO, AEO, and conversion power.',
  },
]

const faqs = [
  {
    q: 'How much does a small-business website cost?',
    a: 'Starter sites begin at $499. Growth is $1,499. Pro starts at $2,499+. We’ll recommend the right fit on your free quote.',
  },
  {
    q: 'Do you include SEO?',
    a: 'Growth and Pro include SEO foundations. Pro adds AEO for AI answer engines. Monthly SEO + AEO retainers are also available.',
  },
  {
    q: 'How fast can we launch?',
    a: 'Many Starter and Growth builds launch in days to a few weeks depending on content readiness. We’ll set a clear timeline on the quote.',
  },
  {
    q: 'Who is this for?',
    a: 'Local and service businesses, growing brands, and owners who need a site that looks sharp, loads fast, and brings in customers.',
  },
]

const showcase = work.filter((item) =>
  ['endless18', 'viking-equestrian', 'jobfinderz', 'agentify'].includes(item.id),
)

export function WebDesignPage() {
  return (
    <>
      <Nav brandHref="/" links={landingLinks} meta="Web Design for Businesses" />
      <main id="main" className="landing">
        <header className="landing-hero" id="top">
          <div className="landing-hero__inner">
            <p className="section__label">Professional websites for small businesses</p>
            <h1>
              Get a fast, modern website that helps customers find and contact you.
            </h1>
            <p className="landing-hero__lede">
              Floomp Labs builds conversion-ready sites with SEO and AEO —
              starting at $499. Free quote. Clear packages. No jargon maze.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#consult">
                Get a Free Quote
              </a>
              <a className="btn btn--ghost" href="#examples">
                See Examples
              </a>
            </div>
            <p className="landing-hero__proof">
              Web Design · SEO · AEO · Philadelphia · remote nationwide
            </p>
          </div>
        </header>

        <section className="section" id="examples">
          <div className="section__inner">
            <p className="section__label">Examples</p>
            <h2 className="section__title">Sites built to win customers.</h2>
            <p className="section__lede">
              Real projects for service businesses and growing brands — each with
              clear offers and conversion paths.
            </p>
            <div className="landing-examples">
              {showcase.map((item) => (
                <a
                  key={item.id}
                  className="landing-example"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={item.image} alt={`${item.title} preview`} loading="lazy" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </a>
              ))}
            </div>
            <SectionCta
              title="Want a site like these?"
              lede="Get a free quote tailored to your business."
            />
          </div>
        </section>

        <section className="section" id="pricing">
          <div className="section__inner">
            <p className="section__label">Pricing</p>
            <h2 className="section__title">Packages starting at $499.</h2>
            <div className="pricing__grid">
              {packages.map((pkg) => (
                <article
                  key={pkg.id}
                  className={`pricing-card${pkg.featured ? ' is-featured' : ''}`}
                >
                  {pkg.featured ? (
                    <span className="pricing-card__badge">Popular</span>
                  ) : null}
                  <h3>{pkg.name}</h3>
                  <p className="pricing-card__price">{pkg.price}</p>
                  <p className="pricing-card__blurb">{pkg.blurb}</p>
                  <ul>
                    {pkg.includes.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                  <a className="btn btn--ink" href="#consult">
                    Get a Free Quote
                  </a>
                </article>
              ))}
            </div>
            <div className="pricing__retainer">
              {retainers.map((item) => (
                <div key={item.id} className="pricing__retainer-card">
                  <div>
                    <p className="pricing__retainer-label">Ongoing</p>
                    <h3>{item.name}</h3>
                    <p className="pricing-card__price">{item.price}</p>
                    <p>{item.blurb}</p>
                  </div>
                  <a className="btn btn--ghost" href="#consult">
                    Ask about retainers
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="benefits">
          <div className="section__inner">
            <p className="section__label">Benefits</p>
            <h2 className="section__title">Why businesses hire Floomp.</h2>
            <div className="seo__pillars">
              {benefits.map((item) => (
                <article key={item.title} className="seo__pillar">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
            <SectionCta title="Get Your Free Website Audit" />
          </div>
        </section>

        <section className="section" id="faq">
          <div className="section__inner">
            <p className="section__label">FAQ</p>
            <h2 className="section__title">Quick answers.</h2>
            <div className="landing-faq">
              {faqs.map((item) => (
                <details key={item.q} className="landing-faq__item">
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
            <SectionCta
              title="Still have questions?"
              lede="Ask anything on your free quote request — we’ll answer plainly."
            />
          </div>
        </section>

        <Consult
          title="Get a Free Quote for Your Business Website"
          lede="Tell us what you sell and where you want more customers. We’ll recommend Starter, Growth, or Pro."
        />
      </main>
      <Footer />
    </>
  )
}
