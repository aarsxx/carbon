export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Solar",
    techs: ["Rust","Rabbitmq","Docker"],
    link: "https://github.com/andikaleonardo/kage",
    isComingSoon: true,
  },
  {
    title: "Nue",
    techs: ["Javascript","Laravel","Tailwind"],
    link: "https://github.com/andikaleonardo/nue",
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
