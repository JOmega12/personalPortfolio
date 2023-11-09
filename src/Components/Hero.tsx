
import ProfilePhoto from '../assets/ProfileCopy1.png';
import Period from '../assets/period.svg';
import Line from '../assets/Line 1.svg';
import BackgroundCircle from '../assets/Ellipse 13.svg';
// import styles from './Hero.module.css';

export const Hero = () => {
//  !need to work on circle shadow behind profile photo
   return(
      <div className="flex flex-col md:flex-row min-[368px]:flex-col gap-6 md:gap-32">
         <div className='flex flex-col max-[900px]:justify-center max-[900px]:items-center'>
            <div className='flex max-[900px]:items-center min-[360px]:mt-8'>
               <h2 className='md:text-5xl min-[360px]:text-3xl font-bold '>Hello</h2>
               <div className='ml-[2px]'>
                  <img src={Period} alt="period" 
                  className='ml-1 mt-8'/>
               </div>
            </div>

            {/* the reason why the navbar goes over because it becomes the relative, how do I stop the Im Jensen from going over the navbar styling? And How do I get the navbar to be full height of the screen? */}
            <div className=' relative
            md:ml-24 p-4 min-[360px]:items-center min-[360px]:text-center
            min-[360px]:ml-0 min-[360px]:py-5
            '>
               <div className='absolute 
               md:-left-36  md:top-1 md:bottom-0 mt-10
               min-[360px]:left-2 min-[360px]:bottom-0 min-[360px]:top-6
               '>
                  <img src={Line} alt="line"
                  className=''/>
               </div>
               <h2 className='md:text-5xl min-[360px]:text-3xl md:font-medium sm:font-light z-0'>Im Jensen</h2>
            </div>
            
            <h1 className='md:text-[55px] min-[360px]:text-3xl font-size font-bold break-keep overflow-hidden' 
            >
               <span className='whitespace-no-wrap min-[360px]:whitespace-normal'>
                  Software Developer
               </span>
            </h1>
            {/* might be better to create a custom button with all the css */}
            <div className='flex md:gap-10 min-[360px]:gap-4 mt-10'>
               <div className='bg-[#FF715B] md:px-4 md:py-2 md:text-lg
                  min-[360px]:px-6 min-[360px]:py-4 
               '>
                  <a href="" className='font-Montserrat font-Inter font-sans text-lg'>Got A Project?</a>
               </div>
               <div className='md:px-8 md:py-2 border-[#FF715B] border-2 md:text-lg
               min-[360px]:px-12 min-[360px]:py-4
               '>
                  <a href="" className='font-Montserrat font-Inter font-sans'>Contact</a>
               </div>
            </div>
         </div>
         <div className='w-[350px] relative mt-10'>
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

