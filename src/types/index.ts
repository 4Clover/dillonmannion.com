export interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  technologies: string[]
  image: string | null
  github: string | null
  live: string | null
  featured: boolean
}
