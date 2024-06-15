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
    "i'm a *software engineer*, optimist, and minimalist with over *3 years* of experience. I currently work as the Sr. software engineer at *Epidemic*, where I built AI backend with *django*. currently I learn Machine Learning and LLVM",
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
      link: "https://github.com/leonardodika",
    },
  ],
};

export default presentation;
