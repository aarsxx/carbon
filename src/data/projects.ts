export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "ONE SSO",
    techs: ["Rust","Postgres","Redis","Rabbitmq","Docker"],
    link: "https://github.com/andikaleonardo/one",
    isComingSoon: true,
  },
  {
    title: "Cosmos",
    techs: ["Astro","Tailwindcss","Typescript"],
    link: "https://github.com/andikaleonardo/atom",
  },
  {
    title: "Dotfiles",
    techs: ["Shell"],
    link: "https://github.com/andikaleonardo/dotfiles",
  },
  {
    title: "Brave iOS",
    techs: ["Swift"],
    link: "https://github.com/brave/brave-ios",
  },
];

export default projects;
