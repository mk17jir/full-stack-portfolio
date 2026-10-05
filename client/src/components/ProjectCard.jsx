import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="group overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-white/10 dark:bg-white/2"
    >
      {/* Project preview */}
      <div className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-medium text-zinc-400">
           <img src={project.image} alt={project.title} />
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-violet-600/0 transition-colors duration-300 group-hover:bg-violet-600/10" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
            {project.title}
          </h3>

          <motion.div
            initial={{ opacity: 0, x: -5 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="text-violet-600 dark:text-violet-400"
          >
            <ArrowUpRight size={18} />
          </motion.div>
        </div>

        <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-zinc-200 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-white/5 dark:text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 flex items-center gap-3">
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-10 items-center gap-2 rounded-lg bg-violet-600 px-4 text-sm font-medium text-white transition-colors hover:bg-violet-500"
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </motion.a>

          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-10 items-center gap-2 rounded-lg border border-zinc-200 px-4 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-white/10 dark:text-zinc-300 dark:hover:bg-white/5"
          >
            <FaGithub size={17} />
            <span>GitHub</span>
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
