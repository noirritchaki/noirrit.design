import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutme from "../assets/about-me.svg";
import connectme from "../assets/connect-me.JPG";

const Connect = () => {
  return (
    <div className="md:flex md:flex-row md:justify-center">
      <div className="md:min-w-[512px] md:w-full md:max-w-xl">
        <div className="flex flex-col justify-start max-w-2xl px-8 py-36">
          {/* Navigation */}
          <div className="flex items-center w-full h-8 mb-12 group">
            <a href="/" className="mr-10">
              <img
                width="56"
                height="56"
                src={connectme}
                alt="logo"
                className="rounded-[16px] shadow-lg hover:shadow-xl hover:scale-105 hover:rotate-3 transition-transform duration-300 ease-in-out"
              />
            </a>
            <div className="flex flex-row gap-4">
              <Link
                to="/about"
                className="text-[#667085] font-normal underline-offset-2 hover:underline decoration-[#D0D5DD] text-sm"
              >
                about
              </Link>
              <Link
                to="/connect"
                className="text-[#182230] font-normal underline-offset-2 underline decoration-[#667085] text-sm"
              >
                connect
              </Link>
              <a
                href="https://read.cv/noirrit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#667085] font-normal underline-offset-2 hover:underline decoration-[#D0D5DD] text-sm"
              >
                resume
              </a>
            </div>
          </div>

          {/* Motion Section */}
          <motion.div
            className="flex flex-col gap-12 origin-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-6">
              <h2 className="inline font-medium" style={{ fontSize: "20px" }}>
                connect
              </h2>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-4">
              <a
                href="mailto:noirrit.work@gmail.com"
                className="inline font-normal hover:underline trasition duration-300 cursor-pointer"
                style={{ fontSize: "16px", color: "#182230" }}
              >
                email
              </a>
              <a
                href="https://twitter.com/jontychaki"
                target="_blank"
                rel="noopener noreferrer"
                className="inline font-normal hover:underline trasition duration-300 cursor-pointer"
                style={{ fontSize: "16px", color: "#182230" }}
              >
                twitter
              </a>

              <a
                href="https://linkedin.com/in/noirritchaki"
                target="_blank"
                rel="noopener noreferrer"
                className="inline font-normal hover:underline trasition duration-300 cursor-pointer"
                style={{ fontSize: "16px", color: "#182230" }}
              >
                linkedin
              </a>

              <a
                href="https://github.com/noirritchaki"
                target="_blank"
                rel="noopener noreferrer"
                className="inline font-normal hover:underline trasition duration-300 cursor-pointer"
                style={{ fontSize: "16px", color: "#182230" }}
              >
                github
              </a>
              <a
                href="https://instagram.com/jontychaki"
                target="_blank"
                rel="noopener noreferrer"
                className="inline font-normal hover:underline trasition duration-300 cursor-pointer"
                style={{ fontSize: "16px", color: "#182230" }}
              >
                instagram
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
