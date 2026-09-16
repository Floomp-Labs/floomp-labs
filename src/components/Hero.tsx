import { useEffect, useRef, useState } from 'react'

export function Hero() {
  const [imageReady, setImageReady] = useState(false)
  const [booted, setBooted] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const img = imgRef.current
    if (img?.complete && img.naturalWidth > 0) setImageReady(true)
  }, [])

  useEffect(() => {
    const id = window.setTimeout(() => setBooted(true), 80)
    return () => window.clearTimeout(id)
  }, [])

  return (
    <header className={`hero${booted ? ' is-booted' : ''}`} id="top">
      <div className="hero__media" aria-hidden="true">
        <img
          ref={imgRef}
          src="/hero-future.jpg"
          alt=""
          width={1600}
          height={900}
          fetchPriority="high"
          decoding="async"
          className={imageReady ? 'is-ready' : undefined}
          onLoad={() => setImageReady(true)}
        />
        <div className="hero__veil" />
      </div>

      <div className="hero__stage">
        <div className="hero__content">
          <p className="hero__status hero__reveal" style={{ ['--d' as string]: '0' }}>
            <span className="hero__status-dot" />
            Web Design · SEO · AEO
          </p>
          <h1 className="hero__brand hero__reveal" style={{ ['--d' as string]: '1' }}>
            Floomp
            <span>Labs</span>
          </h1>
          <p className="hero__headline hero__reveal" style={{ ['--d' as string]: '2' }}>
            We build fast, modern websites that help businesses get found and
            generate customers.
          </p>
          <p className="hero__support hero__reveal" style={{ ['--d' as string]: '3' }}>
            Web Design · SEO · AEO — websites starting at $499. Free quote. Clear
            packages. Built to rank and convert.
          </p>
          <div className="hero__actions hero__reveal" style={{ ['--d' as string]: '4' }}>
            <a className="btn btn--primary" href="#work">
              View Our Work
            </a>
            <a className="btn btn--ghost" href="#consult">
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
