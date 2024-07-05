import { motion } from "framer-motion";
import { useEffect } from "react";
import React from "react";
import mixpanel from "mixpanel-browser";
import dashboard from "../assets/images/dashboard.jpeg";
import { GithubIcon } from "../assets/icons/GithubIcon";
import { BottomArrow } from "../assets/icons/BottomArrow";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Redirect } from "../assets/icons/Redirect";
import { PlayButton } from "../assets/icons/PlayButton";
import { BuyMeCoffee } from "../assets/icons/BuyMeCoffee";

export const Hero = React.memo(() => {
  useEffect(() => {
    mixpanel.init("7c45196567d67468f4f47b3b1d63f931", {
      track_pageview: true,
    });
  }, []);
  return (
    <section
      className="w-screen flex flex-col justify-center items-center bg-dark1 mb-0 md:mb-[15vw] lg:mb-0 xl:mb-[6rem] hero-bg-gradient pb-10 lg:pb-0"
      id="home"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <div className="w-full h-[40px] xl:h-[60px] bg-[#111926] text-dark mt-24 flex justify-start lg:justify-center  items-center ">
          <div className="md:w-[800px] xl:w-[1200px]  text-blue1 tracking-wide text-xs xl:text-base font-normal font-Inter pl-2">
            Want help setting up?{" "}
            <a
              className="text-white2 underline underline-offset-4 decoration-from-font cursor-pointer"
              href="https://getwaitlist.com/waitlist/14960"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect with us!
            </a>
          </div>
        </div>
      </motion.div>
      <div className="z-0 w-[95%] md:w-[800px] xl:w-[1200px] mt-[-5.625rem] flex flex-col justify-center items-start pt-16 xl:pt-10 md:pt-16 lg:pt-20 text-left ">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-blue1 h-8 text-sm sm:text-base w-full mb-6 sm:mt-32 mt-16 font-bold">
            <a
              className="flex w-full justify-center items-center font-normal text-sm rounded-md bg-blue2 h-full px-4 py-2 cursor-pointer"
              href="https://github.com/aarsxx/web-client"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="whitespace-nowrap">We are open-source</span>
              <span className="h-full border-r-[1px] border-[#1C2A40] mx-2"></span>
              <span className="flex text-white4 justify-center items-center whitespace-nowrap">
                <span className="mr-2 flex justify-center items-center">
                  <GithubIcon color={"#A6B0BB"} />
                </span>
                Star us on GitHub
                <span className="transform -rotate-90 mt-1">
                  <BottomArrow color={"#A6B0BB"} />
                </span>
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl xl:tracking-[-0.2rem] tracking-[-0.15rem]  text-blue1 xl:font-normal font-normal px-0 font-Jakartha">
            <h1>
              Share credentials <br />
              <span className="text-white1">within your team,</span>{" "}
              <TextGenerateEffect
                words={"Securely."}
                className={"inline-block "}
              />
            </h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-white1 font-light text-sm sm:text-base max-w-full lg:text-base xl:text-lg xl:min-w-[30vw] xl:max-w-[55vw] mt-10 xl:mt-6 mb-4 text-left ">
            Open source solution built for collaboration to share all your{" "}
            sensitive account <br className="hidden xl:inline" /> passwords or
            any other credentials. No more scrounging over Slack or Google
            Sheets.
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="w-full"
        >
          <div className="flex justify-start  gap-2 md:flex-row mt-6 sm:mt-14 md:mb-12 md:my-6 lg:my-4 xl:my-2 text-sm flex-wrap">
            <a
              className=" rounded-md font-normal text-blue1 flex justify-center items-center cursor-pointer bg-dark1 transition whitespace-nowrap hover:bg-blue2 px-3 py-2 border border-blue1"
              href="https://youtu.be/1esLbYmdHQY"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PlayButton />
              <span className="ml-1"> Watch Demo</span>
            </a>
            <a
              className=" rounded-md font-normal text-blue1 flex justify-center items-center cursor-pointer bg-dark1 transition whitespace-nowrap hover:bg-blue2 px-3 py-2 border border-blue1"
              href="https://www.buymeacoffee.com/aarsxx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BuyMeCoffee />
              <span className="ml-1"> Buy me a coffee</span>
            </a>
            {/* <div
              className="bg-blue1 rounded-md flex justify-center items-center text-black font-normal px-3 py-2 sm:mr-4 xl:mr-0 lg:mr-6 sm:mb-0 whitespace-nowrap"
              onClick={() => setIsModalOpen(true)}
            >
              <a
                href="https://chromewebstore.google.com/detail/osvauld/jjlmehbdndojkfglfimhldnbpdhjphfi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-around items-center"
              >
                <span className="mr-1">Download osvauld</span>
                <Redirect color={"black"} />
              </a>
            </div> */}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="w-1/2"
        >
          <div className="relative w-screen top-10 sm:top-0 right-3 md:right-8 xl:right-20 flex justify-center md:justify-start items-center mb-[60vw]  sm:mb-[50vw] xl:ml-[80px] xl:mb-[40rem] 2xl:[30rem]  xl:mt-[4.5rem]">
            <img
              src={dashboard}
              alt="dashboard of osvauld"
              className="w-[95%] lg:w-3/4 xl:w-5/6 2xl:w-[1200px] mx-auto absolute z-10 rounded-xl lg:rounded-3xl hero-dashboard-border-gradient top-2 md:top-4 lg:top-0 xl:top-0 shadow-[0_0_10px_rgba(137,180,250,0.7)] "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
});
