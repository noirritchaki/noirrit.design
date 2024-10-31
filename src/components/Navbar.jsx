import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { color, motion } from "framer-motion";
import me from "../assets/me.png";
import test from "../assets/test.png";
import styles from "./Navbar.module.css";
import WorkLink from "./WorkLink";
import About from "./About";

const Navbar = () => {
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
                  className="inline font-normal underline-offset-2 decoration-2"
                  style={{ fontSize: "14px", color: "#667085" }}
                >
                  about
                </Link>
              </a>
              <a alt="connect" aria-label="Go to connect" href="/">
                <Link
                  to="/connect"
                  className="inline font-normal underline-offset-2 decoration-2"
                  style={{ fontSize: "14px", color: "#667085" }}
                >
                  connect
                </Link>
              </a>
              <a alt="resume" aria-label="Go to resume" href="/">
                <Link
                  to="/resume"
                  className="inline font-normal underline-offset-2 decoration-2"
                  style={{ fontSize: "14px", color: "#667085" }}
                >
                  resume
                </Link>
              </a>
            </div>
          </div>
          <motion.div
            className="flex flex-col gap-14 origin-left"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <div className="flex flex-row items-top justify-between">
              <div className="flex flex-col gap-1 w-fit">
                <h1
                  className="inline font-medium"
                  style={{ fontSize: "18px", color: "#182230" }}
                >
                  noirrit chaki
                </h1>
                <h2
                  className="inline font-normal"
                  style={{ fontSize: "18px", color: "#667085" }}
                >
                  <span>product designer at </span>
                  <a
                    target="_blank"
                    href="https://www.plumhq.com/"
                    className="underline decoration-[#D0D5DD]  hover:decoration-[#667085]"
                  >
                    PlumHQ
                  </a>
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
                creating is what i do best, and right now, I’m crafting things
                at Plum HQ.
              </h1>
              <h1
                className="inline font-medium leading-normal max-w-[500px]"
                style={{ fontSize: "14px", color: "#667085" }}
              >
                outside of work, i’m all about brewing{" "}
                <span
                  className="inline font-medium hover:underline trasition duration-300"
                  style={{ color: "#182230" }}
                >
                  {" "}
                  coffee
                </span>
                , taking care of my{" "}
                <span
                  className="inline font-medium hover:underline trasition duration-300"
                  style={{ color: "#182230" }}
                >
                  {" "}
                  plants
                </span>
                , and{" "}
                <span
                  className="inline font-medium hover:underline trasition duration-300"
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

            {/* separator  */}

            <div className="w-full border-t border-dashed border-[#D0D5DD] h-0 mt-1 mb-1"></div>

            {/* work section */}

            <div className="z-10 flex flex-col gap-2 w-fit shrink-0">
              <h2
                className="inline font-medium"
                style={{ fontSize: "14px", color: "#667085" }}
              >
                work
              </h2>

              {/* start of the work list */}

              <WorkLink
                showcase={test}
                title="plum health wallet"
                year={2024}
              />

              <WorkLink
                showcase={test}
                title="plum health wallet"
                year={2024}
              />
              <WorkLink
                showcase={test}
                title="plum health wallet"
                year={2024}
              />
            </div>

            {/* side stuff */}

            <div className="z-10 flex flex-col gap-2 w-fit shrink-0">
              <h2
                className="inline font-medium"
                style={{ fontSize: "14px", color: "#667085" }}
              >
                few things i’m enjoying currently
              </h2>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
