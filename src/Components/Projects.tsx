import verticalLine from '../assets/verticalLine.svg';
import dot from '../assets/period.svg';

export const Projects = () => {
// ** mc: #ff715b
   
   const projectInfo= [
      { skills: ['HTML/CSS', 'Tailwind', 'Typescript', 'Javascript'], name: 'WelcomeCoffee', description: '', IMG: '',},
      

   ]
   return(
      <section className="min[360px]:px-4 md:px-10 lg:px-20">
         <div className='m-10 mb-20'>
            <h1 className="text-[53px] font-bold mb-16">Projects</h1>
            <div className='flex flex-col justify-center gap-2'>
               <div className="line">
                  <img src={verticalLine} alt="Vertical Line" 
                  className='w-full h-[60px]'
                  />
               </div>
               <div className="circle">
                  <img src={dot} alt="Dot" 
                  className='w-full h-[10px]'
                  />
               </div>
            </div>
         </div>

         {/* need to map all the items */}
         <div>
            <div>
               <h2></h2>
               <ul className="skills">
                  <li></li>
               </ul>
               <p></p>
               <button>View Github</button>
               <button>View Project</button>
            </div>
            <div>
               <div className="rectangle"></div>
               <img src="" alt="" />
            </div>
         </div>
      </section>
   )
}