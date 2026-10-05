import { motion } from "framer-motion"
import { Code2, Palette, Rocket } from "lucide-react"
import AnimatedSection from "./AnimatedSection"

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "I care about writing maintainable, reusable, and easy-to-understand code.",
  },
  {
    icon: Palette,
    title: "Thoughtful UI",
    description:
      "I enjoy turning designs and ideas into interfaces that feel intuitive and polished.",
  },
  {
    icon: Rocket,
    title: "Always Learning",
    description:
      "I'm constantly exploring new tools and techniques to become a better developer.",
  },
]

const About = () => {
  return (
    <AnimatedSection
      id="about"
      className="border-t border-zinc-200 dark:border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 py-24">

        {/* Heading */}
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

          <div>
            <p className="text-sm font-medium text-violet-600 dark:text-violet-400">
              About me
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
              More than just
              <span className="block text-zinc-400 dark:text-zinc-600">
                writing code.
              </span>
            </h2>
          </div>

          {/* Story */}
          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
              I'm a frontend developer who enjoys building digital
              experiences that are simple, useful, and enjoyable to use.
            </p>

            <p className="mt-5 leading-7 text-zinc-600 dark:text-zinc-400">
              My main focus is React and modern frontend development.
              I enjoy taking an idea from a rough concept to a polished,
              responsive interface that works across devices.
            </p>

            <p className="mt-5 leading-7 text-zinc-600 dark:text-zinc-400">
              When I'm not coding, I'm usually learning something new,
              experimenting with UI ideas, or looking for ways to improve
              how I build things.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition-colors dark:border-white/10 dark:bg-white/2"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
                  <Icon size={20} />
                </div>

                <h3 className="font-semibold text-zinc-950 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </AnimatedSection>
  )
}

export default About
