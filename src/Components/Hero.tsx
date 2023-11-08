
import ProfilePhoto from '../assets/ProfileCopy1.png';
import Period from '../assets/period.svg';
import Line from '../assets/Line 1.svg'
// import styles from './Hero.module.css';

export const Hero = () => {

   return(
      <div className="flex flex-row md:flex-row min-[368px]:flex-col gap-10 ">
         <div className='w-full'>

            <div className='flex'>
               <h2 className='text-5xl font-bold'>Hello</h2>
               <div className='ml-[2px]'>
                  <img src={Period} alt="period" 
                  className='ml-1 mt-8'/>
               </div>
            </div>

            <div className='flex flex-row w-full relative ml-24 p-10'>
               <div className='absolute -left-40 top-5 bottom-0 mt-10'>
                  <img src={Line} alt="line"
                  className=''/>
               </div>
               <h2 className='text-5xl font-medium'>Im Jensen</h2>
            </div>
            
            <h1 className='text-[55px] font-size font-bold break-keep w-full overflow-hidden'>Software Developer</h1>
            {/* might be better to create a custom button with all the css */}
            <button>Got A Project?</button>
            <button>Contact</button>
         </div>
         <div className='w-full'>
            <div className="Circle"></div>
            <div className='w-full h-full'>
               <img src={ProfilePhoto} alt="Jensen's Profile Photo" 
               className='w-full h-full'
               />
            </div>
         </div>
      </div>
   )
}

