import { useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { GithubIcon } from "../assets/icons/GithubIcon";
import { CloseIcon } from "../assets/icons/CloseIcon";
import { Redirect } from "../assets/icons/Redirect";
import { Copy } from "../assets/icons/Copy";
import { Eye } from "../assets/icons/Eye";
import { EyeOff } from "../assets/icons/EyeOff";
import { Tick } from "../assets/icons/Tick";
const navbarLinks = [
  {
    label: "Documentation",
    href: "https://docs.osvauld.com/introduction/overview/",
    ariaLabel: "Documentation",
  },
];

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [trialModal, setTrialModal] = useState(false);
  const [fetchCreds, setFetchCreds] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const copyToClipboard = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => {
        setCopiedIndex(() => {
          return null;
        });
      }, 1500);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  const generateCredentials = async () => {
    setFetchCreds(true); // To show loader or disable button
    try {
      const response = await fetch("https://demo.osvauld.com/createDemoUser");
      const data = await response.json();
      setUsername(data.username);
      setPassword(data.tempPassword);
    } catch (error) {
      console.error("Failed to fetch credentials:", error);
    }
  };

  return (
    <nav className="w-screen h-20 xl:h-24 flex justify-center items-center fixed  z-40 backdrop-blur-xl">
      <div className="w-full  mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5 flex justify-between items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex justify-start items-center grow basis-0">
            <button
              className="text-white3 font-Jakartha font-semibold text-4xl pl-2"
              onClick={scrollToTop}
            >
              osvauld
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
          className="xl:ml-auto xl:mr-4"
        >
          <div className="hidden lg:flex h-full gap-6 xl:mx-4  py-2 cursor-pointer">
            {navbarLinks.map(({ href, label, ariaLabel }, index) => (
              <React.Fragment key={label}>
                <a
                  className="text-white1 font-normal text-xs flex justify-center items-center"
                  href={href}
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              </React.Fragment>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex justify-center items-center gap-4">
            <div className="grow basis-0 justify-end hidden lg:flex">
              <span
                className="rounded-md font-normal text-blue1 flex justify-center items-center cursor-pointer bg-dark1 transition whitespace-nowrap hover:bg-blue2 px-3 py-1.5 text-sm border border-blue1 relative"
                onClick={() => setTrialModal(!trialModal)}
              >
                Try now
                {trialModal && (
                  <div
                    className={`absolute top-[140%] right-0 ${
                      fetchCreds ? "h-[31.8rem]" : "h-[17.2rem]"
                    } w-[28.25rem] bg-dark2 border border-trialBorder text-trialText flex flex-col justify-start items-center gap-6 p-4 pl-9 rounded-2xl`}
                  >
                    <div className="flex justify-between items-center w-full mt-3 pr-6">
                      <span className="text-xl font-medium">
                        You are invited to try osvauld
                      </span>
                      <CloseIcon />
                    </div>
                    <div
                      className="w-full flex flex-col gap-4 justify-center items-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="w-full flex justify-start gap-6 items-center">
                        <span className="text-base text-white1">Step 1:</span>
                        <a
                          href="https://chromewebstore.google.com/detail/osvauld/jjlmehbdndojkfglfimhldnbpdhjphfi"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex justify-around items-center text-blue1 text-base"
                        >
                          <span className="mr-1">
                            Download osvauld browser extension{" "}
                          </span>
                          <Redirect color={"#89B4FA"} />
                        </a>
                      </div>
                      <div className="w-full flex justify-start gap-6 items-center">
                        <span className="text-base text-white1">Step 2:</span>
                        <button
                          className="flex justify-center items-center border border-trialBorder rounded-md px-3 py-2 text-base"
                          onClick={generateCredentials}
                          disabled={fetchCreds}
                        >
                          <span>Generate temporary credentials </span>
                        </button>
                      </div>
                    </div>
                    {fetchCreds && (
                      <div
                        className="w-full flex flex-col gap-3 "
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="w-[95%] flex flex-col justify-center items-start text-trialFieldText  ">
                          <span>Base URL</span>
                          <div className="flex justify-between items-center bg-trialField rounded-md text-sm w-full px-2 py-1.5 mt-1">
                            <span>https://demo.osvauld.com</span>
                            <button
                              onClick={async () =>
                                await copyToClipboard(
                                  "https://demo.osvauld.com",
                                  0
                                )
                              }
                            >
                              {copiedIndex !== null && copiedIndex === 0 ? (
                                <Tick />
                              ) : (
                                <Copy />
                              )}
                            </button>
                          </div>
                        </div>
                        <div className="w-[95%] flex flex-col justify-center items-start text-trialFieldText ">
                          <span>Username</span>
                          <div
                            className="flex justify-between items-center bg-trialField rounded-md text-sm w-full px-2 py-1.5 mt-1"
                            onClick={async () => {
                              const username =
                                document.getElementById("username").textContent;
                              await copyToClipboard(username, 1);
                            }}
                          >
                            <span id="username">{username}</span>
                            {copiedIndex !== null && copiedIndex === 1 ? (
                              <Tick />
                            ) : (
                              <Copy />
                            )}
                          </div>
                        </div>
                        <div className="w-[95%] flex flex-col justify-center items-start text-trialFieldText">
                          <span>Password</span>
                          <div className="flex justify-between items-center bg-trialField  rounded-md text-sm w-full px-2 py-1.5 mt-1">
                            <input
                              id="password"
                              type={isPasswordVisible ? "text" : "password"}
                              defaultValue={password}
                              className="bg-transparent w-full"
                              disabled
                            />
                            <span className="flex justify-center items-center gap-2">
                              <button
                                onClick={() => {
                                  setIsPasswordVisible(!isPasswordVisible);
                                }}
                              >
                                {isPasswordVisible ? <EyeOff /> : <Eye />}
                              </button>
                              {copiedIndex !== null && copiedIndex === 2 ? (
                                <Tick />
                              ) : (
                                <button
                                  onClick={async () => {
                                    const password =
                                      document.getElementById("password").value;
                                    await copyToClipboard(password, 2);
                                  }}
                                >
                                  <Copy />
                                </button>
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="w-full">
                      <span className="w-full text-sm">
                        Disclaimer : This is a shared trial environment to
                        experience <br /> osvauld. Please refrain from sharing
                        original credentials. <br />
                        We are not liable for any damages caused.
                      </span>
                    </div>
                  </div>
                )}
              </span>
            </div>
            <div className="grow basis-0 justify-end hidden lg:flex">
              <a
                className="text-dark1
            bg-blue1 rounded-md px-3 py-1.5 text-sm whitespace-nowrap  flex cursor-pointer"
                href="https://getwaitlist.com/waitlist/14960"
                target="_blank"
                aria-label="get started"
              >
                <span className="pt-px">Request Beta</span>
              </a>
            </div>
          </div>
        </motion.div>
        <div
          className="lg:hidden flex flex-col  px-2 py-3  border-solid border border-gray-600 rounded-md cursor-pointer backdrop-blur-xl mr-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500 "></div>
        </div>
      </div>
      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-dark1 z-50 w-full 
        items-center gap-10 pb-10  border-y border-solid border-customDarkBg3 pt-10 text-sm
        "
            >
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className="navbar-link"
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              ))}
              <a
                className="text-dark1 custom-border-gray rounded-md
           bg-blue1 cursor-pointer pl-6 pr-8 pt-2 pb-2 text-sm flex justify-center items-center whitespace-nowrap"
                href="https://github.com/osvauld"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon color={"black"} />
                <span className="ml-2">Contribute</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
