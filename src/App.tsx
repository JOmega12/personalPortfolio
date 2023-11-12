// import './App.css'

import { Footer } from "./Components/Footer/Footer"
import { Hero } from "./Components/Hero"
import { Navbar } from "./Components/Navbar/Navbar"
import { Projects } from "./Components/Projects/Projects"
import styles from './App.module.css';

function App() {

  // !Rework navbar in mobile
  // !work on hero for mobile
  return (
    <div className="bg-[#121E27]">
      <Navbar />
      <div 
      // style={{fontFamily: "Montserrat, Inter, sans-serif"}}
      // className={styles.parentComponent}
        // className={`font-Montserrat font-Inter font-sans ${styles.parentComponent}`}
        className={'font-Montserrat font-Inter font-sans flex flex-col items-center justify-center min-h-screen p-5 bg-[#121E27] text-white min-[320px]:px-8 sm:pt-20 md:pt-10'}
      >
        <Hero />
        <Projects />
        <Footer />
      </div>
    </div>

    
  )
}

export default App
