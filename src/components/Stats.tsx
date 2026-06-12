import { useLang } from '../i18n'
import { useCountUp } from '../hooks/useReveal'

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: current } = useCountUp(value)
  return (
    <div className="stat" ref={ref}>
      <div className="stat__num">
        {current}
        {suffix}
      </div>
      <div className="stat__label">{label}</div>
    </div>
  )
}

export function Stats() {
  const { c } = useLang()
  return (
    <div className="stats">
      {c.stats.map((s) => (
        <StatItem key={s.label} {...s} />
      ))}
    </div>
  )
}
