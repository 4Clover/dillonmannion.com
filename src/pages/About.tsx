function About() {
  return (
    <div className="py-16">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-slate-900">About Me</h1>

          <div className="mt-8 space-y-6 text-slate-600">
            <p>
              Hello! I'm Dillon Mannion, a developer with a passion for building
              software that makes a difference. I enjoy working on projects that
              challenge me to learn new technologies and solve interesting
              problems.
            </p>

            <p>
              My interests span across various areas of software development,
              from machine learning and data analysis to web development and
              user experience design.
            </p>
          </div>

          <section className="mt-12">
            <h2 className="text-xl font-semibold text-slate-900">Skills</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                'Python',
                'TypeScript',
                'React',
                'Node.js',
                'Machine Learning',
                'TensorFlow',
                'Git',
                'SQL',
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-xl font-semibold text-slate-900">
              Get in Touch
            </h2>
            <p className="mt-4 text-slate-600">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="mailto:hello@example.com"
                className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
              >
                Email Me
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:bg-slate-50"
              >
                GitHub
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About
