import { useEffect, useRef, type CSSProperties } from 'react'

/**
 * Avatar ilustrado e animado para a equipa:
 * - os olhos seguem o cursor do rato
 * - pestaneja periodicamente (delay diferente por membro)
 * - flutua suavemente; inclina-se quando o cartão recebe hover
 * O `seed` varia os traços (óculos, boca) entre membros.
 */
export function TeamAvatar({ seed }: { seed: number }) {
  const svgRef = useRef<SVGSVGElement>(null)
  const pupilsRef = useRef<SVGGElement>(null)

  useEffect(() => {
    let raf = 0
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const svg = svgRef.current
        const pupils = pupilsRef.current
        if (!svg || !pupils) return
        const r = svg.getBoundingClientRect()
        const cx = r.left + r.width / 2
        const cy = r.top + r.height / 2
        const dx = e.clientX - cx
        const dy = e.clientY - cy
        const dist = Math.hypot(dx, dy) || 1
        const reach = Math.min(dist / 60, 1) * 3.2
        pupils.style.transform = `translate(${(dx / dist) * reach}px, ${(dy / dist) * reach}px)`
      })
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  const glasses = seed % 2 === 1
  const mouth = seed % 3

  return (
    <svg
      ref={svgRef}
      className="team-avatar"
      viewBox="0 0 120 120"
      style={{ '--blink-delay': `${(seed % 5) * 0.9}s`, '--bob-delay': `${(seed % 4) * 0.55}s` } as CSSProperties}
      aria-hidden="true"
    >
      <g className="team-avatar__head">
        {/* orelhas */}
        <circle cx="24" cy="60" r="7" fill="#f4f1ea" />
        <circle cx="96" cy="60" r="7" fill="#f4f1ea" />

        {/* cabeça */}
        <rect x="26" y="20" width="68" height="74" rx="26" fill="#faf8f2" />

        {/* cabelo */}
        <path
          d={
            seed % 2 === 0
              ? 'M26 48 Q26 18 60 18 Q94 18 94 48 L94 40 Q86 26 60 26 Q34 26 26 40 Z'
              : 'M26 44 Q30 16 60 16 Q90 16 94 44 Q80 22 60 24 Q40 22 26 44 Z'
          }
          fill="#1b1b20"
        />

        {/* olhos */}
        <g>
          <circle cx="46" cy="58" r="9.5" fill="#ffffff" stroke="#1b1b20" strokeWidth="1.5" />
          <circle cx="74" cy="58" r="9.5" fill="#ffffff" stroke="#1b1b20" strokeWidth="1.5" />
          <g ref={pupilsRef} className="team-avatar__pupils">
            <circle cx="46" cy="58" r="4" fill="#1b1b20" />
            <circle cx="74" cy="58" r="4" fill="#1b1b20" />
            <circle cx="47.5" cy="56.5" r="1.3" fill="#ffffff" />
            <circle cx="75.5" cy="56.5" r="1.3" fill="#ffffff" />
          </g>
          {/* pálpebras (pestanejo) */}
          <g className="team-avatar__lids">
            <rect x="35" y="47" width="22" height="22" rx="11" fill="#faf8f2" />
            <rect x="63" y="47" width="22" height="22" rx="11" fill="#faf8f2" />
          </g>
        </g>

        {/* óculos em alguns membros */}
        {glasses && (
          <g fill="none" stroke="#1b1b20" strokeWidth="2.5">
            <circle cx="46" cy="58" r="12.5" />
            <circle cx="74" cy="58" r="12.5" />
            <line x1="58.5" y1="58" x2="61.5" y2="58" />
            <line x1="33.5" y1="56" x2="26" y2="52" />
            <line x1="86.5" y1="56" x2="94" y2="52" />
          </g>
        )}

        {/* sobrancelhas */}
        <path d="M38 44 Q46 40 54 44" stroke="#1b1b20" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M66 44 Q74 40 82 44" stroke="#1b1b20" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* bochechas */}
        <circle cx="38" cy="72" r="4.5" fill="#ff5c1a" opacity="0.22" />
        <circle cx="82" cy="72" r="4.5" fill="#ff5c1a" opacity="0.22" />

        {/* boca (varia por membro) */}
        {mouth === 0 && (
          <path d="M50 78 Q60 86 70 78" stroke="#1b1b20" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        )}
        {mouth === 1 && <ellipse cx="60" cy="80" rx="7" ry="5" fill="#1b1b20" />}
        {mouth === 2 && (
          <g>
            <path d="M48 77 Q60 88 72 77 Z" fill="#1b1b20" />
            <rect x="54" y="77" width="12" height="3.5" rx="1.5" fill="#ffffff" />
          </g>
        )}
      </g>

      {/* ombros */}
      <path d="M22 120 Q22 98 60 98 Q98 98 98 120 Z" fill="#1b1b20" />
      <rect x="52" y="98" width="16" height="8" rx="4" fill="#faf8f2" />
    </svg>
  )
}
