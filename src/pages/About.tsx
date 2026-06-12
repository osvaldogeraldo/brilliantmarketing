import { Link } from 'react-router-dom'
import { ArrowRight, Mail } from 'lucide-react'
import { InstagramIcon, LinkedinIcon } from '../components/SocialIcons'
import { PageHeader } from '../components/PageHeader'
import { Stats } from '../components/Stats'
import { Marquee } from '../components/Marquee'
import { TeamAvatar } from '../components/TeamAvatar'
import { Reveal } from '../hooks/useReveal'
import { useLang } from '../i18n'

export function About() {
  const { t, c } = useLang()
  const ta = t.about

  return (
    <>
      <PageHeader crumb={ta.crumb} title={ta.title}>
        {ta.intro}
      </PageHeader>

      <section className="section--tight">
        <div className="container">
          <div className="about-split">
            <Reveal>
              <div className="about-visual">
                <span className="about-visual__big">12+</span>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <span className="eyebrow">{ta.historyEyebrow}</span>
              <h2 className="section-title" style={{ marginBottom: 20 }}>
                {ta.historyTitle}
              </h2>
              <p style={{ color: 'var(--muted)', marginBottom: 16 }}>{ta.historyP1}</p>
              <p style={{ color: 'var(--muted)' }}>{ta.historyP2}</p>
            </Reveal>
          </div>

          <div style={{ marginTop: 'clamp(48px, 7vw, 80px)' }}>
            <Stats />
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section section--tight">
        <div className="container">
          <Reveal>
            <span className="eyebrow eyebrow--lime">{ta.valuesEyebrow}</span>
            <h2 className="section-title" style={{ marginBottom: 10 }}>
              {ta.valuesTitle}
            </h2>
          </Reveal>
          <div className="values-list">
            {c.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="value-item">
                  <span className="value-item__num">0{i + 1}</span>
                  <div>
                    <strong>{v.title}</strong>
                    <p>{v.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Marquee items={ta.marquee} accent />

      {/* Equipa */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <div>
                <span className="eyebrow">{ta.teamEyebrow}</span>
                <h2 className="section-title">{ta.teamTitle}</h2>
              </div>
            </div>
          </Reveal>

          <div className="team-grid">
            {c.team.map((member, i) => (
              <Reveal key={member.name} delay={(i % 3) * 0.08}>
                <div className="team-card">
                  <div className="team-card__photo" style={{ background: member.gradient }}>
                    <TeamAvatar seed={i} />
                  </div>
                  <div className="team-card__info">
                    <h3>{member.name}</h3>
                    <span>{member.role}</span>
                    <div className="team-card__socials">
                      <a href="#" aria-label="LinkedIn"><LinkedinIcon size={13} /></a>
                      <a href="#" aria-label="Instagram"><InstagramIcon size={13} /></a>
                      <a href="#" aria-label="Email"><Mail size={14} /></a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <h2>{ta.ctaTitle}</h2>
              <p>{ta.ctaText}</p>
              <Link to="/contacto" className="btn btn--primary">
                {ta.ctaBtn} <ArrowRight className="arrow" size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
