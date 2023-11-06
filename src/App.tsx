// import './App.css'

import { Footer } from "./Components/Footer/Footer"
import { Hero } from "./Components/Hero"
import { Navbar } from "./Components/Navbar/Navbar"
import { Projects } from "./Components/Projects/Projects"
import styles from './App.module.css';

function App() {

  return (
    <>
      <Navbar />
      <div style={{fontFamily: "Montserrat, Inter, sans-serif"}}
        className={styles.parentComponent}
      >
        <Hero />
        <Projects />
        <Footer />
      </div>
    </>
  )
}

export default App
