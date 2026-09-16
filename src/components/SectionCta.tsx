export function SectionCta({
  title = 'Ready for a site that brings in customers?',
  lede = 'Tell us about your business — we’ll reply with a clear quote and next steps.',
  primaryHref = '#consult',
  primaryLabel = 'Get a Free Quote',
  secondaryHref = '#work',
  secondaryLabel,
}: {
  title?: string
  lede?: string
  primaryHref?: string
  primaryLabel?: string
  secondaryHref?: string
  secondaryLabel?: string
}) {
  return (
    <div className="section-cta">
      <div className="section-cta__copy">
        <h3>{title}</h3>
        <p>{lede}</p>
      </div>
      <div className="section-cta__actions">
        <a className="btn btn--primary" href={primaryHref}>
          {primaryLabel}
        </a>
        {secondaryLabel ? (
          <a className="btn btn--ghost" href={secondaryHref}>
            {secondaryLabel}
          </a>
        ) : null}
      </div>
    </div>
  )
}
