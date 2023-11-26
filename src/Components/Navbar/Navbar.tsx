import { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-scroll';


const NavLinks = () => {
  const list = [
    { name: "Home", ref: '/'},
    { name: "About", ref: 'about-me'},
    { name: "Project", ref: 'projects' },
    { name: "Contact", ref: 'contact' },
  ];
  return (
    <ul className='flex md:gap-5 text-base font-medium tracking-wide min-[320px]:flex-col md:flex-row mt-5 max-[600px]:text-xl max-[600px]:bg-[#121E27] max-[600px]:w-full z-10'>
      {list.map((item, index) => (
        <li className='hover:cursor:pointer p-5 hover:underline underline-offset-8 hover:decoration-[#FF715B] decoration-2 active:underline active:underline-offset-8 active:decoration-2 active:decoration-[#FF715B] focus:underline focus:underline-offset-8 focus:decoration-[#FF715B] focus:decoration-2' key={index}>
          <Link to={item.ref} spy={true} smooth={true} offset={-125} duration={500} className="hover:cursor-pointer" activeClass="active">{item.name}</Link>
          {/* <a href={item.ref} >{item.name}</a> */}
        </li>
      ))}
    </ul>
  );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="">
      <nav className='flex items-center bg-[#121E27] text-white w-full p-5 fixed max-[900px]:w-full z-10 text-center'>
        <h2 className='text-3xl font-bold tracking-wide cursor-pointer max-[640px]:pl-5 md:pl-8 lg:pl-32'>Jensen Omega</h2>
        <div className='hidden md:flex flex-row text-xl ml-auto md:pr-3 lg:pr-40'>
         <NavLinks />
        </div>
        <div className="md:hidden fixed right-10">
            <button onClick={() => toggleNavbar()}>
               {isOpen 
                  ? <FontAwesomeIcon icon={faTimes} className="text-3xl text-white"/>
                  : <FontAwesomeIcon icon={faBars} className="3xl"
                  />  
               }
            </button>
        </div>
        {isOpen && (
          <div className="min-[320px]:flex-col md:hidden w-full absolute top-[60px] left-0 right-0 bg-[#121E27] text-center h-full text-white">
              <NavLinks />
          </div>
        )}
      </nav>
    </header>
  );
};
