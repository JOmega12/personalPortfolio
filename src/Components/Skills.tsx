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
    <div className="flex flex-row flex-wrap align-center mt-5
    md:px-2 min-[360px]:justify-center gap-4
    ">
      {/* map this part of the items */}
      {skillsIcons.map((item, index) => (
         // skills section still needs the icons to be wider
        <div key={index} className="w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4 p-3
         hover:border-2 hover:rounded-md 
         hover:border-[#81A4A6]
        ">
          <div>
            <div className="circle"></div>
            <div className="line"></div>
          </div>
          <div className="flex min-[360px]:flex-col md:flex-row gap-2">
            <span>
              <img
                src={item.icon}
                alt={item.name}
                className=" w-[80px] h-[80px] bg-[transparent]"
              />
            </span>
            <p className="mt-8 text-base max-[765px]:text-center md:ml-3">{item.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
