export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Kage",
    techs: ["Rust","Rabbitmq","Docker"],
    link: "https://github.com/andikaleonardo/kage",
    isComingSoon: true,
  },
  {
    title: "Freya",
    techs: ["Laravel","Typescript","Tailwind"],
    link: "https://github.com/andikaleonardo/datamine",
  },
  {
    title: "Brave iOS",
    techs: ["Swift"],
    link: "https://github.com/brave/brave-ios",
  },
  {
    title: "Dotfiles",
    techs: ["Shell"],
    link: "https://github.com/andikaleonardo/dotfiles",
  },
];

export default projects;
