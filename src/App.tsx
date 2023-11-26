// import './App.css'

import { AboutMe } from "./Components/AboutMe"
import { Contact } from "./Components/Contact"
import { Footer } from "./Components/Footer"
import { Hero } from "./Components/Hero"
import { Navbar } from "./Components/Navbar/Navbar"
import { Projects } from "./Components/Projects"

function App() {

  // !design animation fade in-out
  // !hook up scroll wheel when clciked navbar framework
  // !finish mapping and abstract links
  // !add resume button in hero page
  // !abstract the project and contact page
  // !add video links to the projects

  
  return (
    <div className="bg-[#121E27]">
      <Navbar />
      <div 
        className={'font-Montserrat font-Inter font-sans flex flex-col items-center min-h-screen p-5 bg-[#121E27] text-white min-[320px]:px-8 sm:pt-20 md:pt-10'}
      >
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>

    
  )
}

export default App
