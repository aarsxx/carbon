import { motion } from "framer-motion";

export const OnPremise = () => {
  return (
    <section className="lg:mb-16 w-full flex flex-col justify-center items-center bg-dark1 xl:pt-28 2xl:pt-0">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className=" 2xl:w-[1150px] xl:w-[1050px] lg:w-[980px]  md:w-4/5 flex justify-center bg-dark1  lg:pb-10 mx-auto xl:flex-row flex-col">
          <div>
            <div className="pl-0 lg:pl-10 text-left">
              <h2 className="text-3xl lg:text-4xl font-Jakartha font-light xl:tracking-[-0.1rem] text-blue1  ">
                Setup in 5 minutes
              </h2>
              <h2 className=" text-white1 text-2xl lg:text-4xl font-Jakartha font-light xl:tracking-[-0.1rem]">
                Host on &lt;your-domain&gt;.com{" "}
              </h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center xl:h-[20rem] 2xl:h-[22rem] mt-10">
              <article className="bg-dark2 h-[90%] rounded-lg w-[95vw] xl:w-[45%] p-10 overflow-hidden">
                <h3 className="text-xl lg:text-3xl font-Jakartha font-light xl:tracking-[-0.1rem] text-blue1 ">
                  On-Premise Solution
                </h3>
                <p className="text-lg font-extralight text-white1 pt-4 lg:pt-7">
                  Minimize the risk of external threats by limiting exposure to
                  public networks and potential vulnerabilities associated with
                  shared cloud environments, ensuring compliance with internal
                  policies and regional regulations.{" "}
                </p>
              </article>
              <article className="bg-dark2 h-[90%] rounded-lg w-[95vw] xl:w-[45%] p-10 overflow-hidden">
                <h3 className="text-xl lg:text-3xl font-Jakartha font-light xl:tracking-[-0.1rem] text-blue1 ">
                  Easy Deployment{" "}
                </h3>
                <p className="text-lg font-extralight text-white1 pt-4 lg:pt-7">
                  Pre-Built Deployment Scripts are designed to simplify the
                  installation process, tailored to integrate seamlessly with
                  your organization's existing and trusted infrastructure,
                  ensuring compatibility and reliability.{" "}
                </p>
              </article>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
