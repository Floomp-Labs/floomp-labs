import { useTelemetry } from '../hooks/useTelemetry'
import { HudCorners } from './HudCorners'

export function Hero() {
  const { stamp, coords, load } = useTelemetry()

  return (
    <header className="hero" id="top">
      <div className="hero__media" aria-hidden="true">
        <img
          src="/logo2.jpg"
          alt=""
          width={1600}
          height={900}
          fetchPriority="high"
        />
        <div className="hero__veil" />
        <div className="hero__scan" />
        <div className="hero__beam" />
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
      </div>

      <div className="hero__stage">
        <HudCorners />
        <div className="hero__content">
          <p className="hero__status">
            <span className="hero__status-dot" />
            <span className="hero__status-full">Lab online · Design systems calibrated</span>
            <span className="hero__status-short">Lab online</span>
          </p>
          <h1 className="hero__brand">
            Floomp
            <span>Labs</span>
          </h1>
          <p className="hero__headline">
            A high-tech lab for websites that perform under pressure.
          </p>
          <p className="hero__support">
            We synthesize brand, interface, SEO, and conversion into
            production-grade web systems for small and mid-sized businesses.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#consult">
              <span className="btn__glyph" aria-hidden="true" />
              Book a free consultation
            </a>
            <a className="btn btn--ghost" href="#pricing">
              Sites from $499
            </a>
          </div>
        </div>

        <aside className="hero__console" aria-hidden="true">
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
              <span>SEO foundation</span>
              <b>INDEXED</b>
            </li>
            <li>
              <span>Google signal</span>
              <b>TUNED</b>
            </li>
            <li>
              <span>Entry package</span>
              <b>$499+</b>
            </li>
          </ul>
          <div className="hero__console-bars">
            <i style={{ width: '86%' }} />
            <i style={{ width: '72%' }} />
            <i style={{ width: '94%' }} />
          </div>
        </aside>
      </div>
    </header>
  )
}
