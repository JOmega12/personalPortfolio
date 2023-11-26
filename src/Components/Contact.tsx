import { FormEvent, useState } from "react"


// type ContactT = {
//    name: string;
//    email: string;
//    message: string;
// }

export const Contact = () => {

   const [nameInput, setNameInput] = useState('');
   const [emailInput, setEmailInput] = useState('');
   const [messageInput, setMessageInput] = useState('');

   const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
   }


   return(
      <>
         <section className="pb-10">
            <h2 className="text-5xl font-semibold text-center underline underline-offset-[12px] pb-14 decoration-[#FF715B]">Contact</h2>  
            <form className="parent flex md:flex-row min-[360px]:flex-col min-[360px]:gap-10 md:gap-40" onSubmit={(e) => onSubmit(e)}>
               <div className="leftSide w-full">
                  <div className="min-[360px]:text-3xl md:text-[53px] font-bold pb-5 min-[360px]:text-center md:text-left md:leading-normal">
                     <h2 className="">Have a project?</h2>
                     <h2>Let's Talk!</h2>
                  </div>
                  <div className="min-[360px]:text-center md:text-left">
                     <button className="bg-[#FF715B] py-2 px-4 hover:bg-[#ff5b42]">Submit</button>
                  </div>
               </div>   
               <div className="rightSide w-full">
                  <div>
                     <div className="flex flex-col py-2 gap-2">
                        <label htmlFor="">Name</label>
                        <input type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)} className="text-black p-1"/>
                     </div>
                     <div className="flex flex-col py-2 gap-2">
                        <label htmlFor="">Email</label>
                        <input type="text" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} className="text-black p-1"/>
                     </div>
                     <div className="flex flex-col py-2 gap-2">
                        <label htmlFor="">Message</label>
                        <textarea value={messageInput} onChange={(e)=> setMessageInput(e.target.value)} className="h-[100px] text-black p-1">
                        </textarea>
                     </div>
                  </div>
               </div>   
            </form>   

         </section>
      </>
   )
}