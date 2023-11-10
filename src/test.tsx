

// !!THIS COMPONENT IS FOR TESTING OTHER DESIGNS/ CODE

export const Test = () => {

   return(
      export const Hero = () => {
         //  !need to work on circle shadow behind profile photo
            return(
               <div className="flex flex-row md:flex-row min-[368px]:flex-col gap-32">
                  <div className=''>
                     <div className='flex'>
                        <h2 className='text-5xl font-bold'>Hello</h2>
                        <div className='ml-[2px]'>
                           <img src={Period} alt="period" 
                           className='ml-1 mt-8'/>
                        </div>
                     </div>
         
                     <div className='flex flex-row relative 
                     ml-24 p-4
                     '>
                        <div className='absolute -left-36 top-1 bottom-0 mt-10'>
                           <img src={Line} alt="line"
                           className=''/>
                        </div>
                        <h2 className='text-5xl font-medium'>Im Jensen</h2>
                     </div>
                     
                     <h1 className='text-[55px] font-size font-bold break-keep overflow-hidden' style={{ whiteSpace: 'nowrap' }}>Software Developer</h1>
                     {/* might be better to create a custom button with all the css */}
                     <div className='flex gap-10 mt-10'>
                        <div className='bg-[#FF715B] px-4 py-2 text-lg'>
                           <a href="" className='text-lg'>Got A Project?</a>
                        </div>
                        <div className='px-8 py-2 text-lg border-[#FF715B] border-2'>
                           <a href="" className=''>Contact</a>
                        </div>
                     </div>
                  </div>
                  <div className='w-[350px] relative'>
                     <div className={`circle absolute z-0 `}>
                     {/* <div className={styles.backgroundSmoke}></div> */}
                        <img src={BackgroundCircle} alt="Profile Photo Background" 
                        className=''/>
                     </div>
                     <div className='z-10 relative bottom-14 right-2'>
                        <img src={ProfilePhoto} alt="Jensen's Profile Photo" 
                        className='w-full h-full'
                        />
                     </div>
                  </div>
               </div>
            )
         }
         
   )
}



// the bottom is the new updated that i might want to go back
<ul className='flex md:gap-5 text-base font-medium tracking-wide min-[320px]:flex-col md:flex-row mt-5 max-[600px]:text-xl max-[600px]:bg-[#121E27] max-[600px]:w-full z-10'>
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
      <nav className='flex items-center bg-[#121E27] text-white w-full pt-5 fixed max-[900px]:w-full max-[900px]:pb-5 z-10'>
        <h2 className='text-3xl font-bold tracking-wide cursor-pointer w -full max-[640px]:pl-5 md:pl-3'>Jensen Omega</h2>
        <div className='hidden md:flex flex-row justify-between gap-4 text-xl ml-auto'>
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
          <div className="min-[320px]:flex-col md:hidden w-full absolute top-[77px] left-0 right-0 bg-[#121E27] text-center h-full text-white">
              <NavLinks />
          </div>
        )}
      </nav>
    </header>