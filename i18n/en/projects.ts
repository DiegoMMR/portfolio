import ReactPokedexImg from "@/assets/img/react-pokedex.png";
import PortfolioImg from "@/assets/img/portfolio.png";
import CompanyAppImg from "@/assets/img/company-app.png";

export const projects = [
  {
    title: "Pokémon Team Builder",
    description:
      "A Pokémon team builder app made with React and Redux that allows you to choose a team of up to 6 Pokémon.",
    stack: ["React.js", "Redux", "Typescript", "SCSS", "HTML"],
    image: ReactPokedexImg,
  },
  {
    title: "Company App",
    description:
      "A company app built with Vue.js 3 and Laravel with fine-tuned permission. It also has a Dockerized MySQL database and it was deployed on DigitalOcean with continuous integration and deployment.",
    stack: ["Vue.js", "Typescript", "SCSS", "Element Plus", "Laravel", "MySQL", "Docker", "CI/CD", "i18n"],
    image: CompanyAppImg,
  },
  {
    title: "Portfolio",
    description:
      "This website is built with Vue.js 3 and styled with Tailwind CSS, combining the power of a reactive framework with a utility-first CSS framework.",
    stack: ["Vue.js", "Typescript", "SCSS", "Tailwind", "Vite", "i18n"],
    image: PortfolioImg,
  },
];
