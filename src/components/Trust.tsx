import { trustStats } from '../data/testimonials'
import { SectionCta } from './SectionCta'

export function Trust() {
  return (
    <section className="section trust" id="trust">
      <div className="section__inner">
        <div className="trust__header">
          <p className="section__label">LAB // Proof</p>
          <h2 className="section__title">Built for businesses that need customers — not just a pretty page.</h2>
          <p className="section__lede">
            Philadelphia-based. Remote nationwide. Clear contact. Real shipping
            record. Here’s why owners hire Floomp.
          </p>
        </div>

        <div className="trust__stats">
          {trustStats.map((stat) => (
            <div key={stat.label} className="trust__stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="trust__contact">
          <p>
            <a href="mailto:cc.floomp.meme@gmail.com">cc.floomp.meme@gmail.com</a>
            <span aria-hidden="true"> · </span>
            <a href="tel:6092273903">609-227-3903</a>
            <span aria-hidden="true"> · </span>
            Philadelphia · remote nationwide
          </p>
        </div>

        <SectionCta
          title="Get Your Free Website Audit"
          lede="We’ll review your current site (or lack of one) and tell you what would move the needle."
          primaryLabel="Get a Free Quote"
        />
      </div>
    </section>
  )
}
