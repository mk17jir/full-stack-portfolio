import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between"
        >
          {/* Brand */}
          <div>
            <motion.a
              href="/"
              whileHover={{ scale: 1.02 }}
              className="text-xl font-bold text-zinc-950 dark:text-white"
            >
              Mohamed Faisal<span className="text-violet-500">.</span>
            </motion.a>

            <p className="mt-2 text-sm text-zinc-500">
              Building thoughtful digital experiences.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <motion.a
              href="https://github.com/mk17jir"
              aria-label="GitHub"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 transition-colors hover:border-zinc-300 hover:bg-zinc-100 hover:text-zinc-950 dark:border-white/10 dark:text-zinc-400 dark:hover:border-white/20 dark:hover:bg-white/5 dark:hover:text-white"
            >
              <FaGithub size={18} />
            </motion.a>

            

            {/* Back to top */}
            <motion.a
              href="#"
              aria-label="Back to top"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600 text-white transition-colors hover:bg-violet-500"
            >
              <ArrowUp size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10 border-t border-zinc-200 pt-6 dark:border-white/10"
        >
          <p className="text-center text-xs text-zinc-500">
            © {new Date().getFullYear()} Mohamed Faisal. All rights reserved.
          </p>
        </motion.div>

      </div>
    </footer>
  )
}

export default Footer
