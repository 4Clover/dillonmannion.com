import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'genrefy',
    title: 'Genrefy',
    subtitle: 'Spotify Playlist Generator',
    description:
      'Create Spotify playlists by genre with a click of a button! Utilizes a custom trained model to analyze song waveforms.',
    longDescription: `Genrefy is a machine learning project that classifies music genres using audio analysis.

The project leverages Python, Librosa for audio processing, and TensorFlow for the neural network model. It connects to the Spotify API to create personalized playlists based on genre classification.

Key features include:
- Audio waveform analysis using Librosa
- Deep learning model trained on genre classification
- Spotify API integration for playlist creation
- Configurable genre preferences`,
    technologies: ['Python', 'TensorFlow', 'Librosa', 'Spotify API', 'scikit-learn'],
    image: null,
    github: null,
    live: null,
    featured: true,
  },
  {
    id: 'cafepillar',
    title: 'Cafepillar',
    subtitle: 'Coming Soon',
    description: 'A project currently in development. Stay tuned for updates!',
    longDescription: 'This project is currently under development. Check back soon for more details about what Cafepillar will offer.',
    technologies: [],
    image: null,
    github: null,
    live: null,
    featured: true,
  },
  {
    id: 'hair-salon',
    title: 'Hair Salon Demo',
    subtitle: 'Demo Website',
    description: 'A demonstration website for a hair salon business.',
    longDescription: 'A demo website showcasing what a modern hair salon website could look like, featuring appointment booking, service listings, and team introductions.',
    technologies: [],
    image: null,
    github: null,
    live: null,
    featured: false,
  },
  {
    id: 'primate-analysis',
    title: 'Primate Data Analysis',
    subtitle: 'Data Analysis Tool',
    description: 'A tool for analyzing primate behavior data.',
    longDescription: 'A specialized data analysis tool designed for processing and visualizing primate behavioral data, helping researchers gain insights from their observations.',
    technologies: [],
    image: null,
    github: null,
    live: null,
    featured: false,
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}
