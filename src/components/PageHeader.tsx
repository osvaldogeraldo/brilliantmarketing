import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

export function PageHeader({
  crumb,
  title,
  children,
}: {
  crumb: string
  title: ReactNode
  children?: ReactNode
}) {
  return (
    <section className="page-header">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/">Início</Link>
          <span className="sep">/</span>
          <span>{crumb}</span>
        </nav>
        <h1 className="page-header__title">{title}</h1>
        {children && <p>{children}</p>}
      </div>
    </section>
  )
}
