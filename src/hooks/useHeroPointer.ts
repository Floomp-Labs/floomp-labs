import { useEffect, useRef, useState } from 'react'

type Pointer = { x: number; y: number }

/** Smooth pointer tracking for hero parallax / HUD (desktop, motion-ok only). */
export function useHeroPointer(enabled: boolean) {
  const target = useRef<Pointer>({ x: 0.5, y: 0.5 })
  const current = useRef<Pointer>({ x: 0.5, y: 0.5 })
  const [pointer, setPointer] = useState<Pointer>({ x: 0.5, y: 0.5 })
  const raf = useRef(0)

  useEffect(() => {
    if (!enabled) return

    function onMove(event: PointerEvent) {
      target.current = {
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      }
    }

    function tick() {
      const c = current.current
      const t = target.current
      c.x += (t.x - c.x) * 0.08
      c.y += (t.y - c.y) * 0.08
      setPointer({ x: c.x, y: c.y })
      raf.current = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    raf.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [enabled])

  return pointer
}

export function useMotionOk() {
  const [ok, setOk] = useState(false)

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const fine = window.matchMedia('(pointer: fine)')

    function sync() {
      setOk(!motion.matches && fine.matches)
    }

    sync()
    motion.addEventListener('change', sync)
    fine.addEventListener('change', sync)
    return () => {
      motion.removeEventListener('change', sync)
      fine.removeEventListener('change', sync)
    }
  }, [])

  return ok
}
