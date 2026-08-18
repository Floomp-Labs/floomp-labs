export function HudCorners({ className = '' }: { className?: string }) {
  return (
    <div className={`hud-corners ${className}`} aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
    </div>
  )
}
