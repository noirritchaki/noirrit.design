import logo from "../assets/logo.svg";
import { motion } from "framer-motion";
import me from "../assets/me.png";
import test from "../assets/test.png";
import styles from "./Navbar.module.css";
import WorkLink from "./WorkLink";
// import About from "./About";

const Navbar = () => {
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
              <div className="flex flex-col gap-1 w-fit">
                <h1 className="inline font-medium" style={{ fontSize: "20px" }}>
                  noirrit chaki
                </h1>
                <h2 className="inline font-light" style={{ fontSize: "14px" }}>
                  <span>product designer at </span>
                  <a
                    target="_blank"
                    href="https://www.plumhq.com/"
                    className="underline decoration-zinc-100 underline-offset-2 decoration-2 hover:decoration-gray-300 border-b"
                  >
                    PlumHQ
                  </a>
                </h2>
              </div>
              <div className="flex flex-row gap-4">
                <a
                  href="About.jsx"
                  className="inline font-light text-zinc-400 underline decoration-zinc-100 underline-offset-2 decoration-2 hover:decoration-gray-300"
                  style={{ fontSize: "14px" }}
                >
                  about
                </a>
                <a
                  href="/connect"
                  className="inline font-light text-zinc-400 underline decoration-zinc-100 underline-offset-2 decoration-2 hover:decoration-gray-300"
                  style={{ fontSize: "14px" }}
                >
                  connect
                </a>
              </div>
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

            {/* separator  */}

            <div className="w-1/12 h-px bg-gray-200"></div>

            {/* work section */}

            <div className="z-10 flex flex-col gap-2 w-fit shrink-0">
              <h2 className="inline font-semibold" style={{ fontSize: "14px" }}>
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
              <h2 className="inline font-semibold" style={{ fontSize: "14px" }}>
                stuff i do on the side
              </h2>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
