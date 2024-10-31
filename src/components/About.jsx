import React from "react";
import logo from "../assets/logo.svg";
import { motion } from "framer-motion";
import test from "../assets/test.png";

const About = () => {
  return (
    <div className="md:flex md:flex-row md:justify-center">
      <div className="md:min-w-[512px] md:w-full md:max-w-2xl">
        <div className="flex flex-col justify-start max-w-2xl px-8 py-24">
          <div className="grid w-8 h-8 mb-8 group">
            <a alt="logo" aria-label="Go to homepage" href="/">
              <img width="32" height="32" src={logo} alt="logo" />
            </a>
          </div>
          <motion.div
            className="flex flex-col gap-12 origin-left"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <div className="flex flex-row items-top justify-between">
              <div className="flex flex-col gap-8 w-fit">
                <h1 className="inline font-medium" style={{ fontSize: "20px" }}>
                  about
                </h1>
                <div className="flex flex-col pb-2">
                  <h2
                    className="inline font-normal"
                    style={{ fontSize: "20px" }}
                  >
                    noirrit chaki
                  </h2>
                  <p
                    className="inline font-light text-zinc-400"
                    style={{ fontSize: "14px" }}
                  >
                    / no-e-rith /
                  </p>
                </div>

                <h2 className="inline font-light" style={{ fontSize: "14px" }}>
                  <div className="pb-8">
                    i am a product designer based out of bangalore, india
                    currently helping build the experience for everything claims
                    and health at PlumHQ. my journey started with a curiosity
                    for clean designs, smart interactions, and that feeling you
                    get when something just works.
                  </div>
                  <div className="pb-8">
                    outside of work you'll find me spending all my time
                    bouldering at equilibrium or looking for new ideas for my
                    next video project.{" "}
                  </div>
                </h2>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
