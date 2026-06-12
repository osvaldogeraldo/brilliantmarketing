import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { HeroSlider } from '../components/HeroSlider'
import { Marquee } from '../components/Marquee'
import { Testimonials } from '../components/Testimonials'
import { Stats } from '../components/Stats'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../hooks/useReveal'
import { useLang } from '../i18n'

export function Home() {
  const { t, c } = useLang()
  const th = t.home

  return (
    <>
      <HeroSlider />

      <Marquee items={th.marquee} />

      {/* Serviços */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div>
                <span className="eyebrow">{th.servicesEyebrow}</span>
                <h2 className="section-title">{th.servicesTitle}</h2>
              </div>
              <Link to="/servicos" className="btn btn--ghost">
                {th.seeAll} <ArrowRight className="arrow" size={17} />
              </Link>
            </div>
          </Reveal>

          <div className="services-grid">
            {c.services.slice(0, 4).map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="service-card">
                  <span className="service-card__num">0{i + 1}</span>
                  <div className="service-card__icon">
                    <s.icon size={26} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <Link to="/servicos" className="service-card__link">
                    {th.learnMore} <ArrowRight className="arrow" size={15} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre teaser + stats */}
      <section className="section section--tight">
        <div className="container">
          <div className="about-split">
            <Reveal>
              <div className="about-visual">
                <span className="about-visual__big">BM</span>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <span className="eyebrow eyebrow--lime">{th.aboutEyebrow}</span>
              <h2 className="section-title" style={{ marginBottom: 20 }}>
                {th.aboutTitle}
              </h2>
              <p style={{ color: 'var(--muted)', marginBottom: 28 }}>{th.aboutText}</p>
              <Link to="/sobre" className="btn btn--primary">
                {th.aboutBtn} <ArrowRight className="arrow" size={18} />
              </Link>
            </Reveal>
          </div>

          <div style={{ marginTop: 'clamp(48px, 7vw, 80px)' }}>
            <Stats />
          </div>
        </div>
      </section>

      <Marquee accent items={th.marqueeAccent} />

      {/* Stands & Produção 3D */}
      <section className="section">
        <div className="container">
          <div className="stands-showcase">
            <Reveal>
              <div className="stands-showcase__imgs">
                <img
                  className="stands-showcase__img stands-showcase__img--a"
                  src={c.cgiGallery[0].img}
                  alt={c.cgiGallery[0].title}
                  loading="lazy"
                />
                <img
                  className="stands-showcase__img stands-showcase__img--b"
                  src={c.cgiGallery[1].img}
                  alt={c.cgiGallery[1].title}
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <span className="eyebrow eyebrow--lime">{th.standsEyebrow}</span>
              <h2 className="section-title" style={{ marginBottom: 18 }}>
                {th.standsTitle}
              </h2>
              <p style={{ color: 'var(--muted)', marginBottom: 26 }}>{th.standsText}</p>
              <ul className="check-list">
                {th.standsPoints.map((point) => (
                  <li key={point}>
                    <span className="check-list__icon">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <Link to="/projetos-3d" className="btn btn--primary" style={{ marginTop: 30 }}>
                {th.standsBtn} <ArrowRight className="arrow" size={18} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Portfólio destaque */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div>
                <span className="eyebrow">{th.workEyebrow}</span>
                <h2 className="section-title">{th.workTitle}</h2>
              </div>
              <Link to="/portfolio" className="btn btn--ghost">
                {th.workBtn} <ArrowRight className="arrow" size={17} />
              </Link>
            </div>
          </Reveal>

          <div className="portfolio-grid">
            {c.projects.slice(0, 5).map((p, i) => (
              <Reveal key={p.id} delay={i * 0.06} className={p.wide ? 'project-card--wide' : ''}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testemunhos */}
      <section className="section section--tight">
        <div className="container">
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <span className="eyebrow eyebrow--lime" style={{ justifyContent: 'center' }}>
                {th.testimonialsEyebrow}
              </span>
              <h2 className="section-title" style={{ marginInline: 'auto' }}>
                {th.testimonialsTitle}
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Testimonials />
          </Reveal>
        </div>
      </section>

      {/* Clientes */}
      <section className="section section--tight">
        <div className="container">
          <Reveal>
            <div className="clients-strip">
              {c.clients.map((client) => (
                <div className="client-logo" key={client}>
                  {client}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Blog preview */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div>
                <span className="eyebrow">{th.blogEyebrow}</span>
                <h2 className="section-title">{th.blogTitle}</h2>
              </div>
              <Link to="/blog" className="btn btn--ghost">
                {th.blogBtn} <ArrowRight className="arrow" size={17} />
              </Link>
            </div>
          </Reveal>

          <div className="blog-grid">
            {c.posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08}>
                <Link to={`/blog/${post.slug}`}>
                  <article className="post-card">
                    <div className="post-card__cover">
                      <div className="post-card__cover-inner" style={{ background: post.gradient }}>
                        <post.icon size={54} strokeWidth={1.4} />
                      </div>
                    </div>
                    <div className="post-card__body">
                      <div className="post-card__meta">
                        <span className="cat">{post.category}</span>
                        <span>{post.date}</span>
                      </div>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <span className="post-card__read">
                        {th.readArticle} <ArrowRight className="arrow" size={15} />
                      </span>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
