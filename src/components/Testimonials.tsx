import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useLang } from '../i18n'

export function Testimonials() {
  const { c } = useLang()
  const testimonials = c.testimonials
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setIndex((i) => (i + 1) % testimonials.length), 6000)
    return () => clearTimeout(t)
  }, [index, testimonials.length])

  const go = (dir: number) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length)

  return (
    <div className="testimonial-slider">
      <div
        className="testimonial-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {testimonials.map((t, i) => (
          <div className="testimonial" key={i}>
            <div className="testimonial__card">
              <span className="testimonial__quote-mark">“</span>
              <p className="testimonial__text">{t.text}</p>
              <div className="testimonial__author">
                <div className="testimonial__avatar" style={{ background: t.gradient }}>
                  {t.initials}
                </div>
                <div style={{ textAlign: 'left' }}>
                  <strong>{t.author}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonial-controls">
        <button type="button" className="hero__arrow" onClick={() => go(-1)} aria-label="Previous">
          <ArrowLeft size={18} />
        </button>
        <button type="button" className="hero__arrow" onClick={() => go(1)} aria-label="Next">
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  )
}
