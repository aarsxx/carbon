import { DiscordIcon } from "../assets/icons/DiscordIcon";
import { LinktreeIcon } from "../assets/icons/LinktreeIcon";
import { LinkdinIcon } from "../assets/icons/LinkdinIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { GithubIcon } from "../assets/icons/GithubIcon";

export const Footer = () => {
  return (
    <footer>
      <div className="pt-10  lg:pt-20 lg:pb-12 bg-dark1 radius-for-skewed ">
        <div className="w-full container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
          <div className=" flex flex-col lg:flex-row justify-start items-center">
            <div className="w-full lg:w-1/2 flex justify-start items-center lg:justify-center xl:justify-start lg:mb-0">
              <div className=" w-full flex flex-col gap-4 font-light mb-6">
                <a
                  href="https://getwaitlist.com/waitlist/14960"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex bg-blue1 text-dark1  cursor-pointer justify-center items-center px-3 py-1.5 rounded whitespace-nowrap min-w-[20rem] w-full xl:w-auto">
                    <span className="ml-2 font-normal">Request Beta</span>
                  </button>
                </a>
                <a
                  href="https://cal.com/abrahamgeorge/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex border border-blue1 cursor-pointer rounded text-blue1 justify-center items-center px-3 py-1.5 whitespace-nowrap min-w-[20rem] w-full xl:w-auto">
                    <span className="ml-2">Book a demo</span>
                  </button>
                </a>
              </div>
            </div>
            <div className="w-[95%] lg:w-1/2  justify-center xl:justify-start items-start text-white1 gap-8 lg:gap-12 text-xs font-light hidden">
              <ul className="flex flex-col justify-start items-start gap-4">
                <li>
                  <span className="font-medium">Product</span>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white4 lg:text-white1"
                    aria-label="Features"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white4 lg:text-white1"
                    aria-label="Integrations"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white4 lg:text-white1"
                    aria-label="Pricing"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white4 lg:text-white1"
                    aria-label="Roadmap"
                  >
                    Roadmap
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col justify-start items-start gap-4">
                <li>
                  <span className="font-medium">Company</span>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white4 lg:text-white1"
                    aria-label="About"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white4 lg:text-white1"
                    aria-label="Our team"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white4 lg:text-white1 whitespace-nowrap"
                    aria-label="Our Values"
                  >
                    Our Values
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white4 lg:text-white1"
                    aria-label="Blog"
                  >
                    Blog
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col justify-start items-start gap-4">
                <li>
                  <span className="font-medium">Community</span>
                </li>
                <li>
                  <a
                    href="https://discord.com/invite/kV6gBeM6Fm"
                    className="text-white4 lg:text-white1"
                    aria-label="Discord"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/aarsxx"
                    className="text-white4 lg:text-white1"
                    aria-label="Github"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/leonardodika"
                    className="text-white4 lg:text-white1"
                    aria-label="LinkedIn"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/minumboba"
                    className="text-white4 lg:text-white1"
                    aria-label="Instagram"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col justify-start items-start gap-4">
                <li>
                  <span className="font-medium">Resources</span>
                </li>
                <li>
                  <a
                    href=""
                    className="text-white4 lg:text-white1"
                    aria-label="Downloads"
                  >
                    Downloads
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-white4 lg:text-white1"
                    aria-label="Docs"
                  >
                    Docs
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col-reverse xl:flex-row justify-center md:justify-between items-center w-full xl:mt-6 h-[50vw]  md:h-auto gap-10 md:gap-0">
            <div className="w-[95%] xl:w-[64%] flex flex-col md:flex-row justify-between items-center text-white4 text-xs xl:mt-0 gap-6 md:gap-0">
              <div className="">
                <a className="mr-6 whitespace-nowrap" href="/terms">
                  Terms and Conditions
                </a>
                <a href="/privacy" className="whitespace-nowrap">
                  Privacy Policy
                </a>
              </div>
              <span className="whitespace-nowrap">
                ©2025 carbon. All rights reserved.
              </span>
            </div>
            <div className="flex gap-12 my-4 xl:my-0">
              <a
                href="https://linktr.ee/osvauld"
                aria-label="Linktree Icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinktreeIcon color={"#A6B0BB"} />
              </a>
              <a
                href="https://github.com/osvauld"
                aria-label="Github Icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon color={"#A6B0BB"} />
              </a>
              <a
                href="https://discord.gg/u43atWCS"
                aria-label="Discord Icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiscordIcon color={"#A6B0BB"} />
              </a>
              <a
                href="https://www.linkedin.com/company/osvauld"
                aria-label="LinkdinIcon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkdinIcon color={"#A6B0BB"} />
              </a>
              <a
                href="https://www.instagram.com/osvauld/"
                aria-label="Instagram Icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon color={"#A6B0BB"} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
