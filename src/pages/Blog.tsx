import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { Reveal } from '../hooks/useReveal'
import { useLang } from '../i18n'

export function Blog() {
  const { t, c } = useLang()
  const tb = t.blog

  return (
    <>
      <PageHeader crumb={tb.crumb} title={tb.title}>
        {tb.intro}
      </PageHeader>

      <section className="section--tight">
        <div className="container">
          <div className="blog-grid">
            {c.posts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.08}>
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
                        <span>{post.readTime}</span>
                      </div>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <span className="post-card__read">
                        {tb.readArticle} <ArrowRight className="arrow" size={15} />
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
