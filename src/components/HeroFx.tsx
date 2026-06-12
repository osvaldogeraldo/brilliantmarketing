import { useEffect, useRef } from 'react'
import { BarChart3, Megaphone, Rocket, Sparkles, Target, TrendingUp } from 'lucide-react'

/**
 * Camada animada do banner ("motion de marketing"):
 * - canvas com rede de partículas nas cores da marca, com atração ao cursor
 * - ícones de marketing a flutuar em parallax
 * Respeita prefers-reduced-motion (desativa tudo).
 */
export function HeroFx() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio, 1.5)
    let width = 0
    let height = 0

    const resize = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const COLORS = ['255, 92, 26', '200, 255, 46', '124, 58, 237']
    const COUNT = Math.min(70, Math.floor(window.innerWidth / 22))

    type P = { x: number; y: number; vx: number; vy: number; r: number; c: string }
    const seeded = (i: number) => {
      // pseudo-aleatório determinístico (evita Math.random)
      const s = Math.sin(i * 127.1 + 311.7) * 43758.5453
      return s - Math.floor(s)
    }
    const parts: P[] = Array.from({ length: COUNT }, (_, i) => ({
      x: seeded(i) * 1600,
      y: seeded(i + 100) * 900,
      vx: (seeded(i + 200) - 0.5) * 0.35,
      vy: (seeded(i + 300) - 0.5) * 0.35,
      r: 1.2 + seeded(i + 400) * 2.2,
      c: COLORS[i % COLORS.length],
    }))

    const mouse = { x: -9999, y: -9999 }
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
    }
    window.addEventListener('mousemove', onMove, { passive: true })

    let raf = 0
    const tick = () => {
      raf = requestAnimationFrame(tick)
      ctx.clearRect(0, 0, width, height)

      for (const p of parts) {
        // atração suave ao cursor
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const d2 = dx * dx + dy * dy
        if (d2 < 32400 && d2 > 1) {
          const f = 0.012 / Math.sqrt(d2)
          p.vx += dx * f
          p.vy += dy * f
        }
        // limite de velocidade + deriva
        p.vx = Math.max(-0.6, Math.min(0.6, p.vx))
        p.vy = Math.max(-0.6, Math.min(0.6, p.vy))
        p.x += p.vx
        p.y += p.vy
        if (p.x < -20) p.x = width + 20
        if (p.x > width + 20) p.x = -20
        if (p.y < -20) p.y = height + 20
        if (p.y > height + 20) p.y = -20

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.c}, 0.55)`
        ctx.fill()
      }

      // ligações entre partículas próximas
      for (let i = 0; i < parts.length; i++) {
        for (let j = i + 1; j < parts.length; j++) {
          const a = parts[i]
          const b = parts[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 < 13000) {
            const alpha = 0.16 * (1 - d2 / 13000)
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(${a.c}, ${alpha})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }
    }
    tick()

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  const icons = [
    { Icon: Megaphone, top: '16%', left: '58%', size: 38, dur: 9, delay: 0, color: 'var(--accent)' },
    { Icon: TrendingUp, top: '64%', left: '86%', size: 44, dur: 11, delay: 1.2, color: 'var(--lime)' },
    { Icon: Rocket, top: '30%', left: '90%', size: 34, dur: 8, delay: 2.1, color: 'var(--accent)' },
    { Icon: BarChart3, top: '74%', left: '64%', size: 40, dur: 10, delay: 0.6, color: '#7c3aed' },
    { Icon: Target, top: '12%', left: '78%', size: 30, dur: 12, delay: 1.8, color: 'var(--lime)' },
    { Icon: Sparkles, top: '48%', left: '72%', size: 26, dur: 7, delay: 2.6, color: 'var(--accent)' },
  ]

  return (
    <div className="hero-fx" aria-hidden="true">
      <canvas ref={canvasRef} className="hero-fx__canvas" />
      {icons.map(({ Icon, top, left, size, dur, delay, color }, i) => (
        <span
          key={i}
          className="hero-fx__icon"
          style={{
            top,
            left,
            color,
            animationDuration: `${dur}s`,
            animationDelay: `${delay}s`,
          }}
        >
          <Icon size={size} strokeWidth={1.6} />
        </span>
      ))}
    </div>
  )
}
