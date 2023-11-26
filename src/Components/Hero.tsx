
import ProfilePhoto from '../assets/ProfileCopy1.png';
import Period from '../assets/period.svg';
import Line from '../assets/Line 1.svg';
import BackgroundCircle from '../assets/Ellipse 13.svg';
import "./custom.css";


export const Hero = () => {
   return(
      <section 
      className="flex flex-col md:flex-row min-[368px]:flex-col md:gap-1 lg:gap-6 sm:pt-20 md:pt-0 min-[360px]:mt-20 md:mt-36 md:ml-5 lg:ml-0 fade-in"
      >
         <div className='flex flex-col max-[765px]:items-center '>
            <div className='flex min-[360px]:mt-2'>
               <h2 className='md:text-5xl min-[360px]:text-3xl font-bold' id='/'>Hello</h2>
               <div className='ml-[2px]'>
                  <img src={Period} alt="period" 
                  className='ml-1 min-[360px]:mt-[1.50rem] md:mt-8'/>
               </div>
            </div>
            <div className=' relative
            md:ml-24 lg:ml-2 p-4 min-[360px]:items-center lg:text-center
            min-[360px]:ml-0 min-[360px]:py-5
            '>
               <div className='absolute 
               md:-left-36 lg:-left-6 md:top-1 md:bottom-0 mt-10
               min-[360px]:left-2 min-[360px]:bottom-0 min-[360px]:top-6
               '>
                  <img src={Line} alt="line"
                  className=''/>
               </div>
               <h2 className=' md:text-3xl lg:text-5xl min-[360px]:text-3xl md:font-medium sm:font-light z-0'>Im Jensen</h2>
            </div>
            
            <h1 className='md:text-[3.25rem] lg:text-[55px] min-[360px]:text-4xl md:leading-[3rem] font-bold break-keep overflow-hidden min-[360px]:mt-5 md:mt-0 md:p-4' 
            >
               <span className='whitespace-no-wrap min-[360px]:whitespace-normal'>
                  Software Developer
               </span>
            </h1>
            <div className='flex md:gap-10 min-[360px]:gap-4 min-[360px]:mt-10 md:mt-6 lg:mt-10'>
               <div className='bg-[#FF715B] md:px-4 md:py-2 md:text-lg min-[360px]:px-6 min-[360px]:py-4 hover:bg-transparent hover:cursor-pointer
               '>
                  <a href="" className='font-Montserrat font-Inter font-sans text-lg'>Got A Project?</a>
               </div>
               <div className='md:px-4 md:py-2 border-[#FF715B] border-2 md:text-lg
               min-[360px]:px-6 min-[360px]:py-4 hover:bg-[#ff5b42] hover:cursor-pointer
               '>
                  <a href="" className='font-Montserrat font-Inter font-sans'>My Resume</a>
               </div>
            </div>
         </div>
         <div className='w-[350px] relative min-[360px]:mt-20 md:mt-10'>
            <div className={`circle absolute z-0`}>
               <img src={BackgroundCircle} alt="Profile Photo Background" 
               className=''/>
            </div>
            <div className='z-0 relative bottom-14 right-2'>
               <img src={ProfilePhoto} alt="Jensen's Profile Photo" 
               className='w-full h-full'
               />
            </div>
         </div>
      </section>
   )
}

