import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-125 w-125 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px] dark:bg-violet-600/20" />

      <div className="mx-auto max-w-7xl px-4 py-28 sm:py-36 lg:py-44">
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-2 w-2 rounded-full bg-green-500" />

              <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Available for freelance work
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-4xl text-5xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-6xl lg:text-7xl"
            >
              I build digital
              <span className="block text-violet-600 dark:text-violet-500">
                experiences.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400"
            >
              I'm a frontend developer specializing in React and modern web
              technologies. I turn ideas and designs into fast, responsive, and
              intuitive interfaces.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-lg bg-violet-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-violet-600/20 transition hover:bg-violet-500"
              >
                View my work
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-lg border border-zinc-200 px-5 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-white/10 dark:text-zinc-300 dark:hover:bg-white/5"
              >
                Let's talk
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex items-center gap-5"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-10 flex items-center gap-3"
              >
                <motion.a
                  href="https://github.com/mk17jir"
                  aria-label="GitHub"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 transition-colors hover:border-zinc-300 hover:bg-zinc-100 hover:text-zinc-950 dark:border-white/10 dark:text-zinc-400 dark:hover:border-white/20 dark:hover:bg-white/5 dark:hover:text-white"
                >
                  <FaGithub size={19} />
                </motion.a>

                
              </motion.div>
            </motion.div>
          </div>

          {/* Right side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto aspect-square max-w-sm">
              {/* Decorative border */}
              <div className="absolute inset-0 rotate-6 rounded-3xl border border-violet-500/20" />

              <div className="absolute inset-0 -rotate-3 rounded-3xl border border-zinc-200 dark:border-white/10" />

              {/* Main card */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.02,
                  y: -10,
                }}
                className="absolute inset-4 flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 shadow-2xl shadow-violet-500/10 dark:border-white/10 dark:bg-zinc-900"
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 10px 30px rgba(124, 58, 237, 0.15)",
                      "0 15px 45px rgba(124, 58, 237, 0.35)",
                      "0 10px 30px rgba(124, 58, 237, 0.15)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-violet-600 text-3xl font-bold text-white"
                >
                  MF
                </motion.div>

                <p className="font-semibold text-zinc-950 dark:text-white">
                  Frontend Developer
                </p>

                <p className="mt-2 text-sm text-zinc-500">
                  React · JavaScript · Tailwind
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-zinc-400 transition hover:text-violet-500 lg:block"
        aria-label="Scroll to About section"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
