import { work } from '../data/work'
import { useInView } from '../hooks/useInView'
import { HudCorners } from './HudCorners'

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
          <span>SPECIMEN {item.index}</span>
          <span>OPEN LIVE ↗</span>
        </div>
        <div className="work-item__scanline" aria-hidden="true" />
        <img src={item.image} alt={`${item.title} project preview`} loading="lazy" />
        <div className="work-item__crosshair" aria-hidden="true" />
      </a>
      <div className="work-item__meta">
        <div className="work-item__top">
          <span>CASE/{item.index}</span>
          <span className="work-item__tag">{item.tag}</span>
        </div>
        <h3 className="work-item__title">{item.title}</h3>
        <p className="work-item__desc">{item.description}</p>
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
          Deploy viewer →
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
            <p className="section__label">LAB // Specimen archive</p>
            <h2 className="section__title">Field-tested web systems.</h2>
          </div>
          <p className="section__lede">
            Production builds from the lab — service brands, character worlds, and
            immersive brand systems — each tuned for clarity, motion, and conversion.
          </p>
        </div>
        <div className="work-list">
          {work.map((item, index) => (
            <WorkRow key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
