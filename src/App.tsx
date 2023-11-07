// import './App.css'

import { Footer } from "./Components/Footer/Footer"
import { Hero } from "./Components/Hero"
import { Navbar } from "./Components/Navbar/Navbar"
import { Projects } from "./Components/Projects/Projects"
import styles from './App.module.css';

function App() {

  return (
    <div className="min-[320px]:px-8 lg:px-32 bg-[#121E27]">
      <Navbar />
      <div 
      // style={{fontFamily: "Montserrat, Inter, sans-serif"}}
      // className={styles.parentComponent}
        className={`font-Montserrat font-Inter font-sans ${styles.parentComponent}`}
      >
        <Hero />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}

export default App
