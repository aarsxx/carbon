import { motion } from "framer-motion";
import { DiscordIcon } from "../assets/icons/DiscordIcon";
import { GithubIcon } from "../assets/icons/GithubIcon";

export const JoinUs = () => (
  <section className="relative pt-0 xl:pt-16 pb-0 bg-dark1 overflow-hidden h-[22rem]">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-wrap items-center 2xl:w-[1150px] xl:w-[1100px] w-11/12 mx-auto">
        <div className="w-full h-[20rem] bg-dark2 rounded-xl text-white p-8  flex flex-col justify-center items-center">
          <h2 className="text-3xl font-Jakartha text-center  text-blue1 font-light ">
            Any questions or feedbacks?
          </h2>
          <p className="text-center  text-sm lg:text-xl max-w-full lg:max-w-[80%] my-6 font-extralight lg:tracking-[-0.02rem] ">
            Get access to our updates, contribute to our <br /> roadmap and
            converse with us!
          </p>
          <div className=" w-full lg:w-7/12 flex flex-col lg:flex-row lg:justify-center gap-4 font-light mb-6">
            <a
              href="https://discord.com/invite/kV6gBeM6Fm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex bg-blue1 text-dark1 justify-center items-center px-3 py-1.5 rounded whitespace-nowrap w-full xl:w-auto">
                {" "}
                <DiscordIcon />
                <span className="ml-2 font-normal">
                  Join our Discord Community
                </span>
              </button>
            </a>
            <a
              href="https://github.com/osvauld/web-client"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex border border-blue1 rounded text-blue1 justify-center items-center px-3 py-1.5 whitespace-nowrap w-full xl:w-auto">
                <GithubIcon color={"#89B4FA"} />
                <span className="ml-2">Star us on Github</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
