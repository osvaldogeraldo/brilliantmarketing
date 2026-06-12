import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../hooks/useReveal'
import { useLang } from '../i18n'

export function Portfolio() {
  const { t, c } = useLang()
  const tp = t.portfolio
  // índice 0 = "Todos" / "All"
  const [filterIdx, setFilterIdx] = useState(0)

  const cats = c.projectCategories
  const filtered =
    filterIdx === 0
      ? c.projects
      : c.projects.filter((p) => p.category === cats[filterIdx])

  return (
    <>
      <PageHeader crumb={tp.crumb} title={tp.title}>
        {tp.intro}
      </PageHeader>

      <section className="section--tight">
        <div className="container">
          <div className="filter-bar">
            {cats.map((cat, i) => (
              <button
                type="button"
                key={cat}
                className={`filter-btn ${filterIdx === i ? 'filter-btn--active' : ''}`}
                onClick={() => setFilterIdx(i)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* key força re-animação dos cards ao filtrar */}
          <div className="portfolio-grid" key={filterIdx}>
            {filtered.map((p, i) => (
              <div
                key={p.id}
                className={p.wide ? 'project-card--wide' : ''}
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <ProjectCard project={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <h2>{tp.ctaTitle}</h2>
              <p>{tp.ctaText}</p>
              <Link to="/contacto" className="btn btn--primary">
                {tp.ctaBtn} <ArrowRight className="arrow" size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
