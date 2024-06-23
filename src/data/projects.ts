export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "One",
    techs: ["Rust","Postgres","Redis","Rabbitmq","Docker"],
    link: "https://github.com/aarsxx/one",
    isComingSoon: true,
  },
  {
    title: "Cosmos",
    techs: ["Astro","Tailwindcss","Typescript"],
    link: "https://github.com/aarsxx/atom",
  },
  {
    title: "Dotfiles",
    techs: ["Shell"],
    link: "https://github.com/aarsxx/dotfiles",
  },
  {
    title: "Brave iOS",
    techs: ["Swift"],
    link: "https://github.com/brave/brave-ios",
  },
  {
    title: "Readme Template",
    techs: ["markdown"],
    link: "https://github.com/aarsxx/readme-template",
  },
];

export default projects;
