import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
   const form = useRef();

   const [nameInput, setNameInput] = useState('');
   const [emailInput, setEmailInput] = useState('');
   const [messageInput, setMessageInput] = useState('');

   const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      emailjs.sendForm('service_ktf3kla', 'template_z77a111', form.current, 'gI6ktg-ThFCnM2tTi')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setNameInput('');
      setEmailInput('');
      setMessageInput('');
   }


   return(
      <>
         <section className="pb-10" id="contact">
            <h2 className="text-5xl font-semibold text-center underline underline-offset-[12px] pb-14 decoration-[#FF715B]">Contact</h2>  
            <form className="parent flex md:flex-row min-[360px]:flex-col min-[360px]:gap-10 md:gap-40" onSubmit={(e) => onSubmit(e)}
            ref={form}>
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
                        <input type="text" name="user_name" value={nameInput} onChange={(e) => setNameInput(e.target.value)} className="text-black p-1" required/>
                     </div>
                     <div className="flex flex-col py-2 gap-2">
                        <label htmlFor="">Email</label>
                        <input type="text" name="user_email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} className="text-black p-1" required/>
                     </div>
                     <div className="flex flex-col py-2 gap-2">
                        <label htmlFor="">Message</label>
                        <textarea name="message" value={messageInput} onChange={(e)=> setMessageInput(e.target.value)} className="h-[100px] text-black p-1" required>
                        </textarea>
                     </div>
                  </div>
               </div>   
            </form>   

         </section>
      </>
   )
}