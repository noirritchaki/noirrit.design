import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { color, motion } from "framer-motion";
import me from "../assets/me.png";
import test from "../assets/test.png";
import styles from "./Navbar.module.css";
import WorkLink from "./WorkLink";
import About from "./About";
import game from "../assets/video-game.svg";
import album from "../assets/album.svg";
import book from "../assets/book.svg";
import pheart from "../assets/plumheart.svg";
import homeme from "../assets/home-me.jpg";
import redplum from "../assets/red-plum.svg";
import arrowBack from "../assets/arrow.svg";

const haikus = [
  "An old silent pond\nA frog jumps into the pond—\nSplash! Silence again.\n\n~Matsuo Bashō",
  "Autumn moonlight—\na worm digs silently\ninto the chestnut.\n\n~Matsuo Bashō",
  "Winter seclusion—\nListening, that evening,\nTo the rain in the mountain.\n\n~Matsuo Bashō",
  "The first cold shower\neven the monkey seems to want\na little coat of straw.\n\n~Matsuo Bashō",
  "Over the wintry,\nForest, winds howl in rage\nWith no leaves to blow.\n\n~Matsuo Bashō",
  "Summer grasses—\nall that remains of warriors’\ndreams.\n\n~Matsuo Bashō",
];

const HaikuPage = () => {
  const [haiku, setHaiku] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * haikus.length);
    setHaiku(haikus[randomIndex]);
  }, []);

  return (
    <div className="md:flex md:flex-row md:justify-center">
      <div className="md:min-w-[512px] md:w-full md:max-w-xl">
        <div className="flex flex-col justify-start max-w-2xl px-8 py-36">
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
                src={homeme}
                alt="logo"
                className="rounded-[16px] shadow-lg hover:shadow-xl hover:scale-105 hover:rotate-3 transition-transform duration-300 ease-in-out"
              />
            </a>
            <div className="flex flex-row gap-4">
              <a alt="about" aria-label="Go to about">
                <Link
                  to="/about"
                  className="inline font-normal underline-offset-2 hover:underline decoration-[#D0D5DD]"
                  style={{ fontSize: "14px", color: "#667085" }}
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
            className="flex flex-col gap-16 origin-left"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <p className="text-gray-700 whitespace-pre-line italic">{haiku}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HaikuPage;
