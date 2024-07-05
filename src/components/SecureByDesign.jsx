import { motion } from "framer-motion";

export const SecureByDesign = () => {
  return (
    <section className="w-full" id="features">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full flex justify-center items-center"
      >
        <div className="w-full min-h-[50vh] 2xl:min-h-[30vh] text-white3  2xl:w-[1150px] xl:w-[1050px] lg:w-[980px]  md:w-4/5 bg-dark1  mx-auto xl:pt-14 mt-10 xl:mt-0 text-center">
          <h2 className="text-3xl xl:text-5xl font-Jakartha font-light text-blue1 xl:tracking-[-0.15rem]">
            Advanced security and privacy features
          </h2>
          <div className="py-10 w-full flex flex-col  justify-between items-center gap-6 mt-4">
            <div className="flex flex-col xl:flex-row items-center justify-center gap-6 w-full">
              <article className="bg-dark2 text-left rounded-lg xl:w-[46%] min-h-[15rem]  p-6 flex flex-col justify-start items-center w-[95%]">
                <h4 className="text-blue1 w-full text-2xl font-Jakartha font-light xl:tracking-[0.015rem]">
                  OpenPGP with ECC
                </h4>
                <p className="text-base font-extralight mt-2">
                  In order to protect your vault key and facilitate the sharing
                  functionality, osvauld uses the OpenPGP RFC 4880 standard with
                  ECC Curve25519. OpenPGP is open source, has been audited and
                  battle-tested for nearly 30 years, and has no known
                  vulnerabilities.
                </p>
              </article>
              <article className="bg-dark2 text-left rounded-lg xl:w-[46%] min-h-[15rem]  p-6  flex flex-col justify-start items-center w-[95%]">
                <h4 className="text-blue1 w-full text-2xl font-Jakartha font-light xl:tracking-[0.015rem]">
                  End-to-end Encryption
                </h4>
                <p className="text-base font-extralight mt-2">
                  With Zero-knowledge Architecture, all your credentials
                  including meta data never leaves your browser unencrypted and
                  only you and to whom you shared can decrypt it using
                  corresponding secret password. No one, not even osvauld can
                  access this data.
                </p>
              </article>
            </div>
            <div className="flex flex-col  xl:flex-row items-center justify-center gap-6">
              <article className="bg-dark2 text-left rounded-lg xl:w-[46%] min-h-[15rem]  p-6 flex flex-col justify-start items-center w-[95%]">
                <h4 className="text-blue1 w-full text-2xl font-Jakartha font-light xl:tracking-[0.015rem]">
                  State-of-the-Art Protection
                </h4>
                <p className="text-base font-extralight mt-2">
                  Powered by Sequoia-PGP and WebAssembly, Our implementation
                  provides Additional isolation and type safety to cryptographic
                  operations ensuring strong encryption and secure operations
                  directly in your browser. Sequoia-PGP is used by package
                  manager of major Linux distributions.{" "}
                </p>
              </article>
              <article className="bg-dark2 text-left rounded-lg xl:w-[46%] min-h-[15rem] p-6 flex flex-col justify-start items-center w-[95%]">
                <h4 className="text-blue1 w-full text-2xl font-Jakartha font-light xl:tracking-[0.015rem]">
                  Lightning Batch Crypto
                </h4>
                <p className="text-base font-extralight mt-2">
                  Optimized Rust implementation in WASM enables near-native
                  speeds for batch operations, ensuring quick secure sharing.
                  The efficient Rust code minimizes resource usage, enabling
                  integration into resource-limited environments without
                  sacrificing security or speed.{" "}
                </p>
              </article>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
