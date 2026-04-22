import { useEffect, useRef } from 'react'

const REVEAL_CLASSES = ['reveal-up', 'reveal-scale', 'reveal-fade']
const REVEAL_SELECTOR = REVEAL_CLASSES.map((c) => `.${c}`).join(', ')

export default function useReveal(options = { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the element itself is a reveal element, reveal it
          if (REVEAL_CLASSES.some((c) => entry.target.classList.contains(c))) {
            entry.target.classList.add('revealed')
          }
          
          // Also reveal any children that are set to reveal via css variables
          const revealElements = entry.target.querySelectorAll(REVEAL_SELECTOR)
          revealElements.forEach((el) => {
            el.classList.add('revealed')
          })

          observer.unobserve(entry.target)
        }
      })
    }, options)

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [options.threshold, options.rootMargin])

  return ref
}
