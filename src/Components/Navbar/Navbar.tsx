import { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const NavLinks = () => {
  const list = [
    { name: "Home", ref: '/'},
    { name: "About", ref: 'about'},
    { name: "Project", ref: 'project' },
    { name: "Contact", ref: 'contact' },
  ];
  return (
    <ul className='flex gap-5 text-base font-medium tracking-wide min-[320px]:flex-col md:flex-row mt-5 max-[600px]:text-xl'>
      {/* you need the id for the specific site then be able to click on it */}
      {list.map((item, index) => (
        <li className='cursor:pointer p-5 hover:underline underline-offset-8 hover:decoration-[#FF715B] decoration-2' key={index}>
          <a href={item.ref} >{item.name}</a>
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
    <header>
      <nav className='flex justify-between items-center bg-[#121E27] text-white w-full pt-5 '>
        <h2 className='text-3xl font-bold tracking-wide cursor-pointer w -full max-[640px]:pl-5 md:pl-3'>Jensen Omega</h2>
        <div className='hidden md:flex flex-row justify-between gap-4 text-xl'>
         <NavLinks />
        </div>
        <div className="md:hidden">
            <button onClick={() => toggleNavbar()}>
               {isOpen 
                  ? <FontAwesomeIcon icon={faTimes} className="text-3xl text-white"/>
                  : <FontAwesomeIcon icon={faBars} className="3xl"
                  />  
               }
            </button>
        </div>
        {isOpen && (
          <div className="min-[320px]:flex-col md:hidden w-full absolute top-[77px] left-0 right-0 bg-[#121E27] text-center h-full text-white">
              <NavLinks />
          </div>
        )}
      </nav>
    </header>
  );
};
