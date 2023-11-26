import WelcomeCoffeeImage from "../assets/ProjectImages/welcomeCoffeeImage.png";
import MovieTitlesImage from "../assets/ProjectImages/movietitles2.png";
import BattleShip from "../assets/ProjectImages/battleship2.png";
import EcomImage from "../assets/ProjectImages/Ecom3.png";
import PookiePaws from "../assets/ProjectImages/pookiePawsCafe2.png";

export const projectInfo = [
  {
    skills: [
      "HTML/CSS",
      "Tailwind",
      "Typescript",
      "Javascript",
      "React-Router",
    ],
    name: "WelcomeCoffee",
    description:
      "This project utilizes various technologies to enable users to create personalized coffee ingredients. Upon logging in, users can access their favorite coffee data. It applies React and JavaScript concepts, from abstracting components to managing data structures. Additionally, it establishes a JSON server to generate an API for tracking user favorites and login details.",
    image: WelcomeCoffeeImage,
    projectLink: "",
    githubLink: "https://github.com/JOmega12/welcomeCoffee",
  },
  {
    skills: [
      "HTML/CSS",
      "Tailwind",
      "Typescript",
      "Javascript",
      "React-Router",
      "Version Control",
    ],
    name: "PookiePaws Dog Cafe",
    description:
      "I spearheaded a collaborative effort with a team of five students, strategically assigning roles that aligned with each member's skill set and level of expertise. Leveraging version control and drawing upon our collective skill sets, we successfully navigated a hackathon challenge. Our primary objective was the development of a Dog Cafe platform, empowering users to seamlessly schedule appointments for their beloved pets at their convenience.",
    image: PookiePaws,
    projectLink: "",
    githubLink: "https://github.com/JOmega12/hackathon-devlopes",
  },
  {
    skills: ["HTML/CSS", "Javascript", "React"],
    name: "Ecommerce Website",
    description:
      "I developed an e-commerce platform that demonstrates state and props within class components, anticipating the prevalent use of such components in various websites. The platform, designed with vanilla CSS and powered by React, passes down props to manage state. Its primary purpose is to track and transmit state information to child components, ensuring error handling at every stage.",
    image: EcomImage,
    projectLink: "",
    githubLink: "https://github.com/JOmega12/code-commerce2",
  },
  // !need to rewrite battleship
  {
    skills: ["HTML/CSS", "Node.Js", "Javascript"],
    name: "Battleship",
    description:
      "Used Javascript to implement basic data structures through the game of Battleship. Used a terminal to display ships and tracked where ships are hit or missed with the help of Node.js",
    image: BattleShip,
    projectLink: "",
    githubLink: "https://github.com/JOmega12/NodeBattleShip",
  },
  {
    skills: ["HTML/CSS", "Node.Js", "Javascript"],
    name: "Movie Titles API",
    description:
      "Uses a public movie API to build a collection movie list that sorts from A to Z or vice versa. It also counts how many movies in each container and adds user's favorite movies into another container",
    image: MovieTitlesImage,
    projectLink: "",
    githubLink: "https://github.com/JOmega12/MovieAPI-Project",
  },
  // { skills: ['HTML/CSS', '', 'Javascript'], name: 'Javascript Calculator', description: 'Uses simple algorithm concepts in Javascript to produce an arithmetic result in a terminal', image: '', projectLink: '', githubLink: ''},
];
