// import './App.css'

import { AboutMe } from "./Components/AboutMe"
import { Footer } from "./Components/Footer/Footer"
import { Hero } from "./Components/Hero"
import { Navbar } from "./Components/Navbar/Navbar"
import { Projects } from "./Components/Projects"

function App() {

  return (
    <div className="bg-[#121E27]">
      <Navbar />
      <div 
        className={'font-Montserrat font-Inter font-sans flex flex-col items-center min-h-screen p-5 bg-[#121E27] text-white min-[320px]:px-8 sm:pt-20 md:pt-10'}
      >
        <Hero />
        <AboutMe />
        <Projects />
        <Footer />
      </div>
    </div>

    
  )
}

export default App
