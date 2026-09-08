import { useState } from 'react'
import { Mail } from 'lucide-react'

const email = 'marvin.cy.wong@gmail.com'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `Portfolio contact from ${form.name || 'website visitor'}`
    const body = `${form.message}\n\n— ${form.name} (${form.email})`
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="bg-forest-950 py-16 text-ivory-50">
      <div className="mx-auto max-w-6xl px-[4.5rem]">
        <p className="font-body text-sm font-bold uppercase tracking-[0.2em] text-gold-400 sm:text-base">
          Contact
        </p>

        <form onSubmit={handleSubmit} className="mt-8 max-w-xl space-y-5">
          <div>
            <label
              htmlFor="contact-name"
              className="block font-body text-xs font-semibold uppercase tracking-widest text-forest-300"
            >
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="mt-2 w-full border border-forest-300/30 bg-transparent px-4 py-3 text-ivory-50 outline-none transition-colors focus:border-gold-400"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="block font-body text-xs font-semibold uppercase tracking-widest text-forest-300"
            >
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="mt-2 w-full border border-forest-300/30 bg-transparent px-4 py-3 text-ivory-50 outline-none transition-colors focus:border-gold-400"
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block font-body text-xs font-semibold uppercase tracking-widest text-forest-300"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              className="mt-2 w-full resize-none border border-forest-300/30 bg-transparent px-4 py-3 text-ivory-50 outline-none transition-colors focus:border-gold-400"
            />
          </div>

          <button
            type="submit"
            className="inline-flex cursor-pointer items-center gap-2 bg-gold-400 px-8 py-4 font-body text-xs font-semibold uppercase tracking-widest text-ink-900 transition-opacity hover:opacity-85"
          >
            <Mail size={16} aria-hidden="true" />
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}
