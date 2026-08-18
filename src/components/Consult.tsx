import { useState } from 'react'
import type { FormEvent } from 'react'
import { HudCorners } from './HudCorners'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function Consult() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    business: '',
    budget: 'Starting at $499',
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
            _subject: `Floomp Labs consult — ${form.name}`,
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
        budget: 'Starting at $499',
        message: '',
      })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section consult" id="consult">
      <div className="section__inner">
        <p className="section__label">LAB // Intake terminal</p>
        <h2 className="section__title">Transmit your brief. We’ll map the build.</h2>
        <p className="section__lede">
          Free consult. We’ll align on goals, timeline, and the right launch
          package for your business.
        </p>

        <div className="consult__layout">
          <div className="consult__details">
            <span className="consult__chip">CHANNEL OPEN · &lt;24h reply</span>
            <p>
              Prefer a direct line? Email{' '}
              <a href="mailto:cc.floomp.meme@gmail.com">cc.floomp.meme@gmail.com</a>{' '}
              or call <a href="tel:6092273903">609-227-3903</a>.
            </p>
            <p>Philadelphia HQ · remote deployments nationwide.</p>
          </div>

          {status === 'success' ? (
            <div className="consult-form__success">
              <HudCorners />
              <h3>Packet received.</h3>
              <p>Thanks — we’ll reply soon to schedule your consultation.</p>
            </div>
          ) : (
            <form className="consult-form" onSubmit={handleSubmit}>
              <HudCorners />
              <div className="consult-form__banner">
                <span>INTAKE.FORM</span>
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
                    <option>Starting at $499</option>
                    <option>Custom website</option>
                    <option>SEO & Google rankings</option>
                    <option>App / product build</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
              </div>

              <label>
                Mission brief
                <textarea
                  name="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Goals, timeline, anything useful..."
                  required
                />
              </label>

              <button
                className="btn btn--primary"
                type="submit"
                disabled={status === 'submitting'}
              >
                <span className="btn__glyph" aria-hidden="true" />
                {status === 'submitting' ? 'Transmitting…' : 'Request consultation'}
              </button>

              {status === 'error' && (
                <p className="consult-form__status consult-form__status--err">
                  Transmit failed — email us directly and we’ll sort it out.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
