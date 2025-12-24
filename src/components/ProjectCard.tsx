import { Link } from 'react-router'
import type { Project } from '../types'

interface ProjectCardProps {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const { id, title, subtitle, description, technologies, image } = project

  return (
    <article className="group overflow-hidden rounded-lg border border-slate-200 bg-white transition-shadow hover:shadow-lg">
      <div className="aspect-video bg-slate-100">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-4xl font-bold text-slate-300">
              {title[0]}
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        {subtitle && (
          <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
        )}
        <p className="mt-3 line-clamp-2 text-sm text-slate-600">
          {description}
        </p>

        {technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                +{technologies.length - 3}
              </span>
            )}
          </div>
        )}

        <Link
          to={`/projects/${id}`}
          className="mt-4 inline-block text-sm font-medium text-blue-600 transition-colors group-hover:text-blue-700"
        >
          View Project &rarr;
        </Link>
      </div>
    </article>
  )
}

export default ProjectCard
