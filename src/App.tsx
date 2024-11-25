import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, FileText, Palette } from 'lucide-react';
import About from './components/About';
import Footer from './components/Footer';

const projects = [
  {
    title: "Color Blind Simulator",
    description: "Simulator that processes images by applying a specific method to simulate how individuals with different types of color blindness perceive colors",
    techStack: ["JavaScript", "Bootstrap", "HTML", "CSS"],
    github: "https://github.com/mayurmundankar/Color-Blind-Simulator",
    live: "https://color-blind-simulator.vercel.app"
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat application with AI-powered responses",
    techStack: ["Next.js", "OpenAI", "Socket.io", "TypeScript"],
    github: "https://github.com/mayurmundankar/ai-chat",
    live: "https://your-ai-chat.com"
  },
  {
    title: "Perfect Guess Game",
    description: " The game challenges users to guess a randomly generated number between 1 and 100, providing real-time feedback and tracking attempts",
    techStack: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/mayurmundankar/Perfect-Guess-Game",
    live: "https://perfect-guess-game.vercel.app"
  }
];

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Animated gradient background */}
      <div className="absolute inset-0 w-full h-full bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#3a0647_0%,_#1b0425_29%,_#000000_100%)] opacity-70">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_600px,_#4f1c67_0%,_transparent_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_600px,_#1c4f67_0%,_transparent_100%)]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <nav className="fixed w-full bg-black/20 backdrop-blur-sm border-b border-white/10 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-white font-bold text-xl"
              >
                Mayur.M
              </motion.div>
              <div className="flex space-x-4">
                <SocialLink href="mailto:mayurworkplace@gmail.com" icon={<Mail className="w-5 h-5" />} />
                <SocialLink href="https://github.com/mayurmundankar" icon={<Github className="w-5 h-5" />} />
                <SocialLink href="https://linkedin.com/in/mayurmundankar" icon={<Linkedin className="w-5 h-5" />} />
                <SocialLink href="https://mayurmundankar.framer.ai" icon={<Palette className="w-5 h-5" />} />
                <SocialLink href="https://drive.google.com/your-resume" icon={<FileText className="w-5 h-5" />} />
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
                Frontend Developer
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Passionate about creating beautiful, functional, and user-friendly applications
                that solve real-world problems.
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

const SocialLink = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="text-white/80 hover:text-white transition-colors"
  >
    {icon}
  </motion.a>
);

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
  >
    <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
    <p className="text-gray-300 mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-6">
      {project.techStack.map((tech, i) => (
        <span
          key={i}
          className="px-3 py-1 text-sm bg-purple-500/20 text-purple-200 rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="flex justify-between items-center">
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors"
      >
        <ExternalLink className="w-4 h-4" />
        Live Demo
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors"
      >
        <Github className="w-4 h-4" />
        View Code
      </motion.a>
    </div>
  </motion.div>
);

export default App;
