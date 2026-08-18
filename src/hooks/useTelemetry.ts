import { useEffect, useState } from 'react'

function pad(n: number) {
  return String(n).padStart(2, '0')
}

export function useTelemetry() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const stamp = `${pad(now.getUTCHours())}:${pad(now.getUTCMinutes())}:${pad(now.getUTCSeconds())}Z`
  const seed = (now.getSeconds() * 17 + now.getMinutes() * 3) % 100
  const load = 62 + (seed % 28)

  return { stamp, load, coords: `39.95°N / 75.16°W` }
}
