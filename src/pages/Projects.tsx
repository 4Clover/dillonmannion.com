import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  return (
    <div className="py-16">
      <div className="container">
        <header className="mb-12">
          <h1 className="text-3xl font-bold text-slate-900">Projects</h1>
          <p className="mt-4 text-lg text-slate-600">
            A collection of my work and experiments. Each project represents
            a unique challenge and learning opportunity.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
