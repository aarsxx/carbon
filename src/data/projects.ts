export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
  selected?: boolean;  // New property
};
const projects: Project[] = [
  {
    title: "One",
    techs: ["rust","postgres","redis","rabbitmq","docker"],
    link: "https://github.com/aarsxx/one",
    isComingSoon: true,
    selected: true,
  },
  {
    title: "Cosmos",
    techs: ["astro","tailwindcss","typescript"],
    link: "https://github.com/aarsxx/atom",
    selected: true,
  },
  {
    title: "Dotfiles",
    techs: ["shell"],
    link: "https://github.com/aarsxx/dotfiles",
    selected: true,
  },
  {
    title: "Brave iOS",
    techs: ["swift"],
    link: "https://github.com/brave/brave-ios",
  },
  {
    title: "Readme Template",
    techs: ["markdown"],
    link: "https://github.com/aarsxx/readme-template",
  },
];

export default projects;
