import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card ${project.wide ? 'project-card--wide' : ''}`}>
      <div
        className="project-card__bg"
        style={project.image ? undefined : { background: project.gradient }}
      >
        {project.image ? (
          <img src={project.image} alt={project.title} loading="lazy" />
        ) : (
          <div className="project-card__pattern" />
        )}
      </div>
      <div className="project-card__view">
        <ArrowUpRight size={22} />
      </div>
      <div className="project-card__overlay">
        <span className="project-card__cat">{project.category}</span>
        <h3>{project.title}</h3>
        <p className="project-card__desc">{project.desc}</p>
        <div className="project-card__meta">
          <span>{project.client}</span>
          <span className="dot" />
          <span>{project.year}</span>
        </div>
      </div>
    </article>
  )
}
