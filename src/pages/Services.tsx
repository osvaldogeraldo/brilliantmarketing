import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { Marquee } from '../components/Marquee'
import { Reveal } from '../hooks/useReveal'
import { useLang } from '../i18n'

export function Services() {
  const { t, c } = useLang()
  const ts = t.services

  return (
    <>
      <PageHeader crumb={ts.crumb} title={ts.title}>
        {ts.intro}
      </PageHeader>

      <section className="section--tight">
        <div className="container">
          <div className="services-grid">
            {c.services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <div className="service-card">
                  <span className="service-card__num">0{i + 1}</span>
                  <div className="service-card__icon">
                    <s.icon size={26} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul style={{ marginTop: 18, paddingLeft: 18, color: 'var(--muted)', fontSize: 14, display: 'grid', gap: 6 }}>
                    {s.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Marquee items={ts.marquee} />

      {/* Processo */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div>
                <span className="eyebrow eyebrow--lime">{ts.processEyebrow}</span>
                <h2 className="section-title">{ts.processTitle}</h2>
              </div>
            </div>
          </Reveal>

          <div className="services-grid">
            {c.process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <div className="service-card">
                  <div className="stat__num" style={{ fontSize: '2.6rem', marginBottom: 14 }}>
                    {p.step}
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section--tight">
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <h2>{ts.ctaTitle}</h2>
              <p>{ts.ctaText}</p>
              <Link to="/contacto" className="btn btn--lime">
                {ts.ctaBtn} <ArrowRight className="arrow" size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
