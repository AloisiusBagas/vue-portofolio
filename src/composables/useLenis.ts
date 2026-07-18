import Lenis from 'lenis'

let lenis: Lenis | null = null
let rafId: number | null = null

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const initLenis = () => {
  // Respect reduced-motion preference: keep native scrolling
  if (lenis || prefersReducedMotion()) return

  lenis = new Lenis()

  const raf = (time: number) => {
    lenis?.raf(time)
    rafId = requestAnimationFrame(raf)
  }
  rafId = requestAnimationFrame(raf)
}

export const destroyLenis = () => {
  if (rafId !== null) {
    cancelAnimationFrame(rafId)
    rafId = null
  }
  lenis?.destroy()
  lenis = null
}

export const useLenis = () => lenis
