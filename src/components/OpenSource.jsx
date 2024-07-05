import { motion } from "framer-motion";

export const OpenSource = () => (
  <section className="py-12 xl:pt-0 bg-dark1 w-full">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
        <div className="text-center text-lg font-extralight w-full h-full text-white3 flex flex-col gap-10 items-center">
          <h2 className="text-3xl lg:text-4xl font-Jakartha font-light xl:tracking-[-0.1rem]">
            Proudly Open-Source
          </h2>

          <span className="max-w-[95%] lg:max-w-[50vw] text-lg font-extralight lg:text-xl">
            <span className="text-blue1">
              Osvauld is 100% Open-source, source code comes under under the
              AGPL-3.0 license and can be easily self-hosted.
            </span>
            You are free to audit, contribute and redistribute it.
          </span>
          <span className="max-w-[95%] lg:max-w-[60vw] text-lg font-extralight ">
            Osvauld’s Vulnerability Disclosure Program enlists the help of the{" "}
            <br />
            hacker community to make Osvauld more secure.
          </span>
          <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4 text-blue1">
            <button className="w-full lg:w-1/4 border border-blue1 hover:bg-blue1 hover:text-dark1 rounded-md px-3 py-1.5">
              <a
                href="https://github.com/osvauld"
                target="_blank"
                rel="noopener noreferrer"
              >
                Become a Contributor
              </a>
            </button>
            <button className="w-full lg:w-1/4 border border-blue1 hover:bg-blue1 hover:text-dark1  rounded-md px-3 py-1.5">
              <a
                href="https://www.buymeacoffee.com/osvauld"
                target="_blank"
                rel="noopener noreferrer"
              >
                Become a Sponsor
              </a>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
