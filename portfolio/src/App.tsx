import { Github, Mail, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Minishell",
    description:
      "A mini replica of bash with command parsing and execution.",
    link: "https://github.com/giopiro99/minishell",
  },
  {
    title: "Philosophers",
    description:
      "Dining philosophers simulation using threads and semaphores.",
    link: "https://github.com/giopiro99/Philosophers",
  },
  {
    title: "Push_swap",
    description:
      "Sorting algorithm with a minimal set of moves.",
    link: "https://github.com/giopiro99/pushswap",
  },
  {
    title: "So_long",
    description:
      "A small 2D game in C with basic graphics.",
    link: "https://github.com/giopiro99/so_long",
  },
]

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 p-8">
      <section className="max-w-4xl mx-auto mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          👋 Hi, I'm Giovanni Pirozzi
        </motion.h1>
        <p className="text-lg mb-2">
          🎓 Student at <a href="https://42firenze.it/" className="underline">42 Firenze</a>
        </p>
        <p className="text-lg mb-2">
          🎯 Mastery tracks: Artificial Intelligence & Cybersecurity (upcoming)
        </p>
        <p className="text-lg">
          💡 Passionate about algorithms, C, bash scripting, and AI projects applied to finance.
        </p>
        <div className="flex gap-4 mt-4">
          <a href="mailto:giovannipirozzi12345@gmail.com" aria-label="Email">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/giovannipirozzi99" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/giopiro99" aria-label="GitHub">
            <Github className="w-6 h-6" />
          </a>
        </div>
      </section>

      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">🚀 Highlight Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm mb-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline text-sm"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

