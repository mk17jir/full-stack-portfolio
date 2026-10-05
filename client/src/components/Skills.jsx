import { motion } from "framer-motion"
import { Code2, Wrench } from "lucide-react"

import AnimatedSection from "./AnimatedSection"
import { skillGroups } from "../data/skills"

const icons = {
  Frontend: Code2,
  Tools: Wrench,
}

const Skills = () => {
  return (
    <AnimatedSection
      className="border-t border-zinc-200 dark:border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 py-24">

        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-violet-600 dark:text-violet-400">
            Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
            Tools I use to bring ideas to life.
          </h2>

          <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">
            A collection of technologies and tools I use to design,
            develop, and ship modern web experiences.
          </p>
        </div>

        {/* Groups */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, groupIndex) => {
            const Icon = icons[group.title]

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: groupIndex * 0.1,
                }}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-white/10 dark:bg-white/2"
              >
                {/* Group header */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
                    <Icon size={20} />
                  </div>

                  <h3 className="font-semibold text-zinc-950 dark:text-white">
                    {group.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="mt-6 flex flex-wrap gap-2 cursor-pointer">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ y: -2 }}
                      className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-600 transition-colors hover:border-violet-300 hover:text-violet-600 dark:border-white/10 dark:bg-white/3 dark:text-zinc-400 dark:hover:border-violet-500/40 dark:hover:text-violet-400"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </AnimatedSection>
  )
}

export default Skills
