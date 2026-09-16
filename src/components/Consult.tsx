import { useState } from 'react'
import type { FormEvent } from 'react'
import { HudCorners } from './HudCorners'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const lookingForOptions = [
  'Starter — $499',
  'Growth — $1,499',
  'Pro — $2,499+',
  'SEO + AEO retainer',
  'Free website audit',
  'Not sure yet',
]

export function Consult({
  title = 'Get a Free Quote',
  lede = 'Tell us about your business. We’ll reply within 24 hours with next steps and a clear package recommendation.',
}: {
  title?: string
  lede?: string
} = {}) {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    business: '',
    budget: 'Growth — $1,499',
    message: '',
  })

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/cc.floomp.meme@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            business: form.business || 'Not provided',
            looking_for: form.budget,
            message: form.message,
            _replyto: form.email,
            _subject: `Floomp Labs quote — ${form.name}`,
            _template: 'table',
            _captcha: 'false',
          }),
        },
      )

      const result = (await response.json()) as {
        success?: string | boolean
        message?: string
      }

      if (!response.ok || result.success === 'false' || result.success === false) {
        throw new Error(result.message || 'Submit failed')
      }

      setStatus('success')
      setForm({
        name: '',
        email: '',
        business: '',
        budget: 'Growth — $1,499',
        message: '',
      })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section consult" id="consult">
      <div className="section__inner">
        <p className="section__label">LAB // Get a quote</p>
        <h2 className="section__title">{title}</h2>
        <p className="section__lede">{lede}</p>

        <div className="consult__layout">
          <div className="consult__details">
            <span className="consult__chip">FREE QUOTE · &lt;24h reply</span>
            <p>
              Prefer a direct line? Email{' '}
              <a href="mailto:cc.floomp.meme@gmail.com">cc.floomp.meme@gmail.com</a>{' '}
              or call <a href="tel:6092273903">609-227-3903</a>.
            </p>
            <p>Philadelphia HQ · remote deployments nationwide.</p>
            <ul className="consult__bullets">
              <li>Websites starting at $499</li>
              <li>Growth &amp; Pro packages with SEO / AEO</li>
              <li>Optional monthly search retainers</li>
            </ul>
          </div>

          {status === 'success' ? (
            <div className="consult-form__success">
              <HudCorners />
              <h3>Got it — thanks.</h3>
              <p>We’ll reply soon with your quote and next steps.</p>
            </div>
          ) : (
            <form className="consult-form" onSubmit={handleSubmit}>
              <HudCorners />
              <div className="consult-form__banner">
                <span>QUOTE.FORM</span>
                <span>SECURE</span>
              </div>
              <div className="consult-form__row">
                <label>
                  Name
                  <input
                    name="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    autoComplete="name"
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    autoComplete="email"
                  />
                </label>
              </div>

              <div className="consult-form__row">
                <label>
                  Business
                  <input
                    name="business"
                    value={form.business}
                    onChange={(e) =>
                      setForm({ ...form, business: e.target.value })
                    }
                    placeholder="Company or project name"
                  />
                </label>
                <label>
                  Looking for
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  >
                    {lookingForOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label>
                Tell us what you need
                <textarea
                  name="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Goals, timeline, current site, anything useful..."
                  required
                />
              </label>

              <button
                className="btn btn--primary"
                type="submit"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending…' : 'Get a Free Quote'}
              </button>

              {status === 'error' && (
                <p className="consult-form__status consult-form__status--err">
                  Something went wrong — email us directly and we’ll sort it out.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
