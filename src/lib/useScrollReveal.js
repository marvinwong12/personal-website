import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from './motionPreference'

export function useScrollReveal(threshold = 0.15) {
  const [isVisible, setIsVisible] = useState(prefersReducedMotion)
  const ref = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) return
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return [ref, isVisible]
}

export const revealClasses = (isVisible, delayMs = 0) => ({
  className: `transition-all duration-700 ease-out ${
    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
  }`,
  style: prefersReducedMotion ? undefined : { transitionDelay: `${delayMs}ms` },
})
