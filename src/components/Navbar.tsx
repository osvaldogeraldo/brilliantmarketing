import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { ArrowRight, Moon, Sun } from 'lucide-react'
import { useLang, type Lang } from '../i18n'
import { useTheme } from '../hooks/useTheme'

export function Navbar() {
  const { lang, setLang, t } = useLang()
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // fecha o menu mobile ao navegar
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const langBtn = (l: Lang) => (
    <button
      key={l}
      className={lang === l ? 'lang-switch--active' : ''}
      onClick={() => setLang(l)}
      aria-label={l === 'pt' ? 'Português' : 'English'}
    >
      {l.toUpperCase()}
    </button>
  )

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__inner">
          <Link to="/" className="nav__logo">
            <span className="nav__logo-dot" />
            BRILLIANT<span className="accent">MARKETING</span>
          </Link>

          <ul className="nav__links">
            {t.nav.links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `nav__link ${isActive ? 'nav__link--active' : ''}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="nav__actions">
            <div className="lang-switch">{(['pt', 'en'] as Lang[]).map(langBtn)}</div>

            <button
              type="button"
              className="theme-toggle"
              onClick={toggle}
              aria-label={theme === 'dark' ? 'Modo claro' : 'Modo escuro'}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <Link to="/contacto" className="nav__cta">
              {t.nav.cta} <ArrowRight className="arrow" size={15} />
            </Link>

            <button
              className={`nav__burger ${open ? 'nav__burger--open' : ''}`}
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`nav__mobile ${open ? 'nav__mobile--open' : ''}`}>
        {[...t.nav.links, { to: '/contacto', label: t.nav.contact }].map((l, i) => (
          <NavLink
            key={l.to}
            to={l.to}
            style={{ transitionDelay: `${0.06 * i + 0.1}s` }}
            className={({ isActive }) => (isActive ? 'nav__link--active' : '')}
          >
            {l.label}
          </NavLink>
        ))}
      </div>
    </>
  )
}
