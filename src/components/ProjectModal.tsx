import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import type { Project } from '../data'
import { useLang } from '../i18n'

/**
 * Modal de detalhe de projeto: desafio, solução, métricas de resultado,
 * ficha técnica e navegação entre projetos (setas / teclado / ESC).
 */
export function ProjectModal({
  project,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  project: Project
  index: number
  total: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const { t, c } = useLang()
  const tm = t.modal
  const detail = c.projectDetails[project.id]

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  // portal: o <main> tem transform (animação de página), o que prenderia
  // o position:fixed do modal — renderizar no <body> resolve
  return createPortal(
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal__close" onClick={onClose} aria-label={tm.close}>
          <X size={20} />
        </button>

        {/* hero */}
        <div
          className="modal__hero"
          style={!project.image ? { background: project.gradient } : undefined}
        >
          {project.image && <img src={project.image} alt={project.title} />}
          {!project.image && <div className="project-card__pattern" />}
          <div className="modal__hero-overlay">
            <span className="project-card__cat">{project.category}</span>
            <h2>{project.title}</h2>
          </div>
        </div>

        {/* corpo */}
        <div className="modal__body">
          <div className="modal__main">
            <p className="modal__lead">{project.desc}</p>

            {detail && (
              <>
                <h3>{tm.challenge}</h3>
                <p>{detail.challenge}</p>

                <h3>{tm.solution}</h3>
                <p>{detail.solution}</p>

                <h3>{tm.results}</h3>
                <div className="modal__results">
                  {detail.results.map((r) => (
                    <div className="modal__result" key={r.label}>
                      <strong>{r.value}</strong>
                      <span>{r.label}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <aside className="modal__aside">
            <div className="modal__fact">
              <span>{tm.client}</span>
              <strong>{project.client}</strong>
            </div>
            <div className="modal__fact">
              <span>{tm.year}</span>
              <strong>{project.year}</strong>
            </div>
            <div className="modal__fact">
              <span>{tm.category}</span>
              <strong>{project.category}</strong>
            </div>

            {detail && (
              <div className="modal__tags-block">
                <span className="modal__tags-label">{tm.services}</span>
                <div className="modal__tags">
                  {detail.tags.map((tag) => (
                    <span className="modal__tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <Link to="/contacto" className="btn btn--primary modal__cta" onClick={onClose}>
              {tm.cta} <ArrowRight className="arrow" size={17} />
            </Link>
          </aside>
        </div>

        {/* navegação entre projetos */}
        <div className="modal__nav">
          <button type="button" className="hero__arrow" onClick={onPrev} aria-label="Previous">
            <ArrowLeft size={18} />
          </button>
          <span className="modal__counter">
            {tm.project} <strong>{index + 1}</strong> / {total}
          </span>
          <button type="button" className="hero__arrow" onClick={onNext} aria-label="Next">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>,
    document.body,
  )
}
