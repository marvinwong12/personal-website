import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../lib/motionPreference'

export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) return
    const el = ref.current
    if (!el) return

    const handleMove = (e) => {
      el.style.setProperty('--glow-x', `${e.clientX}px`)
      el.style.setProperty('--glow-y', `${e.clientY}px`)
    }
    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [])

  if (prefersReducedMotion) return null

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[45] hidden lg:block"
      style={{
        background:
          'radial-gradient(600px circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(149, 213, 178, 0.06), transparent 70%)',
        mixBlendMode: 'screen',
      }}
    />
  )
}
