import { useParams, Link } from 'react-router'
import { getProjectById } from '../data/projects'

function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>()
  const project = projectId ? getProjectById(projectId) : null

  if (!project) {
    return (
      <div className="py-16">
        <div className="container text-center">
          <h1 className="text-2xl font-bold text-slate-900">
            Project not found
          </h1>
          <p className="mt-4 text-slate-600">
            The project you're looking for doesn't exist.
          </p>
          <Link
            to="/projects"
            className="mt-6 inline-block text-blue-600 hover:text-blue-700"
          >
            &larr; Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16">
      <div className="container">
        <Link
          to="/projects"
          className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900"
        >
          &larr; Back to Projects
        </Link>

        <article className="mt-8">
          <header>
            <h1 className="text-3xl font-bold text-slate-900">
              {project.title}
            </h1>
            <p className="mt-2 text-lg text-slate-600">{project.subtitle}</p>
          </header>

          {project.image && (
            <div className="mt-8 overflow-hidden rounded-lg bg-slate-100">
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover"
              />
            </div>
          )}

          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-slate-900">
                About this project
              </h2>
              <p className="mt-4 whitespace-pre-line text-slate-600">
                {project.longDescription}
              </p>
            </div>

            <aside className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Technologies
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Links
                </h3>
                <div className="mt-3 flex flex-col gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      View on GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </article>
      </div>
    </div>
  )
}

export default ProjectDetail
