

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


{/* <div className="flex flex-col md:flex-row min-[368px]:flex-col gap-6 md:gap-32">
<div className='flex flex-col'>
   <div className='flex max-[900px]:items-center'>
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
      <h2 className='text-5xl font-medium z-0'>Im Jensen</h2>
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
</div> */}