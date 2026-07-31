import { useEffect, useRef, useState } from 'react'
import { Send, X } from 'lucide-react'

const GREETING = {
  role: 'assistant',
  content:
    "Hi, we're Kit and Charlie, Marvin's pets and self-appointed assistants! We know him pretty well, so ask us anything about his projects, skills, experience, or what he's looking for next.",
}

function PetDuoAvatar({ size = 28 }) {
  const kitSize = Math.round(size * 0.72)
  return (
    <span
      className="relative inline-block shrink-0"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <img
        src="/charlie.jpg"
        alt=""
        className="absolute inset-0 h-full w-full rounded-full border-2 border-ivory-50 object-cover shadow-sm"
      />
      <img
        src="/kit.jpg"
        alt=""
        className="absolute -bottom-0.5 -right-0.5 rounded-full border-2 border-ivory-50 object-cover shadow-sm"
        style={{ width: kitSize, height: kitSize }}
      />
    </span>
  )
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([GREETING])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (!scrollRef.current) return
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [messages, isLoading])

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  const sendMessage = async () => {
    const text = input.trim()
    if (!text || isLoading) return

    const nextMessages = [...messages, { role: 'user', content: text }]
    setMessages(nextMessages)
    setInput('')
    setIsLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: nextMessages
            .filter((m) => m !== GREETING)
            .slice(-6)
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      })

      const data = await res.json()
      const reply =
        data.reply ||
        "Something went wrong on my end — try again, or email marvin.cy.wong@gmail.com."

      setMessages((prev) => [...prev, { role: 'assistant', content: reply }])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            "I couldn't reach the server just now — please try again, or email marvin.cy.wong@gmail.com.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? 'Close chat' : 'Ask about Marvin'}
        aria-expanded={isOpen}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-forest-800 text-ivory-50 shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-forest-700"
      >
        {isOpen ? <X size={22} aria-hidden="true" /> : <PetDuoAvatar size={40} />}
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="Chat about Marvin"
          className="animate-scale-in fixed bottom-24 right-6 z-40 flex h-[32rem] max-h-[70vh] w-[22rem] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-forest-700/10 bg-ivory-50 shadow-2xl"
        >
          <div className="flex shrink-0 items-center justify-between border-b border-forest-700/10 bg-ivory-100 px-5 py-4">
            <div className="flex items-center gap-3">
              <PetDuoAvatar size={30} />
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-forest-600">
                Ask about Marvin
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="cursor-pointer rounded-full p-1.5 text-ink-700 transition-colors hover:bg-ivory-200 hover:text-ink-900"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          <div
            ref={scrollRef}
            aria-live="polite"
            className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex items-end gap-2 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.role === 'assistant' && <PetDuoAvatar size={26} />}
                <p
                  className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-forest-800 text-ivory-50'
                      : 'bg-ivory-200 text-ink-900'
                  }`}
                >
                  {m.content}
                </p>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-end justify-start gap-2">
                <PetDuoAvatar size={26} />
                <p className="rounded-2xl bg-ivory-200 px-4 py-2.5 text-sm text-ink-500">
                  <span className="animate-blink">&hellip;</span>
                </p>
              </div>
            )}
          </div>

          <div className="flex shrink-0 items-end gap-2 border-t border-forest-700/10 bg-ivory-100 px-3 py-3">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask a question..."
              rows={1}
              maxLength={800}
              className="max-h-24 flex-1 resize-none rounded-xl border border-forest-700/15 bg-ivory-50 px-3 py-2 text-sm text-ink-900 outline-none focus:border-forest-500"
            />
            <button
              type="button"
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
              className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-forest-800 text-ivory-50 transition-colors hover:bg-forest-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Send size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
