import { SectionCta } from './SectionCta'

const steps = [
  {
    index: '01',
    code: 'PLAN',
    title: 'Learn your business',
    body: 'We start with who you serve, what you sell, and what you want the site to do — get calls, bookings, or sales.',
  },
  {
    index: '02',
    code: 'DESIGN',
    title: 'Design & build',
    body: 'We create a custom look, write clear pages, and build a fast mobile-ready site with SEO and AEO baked in.',
  },
  {
    index: '03',
    code: 'LAUNCH',
    title: 'Launch & grow',
    body: 'We go live, connect your contact or booking paths, and leave you with a site that’s ready to rank and convert.',
  },
]

export function Bridge() {
  return (
    <section className="section bridge" id="approach">
      <div className="bridge__media" aria-hidden="true">
        <img src="/bridge-lab.jpg" alt="" width={1600} height={900} loading="lazy" />
        <div className="bridge__veil" />
      </div>

      <div className="section__inner bridge__content">
        <div className="bridge__intro">
          <p className="section__label">LAB // How we work</p>
          <h2 className="section__title">
            A simple process. A serious result.
          </h2>
          <p className="section__lede">
            No jargon maze. Three steps from first call to a live site that looks
            sharp, loads fast, and helps customers find and contact you.
          </p>
        </div>

        <ol className="protocol">
          {steps.map((step) => (
            <li key={step.index} className="protocol__step">
              <div className="protocol__rail" aria-hidden="true">
                <span className="protocol__node" />
              </div>
              <div className="protocol__card">
                <div className="protocol__meta">
                  <span>{step.index}</span>
                  <span>{step.code}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <SectionCta
          title="Let’s map your build"
          lede="Free quote. Clear timeline. Packages from $499."
        />
      </div>
    </section>
  )
}
