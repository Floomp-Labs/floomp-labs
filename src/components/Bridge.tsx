const steps = [
  {
    index: '01',
    code: 'INTAKE',
    title: 'Signal capture',
    body: 'Brand, audience, offer, and search intent get locked before layouts ship.',
  },
  {
    index: '02',
    code: 'SYNTH',
    title: 'Interface + SEO synth',
    body: 'Custom UI systems with crawl-friendly structure, titles, and page hierarchy.',
  },
  {
    index: '03',
    code: 'DEPLOY',
    title: 'Rank & convert',
    body: 'Fast launch with conversion paths plus SEO foundations aimed at Google.',
  },
]

export function Bridge() {
  return (
    <section className="section bridge" id="approach">
      <div className="section__inner">
        <div className="bridge__intro">
          <p className="section__label">LAB // Build protocol</p>
          <h2 className="section__title">
            Product-grade process. Business-ready output.
          </h2>
          <p className="section__lede">
            Same rigor we use for digital products — applied to small and mid-sized
            businesses that need a site that works like software.
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
      </div>
    </section>
  )
}
