import { Skills } from "./Skills"

export const AboutMe = () => {

   return(
      <section className=" flex flex-col flex-wrap
      min[360px]:px-4 md:px-10 lg:px-20 mb-5">
         <h1 className="text-5xl font-bold text-center mb-8 decoration-[#ff715b]
         underline underline-offset-8
         ">About Me</h1>
         <div className="min-[360px]:text-center md:text-left min-[360px]:px-6 md:px-18 text-xl min-[360px]:mb-2 md:mb-0">
            <p className="min-[360px]:leading-relaxed md:leading-loose">I started my software journey from photography. Through that, I learned to love the process of creating from scratch. Since then, this has led me to software development as it fulfills my love for learning and building things.</p>
         </div>
         <Skills />
      </section>
   )
}