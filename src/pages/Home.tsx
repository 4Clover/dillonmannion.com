import { Link } from 'react-router'
import { getFeaturedProjects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

function Home() {
  const featuredProjects = getFeaturedProjects()

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Hi, I'm Dillon Mannion
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              A developer passionate about creating meaningful software.
              Explore my projects and learn more about what I do.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link
                to="/projects"
                className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
              >
                View Projects
              </Link>
              <Link
                to="/about"
                className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:bg-slate-50"
              >
                About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">
              Featured Projects
            </h2>
            <Link
              to="/projects"
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
