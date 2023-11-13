import verticalLine from '../assets/verticalLine.svg';
import dot from '../assets/period.svg';
import WelcomeCoffeeImage from '../assets/ProjectImages/welcomeCoffeeImage.png';
import MovieTitlesImage from '../assets/ProjectImages/movietitles2.png';


export const Projects = () => {
// ** mc: #ff715b
   
   const projectInfo= [
      { skills: ['HTML/CSS', 'Tailwind', 'Typescript', 'Javascript', 'React-Router'], name: 'WelcomeCoffee', description: 'This project utilizes various technologies to enable users to create personalized coffee ingredients. Upon logging in, users can access their favorite coffee data. It applies React and JavaScript concepts, from abstracting components to managing data structures. Additionally, it establishes a JSON server to generate an API for tracking user favorites and login details.', image: WelcomeCoffeeImage,},
      // { skills: ['HTML/CSS', 'Javascript'], name: 'Ecommerce Website', description: '', image: '',},
      // { skills: ['HTML/CSS', 'Node.Js', 'Javascript'], name: 'Battleship', description: 'Used Javascript to implement basic data structures through the game of Battleship. Used a terminal to display ships and tracked where ships are hit or missed with the help of Node.js', image: '',},
      { skills: ['HTML/CSS', 'Node.Js', 'Javascript'], name: 'Movie Titles API', description: 'Uses a public movie API to build a collection movie list that sorts from A to Z or vice versa. It also counts how many movies in each container and adds user\'s favorite movies into another container', image: MovieTitlesImage,},
      // { skills: ['HTML/CSS', '', 'Javascript'], name: 'Javascript Calculator', description: 'Uses simple algorithm concepts in Javascript to produce an arithmetic result in a terminal', image: '',},

   ]
   return(
      <section className="min[360px]:px-4 md:px-10 lg:px-16">
         <div className='m-10 mb-20'>
            <h1 className="text-[53px] font-bold mb-16 text-center">Projects</h1>
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
         <img src="../assets/ProjectImages/movietitles2.png" alt="" />
         {/* need to map all the items */}


         {projectInfo.map((item, index) => (   
            <div key={index} className={`flex min-[360px]:flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} gap-20 m-20`}>
               <div className=''>
                  <h2 className='text-3xl font-semibold mb-10'>{item.name}</h2>
                  <ul className="skills flex min-[360px]:flex-col md:flex-row gap-3 mb-5 flex-wrap">
                     {item.skills.map((element, index) => (
                     <li key={index} className='bg-[#1F2D37] px-2 py-1 border-2 rounded-2xl flex justify-center items-center border-gray-700 hover:border-[#81A4A6]'>{element}</li>
                     ))}
                  </ul>
                  <p className='text-base md:leading-7 mb-4'>{item.description}</p>
                  <div className='flex flex-row gap-8'>
                     <button className='bg-[#FF715B] px-4 py-2'>View Github</button>
                     <button className=' px-4 py-2 underline underline-offset-8 decoration-[#FF715B]'>View Project</button>
                  </div>
               </div>
               <div>
                  <div className="rectangle"></div>
                  <div className='w-[350px] h-[340px]'>                     
                     <img src={item.image} alt="WelcomeCoffee website image" 
                     className='w-full h-full'
                     />
                  </div>
               </div>
            </div>
         ))}
      </section>
   )
}