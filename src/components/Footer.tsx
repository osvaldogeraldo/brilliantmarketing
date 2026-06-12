import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from './SocialIcons'
import { useLang } from '../i18n'

export function Footer() {
  const { t, c } = useLang()
  const { contactInfo } = c

  return (
    <footer className="footer">
      <div className="footer__cta">
        <div className="container">
          <h2>
            {t.footer.ctaTitle} <br />
            <Link to="/contacto">{t.footer.ctaLink}</Link>
          </h2>
        </div>
      </div>

      <div className="container">
        <div className="footer__main">
          <div className="footer__brand">
            <Link to="/" className="nav__logo">
              <span className="nav__logo-dot" />
              BRILLIANT<span className="accent">MARKETING</span>
            </Link>
            <p>{t.footer.tagline}</p>
            <div className="footer__socials">
              <a href="#" aria-label="Facebook"><FacebookIcon size={15} /></a>
              <a href="#" aria-label="Instagram"><InstagramIcon size={15} /></a>
              <a href="#" aria-label="LinkedIn"><LinkedinIcon size={15} /></a>
              <a href="#" aria-label="YouTube"><YoutubeIcon size={15} /></a>
            </div>
          </div>

          <div>
            <h4>{t.footer.navHeading}</h4>
            <ul className="footer__links">
              {t.nav.links.slice(1).map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>{t.footer.servicesHeading}</h4>
            <ul className="footer__links">
              {t.footer.serviceLinks.map((s) => (
                <li key={s}>
                  <Link to="/servicos">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>{t.footer.contactHeading}</h4>
            <ul className="footer__links">
              <li><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></li>
              <li><a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>{contactInfo.phone}</a></li>
              <li><span style={{ color: 'var(--muted)', fontSize: 15 }}>{contactInfo.address}</span></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>{t.footer.rights}</span>
          <span className="footer__made">
            {t.footer.madePre}{' '}
            <Heart size={13} className="accent" fill="currentColor" />{' '}
            {t.footer.madePost}
          </span>
        </div>
      </div>
    </footer>
  )
}
