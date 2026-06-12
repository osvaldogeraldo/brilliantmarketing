import { Link, useParams } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { Reveal } from '../hooks/useReveal'
import { useLang } from '../i18n'

export function BlogPost() {
  const { slug } = useParams()
  const { t, c } = useLang()
  const tp = t.post
  const post = c.posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <PageHeader crumb={t.blog.crumb} title={tp.notFound}>
        {tp.notFoundText}{' '}
        <Link to="/blog" className="accent">
          {tp.back}
        </Link>
      </PageHeader>
    )
  }

  const related = c.posts.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="article">
            <nav className="breadcrumb">
              <Link to="/">{t.nav.links[0].label}</Link>
              <span className="sep">/</span>
              <Link to="/blog">{t.blog.crumb}</Link>
              <span className="sep">/</span>
              <span>{post.category}</span>
            </nav>
            <h1 style={{ animation: 'slide-up 0.8s var(--ease-out) both' }}>{post.title}</h1>
            <div className="article__meta">
              <span>{post.date}</span>
              <span>·</span>
              <span>
                {post.readTime} {tp.readSuffix}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section--tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <article className="article">
            <div
              className="post-card__cover"
              style={{ borderRadius: 'var(--radius)', height: 280, overflow: 'hidden', marginBottom: 44 }}
            >
              <div
                className="post-card__cover-inner"
                style={{ background: post.gradient, position: 'relative', height: '100%' }}
              >
                <post.icon size={72} strokeWidth={1.2} />
              </div>
            </div>

            <div className="article__body">
              {post.body.map((block, i) => (
                <div key={i}>
                  {block.heading && <h2>{block.heading}</h2>}
                  <p>{block.text}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* Relacionados */}
      <section className="section--tight">
        <div className="container">
          <Reveal>
            <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: 32 }}>
              {tp.continueTitle}
            </h2>
          </Reveal>
          <div className="blog-grid">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link to={`/blog/${p.slug}`}>
                  <article className="post-card">
                    <div className="post-card__cover" style={{ height: 150 }}>
                      <div className="post-card__cover-inner" style={{ background: p.gradient }}>
                        <p.icon size={44} strokeWidth={1.4} />
                      </div>
                    </div>
                    <div className="post-card__body">
                      <div className="post-card__meta">
                        <span className="cat">{p.category}</span>
                        <span>{p.date}</span>
                      </div>
                      <h3>{p.title}</h3>
                      <span className="post-card__read">
                        {t.blog.readArticle} <ArrowRight className="arrow" size={15} />
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
