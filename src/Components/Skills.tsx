import HTML from "../assets/skills/HTML_icon.svg";
import CSS from "../assets/skills/css_ICON.svg";
import JS from "../assets/skills/jsLOGO.svg";
import TS from "../assets/skills/TS.svg";
import REACT from "../assets/skills/react_icon.svg";
import NODEJS from "../assets/skills/nodejs-icon.svg";
import GIT from "../assets/skills/gitIcon.svg";

export const Skills = () => {
  const skillsIcons = [
    { name: "HTML", icon: HTML },
    { name: "CSS", icon: CSS },
    { name: "Javascript", icon: JS },
    { name: "Typescript", icon: TS },
    { name: "React", icon: REACT },
    { name: "Node.js", icon: NODEJS },
    { name: "Version Control", icon: GIT },
  ];
  return (
    <div className="flex flex-row flex-wrap align-center mt-5">
      {/* map this part of the items */}
      {skillsIcons.map((item, index) => (
        <div key={index} className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4 p-4
        ">
          <div>
            <div className="circle"></div>
            <div className="line"></div>
          </div>
          <div className="flex flex-row gap-2">
            <span>
              {/* <div className='w-[60px] h-[60px] bg-[transparent]'>
                        <img src={item.icon} alt={item.name} 
                        className='w-[60px] h-[60px] bg-[transparent]'
                        />
                     </div> */}
              <img
                src={item.icon}
                alt={item.name}
                className="w-[60px] h-[60px] bg-[transparent]"
              />
            </span>
            <p className="mt-8 text-base">{item.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
