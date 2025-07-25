import React from "react";
import logo from "../assets/logo.svg";
import { motion } from "framer-motion";
import test from "../assets/test.png";
import { Link } from "react-router-dom";
import homeme from "../assets/home-me.jpg";
import aboutme from "../assets/about-me.svg";
import Hobbies from "./Hobbies";
import Pink from "../assets/pink.png";
import Sketch from "../assets/sketchy.png";
import Slab from "../assets/slab.png";
import { image, title } from "framer-motion/client";
import Wait from "../assets/wait.png";
import PostIt from "../assets/postit.png";
import Zomaland from "../assets/zomaland.png";
import Yellow from "../assets/yellow-dyno.png";
import EasyPeasy from "../assets/easy-peasy.png";
import Depression from "../assets/depression.png";
import Green from "../assets/greengoblin.png";
import White from "../assets/whiteparade.png";
import Orange from "../assets/underorange.png";
import DontCall from "../assets/dontcallme.png";
import Big5 from "../assets/big5.png";
import BlueO from "../assets/blue-o.png";
import arrowBack from "../assets/arrow.svg";
import GoBack from "./GoBack";
import CurrentlyPlaying from "./CurrentlyPlaying";

const About = () => {
  const hobbies = [
    {
      image: Pink,
      title: "Flag Out",
      subtitle: "Bouldering",
      videoUrl: "/videos/FlagOut.MP4",
    },
    {
      image: Orange,
      title: "Under Orange",
      videoUrl: "/videos/underorange.MOV",
    },
    {
      image: DontCall,
      title: "Don't Call Me",
      videoUrl: "/videos/dontcallme.mp4",
    },
    {
      image: Sketch,
      title: "Sketchy Top",
      subtitle: "Bouldering",
      videoUrl: "/videos/sketchy-top.MP4",
    },
    {
      image: Big5,
      title: "The Big 5",
      videoUrl: "/videos/bigs5.MP4",
    },
    {
      image: Wait,
      title: "Wait",
      videoUrl: "/videos",
    },
    {
      image: BlueO,
      title: "Blue-O",
      videoUrl: "/videos/blue.o.MP4",
    },
    {
      image: Slab,
      title: "Everyone Loves Slab",
      videoUrl: "/videos/slab-lol.MOV",
    },
    {
      image: PostIt,
      title: "Post It Note",
      videoUrl:
        "https://drive.google.com/file/d/1AHr-GYyIA1Hgkk9qmpYloU6tihrr00_r/view?usp=drive_link",
    },
    { image: Zomaland, title: "Zomaland", videoUrl: "/videos/zomaland.MOV" },
    { image: Yellow, title: "All Yellow", videoUrl: "/videos/yellow-dyno.MOV" },
    {
      image: EasyPeasy,
      title: "Easy Peasy",
      videoUrl: "/videos/easy-peasy.MOV",
    },
    {
      image: Depression,
      title: "Depression",
      videoUrl: "/videos/depression.MOV",
    },
    {
      image: Green,
      title: "Green Goblin",
      videoUrl: "/videos/greengoblin.MOV",
    },
    {
      image: White,
      title: "White Parade",
      videoUrl: "/videos/white-parade.MP4",
    },
  ];
  return (
    <div className="md:flex md:flex-row md:justify-center">
      <div className="md:min-w-[512px] md:w-full md:max-w-xl">
        <div className="flex flex-col justify-start max-w-2xl px-8 py-36">
          <div className="relative">
            <CurrentlyPlaying />
          </div>
          <div className="flex items-center w-full h-8 mb-12 group">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: -6, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                className="absolute -top-16 -left-[42px] flex flex-col items-center gap-1"
              >
                <GoBack />
              </motion.div>
            </div>
            <a
              alt="logo"
              aria-label="Go to homepage"
              href="/"
              className="mr-10"
            >
              <img
                width="56"
                height="56"
                src={aboutme}
                alt="logo"
                className="rounded-[16px] shadow-lg hover:shadow-xl hover:scale-105 hover:rotate-3 transition-transform duration-300 ease-in-out"
              />
            </a>
            <div className="flex flex-row gap-4">
              <a alt="about" aria-label="Go to about">
                <Link
                  to="/about"
                  className="inline font-normal underline-offset-2 underline decoration-[#667085]"
                  style={{ fontSize: "14px", color: "#182230" }}
                >
                  about
                </Link>
              </a>
              <a alt="connect" aria-label="Go to connect">
                <Link
                  to="/connect"
                  className="inline font-normal underline-offset-2 hover:underline decoration-[#D0D5DD]"
                  style={{ fontSize: "14px", color: "#667085" }}
                >
                  connect
                </Link>
              </a>
              <a alt="resume" aria-label="Go to resume">
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <div className="flex flex-row items-top justify-between">
              <div className="flex flex-col gap-8 w-fit">
                {/* <h1
                  className="inline font-medium"
                  style={{ fontSize: "18px", color: "#182230" }}
                >
                  about
                </h1> */}
                <div className="flex flex-col pb-2">
                  <h2
                    className="inline font-medium"
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
                    className="inline font-regular leading-normal max-w-[500px]"
                    style={{ fontSize: "16px", color: "#667085" }}
                  >
                    {" "}
                    hello hello! i'm
                    <span
                      className="inline font-medium"
                      style={{ color: "#182230" }}
                    >
                      {" "}
                      noirrit,{" "}
                    </span>
                    a product designer at Plum where we make insurance and
                    healthcare more accessible, easy and inclusive for everyone!
                  </h1>
                  <h1
                    className="inline font-regular leading-normal max-w-[500px]"
                    style={{ fontSize: "16px", color: "#667085" }}
                  >
                    i'm also known to randomly try something new. my latest
                    obsession has been rock climbing.{" "}
                  </h1>
                  <h1
                    className="inline font-regular leading-normal max-w-[500px]"
                    style={{ fontSize: "16px", color: "#667085" }}
                  >
                    apart from all this i also spend a lot of time brewing(and
                    consuming) a lot of coffee, shoot fun videos and learning
                    how to make some house music!
                  </h1>
                </div>
                <div className="flex flex-col gap-6 mt-10">
                  <div className="flex flex-col gap-1">
                    <h1
                      className="inline font-medium bg-[#dcfce7] px-1 w-fit"
                      style={{ fontSize: "16px", color: "#404040" }}
                    >
                      hobbies
                    </h1>
                    {/* <h2
                      className="inline font-normal max-w-[500px]"
                      style={{ fontSize: "16px", color: "#667085" }}
                    >
                      i've got quite a few hobbies but honestly that's the best
                      part. trying out new things is always super fun
                    </h2> */}
                  </div>

                  {/* HOBBIES */}

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {hobbies.map((hobby, index) => (
                      <Hobbies
                        key={index}
                        image={hobby.image}
                        title={hobby.title}
                        videoUrl={hobby.videoUrl}
                      />
                    ))}
                  </div>

                  {/* <div className="grid grid-cols-1 grid-rows-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2">

                    CARD 1: 
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col justify-center p-4 rounded-lg break-inside-avoid row-span-1"
                      style={{ backgroundColor: "#f9f9f9" }}
                    >

                      HOBBY CARDS: 

                      <div className="aspect-square flex flex-col justify-between h-full cursor-nesw-resize">
                        <div className="text-sm text-[#667085]">
                          hobbies / bouldering
                        </div>

                        TITLE 

                        <div className="flex flex-col gap-1">
                          <h2
                            className="font-semibold"
                            style={{ fontSize: "32px", color: "#182230" }}
                          >
                            6a boulder
                          </h2>

                          SUB-TEXT 

                          <p className="text-sm font-normal text-[#667085]">
                            a nice warmup 6a climb
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    CARD 2:

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col justify-center p-4 rounded-lg break-inside-avoid row-span-2"
                      style={{ backgroundColor: "#f9f9f9" }}
                    >

                      HOBBY CARDS:

                      <div className="aspect-square flex flex-col justify-between h-full cursor-nesw-resize">
                        <div className="text-sm text-[#667085]">
                          hobbies / video
                        </div>

                        TITLE 

                        <div className="flex flex-col gap-1">
                          <h2
                            className="font-semibold"
                            style={{ fontSize: "32px", color: "#182230" }}
                          >
                            camping
                          </h2>

                          SUB-TEXT 

                          <p className="text-sm font-normal text-[#667085]">
                            a short video of my camping outing
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    CARD 3:

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col justify-center p-4 rounded-lg break-inside-avoid row-span-1"
                      style={{ backgroundColor: "#f9f9f9" }}
                    >

                      HOBBY CARDS:

                      <div className="aspect-square flex flex-col justify-between h-full cursor-nesw-resize">
                        <div className="text-sm text-[#667085]">
                          hobbies / bouldering
                        </div>

                        TITLE 

                        <div className="flex flex-col gap-1">
                          <h2
                            className="font-semibold"
                            style={{ fontSize: "32px", color: "#182230" }}
                          >
                            6a boulder 3
                          </h2>

                          SUB-TEXT 

                          <p className="text-sm font-normal text-[#667085]">
                            a nice warmup 6a climb
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    CARD 4:

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col justify-center p-4 rounded-lg break-inside-avoid row-span-2"
                      style={{ backgroundColor: "#f9f9f9" }}
                    >
                      HOBBY CARDS:

                      <div className="aspect-square flex flex-col justify-between h-full cursor-nesw-resize">
                        <div className="text-sm text-[#667085]">
                          hobbies / bouldering
                        </div>

                        TITLE 

                        <div className="flex flex-col gap-1">
                          <h2
                            className="font-semibold"
                            style={{ fontSize: "32px", color: "#182230" }}
                          >
                            6a boulder 4
                          </h2>

                          SUB-TEXT 

                          <p className="text-sm font-normal text-[#667085]">
                            a nice warmup 6a climb
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    CARD 5:

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col justify-center p-4 rounded-lg break-inside-avoid row-span-2"
                      style={{ backgroundColor: "#f9f9f9" }}
                    >

                      HOBBY CARDS: 

                      <div className="aspect-square flex flex-col justify-between h-full cursor-nesw-resize">
                        <div className="text-sm text-[#667085]">
                          hobbies / bouldering
                        </div>

                        TITLE 

                        <div className="flex flex-col gap-1">
                          <h2
                            className="font-semibold"
                            style={{ fontSize: "32px", color: "#182230" }}
                          >
                            6a boulder 5
                          </h2>

                          SUB-TEXT 

                          <p className="text-sm font-normal text-[#667085]">
                            a nice warmup 6a climb
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    CARD 6:

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col justify-center p-4 rounded-lg break-inside-avoid row-span-1"
                      style={{ backgroundColor: "#f9f9f9" }}
                    >
                      
                      HOBBY CARDS 

                      <div className="aspect-square flex flex-col justify-between h-full cursor-nesw-resize">
                        <div className="text-sm text-[#667085]">
                          hobbies / bouldering
                        </div>

                        TITLE 

                        <div className="flex flex-col gap-1">
                          <h2
                            className="font-semibold"
                            style={{ fontSize: "32px", color: "#182230" }}
                          >
                            6a boulder 6
                          </h2>

                          SUB-TEXT 

                          <p className="text-sm font-normal text-[#667085]">
                            a nice warmup 6a climb
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>  */}
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
