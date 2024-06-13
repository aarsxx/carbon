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
  title: "Hi, I’m arsx 👋",
  // profile: "/profile.webp",
  description:
    "i'm a software engineer, optimist, and community builder. I currently work as the software engineer at Epidemic, where I built AI backend with django. Outside of work I learn Machine Learning and LLVMs",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/aarsxx",
    },
    {
      label: "Github",
      link: "https://github.com/andikaleonardo",
    },
    {
      label: "Linkedin",
      link: "https://github.com/leonardodika",
    },
  ],
};

export default presentation;
