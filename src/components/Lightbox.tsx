import { useEffect } from 'react'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import type { CgiItem } from '../data'

/** Lightbox simples para a galeria CGI (ESC, setas do teclado, backdrop). */
export function Lightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: CgiItem[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const item = items[index]

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

  return (
    <div className="modal-overlay lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <button type="button" className="modal__close lightbox__close" onClick={onClose} aria-label="Close">
        <X size={20} />
      </button>

      <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
        <img src={item.img} alt={item.title} />
        <figcaption>
          <span>{item.tag}</span>
          <h3>{item.title}</h3>
        </figcaption>
      </figure>

      <div className="lightbox__nav" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="hero__arrow" onClick={onPrev} aria-label="Previous">
          <ArrowLeft size={18} />
        </button>
        <span className="modal__counter">
          <strong>{index + 1}</strong> / {items.length}
        </span>
        <button type="button" className="hero__arrow" onClick={onNext} aria-label="Next">
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  )
}
