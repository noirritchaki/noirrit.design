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
import ConstructionFAB from "./ConstructionFAB";
import { LinkPreview } from "./LinkPreview";
import arrowBack from "../assets/arrow.svg";
import { DEPLOYMENT_URL } from "../constants";
import CurrentlyPlaying from "./CurrentlyPlaying";

// https://jet2holiday.vercel.app/api/currently-playing

// {"isPlaying":true,"title":"Kyoto","artist":"Angara","album":"Rwanda","albumImage":"https://i.scdn.co/image/ab67616d0000b273de0cefe7cd9e5be4390f5a4a","songUrl":"https://open.spotify.com/track/0tPk6OPi760BD6C5WtqcqG"}

const Navbar = () => {
  return (
    <div className="md:flex md:flex-row md:justify-center">
      <div className="md:min-w-[512px] md:w-full md:max-w-xl">
        <div className="flex flex-col justify-start max-w-2xl px-8 py-36">
          <div className="flex flex-col w-full mb-12">
            <CurrentlyPlaying />
            <div className="flex items-center w-full h-8 mb-12 group">
              {/* <div className="relative">
              <div className="absolute -top-16 -left-[42px] flex flex-col items-center gap-1">
                <Link
                  to="/"
                  className="flex flex-col items-center gap-1 text-[#667085] text-sm hover:text-[#182230] transition-colors"
                >
                  <span className="whitespace-nowrap text-center font-caveat text-[16px] tracking-tighter">
                    go back
                  </span>
                  <img src={arrowBack} alt="go back" className="w-8 h-8" />
                </Link>
              </div>
            </div> */}
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
                    className="inline font-normal underline-offset-2 hover:underline decoration-[#182230]"
                    style={{ fontSize: "14px", color: "#667085" }}
                  >
                    about
                  </Link>
                </a>
                <a alt="connect" aria-label="Go to connect">
                  <Link
                    to="/connect"
                    className="inline font-normal underline-offset-2 hover:underline decoration-[#182230]"
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
                    className="inline font-normal underline-offset-2 hover:underline decoration-[#182230]"
                    style={{ fontSize: "14px", color: "#667085" }}
                  >
                    resume
                  </Link>
                </a>
              </div>
            </div>
          </div>
          <motion.div
            className="flex flex-col gap-16 origin-left"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <div className="flex flex-row items-top justify-between">
              <div className="flex flex-col gap-0 w-fit">
                <h1
                  className="inline font-medium"
                  style={{ fontSize: "20px", color: "#182230" }}
                >
                  noirrit chaki
                </h1>
                <h2
                  className="font-normal flex flex-row gap-2 items-center"
                  style={{ fontSize: "16px", color: "#667085" }}
                >
                  <span>product designer at </span>
                  <LinkPreview url={"https://www.plumhq.com/"} isExternal>
                    <div className="flex flex-row gap-2 items-center shadow-inner pl-1 pr-2 py-1 rounded-[8px]">
                      <img className="pheart w-6 h-6" src={redplum} />
                      {/* <a
                      target="_blank"
                      href="https://www.plumhq.com/"
                      className=""
                    > */}
                      <span className="text-black">Plum</span>
                    </div>
                  </LinkPreview>
                </h2>
              </div>
              {/* <div className="flex flex-row gap-4">
                <Link
                  to="/about"
                  className="inline font-light text-zinc-400 underline decoration-zinc-100 underline-offset-2 decoration-2 hover:decoration-gray-300"
                  style={{ fontSize: "14px" }}
                >
                  about
                </Link>
                <a
                  href="#"
                  className="inline font-light text-zinc-400 underline decoration-zinc-100 underline-offset-2 decoration-2 hover:decoration-gray-300"
                  style={{ fontSize: "14px" }}
                >
                  connect
                </a>
              </div> */}
            </div>
            {/* <div className="flex justify-center">
              <img
                src={me}
                alt="an image of me"
                width={512}
                height={512}
                className="object-cover"
              />
            </div> */}

            <div className="flex flex-col gap-6">
              <h1
                className="inline font-regular leading-normal max-w-[500px]"
                style={{ fontSize: "16px", color: "#667085" }}
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
                creating is what i do best, and right now, i’m crafting
                experiences at Plum.
              </h1>
              <h1
                className="inline font-regular leading-normal max-w-[500px]"
                style={{ fontSize: "16px", color: "#667085" }}
              >
                take a look at some of my{" "}
                <LinkPreview
                  className="inline font-medium hover:underline trasition duration-300 cursor-pointer !text-[#182230]"
                  url={`${DEPLOYMENT_URL}/about`}
                >
                  {" "}
                  hobbies,
                </LinkPreview>
                <LinkPreview
                  className="inline font-medium hover:underline trasition duration-300 cursor-pointer !text-[#182230]"
                  url={`${DEPLOYMENT_URL}/haiku`}
                >
                  {" "}
                  haiku {""}
                </LinkPreview>
                or just{" "}
                <LinkPreview
                  className="inline font-medium hover:underline trasition duration-300 cursor-pointer !text-[#182230]"
                  url={"/connect"}
                >
                  {" "}
                  get in touch.
                </LinkPreview>{" "}
                {/* (plastic) rocks. */}
              </h1>
              <h1
                className="inline font-regular leading-normal max-w-[500px]"
                style={{ fontSize: "16px", color: "#667085" }}
              >
                when i'm not in front of my laptop you'll either find me in the{" "}
                <LinkPreview
                  className="inline font-medium hover:underline trasition duration-300 cursor-pointer !text-[#182230]"
                  url={"/haiku"}
                >
                  gym,{" "}
                </LinkPreview>
                <LinkPreview
                  className="inline font-medium hover:underline trasition duration-300 cursor-pointer !text-[#182230]"
                  url={"/haiku"}
                >
                  climbing station
                </LinkPreview>{" "}
                or stuck in{" "}
                <LinkPreview
                  className="inline font-medium hover:underline trasition duration-300 cursor-pointer !text-[#182230]"
                  url={"/haiku"}
                >
                  bangalore traffic.
                </LinkPreview>
              </h1>
            </div>

            {/* separator  */}

            {/* <div className="w-full border-t border-dashed border-[#D0D5DD] h-0 mt-1 mb-1"></div> */}

            {/* work section */}

            <div className="z-10 flex flex-col gap-2 w-full shrink-0 mt-8">
              <h2
                className="inline font-medium mb-[16px] bg-[#dcfce7] px-1 w-fit"
                style={{ fontSize: "16px", color: "#404040" }}
              >
                work
              </h2>

              {/* start of the work list */}
              <Link to="/healthCheckup">
                <WorkLink showcase={test} title="health checkup" year={2025} />
              </Link>
              <Link to="/plumWallet">
                <WorkLink
                  showcase={test}
                  title="plum health wallet"
                  year={2024}
                />
              </Link>
              {/* <WorkLink
                showcase={test}
                title="plum health wallet"
                year={2024}
              /> */}
            </div>

            {/* side stuff */}

            {/* <div className="z-10 flex flex-col gap-2 w-fit shrink-0">
              <h2
                className="inline font-normal mb-[16px]"
                style={{ fontSize: "14px", color: "#667085" }}
              >
                few things i’m enjoying currently
              </h2>
              <div className="flex flex-col gap-8">
                <div className="flex flex-row gap-2">
                  <img src={game} />
                  <div className="flex flex-col gap-1">
                    <h2
                      className="inline font-medium underline"
                      style={{ fontSize: "14px", color: "#182230" }}
                    >
                      metaphor: refantazio
                    </h2>
                    <p
                      className="inline font-normal"
                      style={{ fontSize: "14px", color: "#667085" }}
                    >
                      video game
                    </p>
                  </div>
                </div>

                <div className="flex flex-row gap-2">
                  <img src={album} />
                  <div className="flex flex-col gap-1">
                    <h2
                      className="inline font-medium underline"
                      style={{ fontSize: "14px", color: "#182230" }}
                    >
                      ten days
                    </h2>
                    <p
                      className="inline font-normal"
                      style={{ fontSize: "14px", color: "#667085" }}
                    >
                      fred again..
                    </p>
                  </div>
                </div>

                <div className="flex flex-row gap-2">
                  <img src={book} />
                  <div className="flex flex-col gap-1">
                    <h2
                      className="inline font-medium underline"
                      style={{ fontSize: "14px", color: "#182230" }}
                    >
                      world atlas of coffee
                    </h2>
                    <p
                      className="inline font-normal"
                      style={{ fontSize: "14px", color: "#667085" }}
                    >
                      james hoffman
                    </p>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div className="flex flex-col">
              <h2
                className="inline font-medium mb-[16px]"
                style={{ fontSize: "16px", color: "#404040" }}
              >
                connect
              </h2>
              <div className="flex flex-row gap-2 py-3">
                <div className="flex flex-col gap-3">
                  <h2
                    className="inline font-normal hover:underline trasition duration-300 cursor-pointer"
                    style={{ fontSize: "16px", color: "#182230" }}
                  >
                    email
                  </h2>
                  <h2
                    className="inline font-normal hover:underline trasition duration-300 cursor-pointer"
                    style={{ fontSize: "16px", color: "#182230" }}
                  >
                    linkedin
                  </h2>
                  <h2
                    className="inline font-normal hover:underline trasition duration-300 cursor-pointer"
                    style={{ fontSize: "16px", color: "#182230" }}
                  >
                    twitter
                  </h2>
                  <h2
                    className="inline font-normal hover:underline trasition duration-300 cursor-pointer"
                    style={{ fontSize: "16px", color: "#182230" }}
                  >
                    github
                  </h2>
                  <h2
                    className="inline font-normal hover:underline trasition duration-300 cursor-pointer"
                    style={{ fontSize: "16px", color: "#182230" }}
                  >
                    instagram
                  </h2>
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
      <ConstructionFAB />
    </div>
  );
};

export default Navbar;
