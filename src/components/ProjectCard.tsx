import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  githubLink,
  demoLink,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#2D3748] rounded-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105"
    >
      <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-[#2563EB] to-[#9333EA] bg-clip-text text-transparent">
        {title}
      </h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-[#1A202C] rounded-full text-sm text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
        )}
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <ExternalLink size={20} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;