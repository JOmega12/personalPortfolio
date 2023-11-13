import { Skills } from "./Skills"
// import AboutMeLine from '../assets/Line 1.svg';

// ** mc: #ff715b
export const AboutMe = () => {

   return(
      <div className=" flex flex-col
      min[360px]:px-20 flex-wrap">
         <div className="relatve">
         <h1 className="text-5xl font-bold text-center mb-8 decoration-[#ff715b]
         underline underline-offset-8
         ">About Me</h1>
         </div>
         <div className="text-left px-40 text-xl">
            <p>I started my software journey from photography. Through that, I learned to love the process of creating from scratch. Since then, this has led me to software development as it fulfills my love for learning and building things.</p>
         </div>
         <Skills />
      </div>
   )
}