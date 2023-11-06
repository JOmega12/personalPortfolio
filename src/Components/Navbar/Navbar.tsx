import { useState } from "react";
import styles from "./Navbar.module.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const NavLinks = () => {
  const list = [
    { name: "Home" },
    { name: "About" },
    { name: "Project" },
    { name: "Contact" },
  ];
  return (
    <ul className={styles.unstyledList}>
      {/* <li>Home</li>
                  <li>About</li>
                  <li>Project</li>
                  <li>Contact</li> */}
      {list.map((item, index) => (
        <li className={styles.unstyledListOfList} key={index}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

//   might have to put in for mobile for tailwind

  return (
    <header>
      <nav className={styles.parentComponent}>
        <h2 className={styles.name}>Jensen Omega</h2>
        <div className={styles.listContainer}>
         <NavLinks />
        </div>
        <div className={styles.mobile}>
            <button onClick={() => toggleNavBar()}>
            {isOpen
               ? <FontAwesomeIcon icon={faTimes} />
               : <FontAwesomeIcon icon={faBars} />
            }
            </button>
         </div>
      </nav>
    </header>
  );
};
