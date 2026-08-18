import { useEffect, useState } from 'react'
import { useTelemetry } from '../hooks/useTelemetry'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#seo', label: 'SEO' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#consult', label: 'Consult', cta: true },
]

export function Nav() {
  const { stamp, load } = useTelemetry()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  function close() {
    setOpen(false)
  }

  return (
    <nav className={`site-nav${open ? ' is-open' : ''}`} aria-label="Primary">
      <div className="site-nav__left">
        <a className="site-nav__brand" href="#top" onClick={close}>
          <span className="site-nav__mark" aria-hidden="true" />
          FLMP://LABS
        </a>
        <span className="site-nav__meta">WEB DESIGN LAB · v2.4</span>
      </div>

      <div className="site-nav__links site-nav__links--desktop">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={link.cta ? 'site-nav__cta' : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="site-nav__telemetry" aria-hidden="true">
        <span>UTC {stamp}</span>
        <span>CPU {load}%</span>
      </div>

      <button
        type="button"
        className="site-nav__burger"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        id="mobile-menu"
        className={`site-nav__drawer${open ? ' is-open' : ''}`}
        hidden={!open}
      >
        <div className="site-nav__drawer-head">
          <span>NAV.PANEL</span>
          <span>MENU</span>
        </div>
        <div className="site-nav__drawer-links">
          <a href="#top" onClick={close}>
            Home
          </a>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={link.cta ? 'site-nav__cta' : undefined}
              onClick={close}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {open && (
        <button
          type="button"
          className="site-nav__scrim"
          aria-label="Close menu"
          onClick={close}
        />
      )}
    </nav>
  )
}
