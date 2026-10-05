import AnimatedSection from "./AnimatedSection";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <AnimatedSection
      id="projects"
      className="border-t border-zinc-200 dark:border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-violet-600 dark:text-violet-400">
            Selected work
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
            Things I've built.
          </h2>

          <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
            A selection of projects where I explored ideas, solved problems, and
            experimented with modern frontend technologies.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-5 cursor-pointer">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;
