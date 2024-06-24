export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
  selected?: boolean;  // New property
};
const projects: Project[] = [
  {
    title: "FUTR",
    techs: ["rust","postgres","redis","rabbitmq","docker"],
    link: "https://github.com/aarsxx/futr",
    isComingSoon: true,
    selected: true,
  },
  {
    title: "Cosmos",
    techs: ["astro","tailwindcss","typescript"],
    link: "https://github.com/aarsxx/cosmos",
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
    title: "Resume",
    techs: ["Astro","Astro","Taiwind"],
    link: "https://github.com/aarsxx/resume",
  },
  {
    title: "Readme Template",
    techs: ["markdown"],
    link: "https://github.com/aarsxx/readme-template",
  },
];

export default projects;
