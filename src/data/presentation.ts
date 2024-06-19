type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "leonardodika.13@gmail.com",
  title: "hey, I'm aarsxx 👋",
  // profile: "/greet.svg",
  description:
    "I'm a *software engineer* with over *5 years of experience*, specializing in building robust AI backends using *Django* at *Epidemic sound*. Currently, I'm diving into *Machine Learning* and *LLVM*, exploring new horizons in tech and optimization.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/aarsxx0",
    },
    {
      label: "Github",
      link: "https://github.com/andikaleonardo",
    },
    {
      label: "Linkedin",
      link: "https://linkedin.com/in/leonardodika",
    },
  ],
};

export default presentation;
