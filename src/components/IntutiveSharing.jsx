import React, { lazy, Suspense } from "react";
import sharing from "../assets/images/sharing.webm";
const MotionDiv = lazy(() =>
  import("framer-motion").then((pkg) => ({ default: pkg.motion.div }))
);

export const IntutiveSharing = () => (
  <Suspense fallback={null}>
    <section className="w-full bg-dark1 mt-12 sm:mt-20 mb-10 lg:my-20 xl:mt-10 pt-4">
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 lg:pl-32 2xl:pl-48">
          <article className="text-white3 w-[95vw] text-center  lg:text-left lg:max-w-[80%] font-light pb-32 lg:pb-12">
            <h3 className="text-3xl lg:text-4xl font-Jakartha font-light xl:tracking-[-0.1rem] mb-10 text-left">
              <span className="text-blue1 tracking-[-0.08rem]">
                Seamless granular access distribution <br /> enables you to
                share credentials with <br /> designated groups or users.
              </span>{" "}
            </h3>
            <p className="w-[95vw] lg:max-w-[70%] text-lg text-left font-extralight">
              Manage credentials access by assigning and revoking permissions as
              per your needs. Track the frequency and manner in which
              credentials are accessed with audit logs that offers insights into
              usage patterns.
            </p>
          </article>
          <MotionDiv
            initial={{ opacity: 0, y: 10, zIndex: 20 }}
            animate={{ opacity: 1, y: 0, zIndex: 20 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="w-1/2"
          >
            <div className="relative w-screen top-10 sm:top-0 right-4 md:right-20 xl:right-40 flex justify-center md:justify-start items-center mb-[15rem] sm:mb-[30rem]  xl:ml-[80px] xl:mb-[40rem] 2xl:[30rem] xl:mt-[4.5rem]">
              <video
                src={sharing}
                alt="sharing functionality of osvauld"
                className="w-[95%] lg:w-3/4 xl:w-5/6 2xl:w-[1200px] mx-auto absolute z-10 rounded-xl lg:rounded-3xl hero-dashboard-border-gradient sm:top-0 md:top-2 lg:top-0 xl:top-0 shadow-[0_0_10px_rgba(137,180,250,0.7)]"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </MotionDiv>
        </div>
      </MotionDiv>
    </section>
  </Suspense>
);
