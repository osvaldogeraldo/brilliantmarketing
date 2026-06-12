import { useState, type FormEvent } from 'react'
import { ArrowRight, Check, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { Reveal } from '../hooks/useReveal'
import { useLang } from '../i18n'

export function Contact() {
  const { t, c } = useLang()
  const tc = t.contact
  const { contactInfo } = c
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: ligar a um backend / serviço de email (ex.: EmailJS, Formspree, API própria)
    setSent(true)
  }

  return (
    <>
      <PageHeader crumb={tc.crumb} title={tc.title}>
        {tc.intro}
      </PageHeader>

      <section className="section--tight">
        <div className="container">
          <div className="contact-layout">
            <Reveal>
              <div>
                <h2 style={{ fontSize: '1.6rem', marginBottom: 16 }}>{tc.infoTitle}</h2>
                <div className="contact-info__item">
                  <div className="contact-info__icon"><MapPin size={20} /></div>
                  <div>
                    <strong>{tc.office}</strong>
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
                <div className="contact-info__item">
                  <div className="contact-info__icon"><Phone size={20} /></div>
                  <div>
                    <strong>{tc.phone}</strong>
                    <span>{contactInfo.phone}</span>
                  </div>
                </div>
                <div className="contact-info__item">
                  <div className="contact-info__icon"><Mail size={20} /></div>
                  <div>
                    <strong>{tc.email}</strong>
                    <span>{contactInfo.email}</span>
                  </div>
                </div>
                <div className="contact-info__item" style={{ borderBottom: 'none' }}>
                  <div className="contact-info__icon"><Clock size={20} /></div>
                  <div>
                    <strong>{tc.hours}</strong>
                    <span>{contactInfo.hours}</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="contact-form">
                {sent ? (
                  <div className="form-success">
                    <div className="form-success__icon"><Check size={34} strokeWidth={3} /></div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: 10 }}>{tc.successTitle}</h3>
                    <p style={{ color: 'var(--muted)' }}>{tc.successText}</p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="nome">{tc.formName}</label>
                        <input id="nome" type="text" placeholder={tc.formNamePh} required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">{tc.formEmail}</label>
                        <input id="email" type="email" placeholder={tc.formEmailPh} required />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="telefone">{tc.formPhone}</label>
                        <input id="telefone" type="tel" placeholder={tc.formPhonePh} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="servico">{tc.formService}</label>
                        <select id="servico" defaultValue="">
                          <option value="" disabled>
                            {tc.formSelect}
                          </option>
                          {c.services.map((s) => (
                            <option key={s.title}>{s.title}</option>
                          ))}
                          <option>{tc.formOther}</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="mensagem">{tc.formMessage}</label>
                      <textarea id="mensagem" placeholder={tc.formMessagePh} required />
                    </div>
                    <button
                      type="submit"
                      className="btn btn--primary"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      {tc.formSend} <ArrowRight className="arrow" size={18} />
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
