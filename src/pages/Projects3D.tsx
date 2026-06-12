import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Play } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { Model3DViewer } from '../components/Model3DViewer'
import { Reveal } from '../hooks/useReveal'
import { useLang } from '../i18n'

export function Projects3D() {
  const { t, c } = useLang()
  const t3 = t.p3d
  const [activeModel, setActiveModel] = useState(0)
  const model = c.models3d[activeModel]

  return (
    <>
      <PageHeader crumb={t3.crumb} title={t3.title}>
        {t3.intro}
      </PageHeader>

      {/* Visualizador interativo */}
      <section className="section--tight">
        <div className="container">
          <Reveal>
            <div className="viewer3d">
              <Model3DViewer
                src={model.src}
                accent={model.accent}
                labels={{ loading: t3.viewerLoading, error: t3.viewerError, hint: t3.viewerHint }}
              />

              <div className="viewer3d__list">
                {c.models3d.map((m, i) => (
                  <button
                    type="button"
                    key={m.id}
                    className={`model-tab ${i === activeModel ? 'model-tab--active' : ''}`}
                    onClick={() => setActiveModel(i)}
                  >
                    <div className="model-tab__head">
                      <span className="model-tab__dot" style={{ background: m.accent }} />
                      <h3>{m.title}</h3>
                      {!m.src && <span className="model-tab__badge">{t3.demo}</span>}
                    </div>
                    <p>{m.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Galeria CGI */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div>
                <span className="eyebrow">{t3.cgiEyebrow}</span>
                <h2 className="section-title">{t3.cgiTitle}</h2>
              </div>
            </div>
          </Reveal>

          <div className="cgi-grid">
            {c.cgiGallery.map((g, i) => (
              <Reveal key={g.title} delay={(i % 2) * 0.08}>
                <figure className="cgi-card">
                  <img src={g.img} alt={g.title} loading="lazy" />
                  <figcaption>
                    <span>{g.tag}</span>
                    <h3>{g.title}</h3>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vídeos */}
      <section className="section--tight">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div>
                <span className="eyebrow eyebrow--lime">{t3.videosEyebrow}</span>
                <h2 className="section-title">{t3.videosTitle}</h2>
              </div>
            </div>
          </Reveal>

          <div className="video-grid">
            {c.videos3d.map((v, i) => (
              <Reveal key={v.id} delay={i * 0.08}>
                <article className="video-card">
                  <div className="video-card__media" style={!v.src ? { background: v.poster } : undefined}>
                    {v.src ? (
                      <video src={v.src} controls preload="metadata" />
                    ) : (
                      <>
                        <span className="video-card__soon">{t3.soon}</span>
                        <button type="button" className="video-card__play" aria-label="Play">
                          <Play size={24} fill="currentColor" />
                        </button>
                        <span className="video-card__duration">{v.duration}</span>
                      </>
                    )}
                  </div>
                  <div className="video-card__body">
                    <h3>{v.title}</h3>
                    <p>{v.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <h2>{t3.ctaTitle}</h2>
              <p>{t3.ctaText}</p>
              <Link to="/contacto" className="btn btn--lime">
                {t3.ctaBtn} <ArrowRight className="arrow" size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
