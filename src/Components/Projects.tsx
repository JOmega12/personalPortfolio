import verticalLine from "../assets/verticalLine.svg";
import dot from "../assets/period.svg";
import Arrow from "../assets/Arrow 1.svg";
import { projectInfo } from "./ProjectInfo";

export const Projects = () => {
  return (
    <section className="min[360px]:px-4 md:px-10 lg:px-16">
      <div className="m-10 mb-20" id="projects">
        <h1 className="text-[53px] font-bold mb-16 text-center">Projects</h1>
        <div className="flex flex-col justify-center gap-2">
          <div className="line">
            <img
              src={verticalLine}
              alt="Vertical Line"
              className="w-full h-[60px]"
            />
          </div>
          <div className="circle">
            <img src={dot} alt="Dot" className="w-full h-[10px]" />
          </div>
        </div>
      </div>
      {projectInfo.map((item, index) => (
        <div
          key={index}
          className={`flex min-[360px]:flex-col md:flex-row ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          } gap-20 lg:m-20 min-[360px]:my-10`}
        >
          <div className="">
            <h2 className="text-3xl font-semibold mb-10 min-[360px]:text-center md:text-left">
              {item.name}
            </h2>
            <ul className="skill flex min-[360px]:flex-row gap-3 mb-5 flex-wrap max-[765px]:justify-center">
              {item.skills.map((element, index) => (
                <li
                  key={index}
                  className="bg-[#1F2D37] px-2 py-1 border-2 rounded-2xl flex justify-center items-center border-gray-700 hover:border-[#81A4A6]"
                >
                  {element}
                </li>
              ))}
            </ul>
            <p className="text-base md:leading-7 mb-5">{item.description}</p>
            <div className="flex flex-row gap-8 max-[765px]:justify-center">
              <a
                href={item.githubLink}
                target="_blank"
                className="bg-[#FF715B] px-4 py-2 cursor-pointer hover:bg-[#ff5b42]"
              >
                View Github
              </a>
              <a
                href= {item.projectLink === "" ? "" : item.projectLink}
                target="_blank"
                className=" px-4 py-2 underline underline-offset-8 decoration-[#FF715B] flex flex-row gap-1 cursor-pointer hover:decoration-[#ff5b42] hover:text-[#ff5b42]"
              >
                <p>View Project</p>
                <span className="min-[360px]:mt-1 md:mt-5 lg:mt-1 ">
                  <img src={Arrow} alt="arrow" />
                </span>
              </a>
            </div>
          </div>
          <div>
            <div className="rectangle"></div>
            <div className="w-[350px] h-[340px]">
              <img
                src={item.image}
                alt="WelcomeCoffee website image"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
