
import { useState } from "react";
import styles from "./Navbar.module.css";


export const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleNavBar = () => {
      setIsOpen(!isOpen);
   }
   
   const list = [
      {name: "Home"},
      {name: "About"},
      {name: "Project"},
      {name: "Contact"}
   ]
   return(
      <header>
         <nav className={styles.parentComponent}>
            <h2 className={styles.name}>Jensen Omega</h2>
            <div className={styles.listContainer}>
               <ul className={styles.unstyledList}>
                  {/* <li>Home</li>
                  <li>About</li>
                  <li>Project</li>
                  <li>Contact</li> */}
                  {list.map((item, index) => (
                     <li className={styles.unstyledListOfList} key={index}>{item.name}</li>
                  ))}
               </ul>
            </div>
         </nav>
      </header>
   )
}