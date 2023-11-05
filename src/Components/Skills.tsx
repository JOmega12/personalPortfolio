

export const Skills = () => {


   const skillsIcons = [
      {name: 'HTML/CSS', icon: ''},
      {name: 'Javascript', icon: ''},
      {name: 'Typescript', icon: ''},
      {name: 'React', icon: ''},
      {name: 'Node.js', icon: ''},
      {name: 'Version Control', icon: ''},
      {name: 'Git/ Github', icon: ''},
   ]
   return(
      <div>
         {/* map this part of the items */}
         {skillsIcons.map((item, index) => (
            <div key={index}>
               <div className="circle"></div>
               <div className="line"></div>
               <ul>
                  <span>{item.icon}</span>
                  <li>{item.name}</li>
               </ul>
            </div>
         ))}
      </div>
   )
}