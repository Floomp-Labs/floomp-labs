import { packages, retainers } from '../data/packages'
import { SectionCta } from './SectionCta'

export function Pricing() {
  return (
    <section className="section pricing" id="pricing">
      <div className="section__inner">
        <div className="pricing__header">
          <p className="section__label">LAB // Packages</p>
          <h2 className="section__title">Clear packages. No guessing.</h2>
          <p className="section__lede">
            $499 is the entry point — not the whole story. Pick the build that
            matches where your business is now, then grow with SEO + AEO when
            you’re ready.
          </p>
        </div>

        <div className="pricing__grid">
          {packages.map((pkg) => (
            <article
              key={pkg.id}
              className={`pricing-card${pkg.featured ? ' is-featured' : ''}`}
            >
              {pkg.featured ? <span className="pricing-card__badge">Popular</span> : null}
              <h3>{pkg.name}</h3>
              <p className="pricing-card__price">{pkg.price}</p>
              <p className="pricing-card__blurb">{pkg.blurb}</p>
              <ul>
                {pkg.includes.map((item) => (
                  <li key={item}>{item}</li>
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
              <ul>
                {item.includes.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <a className="btn btn--ghost" href="#consult">
                Ask about retainers
              </a>
            </div>
          ))}
        </div>

        <SectionCta
          title="Not sure which package fits?"
          lede="Tell us what you need — we’ll recommend Starter, Growth, or Pro."
          primaryLabel="Get Your Free Website Audit"
        />
      </div>
    </section>
  )
}
