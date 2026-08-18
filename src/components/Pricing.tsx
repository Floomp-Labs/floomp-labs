import { HudCorners } from './HudCorners'

export function Pricing() {
  return (
    <section className="section pricing" id="pricing">
      <div className="section__inner">
        <p className="section__label">LAB // Cost matrix</p>
        <div className="pricing__panel">
          <HudCorners />
          <div>
            <h2 className="section__title">
              Lab-grade builds. Accessible entry point.
            </h2>
            <p className="pricing__amount">
              $499<span>FROM</span>
            </p>
            <p className="pricing__note">
              Launch kits for local businesses, service brands, and growing
              companies that need a high-performance presence with SEO
              foundations — without the enterprise invoice.
            </p>
          </div>
          <div className="pricing__aside">
            <div className="pricing__readout" aria-hidden="true">
              <span>PKG</span>
              <span>STARTER.WEB</span>
            </div>
            <ul className="pricing__list">
              <li>Custom visual system + layout</li>
              <li>SEO foundations for Google rankings</li>
              <li>Mobile-first, performance-tuned build</li>
              <li>Contact / booking conversion paths</li>
              <li>Upgrade path into apps & richer products</li>
            </ul>
            <a className="btn btn--ink" href="#consult">
              <span className="btn__glyph" aria-hidden="true" />
              Consult
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
