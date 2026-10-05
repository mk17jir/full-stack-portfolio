import { useState } from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const App = () => {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div
      className={
        darkMode
          ? "dark min-h-screen"
          : "min-h-screen"
      }
    >
      <div className="min-h-screen bg-white text-zinc-950 transition-colors dark:bg-zinc-950 dark:text-white">
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
