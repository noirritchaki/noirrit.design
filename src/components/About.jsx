import React from "react";
import logo from "../assets/logo.svg";
import { motion } from "framer-motion";
import test from "../assets/test.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="md:flex md:flex-row md:justify-center">
      <div className="md:min-w-[512px] md:w-full md:max-w-2xl">
        <div className="flex flex-col justify-start max-w-2xl px-8 py-36">
          <div className="flex items-center w-full h-8 mb-12 group">
            <a
              alt="logo"
              aria-label="Go to homepage"
              href="/"
              className="mr-10"
            >
              <img width="32" height="32" src={logo} alt="logo" />
            </a>
            <div className="flex flex-row gap-4">
              <a alt="about" aria-label="Go to about" href="/">
                <Link
                  to="/about"
                  className="inline font-normal underline-offset-2 underline decoration-[#667085]"
                  style={{ fontSize: "14px", color: "#182230" }}
                >
                  about
                </Link>
              </a>
              <a alt="connect" aria-label="Go to connect" href="/">
                <Link
                  to="/connect"
                  className="inline font-normal underline-offset-2 hover:underline decoration-[#D0D5DD]"
                  style={{ fontSize: "14px", color: "#667085" }}
                >
                  connect
                </Link>
              </a>
              <a alt="resume" aria-label="Go to resume" href="/">
                <Link
                  to="https://read.cv/noirrit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline font-normal underline-offset-2 hover:underline decoration-[#D0D5DD]"
                  style={{ fontSize: "14px", color: "#667085" }}
                >
                  resume
                </Link>
              </a>
            </div>
          </div>
          <motion.div
            className="flex flex-col gap-12 origin-left"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <div className="flex flex-row items-top justify-between">
              <div className="flex flex-col gap-8 w-fit">
                <h1
                  className="inline font-medium"
                  style={{ fontSize: "18px", color: "#182230" }}
                >
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

                <div className="flex flex-col gap-5">
                  <h1
                    className="inline font-medium leading-normal max-w-[500px]"
                    style={{ fontSize: "14px", color: "#667085" }}
                  >
                    {" "}
                    hello hello! welcome to my
                    <span
                      className="inline font-medium"
                      style={{ color: "#182230" }}
                    >
                      {" "}
                      digital canvas.{" "}
                    </span>
                    creating is what i do best, and right now, I’m crafting
                    things at Plum HQ.
                  </h1>
                  <h1
                    className="inline font-medium leading-normal max-w-[500px]"
                    style={{ fontSize: "14px", color: "#667085" }}
                  >
                    outside of work, i’m all about brewing{" "}
                    <span
                      className="inline font-medium hover:underline trasition duration-300 cursor-pointer"
                      style={{ color: "#182230" }}
                    >
                      {" "}
                      coffee
                    </span>
                    , taking care of my{" "}
                    <span
                      className="inline font-medium hover:underline trasition duration-300 cursor-pointer"
                      style={{ color: "#182230" }}
                    >
                      {" "}
                      plants
                    </span>
                    , and{" "}
                    <span
                      className="inline font-medium hover:underline trasition duration-300 cursor-pointer"
                      style={{ color: "#182230" }}
                    >
                      {" "}
                      climbing
                    </span>{" "}
                    (plastic) rocks.
                  </h1>
                  <h1
                    className="inline font-medium leading-normal max-w-[500px]"
                    style={{ fontSize: "14px", color: "#667085" }}
                  >
                    i’ve recently tried my hand at making music. i’m not quite
                    hitting the high notes yet, but it’s a fun journey!
                  </h1>
                </div>
                <div className="flex flex-col gap-10 mt-10">
                  <div className="flex flex-col gap-1">
                    <h1
                      className="inline font-medium"
                      style={{ fontSize: "18px", color: "#182230" }}
                    >
                      hobbies
                    </h1>
                    <h2
                      className="inline font-normal max-w-[500px]"
                      style={{ fontSize: "14px", color: "#98A2B3" }}
                    >
                      i've got quite a few hobbies but honestly that's the best
                      part. trying out new things is always super fun
                    </h2>
                  </div>

                  {/* HOBBIES */}

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col justify-center p-4 rounded-lg"
                      style={{ backgroundColor: "#f9f9f9" }}
                    >
                      {/* HOBBY CARDS */}

                      <div className="aspect-square flex flex-col justify-between h-full">
                        <div className="text-sm text-[#667085]">
                          hobbies / bouldering
                        </div>

                        {/* TAGS

                        <div className="flex gap-2 mb-4">
                          <span className="px-2 py-1 text-xs font-medium text-[#182230] bg-[#D0D5DD] rounded-lg">
                            espresso
                          </span>
                        </div> */}

                        {/* TITLE */}

                        <div className="flex flex-col gap-1">
                          <h2
                            className="font-semibold"
                            style={{ fontSize: "32px", color: "#182230" }}
                          >
                            6a boulder
                          </h2>

                          {/* SUB-TEXT */}

                          <p className="text-sm font-normal text-[#667085]">
                            a nice warmup 6a climb
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
