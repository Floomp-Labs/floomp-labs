import { work } from '../data/work'
import { useInView } from '../hooks/useInView'
import { HudCorners } from './HudCorners'
import { SectionCta } from './SectionCta'

function WorkRow({
  item,
  index,
}: {
  item: (typeof work)[number]
  index: number
}) {
  const { ref, isVisible } = useInView<HTMLElement>(0.18)

  return (
    <article
      ref={ref}
      className={`work-item${isVisible ? ' is-visible' : ''}`}
      style={{ transitionDelay: `${Math.min(index, 4) * 70}ms` }}
    >
      <a
        className="work-item__media"
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${item.title}`}
      >
        <HudCorners />
        <div className="work-item__overlay">
          <span>CASE {item.index}</span>
          <span>VIEW LIVE ↗</span>
        </div>
        <img src={item.image} alt={`${item.title} project preview`} loading="lazy" />
        {item.imageMobile ? (
          <img
            className="work-item__mobile"
            src={item.imageMobile}
            alt={`${item.title} mobile preview`}
            loading="lazy"
          />
        ) : null}
      </a>
      <div className="work-item__meta">
        <div className="work-item__top">
          <span>CASE/{item.index}</span>
          <span className="work-item__tag">{item.tag}</span>
        </div>
        <h3 className="work-item__title">{item.title}</h3>
        <p className="work-item__desc">{item.description}</p>

        <dl className="work-item__case">
          <div>
            <dt>Client needed</dt>
            <dd>{item.need}</dd>
          </div>
          <div>
            <dt>What we built</dt>
            <dd>{item.built}</dd>
          </div>
        </dl>

        <ul className="work-item__features">
          {item.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        {item.results ? (
          <p className="work-item__results">
            <span>Result</span> {item.results}
          </p>
        ) : null}

        <div className="work-item__spec">
          <span>{item.stack}</span>
          <span>STATUS · LIVE</span>
        </div>
        <a
          className="work-item__link"
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View live site →
        </a>
      </div>
    </article>
  )
}

export function Work() {
  return (
    <section className="section work" id="work">
      <div className="section__inner">
        <div className="work__header">
          <div>
            <p className="section__label">LAB // Client work</p>
            <h2 className="section__title">Here’s what we can do for your business.</h2>
          </div>
          <p className="section__lede">
            Real builds for service brands, platforms, and growing companies —
            each designed to look sharp, load fast, and turn visitors into
            customers.
          </p>
        </div>
        <div className="work-list">
          {work.map((item, index) => (
            <WorkRow key={item.id} item={item} index={index} />
          ))}
        </div>
        <SectionCta
          title="Want results like these for your business?"
          lede="Get a free quote — we’ll map the right package for your goals."
          secondaryLabel="See packages"
          secondaryHref="#pricing"
        />
      </div>
    </section>
  )
}
