import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon, Menu, X } from "lucide-react"

const Navbar = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="border-b border-zinc-200 dark:border-white/10 "
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

        {/* Logo */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="text-xl font-bold text-zinc-950 dark:text-white"
        >
          Mohamed Faisal <span className="text-violet-500">.</span>
        </motion.a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <motion.a
            href="#about"
            whileHover={{ y: -2 }}
            className="text-sm text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
          >
            About
          </motion.a>

          <motion.a
            href="#projects"
            whileHover={{ y: -2 }}
            className="text-sm text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
          >
            Projects
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ y: -2 }}
            className="text-sm text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
          >
            Contact
          </motion.a>

          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setDarkMode((current) => !current)}
            className="rounded-lg border border-zinc-200 p-2 text-zinc-600 transition-colors hover:bg-zinc-100 dark:border-white/10 dark:text-zinc-400 dark:hover:bg-white/5 cursor-pointer"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </motion.button>

        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">

          <motion.button
            type="button"
            whileTap={{ scale: 0.9 }}
            onClick={() => setDarkMode((current) => !current)}
            className="rounded-lg border border-zinc-200 p-2 text-zinc-600 dark:border-white/10 dark:text-zinc-400"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </motion.button>

          <motion.button
            type="button"
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen((current) => !current)}
            className="rounded-lg border border-zinc-200 p-2 text-zinc-600 dark:border-white/10 dark:text-zinc-400 cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </motion.button>

        </div>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-zinc-200 dark:border-white/10 md:hidden "
          >
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-4 px-4 py-5"
            >
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-zinc-600 dark:text-zinc-400"
              >
                About
              </a>

              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-zinc-600 dark:text-zinc-400"
              >
                Projects
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-zinc-600 dark:text-zinc-400"
              >
                Contact
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
