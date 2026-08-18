import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { useHeroPointer, useMotionOk } from '../hooks/useHeroPointer'
import { useTelemetry } from '../hooks/useTelemetry'
import { HudCorners } from './HudCorners'

const STATUS_LINES = [
  'Lab online · systems calibrated',
  'Tracking intent · conversion armed',
  'SEO + AEO · ready to ship',
]

export function Hero() {
  const { stamp, coords, load } = useTelemetry()
  const motionOk = useMotionOk()
  const pointer = useHeroPointer(motionOk)
  const [imageReady, setImageReady] = useState(false)
  const [statusIndex, setStatusIndex] = useState(0)
  const [booted, setBooted] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const img = imgRef.current
    if (img?.complete && img.naturalWidth > 0) setImageReady(true)
  }, [])

  useEffect(() => {
    const id = window.setTimeout(() => setBooted(true), 80)
    return () => window.clearTimeout(id)
  }, [])

  useEffect(() => {
    if (!motionOk) return
    const id = window.setInterval(() => {
      setStatusIndex((i) => (i + 1) % STATUS_LINES.length)
    }, 3200)
    return () => window.clearInterval(id)
  }, [motionOk])

  const px = (pointer.x - 0.5) * 2
  const py = (pointer.y - 0.5) * 2
  const focus = Math.round(54 + pointer.x * 42)
  const signal = Math.round(61 + pointer.y * 36)

  const mediaStyle = {
    '--mx': String(px),
    '--my': String(py),
    '--spot-x': `${pointer.x * 100}%`,
    '--spot-y': `${pointer.y * 100}%`,
  } as CSSProperties

  const stageStyle = motionOk
    ? {
        transform: `perspective(1200px) rotateX(${(-py * 4).toFixed(2)}deg) rotateY(${(px * 5).toFixed(2)}deg) translate3d(${(px * -8).toFixed(1)}px, ${(py * -6).toFixed(1)}px, 0)`,
      }
    : undefined

  return (
    <header
      ref={heroRef}
      className={`hero${booted ? ' is-booted' : ''}${motionOk ? ' is-interactive' : ''}`}
      id="top"
      style={mediaStyle}
    >
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
        <div className="hero__grid" />
        <div className="hero__spotlight" />
        <div className="hero__scan" />
        <div className="hero__beam" />
        <div className="hero__reticle">
          <span />
          <span />
        </div>
      </div>

      <div className="hero__rail hero__rail--left" aria-hidden="true">
        <span>CH-01</span>
        <span>OPTICS</span>
        <span>RENDER</span>
        <span>SHIP</span>
      </div>
      <div className="hero__rail hero__rail--right" aria-hidden="true">
        <span>{coords}</span>
        <span>LOAD {load}%</span>
        <span>UTC {stamp}</span>
        <span>
          PTR {(pointer.x * 100).toFixed(0)},{(pointer.y * 100).toFixed(0)}
        </span>
      </div>

      <div className="hero__stage" style={stageStyle}>
        <HudCorners />
        <div className="hero__content">
          <p className="hero__status hero__reveal" style={{ ['--d' as string]: '0' }}>
            <span className="hero__status-dot" />
            <span className="hero__status-full" key={statusIndex}>
              {STATUS_LINES[statusIndex]}
            </span>
            <span className="hero__status-short">Lab online</span>
          </p>
          <h1 className="hero__brand hero__reveal" style={{ ['--d' as string]: '1' }}>
            Floomp
            <span>Labs</span>
          </h1>
          <p className="hero__headline hero__reveal" style={{ ['--d' as string]: '2' }}>
            Look sharp online. Convert offline.
          </p>
          <p className="hero__support hero__reveal" style={{ ['--d' as string]: '3' }}>
            We build sharp, fast sites that get you found — on Google and AI
            search — and turn visitors into calls and customers. Starting at
            $499. Let’s map yours in a free consult.
          </p>
          <div className="hero__actions hero__reveal" style={{ ['--d' as string]: '4' }}>
            <a className="btn btn--primary btn--magnet" href="#consult">
              <span className="btn__glyph" aria-hidden="true" />
              Book a free consultation
            </a>
            <a className="btn btn--ghost btn--magnet" href="#pricing">
              Sites from $499
            </a>
          </div>
        </div>

        <aside className="hero__console hero__reveal" style={{ ['--d' as string]: '5' }}>
          <div className="hero__console-head">
            <span>ANALYSIS.PANEL</span>
            <span className="hero__console-live">LIVE</span>
          </div>
          <ul className="hero__console-list">
            <li>
              <span>Brand lock</span>
              <b>OK</b>
            </li>
            <li>
              <span>Focus map</span>
              <b>{focus}%</b>
            </li>
            <li>
              <span>Signal strength</span>
              <b>{signal}%</b>
            </li>
            <li>
              <span>Entry package</span>
              <b>$499+</b>
            </li>
          </ul>
          <div className="hero__console-bars">
            <i style={{ width: `${focus}%` }} />
            <i style={{ width: `${Math.max(48, 100 - signal / 2)}%` }} />
            <i style={{ width: `${signal}%` }} />
          </div>
          <p className="hero__console-hint">Move to calibrate targeting</p>
        </aside>
      </div>
    </header>
  )
}
