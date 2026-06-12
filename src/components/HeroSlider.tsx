import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import { useLang } from '../i18n'

const AUTOPLAY_MS = 6500

export function HeroSlider() {
  const { c } = useLang()
  const slides = c.heroSlides
  const [active, setActive] = useState(0)
  const [cycle, setCycle] = useState(0) // força reinício da barra de progresso

  const go = useCallback(
    (index: number) => {
      setActive((index + slides.length) % slides.length)
      setCycle((n) => n + 1)
    },
    [slides.length],
  )

  useEffect(() => {
    const timer = setTimeout(() => go(active + 1), AUTOPLAY_MS)
    return () => clearTimeout(timer)
  }, [active, cycle, go])

  return (
    <section className="hero">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero__slide ${i === active ? 'hero__slide--active' : ''}`}
        >
          <div className="hero__bg">
            {slide.image && <img className="hero__img" src={slide.image} alt="" />}
            {slide.orbs.map((orb, j) => (
              <div
                key={j}
                className="hero__orb"
                style={{
                  background: orb.color,
                  top: orb.top,
                  left: orb.left,
                  width: orb.size,
                  height: orb.size,
                  animationDelay: `${j * 1.5}s`,
                }}
              />
            ))}
            <div className="hero__grid-overlay" />
          </div>

          <div className="hero__content">
            <span className="hero__tag">
              <Sparkles size={14} /> {slide.tag}
            </span>
            <h1 className="hero__title">
              {slide.title.map((part, j) => (
                <span
                  key={j}
                  className={
                    part.style === 'stroke'
                      ? 'stroke'
                      : part.style === 'accent'
                        ? 'mark'
                        : ''
                  }
                >
                  {part.text}{' '}
                </span>
              ))}
            </h1>
            <p className="hero__sub">{slide.sub}</p>
            <div className="hero__actions">
              <Link to={slide.primary.to} className="btn btn--primary">
                {slide.primary.label} <ArrowRight className="arrow" size={18} />
              </Link>
              <Link to={slide.ghost.to} className="btn btn--ghost">
                {slide.ghost.label}
              </Link>
            </div>
          </div>
        </div>
      ))}

      <div className="hero__controls">
        <div className="hero__counter">
          <strong>0{active + 1}</strong> / 0{slides.length}
        </div>

        <div className="hero__dots">
          {slides.map((_, i) => (
            <button
              key={`${i}-${i === active ? cycle : 'idle'}`}
              className={`hero__dot ${i === active ? 'hero__dot--active' : ''}`}
              style={i === active ? { animationDuration: `${AUTOPLAY_MS}ms` } : undefined}
              onClick={() => go(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="hero__nav-btns">
          <button type="button" className="hero__arrow" onClick={() => go(active - 1)} aria-label="Previous">
            <ArrowLeft size={18} />
          </button>
          <button type="button" className="hero__arrow" onClick={() => go(active + 1)} aria-label="Next">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
